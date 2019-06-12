<template>
  <form>
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
      required
    >
    <small id="emailHelp" class="form-text text-muted"></small>
    <label for="loginPassword">Password</label>
    <input
      name="password"
      type="password"
      class="form-control"
      id="loginPassword"
      placeholder="Enter password"
      required
    >
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "AppLogin"
}
</script>
