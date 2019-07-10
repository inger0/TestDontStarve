var container = document.getElementById('container');

function getLocation() {

    var options = {
        enableHighAccuracy: true, //boolean 是否要求高精度的地理信息，默认为false
        maximumAge: 1000 //应用程序的缓存时间
    };

    if (navigator.geolocation) {
        //浏览器支持geolocation
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    } else {
        //浏览器不支持geolocation
        console.log("浏览器不支持!");
    }
}

//成功时
function onSuccess(position) {
    //返回用户位置
    //经度
    var longitude = position.coords.longitude;
    //纬度
    var latitude = position.coords.latitude;

    //腾讯地图的中心地理坐标
    var center = new qq.maps.LatLng(latitude, longitude);

    //使用腾讯地图API
    var map = new qq.maps.Map(document.getElementById("container"), {
        //地图的中心地理坐标
        center: center,
        //初始化地图缩放级别
        zoom: 16
    });

    //在地图中创建信息提示窗口
    var infoWin = new qq.maps.InfoWindow({
        map: map
    });
    //打开信息窗口
    infoWin.open();
    //设置信息窗口显示区的内容
    infoWin.setContent('<div style="width:200px;padding:10px;">' +
        '您在这里<br/>纬度：' + latitude + '<br/>经度：' + longitude);
    //设置信息窗口的位置
    infoWin.setPosition(center);
}


//失败时
function onError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("用户拒绝对获取地理位置的请求");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("位置信息是不可用的");
            break;

        case error.TIMEOUT:
            alert("请求用户地理位置超时");
            break;

        case error.UNKNOWN_ERROR:
            alert("未知错误");
            break;
    }

}

window.onload = getLocation;
