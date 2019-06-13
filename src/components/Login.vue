<template>
  <form v-if="logged" v-on:submit.prevent="submitForm">
    <h4>Log In</h4>
    <hr>
    <label for="email">Email</label>
    <input
      v-model="email"
      name="email"
      type="email"
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      required
    >
    <small id="emailHelp" class="form-text text-muted"></small>
    <label for="password">Password</label>
    <input
      v-model="password"
      name="password"
      type="password"
      class="form-control"
      id="password"
      placeholder="Enter password"
      required
    >
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <div v-else class="logged">Uspešno logovanje</div>
</template>

<script>
import postData from '../utils/PostRequest'
export default {
  name: 'AppLogin',
  data () {
    return {
      email: '',
      password: '',
      logged: false
    }
  },
  methods: {
    submitForm () {
      const url = 'https://spomenici-api.herokuapp.com/korisnici/login'
      postData(url, {
        'email': this.email,
        'password': this.password
      })
        .then(res => {
          if (res.data) {
            const data = res.data
            localStorage.setItem('token', data)
            this.logged = true
          }
          console.log(res)
        })
        .catch(error => console.log(error))
    }
  }
}

</script>
