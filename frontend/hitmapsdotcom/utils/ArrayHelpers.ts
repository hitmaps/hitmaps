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
        } else {
            console.warn('[ArrayHelpers.deleteElement] Could not find an element to remove!');
        }

        return elements;
    }

    static deleteElementByFilter(elements: Array<any>, filterFunction: (n: any) => any|undefined): Array<any> {
        const elementsToRemove = elements.filter(filterFunction);
        if (elementsToRemove.length === 0) {
            return elements;
        }

        elementsToRemove.forEach(element => this.deleteElement(elements, element));

        return elements;
    }
}