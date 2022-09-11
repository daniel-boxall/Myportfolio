let googleMap;

function initmap() {
    var map = new google.maps.googlemap(documet.getElementById("googlemap"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }