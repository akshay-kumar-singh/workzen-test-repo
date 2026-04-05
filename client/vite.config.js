import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/client/",
  plugins: [tailwindcss()],
  build: {
    outDir: "../public/client",
  },
});
