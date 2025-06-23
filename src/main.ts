import { initAuth } from "auth-client";
import { createApp } from "vue";
import "@/style/style.css";
import App from "./App.vue";

const authInit = initAuth({
  currentSystem: "dedeen",
  authFrontend: import.meta.env.VITE_FRONTEND_URL,
  authBackend: import.meta.env.VITE_BACKEND_URL,
});

createApp(App).mount("#app");
authInit.catch((err) => console.error("Auth init failed:", err));
