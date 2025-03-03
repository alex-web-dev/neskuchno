import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { IEventFilter, IPlace } from "./types";

export const useEventsStore = defineStore("events", () => {
  const eventsFilters = reactive<IEventFilter[]>([
    {
      id: 1,
      title: "Гастрономия",
      list: [
        "Винные вечера",
        "Встречи с шеф-поварами",
        "Гастрономические ужины/обеды",
        "Дегустации",
        "Кулинарные баттлы",
        "Кулинарные мастер-классы",
        "Пивные фестивали",
        "Фестивали национальной кухни",
      ],
    },
    {
      id: 2,
      title: "Хобби и творчество",
      list: ["Хобби и творчество"],
    },
    {
      id: 3,
      title: "Развлечения",
      list: ["Развлечения"],
    },
    {
      id: 4,
      title: "Спорт и активный отдых",
      list: ["Спорт и активный отдых"],
    },
    {
      id: 5,
      title: "Детские мероприятия",
      list: ["Детские мероприятия"],
    },
    {
      id: 6,
      title: "Образование",
      list: ["Образование"],
    },
    {
      id: 7,
      title: "Нетворкинг",
      list: ["Нетворкинг"],
    },
  ]);

  const placesList = ref<IPlace[]>([
    { id: 1, value: "1", label: "Краснодар", priority: true },
    { id: 2, value: "2", label: "Сочи", priority: true },
    { id: 3, value: "3", label: "Сочи(центральный)" },
    { id: 4, value: "4", label: "Адлер" },
    { id: 5, value: "5", label: "Эсто-Садок" },
    { id: 6, value: "6", label: "Роза Хутор" },
    { id: 7, value: "7", label: "Сириус" },
  ]);

  const selectedPlace = ref<string[]>([]);

  return {
    eventsFilters,
    placesList,
    selectedPlace,
  };
});
