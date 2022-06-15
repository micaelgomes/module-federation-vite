import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote1: "http://localhost:3001/assets/remoteEntry.js",
      },
    }),
  ],
  build: {
    target: "esnext",
  },
});
