
//値を共有する

function SharedState(){
        return {
            shareValue: 'あいうえお'
        };
}
angular
    .module('shareModule')
    .factory('SharedState',SharedState);