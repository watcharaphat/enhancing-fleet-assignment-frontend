import Vue from 'vue';
import Router from 'vue-router';
import Navbar from '@/components/navbar/Navbar';
import FleetAssignment from '@/components/FleetAssignment';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FleetAssignment,
    },
    {
      path: '/nav',
      component: Navbar,
    },
  ],
});
