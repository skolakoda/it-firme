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
            <l-marker :lat-lng="myMarker">
              <l-popup>Your Position</l-popup>
            </l-marker>
            <span v-for="marker in markers" :key="marker.lat">
              <l-marker :lat-lng="marker"></l-marker>
            </span>
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
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  data() {
    return {
      userLat: "",
      userLong: "",
      zoom: 12,
      center: L.latLng(44.7866, 20.4489),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      myMarker: L.latLng(44.7866, 20.4489),
      markers: [],
      allLocations: [],
      categories: []
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  mounted() {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    this.getLocations();
  },
  methods: {
    showUserLoc() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported by this browser.";
      }
    },
    showPosition(position) {
      this.userLat = position.coords.latitude;
      this.userLong = position.coords.longitude;
      this.myMarker = L.latLng(this.userLat, this.userLong);
      this.center = L.latLng(this.userLat, this.userLong);
    },
    getLocations() {
      fetch("https://spomenici-api.herokuapp.com/kolekcija/itfirme")
        .then(res => res.json())
        .then(res => {
          this.allLocations = res.data;
          this.categories = new Set(res.data.map(item => item.kategorija));
          this.allLocations.forEach(item => {
            this.markers.push(L.latLng(item.lokacija.lat, item.lokacija.lon));
          });
        });
    },
    showByCat(cat) {
      this.markers = [];
      this.allLocations.forEach(item => {
        if (item.kategorija === cat) {
          this.markers.push(L.latLng(item.lokacija.lat, item.lokacija.lon));
        }
      });
    }
  }
};
</script>
