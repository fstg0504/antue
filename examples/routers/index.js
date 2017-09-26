import Vue from 'vue'
import Router from 'vue-router'
import Button from './button'
import Menu from './menu'
import Icon from './icon'
import Rate from './rate'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/button',
      component: Button
    },
    {
      path: '/menu',
      component: Menu
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/rate',
      component: Rate
    }
  ]
})

export default router