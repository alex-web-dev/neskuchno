<script lang="ts" setup>
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

  &--clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  @media (max-width: 991px) {
    font-size: vw(24, $mobile);

    &--2 {
      font-size: vw(20, $mobile);
    }
  }
}
</style>
