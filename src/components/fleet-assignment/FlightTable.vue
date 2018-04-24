<template>
  <div class="flight-table-area">
    <div v-if="isLoading">
      <div class="loading-indicator">
        <pulse-loader :color="'#2196F3'" :size="'2rem'"></pulse-loader>
      </div>
    </div>
    <table v-if="!isLoading && schedule" class="table is-striped is-hoverable">
      <thead>
        <tr>
          <th>Flight</th>
          <th>Equipment name</th>
          <th>Origin code</th>
          <th>Destination code</th>
          <th>Departure time</th>
          <th>Arrival time</th>
          <th>Aircraft No.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in schedule" v-bind:key="index">
          <th>{{ row.flight }}</th>
          <th>{{ row.equipmentName }}</th>
          <th>{{ row.originCode }}</th>
          <th>{{ row.destinationCode }}</th>
          <th>{{ row.depTime }}</th>
          <th>{{ row.arrTime }}</th>
          <th>{{ row.aircraftNo }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader';

export default {
  components: {
    PulseLoader,
  },
  computed: {
    schedule() {
      return this.$store.state.schedule;
    },
    isLoading() {
      return this.$store.state.scheduleIsLoading;
    },
  },
};
</script>

<style scoped>
.loading-indicator {
  padding-top: 18%;
  text-align: center;
}
.flight-table-area {
  min-height: 30rem;
}
</style>
