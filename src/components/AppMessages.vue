<template>
  <div class="messages">
    <TransitionFade>
      <AppText v-for="(message, index) in messagesStore.messages" :key="index" class="text--xs messages__item" :class="`messages__item--${message.type}`">
        {{ message.text }}
      </AppText>
    </TransitionFade>
  </div>
</template>

<script setup lang="ts">
import { useMessagesStore } from '@/stores/messages';
import TransitionFade from './TransitionFade.vue';
import AppText from './AppText.vue';

const messagesStore = useMessagesStore();
</script>

<style lang="scss" scoped>
.messages {
  position: fixed;
  bottom: vw(20);
  left: vw(20);
  z-index: 30;

  &__item {
    padding: vw(6) vw(10);
    border-radius: vw(6);
    color: white;
    font-weight: bold;

    &--error {
      background-color: rgb(196, 28, 28);
    }

    &--success {
      background-color: green;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
