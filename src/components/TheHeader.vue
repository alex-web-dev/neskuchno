<script lang="ts" setup>
import AppBtn from '@/components/AppBtn.vue';
import AppLogo from '@/components/AppLogo.vue';
import AppText from '@/components/AppText.vue';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <AppLogo class="header__logo" />
        <AppText class="text--lg text--extrabold text--montserrat text--upper header__text">Абсолютно все события вашего
          города</AppText>
        <div class="header__btns">
          <AppBtn class="btn--rounded-3xl header__btns-item">Войти</AppBtn>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.header {
  padding: vw(20) 0;

  &__content {
    display: flex;
    align-items: center;
  }

  &__logo {
    flex: 1 1 0%;
    max-width: vw(220);
  }

  &__text {
    margin-left: vw(40);
  }

  &__btns {
    margin-left: auto;
    flex: 0 0 auto;
    padding-left: vw(20);
    display: flex;
  }

  &__btns-item {
    &:not(:first-child) {
      margin-left: vw(20);
    }
  }

  @media (max-width: 991px) {
    padding: vw(20, $mobile) 0;

    &__content {
      flex-wrap: wrap;
    }

    &__text {
      margin-top: vw(20, $mobile);
      margin-left: 0;
      order: 2;
      width: 100%;
    }

    &__logo {
      max-width: vw(220, $mobile);
    }

    &__btns {
      padding-left: vw(20, $mobile);
    }

    &__btns-item {
      &:not(:first-child) {
        margin-left: vw(20, $mobile);
      }
    }
  }
}
</style>