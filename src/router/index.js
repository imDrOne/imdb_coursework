import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main')
  },
  {
    path: '/acter/:id',
    name: 'acter',
    component: () => import('../views/Acter')
  },
  {
    path: '/film/:id',
    name: 'film',
    component: () => import('../views/Film')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
