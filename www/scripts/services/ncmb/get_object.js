
/* サービス */

function GetObject($rootScope,NcmbValues) {
    var getObject = function (getTerm) {
        var ncmb = NcmbValues.ncmb;
        var subClass = ncmb.DataStore(getTerm.className);


        var getResult = [];
        subClass.equalTo(getTerm.searchTermField, getTerm.searchTermValue).order(getTerm.orderTermField, getTerm.orderTermValue).fetchAll()
                 .then(function (results) {
                     for (var i = 0; i < results.length; i++) {
                         getResult[i] = results[i];
                         
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
        .service('GetObject', ['$rootScope','NcmbValues',GetObject]);