<template>
    <div class="loader">
        <div class="columnize-me-captain">
            <div class="lds-heart">
                <div></div>
            </div>
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    display: grid;
    place-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(255, 255, 255, 0.8)
}

.columnize-me-captain {
    display: flex;
    flex-direction: column;
}

.lds-heart {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    transform: rotate(45deg);
    transform-origin: 40px 40px;
}

.lds-heart div {
    top: 32px;
    left: 32px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: palevioletred;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.lds-heart div:after,
.lds-heart div:before {
    content: " ";
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: palevioletred;
}

.lds-heart div:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
}

.lds-heart div:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
}

@keyframes lds-heart {
    0% {
        transform: scale(0.95);
    }

    5% {
        transform: scale(1.1);
    }

    39% {
        transform: scale(0.85);
    }

    45% {
        transform: scale(1);
    }

    60% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(0.9);
    }
}
</style>
