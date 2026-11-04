/** Tipos do conteúdo local demonstrativo. Uma integração com CMS não está implementada. */

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
