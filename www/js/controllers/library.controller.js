
/* メニュー画面からの遷移時に値を受け取り、インジケータを表示してから、ライブラリー画面で必要なデータをmBaaSから取得するサービスを呼び出す
** データの取得が終了すると、受け取ったデータを代入し、ビューに反映する。
** ビューへの反映が終了するとインジケータを非表示にする。
*/

function LibraryCtrl($scope,GetLibraryData,ConnectionService,DeviceCheck,calcRatio,SharedState,$rootScope){
    var vm = this; //this コンテキストを、ViewModel を意味する vm として保持する
    
    var device = DeviceCheck;
    if(device != "pc"){
        vm.checkConnection = new ConnectionService(); //接続確認サービスの呼び出し
    }
    var libraryId = navi.topPage.pushedOptions.data.param1; //受け取ったパラメータを代入
    document.querySelector("#myModal").show(); //インジケータを表示
    
    vm.getLibraryData = new GetLibraryData(libraryId); //ライブラリー画面のデータを取得するサービスの呼び出し
    
    this.libraryPicture = "";
    this.libraryOverview = "データが空です";
    $scope.contentsList = [];
    vm.contentsDataNone = "データが登録されていません。";
                    
    $scope.$on('libraryDataGot', function(event, data) {
        //サービスから受け取ったデータを変数またはオブジェクトに格納する
        
        //ライブラリー概要
        vm.libraryPicture = data.library.url;
        vm.libraryOverview = data.library.overview;
        
        //コンテンツリスト
        $scope.contentsList = data.contentsList;
        
        
        //コンテンツリストのデータが登録されていない場合
        if($scope.contentsList.length == 0){
            document.querySelector("#myModal").hide();
            vm.contentsDataNone = "データが登録されていません。";
        }
        else{
            vm.contentsDataNone = "";
        }
        
        if($scope.contentsList.img == "" || $scope.contentsList.name == "" || $scope.contentsList.type == "" || $scope.contentsList.url == ""){
            $scope.contentsList.img == "views/img/library/contents-list_data-none.png";
            $scope.contentsList.name == "データが不足しています";
        }
        
        //タイトル画像のデータが登録されていない場合
        if(vm.libraryPicture == undefined || vm.libraryPicture == ""){
            vm.libraryPicture="views/img/library/library_top_data-none.png";
        }
        //概要のデータが登録されていない場合
        if(vm.libraryOverview == undefined || vm.libraryOverview == ""){
            vm.libraryOverview = "データが登録されていません。";
        }
    });
    
    
    
    
    $scope.$on('ngRepeatFinished', function(event) {
        document.querySelector("#myModal").hide();  //インジケータを非表示にする
        
        
    });
}


/* コンテンツリストのアイテムがタップされると動作する。
** アイテムごとに設定されたパラメータ（コンテンツ種別とコンテンツURL）を受け取る。
** コンテンツの種別ごとに遷移先を変更し、遷移時にコンテンツURLを渡す。
*/

function ContentsListCtrl(TransitionService,DeviceCheck){
    var vm = this;  //this コンテキストを、ViewModel を意味する vm として保持する
    this.libraryTransition = function(argument,argument2){
        var contentsType = argument;    //コンテンツの種別
        var contentsUrl = argument2;    //コンテンツのURL
        
        /* コンテンツの種別によって遷移先を変化させる */
        
        //動画コンテンツの場合
        if(contentsType == 'movie'){
            var target = 'views/html/movie.contents.html';  //動画コンテンツ画面に遷移
            vm.screenTransition = new TransitionService(target, contentsUrl);
        }
        else if (contentsType == 'pdf')
        {
            /* デバイス情報の確認サービスを呼び出し、機種がAndroidならばGoogledocsを使用してPDFファイルを表示する。 */
            var device = DeviceCheck;
            if (device == "Android"){
                cordova.InAppBrowser.open(encodeURI('https://docs.google.com/viewerng/viewer?url=' + contentsUrl), '_blank', 'location=yes');
            }
            else{
                cordova.InAppBrowser.open(encodeURI(contentsUrl), '_blank', 'location=yes');
            }
        }
        else if(contentsType == 'web'){
            cordova.InAppBrowser.open(encodeURI(contentsUrl), '_blank', 'location=yes,enableViewportScale=yes');
        }
        else{
                var target = 'views/html/menu.html';    //その他の画面に遷移（現在はメニュー画面に戻る）
            vm.screenTransition = new TransitionService(target, contentsUrl);
        }
        
    }
    
}



angular
    .module('libraryModule')
    .controller('LibraryCtrl', ['$scope', 'GetLibraryData','ConnectionService','DeviceCheck','calcRatio','SharedState','$rootScope', LibraryCtrl])
    .controller('ContentsListCtrl', ['TransitionService','DeviceCheck', ContentsListCtrl]); 