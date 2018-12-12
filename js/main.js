function initMap() {
	navigator.geolocation.getCurrentPosition(function(position)
	{	
		//create object that stores lat/lng data
      var userLocation = {
      	lat: 40.8054491,
        lng: -73.9654415
        };
      		console.log(userLocation);
      	//create new map instance
      	//configure map with options object
      var map = new google.maps.Map(document.getElementById('map'), {
      	center: userLocation, 
      	zoom: 10,
        scrollwheel: false
      });
  	  var marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'User Location'
      });
    });
}

initMap();