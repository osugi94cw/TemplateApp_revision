
/* 動画プレイヤーのコントローラ */
/* 受け取ったoptionsオブジェクトからURLを反映する */

function MoviePlayerCtrl($scope,$sce){
    var vm = this;

    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.name = vm.optionsData.name;
    vm.description = vm.optionsData.description;
    vm.url = $sce.trustAsResourceUrl(vm.optionsData.data); //URLのセキュリティ承認
}

//コントローラーの定義
angular
    .module('movieModule')
    .controller('MoviePlayerCtrl', ['$scope','$sce',MoviePlayerCtrl]);