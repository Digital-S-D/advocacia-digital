import { z } from "zod";

// Validação de formato brasileiro; não comprova existência ou titularidade.
export function telefoneBrasileiro(value: string): boolean {
  if (!/^[+\d\s().-]+$/.test(value.trim())) return false;
  const digits = value.replace(/\D/g, "");
  const national = digits.length > 11 && digits.startsWith("55") ? digits.slice(2) : digits;
  const ddds = new Set("11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99".split(" "));
  return !/^(\d)\1+$/.test(national) && ddds.has(national.slice(0, 2)) && /^\d{2}(?:[2-5]\d{7}|9\d{8})$/.test(national);
}

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe um nome de exemplo com pelo menos 2 caracteres.").max(120, "Use até 120 caracteres."),
  telefone: z.string().max(30).refine(telefoneBrasileiro, "Informe um telefone brasileiro com DDD e 10 ou 11 dígitos."),
  email: z.string().trim().max(254).pipe(z.email("Informe um e-mail de exemplo válido.")),
  area: z.enum(["trabalhista", "tributario", "civel-e-contratos", "societario-e-ma", "familia-e-sucessoes", "protecao-de-dados-lgpd", "outro"], { error: "Selecione uma área de interesse." }),
  mensagem: z.string().trim().min(10, "Escreva uma mensagem fictícia com pelo menos 10 caracteres.").max(2000, "Use até 2.000 caracteres."),
  consentimento: z.literal("on", { error: "Confirme que compreendeu o caráter demonstrativo do formulário." }),
});
