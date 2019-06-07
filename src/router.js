import Vue from 'vue'
import Router from 'vue-router'
import Mapa from './views/Mapa.vue'
import Dodaj from './views/Dodaj.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Mapa
    },
    {
      path: '/dodaj',
      name: 'dodaj',
      component: Dodaj
    }
  ]
})
