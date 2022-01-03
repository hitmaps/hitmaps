export default class Utils {
    static range(min, max) {
        var array = [],
            j = 0;
        for (var i = min; i <= max; i++) {
            array[j] = i;
            j++;
        }
        return array;
    }
}