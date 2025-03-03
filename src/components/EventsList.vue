<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EventCard from '@/components/EventCard/EventCard.vue';
import { getEvents } from '@/api/eventsApi';
import { useMessagesStore } from '@/stores/messages';
import type { IEvents } from '@/stores/events/types';

const messagesStore = useMessagesStore();
const events = ref<IEvents | null>(null);
const loading = ref(false);

const fetchEvents = async () => {
  loading.value = true;
  try {
    events.value = await getEvents(0, [1, 2]);
  } catch (error) {
    messagesStore.addMessage(`Ошибка загрузки событий: ${error}`, 'error');
  } finally {
    loading.value = false;
  }
};

onMounted(fetchEvents);
</script>

<template>
  <div class="events-list">
    <div v-if="!loading" class="events-list__main">
      <EventCard v-for="(event, index) in events?.results ?? []" :key="event.id" class="events-list__item"
        :class="{ 'event-card--primary-150': index === 2, 'event-card--primary-200': index > 2 }" :event="event" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.events-list {
  &__item {
    &:not(:first-child) {
      margin-top: vw(18);
    }
  }
}
</style>