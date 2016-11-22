
/* 動画再生画面の親コントローラ */
/* 前画面からoptionsオブジェクトを受け取る */
/* カテゴリIDからヘッダー画像を決定する */
/* 動画タイトルと動画説明をビューに反映する */
/* 動画URLを承認し、ビューに反映する */

function MoviePlayCtrl($scope,$sce){
    var vm = this;

    vm.optionsData = navi.topPage.pushedOptions.data;

    vm.categoryId = vm.optionsData.categoryId;
    // if(){} ...ヘッダー画像判別処理を作成？

    vm.name = vm.optionsData.name;
    vm.description = vm.optionsData.description;

    vm.url = $sce.trustAsResourceUrl(vm.optionsData.data); //URLのセキュリティ承認
}

angular
    .module('movieModule')
    .controller('MoviePlayCtrl', ['$scope','$sce',MoviePlayCtrl]);