<template>
  <div class="wrap">
    <h2>Dodaj novu IT firmu</h2>
    <form v-on:submit.prevent="submitForm" encType="multipart/form-data">
      <label for="naslov">naslov: </label>
      <input v-model="naslov" name="naslov" id="naslov" required>

      <label for="kategorija" title="Npr. gaming, web-dev, qa">kategorija: </label>
      <input v-model="kategorija" name="kategorija" id="kategorija" required>

      <label for="opis">opis: </label>
      <input v-model="opis" name="opis" id="opis">

      <label for="lat">lat: </label>
      <input v-model="userLat" name="lat" id="lat" required>

      <label for="lon">lon: </label>
      <input v-model="userLong" name="lon" id="lon" required>

      <label for="slika">slika: </label>
      <input type="file" name="slika" accept="image/*" />

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

@media (min-width: 350px) {
  .wrap {
    width: 300px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      naslov: '',
      opis: '',
      kategorija: '',
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
    },
    submitForm (e) {
      fetch('http://localhost:8090/kolekcija/itfirme/dodaj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // mozda izostaviti ili promeniti zbog slike
          auth: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          naslov: this.naslov,
          opis: this.opis,
          kategorija: this.kategorija,
          lat: this.userLat,
          lon: this.userLong,
          slika: this.slika
        })
      }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
