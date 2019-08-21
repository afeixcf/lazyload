import lazyload from './index'

lazyload({
    el: document.getElementById('lazy'),
    src:
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563778106613&di=4765b8375f87ab9d8396dade680c8ccd&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F27%2F20161127122657_ZTLX8.thumb.700_0.jpeg',
    threshold: 100,
    effect: 'fadein'
})

document.write('<h1>Hell Wo</h1>')
