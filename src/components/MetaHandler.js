export default class {
    static setOpengraphTag(name, value) {
        const existingTag = document.querySelector(`meta[property="og:${name}"]`);
        if (existingTag) {
            existingTag.remove();
        }

        let link = document.createElement('meta');
        link.setAttribute('property', `og:${name}`);
        link.content = value;
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    static setMetaTag(name, value) {
        const existingTag = document.querySelector(`meta[name="${name}"]`);
        if (existingTag) {
            existingTag.remove();
        }

        let link = document.createElement('meta');
        link.setAttribute('name', name);
        link.content = value;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
