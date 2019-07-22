import visibleObserver from 'dom-visible-observer'
import './index.css'
// visibleObserver({
//     el: document.getElementById('lazy'),
//     show() {
//         console.log('show')
//     },
//     hide() {
//         console.log('hide')
//     }
// })
// visibleObserver({
//     container: document.querySelector('.scroll-container'),
//     el: document.getElementById('lazy2'),
//     show() {
//         console.log('show2')
//     },
//     hide() {
//         console.log('hide2')
//     }
// })

function lazyload({
    container = document,
    el,
    defaultSrc,
    src,
    threshold = 0
}) {
    return visibleObserver({
        container,
        el,
        threshold,
        show() {
            if (el.src !== defaultSrc) return
            proxyImage(src, () => {
                el.src = src
                el.style.opacity = 0

                setTimeout(() => {
                    el.className += ' lazyload-fadein'
                    el.style.opacity = 1
                }, 50)
            })
        },
        hide() {
        }
    })
}

function proxyImage(src, cb) {
    let Img = new Image()
    Img.src = src
    Img.onload = cb
}

export default lazyload
