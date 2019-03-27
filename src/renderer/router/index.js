import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageSettings from '@/pages/PageSettings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PageSettings
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router
