<template>
  <div class="wrap">
    <h2>Dodaj novu IT firmu</h2>
    <p>{{poruka}}</p>
    <form v-on:submit.prevent="submitForm" encType="multipart/form-data" id="forma">
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
import postData from '../utils/PostRequest'
export default {
  data () {
    return {
      poruka: '',
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
      const forma = document.getElementById('forma')
      const formData = new FormData(forma)
      this.poruka = ''
      fetch('https://spomenici-api.herokuapp.com/kolekcija/itfirme/dodaj', {
        method: 'POST',
        headers: {
          'x-auth-token': localStorage.getItem('token')
        },
        body: formData
      }).then(res => res.json())
        .then(res => this.poruka = res.message)
        .catch(err => this.poruka = err.message)
      /* ne salje sliku */
      // const url = 'https://spomenici-api.herokuapp.com/kolekcija/itfirme/dodaj'
      // postData(url, {
      //   naslov: this.naslov,
      //   opis: this.opis,
      //   kategorija: this.kategorija,
      //   lat: this.userLat,
      //   lon: this.userLong,
      //   slika: this.slika
      // }, 'application/x-www-form-urlencoded', `Bearer ${localStorage.getItem('token')}`)
      //   .then(res => console.log(res))
      //   .catch(err => console.log(err))
    }
  }
}
</script>
