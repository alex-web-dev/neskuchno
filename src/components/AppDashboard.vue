<script lang="ts" setup>
import AppFilters from '@/components/AppFilters.vue';
import AppInput from '@/components/AppInput.vue';
import EventCard from '@/components/EventCard/EventCard.vue';
import { useEventsStore } from '@/stores/events/events';
import { storeToRefs } from 'pinia';
import AppBtn from './AppBtn.vue';
import AppSelect from '@/components/AppSelect.vue';
import { computed, ref } from 'vue';

const eventsStore = useEventsStore();
const { events, eventsFilters } = storeToRefs(eventsStore);
const showFilters = ref<boolean>(false);
const selectedFiltersCount = ref(0);
const rubricsModelValue = computed(() => `Выбрано ${selectedFiltersCount.value} рубрик`);
</script>

<template>
  <div class="dashboard">
    <div class="container">
      <div class="dashboard__content">
        <aside class="dashboard__sidebar">
          <AppInput class="dashboard__sidebar-filters-input" placeholder="Рубрики..." :modelValue="rubricsModelValue"
            readonly rightIcon="img/icons/filters-black.svg" @click="showFilters = true" />
          <div class="dashboard__sidebar-inputs">
            <AppInput class="dashboard__sidebar-input" placeholder="Дата" rightIcon="img/icons/calendar-black.svg" />
            <AppSelect class="dashboard__sidebar-input" />
          </div>
          <AppFilters class="dashboard__sidebar-filters" :class="{ 'dashboard__sidebar-filters--show': showFilters }"
            :filters="eventsFilters" @fieldClick="showFilters = false" @update:selectedCount="selectedFiltersCount = $event" />
          <AppBtn class="btn--full btn--rounded-3xl btn--py-2xl dashboard__sidebar-btn">Искать</AppBtn>
        </aside>
        <div class="dashboard__main">
          <div class="dashboard__list">
            <EventCard class="dashboard__item"
              :class="{ 'event-card--primary-150': eventIndex == 2, 'event-card--primary-200': eventIndex > 2 }"
              v-for="event, eventIndex of events" :key="eventIndex" :event="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  position: relative;

  &__content {
    display: flex;
  }

  &__sidebar {
    margin-right: vw(40);
    flex: 0 0 vw(355)
  }

  &__sidebar-input {
    &:not(:first-child) {
      margin-top: vw(10);
    }
  }

  &__sidebar-filters-input {
    display: none;
  }

  &__sidebar-filters {
    margin-top: vw(23);
  }

  &__sidebar-btn {
    margin-top: vw(20);
  }

  &__main {
    flex: 1 1 auto;
  }

  &__item {
    &:not(:first-child) {
      margin-top: vw(18);
    }
  }

  @media (max-width: 991px) {
    &__content {
      flex-wrap: wrap;
    }

    &__sidebar {
      margin-bottom: vw(20, $mobile);
      margin-right: 0;
      flex: none;
      width: 100%;
    }

    &__sidebar-filters {
      margin-top: 0;
      display: none;

      &--show {
        display: block;
      }
    }

    &__sidebar-filters-input {
      margin-bottom: vw(20, $mobile);
      display: block;
    }

    &__sidebar-inputs {
      display: flex;
    }

    &__sidebar-input {
      flex: 1 1 0%;

      &:not(:first-child) {
        margin-top: 0;
        margin-left: vw(20, $mobile);
      }
    }

    &__sidebar-btn {
      margin-top: vw(20, $mobile);
    }

    &__item {
      &:not(:first-child) {
        margin-top: vw(20, $mobile);
      }
    }
  }
}
</style>