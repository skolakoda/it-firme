<template>
  <div class="prijava">

    <div class="row">
      <div class="col-sm-6">
        <button
          type="button"
          class="btn btn-outline-success btn-sm btn-block"
          v-bind:class="{active : showRegister}"
          @click="toggleView"
        >Sign Up</button>
      </div>
      <div class="col-sm-6">
        <button
          type="button"
          class="btn btn-outline-success btn-sm btn-block"
          v-bind:class="{active : !showRegister}"
          @click="toggleView"
        >Log In</button>
      </div>
    </div>

    <form v-if="showRegister">
      <h4>Sign Up</h4>
      <hr>
      <label for="registerEmail">Email</label>
      <input
        name="email"
        type="email"
        class="form-control"
        id="registerEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      >
      <small id="emailHelp" class="form-text text-muted"></small>
      <label for="registerPassword1">Password</label>
      <input
        name="password"
        type="password"
        class="form-control"
        id="registerPassword1"
        placeholder="Enter password"
      >
      <label for="registerPassword2">Repeat password</label>
      <input
        name="repeatPassword"
        type="password"
        class="form-control"
        id="registerPassword2"
        placeholder="Enter password"
      >
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <form v-if="!showRegister">
      <h4>Log In</h4>
      <hr>
      <label for="loginEmail">Email</label>
      <input
        name="email"
        type="email"
        class="form-control"
        id="loginEmail"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      >
      <small id="emailHelp" class="form-text text-muted"></small>
      <label for="loginPassword">Password</label>
      <input
        name="password"
        type="password"
        class="form-control"
        id="loginPassword"
        placeholder="Enter password"
      >
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style>
.prijava {
  margin: 1rem auto;
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 1rem;
}

form {
  margin-top: 15px;
}

@media (min-width: 768px) {
  .prijava {
    width: 30rem;
  }
}
</style>

<script>
export default {
  data () {
    return {
      showRegister: true
    }
  },
  methods: {
    toggleView () {
      this.showRegister = !this.showRegister
    }
  }
}
</script>
