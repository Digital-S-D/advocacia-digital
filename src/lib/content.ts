import type {
  AreaAtuacao,
  AreaSlug,
  Advogado,
  ConteudoEditorial,
  Reconhecimento,
} from "./types";

/**
 * TODO (Prismic): substituir cada função abaixo por uma chamada equivalente
 * usando `client` de `src/lib/prismic.ts`, por exemplo:
 *
 *   export async function getAreas(): Promise<AreaAtuacao[]> {
 *     if (!client) return AREAS; // fallback local enquanto não há repositório
 *     const docs = await client.getAllByType("area_atuacao");
 *     return docs.map(mapAreaDocument);
 *   }
 *
 * As páginas em `src/pages` já importam destas funções, então a troca
 * fica isolada neste arquivo — nenhum componente precisa mudar.
 */

export const NOME_ESCRITORIO = "Advocacia Digital";
export const OAB_RESPONSAVEL = "OAB/MG 000.000";

const AREAS: AreaAtuacao[] = [
  {
    slug: "trabalhista",
    nome: "Direito do Trabalho",
    resumo:
      "Assessoria preventiva e contenciosa para empresas e defesa de direitos trabalhistas para pessoas físicas.",
    contextualizacao:
      "Mudanças recorrentes na legislação trabalhista e no eSocial exigem rotina de compliance constante — e, para o trabalhador, entender prazos e direitos costuma ser a parte mais difícil de um desligamento.",
    escopo: [
      "Consultoria preventiva e auditoria de rotinas trabalhistas",
      "Elaboração e revisão de políticas internas e contratos",
      "Defesa em reclamações trabalhistas (empresas e pessoas físicas)",
      "Acordos e negociações coletivas",
    ],
    diferenciais: [
      "Equipe dedicada ao acompanhamento de mudanças no eSocial e na legislação",
      "Comunicação direta com o advogado responsável pelo caso",
    ],
    faq: [
      {
        pergunta: "Toda demissão dá direito a algum tipo de contestação?",
        resposta:
          "Depende do caso. Em uma consulta inicial avaliamos o tipo de desligamento, o tempo de empresa e os documentos disponíveis para entender quais direitos podem estar em aberto.",
      },
      {
        pergunta: "Empresas pequenas também precisam de assessoria trabalhista preventiva?",
        resposta:
          "Sim — a maior parte dos passivos trabalhistas nasce de rotinas informais que pareciam inofensivas. Uma auditoria preventiva costuma custar muito menos do que uma reclamação trabalhista.",
      },
    ],
  },
  {
    slug: "tributario",
    nome: "Direito Tributário",
    resumo:
      "Planejamento tributário, defesa em autuações fiscais e acompanhamento da transição da reforma tributária.",
    contextualizacao:
      "A reforma tributária trouxe um cronograma de transição plurianual — empresas que não ajustarem sistemas e apuração aos poucos correm o risco de acumular passivo fiscal sem perceber.",
    escopo: [
      "Planejamento tributário preventivo",
      "Defesa administrativa e judicial em autuações fiscais",
      "Recuperação de créditos tributários",
      "Acompanhamento da transição da reforma tributária",
    ],
    diferenciais: [
      "Leitura técnica e atualizada da regulamentação da reforma tributária",
      "Relatórios periódicos em linguagem acessível para o financeiro da empresa",
    ],
    faq: [
      {
        pergunta: "Minha empresa recebeu uma notificação da Receita Federal. E agora?",
        resposta:
          "O primeiro passo é mapear os prazos de resposta, que costumam ser curtos. Traga a notificação para uma consulta o quanto antes para entendermos as opções disponíveis.",
      },
    ],
  },
  {
    slug: "civel-e-contratos",
    nome: "Cível e Contratos",
    resumo:
      "Elaboração, revisão e defesa em disputas contratuais, imobiliárias e de responsabilidade civil.",
    contextualizacao:
      "Boa parte dos litígios cíveis nasce de contratos redigidos sem clareza sobre prazos, penalidades e condições de rescisão.",
    escopo: [
      "Elaboração e revisão de contratos",
      "Ações de cobrança e execução",
      "Disputas imobiliárias",
      "Responsabilidade civil e reparação de danos",
    ],
    diferenciais: [
      "Redação contratual pensada para reduzir litígios futuros, não só para formalizar o acordo",
    ],
    faq: [],
  },
  {
    slug: "societario-e-ma",
    nome: "Societário e M&A",
    resumo:
      "Estruturação societária, due diligence e assessoria em operações de fusão e aquisição.",
    contextualizacao:
      "Operações de M&A que pulam etapas de due diligence tendem a transferir passivos ocultos para o comprador — identificar isso antes de assinar é mais barato do que resolver depois.",
    escopo: [
      "Due diligence jurídica",
      "Estruturação e reorganização societária",
      "Acordos de sócios e contratos de investimento",
      "Assessoria em operações de fusão e aquisição",
    ],
    diferenciais: [
      "Times enxutos por operação, com um sócio acompanhando do início ao fechamento",
    ],
    faq: [],
  },
  {
    slug: "familia-e-sucessoes",
    nome: "Família e Sucessões",
    resumo:
      "Planejamento sucessório, inventários, divórcios e questões de família com foco em resolução ágil.",
    contextualizacao:
      "Um planejamento sucessório bem estruturado evita que a família enfrente inventários longos e conflitos evitáveis.",
    escopo: [
      "Planejamento sucessório e holdings familiares",
      "Inventários judiciais e extrajudiciais",
      "Divórcios e partilha de bens",
      "Guarda, alimentos e demais questões de família",
    ],
    diferenciais: [
      "Atendimento pensado para reduzir o desgaste emocional do processo, com linguagem clara em cada etapa",
    ],
    faq: [
      {
        pergunta: "Inventário sempre precisa passar pelo Judiciário?",
        resposta:
          "Não necessariamente — quando há consenso entre os herdeiros e nenhum deles é menor de idade, o inventário pode ser feito em cartório, de forma mais rápida.",
      },
    ],
  },
  {
    slug: "protecao-de-dados-lgpd",
    nome: "Proteção de Dados e Direito Digital",
    resumo:
      "Adequação à LGPD, contratos digitais, governança de dados e assessoria em incidentes de segurança da informação.",
    contextualizacao:
      "Empresas de qualquer porte que tratam dados pessoais estão sujeitas à LGPD — a fiscalização e as exigências contratuais de clientes e parceiros têm aumentado de forma constante.",
    escopo: [
      "Diagnóstico e adequação à LGPD",
      "Elaboração de políticas de privacidade e termos de uso",
      "Apoio a incidentes de segurança e comunicação com a ANPD",
      "Contratos digitais e governança de dados",
    ],
    diferenciais: [
      "Abordagem que combina leitura jurídica com entendimento prático de arquitetura de sistemas",
    ],
    faq: [
      {
        pergunta: "Empresa pequena também precisa se adequar à LGPD?",
        resposta:
          "Sim, a lei não isenta empresas pelo porte. O nível de esforço de adequação é que varia conforme o volume e a sensibilidade dos dados tratados.",
      },
    ],
  },
];

const ADVOGADOS: Advogado[] = [
  {
    slug: "mariana-almeida",
    nome: "Mariana Almeida",
    cargo: "Sócia-fundadora",
    oab: "OAB/MG 123.456",
    formacao: ["Direito — UFMG", "Especialização em Direito Societário — FGV Direito"],
    areas: ["societario-e-ma", "civel-e-contratos"],
    bio: "Atua há mais de 15 anos em direito societário e contratual, com foco em operações de fusão e aquisição para empresas de médio porte.",
  },
  {
    slug: "rafael-teixeira",
    nome: "Rafael Teixeira",
    cargo: "Sócio",
    oab: "OAB/MG 234.567",
    formacao: ["Direito — PUC Minas", "Especialização em Direito e Processo do Trabalho — IEC PUC Minas"],
    areas: ["trabalhista"],
    bio: "Concentra sua atuação em direito do trabalho, atendendo tanto empresas em rotinas de compliance quanto pessoas físicas em reclamações trabalhistas.",
  },
  {
    slug: "luiza-fontoura",
    nome: "Luiza Fontoura",
    cargo: "Sócia",
    oab: "OAB/MG 345.678",
    formacao: ["Direito — UFMG", "Mestrado em Direito Tributário — USP"],
    areas: ["tributario"],
    bio: "Dedica-se a planejamento tributário e defesa em autuações fiscais, com atenção especial ao acompanhamento da transição da reforma tributária.",
  },
  {
    slug: "pedro-navarro",
    nome: "Pedro Navarro",
    cargo: "Advogado associado",
    oab: "OAB/MG 456.789",
    formacao: ["Direito — Universidade FUMEC", "Especialização em Proteção de Dados — Insper"],
    areas: ["protecao-de-dados-lgpd", "familia-e-sucessoes"],
    bio: "Atua em proteção de dados e direito digital, além de planejamento sucessório e questões de família.",
  },
];

const RECONHECIMENTOS: Reconhecimento[] = [
  { titulo: "Escritório recomendado — Direito Trabalhista", organizacao: "Análise Advocacia 500", ano: 2025 },
  { titulo: "Ranking regional — Direito Tributário", organizacao: "Leaders League", ano: 2025 },
  { titulo: "Escritório citado — Direito Societário", organizacao: "Chambers and Partners Brazil", ano: 2024 },
];

const CONTEUDO: ConteudoEditorial[] = [
  {
    tipo: "blog",
    slug: "rescisao-indireta-o-que-e",
    titulo: "Rescisão indireta: o que é e quando pode ser pedida",
    resumo:
      "Entenda em que situações um empregado pode pedir a rescisão indireta do contrato de trabalho e quais direitos ficam garantidos.",
    corpo: [
      "A rescisão indireta acontece quando é o empregador — e não o empregado — quem descumpre obrigações graves o suficiente para justificar o fim do contrato de trabalho, como se tivesse demitido sem justa causa.",
      "Situações comuns incluem atraso reiterado de salário, exigência de tarefas incompatíveis com a função, exposição a risco à saúde ou segurança, e assédio no ambiente de trabalho. A lei trabalhista lista essas hipóteses, mas a análise de cada caso depende de provas concretas do descumprimento.",
      "Na prática, quem pede a rescisão indireta tem direito às mesmas verbas de uma demissão sem justa causa: aviso prévio, férias proporcionais, décimo terceiro proporcional, multa do FGTS e acesso ao seguro-desemprego, conforme o caso.",
      "Antes de tomar qualquer decisão, vale reunir a documentação disponível (holerites, mensagens, testemunhas) e conversar com um advogado trabalhista para entender se a situação se enquadra nas hipóteses previstas em lei.",
    ],
    autorSlug: "rafael-teixeira",
    areaRelacionada: "trabalhista",
    publicadoEm: "2026-05-12",
    tempoLeituraMin: 5,
  },
  {
    tipo: "blog",
    slug: "holding-familiar-quando-faz-sentido",
    titulo: "Holding familiar: quando faz sentido para a sucessão patrimonial",
    resumo:
      "Uma holding familiar pode simplificar a sucessão, mas não é a solução ideal para todo mundo. Veja os pontos que costumam pesar na decisão.",
    corpo: [
      "Uma holding familiar é uma empresa criada para concentrar a administração do patrimônio da família — imóveis, participações societárias, aplicações — e organizar como esse patrimônio será transferido às próximas gerações.",
      "As vantagens mais citadas são a redução de custos e tempo em um eventual inventário, a facilidade de definir regras de administração em vida (via acordo de sócios) e, em alguns casos, uma carga tributária menor sobre a transmissão patrimonial.",
      "Nem toda família precisa de uma holding: o instrumento costuma compensar quando há um patrimônio relevante e diversificado, mais de um herdeiro e o desejo de manter regras claras de sucessão em vida. Para patrimônios simples, um planejamento sucessório mais direto pode bastar.",
      "A decisão envolve variáveis tributárias, societárias e familiares ao mesmo tempo — vale avaliar o cenário completo antes de constituir a estrutura.",
    ],
    autorSlug: "pedro-navarro",
    areaRelacionada: "familia-e-sucessoes",
    publicadoEm: "2026-04-03",
    tempoLeituraMin: 6,
  },
  {
    tipo: "blog",
    slug: "lgpd-checklist-pequenas-empresas",
    titulo: "LGPD para pequenas empresas: o checklist mínimo de conformidade",
    resumo:
      "A LGPD não isenta empresas pelo porte. Veja por onde começar a adequação sem precisar de uma estrutura grande de compliance.",
    corpo: [
      "Muitas pequenas empresas assumem que a LGPD é assunto só para grandes corporações. Na prática, a lei se aplica a qualquer organização que trate dados pessoais — o que inclui uma lista simples de clientes em uma planilha.",
      "Um ponto de partida realista costuma envolver quatro frentes: mapear quais dados pessoais a empresa coleta e por quê; revisar (ou criar) a política de privacidade do site e dos formulários; definir quem, internamente, responde por pedidos de titulares de dados; e ajustar contratos com fornecedores que também tratam esses dados em nome da empresa.",
      "Não é preciso resolver tudo de uma vez. O importante é ter um plano documentado e mostrar evolução — é isso que costuma diferenciar uma empresa em adequação de uma empresa em risco.",
    ],
    autorSlug: "pedro-navarro",
    areaRelacionada: "protecao-de-dados-lgpd",
    publicadoEm: "2026-03-20",
    tempoLeituraMin: 5,
  },
  {
    tipo: "blog",
    slug: "due-diligence-fusoes-aquisicoes",
    titulo: "Due diligence em fusões e aquisições: o que revisar antes de assinar",
    resumo:
      "Uma due diligence bem feita identifica passivos ocultos antes que eles se tornem problema do comprador.",
    corpo: [
      "Due diligence é o processo de investigação jurídica, financeira e operacional de uma empresa antes de uma operação de compra, venda ou investimento. O objetivo é simples: identificar riscos e passivos antes de assinar o contrato, não depois.",
      "No campo jurídico, a revisão costuma cobrir contratos relevantes, processos judiciais e administrativos em curso, situação societária e regularidade fiscal e trabalhista. Cada achado é classificado por relevância e impacto potencial no valor ou na estrutura da operação.",
      "Pular etapas da due diligence para acelerar o fechamento é uma das formas mais comuns de uma operação, aparentemente vantajosa, se tornar um problema meses depois.",
    ],
    autorSlug: "mariana-almeida",
    areaRelacionada: "societario-e-ma",
    publicadoEm: "2026-02-11",
    tempoLeituraMin: 7,
  },
  {
    tipo: "noticia",
    slug: "mudancas-esocial-simples-nacional",
    titulo: "Mudanças no eSocial impactam rotina de empresas do Simples Nacional",
    resumo:
      "Novo cronograma de obrigações amplia exigências para pequenas e médias empresas ao longo do ano.",
    corpo: [
      "Empresas optantes pelo Simples Nacional passam a ter um conjunto adicional de obrigações acessórias dentro do eSocial, com cronograma escalonado ao longo do ano.",
      "Na prática, isso significa revisar rotinas de admissão, afastamento e desligamento de funcionários para garantir que os eventos sejam enviados dentro dos novos prazos.",
      "Recomendamos que empresas do Simples Nacional revisem, com o setor de RH ou contabilidade, se os sistemas atuais já contemplam as mudanças — e busquem orientação jurídica em caso de dúvida sobre enquadramento.",
    ],
    autorSlug: "rafael-teixeira",
    areaRelacionada: "trabalhista",
    publicadoEm: "2026-06-18",
    tempoLeituraMin: 3,
  },
  {
    tipo: "noticia",
    slug: "escritorio-participa-painel-direito-digital",
    titulo: "Escritório participa de painel sobre Direito Digital e proteção de dados",
    resumo:
      "Evento reuniu profissionais da área para discutir tendências regulatórias em proteção de dados.",
    corpo: [
      "Um dos advogados do escritório participou, em junho, de um painel sobre tendências regulatórias em proteção de dados e inteligência artificial, promovido por uma associação do setor.",
      "A discussão abordou o cenário atual de fiscalização da LGPD e os desafios que empresas de diferentes portes enfrentam para manter a conformidade em meio a novas tecnologias.",
    ],
    autorSlug: "pedro-navarro",
    areaRelacionada: "protecao-de-dados-lgpd",
    publicadoEm: "2026-06-05",
    tempoLeituraMin: 2,
  },
  {
    tipo: "noticia",
    slug: "revisao-contratos-longo-prazo",
    titulo: "Entendimento sobre revisão de contratos de longo prazo ganha atenção",
    resumo:
      "Decisões recentes reacendem a discussão sobre cláusulas de revisão em contratos de fornecimento e locação.",
    corpo: [
      "Contratos de longo prazo — como fornecimento continuado e locações comerciais — voltaram a ganhar atenção em decisões recentes sobre os limites para revisão de cláusulas diante de mudanças relevantes de cenário econômico.",
      "Para empresas com contratos dessa natureza, o momento é oportuno para revisar cláusulas de reajuste e de revisão, evitando surpresas em uma eventual disputa futura.",
    ],
    autorSlug: "mariana-almeida",
    areaRelacionada: "civel-e-contratos",
    publicadoEm: "2026-05-28",
    tempoLeituraMin: 3,
  },
  {
    tipo: "noticia",
    slug: "reforma-tributaria-cronograma-transicao",
    titulo: "Reforma tributária: cronograma de transição ganha novos detalhes",
    resumo:
      "Regulamentação recente esclarece etapas da transição para empresas de diferentes setores.",
    corpo: [
      "Novos atos infralegais detalham etapas do cronograma de transição da reforma tributária, com impacto direto na forma como empresas devem se preparar para a apuração dos novos tributos nos próximos anos.",
      "Empresas que ainda não iniciaram o mapeamento de impactos da reforma em seus sistemas e contratos devem priorizar esse diagnóstico ainda este ano.",
    ],
    autorSlug: "luiza-fontoura",
    areaRelacionada: "tributario",
    publicadoEm: "2026-07-09",
    tempoLeituraMin: 4,
  },
];

export async function getAreas(): Promise<AreaAtuacao[]> {
  return AREAS;
}

export async function getArea(slug: AreaSlug | string): Promise<AreaAtuacao | undefined> {
  return AREAS.find((a) => a.slug === slug);
}

export async function getAdvogados(): Promise<Advogado[]> {
  return ADVOGADOS;
}

export async function getAdvogado(slug: string): Promise<Advogado | undefined> {
  return ADVOGADOS.find((a) => a.slug === slug);
}

export async function getReconhecimentos(): Promise<Reconhecimento[]> {
  return RECONHECIMENTOS;
}

export async function getConteudo(tipo: ConteudoEditorial["tipo"]): Promise<ConteudoEditorial[]> {
  return CONTEUDO.filter((c) => c.tipo === tipo).sort((a, b) => (a.publicadoEm < b.publicadoEm ? 1 : -1));
}

export async function getConteudoPorSlug(
  tipo: ConteudoEditorial["tipo"],
  slug: string
): Promise<ConteudoEditorial | undefined> {
  return CONTEUDO.find((c) => c.tipo === tipo && c.slug === slug);
}

export function formatarData(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
