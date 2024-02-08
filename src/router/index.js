import { createRouter, createWebHistory } from "vue-router";
import ToolView from "@/views/ToolView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tool",
      component: ToolView,
    },
    {
      path: "/substances",
      name: "substances",
      component: () => import("@/views/SubstancesView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/glossary",
      name: "glossary",
      component: () => import("@/views/GlossaryView.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      name: "page404",
      component: () => import("@/views/PageNotFoundView.vue"),
    },
  ],
});

export default router;
