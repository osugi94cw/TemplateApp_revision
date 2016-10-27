
//比率を求める

function calcRatio(calcGCD){
    var wiw = window.innerWidth;
    var wih = window.innerHeight;
    console.log("コンテンツの横幅:" + wiw);
    console.log("コンテンツの縦幅:" + wih);
    var gcd = calcGCD(wiw, wih);
    console.log("最大公約数：" + gcd);
    console.log("比率は" + (wiw / gcd) + ":" + (wih / gcd) + "です");
    var ratio = 0;
    if (wiw < wih){
        ratio = (wih / gcd) / (wiw / gcd);
    }
    else{
        ratio = (wiw / gcd) / (wih / gcd);
    }
    console.log("つまり" + ratio + "倍です");
    return ratio;
}


angular
    .module('calcModule')
    .factory('calcRatio',['calcGCD', calcRatio]);