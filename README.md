# MrX
## Spielprinzip
Ziel: Detektive müssen Mr. X fangen
1. Von einer Personengruppe ist einer Mr. X der Rest sind Detektive
1. Das Spiel finden auf einem Umkreis von x Metern statt.
1. Mr. X bekommt x Sekunden Vorsprung und darf sich entfernen.
1. Die Detektive müssen ihn dann fangen. 
1. Die Position von Mr. X wird nur alle x Minuten angezeigt.
1. Mr. X sieht die Standorte von den Detektiven immer.

## Offene Fragen
* Wann ist Mr. X gefangen?
    * berühren
    * sehen
    * x Meter Abstand haben (über GPS oder Bluetooth messen?)
* Sind die Power-Ups für alle an den gleichen Stellen?
* Können die Power-Ups nur von einer Person eingesammelt werden oder von jedem?
* Was passiert, wenn jemand den Spielbereich verlässt?


## Funktionen
### Pflicht
* Mister X Anzeige Frequenz
* Spielgebiet eingrenzen können
* Spielzeit eingeben
* Startzeit eingeben, wie lange kann Mr. X davor loslaufen

### Optional
* Karte offline speichern
* GPS Frequenz (Akkusparmodus)
* Power-Ups (auf der Karte zum einsammeln)
    * Karte umdrehen
    * Tarnkappe für Sucher und Mister X
    * Schrei schicken an Mister X
    * Foto Power-Up
    * Fleck auf Karte erzeugen
    * Zeige Zeit überspringen
* Telefonieren
* Pfad aufzeichnen

## Server
Was muss gespeichert werden?
* Name 
* Latitude
* Longitude

## Verwendete Bibliotheken
* Kartenbilbiothek: [Leaflet](https://github.com/Leaflet/Leaflet)
* Iconbibliothek: [Font Awesome](https://fontawesome.com/search?m=free&o=r)
* Marker für die Karte: [Awesome-Markers](https://github.com/lennardv2/Leaflet.awesome-markers/tree/2.0/develop)


