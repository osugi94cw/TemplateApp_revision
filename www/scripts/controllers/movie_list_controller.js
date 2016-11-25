
/* 動画一覧画面の親コントローラ */
/* モックデータを呼び出し、画面に反映する */

function MovieListCtrl($scope, mockValues, GetObject) {
    var vm = this;

    document.querySelector("#myModal").show();
    
    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.categoryId = vm.optionsData.categoryId;
    vm.headerImage = mockValues.movieList.headerImage;

    // 以下データ取得テスト用

    var getTerm = {
        className: 'content',
        searchTermField: 'categoryId',
        searchTermValue: vm.categoryId,
        orderTermField: 'createDate',
        orderTermValue: true 
    }
    vm.getObject = new GetObject(getTerm);

    $scope.$on('objectGot', function (event, getResult) {
        $scope.content = getResult;
        console.log(JSON.stringify($scope.content));
        $scope.$apply();

    });
}

/* 動画一覧画面のリストアイテムコントローラ */
/* toNextPageメソッドで、optionsオブジェクトを作成し、ScreenTransition（画面遷移サービス）を呼び出す */

function ListItemCtrl(MockTransition,ScreenTransition){
    var vm = this;
    
    vm.toNextPage = function(){
        var options = {
            animation: 'fade',
            data: {
                categoryId: vm.categoryId,
                name: vm.name,
                description: vm.description,
                data: vm.data,
            }
        }
        vm.mockTransition = new MockTransition(vm.target, options);
        
        // vm.screenTransition = new ScreenTransition(vm.target, options); //正式版画面遷移サービス
    }
    
    
}


angular
    .module('movieModule')
    .controller('MovieListCtrl', ['$scope', 'mockValues', 'GetObject', MovieListCtrl])
    .controller('ListItemCtrl',['MockTransition','ScreenTransition',ListItemCtrl]);