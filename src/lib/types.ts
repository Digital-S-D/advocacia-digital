/**
 * Tipos que espelham os Custom Types sugeridos para o repositório Prismic
 * (ver briefing, Seção 15 — Tecnologias). Enquanto o repositório real não
 * existe, `src/lib/content.ts` usa estes tipos com dados de exemplo;
 * quando o Prismic estiver conectado, as mesmas assinaturas de função
 * devem retornar dados vindos de `client.getAllByType(...)`.
 */

export type AreaSlug =
  | "trabalhista"
  | "tributario"
  | "civel-e-contratos"
  | "societario-e-ma"
  | "familia-e-sucessoes"
  | "protecao-de-dados-lgpd";

export interface AreaAtuacao {
  slug: AreaSlug;
  nome: string;
  resumo: string;
  contextualizacao: string;
  escopo: string[];
  diferenciais: string[];
  faq: FaqItem[];
}

export interface Advogado {
  slug: string;
  nome: string;
  cargo: string;
  oab: string;
  formacao: string[];
  areas: AreaSlug[];
  bio: string;
  foto?: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export interface Reconhecimento {
  titulo: string;
  organizacao: string;
  ano: number;
}

export type TipoConteudo = "blog" | "noticia";

export interface ConteudoEditorial {
  tipo: TipoConteudo;
  slug: string;
  titulo: string;
  resumo: string;
  corpo: string[];
  autorSlug: string;
  areaRelacionada?: AreaSlug;
  publicadoEm: string; // ISO date
  atualizadoEm?: string; // ISO date
  tempoLeituraMin: number;
}
