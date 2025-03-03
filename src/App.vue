<script lang="ts" setup>
import { useScreenSize } from '@/composables/useScreenSize';
import MainLayout from '@/layouts/MainLayout.vue';
import AppNotification from './components/AppNotification.vue';
import AppMessages from './components/AppMessages.vue';

const { isMobile } = useScreenSize()
</script>

<template>
  <MainLayout />

  <AppNotification v-if="!isMobile"/>

  <AppMessages />
</template>

<style scoped>
</style>
