import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Home from '@/components/Home';
import User from '@/components/User';
import Artical from '@/components/Artical';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:name',
      name: 'UserRoute',
      component: User
    },
    {
      path: '/topic/:id',
      name: 'ArticalRoute',
      component:Artical
    }
  ]
})
