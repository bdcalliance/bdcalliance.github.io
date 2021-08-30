naver.maps.Service.geocode(
    {
        query: "서울특별시 강남구 봉은사로68길 49",
    },
    function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
            return alert("Something wrong!");
        }

        var x = response.v2.addresses[0].x;
        var y = response.v2.addresses[0].y;

        console.log(x);
        console.log(y);

        var map = new naver.maps.Map("map", {
            center: new naver.maps.LatLng(x, y),
            zoom: 20,
        });
    }
);
