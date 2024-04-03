import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log("command", command);
  console.log("mode", mode);

  // Load environment variables
  const env = loadEnv(mode, process.cwd());
  console.log("env", env);

  if (mode === "development") {
    console.log("development mode");
    return {
      plugins: [react()],
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            vue: resolve(__dirname, "micro-frontend-vue/dist/index.html"),
            svelte: resolve(__dirname, "micro-frontend-svelte/dist/index.html"),
            spa: resolve(__dirname, "micro-frontend-spa/dist/index.html"),
            htmlcss: resolve(__dirname, "micro-frontend-html-css/dist/index.html"),
          }
        }
      }
    }
  } else {
    console.log("production mode");
    return {
      plugins: [react()],
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            vue: resolve(__dirname, "micro-frontend-vue/dist/index.html"),
            svelte: resolve(__dirname, "micro-frontend-svelte/dist/index.html"),
            spa: resolve(__dirname, "micro-frontend-spa/dist/index.html"),
            htmlcss: resolve(__dirname, "micro-frontend-html-css/dist/index.html"),
          }
        }
      }
    }
  }
});
