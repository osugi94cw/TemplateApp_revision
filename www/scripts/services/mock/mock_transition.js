
/* モック用の画面遷移サービス */

function MockTransition(){
        
    var mockTransition = function(targetPass,optionsObject){
        var target = targetPass;
        var options = optionsObject;
        
        if(options.data.categoryId == '1'){
            if(!options || !options.animation){
                options.animation = 'slide'
            }
            navi.pushPage(target,options);
        }
        else if(options.data.categoryId == '2'
            || options.data.categoryId == '3'){
            ons.notification.alert({
                title: '',
                messageHTML: '動画一覧画面を表示予定です。',
                buttonLabel: 'OK',
                callback: function(){
                }
            });
        }
        else if(options.data.categoryId == '4'){
            if(!options || !options.animation){
                options.animation = 'slide'
            }
            navi.pushPage(target,options);
        }
        else if(options.data.categoryId == '5'
            || options.data.categoryId == '6'){
            ons.notification.alert({
                title: '',
                messageHTML: 'PDF一覧画面を表示予定です。',
                buttonLabel: 'OK',
                callback: function(){
                }
            });
        }
        else if(options.data.categoryId == '7'){
            ons.notification.alert({
                title: '',
                messageHTML: '入試区分選択画面を表示予定です。',
                buttonLabel: 'OK',
                callback: function(){
                }
            });
        }
        else if(options.data.categoryId == '8'){
            ons.notification.alert({
                title: '',
                messageHTML: 'アクセス画面を表示予定です。',
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
            navi.pushPage(target,options);
        }
    };
    return mockTransition; 
}

angular
    .module('transitionModule')
    .service('MockTransition', MockTransition);