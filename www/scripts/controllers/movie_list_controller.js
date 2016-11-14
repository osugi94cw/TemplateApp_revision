
/* */

function MovieListCtrl($scope,GetMockData,mockValues,MockTransition){
    var vm = this;
    
    var optionsData = navi.topPage.pushedOptions.data;
    vm.mockData = new GetMockData();
    
    vm.headerImage = vm.mockData.movieList.headerImage;
    $scope.listItem = [];
    $scope.listItem = vm.mockData.movieList.listItem;
    
    $scope.content = [];
    $scope.content = mockValues.movieList.content;
    
}

function ListItemCtrl(MockTransition){
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
        console.log(vm.name)
        vm.mockTransition = new MockTransition(vm.target, options);
        
        // vm.screenTransition = new TransitionService(vm.target, options); //正式版画面遷移サービス
    }
    
    
}


/*ここまで*/

//コントローラーの定義
angular
    .module('movieModule')
    .controller('MovieListCtrl', ['$scope','GetMockData','mockValues','MockTransition',MovieListCtrl])
    .controller('ListItemCtrl',['MockTransition',ListItemCtrl]);