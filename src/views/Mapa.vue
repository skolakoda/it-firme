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
            <l-marker v-for="marker in filteredItems" :key="marker.id" :lat-lng.sync="marker.position" :icon="marker.icon">
              <l-tooltip :content="marker.tooltip"/>
              <l-popup :content="marker.popup"/>
            </l-marker>
          </l-map>
        </div>
        <div class="col-md-3">
          <label
            v-for="(category, i) in categories"
            v-bind:style="{ backgroundColor: getColor(i) }"
            style="display: block; text-align: left" :key="i"
          >
            <input type="checkbox" v-model="izabrano" :value="category"  /> {{ category }}
          </label>
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
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import Marker from '../utils/Marker'
import { colors } from '../utils/constants'

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
      categories: [],
      izabrano: []
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
  computed: {
    filteredItems() {
      return this.markers.filter(item => this.izabrano.includes(item.kategorija))
    }
  },
  methods: {
    getLocations () {
      fetch('https://spomenici-api.herokuapp.com/kolekcija/itfirme')
        .then(res => res.json())
        .then(res => {
          this.allLocations = res.data
          this.izabrano = this.categories = [...new Set(res.data.map(item => item.kategorija))]
          this.markers = this.allLocations.map(item => {
            const catIndex = this.categories.indexOf(item.kategorija)
            return new Marker(item.lokacija, item.naslov, item.kategorija, item.opis, this.getColor(catIndex))
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
    getColor(i) {
      return colors[i % colors.length]
    }
  }
}
</script>
