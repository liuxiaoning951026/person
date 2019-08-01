import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import slotComponents from '../components/slotExprise.vue'
import slotParents from '../components/slotParents.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slot',
      name: 'slot-experise',
      component: slotComponents
    },
    {
      path: '/slot-parents',
      name: 'slot-parents',
      component: slotParents
    }
  ]
})
