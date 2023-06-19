import { createApp } from "vue";
import "./styles/style.css";
import "./styles/animations.css";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";

store.commit("loadFromLocalStorage");

createApp(App)
  .use(router) // Add the router instance to the app
  .use(store) // Add the store instance to the app
  .mount("#app");
