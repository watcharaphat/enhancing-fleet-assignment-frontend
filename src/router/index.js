import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Navbar from '@/components/navbar/Navbar';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
    },
    {
      path: '/nav',
      component: Navbar,
    },
  ],
});
