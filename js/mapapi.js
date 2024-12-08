var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5071537, 127.0533147),
    zoom: 18,
});

var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.5071537, 127.0533147),
    map: map,
});
