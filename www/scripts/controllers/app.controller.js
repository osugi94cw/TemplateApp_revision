
/* アプリケーション全体のコントローラ */

function AppCtrl(calcRatio,SharedState,$scope){
    
    /* 
    *  横向きになった際に、縦向きの画面比率を保つように要素を拡大する
    */
    
    //画面比率を返すサービスの呼び出し
    var ratio = calcRatio;
    
    //一番外枠の<ons-page>を取得
    var basicPage = document.getElementsByClassName('basicPage');

    
    /* 画面表示時に横画面ならStyleを横向き用に変更 */

    if (ons.orientation.isLandscape() == true)
    {
        basicPage[0].style.height = "calc(100%*" + (ratio * ratio) + ")";
    }
    /* 画面のオリエンテーションが変更された際に、画面のStyleを変更する */
    ons.orientation.on('change', function(event){
        if(event.isPortrait == false){
            basicPage[0].style.height = "calc(100%*" + (ratio * ratio) + ")";
        }
        else{
            basicPage[0].style.height = "100%";
        }
    });
    
    
    this.openInAppBrowser = function(url){
        cordova.InAppBrowser.open(encodeURI(url), '_blank', 'location=yes,enableViewportScale=yes');
    }
    
}


//コントローラーの定義
angular
    .module('templateApp')
    .controller('AppCtrl', ['calcRatio','SharedState','$scope', AppCtrl]);

