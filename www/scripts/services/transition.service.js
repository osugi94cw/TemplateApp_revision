
/* コントローラから受け取った遷移先のURLと渡したいパラメータを<ons-navigator>のpushPageメソッドに渡すサービス */

function TransitionService(){
    
/*テンプレートアプリ*/    
//    var screenTransition = function(argument1,argument2){
//        var target = argument1;
//        var options = {
//            animation:'fade',   //遷移アニメーションの指定
//            //渡したいパラメータはdataオブジェクトに格納する
//            data:{
//                param1:argument2
//            }
//        };
//        navi.pushPage(target, options); //<ons-navigator>のpushPageメソッドを使用する
//    };
//    return screenTransition; 
    
    
/*星陵アプリ*/     
    var screenTransition = function(targetPass,optionsObject){
        var target = targetPass;
        var options = optionsObject;
        navi.pushPage(target, options); //<ons-navigator>のpushPageメソッドを使用する
    };
    return screenTransition; 
}

angular
    .module('transitionModule')
    .service('TransitionService', TransitionService);