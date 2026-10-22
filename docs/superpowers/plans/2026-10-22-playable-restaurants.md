# Publish Pizza Piazza and Burger Rush

User request: make both games directly playable on games.zcloud.cz.

Approach: reuse the existing Vite production builds as static files under `/pizzapiazza/play/` and `/burgerrush/play/`. Keep relative assets, separate manifest identities, per-directory service worker scopes and existing independent save keys. No new framework or backend.

- Add checks that both landing pages launch complete, self-contained game builds; observe failures before publishing files.
- Build the existing Pizza/Burger sources, copy output and retain third-party license notices.
- Update each landing page, catalogue and llms.txt to link to the playable games.
- Verify rendered WebGL, actual input, saved-game reload, independent saves, scoped workers and offline reload on desktop/mobile; retain all site checks.
- Review, publish via existing GitHub Pages and verify both public games.

Acceptance: both games launch from their landing pages, respond to input and retain progress independently after reload. Offline caches must not control the marketing pages or the other game.
