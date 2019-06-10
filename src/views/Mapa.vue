<template>
  <div class="about">
    <h2>Mapa IT firmi</h2>
    <div class="loc">
      <button @click="showUserLoc" class="loc btn btn-primary">Prikaži moju lokaciju</button>
    </div>
    <div class="container">
      <div class="row">
        <div class="map2 col-md-9">
          <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="center" :visible="pokazatiPoziciju">
              <l-tooltip>Your Position</l-tooltip>
              <l-popup>Ti se nalazis ovde</l-popup>
            </l-marker>
            <l-marker v-for="marker in markers" :key="marker.id" :lat-lng.sync="marker.position" :icon="marker.icon">
              <l-tooltip :content="marker.tooltip"/>
              <l-popup :content="marker.popup"/>
            </l-marker>
          </l-map>
        </div>
        <div class="col-md-3">
          <div style="margin-bottom:5px;" v-for="category in categories" :key="category">
            <button @click="showByCat(category)" class="btn btn-success">{{ category }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  height: 100%;
}

.map2 {
  height: 400px;
}
</style>

<script>
import { Icon, latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LatLng } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import Marker from '../utils/Marker'

export default {
  data () {
    return {
      pokazatiPoziciju: false,
      zoom: 12,
      center: latLng(44.7866, 20.4489),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      markers: [],
      allLocations: [],
      categories: []
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  mounted () {
    // fix default icons
    delete Icon.Default.prototype._getIconUrl
    Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })
    this.getLocations()
  },
  methods: {
    getLocations () {
      fetch('https://spomenici-api.herokuapp.com/kolekcija/itfirme')
        .then(res => res.json())
        .then(res => {
          this.allLocations = res.data
          this.categories = new Set(res.data.map(item => item.kategorija))
          this.allLocations.forEach(item => {
            this.markers.push(
              new Marker(item.lokacija, item.naslov, item.opis)
            )
          })
        })
    },
    showUserLoc () {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        this.center = latLng(latitude, longitude)
        this.pokazatiPoziciju = true
      })
    },
    showByCat (cat) {
      this.markers = []
      this.allLocations.forEach(item => {
        if (item.kategorija === cat) {
          this.markers.push(new Marker(item.lokacija, item.naslov, item.opis))
        }
      })
    }
  }
}
</script>
