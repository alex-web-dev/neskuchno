<script lang="ts" setup>
import AppAccordion from '@/components/AppAccordion.vue';
import AppCheckbox from '@/components/AppCheckbox.vue';
import AppText from '@/components/AppText.vue';
import AppInput from './AppInput.vue';
import type { IEventFilter } from '@/stores/events/types';
import { computed, reactive, watchEffect } from 'vue';

interface AppFiltersProps {
  filters: IEventFilter[],
}

const emit = defineEmits(['fieldClick','update:selectedCount']);
const props = defineProps<AppFiltersProps>();

const selectedFilters = reactive<Record<string, Record<string, boolean>>>({});

watchEffect(() => {
  props.filters.forEach(filter => {
    if (!selectedFilters[filter.title]) {
      selectedFilters[filter.title] = {};
    }
    filter.list.forEach(item => {
      if (selectedFilters[filter.title][item] === undefined) {
        selectedFilters[filter.title][item] = false;
      }
    });
  });
});

const selectedCount = computed(() => {
  return Object.values(selectedFilters).reduce((total, category) => {
    return total + Object.values(category).filter(Boolean).length;
  }, 0);
});

watchEffect(() => {
  emit('update:selectedCount', selectedCount.value);
});
</script>

<template>
  <div class="filters">

    <div class="filters__content">
      <AppInput class="filters__mobile-field" placeholder="Рубрики..." readonly rightIcon="/img/icons/filters-black.svg"
        @click="emit('fieldClick')" />

      <div class="filters__list">
        <AppAccordion v-for="filter, filterIndex of filters" class="filters__item" :key="filterIndex">
          <template #btn>
            <AppText class="text--semibold filters__item-btn">{{ filter.title }}</AppText>
          </template>
          <template #content>
            <div class="filters__item-main">
              <AppCheckbox v-for="item, itemIndex of filter.list" class="filters__item-checkbox"
                v-model="selectedFilters[filter.title][item]" :key="itemIndex">
                {{ item }}
              </AppCheckbox>
            </div>
          </template>
        </AppAccordion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filters {
  padding: 0 vw(10);

  &__mobile-field {
    margin-bottom: vw(20);
    display: none;
  }

  &__item {
    &:not(:first-child) {
      margin-top: vw(1);
    }
  }

  &__item-btn {
    padding: vw(2) vw(4);
    display: flex;
    align-items: center;
    width: 100%;

    &:after {
      content: '';
      flex: 0 0 auto;
      margin-left: vw(8);
      width: vw(24);
      height: vw(24);
      background: url('/public/img/icons/down-gray-500.svg') center / contain no-repeat;
      background-size: vw(12);
      transition: transform 0.4s;
    }
  }

  &__item .accordion__btn--active &__item-btn {
    &:after {
      transform: rotate(-180deg);
    }
  }

  &__item-checkbox {
    &:not(:first-child) {
      margin-top: vw(5);
    }
  }

  &__item-main {
    padding-top: vw(3);
    padding-left: vw(5);
  }

  @media (max-width: 991px) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 15;
    height: 100%;
    width: 100%;
    background: #fff;

    &__content {
      margin: 0 auto;
      width: 100%;
      max-width: vw(460, $mobile);
    }

    &__mobile-field {
      margin-bottom: vw(20, $mobile);
      display: block;
    }

    &__item {
      &:not(:first-child) {
        margin-top: vw(1, $mobile);
      }
    }

    &__item-btn {
      padding: vw(2, $mobile) vw(4, $mobile);

      &:after {
        margin-left: vw(8, $mobile);
        width: vw(24, $mobile);
        height: vw(24, $mobile);
        background-size: vw(12, $mobile);
      }
    }

    &__item-checkbox {
      &:not(:first-child) {
        margin-top: vw(5, $mobile);
      }
    }

    &__item-main {
      padding-top: vw(3, $mobile);
      padding-left: vw(5, $mobile);
    }
  }
}
</style>