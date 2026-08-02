// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.advocaciadigital.com.br",
  // "static": todas as páginas são pré-renderidas (SSG) por padrão — ver
  // briefing, Seção 12. A única exceção é src/pages/api/contato.ts, que
  // usa `export const prerender = false` para rodar sob demanda como
  // função serverless (por isso o adapter abaixo é necessário).
  // Para publicar na Netlify em vez da Vercel, troque este adapter por
  // "@astrojs/netlify" (mesma ideia, outro pacote).
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
