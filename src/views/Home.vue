<template>
  <div id="map"></div>
</template>

<style>
	#map {
		height: 500px;
	}
</style>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
	data() {
		return {
			map: null,
			tileLayer: null,
			layers: []
		}
	},
	mounted() {
		this.initMap(),
		this.initLayers()
	},
	methods: {
		initMap() {
			this.map = L.map('map').setView([44.7866, 20.4489], 15)
			/* https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png */
			this.tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);
		},
<<<<<<< Updated upstream
		initLayers() {}
=======
		initLayers() {},
		showUserLoc() {
			if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(this.showPosition);
			  } else {
			    this.error = "Geolocation is not supported by this browser.";
			  }
		},
		showPosition(position) {
			this.userLat =  position.coords.latitude
			this.userLong = position.coords.longitude
			L.marker([]).addTo(this.map)
		}
>>>>>>> Stashed changes
	},
	components: {
		LMap,
		LTileLayer,
		LMarker
	}
}
</script>
