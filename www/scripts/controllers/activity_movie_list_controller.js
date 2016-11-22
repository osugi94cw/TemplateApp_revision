
/* 動画一覧画面の親コントローラ */
/* モックデータを呼び出し、画面に反映する */

function ActivityMovieListCtrl($scope,mockValues){
    var vm = this;
    
    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.categoryId = vm.optionsData.categoryId;
    
    $scope.content = mockValues.movieList.content;
    
    vm.filter1 = 'junior_high_school';
    vm.filter2 = 'high_school';

    vm.juniorFilterTapped = false;
    vm.highFilterTapped = false;
    
    vm.juniorFilterImg = "views/img/movie/filter_junior_off.png";
    vm.highFilterImg = "views/img/movie/filter_high_off.png";

    vm.filteringJunior = function () {
        vm.highFilterTapped = false;
        if (vm.juniorFilterTapped == false) {
            vm.juniorFilterTapped = true;
            vm.dataChange();
            
        }
        else if(vm.juniorFilterTapped == true) {
            vm.juniorFilterTapped = false;
            vm.dataChange();
        }
    }

    vm.filteringHigh = function () {
        vm.juniorFilterTapped = false;
        if (vm.highFilterTapped == false) {
            vm.highFilterTapped = true;
            vm.dataChange();

        }
        else if (vm.highFilterTapped == true) {
            vm.highFilterTapped = false;
            vm.dataChange();
        }
    }

    vm.dataChange = function () {
        if (vm.juniorFilterTapped == true) {
            vm.juniorFilterImg = "views/img/movie/filter_junior_on_2.png";
            vm.filter2 = 'blank';

        }
        else if (vm.juniorFilterTapped == false) {
            vm.juniorFilterImg = "views/img/movie/filter_junior_off.png";
            vm.filter2 = 'high_school';
        }

        if (vm.highFilterTapped == true) {
            vm.highFilterImg = "views/img/movie/filter_high_on_2.png";
            vm.filter1 = 'blank';
        }
        else if (vm.highFilterTapped == false) {
            vm.highFilterImg = "views/img/movie/filter_high_off.png";
            vm.filter1 = 'junior_high_school';
        }
    }
}

/* 動画一覧画面のリストアイテムコントローラ */
/* toNextPageメソッドで、optionsオブジェクトを作成し、ScreenTransition（画面遷移サービス）を呼び出す */

function ActivityListItemCtrl(MockTransition,ScreenTransition){
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
    .controller('ActivityMovieListCtrl', ['$scope','mockValues',ActivityMovieListCtrl])
    .controller('ActivityListItemCtrl',['MockTransition','ScreenTransition',ActivityListItemCtrl]);