<script lang="ts" setup>
import { ref } from 'vue';
import AppInput from './AppInput.vue';
import { useEventsStore } from '@/stores/events/events';
import { storeToRefs } from 'pinia';
import { onClickOutside } from '@vueuse/core';
import AppCheckbox from './AppCheckbox.vue';
import TransitionFade from './TransitionFade.vue';
import AppText from './AppText.vue';

const eventsStore = useEventsStore();
const { placesList } = storeToRefs(eventsStore);
const $select = ref<HTMLElement | null>(null);
const isOpen = ref<boolean>(false);

onClickOutside($select, () => isOpen.value = false);
</script>

<template>
  <div class="select" ref="$select">
    <AppInput class="dashboard__sidebar-input" placeholder="Выберите место" readonly
      rightIcon="/img/icons/search-black.svg" @click="isOpen = true">
    </AppInput>
    <TransitionFade>
      <div class="select__dropdown" v-show="isOpen">
        <AppCheckbox class="select__dropdown-item" v-for="option in placesList" :key="option.id">
          <AppText class="text--lh-12" :class="{'text--semibold text--sm': option.priority}">{{ option.label }}</AppText>
        </AppCheckbox>
      </div>
    </TransitionFade>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  z-index: 12;

  &__dropdown {
    position: absolute;
    left: 0;
    top: calc(100%);
    margin-top: vw(3);
    padding: vw(15);
    width: 100%;
    background-color: var(--color-white);
    border: vw(1) solid var(--color-black);
    border-radius: vw(10);
    box-shadow: vw(2) vw(2) vw(10) rgba(0, 0, 0, 0.25);
  }

  &__dropdown-item {
    &:not(:first-child) {
      margin-top: vw(5);
    }
  }

  @media (max-width: 991px) {
    &__dropdown {
      margin-top: vw(3, $mobile);
      padding: vw(15, $mobile);
      border: vw(1, $mobile) solid var(--color-black);
      border-radius: vw(10, $mobile);
      box-shadow: vw(2, $mobile) vw(2, $mobile) vw(10, $mobile) rgba(0, 0, 0, 0.25);
    }

    &__dropdown-item {
      &:not(:first-child) {
        margin-top: vw(5, $mobile);
      }
    }
  }

}
</style>