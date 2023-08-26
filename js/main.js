
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

// HTML Elemente
const ausgabe = document.getElementById("debugInfo");

// Markers
var markerMrX = L.AwesomeMarkers.icon({   // Marker Mister X
  icon: 'user-secret',
  prefix: 'fa',
  markerColor: 'black',
  extraClasses: ''
});
var markerRotate = L.AwesomeMarkers.icon({   // Marker Drehen
  icon: 'rotate',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: ''
});
var markerGhost = L.AwesomeMarkers.icon({   // Marker Geist
  icon: 'ghost',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: ''
});
var markerBullhorn = L.AwesomeMarkers.icon({   // Marker Megaphon
  icon: 'bullhorn',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: ''
});
var markerCamera = L.AwesomeMarkers.icon({   // Marker Kamera
  icon: 'camera',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: ''
});
var markerSplotch = L.AwesomeMarkers.icon({   // Marker Fleck
  icon: 'splotch',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: ''
});
var markerClock = L.AwesomeMarkers.icon({   // Marker Zeit
  icon: 'clock-rotate-left',
  prefix: 'fa',
  markerColor: 'orange',
  extraClasses: 'fa-flip'
});
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

function drawCircle(latitude, longitude, radius) {
  var circle = L.circle([latitude, longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.1,
      radius: radius
  }).addTo(map);
}

function playAudio(link) {  // Link muss ein String sein
  new Audio(link).play()
  // Beispielaufruf: playAudio("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");
}

/******************* Hauptlogik ********************************/
startUpLeaflet();
drawCircle(49.2, 9.5, 300);

// Mr. X
L.marker([49.29,8.52], {icon: markerMrX}).bindPopup("Julian").addTo(map);
// Karte umdrehen
L.marker([49.28, 8.5], {icon: markerRotate}).addTo(map);
// Tarnkappe
L.marker([49.29, 8.5], {icon: markerGhost}).addTo(map);
// Schrei
L.marker([49.30, 8.5], {icon: markerBullhorn}).addTo(map);
// Kamera
L.marker([49.28, 8.51], {icon: markerCamera}).addTo(map);
// Fleck auf Karte erzeugen
L.marker([49.29, 8.51], {icon: markerSplotch}).addTo(map);
// Zeit
L.marker([49.30, 8.51], {icon: markerClock}).bindPopup("Power-up: Zeit").addTo(map);
// A
L.marker([49.28, 8.52], {icon: L.AwesomeMarkers.icon({icon: 'a', prefix: 'fa', markerColor: 'cadetblue', extraClasses: 'fa-flip'}) }).bindPopup("Aziza").addTo(map);

farbenTest();
/******************* Ereignisbehandlung ************************/









/******************* Spielwiese *******************************/


function farbenTest()
{
  // Farbentest
  L.marker([49.28, 8.53], {icon: L.AwesomeMarkers.icon({icon: 'b', prefix: 'fa', markerColor: 'red'}) }).addTo(map);
  L.marker([49.29, 8.53], {icon: L.AwesomeMarkers.icon({icon: 'c', prefix: 'fa', markerColor: 'darkred'}) }).addTo(map);
  L.marker([49.30, 8.53], {icon: L.AwesomeMarkers.icon({icon: 'd', prefix: 'fa', markerColor: 'lightred'}) }).addTo(map);
  L.marker([49.28, 8.54], {icon: L.AwesomeMarkers.icon({icon: 'e', prefix: 'fa', markerColor: 'orange'}) }).addTo(map);
  L.marker([49.29, 8.54], {icon: L.AwesomeMarkers.icon({icon: 'f', prefix: 'fa', markerColor: 'beige'}) }).addTo(map);
  L.marker([49.30, 8.54], {icon: L.AwesomeMarkers.icon({icon: 'g', prefix: 'fa', markerColor: 'green'}) }).addTo(map);
  L.marker([49.28, 8.55], {icon: L.AwesomeMarkers.icon({icon: 'h', prefix: 'fa', markerColor: 'darkgreen'}) }).addTo(map);
  L.marker([49.29, 8.55], {icon: L.AwesomeMarkers.icon({icon: 'i', prefix: 'fa', markerColor: 'lightgreen'}) }).addTo(map);
  L.marker([49.30, 8.55], {icon: L.AwesomeMarkers.icon({icon: 'j', prefix: 'fa', markerColor: 'blue'}) }).addTo(map);
  L.marker([49.28, 8.56], {icon: L.AwesomeMarkers.icon({icon: 'k', prefix: 'fa', markerColor: 'darkblue'}) }).addTo(map);
  L.marker([49.29, 8.56], {icon: L.AwesomeMarkers.icon({icon: 'l', prefix: 'fa', markerColor: 'lightblue'}) }).addTo(map);
  L.marker([49.30, 8.56], {icon: L.AwesomeMarkers.icon({icon: 'm', prefix: 'fa', markerColor: 'purple'}) }).addTo(map);
  L.marker([49.28, 8.57], {icon: L.AwesomeMarkers.icon({icon: 'n', prefix: 'fa', markerColor: 'darkpurple'}) }).addTo(map);
  L.marker([49.29, 8.57], {icon: L.AwesomeMarkers.icon({icon: 'o', prefix: 'fa', markerColor: 'pink'}) }).addTo(map);
  L.marker([49.30, 8.57], {icon: L.AwesomeMarkers.icon({icon: 'p', prefix: 'fa', markerColor: 'cadetblue'}) }).addTo(map);
  L.marker([49.28, 8.58], {icon: L.AwesomeMarkers.icon({icon: 'q', prefix: 'fa', markerColor: 'white', iconColor: 'darkgrey'}) }).addTo(map);
  L.marker([49.29, 8.58], {icon: L.AwesomeMarkers.icon({icon: 'r', prefix: 'fa', markerColor: 'gray'}) }).addTo(map);
  L.marker([49.30, 8.58], {icon: L.AwesomeMarkers.icon({icon: 's', prefix: 'fa', markerColor: 'lightgray'}) }).addTo(map)
  L.marker([49.30, 8.59], {icon: L.AwesomeMarkers.icon({icon: 't', prefix: 'fa', markerColor: 'black'}) }).addTo(map);
}


// show a marker on the map
var info = L.marker({lon: -0.11, lat: 51.508}, {opacity: 0.8}).bindPopup("<b>Hello world!</b><br>I am a popup.").addTo(map);
console.log(info);



// Funktion, die bei Änderungen der Position aufgerufen wird
function positionChanged(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  console.log("Neue Position - Breitengrad: " + latitude + ", Längengrad: " + longitude);
  positionCallback(position);
}

// Funktion, die bei Fehlern aufgerufen wird
function positionError(error) {
  console.error("Fehler bei der Positionsabfrage:", error.message);
}

// Überprüfen, ob der Browser Geolocation unterstützt
if ("geolocation" in navigator) {
  // Position überwachen
  var watchId = navigator.geolocation.watchPosition(positionChanged, positionError);

  // Um die Überwachung zu beenden:
  // navigator.geolocation.clearWatch(watchId);
} else {
  console.log("Geolocation wird nicht unterstützt.");
}



/*


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

*/

function positionCallback(position) {
  //wann die Position ermittelt wurde
  /*
    console.log("Zeitpunkt: " + position.timestamp);

    console.log("Latitude: " + position.coords.latitude); //dezimal Grad
    console.log("Longitude: " + position.coords.longitude); //dezimal Grad
    console.log("Genauigkeit in m: " + position.coords.accuracy); //Meter
    

    console.log("Höhe: " + position.coords.altitude); //Meter
    console.log("Genauigkeit in m: " + position.coords.altitudeAccuracy); //Meter

    console.log("Geschw: " + position.coords.speed); //Meter pro Sek.
    console.log("Richtung: " + position.coords.heading); //Grad von wahrem Norden
    */
    L.marker({lon: position.coords.longitude, lat: position.coords.latitude}).bindPopup("Julian").addTo(map);
    ausgabe.innerHTML = "Zeitpunkt: " + position.timestamp + ", Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude + ", Genauigkeit in m: " + position.coords.accuracy + ", Höhe: " + position.coords.altitude + ", Genauigkeit in m: " + position.coords.altitudeAccuracy + ", Geschw: " + position.coords.speed + ", Richtung: " + position.coords.heading;
}
