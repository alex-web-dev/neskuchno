<script lang="ts" setup>
defineProps({
  rotate: {
    type: Number,
    default: null,
  },
})
</script>

<template>
  <button class="btn-next">
    <img class="btn-next__icon" :style="{ transform: `rotate(${rotate}deg)` }" src="/img/icons/next-gray-850.svg"
      alt="">
  </button>
</template>

<style lang="scss" scoped>

.btn-next {
  width: vw(30);
  height: vw(30);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: vw(1) solid #e5e5e5;
  border-radius: 50%;
  box-shadow: 0px vw(1) vw(2) rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: opacity 0.35s;

  &__icon {
    width: vw(9);
    height: vw(16);
  }

  &.swiper-button-disabled {
    opacity: 0.5;
    cursor: default;
  }

  @media (max-width: 991px) {
    width: vw(30, $mobile);
    height: vw(30, $mobile);

    &__icon {
      width: vw(9, $mobile);
      height: vw(16, $mobile);
    }
  }
}
</style>