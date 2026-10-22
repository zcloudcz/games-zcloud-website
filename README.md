# games-zcloud-website

Static site for https://games.zcloud.cz (GitHub Pages). Games by zcloud: landing pages, privacy policies and app-ads.txt.

The site uses plain Czech HTML and shared CSS. GitHub Pages publishes `main` from the repository root; no build step is required.

Game pages: `/beatcastle/`, `/pizzapiazza/`, `/burgerrush/`, `/thief/`. Availability is stated per game; no store or download destination is shown before it is public.

Pizza Piazza and Burger Rush are playable at `/pizzapiazza/play/` and `/burgerrush/play/`. Their static production builds preserve separate save keys and offline service worker scopes.

To update a game, run `node scripts/build.mjs pizza` or `node scripts/build.mjs burger` in the sibling `GAMES/RestaurantCommon` repository, then replace that game's `play/` assets with its sibling project's `dist/` output. Preserve the game, Three.js and Zod license notices. Verify both games online/offline and saved progress before publishing.

Run `node --test tests/site.test.mjs` with Node 22+ to check public pages, metadata, local resources and the sitemap. For visual changes, also check the pages in a browser at desktop and mobile widths.
