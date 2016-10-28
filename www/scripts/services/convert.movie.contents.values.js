
//動画コンテンツ画面の値を管理

function ConvertMovieContentsValues(){
    
    var movieContentsValues = {};
    
    movieContentsValues = {
        url:navi.topPage.pushedOptions.data.param1
    }
        return movieContentsValues;
}
angular
    .module('convertValuesModule')
    .factory('ConvertMovieContentsValues',ConvertMovieContentsValues);