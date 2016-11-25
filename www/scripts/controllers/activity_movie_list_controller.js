
/* 行事動画一覧画面の親コントローラ */
/* 受け取ったcategoryIdをもとにデータを取得し、ビューに反映する */
/* フィルタボタン押下でフィルタ条件とフィルタ画像を切り替える */

function ActivityMovieListCtrl($scope,mockValues){
    var vm = this;
    
    vm.optionsData = navi.topPage.pushedOptions.data;
    vm.categoryId = vm.optionsData.categoryId;
    
    $scope.content = mockValues.movieList.content;
    
    //フィルタ条件
    vm.filter1 = 'junior_high_school';
    vm.filter2 = 'high_school';

    //フィルタボタンタップフラグ
    vm.juniorFilterTapped = false;
    vm.highFilterTapped = false;
    
    //フィルタ画像
    vm.juniorFilterImg = "views/img/movie/filter_junior_off.png";
    vm.highFilterImg = "views/img/movie/filter_high_off.png";


    /* 中学フィルタボタンタップ時に動作するメソッド */
    /* ボタンのタップフラグを切り替え、データ切り替えメソッドを呼び出す */

    vm.filteringJunior = function () {
        vm.highFilterTapped = false;
        if (vm.juniorFilterTapped == false) {
            vm.juniorFilterTapped = true;
            vm.switchData();
            
        }
        else if(vm.juniorFilterTapped == true) {
            vm.juniorFilterTapped = false;
            vm.switchData();
        }
    }

    /* 高校フィルタボタンタップ時に動作するメソッド */
    /* ボタンのタップフラグを切り替え、データ切り替えメソッドを呼び出す */

    vm.filteringHigh = function () {
        vm.juniorFilterTapped = false;
        if (vm.highFilterTapped == false) {
            vm.highFilterTapped = true;
            vm.switchData();

        }
        else if (vm.highFilterTapped == true) {
            vm.highFilterTapped = false;
            vm.switchData();
        }
    }

    /* タップフラグによってデータを切り替えるメソッド */

    vm.switchData = function () {
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

/* 行事動画一覧画面のリストアイテムコントローラ */
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