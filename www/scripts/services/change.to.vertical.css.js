
/* 縦方向のCSSを変更するサービス */

function ChangeToVerticalCSS(calcRatio){
    var changeToVerticalCSS = function(){
        
        //画面比率を受け取る
        var ratio = calcRatio;
        
        console.log("tate");
        
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
        // menuHeader.style.height = menuHeader.style.height - ("calc(" + "*" + ratio * ratio + ")");
        // menuContentsArea.style.height = menuContentsArea.style.height - ("calc(" + "*" + ratio * ratio + ")");
        // libraryButtonArea.style.height = libraryButtonArea.style.height - ("calc(" + "*" + ratio * ratio + ")");
        // 
        // libraryOverviewArea.style.height = libraryOverviewArea.style.height - ("calc(" + "*" + ratio * ratio + ")");
        // 
        // contentsArea.style.height = contentsArea.style.height - ("calc(" + "*" + ratio * ratio + ")");
        // 
        // header.style.height = header.style.height - ("calc(" + "*" + ratio * ratio + ")");
        
        

    }
    return changeToVerticalCSS; 
}


angular
    .module('resizeModule')
    .factory('ChangeToVerticalCSS', ['calcRatio',ChangeToVerticalCSS]);