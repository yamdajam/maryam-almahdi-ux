# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Hand-coded static HTML/CSS, no framework and no build step. This is a confirmed constraint, not just the current state. Shared nav and footer come in at runtime through `partials/include.js` (`fetch` of `partials/*.html`). `libraries/p5.min.js` is vendored. The site is hosted as plain static files (Neocities assets are present).

## Users

Recruiters and hiring managers looking for graduate and intern UX/UI designers. They skim quickly between other applications, usually on a laptop and sometimes on a phone. They want to judge, within a minute or two, whether Maryam can do real research and make well-crafted interfaces. Some coursework pages (for example the Futures Thinking reflection) also double as university submissions, but recruiters come first.

## Product Purpose

This is Maryam Al-Mahdi's personal portfolio. She is a UX designer and researcher in Melbourne, completing a Bachelor of Design (UX/UI) at the University of Melbourne. The site exists to get her a junior UX/UI role. It succeeds when a recruiter opens the CV, reads a case study through, or gets in touch.

## Positioning

She pairs rigorous research with a strong eye for visual craft. The case studies show real method (semi-structured interviews, thematic analysis, paper prototyping, think-aloud testing with measured tasks) alongside careful typographic and visual decisions. The portfolio should demonstrate that combination itself, not just claim it.

## Operating Context

- Entry points: `index.html` (hero, UX case-study grid, tools and skills, graphics work), `about.html` (story, values, Yam's Oven), and case-study pages.
- Each case study follows a numbered narrative: problem, research, process, features, testing, reflection.
- The CV is a downloadable PDF: `resume_UX(ATS).pdf`.
- Coursework context matters: projects come from University of Melbourne subjects (INFO10003, INFO30005), are often team-based, and her individual role should be stated clearly.

## Capabilities and Constraints

- Must stay plain static HTML/CSS. Do not introduce frameworks, bundlers, or a build pipeline.
- Unfinished project cards are real future work, so keep them as placeholders: the Local Bakery redesign, PieFed.com evaluation, Media comp (first HTML/CSS site), and University society website (in progress). Don't delete or fabricate their contents.
- `FuturesThinkingtemplate.html` and `idk.html` look like scratch or template files, not public pages.
- Open items to fix later, not invent around:
  - `case-walkoflife.html` nav still says "Studio YourName".
  - The Instagram handle appears as both `@yamsoven` and `instagram.com/yams.oven`.
  - The Futures Thinking page has an empty title fragment and a "cover image goes here" placeholder.

## Brand Commitments

- Name: Maryam Al-Mahdi. Tagline in use: "Designer, baker, always curious."
- Voice: warm, first person, modest and specific. Values already stated on the About page: "Curiosity first", "Make it kind", "Iterate gently". Also "Slow craft. Real research. Honest work."
- Yam's Oven is her home-baking side project. It supports the craft and iteration story and is not a separate product.
- On AI: be honest about where it helped and where it didn't. Claude is credited as a thinking partner, never as the author of the work.

## Evidence on Hand

- Headshot: `headshot-2.jpg`.
- Walk of Life AI case study: real participant quote, six research themes, five testing participants, 22 tasks per session, about 7 min average completion, and a live Figma prototype.
- Futures Thinking (AIP): `thumbnail-futures.png`, `backcastinginsights.png`, `familyshuttle.png`, `challenges1–3.png`.
- Yam's Oven photos in `yams-oven/`.
- CV PDF: `resume_UX(ATS).pdf`.
- Absences: no testimonials, employer logos, or industry work history yet. The Instagram feed on the About page is a mock (emoji posts, made-up like counts) and must not be presented as real data. Graphic-design entries (typeface, album cover, book jacket, poster series) are listed without final imagery.

## Product Principles

1. Prove it, don't claim it: show method, real numbers, and real artefacts rather than adjectives.
2. Respect the recruiter's time: role, problem, and outcome should be clear within seconds on every case study.
3. The site is itself a craft sample: hand-built, considered detail is part of the argument.
4. Honest scope: say clearly what was a team effort versus hers, and what was AI-assisted, and don't overstate unfinished work.
5. Warmth with rigour: personality (baking, curiosity) supports professional credibility rather than replacing it.
