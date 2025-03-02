<script lang="ts" setup>

</script>

<template>
  <a class="logo" href="index.html">
    <img class="logo__img" src="/img/logo.svg" alt="">
  </a>
</template>

<style lang="scss" scoped>

.logo {
  width: vw(220);
  
  &__img {
    width: 100%;
    display: block;
  }

  @media (max-width: 991px) {
    width: vw(220, $mobile);
  }
}
</style>