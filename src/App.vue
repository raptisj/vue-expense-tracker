<template>
  <div class="container">
    <h1>Expense tracker</h1>
    <Balance />
    <History />
    <AddExpense />
  </div>
</template>

<script>
import AddExpense from './components/AddExpense.vue';
import Balance from './components/Balance.vue'
import History from './components/History.vue';

export default {
  name: 'App',
  components: {
    Balance,
    History,
    AddExpense
  }
}
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


.container {
  max-width: 500px;
  margin: 0 auto;
}
</style>
