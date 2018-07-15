document.addEventListener("DOMContentLoaded", function(event) {
  var mymap = L.map('mapid').setView([45.5122, -122.6587], 12);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW1pZWZyZWV0bHkiLCJhIjoiZThmZjNlN2M4ODM0ZDVlYjYyYzg4Y2NkNjZhZDE4ZjYifQ.lm_wjUUEtLvBo6OA6w38vw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 17,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYW1pZWZyZWV0bHkiLCJhIjoiZThmZjNlN2M4ODM0ZDVlYjYyYzg4Y2NkNjZhZDE4ZjYifQ.lm_wjUUEtLvBo6OA6w38vw'
  }).addTo(mymap);
  var loadKML = function(KMLFile) {
    omnivore.kml(KMLFile).addTo(mymap);
  }
  var buttons = document.getElementsByTagName('button');
  var files = [
    './data/tm_boundary.kml',
    './data/tm_parkride.kml',
    './data/tm_rail_lines.kml',
    './data/tm_rail_stops.kml',
    './data/tm_tran_cen.kml'
  ];
  for(var i = 0; i < buttons.length; i++) {
    var elem = buttons[i];
    var file = files[i];
    elem.onclick = function() {
      alert(file);
      loadKML(file);
    };
  }
});
