<template>
  <div class="schedule-option">
    <div class="field">
      <datepicker
        v-model="date"
        :input-class="'input'"
        :placeholder="'Select date'"
      ></datepicker>
    </div>
    <div class="field">
      <div class="control">
        <input type="radio" id="pg" value="PG" v-model="selectedAirline" />
        <label for="pg">Bangkok Airways</label>
        <br />
        <input type="radio" id="fd" value="FD" v-model="selectedAirline" />
        <label for="td">Air Asia</label>
      </div>
    </div>
    <div class="field">
      <label class="label">Algorithm</label>
      <div class="control">
        <div class="select">
          <select v-model="selectedAlgorithm">
            <option disabled value="">Please select one</option>
            <option value="ts">Time Space Network</option>
            <option value="dynamic">Dynamic Programming</option>
            <option value="greedy">Greedy</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
    <h1>isLoading: {{ isLoading }}</h1>
    <a v-on:click="getSchedule">get schedule</a>
  </div>
</template>

<script>
import moment from 'moment';
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      date: null,
      selectedAirline: '',
      selectedAlgorithm: '',
    };
  },
  computed: {
    selectedDate() {
      return moment(this.date).format('DD-MMM-YYYY');
    },
    query() {
      return `?date=${this.selectedDate}&airline=${this.selectedAirline}&algorithm=${this.selectedAlgorithm}`;
    },
    isLoading() {
      return this.$store.state.scheduleIsLoading;
    },
  },
  methods: {
    getSchedule() {
      this.$store.commit('getFlightSchedule', this.query);
    },
  },
};
</script>

<style scoped>
.schedule-option {
  padding-top: 1rem;
}
</style>
