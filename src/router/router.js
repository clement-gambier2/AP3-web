import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "resetRequest" */ "../views/Products.vue"),
  },
  {
    path: "/product-details/:id",
    name: "Product details",
    component: () =>
      import(
        /* webpackChunkName: "resetRequest" */ "../views/ProductDetails.vue"
      ),
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
  {
    path: "/admin",
    name: "Admin panel",
    component: () =>
      import(
        /* webpackChunkName: "resetRequest" */ "../views/admin/AdminPanel.vue"
      ),
  },
  {
    path: "/admin/updateProduct/:id",
    name: "Update product",
    component: () =>
      import(
        /* webpackChunkName: "resetRequest" */ "../views/admin/UpdateProduct.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
