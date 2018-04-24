<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <helium-footer></helium-footer>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import HeliumFooter from './components/footer/HeliumFooter';

export default {
  name: 'App',
  components: {
    Navbar,
    HeliumFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  /* color: #2c3e50; */
}
</style>
