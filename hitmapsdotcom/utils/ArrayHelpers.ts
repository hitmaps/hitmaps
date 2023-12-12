export default class {
    static moveElement(elements: Array<any>, oldIndex: number, newIndex: number) {
        let element = elements[oldIndex];
        elements.splice(oldIndex, 1);
        elements.splice(newIndex, 0, element);

        return elements;
    }

    static deleteElementByIndex(elements: Array<any>, index: number) {
        elements.splice(index, 1);

        return elements;
    }

    static deleteElement(elements: Array<any>, element: any) {
        const index = elements.indexOf(element);
        if (index > -1) {
            elements.splice(index, 1);
        }

        return elements;
    }
}