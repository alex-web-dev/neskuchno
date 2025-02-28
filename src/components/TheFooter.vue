<script lang="ts" setup>
import AppLink from '@/components/AppLink.vue';
import AppText from '@/components/AppText.vue';
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

  &__menu-link {
    display: block;
  }

  &__privacy {
    color: #808080;
    margin-top: vw(63);
  }

  @media (max-width: 991px) {
    padding: vw(10, $mobile) 0;
    border-top: vw(1, $mobile) solid #e5e5e5;

    &__menu {
      padding-top: vw(7, $mobile);
    }

    &__menu-item {
      &:not(:first-child) {
        margin-top: vw(5, $mobile);
      }
    }

    &__privacy {
      margin-top: vw(63, $mobile);
    }
  }
}
</style>