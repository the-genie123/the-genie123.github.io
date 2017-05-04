$(document).ready(function () {

    var currgeocoder;
    var x = document.getElementById("location");


    //Set geo location lat and long
    navigator.geolocation.getCurrentPosition(function (position) {
        //var geo_loc = position.coords.latitude + "," + position.coords.longitude;
        //var LatLongStr = geo_loc.split(",");
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log("setting long and alt");
        //initializeCurrent(LatLongStr[0], LatLongStr[1]);
        initializeCurrent(lat, long);
    }, showError);

    //Check value is present or
    function initializeCurrent(currentlat, currentlong) {
      console.log("checking current value");
        currgeocoder = new google.maps.Geocoder();
        if (currentlat != '' && currentlong != '') {
            //call google api function
            var myLatlng = new google.maps.LatLng(currentlat, currentlong);
            return getCurrentAddress(myLatlng);
        }
    }

    //Get current address
    function getCurrentAddress(location) {
        currgeocoder.geocode({
            "location": location
        }, function (results, status) {
            if (status == "OK") {
                console.log("im here");
                console.log(results[1]);
                $(x).html(results[1].formatted_address);
            }
        })
    }

    function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
});
