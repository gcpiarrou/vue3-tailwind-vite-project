import { createWebHashHistory, createRouter } from "@/vue-router";

const Home          = () => import('Views/Home.vue');
const NotFound      = () => import('Views/NotFound.vue');
const Default       = () => import('Views/Default.vue');
const WindowData    = () => import('Views/WindowData.vue');

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/characters",
    name: "Personajes",
    component: Home
  },
  {
    path: "/window-data",
    name: "Window data",
    component: WindowData
  },
  {
    path: "/user",
    name: "Usuario",
    component: Home
  },
  {
    path: "/tales",
    name: "Historias",
    component: Home
  },
  {
    path: "/logout",
    name: "Logout",
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;