<template>
  <div class="section">
    <h2 class="section-title">Add expense</h2>

    <v-form>
      <v-text-field v-model="newTransaction.subject" required hide-details label="Subject"
        @change="addSubject"></v-text-field>

      <TransitionInput :on-change-type="onChangeType" :new-transaction="newTransaction"
        :on-change-expense-amount="onChangeExpenseAmount" :on-change-income-amount="onChangeIncomeAmount">
      </TransitionInput>

      <v-btn block class="submit-btn" @click="addTransaction">
        Add
      </v-btn>
    </v-form>

    <v-snackbar v-model="shankbarError" :timeout="2000">
      Expense can not be larger than income
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import TransitionInput from './FormElements/TransactionInput.vue'

const store = useStore()

const initialValues = { subject: '', amount: null, type: 'expense' }
const newTransaction = ref(initialValues)
const shankbarError = ref(false)
const incomeTotal = computed(() => store.getters.getIncomeTotal)

const addSubject = (e) => newTransaction.value.subject = e.target.value
const onChangeType = (e) => {
  newTransaction.value.type = e.target.checked ? 'expense' : 'income'
  newTransaction.value.amount = null
}
const onChangeExpenseAmount = (e) => newTransaction.value.amount = parseInt(e.target.value)
const onChangeIncomeAmount = (e) => newTransaction.value.amount = parseInt(e.target.value)


const addTransaction = () => {
  const { amount, subject, type } = newTransaction.value
  if (!amount || !subject) return

  if (type === 'expense' && amount > incomeTotal.value) {
    return shankbarError.value = true
  }

  const randomId = Math.floor(Math.random() * 1000)

  store.commit('addTransaction', { id: randomId, ...newTransaction.value })
  newTransaction.value = { subject: '', amount: null, type: newTransaction.value.type }
}
</script>

<style scoped>
.section {
  margin-top: 40px;
}

.section-title {
  text-align: left;
}

.submit-btn {
  background: #009688;
  color: #fff;
}
</style>
