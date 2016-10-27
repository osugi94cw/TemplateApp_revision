
/* サービス */

function ChangeOrientation(ChangeToHorizontalCSS,ChangeToVerticalCSS){
    var vm = this;
    var changeOrientation = function(){
        
        // ons.orientation.on('change', function(event){
        //     if(event.isPortrait === false){
        //         vm.changeToHorizontalCSS = new ChangeToHorizontalCSS();
        //     }
        //     else{
        //         vm.changeToVerticalCSS = new ChangeToVerticalCSS();
        //     }
        // });
        
    }
    return changeOrientation; 
}


angular
    .module('resizeModule')
    .service('ChangeOrientation', ['ChangeToHorizontalCSS','ChangeToVerticalCSS', ChangeOrientation]);