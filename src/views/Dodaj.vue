<template>
  <div class="wrap">
    <h2>Dodaj novu IT firmu</h2>
    <form action="https://spomenici-api.herokuapp.com/kolekcija/itfirme/dodaj" method="POST">
      <label for="naslov">naslov: </label>
      <input name="naslov" id="naslov" required>

      <label for="kategorija" title="Npr. gaming, web-dev, qa">kategorija: </label>
      <input name="kategorija" id="kategorija" required>

      <label for="opis">opis: </label>
      <input name="opis" id="opis" required>

      <label for="lat">lat: </label>
      <input v-model="userLat" name="lat" id="lat" required>

      <label for="lon">lon: </label>
      <input v-model="userLong" name="lon" id="lon" required>

      <button @click="showUserLoc" type="button" class="btn btn-primary margin">Popuni moju lokaciju</button>
      <button class="btn btn-primary margin">Pošalji</button>
    </form>
  </div>
</template>

<style>
.wrap {
  width: 450px;
  margin: 0 auto;
}
form {
  display: grid;
}
label {
  display: block;
  margin-top: 10px;
}
.margin {
  margin-top: 15px;
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
