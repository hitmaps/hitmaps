import MetaHandler from "../components/MetaHandler.js";

export default {
    mounted() {
        MetaHandler.setOpengraphTag('url', document.location);
    },
}
