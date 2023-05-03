function init(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(15.534637544573304, -89.95940777671223);
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
      url: 'media/quetzal.png',
      scaledSize: new google.maps.Size(60, 60) 
    }
  });


  var contentString = '<h2>Semuc Champey</h2><p>The national bird of Guatemala is the Quetzal</p>'

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