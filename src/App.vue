<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">IT firme</router-link> |
      <router-link to="/dodaj">Dodaj firmu</router-link> |
      <router-link to="/prijava">Ulaz/Prijava</router-link>
    </nav>
    <router-view/>
    <div>Mapa sa lokacijama domaćih IT firmi. Školakoda 2019.</div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-rows: 10vh auto 10vh;
  height: 100vh;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
