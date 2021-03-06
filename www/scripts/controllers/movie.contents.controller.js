
/* ライブラリー画面から受け取ったURLに信頼済みマークを付与してビューに反映するコントローラ */

function MovieContentsCtrl($scope,$sce,ConnectionService,DeviceCheck,calcRatio,ConvertMovieContentsValues){
    var vm = this; //this コンテキストを、ViewModel を意味する vm として保持する
    var device = DeviceCheck;
    if(device != "pc"){
        vm.checkConnection = new ConnectionService(); //接続確認サービスの呼び出し
    }
    
    var movieContentsValues = ConvertMovieContentsValues;
    
    vm.url = $sce.trustAsResourceUrl(movieContentsValues.url);   //URLに信頼済みのマークを付与

}

angular
    .module('contentsModule')
    .controller('MovieContentsCtrl', ['$scope', '$sce', 'ConnectionService','DeviceCheck','calcRatio','ConvertMovieContentsValues', MovieContentsCtrl]);