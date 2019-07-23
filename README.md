# baselazyload
适用于图片懒加载

```
import lazyload form 'baselazyload'

lazyload({
    container
    el,
    src,
    threshold
})
```

## container
懒加载的图片所在的滚动容器 默认是document

## el
监听的图片元素，必须是img标签

## scr
需要加载的真实图片url

## threshold
差值 默认为0