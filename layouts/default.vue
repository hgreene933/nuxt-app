<template>
    <div>
        <NuxtLoadingIndicator />
        <NavBar />
        <div class="container">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@use 'node_modules/modern-normalize/modern-normalize.css';

:root {
    --primary-background: #fff;
    --splashy-splash: linear-gradient(42deg, rgba(32, 194, 155, 1) 0%, rgba(240, 250, 90, 1) 35%, rgba(182, 40, 249, 1) 74%, rgba(255, 0, 7, 1) 100%);
    --text-color: #15141A;
    --nav-color: purple;
    --nav-color-active: tomato;
}

body {
    background: var(--splashy-splash);
    min-height: 100dvh;
}

.container {
    margin: 25px clamp(1rem, 10%, 17rem);
    padding: 15px;
    background-color: var(--primary-background);
    min-height: 80dvh;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

h1 {
    color: var(--text-color);
    margin: 0;
}

body,
p {
    color: var(--text-color);
    font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
