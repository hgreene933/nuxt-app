<script setup lang="ts">
const { data: texts, refresh } = await useFetch<string[]>("https://baconipsum.com/api/?type=meat-and-filler");
const { data: productsList, pending } = await useLazyFetch("/api/about");
</script>

<template>
    <div>
        <h1>About Us</h1>

        <div v-if="texts && texts?.length > 0">
            <p v-for="(text, index) in texts" :key="index">
                {{ text }}
            </p>

            <button @click="refresh()">New Text</button>
        </div>

        <hr />

        <h2>Our Products</h2>

        <div v-if="pending">
            Loading Products
        </div>
        <ul v-else-if="productsList && productsList?.length > 0">
            <li v-for="product in productsList" :key="product.id">
                {{ product.title }} - {{ product.description }}
            </li>
        </ul>
        <div v-else>
            No Products
        </div>

    </div>
</template>
