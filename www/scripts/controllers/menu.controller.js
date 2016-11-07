
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

function MenuController(TransitionService){
    
    this.trantisionFromMenu = function(pageName,value){
        if(pageName == 'movieList'){
            var target = 'views/html/library.html';
        }
        else if(pageName == 'news'){
            var target = 'views/html/news.html';
        }
        else if(pageName == 'pdfList'){
            var target = '';
        }
        else if(pageName == 'faq'){
            var target = 'views/html/faq.html';
        }
        var passingValue = value;
        this.screenTransition = new TransitionService(target, passingValue);
    }
    
}

//コントローラーの定義
angular
    .module('menuModule')
    .controller('LibraryButtonCtrl', ['TransitionService', LibraryButtonCtrl])
    .controller('MenuCtrl', ['calcRatio', MenuCtrl])
    .controller('MenuController', ['TransitionService',MenuController]);