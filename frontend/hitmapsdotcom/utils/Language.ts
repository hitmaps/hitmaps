export default class Language {
    public iso!: string;
    public name!: string;

    constructor(init?: Partial<Language>) {
        Object.assign(this, init);
    }
}