<template>
  <div class="nav-section">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="../../../static/logo/helium-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              height="28"
            />
          </a>
          <!-- <a class="navbar-item">Home</a> -->
          <!-- <a class="navbar-item">About</a> -->

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </nav>

    <hero></hero>
  </div>
</template>

<script>
import Hero from './Hero';

export default {
  components: {
    Hero,
  },
};
</script>

<style scoped>
.nav-section {
  margin-bottom: 60px;
}
</style>
