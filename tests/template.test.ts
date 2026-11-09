import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { clinic } from "../src/config/clinic";
import { media } from "../src/config/media";
import { theme } from "../src/config/theme";
import { content } from "../src/config/content";
import { procedures } from "../src/data/procedures";
import { conciergeQuestions } from "../src/data/faq";

test("configured local assets exist and have accessible descriptions", () => {
  const images = [
    media.hero,
    media.philosophy,
    media.booking,
    media.social,
    ...media.gallery,
    ...procedures.map((p) => p.image),
  ];
  if (media.brand.logo) images.push(media.brand.logo);
  assert.ok(existsSync(`public${media.brand.favicon}`));
  for (const image of images) {
    assert.ok(image.src.startsWith("/") && !image.src.includes(".."));
    assert.ok(existsSync(`public${image.src}`), image.src);
    assert.ok(image.alt.trim().length > 0, image.src);
    assert.ok(image.width > 0 && image.height > 0, image.src);
  }
});

test("all CSS theme references are provided by the typed configuration", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  const tokens = new Set(
    Object.keys(theme.colors).map(
      (key) =>
        `--clinic-${key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`,
    ),
  );
  tokens.add("--clinic-color-scheme");
  for (const [, token] of css.matchAll(/var\((--clinic-[\w-]+)\)/g))
    assert.ok(tokens.has(token), token);
  assert.doesNotMatch(
    css,
    /#[\da-f]{3,8}\b/i,
    "Keep palette values in config/theme.ts",
  );
});

test("client records produce unique valid routes and concierge follows the catalog", () => {
  for (const records of [procedures, clinic.team]) {
    const slugs = records.map((record) => record.slug);
    assert.equal(new Set(slugs).size, slugs.length);
    for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  }
  const answer = conciergeQuestions.find(
    (question) => question.id === "services",
  )!.answer;
  for (const procedure of procedures)
    assert.ok(answer.includes(procedure.name));
  assert.ok(content.seo.title.includes(clinic.name));
  assert.equal(content.hero.headline.length, 3);
});
