
/* サービス */

function NcmbValues() {
    var ncmbValues = function (className) {
        var ncmb = new NCMB("340609a9b5431d19c497beb72411339fb9bd524570d8de15486d6557d07970ce", "dda8edefd900294fcadc8d2914debad64dfb4aa7a26919e759a20e5cf3c5c609");
        var subClass = ncmb.DataStore(className);
        return subClass;
    };
    return ncmbValues;
}





angular
    .module('ncmbModule')
    .service('NcmbValues', [NcmbValues]);