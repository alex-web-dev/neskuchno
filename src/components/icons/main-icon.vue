
<template>
    <svg class="icon-class" viewBox="0 0 220 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M220 21.9997H213.222L7.05772 10.8517V22H0V0.000294159H7.26736L212.942 10.4227V0H220V21.9997Z"
            :fill="color || 'black'" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color?: string;
}>();
</script>

<style lang="scss" scoped>

.icon-class {
    height: vw(22);
}
</style>