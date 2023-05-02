function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(20.69152746800962, -103.33691327737087);
  var mapOptions = {
    center: myLocation,
	zoom: 16,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
	icon: {
		url: 'images/flag.png',
		scaledSize: new google.maps.Size(60,60)
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
}

  marker.addListener('click', function() {
	  infowindow.open(myMap,marker);
  });
}
google.maps.event.addDomListener(window, 'load', init);