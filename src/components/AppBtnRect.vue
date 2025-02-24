<script setup>
import { computed } from "vue";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
  as: {
    type: String,
    default: "button",
  },
  icon: {
    type: String,
    default: null
  }
});

const tag = computed(() => props.as);
</script>

<template>
  <component :is="tag" class="btn-rect">
    <AppIcon v-if="icon" :src="icon" class="btn-rect__icon" />
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.btn-rect {
  width: vw(40);
  height: vw(40);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: vw(6);
  background-color: var(--color-white);
  border: vw(1) solid #e5e5e5;
}
</style>
