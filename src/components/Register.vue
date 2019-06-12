<template>
  <form>
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
      required
    >
    <small id="emailHelp" class="form-text text-muted"></small>
    <label for="registerPassword1">Password</label>
    <input
      name="password"
      type="password"
      class="form-control"
      id="registerPassword1"
      placeholder="Enter password"
      required
    >
    <label for="registerPassword2">Repeat password</label>
    <input
      name="repeatPassword"
      type="password"
      class="form-control"
      id="registerPassword2"
      placeholder="Enter password"
      required
    >
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'AppRegister',
}
</script>

<style scoped>

</style>
