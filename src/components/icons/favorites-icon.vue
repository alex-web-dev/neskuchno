<template>
    <svg class="icon-class" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.66699 7.00004C1.66679 5.79199 2.15231 4.63458 3.01434 3.78823C3.87636 2.94188 5.04248 2.47767 6.25033 2.50004C7.68143 2.49244 9.04698 3.09935 10.0003 4.16671C10.9537 3.09935 12.3192 2.49244 13.7503 2.50004C14.9582 2.47767 16.1243 2.94188 16.9863 3.78823C17.8483 4.63458 18.3339 5.79199 18.3337 7.00004C18.3337 11.4634 13.0178 14.8334 10.0003 17.5C6.98949 14.8109 1.66699 11.4667 1.66699 7.00004Z"
            :fill="inFavorites ? color : 'none'" :stroke="inFavorites ? 'none' : color" stroke-width="1.5" />
    </svg>
</template>

<script setup lang="ts">
defineProps<{
    color?: string;
    inFavorites: boolean; 
    size?: string;
}>();
</script>

<style lang="scss" scoped>

.icon-class {
    width: vw(20);
    height: vw(20);
}
</style>