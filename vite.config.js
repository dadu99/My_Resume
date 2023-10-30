import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vuetify from "vite-plugin-vuetify";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
