<template>
  <div class="container-fluid">
    <h2>Mapa IT firmi</h2>
    <p>
      <button @click="showUserLoc" class="btn btn-primary">Prikaži moju lokaciju</button>
    </p>
    <span class="hamburger" @click="hamburgerClicked" :class="{'change': sideBarOpened}">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </span>
    <div class="relative">
      <div class="mapa">
        <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="center" :visible="pokazatiPoziciju">
            <l-tooltip>Your Position</l-tooltip>
            <l-popup>Ti se nalazis ovde</l-popup>
          </l-marker>
          <l-marker
            v-for="marker in filteredItems"
            :key="marker.id"
            :lat-lng.sync="marker.position"
            :icon="marker.icon"
          >
            <l-tooltip :content="marker.tooltip"/>
            <l-popup :content="marker.popup"/>
          </l-marker>
        </l-map>
      </div>
      <aside class="sidebar" :class="{'sideOpen': sideBarOpened}">
        <label
          v-for="(category, i) in categories"
          v-bind:style="{ backgroundColor: getColor(i) }"
          style="display: block; text-align: left"
          :key="i"
        >
          <input type="checkbox" v-model="izabrano" :value="category">
          {{ category }}
        </label>
      </aside>
    </div>
  </div>
</template>

<style>
.relative {
  position: relative;
}

.mapa {
  height: 400px;
  position: relative;
  width: 100%;
}

.hamburger {
  position: absolute;
  right: 10px;
  top: 30px;
  cursor: pointer;
}

label {
  border-radius: 25px;
  padding: 5px 10px;
  font-weight: 700;
  color: #fff;
}

.sideOpen {
  min-width: 190px;
  padding: 10px;
  border-radius: 25px;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

@media (min-width: 768px) {
  .mapa {
    height: 450px;
  }
}
@media (min-width: 992px) {
  .mapa {
    height: 75vh;
  }

  /* The side navigation menu */
  .sidebar {
    width: 0;
    position: absolute;
    z-index: 999;
    top: 20px;
    right: 10px;
    background-color: lightcoral;
    overflow-x: hidden;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  }
}
@media (max-width: 460px) {
  .hamburger {
    display: none;
  }
}
</style>

<script>
import { Icon, latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

import Marker, { colors } from '../utils/Marker'

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
      izabrano: [],
      sideBarOpened: false
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
    filteredItems () {
      return this.markers.filter(item => this.izabrano.includes(item.category))
    }
  },
  methods: {
    getLocations () {
      fetch('https://spomenici-api.herokuapp.com/kolekcija/itfirme')
        .then(res => res.json())
        .then(res => {
          this.allLocations = res.data
          this.izabrano = this.categories = [
            ...new Set(this.allLocations.map(item => item.kategorija))
          ]
          this.markers = this.allLocations.map(item => {
            const catIndex = this.categories.indexOf(item.kategorija)
            return new Marker(item, this.getColor(catIndex))
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
    getColor (i) {
      return colors[i % colors.length]
    },
    hamburgerClicked () {
      this.sideBarOpened = !this.sideBarOpened
      console.log(this.sideBarOpened)
    }
  }
}
</script>
