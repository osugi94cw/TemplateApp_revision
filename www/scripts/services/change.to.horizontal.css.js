
/* 横方向のCSSを変更するサービス */

function ChangeToHorizontalCSS(calcRatio){
    var changeToHorizontalCSS = function(){
        
        //画面比率を受け取る
        var ratio = calcRatio;
        
        console.log("yoko");
        
        // //変更する要素を取得
        // var menuHeader = document.getElementById('menuHeader');
        // var menuContentsArea = document.getElementById('menuContentsArea');
        // var libraryButtonArea = document.getElementById('libraryButtonArea');
        // 
        // var libraryOverviewArea = document.getElementById('libraryOverviewArea');
        // 
        // var contentsArea = document.getElementById('contentsArea');
        // 
        // var header = document.getElementById('header');
        // 
        // 
        // 
        // //要素のCSSを変更
        // menuHeader.style.height = "calc(" + menuHeader.style.height + "*" + ratio * ratio + ")";
        // menuContentsArea.style.height = "calc(" + menuContentsArea.style.height + "*" + ratio * ratio + ")";
        // libraryButtonArea.style.height = "calc(" + libraryButtonArea.style.height + "*" + ratio * ratio + ")";
        // 
        // libraryOverviewArea.style.height = "calc(" + libraryOverviewArea.style.height + "*" + ratio * ratio + ")";
        // 
        // contentsArea.style.height = "calc(" + contentsArea.style.height + "*" + ratio * ratio + ")";
        // 
        // header.style.height = "calc(" + header.style.height + "*" + ratio * ratio + ")";
        
    }
    return changeToHorizontalCSS; 
}


angular
    .module('resizeModule')
    .factory('ChangeToHorizontalCSS', ['calcRatio', ChangeToHorizontalCSS]);