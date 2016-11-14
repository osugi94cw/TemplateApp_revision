
/* モック用の画面遷移サービス */

function MockTransition(){
        
    var mockTransition = function(targetPass,optionsObject){
        var target = targetPass;
        var options = optionsObject;
        
        if(options.data.categoryId == 'L001' 
        ){
            navi.pushPage('views/html/movie_list.html',options);
        }
        else if(options.data.categoryId == 'L002'
            || options.data.categoryId == 'L003'
            || options.data.categoryId == 'L004'
            || options.data.categoryId == 'L005'
            || options.data.categoryId == 'L006'
            || options.data.categoryId == 'L007'
            || options.data.categoryId == 'L008'){
            ons.notification.alert({
                title: '',
                messageHTML: '動画一覧画面を表示予定です。',
                buttonLabel: 'OK',
                callback: function(){
                }
            });
            }
        else if(options.data.categoryId == 'news'){
            ons.notification.alert({
                title: '',
                messageHTML: '新着情報画面を表示予定です。',
                buttonLabel: 'OK',
                callback: function(){
                }
            });
        }
        else if(target == 'views/html/movie_play.html'){
            // ons.notification.alert({
            //     title: '',
            //     messageHTML: '動画再生画面を表示予定です。',
            //     buttonLabel: 'OK',
            //     callback: function(){
            //     }
            // });
            
            navi.pushPage(target,options);
        }
        

    };
    return mockTransition; 
}

angular
    .module('transitionModule')
    .service('MockTransition', MockTransition);