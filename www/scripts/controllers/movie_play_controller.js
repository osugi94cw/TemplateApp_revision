
/* */

function MoviePlayerCtrl($scope,$sce,GetMockData,mockValues,MockTransition){
    var vm = this;

    var optionsData = navi.topPage.pushedOptions.data;
    vm.url = $sce.trustAsResourceUrl(optionsData.data);
}




/*ここまで*/

//コントローラーの定義
angular
    .module('movieModule')
    .controller('MoviePlayerCtrl', ['$scope','$sce','GetMockData','mockValues','MockTransition',MoviePlayerCtrl]);