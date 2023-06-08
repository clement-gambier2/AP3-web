import { createRouter, createWebHistory } from "vue-router"; // Updated import statement
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home, // Example component name
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "resetRequest" */ "../views/Products.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "resetRequest" */ "../views/About.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "resetRequest" */ "../views/Checkout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for clean URLs
  routes,
});

export default router;
