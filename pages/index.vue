<script setup lang="ts">
// const count = ref(0);

import { useCounterStore } from '~~/stores/counter';

// function increment() {
//     count.value++;
// }

const counter = useCounterStore();
</script>

<template>
    <div>
        <h1>Count On Me</h1>
        <p>Go ahead and count</p>

        <div class="counter">
            <!-- <Counter :count="count"></Counter> -->
            <TheCounter></TheCounter>

            <!-- {{ count }} -->

            <button @click="counter.increment">Add</button>
        </div>
    </div>
</template>

<style scoped>
.counter {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    width: 10%;
}
</style>
