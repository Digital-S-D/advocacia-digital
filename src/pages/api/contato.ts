import type { APIRoute } from "astro";
import { z } from "zod";

// Rota renderizada sob demanda (função serverless), não em build time —
// é por isso que precisa do adapter configurado em astro.config.mjs.
export const prerender = false;

const ContatoSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo.").max(120),
  email: z.string().trim().email("Informe um e-mail válido."),
  telefone: z.string().trim().min(8, "Informe um telefone válido.").max(20),
  area: z.string().trim().min(1, "Selecione a área de interesse."),
  mensagem: z.string().trim().min(10, "Descreva brevemente a sua situação.").max(2000),
  consentimento: z.literal("on", {
    message: "É necessário concordar com o tratamento dos dados para enviar o formulário.",
  }),
  // honeypot anti-spam: campo invisível para humanos, se vier preenchido é bot
  website: z.string().max(0).optional().or(z.literal("")),
});

export const POST: APIRoute = async ({ request }) => {
  let payload: Record<string, unknown>;

  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const form = await request.formData();
    payload = Object.fromEntries(form.entries());
  }

  const parsed = ContatoSchema.safeParse(payload);

  if (!parsed.success) {
    return new Response(
      JSON.stringify({ ok: false, errors: parsed.error.flatten().fieldErrors }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  const { website, ...dados } = parsed.data;
  if (website) {
    // honeypot acionado — responde 200 "vazio" para não alertar o bot,
    // mas não processa o envio.
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }

  // TODO (produção): substituir o log abaixo pelo envio real, por exemplo:
  //   - e-mail transacional via Resend/SendGrid/Postmark; e/ou
  //   - webhook para o CRM (RD Station/HubSpot) ou sistema de gestão jurídica.
  // TODO (produção): aplicar rate limiting nesta rota (ex.: Vercel Edge
  // Config / Upstash Redis) para mitigar spam e abuso — ver briefing,
  // Seção 17 (Segurança).
  console.log("Nova solicitação de consulta:", dados);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
