document.addEventListener("DOMContentLoaded", function(event) {
  var mymap = L.map('mapid').setView([45.5122, -122.6587], 12);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW1pZWZyZWV0bHkiLCJhIjoiZThmZjNlN2M4ODM0ZDVlYjYyYzg4Y2NkNjZhZDE4ZjYifQ.lm_wjUUEtLvBo6OA6w38vw', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 17,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiYW1pZWZyZWV0bHkiLCJhIjoiZThmZjNlN2M4ODM0ZDVlYjYyYzg4Y2NkNjZhZDE4ZjYifQ.lm_wjUUEtLvBo6OA6w38vw'
  }).addTo(mymap);
  omnivore.kml('./data/tm_rail_lines.kml').addTo(map);
});
