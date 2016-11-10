
/*  */

function GetMockData(){
    var getmockdata = function(){
        var mockData = {
            menu: {
                hpAddress: 'http://www.starhill.ed.jp/'
            }
        }
        return mockData;
    }
        return getmockdata;
}


angular
    .module('dataModule')
    .service('GetMockData', GetMockData);