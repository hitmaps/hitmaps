export default class {
    /**
     * Also sets the appropriate Twitter tag if matches
     */
    static setOpengraphTag(name, value) {
        this._innerSetTag('property', `og:${name}`, value);

        if (['title', 'url', 'description', 'image'].includes(name)) {
            this.setTwitterTag(name, value);
        }
    }

    static setTwitterTag(name, value) {
        this._innerSetTag('name', `twitter:${name}`, value);
    }

    static setMetaTag(name, value) {
        this._innerSetTag('name', name, value);
    }

    /**
     * Should never be called outside of this class
     */
    static _innerSetTag(attribute, key, value) {
        const existingTag = document.querySelector(`meta[${attribute}="${key}"`);
        if (existingTag) {
            existingTag.remove();
        }

        let link = document.createElement('meta');
        link.setAttribute(attribute, key);
        link.content = value;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
