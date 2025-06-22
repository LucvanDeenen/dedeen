import { initAuth } from "auth-client";
import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";

createApp(App).mount("#app");

initAuth({
  currentSystem: "dedeen",
  authFrontend: import.meta.env.VITE_FRONTEND_URL,
  authBackend: import.meta.env.VITE_BACKEND_URL,
});
