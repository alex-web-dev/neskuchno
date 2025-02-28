<script lang="ts" setup>
import AppIcon from '@/components/AppIcon.vue';
import AppText from '@/components/AppText.vue';
import AppBtnRect from '@/components/AppBtnRect.vue';
import AppTitle from '@/components/AppTitle.vue';
import AppBtn from '@/components/AppBtn.vue';
import AppArticle from '@/components/AppArticle.vue';
import EventSlider from '@/components/EventSlider.vue';
</script>

<template>
  <div class="event">
    <div class="container">
      <div class="event__content">
        <EventSlider class="event__slider" />
        <div class="event__header">
          <div class="event__meta">
            <AppText class="text--iflex text--sm text--bold text--gray-800 event__meta-item">
              <template v-slot:leftIcon>
                <AppIcon src="/img/icons/calendar-gray-800.svg" />
              </template>
              <span>03.01.2025</span>
            </AppText>
            <AppText class="text--iflex text--sm text--medium text--gray-800 event__meta-item">
              <template v-slot:leftIcon>
                <AppIcon src="/img/icons/clock-gray-800.svg" />
              </template>
              <span>19:00-22:00</span>
            </AppText>
          </div>
          <div class="event__header-btns">
            <AppBtnRect class="event__header-btn" icon="/img/icons/heart-gray-950.svg"></AppBtnRect>
            <AppBtnRect class="event__header-btn" icon="/img/icons/upload-gray-950.svg"></AppBtnRect>
          </div>
        </div>
        <AppTitle as="h1" class="title--lh-175 title--overpass event__title">Быстрые свидания в Москве</AppTitle>
        <AppText class="text--iflex text--sm text--medium text--gray-800 event__location">
          <template v-slot:leftIcon>
            <AppIcon src="/img/icons/location-gray-800.svg" />
          </template>
          <span>м. Проспект Мира Улица Королева-Корсакова., дом 32 корпус 5 ресторан “Печаль Моряка”</span>
        </AppText>
        <div class="event__details">
          <AppText class="text--sm text--medium event__detail">от 1 499 ₽</AppText>
          <AppText class="text--sm text--medium event__detail">до 2 499 ₽</AppText>
          <AppText class="text--sm text--medium event__detail">Бесплатное</AppText>
        </div>
        <div class="event__btns">
          <AppBtn class="btn--py-sm btn--px-2xs btn--rounded-sm btn--text-sm btn--text-medium event__btn">
            <template v-slot:leftIcon>
              <AppIcon src="/img/icons/chain-white.svg" />
            </template>
            <span>Сайт организатора</span>
          </AppBtn>
          <AppBtn class="btn--py-sm btn--px-xs btn--rounded-sm btn--text-sm btn--text-medium event__btn">
            <template v-slot:leftIcon>
              <AppIcon src="/img/icons/telegram-white.svg" />
            </template>
            <span>Написать</span>
          </AppBtn>
          <AppBtn class="btn--py-sm btn--px-xs btn--rounded-sm btn--text-sm btn--text-medium event__btn">
            <template v-slot:leftIcon>
              <AppIcon src="/img/icons/telegram-white.svg" />
            </template>
            <span>Написать</span>
          </AppBtn>
        </div>
        <AppArticle class="event__article">
          <p>
            🔥Забудьте о бесконечных переписках и ограничениях: Speed Dating — это встречи, наполненные искренними
            эмоциями
            и
            живым общением. За вечер вы познакомитесь с 10–15 интересными людьми, которые, как и вы, ищут чего-то
            настоящего
            и
            уникального.
          </p>
          <p>Что вас ждёт?🤔</p>
          <ul>
            <li>Невероятная динамика — 5 минут на встречу, чтобы понять, есть ли «та самая искра».</li>
            <li>Идеальные условия — атмосфера уюта и непринуждённости, где легко быть собой.</li>
            <li>Настоящие знакомства — шанс на общение, дружбу, а может и нечто большее!</li>
          </ul>
          <p>
            ️Присоединяйтесь к вечеринке новых знакомств и позвольте себе встретить кого-то, кто добавит яркости в вашу
            жизнь!
          </p>
        </AppArticle>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.event {
  &__content {
    margin: 0 auto;
    width: vw(760);
  }

  &__slider {
    margin-bottom: vw(15);
  }

  &__header {
    margin-bottom: vw(15);
    display: flex;
    align-items: center;
  }

  &__header-btns {
    margin-left: auto;
    flex: 0 0 auto;
    padding-left: vw(20);
    display: flex;
  }

  &__header-btn {
    &:not(:first-child) {
      margin-left: vw(20);
    }
  }

  &__meta {
    margin-top: vw(-10);
    margin-left: vw(-35);
    display: flex;
    flex-wrap: wrap;
  }

  &__meta-item {
    margin-top: vw(10);
    margin-left: vw(35);
  }

  &__title {
    margin-bottom: vw(15);
  }

  &__location {
    margin-bottom: vw(15);
    padding: vw(9) 0;
  }

  &__details {
    margin-top: vw(-10);
    margin-left: vw(-40);
    margin-bottom: vw(15);
    display: flex;
    flex-wrap: wrap;
  }

  &__detail {
    margin-top: vw(10);
    margin-left: vw(40);
  }

  &__btns {
    margin-top: vw(-20);
    margin-left: vw(-20);
    display: flex;
    flex-wrap: wrap;
  }

  &__btn {
    margin-top: vw(20);
    margin-left: vw(20);
  }

  &__article {
    margin-top: vw(32);
  }

  @media (max-width: 991px) {
    &__content {
      width: vw(460, $mobile);
    }

    &__slider {
      margin-bottom: vw(15, $mobile);
    }

    &__header {
      margin-bottom: vw(15, $mobile);
    }

    &__header-btns {
      padding-left: vw(20, $mobile);
    }

    &__header-btn {
      &:not(:first-child) {
        margin-left: vw(20, $mobile);
      }
    }

    &__meta {
      margin-top: vw(-10, $mobile);
      margin-left: vw(-35, $mobile);
    }

    &__meta-item {
      margin-top: vw(10, $mobile);
      margin-left: vw(35, $mobile);
    }

    &__title {
      margin-bottom: vw(15, $mobile);
    }

    &__location {
      margin-bottom: vw(15, $mobile);
      padding: vw(2, $mobile) 0;
    }

    &__details {
      margin-top: vw(-10, $mobile);
      margin-left: vw(-40, $mobile);
      margin-bottom: vw(15, $mobile);
    }

    &__detail {
      margin-top: vw(10, $mobile);
      margin-left: vw(40, $mobile);
    }

    &__btns {
      margin-top: vw(-20, $mobile);
      margin-left: vw(-20, $mobile);
    }

    &__btn {
      margin-top: vw(20, $mobile);
      margin-left: vw(20, $mobile);
    }

    &__article {
      margin-top: vw(32, $mobile);
    }
  }
}
</style>