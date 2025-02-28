<template>
    <span :class="['badge', `badge--${props.color}`]">
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
import type { IBadgeProps } from './AppBadge';

const props = defineProps<IBadgeProps>();
</script>

<style lang="scss" scoped>
.badge {
    padding: vw(3) vw(5);
    border-radius: vw(12);
    font-size: vw(14);
    font-weight: 600;
    display: inline-block;

    &--top {
        background-color: rgba(219, 214, 104, 1);
        color: white;
    }

    @media (max-width: 991px) {
        padding: vw(3, $mobile) vw(5, $mobile);
        border-radius: vw(12, $mobile);
        font-size: vw(14, $mobile);
    }
}
</style>