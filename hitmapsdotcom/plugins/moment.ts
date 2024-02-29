import moment from 'moment-timezone';

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            formatDate: (date: string, format: string, timezone: string|undefined, relativeFormat: string|undefined): string => {
                let actualTimezone = timezone;
                if (timezone === undefined) {
                    actualTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                }

                let actualRelativeFormat = relativeFormat;
                const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
                if (new Date(date).getTime() - new Date().getTime() >= twentyFourHoursInMilliseconds) {
                    actualRelativeFormat = undefined;
                }

                const momentDate = moment(date).tz(actualTimezone as string);
                return actualRelativeFormat ?
                    `${momentDate.format(actualRelativeFormat)} (${momentDate.fromNow()})` :
                    momentDate.format(format);
            }
        }
    };
});