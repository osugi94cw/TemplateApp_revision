
/*  */

function OpenInAppBrowser(){
     
    var openInAppBrowser = function(targetPass){
        var target = targetPass;
        cordova.InAppBrowser.open(encodeURI(target), '_blank', 'location=yes,enableViewportScale=yes');
    };
    return openInAppBrowser; 
}

angular
    .module('transitionModule')
    .service('OpenInAppBrowser', OpenInAppBrowser);