var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5092693, 127.0523556),
    zoom: 18,
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5092693, 127.0523556),
    map: map,
});
