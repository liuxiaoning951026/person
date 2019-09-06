import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import slotComponents from '../components/slotExprise.vue'
import slotParents from '../components/slotParents.vue'
import asyncComponent from '../components/async.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/slot',
      name: 'slot-experise',
      component: slotComponents
    },
    {
      path: '/slot-parents',
      name: 'slot-parents',
      component: slotParents
    },
    {
      path: '/async-component',
      name: 'async-component',
      component: asyncComponent
    },
    {
      path: '/watch-component',
      name: 'watch-component',
      component: () => import('../components/watch-component.vue')
    },
    {
      path: '/window-history-component',
      name: 'window-history-component',
      component: () => import('../components/windowHistory.vue'),
      meta: {
        title: '大放送'
      }
    },
    {
      path: '/zhengze',
      name: 'zhengze',
      component: () => import('../components/zhengze.vue')
    }
  ]
})
