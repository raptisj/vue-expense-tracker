import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createStore } from "vuex";

const store = createStore({
  state: {
    transactions: [],
  },
  mutations: {
    addTransaction(state, transaction) {
      state.transactions.push(transaction);
    },
  },
  getters: {
    getTransactions(state) {
      return state.transactions;
    },
  },
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store).mount("#app");
