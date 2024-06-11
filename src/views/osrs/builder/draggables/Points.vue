<template>
    <div class="corner-point top"></div>
    <div class="corner-point left"></div>
    <div class="corner-point bottom"></div>
    <div class="corner-point right"></div>
</template>

<style lang="scss" scoped>
.corner-point {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(63, 63, 63, 0.50);
}

.corner-point:hover {
    background-color: rgba(63, 63, 63);
}

.top {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
}

.left {
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
}

.bottom {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
}

.right {
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
}
</style>