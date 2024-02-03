export default class TournamentsInfo {
    public registerableEvents: any[] = [];
    public upcomingMatchEvents: any[] = [];

    public hasEvents(): boolean {
        return this.registerableEvents.length > 0 || this.upcomingMatchEvents.length > 0;
    }

    constructor(init?: Partial<TournamentsInfo>) {
        Object.assign(this, init);
    }
}