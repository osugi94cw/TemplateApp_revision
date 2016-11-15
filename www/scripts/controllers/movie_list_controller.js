
/* 動画一覧画面の親コントローラ */
/* モックデータを呼び出し、画面に反映する */

function MovieListCtrl($scope,mockValues){
    var vm = this;
    
    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.headerImage = mockValues.movieList.headerImage;
    $scope.content = mockValues.movieList.content;
    
}

/* 動画一覧画面のリストアイテムコントローラ */
/* toNextPageメソッドからScreenTransition（画面遷移サービス）を呼び出す */

function ListItemCtrl(MockTransition,ScreenTransition){
    var vm = this;
    
    vm.toNextPage = function(){
        var options = {
            animation: 'fade',
            data: {
                name: vm.name,
                description: vm.description,
                data: vm.data,
            }
        }
        vm.mockTransition = new MockTransition(vm.target, options);
        
        // vm.screenTransition = new ScreenTransition(vm.target, options); //正式版画面遷移サービス
    }
    
    
}


//コントローラーの定義
angular
    .module('movieModule')
    .controller('MovieListCtrl', ['$scope','mockValues',MovieListCtrl])
    .controller('ListItemCtrl',['MockTransition','ScreenTransition',ListItemCtrl]);