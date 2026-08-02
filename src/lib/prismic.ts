import * as prismic from "@prismicio/client";

/**
 * Cliente oficial do Prismic (@prismicio/client v7).
 *
 * Hoje o site funciona com dados de exemplo (`src/lib/content.ts`), porque
 * ainda não existe um repositório Prismic real conectado. Para ligar o
 * site ao Prismic:
 *
 *   1. Crie um repositório em https://prismic.io e modele os Custom Types
 *      descritos em `src/lib/types.ts` (Área de Atuação, Advogado, Artigo
 *      de Blog, Notícia, FAQ, Reconhecimento) usando o Slice Machine.
 *   2. Copie `.env.example` para `.env` e preencha PRISMIC_REPOSITORY_NAME.
 *   3. Troque as funções de `src/lib/content.ts` para chamar `client`
 *      abaixo (ex.: `client.getAllByType("area_atuacao")`) no lugar dos
 *      arrays de exemplo — as assinaturas de função já foram desenhadas
 *      para não exigir mudanças nos componentes/páginas que as consomem.
 *   4. Configure um webhook no Prismic (Settings → Webhooks) apontando
 *      para o "Deploy Hook" da Vercel/Netlify, para disparar um rebuild
 *      estático a cada publicação de conteúdo (ver briefing, Seção 12).
 */

const repositoryName = import.meta.env.PRISMIC_REPOSITORY_NAME;

export const client = repositoryName
  ? prismic.createClient(repositoryName, {
      fetchOptions:
        import.meta.env.MODE === "production"
          ? { next: { tags: ["prismic"] } }
          : { cache: "no-store" },
    })
  : null;

export const isPrismicConnected = Boolean(repositoryName);
