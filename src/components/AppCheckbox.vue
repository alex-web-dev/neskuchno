<template>
  <label class="checkbox">
    <input class="checkbox__input" :type="type" v-model="modelValue" />
    <span class="checkbox__switch">
      <div class="checkbox__switch-border"></div>
    </span>
    <div class="checkbox__text">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
const modelValue = defineModel<boolean>();
defineProps({
  type: { type: String, default: 'checkbox' },
});
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: flex-start;
  user-select: none;
  cursor: pointer;

  &__input {
    display: none;
  }

  &__switch {
    position: relative;
    flex: 0 0 auto;
    width: vw(20);
    height: vw(20);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.35s;
  }

  &__text {
    transition: opacity 0.35s;
  }

  &__switch-border {
    display: flex;
    align-items: center;
    justify-content: center;
    width: vw(18);
    height: vw(18);
    border: vw(1.6) solid var(--color-gray-500);
    border-radius: vw(2);
    cursor: pointer;

    &:before {
      content: '';
      background: url('/public/img/icons/check-primary-700.svg') center / contain no-repeat;
      width: vw(9);
      height: vw(8);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.35s, visibility 0.35s;
    }
  }

  &:hover &__switch {
    opacity: 0.7;
  }

  &:hover &__text {
    opacity: 0.7;
  }

  &__input:checked~&__switch &__switch-border {
    width: vw(16);
    height: vw(16);
    border-color: var(--color-primary-700);

    &:before {
      opacity: 1;
      visibility: visible;
    }
  }

  &__text {
    margin-left: vw(5);
  }

  @media (max-width: 991px) {
    &__switch {
      width: vw(20, $mobile);
      height: vw(20, $mobile);
    }

    &__switch-border {
      width: vw(18, $mobile);
      height: vw(18, $mobile);
      border: vw(1.6, $mobile) solid var(--color-gray-500);
      border-radius: vw(2, $mobile);

      &:before {
        width: vw(9, $mobile);
        height: vw(8, $mobile);
      }
    }

    &__input:checked~&__switch &__switch-border {
      width: vw(16, $mobile);
      height: vw(16, $mobile);
    }

    &__text {
      margin-left: vw(5, $mobile);
    }
  }
}
</style>
