<script lang="ts" setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  as: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: null,
  }
});

const tag = computed(() => {
  if (props.to) return RouterLink;
  if (props.href) return "a";
  return props.as || "button";
});

const attrs = computed(() => {
  if (props.to) return { to: props.to };
  if (props.href) return { href: props.href };
  return {};
});
</script>

<template>
  <component :is="tag" class="link" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>

.link {
  font-size: vw(16);
  line-height: 1.25;
  transition: color 0.35s;

  &:hover {
    color: var(--color-primary-700);
  }

  @media (max-width: 991px) {
    font-size: vw(16, $mobile);
  }
}
</style>
