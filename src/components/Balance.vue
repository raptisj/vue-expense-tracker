<template>
    <div class="balance">
        <p>Your balance<span class="balance-amount">$1000</span></p>
    </div>

    <div class="amounts">
        <div class="amounts-each">
            <h3>income</h3>
            <p>1000</p>
        </div>
        <div class="amounts-each">
            <h3>expenses</h3>
            <p>400</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Balance',
    props: {
        msg: String
    }
}
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
    color: green;
    font-weight: 500;
}
</style>
