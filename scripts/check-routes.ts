import assert from "node:assert/strict";

import { clinic } from "../src/config/clinic";
import { media } from "../src/config/media";
import { procedures } from "../src/data/procedures";

async function main() {
  const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
  const routes = [
    "/",
    "/sobre",
    "/procedimentos",
    ...procedures.map((p) => `/procedimentos/${p.slug}`),
    ...clinic.team.map((p) => `/equipe/${p.slug}`),
    "/agendamento",
    `/agendamento?servico=${procedures[0]?.slug || "avaliacao"}`,
    "/contato",
    "/politica-de-privacidade",
  ];
  const pages = new Map<string, string>();
  for (const route of routes) {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /<h1[\s>]/, `${route}: missing h1`);
    if (clinic.demo)
      assert.match(
        html,
        /noindex/,
        `${route}: demonstration must not be indexed`,
      );
    assert.ok(
      !html.includes("Internal Server Error"),
      `${route}: server error`,
    );
    pages.set(route, html);
    console.log(`PASS ${response.status} ${route}`);
  }
  const links = new Set<string>();
  for (const html of pages.values()) {
    for (const match of html.matchAll(/href="(\/(?!_next)[^"]*|#[^"]+)"/g))
      links.add(match[1].replaceAll("&amp;", "&"));
  }
  for (const href of links) {
    const url = new URL(href, base);
    const pathname = url.pathname + url.search;
    let html = pages.get(pathname);
    if (!html) {
      const response = await fetch(url);
      assert.equal(response.status, 200, `Broken link: ${href}`);
      html = await response.text();
    }
    if (url.hash)
      assert.ok(
        html.includes(`id="${url.hash.slice(1)}"`),
        `Missing anchor: ${href}`,
      );
  }
  const assets = [
    ...new Set(
      [
        media.hero,
        media.philosophy,
        media.booking,
        media.social,
        ...media.gallery,
        ...procedures.map((p) => p.image),
        ...(media.brand.logo ? [media.brand.logo] : []),
      ].map((image) => image.src),
    ),
    media.brand.favicon,
    "/robots.txt",
    "/sitemap.xml",
    `/_next/image?url=${encodeURIComponent(media.hero.src)}&w=640&q=75`,
  ];
  for (const asset of assets) {
    const response = await fetch(new URL(asset, base));
    assert.equal(response.status, 200, asset);
  }
  for (const route of [
    "/pagina-inexistente",
    "/procedimentos/inexistente",
    "/equipe/inexistente",
  ]) {
    const response = await fetch(new URL(route, base));
    const html = await response.text();
    assert.ok(
      response.status === 404 ||
        (response.status === 200 &&
          html.includes("NEXT_HTTP_ERROR_FALLBACK;404")),
      `${route}: expected not-found`,
    );
  }
  console.log(
    `PASS ${routes.length} pages, ${links.size} local links, ${assets.length} assets/endpoints and 3 not-found routes.`,
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
