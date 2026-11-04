import assert from "node:assert/strict";
import { test } from "node:test";
import { contactSchema, telefoneBrasileiro } from "../src/lib/contact.ts";

const valid = { nome: "Pessoa de exemplo", telefone: "(31) 99999-0000", email: "teste@example.com", area: "trabalhista", mensagem: "Situação fictícia para testar a interface.", consentimento: "on" };

test("telefone exige formato brasileiro, DDD existente e comprimento adequado", () => {
  for (const value of ["(31) 99999-0000", "+55 (11) 3234-5678", "31999990000"]) assert.ok(telefoneBrasileiro(value), value);
  for (const value of ["00000000", "99999999999", "20999990000", "31699990000", "319999900000", "telefone 31999990000", ""]) assert.ok(!telefoneBrasileiro(value), value);
});

test("simulação válida e normalização de espaços", () => {
  const result = contactSchema.parse({ ...valid, nome: "  Pessoa de exemplo  " });
  assert.equal(result.nome, "Pessoa de exemplo");
});

test("campos, área, limites e confirmação são obrigatórios", () => {
  for (const [key, value] of Object.entries({ nome: " ", telefone: "00000000", email: "invalido", area: "injetada", mensagem: "curta", consentimento: undefined })) {
    const result = contactSchema.safeParse({ ...valid, [key]: value });
    assert.equal(result.success, false, key);
    if (!result.success) assert.equal(result.error.issues[0].path[0], key);
  }
  assert.equal(contactSchema.safeParse({ ...valid, mensagem: "a".repeat(2001) }).success, false);
});
