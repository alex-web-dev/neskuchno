<script setup>

</script>

<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.main {
  padding-bottom: vw(62);
  flex: 1 1 auto;
}
</style>