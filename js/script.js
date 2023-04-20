function init() {
  //alert('it works');
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(20.6597,103.3496);
  var mapOptions = {
    center: myLocation,
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(20.6597,103.3496),
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
	icon: 'images/flag.png'
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
	maxWidth: 250,
  });
google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
  
google.maps.event.addDomListener(window, 'load', init);