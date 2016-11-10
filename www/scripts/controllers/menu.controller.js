
/* ライブラリー選択ボタンがタップされるとライブラリー画面に遷移する。
** ボタン毎に設定されたライブラリーIDを遷移時に渡す。
*/

function LibraryButtonCtrl(TransitionService){ 
    
    this.menuTransition = function(argument){
        var target = 'views/html/library.html';
        var libraryId = argument; //ライブラリーID

        this.screenTransition = new TransitionService(target, libraryId); //画面遷移サービスを呼び出す
        
    }
    
}

function MenuCtrl(calcRatio){
    var vm = this; //this コンテキストを、ViewModel を意味する vm として保持する
    
    this.test = function(){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        
        function onSuccess(position)
        {
            console.log("success");
            console.log("緯度：" + position.coords.latitude);
            vm.latitude = position.coords.latitude;
            console.log("経度：" + position.coords.longitude);
            vm.longitude = position.coords.longitude;
        }
        function onError(err){
            console.log("error");
            console.log(err);
        }
    }
}

/*星陵アプリ*/

function MenuController(TransitionService){
    
}

function MenuButtonCtrl(TransitionService,MockTransition){
    
    var vm = this;
    
    vm.toNextPage = function(){
        var options = {
            animation: 'fade',
            data: {
                categoryId: vm.categoryId
            }
        }
        
        vm.mockTransition = new MockTransition(vm.target, options);
        
        // vm.screenTransition = new TransitionService(vm.target, options); //正式版画面遷移サービス
    }
}

function MenuFooterCtrl(GetMockData,OpenInAppBrowser){
    var vm = this;
    vm.openBrowser = function(){
        vm.mockData = new GetMockData();
        var hpAddress = vm.mockData.menu.hpAddress;
        vm.openInAppBrowser = new OpenInAppBrowser(hpAddress); 
    }
}


/*ここまで*/

//コントローラーの定義
angular
    .module('menuModule')
    .controller('LibraryButtonCtrl', ['TransitionService', LibraryButtonCtrl])
    .controller('MenuCtrl', ['calcRatio', MenuCtrl])
    .controller('MenuController', ['TransitionService',MenuController])
    .controller('MenuButtonCtrl', ['TransitionService','MockTransition',MenuButtonCtrl])
    .controller('MenuFooterCtrl', ['GetMockData','OpenInAppBrowser',MenuFooterCtrl]);