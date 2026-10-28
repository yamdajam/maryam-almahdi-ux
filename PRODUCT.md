# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: reviewers of UX/UI internship and placement applications (hiring managers, recruiters, studio leads, mostly in Melbourne/Australia). They arrive from an application, CV or LinkedIn link, skim quickly, and decide whether Maryam is worth an interview. They need to see how she thinks, what methods she can run, and what she personally contributed on team projects.

Secondary (browse, not the target): peers, lecturers, and people arriving from Yam's Oven.

## Product Purpose

A personal portfolio for Maryam Al-Mahdi, a UX designer and researcher completing a Bachelor of Design (UX/UI) at the University of Melbourne. It exists to win internship opportunities. Success is a reviewer reaching a case study, understanding her role and process, and having a clear way to view her CV and get in touch.

## Positioning

Rigorous research paired with a strong eye for visual craft. The research is real and triangulated (e.g. the PieFed evaluation: four methods, 14 participants, quotes cross-checked against success rates), and the presentation is made with the same care. Neither half alone is the claim; the combination is.

## Operating Context

- Static, hand-coded HTML/CSS/JS site (no framework, no build step); nav and footer are injected from `partials/` by `js/include.js`. Light/dark theme toggle persisted in localStorage.
- Pages: `index.html` (hero, work grid, about teaser, tools, visual work), `about.html`, `404.html`, `case-studies/futures-thinking.html`, `case-studies/walk-of-life.html`.
- Case study source writing lives in `content/` as Markdown and is translated into pages by hand.
- CV is an external Google Drive PDF linked from the nav/footer.
- Work comes from University of Melbourne subjects (subject codes such as INFO10003, INFO20004, INFO30005 are part of how projects are labelled).

## Capabilities and Constraints

- Six work slots: Futures Thinking (INFO30005, page live), Walk of Life AI (INFO10003, page live), plus Local Bakery redesign, PieFed evaluation, first CSS/HTML site, and a university society website, all currently "Coming soon".
- A PieFed case study write-up exists in `content/piefed_usability_evaluation_case.md` but is not yet confirmed final for publishing.
- Team projects must state team size and Maryam's specific role; don't credit her with teammates' work.
- Contact details are undecided: the email (`you@example.com`) and LinkedIn (`/in/your-profile`) are placeholders. Keep them hidden or unlinked until real values are provided; never ship the placeholders as live links.
- Instagram handle is `@yams.oven` (https://instagram.com/yams.oven). The About page's `@yamsoven` text is wrong and should be corrected when touched.

## Brand Commitments

- Name: Maryam Al-Mahdi. Location written as "Naarm / Melbourne".
- Existing voice: warm, plain, first person, a little playful (ASCII-art "coming soon" placeholders, "fresh out the oven soon"), but specific and evidence-led in case studies.
- Stated values on the About page: Curiosity first, Make it kind, Iterate gently ("Slow craft. Real research. Honest work.").
- Yam's Oven (home cake studio) appears on the site as a passion project. Its prominence is an open decision, not a binding commitment.

## Evidence on Hand

- Case study content: `content/walk_of_life_ai_case.md` (High Distinction, 5 interviews, thematic analysis, think-aloud testing), `content/piefed_usability_evaluation_case.md` (SUS 53.75 vs 68 benchmark, 73% label misrouting, 14 participants), Futures Thinking page and images in `images/futures-thinking/`.
- Headshot: `images/about/headshot-2.jpg`. Yam's Oven photos: `images/yams-oven/`.
- Absent, and must not be fabricated: testimonials, employer references, work experience, metrics beyond those in the write-ups, a real email/LinkedIn, and imagery for the four "coming soon" projects and the visual-work tiles.

## Product Principles

1. Show the thinking, not just the screens: every case study makes the problem, method, Maryam's role and the evidence legible.
2. Craft is part of the evidence: the site itself should demonstrate the visual care it claims.
3. Respect a skimming reviewer: role, scope and outcome are findable in seconds; depth is there for those who read on.
4. Honest over impressive: unfinished work is labelled as such, team credit is accurate, numbers come only from real studies.
