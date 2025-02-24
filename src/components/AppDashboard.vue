<script setup>
import AppLink from './AppLink.vue';
import AppText from './AppText.vue';
</script>

<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard__content">
        <AppText class="text--lg text--bold">Home</AppText>
        <AppLink to="/event">Event</AppLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>