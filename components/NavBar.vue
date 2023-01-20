<script setup lang="ts">
import { useCounterStore } from '~~/stores/counter';

const counter = useCounterStore();
</script>

<template>
    <nav>
        <ul>
            <div class="links">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="about">About Us</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="contact">Contact Us</NuxtLink>
                </li>
            </div>
            <p>Count: {{ counter.count }}</p>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background-color: var(--primary-background);
    padding: 10px clamp(1rem, 10%, 17rem);
    border-bottom: 15px solid plum;
}

ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    list-style: none;
}

.links {
    display: flex;
    gap: 20px;
}

a {
    position: relative;
    text-decoration: none;
    color: var(--nav-color);

    &:hover {
        text-decoration: underline;
    }
}

.router-link-exact-active {
    color: var(--nav-color-active);

    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--nav-color-active)
    }
}
</style>
