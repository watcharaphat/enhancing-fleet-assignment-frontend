import Vue from 'vue';
import Router from 'vue-router';
import FleetAssignment from '@/components/fleet-assignment/FleetAssignment';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FleetAssignment,
    },
  ],
});
