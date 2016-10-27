
//最大公約数を求める

function calcGCD(){
    var gcd = function(x, y){
        var r;
        if (x == 0){
            return y;
        }
        else if (y == 0){
            return x;
        }
        else{
            while ((r = x % y) != 0){
                x = y;
                y = r;
            }
            return y;
        }
    }
    return gcd;
}


angular
    .module('calcModule')
    .factory('calcGCD',calcGCD);