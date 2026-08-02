# Advocacia Digital

Site institucional para escritório de advocacia — Astro + TypeScript + Tailwind CSS v4, com Prismic como CMS headless. Arquitetura estática por padrão (SSG), com uma única rota renderizada sob demanda para o formulário de contato.

O conteúdo de exemplo (áreas de atuação, blog, notícias, equipe) já foi escrito seguindo as regras de publicidade da OAB (Provimento 205/2021) descritas em `briefing-site-advocacia-digital.md` — sem depoimentos, sem promessa de resultado, sem casos concretos.

## Stack

| Camada | Ferramenta | Versão | Papel no projeto |
|---|---|---|---|
| Framework | [Astro](https://astro.build) | `^7.1.6` | Renderização estática (Islands Architecture), roteamento por arquivo, geração de todas as páginas em build time |
| Linguagem | [TypeScript](https://www.typescriptlang.org) | `^7.0.2` | Tipagem em componentes `.astro`, na camada de conteúdo e no schema de validação do formulário |
| CSS | [Tailwind CSS](https://tailwindcss.com) v4 via [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite) | `^4.3.3` | Utilitários + tokens de design definidos em CSS-first (`@theme`, sem `tailwind.config.js`) |
| CMS | [Prismic](https://prismic.io) via [`@prismicio/client`](https://www.npmjs.com/package/@prismicio/client) | `^7.21.8` | Cliente oficial pronto para uso; hoje o conteúdo vem de dados de exemplo (ver [Camada de conteúdo](#camada-de-conteúdo)) |
| Validação | [Zod](https://zod.dev) | `^4.4.3` | Validação de schema no endpoint do formulário de contato |
| Tipografia | [Fontsource](https://fontsource.org) (Fraunces, IBM Plex Sans, IBM Plex Mono) | `^5.3.0` | Fontes self-hosted, sem chamada a Google Fonts em runtime |
| Deploy | [`@astrojs/vercel`](https://www.npmjs.com/package/@astrojs/vercel) | `^11.0.4` | Adapter que permite a única rota server-rendered (`/api/contato`) rodar como função serverless |
| Runtime | Node.js | `>=22` | Recomendado — testado com `v22.22.2` |

Sem dependência de nenhum framework de UI (React/Vue/Svelte): toda a interatividade (menu mobile, acordeão de FAQ, envio do formulário) é feita com `<script>` nativo do Astro ou elementos HTML nativos (`<details>`/`<summary>`), mantendo o JS enviado ao cliente próximo de zero.

## Arquitetura de renderização

```
output: "static"   → todas as páginas são pré-renderizadas em build time (SSG)
                      exceto:
src/pages/api/contato.ts  → export const prerender = false
                             (função serverless via adapter da Vercel)
```

Esse modelo híbrido evita pagar o custo de um servidor rodando o site inteiro: só o endpoint que precisa processar uma requisição em tempo real (o formulário) roda sob demanda; o restante é HTML estático servido por CDN.

## Estrutura do projeto

```
src/
├── components/        # Header, Footer, seções da Home, FaqAccordion, ContactForm, ArticleCard...
├── layouts/
│   └── BaseLayout.astro   # <head>, meta tags, JSON-LD (schema.org/LegalService)
├── lib/
│   ├── types.ts        # Tipos TS que espelham os Custom Types do Prismic
│   ├── content.ts       # Funções get*() consumidas pelas páginas + dados de exemplo
│   └── prismic.ts       # Cliente @prismicio/client, pronto para conectar
├── pages/
│   ├── index.astro, sobre.astro, faq.astro, contato.astro, ...
│   ├── equipe/index.astro
│   ├── areas-de-atuacao/{index,[slug]}.astro
│   ├── blog/{index,[slug]}.astro
│   ├── noticias/{index,[slug]}.astro
│   └── api/contato.ts    # Único endpoint server-rendered do projeto
└── styles/
    └── global.css         # @theme do Tailwind v4: cores, tipografia, tokens
```

## Como rodar

Pré-requisito: Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:4321
```

| Script | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/` (+ bundle da função serverless) |
| `npm run preview` | Serve o build de produção localmente |

## Variáveis de ambiente

Nenhuma é obrigatória para rodar localmente — sem elas, o site usa os dados de exemplo de `src/lib/content.ts`.

| Variável | Obrigatória? | Descrição |
|---|---|---|
| `PRISMIC_REPOSITORY_NAME` | Não (por enquanto) | Nome do repositório Prismic. Quando definida, `src/lib/prismic.ts` inicializa o client real. |
| `PRISMIC_ACCESS_TOKEN` | Não | Só necessária se o repositório Prismic for privado. |

Copie `.env.example` para `.env` para configurá-las localmente. **Em produção, defina-as no painel da Vercel/Netlify — nunca no código ou no repositório.**

## Camada de conteúdo

`src/lib/content.ts` expõe funções assíncronas (`getAreas`, `getAdvogados`, `getConteudo`, `getReconhecimentos`...) que hoje retornam arrays locais tipados por `src/lib/types.ts`. Essas assinaturas foram desenhadas para espelhar exatamente o que uma chamada real ao Prismic (`client.getAllByType(...)`) retornaria — então conectar o CMS de verdade significa reescrever o corpo dessas funções, sem tocar nas páginas que as consomem.

Para conectar o Prismic real:

1. Crie um repositório em [prismic.io](https://prismic.io) e modele, no Slice Machine, os Custom Types sugeridos: `area_atuacao`, `advogado`, `blog_post`, `noticia`, `reconhecimento` (campos = os mesmos de `src/lib/types.ts`).
2. Copie `.env.example` para `.env` e preencha `PRISMIC_REPOSITORY_NAME`.
3. Em `src/lib/content.ts`, troque o corpo de cada função `get*` para consultar `client` (de `src/lib/prismic.ts`) em vez do array local.
4. Configure um webhook no Prismic (Settings → Webhooks) apontando para o Deploy Hook da Vercel/Netlify, para disparar um rebuild a cada publicação de conteúdo.

## Design system

Definido em `src/styles/global.css` via `@theme` do Tailwind v4 (sem `tailwind.config.js`):

- **Cor**: `--color-paper` / `--color-ink` (neutros), `--color-navy` (institucional), `--color-rubrica` (destaque/CTA)
- **Tipografia**: `--font-display` (Fraunces, títulos), `--font-body` (IBM Plex Sans, texto corrido), `--font-mono` (IBM Plex Mono, metadados/rótulos)

## Formulário de contato

`src/pages/api/contato.ts` valida os dados com Zod e inclui um campo honeypot anti-spam. Hoje ele só registra a solicitação em log — antes de publicar, é preciso conectar um envio real (e-mail transacional ou webhook para CRM/sistema de gestão jurídica) e configurar rate limiting na rota.

## Deploy

Configurado por padrão para **Vercel** (`astro.config.mjs` já importa `@astrojs/vercel`):

```bash
vercel deploy
```

Para publicar na Netlify: `npm install @astrojs/netlify` e troque o adapter em `astro.config.mjs` — o resto do projeto não muda.

> **Nota de segurança:** `@astrojs/vercel` traz hoje uma dependência transitiva (`@vercel/routing-utils` → `path-to-regexp`) sinalizada como alta severidade pelo `npm audit`. É usada pela Vercel só para gerar o manifesto de rotas em build time (não expõe a rota de API a tráfego em produção), mas vale rodar `npm audit` e atualizar o adapter antes do Go-Live.

## Status

Projeto-base completo e com build validado, pronto para receber conteúdo real e ser conectado ao Prismic. Checklist do que falta antes de produção (fotos reais da equipe, dados institucionais reais, revisão de compliance OAB da copy, Analytics/GTM, banner de cookies) está na Seção 19 de `briefing-site-advocacia-digital.md`.