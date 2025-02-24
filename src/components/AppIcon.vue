<script setup>
defineProps({
  src: {
    type: String,
    default: null
  }
});
</script>

<template>
  <div class="icon">
    <img v-if="src" class="icon__img" :src="src" alt="">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

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
}
</style>