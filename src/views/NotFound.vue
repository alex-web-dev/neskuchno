<script setup lang="ts">
import AppLink from '@/components/AppLink.vue';
import AppTitle from '@/components/AppTitle.vue';

</script>

<template>
  <div class="not-found">
    <AppTitle>Страница не найдена</AppTitle>
    <AppLink class="not-found__link" to="/">Вернуться на главную</AppLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__link {
    margin-top: vw(10);
  }

  @media (max-width: 991px) {
    &__link {
      margin-top: vw(10, $mobile);
    }
  }
}
</style>