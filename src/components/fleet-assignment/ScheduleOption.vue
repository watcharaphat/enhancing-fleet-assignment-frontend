<template>
  <div class="schedule-option">
    <div class="field">
      <div class="control">
        <label class="label">Select Date</label>
        <datepicker
          v-model="date"
          :input-class="'input'"
          :format="'dd-MMM-yyyy'"
          :full-month-name="true"
          :disabled="disabledDates"
        ></datepicker>
      </div>
    </div>
    <div class="field">
      <label class="label">Select Airline</label>
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
            <option value="maxflow">Max Flow</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field is-grouped submit-button">
      <div class="control">
        <button v-if="isSubmitReady" v-on:click="getSchedule" class="button is-link">Submit</button>
        <button v-else class="button is-light disabled">Submit</button>
      </div>
    </div>
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
      date: new Date(2017, 0, 1),
      selectedAirline: '',
      selectedAlgorithm: '',
      disabledDates: {
        to: new Date(2017, 0, 1),
        from: new Date(2017, 11, 31),
      },
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
    isSubmitReady() {
      return Boolean(this.selectedAirline) && Boolean(this.selectedAlgorithm) && Boolean(this.date);
    },
  },
  methods: {
    getSchedule() {
      this.$store.commit('getFlightSchedule', this.query);
      this.$router.push(this.query);
    },
  },
  mounted() {
    if (this.$route.query.date) {
      this.date = moment(this.$route.query.date, 'DD-MMM-YYYY').toDate();
    }
    this.selectedAlgorithm = this.$route.query.algorithm;
    this.selectedAirline = this.$route.query.airline;
    if (this.isSubmitReady) this.getSchedule();
  },
};
</script>

<style scoped>
.schedule-option {
  padding-top: 0.5rem;
}
.submit-button {
  padding-top: 0.5em;
}
.button.disabled {
  cursor: not-allowed;
}
</style>
