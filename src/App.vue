<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">IT firme</router-link> |
      <router-link to="/dodaj">Dodaj firmu</router-link> |
      <router-link to="/prijava">Ulaz/Prijava</router-link>
    </nav>
    <router-view/>
    <footer>Mapa sa lokacijama domaćih IT firmi. Školakoda 2019.</footer>
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
  color: #2c3e50;

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

nav {
  padding: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  text-align: center;
}
</style>
