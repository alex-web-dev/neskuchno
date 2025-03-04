import { createRouter, createWebHashHistory } from "vue-router";
import EventView from "@/views/EventView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";

const DEFAULT_TITLE = "Neskuchno";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${DEFAULT_TITLE} - Главная`,
    },
  },
  {
    path: "/event/:id",
    name: "event",
    component: EventView,
    meta: {
      title: `${DEFAULT_TITLE} - Событие`,
    },
    props: true,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  let title = to.meta.title || DEFAULT_TITLE;

  document.title = title as string;
});

export default router;
