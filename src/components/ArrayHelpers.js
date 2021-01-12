export default class {
    static moveElement(elements, oldIndex, newIndex) {
        let element = elements[oldIndex];
        elements.splice(oldIndex, 1);
        elements.splice(newIndex, 0, element);

        return elements;
    }

    static deleteElementByIndex(elements, index) {
        elements.splice(index, 1);

        return elements;
    }

    static deleteElement(elements, element) {
        const index = elements.indexOf(element);
        if (index > -1) {
            elements.splice(index, 1);
        }

        return elements;
    }
}