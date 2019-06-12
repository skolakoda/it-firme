<template>
  <div class="prijava">

    <div class="row">
      <div class="col-sm-6">
        <button
          class="btn btn-outline-success btn-sm btn-block"
          v-bind:class="{active : showRegister}"
          @click="showRegister=true"
        >Sign Up</button>
      </div>
      <div class="col-sm-6">
        <button
          class="btn btn-outline-success btn-sm btn-block"
          v-bind:class="{active : !showRegister}"
          @click="showRegister=false"
        >Log In</button>
      </div>
    </div>

    <app-register v-if="showRegister" />
    <app-login v-if="!showRegister" />

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
import AppRegister from '../components/Register'
import AppLogin from '../components/Login'

export default {
  data () {
    return {
      showRegister: true
    }
  },
  components: {
    AppRegister,
    AppLogin,
  },
}
</script>
