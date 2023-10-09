/*
    Assignment #4
    Esta Cimo
*/

$(function () {
	function success(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		var locationHere = $("#locationhere");
		var welcomeMessage = $("#welcome");
		var distanceMessage = $("#distance");
		var storedLocation = localStorage.getItem("lastLocation");
		
		locationHere.text(latitude + " " + longitude);
		
		if (storedLocation) {
			var lastLocation = JSON.parse(storedLocation);
			var distance = calcDistanceBetweenPoints(lastLocation.latitude, lastLocation.longitude, latitude, longitude);
			
			var storedLocationText = $("<p>").text("Last location: " + lastLocation.latitude + " " + lastLocation.longitude);
			locationHere.after(storedLocationText);
			
			welcomeMessage.text("Welcome back!");
			
			distanceMessage.text("Distance travelled: " + distance + " meters.");		
		} else {
			welcomeMessage.text("Welcome to the application!");
		}
		
		var currentLocation = { latitude: latitude, longitude: longitude };
        localStorage.setItem("lastLocation", JSON.stringify(currentLocation));
	}
	
	function fail(error) {
		var locationHere = $("#locationhere");
		
		locationHere.text("Error.");
	}

	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(success, fail);
	} else {
		var locationHere = $("#locationhere");
		
		locationHere.text("Please allow geolocation in order to use this application.");
	}

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});
