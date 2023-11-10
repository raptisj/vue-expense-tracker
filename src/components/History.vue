<template>
    <div class="section">
        <h2 class="section-title">History</h2>

        <p v-show="!transactions.length">Oh no! There are no transactions here.</p>
        <div class="transaction-list">
            <div class="transaction" v-for="transaction in transactions" :key="transaction.subject"
                :style="{ borderRight: `6px solid ${transaction.type === 'expense' ? 'red' : 'green'}` }">
                <p>{{ transaction.subject }}</p>
                <p>{{ transaction.amount }} $</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const transactions = computed(() => store.getters.getTransactions)


</script>

<style scoped>
.section {
    margin-top: 40px;
}

.section-title {
    text-align: left;
}

.transaction-list {
    display: grid;
    gap: 8px
}

.transaction {
    background: #f7f7f7;
    border-radius: 5px;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}

.transaction p {
    margin: 0;
}

.transaction p:nth-child(2) {
    font-weight: 600;
}
</style>