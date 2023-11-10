<template>
    <div class="balance">
        <p>Your balance<span class="balance-amount">$</span></p>
    </div>

    <div class="amounts">
        <div class="amounts-each">
            <h3>income</h3>
            <p :style="{ color: 'green' }">+{{ calculateIncome(transactions, 'income') }}</p>
        </div>
        <div class="amounts-each">
            <h3>expenses</h3>
            <p :style="{ color: 'red' }">-{{ calculateIncome(transactions, 'expense') }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { calculateIncome } from '../utils'

const store = useStore()
const transactions = computed(() => store.getters.getTransactions)

</script>

<style scoped>
.balance-amount {
    font-size: 28px;
    font-weight: 500;
    margin-left: 8px;
}

.amounts {
    min-height: 120px;
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.amounts-each {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.amounts-each>h3 {
    font-size: 20px;
    margin: 0;
    font-weight: 500;
    text-transform: uppercase;
}

.amounts-each>p {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
}
</style>
