let naverPt = new naver.maps.Point(14143403.529477883, 4510332.097012131);
let latlng = naver.maps.TransCoord.fromNaverToLatLng(naverPt);

console.log(latlng.toString());

var mapOptions = {
    center: latlng,
    zoom: 20,
};

var map = new naver.maps.Map("map", mapOptions);
