
/**
 * Projekt: Mr. X Spiel
 * Dateiname: main.js
 * Autor: Julian Schweizerhof
 * Beschreibung: Diese Datei enthält die Hauptlogik für das Spiel.
 * Letzte Änderung: 20. August 2023
 */

// Für Intellisense in VS Code
/// <reference path="../typings/index.d.ts" />


/******************* Variablendeklarationen ********************/ 
// initialize Leaflet
var map = L.map('map').setView({lon: 9.5, lat: 49.2}, 12);

const ausgabe = document.getElementById("debugInfo");

/******************* Funktionen ********************************/
function startUpLeaflet() {
  // add the OpenStreetMap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  // map.setView({lon: 2, lat: 5});

  // show the scale bar on the lower left corner
  L.control.scale({imperial: false, metric: true}).addTo(map);
}

function randomPlacement() {
  // Inspiration: https://www.daftlogic.com/sandbox-leaflet-maps-plot-random.htm
}

function playAudio() {
  new Audio("https://samplelib.com/lib/preview/mp3/sample-15s.mp3").play()
}
/******************* Hauptlogik ********************************/
startUpLeaflet();
//new Audio("Ridin.mp3").play()
playAudio();

// Creates a red marker with the coffee icon
var redMarker = L.AwesomeMarkers.icon({
  icon: 'coffee',
  prefix: 'fa',
  markerColor: 'red'
});
L.marker([49.2,8.5], {icon: redMarker}).addTo(map);

var blueMarker = L.AwesomeMarkers.icon({
  icon: 'j',
  prefix: 'fa',
  markerColor: 'blue'
});
L.marker([49.25,8.5], {icon: blueMarker}).addTo(map);

L.marker([49.27, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'ambulance', prefix: 'fa', markerColor: 'darkgreen'}) }).addTo(map);

// Karte umdrehen
L.marker([49.28, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'rotate', prefix: 'fa', markerColor: '#333254'}) }).addTo(map);

// Tarnkappe
L.marker([49.29, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'ghost', prefix: 'fa', markerColor: 'green'}) }).addTo(map);

// Schrei
L.marker([49.30, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'bullhorn', prefix: 'fa', markerColor: 'darkgreen'}) }).addTo(map);

// Kamera
L.marker([49.31, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'camera', prefix: 'fa', markerColor: 'blue'}) }).addTo(map);

// Fleck auf Karte erzeugen
L.marker([49.32, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'splotch', prefix: 'fa', markerColor: 'purple'}) }).addTo(map);

// Zeit
L.marker([49.33, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'clock-rotate-left', prefix: 'fa', markerColor: 'darkpurple', extraClasses: 'fa-flip'}) }).bindPopup("Power-up: Zeit").addTo(map);

// A
L.marker([49.34, 8.5], {icon: L.AwesomeMarkers.icon({icon: 'a', prefix: 'fa', markerColor: 'cadetblue'}) }).addTo(map);



L.marker([51.941196,4.512291], {icon: L.AwesomeMarkers.icon({icon: 'spinner', prefix: 'fa', markerColor: 'red', spin:true}) }).addTo(map);
L.marker([51.927913,4.521303], {icon: L.AwesomeMarkers.icon({icon: 'coffee', prefix: 'fa', markerColor: 'red', iconColor: '#f28f82'}) }).addTo(map);
L.marker([51.936063,4.502077], {icon: L.AwesomeMarkers.icon({icon: 'cog', prefix: 'fa', markerColor: 'purple', iconColor: 'black', extraClasses: 'fa-flip'}) }).addTo(map);
L.marker([51.932835,4.506969], {icon: L.AwesomeMarkers.icon({icon: 'glass', prefix: 'fa', markerColor: 'green', extraClasses: 'fa-beat'}) }).addTo(map);
L.marker([51.930295,4.515209], {icon: L.AwesomeMarkers.icon({icon: 'shopping-cart', prefix: 'fa', markerColor: 'blue', extraClasses: 'fa-bounce'}) }).addTo(map);
L.marker([51.930083,4.507742], {icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'orange'}) }).addTo(map);

L.marker([51.930454,4.527054], {icon: L.AwesomeMarkers.icon({icon: 'group', prefix: 'fa', markerColor: 'darkred'}) }).addTo(map);
L.marker([51.929607,4.527054], {icon: L.AwesomeMarkers.icon({icon: 'arrow-right', prefix: 'fa', markerColor: 'darkblue'}) }).addTo(map);
L.marker([51.928919,4.528856], {icon: L.AwesomeMarkers.icon({icon: 'twitter', prefix: 'fa', markerColor: 'cadetblue'}) }).addTo(map);
L.marker([51.930295,4.530745], {icon: L.AwesomeMarkers.icon({icon: 'phone', prefix: 'fa', markerColor: 'darkpurple'}) }).addTo(map);
L.marker([51.925055,4.512806], {icon: L.AwesomeMarkers.icon({icon: 'ambulance', prefix: 'fa', markerColor: 'darkgreen'}) }).addTo(map);
L.marker([51.925902,4.505768], {icon: L.AwesomeMarkers.icon({icon: 'medkit', prefix: 'fa', markerColor: 'darkblue'}) }).addTo(map);



/******************* Ereignisbehandlung ************************/






// show a marker on the map
L.marker({lon: -0.11, lat: 51.508}, {color: 'red'}).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(map);

var circle = L.circle([49.2, 9.5], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 300
}).addTo(map);








const intervalID2 = setInterval(getLocation, 5000);

function getLocation() {
  console.log("läuft2");
  navigator.geolocation.getCurrentPosition(zeigePosition,errorFunc,options);
}

function errorFunc(){
  console.log("Fehler");
}


if (navigator.geolocation) { 
  console.log("Location vorhanden");
  console.log(navigator.geolocation);
  navigator.geolocation.getCurrentPosition(zeigePosition);
  console.log("test");
  
}

function zeigePosition(position) {
  console.log("Ihre Koordinaten sind: Breite: " + position.coords.latitude +  "<br>Länge: " + position.coords.longitude);	
  L.marker({lon: position.coords.longitude, lat: position.coords.latitude}).bindPopup("Julian").addTo(map);
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
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 10000
};



function positionCallback(position) {
  //wann die Position ermittelt wurde
    console.log("Zeitpunkt: " + position.timestamp);

    console.log("Latitude: " + position.coords.latitude); //dezimal Grad
    console.log("Longitude: " + position.coords.longitude); //dezimal Grad
    console.log("Genauigkeit in m: " + position.coords.accuracy); //Meter
    

    console.log("Höhe: " + position.coords.altitude); //Meter
    console.log("Genauigkeit in m: " + position.coords.altitudeAccuracy); //Meter

    console.log("Geschw: " + position.coords.speed); //Meter pro Sek.
    console.log("Richtung: " + position.coords.heading); //Grad von wahrem Norden
    ausgabe.innerHTML = "Zeitpunkt: " + position.timestamp + ", Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude + ", Genauigkeit in m: " + position.coords.accuracy + ", Höhe: " + position.coords.altitude + ", Genauigkeit in m: " + position.coords.altitudeAccuracy + ", Geschw: " + position.coords.speed + ", Richtung: " + position.coords.heading;
}








