<template>
  <div>
    <button @click="showUserLoc" class="btn btn-primary margin">Dobavi moju lokaciju</button>

    <form action="https://spomenici-api.herokuapp.com/kolekcija/itfirme/dodaj" method="POST">
      <label for="naslov">naslov: </label>
      <input name="naslov" id="naslov" required>

      <label for="kategorija">kategorija: </label>
      <input name="kategorija" id="kategorija" required>

      <label for="opis">opis: </label>
      <input name="opis" id="opis" required>

      <label for="lat">lat: </label>
      <input v-model="userLat" name="lat" id="lat" required>

      <label for="lon">lon: </label>
      <input v-model="userLong" name="lon" id="lon" required>

      <p><button class="btn btn-primary margin">Pošalji</button></p>
    </form>
  </div>
</template>

<style>
  label {
    display: block;
  }
	.margin {
		margin: 15px 0;
	}
</style>

<script>
export default {
  data () {
    return {
      userLat: '',
      userLong: ''
    }
  },
  methods: {
    showUserLoc () {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    },
    showPosition (position) {
      this.userLat = position.coords.latitude
      this.userLong = position.coords.longitude
    }
  }
}
</script>
