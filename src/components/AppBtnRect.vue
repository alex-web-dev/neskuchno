<script lang="ts" setup>
import { computed } from "vue";
import AppIcon from "@/components/AppIcon.vue";

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

.btn-rect {
  width: vw(40);
  height: vw(40);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: vw(6);
  background-color: var(--color-white);
  border: vw(1) solid #e5e5e5;

  @media (max-width: 991px) {
    width: vw(40, $mobile);
    height: vw(40, $mobile);
    border-radius: vw(6, $mobile);
    border-width: vw(1, $mobile);
  }
}
</style>
