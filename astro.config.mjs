// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Demonstração independente, sem domínio de escritório ou API de coleta.
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
