<template>
  <div class="accordion" :class="accordionClasses">
    <button class="accordion__btn" :class="[{ 'accordion__btn--active': isBtnActive }]" @click="toggle">
      <slot name="btn"></slot>
    </button>
    <div class="accordion__content" ref="$content" :style="contentStyles" @transitionend="transitionendHandler">
      <div class="accordion__main" ref="$main">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },
});

const $content = ref<HTMLElement | null>(null);
const $main = ref<HTMLElement | null>(null);
const isActive = ref(props.active);
const isBtnActive = ref(false);
const isActivating = ref(false);
const height = ref<number | null>(null);

const accordionClasses = computed(() => ({
  'accordion--active': isActive.value,
  'accordion--activating': isActivating.value
}));

const contentStyles = computed(() => {
  if (height.value === null) {
    return null;
  } else {
    return { height: height.value + 'px' };
  }
});

function toggle() {
  if (!isActive.value) {
    isActivating.value = true;
    isBtnActive.value = true;
    if ($main.value) {
      const el = $main.value;
      setTimeout(() => (height.value = el.getBoundingClientRect().height));
    }
  } else {
    if ($main.value) {
      height.value = $main.value.getBoundingClientRect().height;
    }
    isBtnActive.value = false;
    isActivating.value = true;
    setTimeout(() => (height.value = 0));
  }
}

function transitionendHandler(event: Event) {
  if (event.target !== $content.value) {
    return;
  }

  isActivating.value = false;
  isActive.value = !isActive.value;

  if (isActive.value) {
    height.value = null;
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  overflow: hidden;

  &__btn {
    user-select: none;
    cursor: pointer;
    width: 100%;
  }

  &__content {
    display: none;
  }

  &--activating &__content {
    height: 0;
    display: block;
    overflow: hidden;
    transition: height 0.5s;
  }

  &--active &__content {
    display: block;
  }
}
</style>
