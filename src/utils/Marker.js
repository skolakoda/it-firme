import { Icon, latLng } from 'leaflet'

// icon colors https://github.com/pointhi/leaflet-color-markers
export const colors = ['blue', 'red', 'green', 'orange', 'yellow', 'violet', 'grey', 'black']

let id = 0

export default class Marker {
  constructor (item, color = 'green') {
    const { lokacija, naslov, kategorija, opis } = item
    this.id = id++
    this.position = latLng(lokacija.lat, lokacija.lon)
    this.category = kategorija
    this.popup = `
      <h6>${naslov}</h6>
      <p>${opis}</p>
    `
    this.tooltip = naslov
    this.icon = this.makeIcon(color)
  }

  makeIcon (color) {
    return new Icon({
      iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      shadowSize: [41, 41]
    })
  }
}
