<script setup lang="ts">
import { useCounterStore } from '~~/stores/counter';

const counter = useCounterStore();

// defineProps<{
//   count: number
// }>();
</script>

<template>
    <div>
        {{ counter.count }}
    </div>
</template>
