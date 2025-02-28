<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    default: null
  }
});

import { useImage } from '@/hooks/useImage';
</script>

<template>
  <div class="icon">
    <img v-if="src" class="icon__img" :src="useImage(src)" alt="">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>

.icon {
  width: vw(20);
  height: vw(20);
  display: flex;
  align-items: center;
  justify-content: center;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    width: vw(20, $mobile);
    height: vw(20, $mobile);
  }
}
</style>