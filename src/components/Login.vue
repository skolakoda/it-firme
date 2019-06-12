<template>
  <form v-on:submit.prevent="submitForm">
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
</template>

<script>
export default {
  name: "AppLogin",
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submitForm() {
      console.log(this.email, this.password)
    }
  }
}
</script>
