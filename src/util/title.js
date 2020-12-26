import MetaHandler from "../components/MetaHandler";

function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function' ? title.call(vm) : title
    }
}

export default {
    computed: {
        title() {
            return getTitle(this)
        },
    },
    watch: {
        title: function(val) {
            document.title = `${val} | HITMAPS™`;
            MetaHandler.setOpengraphTag('title', document.title);
        },
    },
    mounted() {
        if (this.title) {
            document.title = `${this.title} | HITMAPS™`;
            MetaHandler.setOpengraphTag('title', document.title);
        }
    },
}
