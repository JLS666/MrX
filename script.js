// initialize Leaflet
var map = L.map('map').setView({lon: 0, lat: 0}, 2);

// add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// show a marker on the map
L.marker({lon: -0.11, lat: 51.508}).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(map);

var circle = L.circle([51.508, -0.12], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 1000
}).addTo(map);


if (navigator.geolocation) { 
  console.log("Location vorhanden");
  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(zeigePosition);
  console.log("test");
  
}

function zeigePosition(position) {
  console.log("Ihre Koordinaten sind: Breite: " + position.coords.latitude +  "<br>Länge: " + position.coords.longitude);	
  L.marker({lon: position.coords.longitude, lat: position.coords.latitude}).bindPopup("<b>Hello world2!</b><br>I am a popup.").addTo(map);
  positionCallback(position);
}

var id, ziel, options;
//Verfolgen beginnen
id = navigator.geolocation.watchCurrentPosition(verfolgePosition);

function verfolgePosition(pos) {
  var aktuell = pos.coords;
  console.log(zeigePosition(pos))

  if (ziel.latitude === aktuell.latitude && ziel.longitude === aktuell.longitude) {
    console.log('Sie haben Ihr Ziel erreicht');
    //Verfolgen beenden
    navigator.geolocation.clearWatch(id);
  }
}

ziel = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function positionCallback(position) {
  //wann die Position ermittelt wurde
  console.log(position.timestamp);

    console.log("Latitude: " + position.coords.latitude); //dezimal Grad
    console.log("Longitude: " + position.coords.longitude); //dezimal Grad
    console.log("Genauigkeit in m: " + position.coords.accuracy); //Meter

    console.log("Höhe: " + position.coords.altitude); //Meter
    console.log("Genauigkeit in m: " + position.coords.altitudeAccuracy); //Meter

    console.log("Geschw: " + position.coords.speed); //Meter pro Sek.
    console.log("Richtung: " + position.coords.heading); //Grad von wahrem Norden
}

positionCallback();