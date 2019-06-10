/* global L */

let id = 0

export default class Marker {
  constructor (lokacija, naslov, opis) {
    this.id = id++
    this.position = L.latLng(lokacija.lat, lokacija.lon)
    this.popup = `
      <h6>${naslov}</h6>
      <p>${opis}</p>
    `
    this.tooltip = naslov
  }
}
