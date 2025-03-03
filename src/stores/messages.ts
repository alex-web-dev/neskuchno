import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref<{ text: string; type: 'error' | 'success' }[]>([]);

  const addMessage = (text: string, type: 'error' | 'success' = 'error', duration = 3000) => {
    const message = { text, type };
    messages.value.push(message);

    setTimeout(() => {
      messages.value = messages.value.filter((msg) => msg !== message);
    }, duration);
  };

  return { messages, addMessage };
});
