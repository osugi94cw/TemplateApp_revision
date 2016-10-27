/* 端末を判別するサービス */


function DeviceCheck()
{

    //端末情報を取得
    var ua = navigator.userAgent.toLowerCase();
    
    var device = "";

    
    // iPhone
    var isiPhone = (ua.indexOf('iphone') > -1);
    // iPad
    var isiPad = (ua.indexOf('ipad') > -1);
    // iPod
    var isiPod = (ua.indexOf('ipod') > -1);
    // Android
    var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
    // Android Tablet
    var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);
    
    if(isAndroidTablet || isAndroid){
        device = "Android";
    }
    else if(isiPhone || isiPad || isiPod){
        device = "iOS";
    }
    else if((isiPhone == false || isiPad == false || isiPod == false || isAndroid == false || isAndroidTablet == false) && (ua.indexOf('mobile') > -1)){
        device = "Unsupported device";
    }
    else if((isiPhone == false || isiPad == false || isiPod == false || isAndroid == false || isAndroidTablet == false) && (ua.indexOf('mobile') == -1))
    {
        device = "pc";
    }
    else{
        device = "Unknown device"
    }
    
    
    return device;

}
angular.module('deviceCheckModule')
    .factory('DeviceCheck', DeviceCheck);