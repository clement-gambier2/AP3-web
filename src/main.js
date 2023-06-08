import { createApp } from "vue";
import "./styles/style.css";
import "./styles/animations.css";
import App from "./App.vue";
import router from "./router/router.js"; // Import the router instance

createApp(App)
  .use(router) // Add the router instance to the app
  .mount("#app");
