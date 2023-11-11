import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createStore } from "vuex";
import { calculateTotal } from "./utils";

const store = createStore({
  state: {
    transactions: [],
  },
  mutations: {
    addTransaction(state, transaction) {
      state.transactions.push(transaction);
    },
    removeTransaction(state, transactionId) {
      state.transactions = state.transactions.filter(
        (t) => t.id !== transactionId
      );
    },
  },
  getters: {
    getTransactions(state) {
      return state.transactions;
    },
    getIncomeTotal(state) {
      return calculateTotal(state.transactions, "income");
    },
    getExpenseTotal(state) {
      return calculateTotal(state.transactions, "expense");
    },
  },
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store).mount("#app");
