import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { IEvent, IEventFilter, IPlace } from "./types";

export const useEventsStore = defineStore("events", () => {
  const events = ref<IEvent[]>([
    {
      id: "1",
      date: "03.01.2025",
      time: "19:00-22:00",
      address: "Зимний театр",
      title: "Выставка «Живая вода»",
      description:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      priceFrom: 1499,
      priceTo: 2499,
      mainImage: {
        id: "i-1",
        src: "img/events/1.jpg",
      },
      allImages: [
        {
          id: "i-1",
          src: "img/events/1.jpg",
        },
        {
          id: "i-1",
          src: "img/events/1.jpg",
        },
        {
          id: "i-1",
          src: "img/events/1.jpg",
        },
      ],
      inFavorites: false,
      isTop: true,
    },
    {
      id: "2",
      date: "03.01.2025",
      time: "19:00-22:00",
      address:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      title: "Вечер живых знакомств для Православных в Мос...",
      description:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      priceFrom: 1499,
      priceTo: 2499,
      mainImage: {
        id: "i-1",
        src: "img/events/2.jpg",
      },
      allImages: [
        {
          id: "i-1",
          src: "img/events/2.jpg",
        },
        {
          id: "i-1",
          src: "img/events/2.jpg",
        },
        {
          id: "i-1",
          src: "img/events/2.jpg",
        },
      ],
      inFavorites: false,
      isTop: false,
    },
    {
      id: "3",
      date: "03.01.2025",
      time: "19:00-22:00",
      address: "Зимний театр",
      title: "Выставка «Живая вода»",
      description:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      priceFrom: 1499,
      priceTo: 2499,
      mainImage: {
        id: "i-1",
        src: "img/events/3.jpg",
      },
      allImages: [
        {
          id: "i-1",
          src: "img/events/3.jpg",
        },
        {
          id: "i-1",
          src: "img/events/3.jpg",
        },
        {
          id: "i-1",
          src: "img/events/3.jpg",
        },
      ],
      inFavorites: false,
      isTop: false,
    },
    {
      id: "4",
      date: "03.01.2025",
      time: "19:00-22:00",
      address: "Зимний театр",
      title: "Выставка «Живая вода»",
      description:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      priceFrom: 1499,
      priceTo: 2499,
      mainImage: {
        id: "i-1",
        src: "img/events/4.jpg",
      },
      allImages: [
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
      ],
      inFavorites: false,
      isTop: false,
    },
    {
      id: "5",
      date: "03.01.2025",
      time: "19:00-22:00",
      address: "Зимний театр",
      title: "Выставка «Живая вода»",
      description:
        "Персональная выставка Аллы Арис — это исследование, в котором художница погружается в водную материю и в то пространство, которое его наполняет.",
      priceFrom: 1499,
      priceTo: 2499,
      mainImage: {
        id: "i-1",
        src: "img/events/4.jpg",
      },
      allImages: [
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
        {
          id: "i-1",
          src: "img/events/4.jpg",
        },
      ],

      inFavorites: false,
      isTop: false,
    },
  ]);

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
    events,
    eventsFilters,
    placesList,
    selectedPlace,
  };
});
