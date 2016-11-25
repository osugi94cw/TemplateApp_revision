
/* サービス */

function GetObject($rootScope) {
    var getObject = function (fetch) {
        var ncmb = new NCMB("340609a9b5431d19c497beb72411339fb9bd524570d8de15486d6557d07970ce", "dda8edefd900294fcadc8d2914debad64dfb4aa7a26919e759a20e5cf3c5c609");
        var subClass = ncmb.DataStore(fetch.className);


        var getResult = {};
        getResult.data = [];
        subClass.equalTo(fetch.searchConditionField, fetch.searchConditionValue).order(fetch.orderConditionField, fetch.orderConditionValue).fetchAll()
                 .then(function (results) {
                     for (var i = 0; i < results.length; i++) {
                         getResult.data[i] = results[i];
                         
                     }
                     $rootScope.$broadcast('objectGot', getResult);
                 })
                 .catch(function (err) {
                     console.log(err);
                 });
    }
    return getObject;
}





    angular
        .module('ncmbModule')
        .service('GetObject', ['$rootScope',GetObject]);