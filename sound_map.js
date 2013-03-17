// A simplified wrapper library for SoundManager 2
//   See: http://www.schillmania.com/projects/soundmanager2/
//   And also: https://github.com/dphiffer/sm2/
sm2.initialize();

window.addEventListener('load', function() {
    
  // Setup the map
  //   See: http://mapbox.com/mapbox.js/examples/
  var map = mapbox.map('map');
  map.addLayer(mapbox.layer().id('examples.map-vyofok3q'));
  map.ui.zoomer.add();
  
  // Set the default center point and zoom
  map.centerzoom({
    lat: 40.764,
    lon: -73.981
  }, 12);
  
  // Setup a marker layer
  var markers = mapbox.markers.layer();
  var interaction = mapbox.markers.interaction(markers);
  map.addLayer(markers);
  
  // The factory callback generates each marker on the map
  markers.factory(function(marker) {
    
    // Create an <img> dynamically
    var img = document.createElement('img');
    img.className = 'marker-image';
    
    // Set the image's src attribute
    img.setAttribute('src', marker.properties.offIcon);
    
    // Add a click handler to toggle the sound on and off
    MM.addEvent(img, 'click', function(e) {
        
      // sm2.toggle() will either play or pause, returning the play status
      var playing = sm2.toggle(marker.properties.mp3, true);
      
      // Update the marker image
      if (playing) {
        img.setAttribute('src', marker.properties.onIcon);
      } else {
        img.setAttribute('src', marker.properties.offIcon);
      }
    });
    
    // The factory has finished generating the <img>, so return it
    return img;
  });
  
  // Each point must include a lng/lat, a title, on/off icon images,
  //   and an MP3 file URL
  markers.add_feature({
    geometry: {
      coordinates: [-73.976972, 40.760941]
    },
    properties: {
      title: "Beeps and Bubbles",
      offIcon: "assets/off.png",
      onIcon: "assets/on.png",
      mp3: "beeps_bubbles.mp3"
    }
  });

}, false);
