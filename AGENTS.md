# games-zcloud-website

- Static Czech HTML and shared CSS, deployed by GitHub Pages from `main` at `/`.
- Marketing pages use plain HTML/CSS with no runtime JavaScript. Playable restaurant builds live under each game's `play/` directory.
- Build restaurant games from the sibling `GAMES/RestaurantCommon` project using `node scripts/build.mjs pizza` / `burger`, then copy the matching `dist/` to the site's `play/` directory. Keep relative paths, scoped workers, independent save keys and license notices.
- Preserve existing URLs, `CNAME`, `app-ads.txt` and the wording of privacy policies.
- Use source-game documentation for public claims; never invent store or download links.
- Keep design prototypes and screenshots for review out of the production commit.
- Verify: `node --test tests/site.test.mjs` (Node 22+). No package installation needed.
- For visual changes, inspect desktop and mobile renders and verify no horizontal overflow at 320px and 390px. Static checks cover links, metadata, JSON-LD and sitemap; visual changes do not need CSS implementation unit tests.
- Comments explain non-obvious choices in English; user-facing copy is Czech.
