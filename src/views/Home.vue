<template>
  <div class="wrap">
  	<div class="main">
    	<div class="loc"><button @click="showUserLoc" class="loc btn btn-primary">Prikaži moju lokaciju</button></div>
    	<p>User Latitude: {{ userLat }}</p>
    	<p>User Longitude: {{ userLong }}</p>
    </div>
	<div id="map"></div>
  </div>
</template>

<style>
	.wrap {
		display: grid;
		grid-template-rows: 20vh auto;
	}
	#map {
		max-height: 100%;
		margin-top: 10px;
	}

	.loc {
		margin-bottom: 15px;
	}
</style>

<script>
import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data () {
    return {
      map: null,
      tileLayer: null,
      layers: [],
      error: '',
      userLat: '',
      userLong: ''
    }
  },
  mounted () {
    this.initMap(),
    this.initLayers()
  },
  methods: {
    initMap () {
      this.map = L.map('map').setView([44.7866, 20.4489], 15)
      /* https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png */
      this.tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    },

    initLayers () {},
    showUserLoc () {
      if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(this.showPosition)
			  } else {
			    this.error = 'Geolocation is not supported by this browser.'
			  }
    },
    showPosition (position) {
      this.userLat = position.coords.latitude
      this.userLong = position.coords.longitude

      L.marker([this.userLat, this.userLong], { icon: myIcon, title: 'pozicija' }).addTo(this.map).bindPopup('vasa pozicija')
    }

  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  }
}
</script>
