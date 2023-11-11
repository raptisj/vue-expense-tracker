<template>
  <v-row class="col-spacing">
    <InputSymbol :show="showExpense"></InputSymbol>

    <v-col cols="8" v-show="showExpense">
      <v-text-field v-model="newTransaction.amount" hide-details required label="Expense" type="number" min="0"
        @change="props.onChangeExpenseAmount"></v-text-field>
    </v-col>

    <v-col cols="8" v-show="!showExpense">
      <v-text-field v-model="newTransaction.amount" hide-details required label="Income" type="number" min="0"
        @change="props.onChangeIncomeAmount"></v-text-field>
    </v-col>

    <v-col cols="4">
      <v-switch :label="`Switch to ${showExpense ? 'income' : 'expense'}`" v-model="showExpense"
        @change="props.onChangeType"></v-switch>
    </v-col>
  </v-row>
</template>


<script setup>
import { defineProps } from "vue";


import { ref, computed } from 'vue'
import InputSymbol from './InputSymbol.vue'

const props = defineProps({
  onChangeType: Function,
  onChangeExpenseAmount: Function,
  onChangeIncomeAmount: Function,
  newTransaction: {}
})

const showExpense = ref(true)
const newTransaction = computed(() => props.newTransaction)

</script>

<style scoped>
.col-spacing {
  margin-top: 8px;
  position: relative;
}
</style>
