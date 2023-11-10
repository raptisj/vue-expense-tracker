<template>
  <div class="container">
    <h1>Expense tracker</h1>
    <Balance />
    <History />
    <AddExpense />
  </div>
</template>

<script setup>
import AddExpense from './components/AddExpense.vue';
import Balance from './components/Balance.vue'
import History from './components/History.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 0 40px 0;
}
</style>