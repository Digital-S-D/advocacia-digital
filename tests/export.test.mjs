import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { test } from "node:test";

const root = resolve("dist");
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
const htmls = files(root).filter((path) => path.endsWith(".html"));

test("26 páginas estáticas identificam a demonstração e evitam indexação como escritório real", () => {
  assert.equal(htmls.length, 26);
  for (const path of htmls) {
    const html = readFileSync(path, "utf8");
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    assert.match(html, /Projeto demonstrativo da Digital S(?:&amp;|&)D\./, path);
    assert.match(html, /name="robots" content="noindex, nofollow"/, path);
    assert.doesNotMatch(html, /LegalService|advocaciadigital\.com\.br|wa\.me|mailto:|OAB\/MG \d|Chambers and Partners|Leaders League|Análise Advocacia 500/, path);
  }
});

test("links, recursos e âncoras locais exportados existem", () => {
  let count = 0;
  for (const path of htmls) {
    const html = readFileSync(path, "utf8");
    for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|data:|mailto:|tel:)/.test(raw)) continue;
      const url = new URL(raw.replace(/&amp;/g, "&"), `https://demo.invalid/${path.slice(root.length + 1).replaceAll("\\", "/")}`);
      let dest = join(root, decodeURIComponent(url.pathname));
      if (existsSync(dest) && statSync(dest).isDirectory()) dest = join(dest, "index.html");
      else if (!existsSync(dest)) dest = join(dest, "index.html");
      assert.ok(existsSync(dest), `${path}: ${raw}`);
      if (url.hash) assert.ok(readFileSync(dest, "utf8").includes(`id="${url.hash.slice(1)}"`), raw);
      count++;
    }
  }
  assert.ok(count > 700);
});

test("formulário não tem endpoint de coleta nem transmite dados com JavaScript desativado", () => {
  assert.ok(!existsSync(join(root, "api")));
  const contact = readFileSync(join(root, "contato/index.html"), "utf8");
  assert.match(contact, /method="dialog"/);
  assert.match(contact, /id="demo-campos" disabled/);
  const confirmation = readFileSync(join(root, "obrigado/index.html"), "utf8");
  assert.match(confirmation, /Simulação concluída/);
  assert.doesNotMatch(confirmation, /Recebemos sua solicitação|retornar.*1 dia útil/);
});
