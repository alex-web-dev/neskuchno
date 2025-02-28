<script lang="ts" setup>
import { useSlots, computed } from 'vue'

type Slots = {
  default?: any;
  leftIcon?: any;
  rightIcon?: any;
};

const slots: Slots = useSlots();
const props = defineProps({
  as: {
    type: String,
    default: "button",
  },
});

const tag = computed(() => props.as);
</script>

<template>
  <component :is="tag" class="btn">
    <div v-if="slots.leftIcon" class="btn__icon">
      <slot name="leftIcon"></slot>
    </div>
    <slot></slot>
    <div v-if="slots.rightIcon" class="btn__icon">
      <slot name="rightIcon"></slot>
    </div>
  </component>
</template>

<style lang="scss" scoped>
.btn {
  padding: vw(8) vw(26);
  background-color: var(--color-primary-400);
  border-radius: vw(10);
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: vw(16);
  font-weight: 600;
  line-height: 1.5;
  color: #fff;
  background: linear-gradient(108.67deg, #AF29BE 24.4%, #7329BE 77.2%);

  &--py-2xl {
    padding-top: vw(13);
    padding-bottom: vw(13);
  }

  &--py-lg {
    padding-top: vw(10);
    padding-bottom: vw(10);
  }

  &--px-xs {
    padding-left: vw(13);
    padding-right: vw(13);
  }

  &--px-2xs {
    padding-left: vw(10);
    padding-right: vw(10);
  }

  &--sm {
    padding: vw(10);
    font-size: vw(14);
  }

  &--rounded-sm {
    border-radius: vw(6);
  }

  &--rounded-3xl {
    border-radius: vw(90);
  }

  &--text-sm {
    font-size: vw(14);
  }

  &--text-medium {
    font-weight: 500;
  }

  &--full {
    width: 100%;
  }

  &__icon {
    flex: 0 0 auto;

    &:first-child:not(:last-child) {
      margin-right: vw(8);
    }

    &:last-child:not(:first-child) {
      margin-left: vw(8);
    }
  }

  @media (max-width: 991px) {
    padding: vw(8, $mobile) vw(26, $mobile);
    border-radius: vw(10, $mobile);
    font-size: vw(16, $mobile);

    &--py-2xl {
      padding-top: vw(13, $mobile);
      padding-bottom: vw(13, $mobile);
    }

    &--py-lg {
      padding-top: vw(10, $mobile);
      padding-bottom: vw(10, $mobile);
    }

    &--px-xs {
      padding-left: vw(13, $mobile);
      padding-right: vw(13, $mobile);
    }

    &--px-2xs {
      padding-left: vw(10, $mobile);
      padding-right: vw(10, $mobile);
    }

    &--sm {
      padding: vw(10, $mobile);
      font-size: vw(14, $mobile);
    }

    &--rounded-sm {
      border-radius: vw(6, $mobile);
    }

    &--rounded-3xl {
      border-radius: vw(90, $mobile);
    }

    &--text-sm {
      font-size: vw(14, $mobile);
    }

    &__icon {
      &:first-child:not(:last-child) {
        margin-right: vw(8, $mobile);
      }

      &:last-child:not(:first-child) {
        margin-left: vw(8, $mobile);
      }
    }
  }
}
</style>
