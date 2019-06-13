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
      required
    >
    <small id="emailHelp" class="form-text text-muted"></small>
    <label for="password">Password</label>
    <input
      v-model="password.value"
      name="password"
      type="password"
      class="form-control"
      id="password"
      placeholder="Enter password"
      required
    >
    <label for="repeatPassword">Repeat password</label>
    <input
      v-model="repeatPassword.value"
      name="repeatPassword"
      type="password"
      class="form-control"
      id="repeatPassword"
      placeholder="Enter password"
      required
    >
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import Validator from '../utils/Validator'
export default {
  name: 'AppRegister',
  data () {
    return {
      email: {
        value: '',
        error: ''
      },
      password: {
        value: '',
        error: ''
      },
      repeatPassword: {
        value: '',
        error: ''
      },
      validated: false
    }
  },
  methods: {
    submitForm () {
      if (this.validated) {

      }
      console.log(Validator.validate('email', this.email.value))
      console.log(this.email.value, this.password.value, this.repeatPassword.value)
    }
  }
}
</script>

<style scoped>

</style>
