import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    react(),
    federation({
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/index.tsx",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
