<template>
    <div class="section">
        <h2 class="section-title">History</h2>

        <div class="expense-list">
            <div class="expense">
                <p>salary</p>
                <p>+2000</p>
            </div>
            <div class="expense">
                <p>lunch</p>
                <p>-20</p>
            </div>
            <div class="expense">
                <p>buy a tv</p>
                <p>-200</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'History',
}
</script>

<style scoped>
.section {
    margin-top: 40px;
}

.section-title {
    text-align: left;
}

.expense-list {
    display: grid;
    gap: 8px
}

.expense {
    background: #f7f7f7;
    border-radius: 5px;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}

.expense p {
    margin: 0;
}

.expense p:nth-child(2) {
    font-weight: 600;
}
</style>