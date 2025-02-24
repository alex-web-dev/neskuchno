<script setup>
import AppLink from './AppLink.vue';
import AppText from './AppText.vue';


</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__menu">
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <AppLink class="footer__menu-link">Пользовательское соглашение</AppLink>
            </li>
            <li class="footer__menu-item">
              <AppLink class="footer__menu-link">Оферта на оказание информационных услуг</AppLink>
            </li>
            <li class="footer__menu-item">
              <AppLink class="footer__menu-link">Политика обработки персональных данных</AppLink>
            </li>
            <li class="footer__menu-item">
              <AppLink class="footer__menu-link">Связаться с поддержкой</AppLink>
            </li>
          </ul>
        </div>
        <AppText class="text--sm text--semibold footer__privacy">
          ©2022-2025 «Neskuchno» <br>
          Абсолютно все события вашего города
        </AppText>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.footer {
  padding: vw(10) 0;
  border-top: vw(1) solid #e5e5e5;

  &__menu {
    padding-top: vw(7);
  }

  &__menu-item {
    &:not(:first-child) {
      margin-top: vw(5);
    }
  }

  &__privacy {
    margin-top: vw(63);
    color: #808080;
  }

  @media (max-width: 991px) {
    padding: vw(10, $mobile-width) 0;
    border-top: vw(1, $mobile-width) solid #e5e5e5;

    &__menu {
      padding-top: vw(7, $mobile-width);
    }

    &__menu-item {
      &:not(:first-child) {
        margin-top: vw(5, $mobile-width);
      }
    }

    &__privacy {
      margin-top: vw(63, $mobile-width);
    }
  }
}
</style>