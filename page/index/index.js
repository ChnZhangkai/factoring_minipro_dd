Page({
    data: {
        h5url: null
    },
    onLoad() {
        var that = this
        that.setData({
            // h5url: 'https://wwww.baidu.com/'
            h5url: 'http://localhost:8080/#/'
        })
    }
})