<template>
  <div class="about">
  	<div class="loc"><button @click="showUserLoc" class="loc btn btn-primary">Prikaži moju lokaciju</button></div>
  	<div class="container">
  		<div class="row">
  			<div class=" map2 col-md-9">
  				<l-map :zoom="zoom" :center="center">
     				 <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      				 <l-marker :lat-lng="marker"></l-marker>
    			</l-map>
  			</div>
  			<div class="col-md-3">
  				<h1>Ovo je druga kolona</h1>
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
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  data () {
    return {
      userLat: '',
      userLong: '',
      zoom: 16,
      center: L.latLng(44.7866, 20.4489),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(44.7866, 20.4489)
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  mounted () {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
			    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			    iconUrl: require('leaflet/dist/images/marker-icon.png'),
			    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })
  },
  methods: {
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

      this.marker = L.latLng(this.userLat, this.userLong)
      this.center = L.latLng(this.userLat, this.userLong)
    }
  }
}
</script>
