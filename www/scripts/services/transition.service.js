
/* 遷移先とoptionsオブジェクトを引数で受け取り、pushPageメソッドを実行するサービス */

function ScreenTransition(){
    var screenTransition = function(targetPass,optionsObject){
        var target = targetPass;
        var options = optionsObject;
        navi.pushPage(target, options); //<ons-navigator>のpushPageメソッドを使用する
    };
    return screenTransition; 
}

/* 引数でURLを受け取り、アプリ内ブラウザを表示するサービス */

function OpenInAppBrowser(){
    var openInAppBrowser = function(targetPass){
        var target = targetPass;
        cordova.InAppBrowser.open(encodeURI(target), '_blank', 'location=yes,enableViewportScale=yes'); //初期表示時にページ全体が表示される
    };
    return openInAppBrowser; 
}




angular
    .module('transitionModule')
    .service('ScreenTransition', ScreenTransition)
    .service('OpenInAppBrowser', OpenInAppBrowser);