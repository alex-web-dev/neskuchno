

<template>
    <svg class="icon-class" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 6L6 1L1 6" :stroke="color || 'black'" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color?: string;
}>();
</script>

<style lang="scss" scoped>

.icon-class {
    width: vw(12);
    height: vw(7);
}
</style>