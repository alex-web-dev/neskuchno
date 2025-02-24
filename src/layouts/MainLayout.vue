<script setup>
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import TheMain from '../components/TheMain.vue';
</script>

<template>

  <TheHeader />

  <TheMain>
    <router-view></router-view>
  </TheMain>

  <TheFooter />

</template>

<style lang="scss" scoped></style>