# Studio redesign implementation plan

**Goal:** Apply the approved studio design and publish four accurate game landing pages.
**Architecture:** Static HTML and shared CSS on the existing GitHub Pages site.
**Spec:** ../specs/2026-10-22-studio-redesign.md

## Tasks
- [x] Add a Node standard-library check for public pages, metadata, local links, sitemap and preserved advertising declaration. Confirm missing pages fail.
- [x] Implement shared responsive design, homepage, BeatCastle and three new game pages. Use existing game artwork and screenshots; preserve privacy wording.
- [x] Update privacy presentation, sitemap, 404, robots and llms.txt. Add concise project instructions and verification command.
- [x] Run static checks, browser checks at desktop and mobile widths, inspect screenshots and get an independent code review.
- [ ] Commit only intended site files, publish through the existing main-branch Pages source and verify public pages.

## Review focus
- Do not imply planned platforms or unreleased store downloads are already available.
- Keep legal content and app-ads.txt unchanged.
- No overflow at 320px, visible keyboard focus, working internal and related-game links.
- Use real screenshot captions; no artificial game UI or tracking added.
- Keep the comparison proposals and working memory out of the publication commit.
