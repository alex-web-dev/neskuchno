<script setup>

</script>

<template>
  <a class="logo" href="index.html">
    <img class="logo__img" src="/img/logo.svg" alt="">
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.logo {
  width: vw(220);
  
  &__img {
    width: 100%;
    display: block;
  }
}
</style>