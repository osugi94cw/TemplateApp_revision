/* メニュー画面の親コントローラ */
function MenuCtrl(){
    
}

/* メニュー画面のボタンコントローラ */
/* toNextPageメソッドからScreenTransition（画面遷移サービス）を呼び出す */
function MenuButtonCtrl(ScreenTransition,MockTransition){
    
    var vm = this;
    
    //optionsオブジェクト(遷移アニメーションやパラメータを設定するオブジェクト)を作成し、transitionサービスに渡す。
    vm.toNextPage = function(){
        var options = {
            animation: 'slide',
            data: {
                categoryId: vm.categoryId
            }
        }
        
        vm.mockTransition = new MockTransition(vm.target, options);
        
        // vm.screenTransition = new ScreenTransition(vm.target, options); //正式版画面遷移サービス
    }
    

}


/* メニュー画面のフッターコントローラ */
/* モック用データから星陵HPアドレスを取得し、OpenInAppBrowser（アプリ内ブラウザサービス）を呼び出す。 */
function MenuFooterCtrl(OpenInAppBrowser,mockValues){
    var vm = this;
    vm.openBrowser = function(){
        vm.mockValues = mockValues.menu.hpAddress;
        vm.openInAppBrowser = new OpenInAppBrowser(vm.mockValues); 
    }
}

//コントローラーの定義
angular
    .module('menuModule')
    .controller('MenuCtrl', [MenuCtrl])
    .controller('MenuButtonCtrl', ['ScreenTransition','MockTransition',MenuButtonCtrl])
    .controller('MenuFooterCtrl', ['OpenInAppBrowser','mockValues',MenuFooterCtrl]);