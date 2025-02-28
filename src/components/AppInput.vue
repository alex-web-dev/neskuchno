<script lang="ts" setup>
import AppIcon from '@/components/AppIcon.vue';

const props = defineProps({
  type: String,
  label: String,
  id: String,
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  rightIcon: String,
});

const inputType = props.type || 'text';
</script>

<template>
  <div class="input">
    <div class="input__main">
      <input class="input__field" :class="{ 'input__field--icon-right': props.rightIcon }" :id="id" :type="inputType"
        :value="modelValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly">
      <AppIcon class="input__icon" :src="rightIcon" />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.input {
  &__main {
    position: relative;
  }

  &__field {
    padding: vw(8) vw(10);
    width: 100%;
    background: #ffffff;
    border: vw(1) solid #1a092a;
    box-shadow: vw(3) vw(3) 0px vw(1.33333) var(--color-secondary-700);
    border-radius: vw(10);
    line-height: 1.5;
    outline: none;

    &::placeholder {
      color: var(--color-gray-950);
      font-weight: 600;
    }

    &--icon-right {
      padding-right: vw(40);
    }

    &--icon-left {
      padding-left: vw(40);
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: vw(10);
  }

  @media (max-width: 991px) {
    &__field {
      padding: vw(8, $mobile) vw(10, $mobile);
      border: vw(1, $mobile) solid #1a092a;
      box-shadow: vw(3, $mobile) vw(3, $mobile) 0px vw(1.33333, $mobile) var(--color-secondary-700);
      border-radius: vw(10, $mobile);
    }

    &__icon {
      right: vw(10, $mobile);
      width: vw(26, $mobile);
      height: vw(26, $mobile);
    }
  }
}
</style>