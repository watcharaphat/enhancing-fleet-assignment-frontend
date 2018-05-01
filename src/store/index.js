import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule: null,
    scheduleSummary: null,
    scheduleIsLoading: false,
  },
  mutations: {
    getFlightSchedule: async (state, query) => {
      const url = '/flights';
      const queryString = `${url}/${query}`;

      let response;
      state.scheduleIsLoading = true;
      try {
        response = await axios.get(queryString);
      } catch (error) {
        // eslint-disable-next-line
        console.error('Error on axios in mutations', error);
      }

      state.schedule = response.data.schedule;
      state.schedule.scheduleSummary = response.data.summary;
      state.scheduleIsLoading = false;
    },
  },
});
