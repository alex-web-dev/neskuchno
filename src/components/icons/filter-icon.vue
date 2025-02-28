<template>
    <svg class="icon-class" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8.44477 16C8.44477 18.1478 6.70366 19.8889 4.55588 19.8889C2.40811 19.8889 0.666992 18.1478 0.666992 16C0.666992 13.8522 2.40811 12.1111 4.55588 12.1111C6.70366 12.1111 8.44477 13.8522 8.44477 16ZM8.44477 16L20.667 16M12.8892 4.88889C12.8892 7.03666 14.6303 8.77778 16.7781 8.77778C18.9259 8.77778 20.667 7.03666 20.667 4.88889C20.667 2.74111 18.9259 1 16.7781 1C14.6303 1 12.8892 2.74111 12.8892 4.88889ZM12.8892 4.88889L0.666992 4.88889"
            :stroke="color || 'black'" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
    
    <script setup lang="ts">
    defineProps<{
        color?: string;
    }>();
    </script>
    
    <style lang="scss" scoped>

    .icon-class {
        width: vw(20);
        height: vw(20);
    }
</style>