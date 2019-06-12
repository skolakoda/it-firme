<template>
<div class="log">

    <div class='row'>
				<div class='col-sm-6'>
				<button type="button" class="btn btn-outline-success btn-sm btn-block" v-bind:class="[isActive ? 'active':'']" @click="toggleCalss">Log Up</button>
				</div>
				<div class='col-sm-6'>
				<button type="button" class="btn btn-outline-success btn-sm btn-block" v-bind:class="[isActive ? '':'active']" @click="isActive=!isActive">Log In</button>
				</div>
	</div><br>

  <form>
  <div class="form-group" v-bind:class="[isActive ? '':'test']">
	<h4>Log Up</h4><hr>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">
	</small>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  <button type="submit" class="btn btn-primary">Submit</button>
</div>
  <div class="form-group" v-bind:class="[isActive ? 'test':'']">
	<h4>Log In</h4><hr>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username or Enter email">
    <small id="emailHelp" class="form-text text-muted">
	</small>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
	<button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
</div>
</template>

<style>
.log{
    width: 30rem;
    margin: 1rem auto;
    border: 1px solid #42b983;
    border-radius: 5px;
    padding: 1rem;
}
</style>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
