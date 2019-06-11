import { Icon, latLng } from 'leaflet'

/* Suported colors:
  blue, red, green, orange, yellow, violet, grey, black
  https://github.com/pointhi/leaflet-color-markers
*/
const makeIcon = color => new Icon({
  // TODO: implement category like this: iconUrl: require(`../assets/images/${item.kategorija}.svg`),
  iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  shadowSize: [41, 41]
})

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
    this.icon = makeIcon(color)
  }
}
