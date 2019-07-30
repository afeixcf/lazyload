import visibleObserver from 'dom-visible-observer'
import './index.css'

function lazyload({
    container = document,
    el,
    src,
    threshold = 0,
    effect = ''
}) {
    const errorMsg = checkParamIterator(
        checkElTag,
        checkImgSrc,
        checkThreshold
    )({ el, src, threshold })

    if (errorMsg) return

    let defaultSrc = el.src

    return visibleObserver({
        container,
        el,
        threshold,
        show() {
            if (el.src !== defaultSrc) return
            proxyImage(src, () => {
                el.src = src
                if (effect === 'fadein') {
                    el.style.opacity = 0
                    setTimeout(() => {
                        el.className +=
                            ' lazyload-fadein'
                        el.style.opacity = 1
                    }, 50)
                } 
            })
        },
        hide() {}
    })
}

function proxyImage(src, cb) {
    let Img = new Image()
    Img.src = src
    Img.onload = cb
}

function checkElTag(param) {
    const { el } = param
    if (
        !el ||
        !el.tagName ||
        el.tagName.toLowerCase() !== 'img'
    ) {
        return (
            'missing el parameter or el is not a ' +
            new Image().toString()
        )
    }
}
function checkImgSrc(param) {
    const { src } = param
    if (
        !src ||
        !/^(http:|data:|https:)/.test(src)
    ) {
        return 'missing src parameter or src is not a correct Picture address'
    }
}
function checkThreshold(param) {
    if (typeof param.threshold !== 'number') {
        return 'threshold must be a number'
    }
}
function checkParamIterator() {
    let args = [].slice.call(arguments)
    let msg = '';
    return function(param) {
        for (let i = 0; i < args.length; i++) {
            msg = args[i](param)
            msg && console.error(msg)
        }
        return msg;
    }
}

export default lazyload
