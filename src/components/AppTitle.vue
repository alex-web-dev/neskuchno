<script setup>
import { computed } from "vue";

const props = defineProps({
  as: {
    type: String,
    default: "div",
  },
  icon: {
    type: String,
    default: null
  }
});

const tag = computed(() => props.as);
</script>

<template>
  <component :is="tag" class="title">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.title {
  font-size: vw(24);
  font-weight: 700;
  line-height: 1.5;

  &--2 {
    font-size: vw(20);
  }

  &--lh-175 {
    line-height: 1.75;
  }

  &--overpass {
    font-family: 'Overpass', sans-serif;
  }

  @media (max-width: 991px) {
    font-size: vw(24, $mobile-width);

    &--2 {
      font-size: vw(20, $mobile-width);
    }
  }
}
</style>
