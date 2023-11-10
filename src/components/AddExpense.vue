<template>
    <div class="section">
        <h2 class="section-title">Add expense</h2>

        <v-form v-model="valid">
            <v-text-field v-model="newTransaction.subject" required hide-details label="Subject"
                @change="addSubject"></v-text-field>
            <v-row class="col-spacing">

                <v-icon color="red" icon="mdi-minus" class="symbol" v-show="showExpense"></v-icon>
                <v-icon color="green" icon="mdi-plus" class="symbol" v-show="!showExpense"></v-icon>

                <v-col cols="8" v-show="showExpense">
                    <v-text-field v-model="newTransaction.amount" hide-details required label="Expense" type="number"
                        min="0" @change="addExpenseAmount"></v-text-field>
                </v-col>

                <v-col cols="8" v-show="!showExpense">
                    <v-text-field v-model="newTransaction.amount" hide-details required label="Income" type="number" min="0"
                        @change="addIncomeAmount"></v-text-field>
                </v-col>

                <v-col cols="4">
                    <v-switch :label="`Switch to ${showExpense ? 'income' : 'expense'}`" v-model="showExpense"
                        @change="onChangeType"></v-switch>
                </v-col>
            </v-row>

            <v-btn block class="submit-btn" @click="addTransaction">
                Add
            </v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const initialValues = { subject: '', amount: null, type: 'expense' }
const showExpense = ref(true)
const newTransaction = ref(initialValues)

function addSubject(e) {
    newTransaction.value.subject = e.target.value
}

function onChangeType(e) {
    newTransaction.value.type = e.target.checked ? 'expense' : 'income'
    newTransaction.value.amount = null
}

function addExpenseAmount(e) {
    newTransaction.value.amount = parseInt(e.target.value)
}


function addIncomeAmount(e) {
    newTransaction.value.amount = parseInt(e.target.value)
}

function addTransaction() {
    const { amount, subject } = newTransaction.value
    if (!amount || !subject) return

    // console.log(newTransaction.value, 'newTransaction')
    store.commit('addTransaction', newTransaction.value)
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

.col-spacing {
    margin-top: 8px;
    position: relative;
}

.symbol {
    position: absolute;
    font-size: 36px;
    top: 20px;
    left: -24px;
}
</style>
