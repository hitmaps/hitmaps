import MetaHandler from "../components/MetaHandler";

function getTitle(vm) {
    const { pageTitle } = vm.$options
    if (pageTitle) {
        return typeof pageTitle === 'function' ? pageTitle.call(vm) : pageTitle
    }
}

export default {
    computed: {
        pageTitle() {
            return getTitle(this)
        },
    },
    watch: {
        pageTitle: function(val) {
            document.title = `${val} | HITMAPS™`;
            MetaHandler.setOpengraphTag('title', document.title);
        },
    },
    mounted() {
        if (this.pageTitle) {
            document.title = `${this.pageTitle} | HITMAPS™`;
            MetaHandler.setOpengraphTag('title', document.title);
        }
    },
}
