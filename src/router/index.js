import Vue from 'vue'
import Router from 'vue-router'
import LightBulb from '@/components/LightBulb'
import Controls from '@/components/Controls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LightBulb',
      component: LightBulb
    },
    {
      path: '/controls',
      name: 'Controls',
      component: Controls
    }
  ]
})
