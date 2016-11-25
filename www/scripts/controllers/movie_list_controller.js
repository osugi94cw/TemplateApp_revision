
/* 動画一覧画面の親コントローラ */
/* モックデータを呼び出し、画面に反映する */

function MovieListCtrl($scope, mockValues, NcmbValues, GetObject) {
    var vm = this;
    
    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.categoryId = vm.optionsData.categoryId;
    vm.headerImage = mockValues.movieList.headerImage;
    $scope.content = mockValues.movieList.content;
    
    
    // 以下データ取得テスト用
    
    vm.ncmbValues = new NcmbValues('library');
    
    var fetch = {
        className: 'content',
        searchConditionField: 'categoryId',
        searchConditionValue: vm.categoryId,
        orderConditionField: 'createDate',
        orderConditionValue: true 
    }
    vm.getObject = new GetObject(fetch);

    $scope.$on('objectGot', function (event, getResult) {
        console.log(JSON.stringify(getResult.data[0].name));
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
    .controller('MovieListCtrl', ['$scope', 'mockValues', 'NcmbValues', 'GetObject', MovieListCtrl])
    .controller('ListItemCtrl',['MockTransition','ScreenTransition',ListItemCtrl]);