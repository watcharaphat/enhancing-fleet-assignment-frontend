<template>
  <div>
    <a v-on:click="getSchedule">get schedule</a>
  </div>
</template>

<script>
export default {
  methods: {
    getSchedule() {
      this.$store.commit('getFlightSchedule');
    },
  },
};
</script>
