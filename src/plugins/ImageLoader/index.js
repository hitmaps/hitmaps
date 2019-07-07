export default {
    install(vue, opts) {
        this.test("data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=")
        vue.directive("webp", (el, binding, vnode) => {
            if(vnode.tag == "img") {
                if(this.webpSupport) {
                    el.src = el.src.replace(/(jpg|png)/g, "webp")
                }
            } else {
                if(el.style.backgroundImage) {
                    el.style.backgroundImage = el.style.backgroundImage.replace(/(jpg|png)/g, "webp")
                } else {
                    el.style.background = el.style.background.replace(/(jpg|png)/g, "webp")
                }
            }
        })
    },

    test(uri) {
        var img = new Image();

        img.onload = () => this.webpSupport = true
        img.onerror = () => this.webpSupport = false
        img.src = uri;
    }
}