<template>
  <div>
    <table v-if="schedule" class="table is-striped is-hoverable">
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
export default {
  computed: {
    schedule() {
      return this.$store.state.schedule;
    },
  },
};
</script>
