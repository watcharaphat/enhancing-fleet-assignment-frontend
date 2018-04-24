<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <schedule-option></schedule-option>
      </div>
      <div class="column is-9">
        <flight-table></flight-table>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleOption from './ScheduleOption';
import FlightTable from './FlightTable';

export default {
  components: {
    ScheduleOption,
    FlightTable,
  },
};
</script>
