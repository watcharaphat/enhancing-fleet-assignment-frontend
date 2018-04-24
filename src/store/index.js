/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    schedule: null,
  },
  mutations: {
    getFlightSchedule: async (state) => {
      const url = '/flights';
      const query = '?date=01-Jan-2017&airline=PG&algorithm=greedy';

      const queryString = `${url}/${query}`;

      let response;
      try {
        response = await axios.get(queryString);
      } catch (error) {
        console.error('Error on axios in mutations', error);
      }

      // axios.get(queryString).then((result) => {
      //   console.log(result);
      // }).catch((error) => {
      //   console.error('Error on axios in mutations', error);
      // });

      state.schedule = response.data;
    },
  },
});
