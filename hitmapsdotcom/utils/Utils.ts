export default class Utils {
    static range(min: number, max: number): any[] {
        var array = [],
            j = 0;
        for (var i = min; i <= max; i++) {
            array[j] = i;
            j++;
        }
        return array;
    }

    static siteTitle(titleChunk: string|undefined): string {
        return titleChunk ? `${titleChunk} | HITMAPS™` : 'HITMAPS™';
    }

    static getTimeZoneAbbreviation(date: string|undefined|null): string {
        const resolvedOptions = new Intl.DateTimeFormat().resolvedOptions();
        const numberedDate = date === null || date === undefined ?
            Date.now() :
            new Date(date).getTime();

        return new Intl.DateTimeFormat(resolvedOptions.locale, {
            timeZone: resolvedOptions.timeZone,
            timeZoneName: 'short'
        }).format(numberedDate).split(' ')[1];
    }
}