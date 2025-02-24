<template>
  <div class="event-slider">
    <swiper class="event-slider__main" :slides-per-view="1" :space-between="0" :speed="500"
      :modules="[Navigation, Pagination]"
      :navigation="{ prevEl: '.event-slider__btn-prev', nextEl: '.event-slider__btn-next' }"
      :pagination="{ clickable: true }">
      <swiper-slide class="event-slider__slide">
        <div class="event-slider__item">
          <img class="event-slider__item-img" src="/img/event-img.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="event-slider__slide">
        <div class="event-slider__item">
          <img class="event-slider__item-img" src="/img/event-img.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="event-slider__slide">
        <div class="event-slider__item">
          <img class="event-slider__item-img" src="/img/event-img.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="event-slider__slide">
        <div class="event-slider__item">
          <img class="event-slider__item-img" src="/img/event-img.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide class="event-slider__slide">
        <div class="event-slider__item">
          <img class="event-slider__item-img" src="/img/event-img.jpg" alt="">
        </div>
      </swiper-slide>
    </swiper>
    <AppBtnNext class="event-slider__btn-prev" :rotate="180" />
    <AppBtnNext class="event-slider__btn-next" />
  </div>
</template>
<script setup>
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import AppBtnNext from './AppBtnNext.vue';
</script>
<style lang="scss" scoped>
@use '@/assets/scss/functions.scss' as *;

.event-slider {
  position: relative;
  width: 100%;
  background-color: #777b83;
  border-radius: vw(10);
  overflow: hidden;

  ::v-deep(.swiper-pagination) {
    position: absolute;
    bottom: vw(32);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  &__main {
    position: relative;
  }

  &__slide {
    height: vw(505);
  }

  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item-img {
    object-fit: contain;
    height: 100%;
  }

  &__btn-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: vw(12);
    z-index: 1;
  }

  &__btn-prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: vw(12);
    z-index: 1;
  }

  @media (max-width: 991px) {
    &__slide {
      height: vw(460);
    }

    ::v-deep(.swiper-pagination) {
      bottom: vw(28);
    }
  }
}
</style>