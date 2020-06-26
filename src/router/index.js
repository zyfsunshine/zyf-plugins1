import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import HelloWorld1 from '@/page/HelloWorld1'
import HelloWorld2 from '@/page/HelloWorld2'
import Bounced from '@/components/bounced'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloWorld1',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2
    },
    {
      path: '/',
      name: 'Bounced',
      component: Bounced
    },
  ]
})
