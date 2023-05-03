function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(20.682404735624612, -103.34024359954567);
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
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'media/mexi.png',
      scaledSize: new google.maps.Size(100, 100) 
    }
  });


  var contentString = '<h2>guadalajara</h2><p>State in mexico</p>'

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
	  infowindow.open(myMap, marker);
  });

  
  marker.addListener('click', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', init);