import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const paths = ['/', '/beatcastle/', '/pizzapiazza/', '/burgerrush/', '/thief/', '/beatcastle/privacy/'];
const read = path => readFileSync(resolve(root, path), 'utf8');

for (const path of paths) {
  test(`${path} has accessible static content, metadata and working local links`, () => {
    const html = read(path.slice(1) + 'index.html');
    assert.match(html, /<html lang="cs"/);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.ok(html.includes(`rel="canonical" href="https://games.zcloud.cz${path}"`));
    assert.match(html, /property="og:image" content="https:\/\/games.zcloud.cz\//);
    assert.match(html, /class="skip-link"/);
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
    for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(href)) continue;
      const [url, hash] = href.split('#');
      let target = url.split('?')[0];
      target = target.startsWith('/') ? resolve(root, '.' + target) : resolve(root, '.' + path, target);
      if (!url || url.startsWith('?')) target = resolve(root, '.' + path, 'index.html');
      else if (target.endsWith('/') || !target.split(/[\\/]/).pop().includes('.')) target = resolve(target, 'index.html');
      assert.ok(existsSync(target), `Broken local resource ${href} on ${path}`);
      if (hash) assert.ok(readFileSync(target, 'utf8').includes(`id="${hash}"`), `Missing anchor ${href}`);
    }
  });
}

test('catalogue and sitemap include all game pages', () => {
  const index = read('index.html');
  const sitemap = read('sitemap.xml');
  for (const path of paths) {
    assert.ok(sitemap.includes(`<loc>https://games.zcloud.cz${path}</loc>`));
    if (path !== '/' && !path.includes('privacy')) assert.ok(index.includes(`href="${path}"`));
  }
  assert.match(read('robots.txt'), /Sitemap: https:\/\/games.zcloud.cz\/sitemap.xml/);
  assert.match(read('app-ads.txt'), /google\.com, pub-/);
});

test('game pages do not invent download destinations', () => {
  for (const path of paths.slice(1, 5)) {
    assert.doesNotMatch(read(path.slice(1) + 'index.html'), /href="(?:#|https:\/\/(?:play\.google\.com|apps\.apple\.com)\/?)["]/);
  }
});
