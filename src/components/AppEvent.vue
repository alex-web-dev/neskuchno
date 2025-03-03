<script lang="ts" setup>
import AppIcon from '@/components/AppIcon.vue';
import AppText from '@/components/AppText.vue';
import AppBtnRect from '@/components/AppBtnRect.vue';
import AppTitle from '@/components/AppTitle.vue';
import AppBtn from '@/components/AppBtn.vue';
import AppArticle from '@/components/AppArticle.vue';
import EventSlider from '@/components/EventSlider.vue';
import favoritesIcon from '@/components/icons/favorites-icon.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getEvent } from '@/api/eventsApi';
import { computed, reactive } from '@vue/reactivity';
import { useMessagesStore } from '@/stores/messages';
import type { IEvent } from '@/stores/events/types';
import type { AxiosError } from 'axios';

const route = useRoute();
const eventId = route.params.id;
const event = ref<IEvent | null>(null);
const isLoading = ref(true);
const messagesStore = useMessagesStore();
const isInFavorites = ref<boolean>(false)
const favoritesIconColor = computed(() => isInFavorites.value ? 'var(--color-primary-700)' : 'var(--color-black)');
const handleClickFavorites = () => {
    isInFavorites.value = !isInFavorites.value;
}

onMounted(async () => {
  try {
    isLoading.value = true;
    const data = await getEvent(Number(eventId));
    event.value = data;
  } catch (err) {
    const error = err as AxiosError;
    if (error.response?.status === 404) {
      messagesStore.addMessage('Событие не найдено', 'error');
    } else {
      messagesStore.addMessage('Произошла ошибка при загрузке события. Попробуйте позже.', 'error');
    }
  } finally {
    isLoading.value = false;
  }
});

const date = computed(() => {
  if (!event.value) {
    return null;
  }
  const datetime = event.value.datetime[0].from;
  return datetime ? datetime.split('T')[0] : null;
});

const time = computed(() => {
  if (!event.value) {
    return null;
  }
  const datetime = event.value.datetime[0].from;
  return datetime ? datetime.split('T')[1] : null;
});

const placeholderImages = reactive([
  'img/event-img.jpg',
  'img/event-img.jpg',
  'img/event-img.jpg',
  'img/event-img.jpg',
  'img/event-img.jpg',
]);

const firstImageLoaded = ref(true);
const sliderImages = computed(() =>
  event.value && firstImageLoaded.value ? event.value.images : placeholderImages
);
</script>

<template>
  <div class="event">
    <div class="container">
      <div v-if="!isLoading && event" class="event__content">
        <EventSlider class="event__slider" :images="sliderImages" @imageError="firstImageLoaded = false" />
        <div class="event__header">
          <div class="event__meta">
            <AppText v-if="date" class="text--iflex text--sm text--bold text--gray-800 event__meta-item">
              <template v-slot:leftIcon>
                <AppIcon src="img/icons/calendar-gray-800.svg" />
              </template>
              <span>{{ date }}</span>
            </AppText>
            <AppText v-if="time" class="text--iflex text--sm text--medium text--gray-800 event__meta-item">
              <template v-slot:leftIcon>
                <AppIcon src="img/icons/clock-gray-800.svg" />
              </template>
              <span>{{ time }}</span>
            </AppText>
          </div>
          <div class="event__header-btns">
            <AppBtnRect class="event__header-btn" @click="handleClickFavorites">
              <favorites-icon class="event-card__poster-favorites" :inFavorites="isInFavorites"
              :color="favoritesIconColor" />
            </AppBtnRect>
            <AppBtnRect class="event__header-btn" icon="img/icons/upload-gray-950.svg"></AppBtnRect>
          </div>
        </div>
        <AppTitle as="h1" class="title--lh-175 title--overpass event__title">{{ event.name }}</AppTitle>
        <AppText v-for="address of event.addresses"
          class="text--iflex text--sm text--medium text--gray-800 event__location">
          <template v-slot:leftIcon>
            <AppIcon src="img/icons/location-gray-800.svg" />
          </template>
          <span>{{ address }}</span>
        </AppText>
        <div class="event__details">
          <AppText class="text--sm text--medium event__detail" v-for="(price, index) of event.prices" :key="index">{{
            price }}
          </AppText>
        </div>
        <div class="event__btns">
          <AppBtn class="btn--py-sm btn--px-2xs btn--rounded-sm btn--text-sm btn--text-medium event__btn"
            v-if="event.contacts[0]" as="a" :href="event.contacts[0]" target="_blank">
            <template v-slot:leftIcon>
              <AppIcon src="img/icons/chain-white.svg" />
            </template>
            <span>Сайт организатора</span>
          </AppBtn>
          <AppBtn class="btn--py-sm btn--px-xs btn--rounded-sm btn--text-sm btn--text-medium event__btn"
            v-if="event.contacts[1]" as="a" :href="event.contacts[1]" target="_blank">
            <template v-slot:leftIcon>
              <AppIcon src="img/icons/telegram-white.svg" />
            </template>
            <span>Написать</span>
          </AppBtn>
          <AppBtn class="btn--py-sm btn--px-xs btn--rounded-sm btn--text-sm btn--text-medium event__btn"
            v-if="event.contacts[2]" as="a" :href="event.contacts[2]" target="_blank">
            <template v-slot:leftIcon>
              <AppIcon src="img/icons/whatsapp-white.svg" />
            </template>
            <span>Написать</span>
          </AppBtn>
        </div>
        <AppArticle class="event__article">
          {{ event.description }}
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