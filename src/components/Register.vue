<template>
  <form v-on:submit.prevent="submitForm">
    <h4>Sign Up</h4>
    <hr>
    <label for="email">Email</label>
    <input
      v-model="email.value"
      name="email"
      type="email"
      class="form-control"
      id="email"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      @change="validateInput('email', email.value)"
      required
    >
    <small id="emailHelp" class="form-text">{{ email.error }}</small>
    <label for="password">Password</label>
    <input
      v-model="password.value"
      name="password"
      type="password"
      class="form-control"
      id="password"
      placeholder="Enter password"
      @change="validateInput('password', password.value)"
      required
    >
    <small id="passwordHelp" class="form-text">{{ password.error }}</small>
    <label for="repeatPassword">Repeat password</label>
    <input
      v-model="repeatPassword.value"
      name="repeatPassword"
      type="password"
      class="form-control"
      id="repeatPassword"
      placeholder="Enter password"
      @change="validateInput('repeatPassword', repeatPassword.value, password.value)"
      required
    >
    <small id="repeatHelp" class="form-text">{{ repeatPassword.error }}</small>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import Validator from '../utils/Validator'
import postData from '../utils/PostRequest'
export default {
  name: 'AppRegister',
  data () {
    return {
      email: {
        value: '',
        error: '',
        validated: false
      },
      password: {
        value: '',
        error: '',
        validated: false
      },
      repeatPassword: {
        value: '',
        error: '',
        validated: false
      }
    }
  },
  methods: {
    submitForm () {
      if (this.email.validated && this.password.validated && this.repeatPassword.validated) {
        const url = 'https://spomenici-api.herokuapp.com/korisnici/registracija'
        postData(url, {
          'email': this.email.value,
          'password': this.password.value,
          'repeatPassword': this.repeatPassword.value
        })
          .then(res => console.log(res))
          .catch(error => console.log(error))
      } else {
        console.log('nisu validirana sva polja')
      }
    },
    validateInput (el, val, equal = false) {
      let inputName = el
      let value = val
      let compareTo = equal
      let validateResult = Validator.validate(inputName, value, compareTo)
      this[inputName].validated = validateResult.validated
      this[inputName].error = validateResult.error
    }
  }
}
</script>

<style scoped>

</style>
