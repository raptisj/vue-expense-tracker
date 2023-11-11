<script setup>
import { defineProps } from "vue";

const props = defineProps({
    show: Boolean
})
</script>
    
<template>
    <v-icon color="red" icon="mdi-minus" class="symbol" v-show="props.show"></v-icon>
    <v-icon color="green" icon="mdi-plus" class="symbol" v-show="!props.show"></v-icon>
</template>


<style scoped>
.symbol {
    position: absolute;
    font-size: 36px;
    top: 23px;
    left: -23px;
}
</style>
