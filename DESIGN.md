---
name: Maryam Al-Mahdi · UX Portfolio
description: A sunlit studio notebook. Warm paper, film grain, drifting pastel light, frosted glass, and big italic serif type labelled in small mono caps.
colors:
  paper: "#f3f0e8"
  ink: "#262b26"
  ink-soft: "#5b625a"
  accent: "#a3402c"
  accent-inverse: "#f3a98c"
  sage: "#9db59a"
  dusty-blue: "#a9c3d6"
  butter: "#efe2a2"
  peach: "#f3a98c"
  coral: "#f96858"
  leaf: "#6f8f6b"
  line: "rgba(38, 43, 38, .18)"
  surface: "rgba(255, 255, 255, .42)"
  glass-bg: "rgba(255, 255, 255, .26)"
  glass-border: "rgba(255, 255, 255, .6)"
  chip-bg: "rgba(255, 255, 255, .45)"
  paper-dark: "#121613"
  ink-dark: "#ece7da"
  ink-soft-dark: "#a9b0a6"
  glass-bg-dark: "rgba(28, 33, 29, .38)"
typography:
  display:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(54.4px, 12.8vw, 195.5px)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(37.4px, 6vw, 81.6px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(28.9px, 3.7vw, 45.9px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontSize: "clamp(27.2px, 2.7vw, 37.4px)"
    fontWeight: 400
    lineHeight: 0.95
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.12em"
rounded:
  notch: "4px"
  thumb: "12px"
  surface: "16px"
  card-sm: "18px"
  card: "22px"
  panel: "24px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "22px"
  xl: "28px"
  gutter: "32px"
  gutter-mobile: "16px"
  2xl: "48px"
  3xl: "64px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.paper}"
  button-glass:
    backgroundColor: "{colors.glass-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  chip:
    backgroundColor: "{colors.chip-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 10px"
  card-glass:
    backgroundColor: "{colors.glass-bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "16px 16px 24px"
  card-thumb:
    rounded: "{rounded.thumb}"
  surface-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "22px 26px"
  panel-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "64px 48px"
---

# Design System: Maryam Al-Mahdi · UX Portfolio

## Overview

**Creative North Star: "The Sunlit Studio Notebook"**

A designer's notebook left open in soft afternoon light. The page is warm paper with a fine film grain over everything; behind the homepage, large blurred fields of sage, dusty blue, butter and peach drift slowly like light moving across a desk. On top of that light sit frosted glass panes: cards, pills and chips that are soft to the eye and lift gently when touched. Type does the talking. Instrument Serif is set huge and always at weight 400, with italics carrying the emphasis, and every fact is filed under a small JetBrains Mono caption in spaced capitals, like a label on a specimen jar.

The system has two registers. The **homepage** is the sunlit desk: glows, glass, ASCII flowers, bubbles that drift with scroll and shy away from the cursor, case cards that are all the same size with sharp thumbnails. The **case studies** are the notebook's written pages lit by the same window: drifting colour behind the header and the end of the page, softer light along the margins, an ASCII lily beside the title and an ASCII flower meadow before "Next up", while the reading column itself stays on calm paper with quiet translucent surfaces, generous measure and an inverted ink panel for reflections. The **About page** is lit the same way: colour behind the header and the end of the page, the lily peeking out from behind the portrait, and the meadow above the footer. Both registers work in light and dark; dark mode is a deep green-black night with cream ink, not a grey inversion.

Craft lives in small, rewarded details: a sheen that slides across a card on hover, a drop cap, butter-highlighter emphasis in prose, a plain "Coming soon" label in place of missing thumbnails.

**Key Characteristics:**
- Warm paper and green-black ink, with a global film grain layer.
- A serif for headings and a modern sans for reading text, all at weight 400; hierarchy from size, italics and mono labels.
- Pastel light fields (homepage and case studies) under frosted glass.
- Pills everywhere for actions and tags; generous rounded cards.
- One text colour: all words are ink (or ink-soft for secondary text); emphasis is italic, never coloured.
- Slow, soft motion on a shared easing curve; everything respects reduced motion.

## Colors

A warm, low-contrast pastel garden set on paper, held together by one green-black ink.

### Primary
- **Deep Terracotta** (accent): the only "loud" colour in text. Italic `.script` emphasis words, process step numbers, arrows in findings lists and the next-project link, active slideshow dot. Deepened from coral so it passes AA as text on Warm Paper. In dark mode it swaps to Warm Peach.
- **Warm Peach** (accent-inverse): the accent's stand-in wherever the background is ink (inverse panels) and the dark-mode accent.

### Secondary
The pastel garden. These are light sources and fills, never text colours.
- **Soft Sage** (sage): glow fields, thumbnail gradients.
- **Dusty Blue** (dusty-blue): glow fields, default thumbnail gradient start.
- **Pale Butter** (butter): glow fields, highlighter behind `<strong>` in prose, cream-toned skill bubbles.
- **Warm Peach** (peach): glow fields, peach-toned skill bubbles.
- **Bright Coral** (coral): the most saturated pastel; a low-opacity glow in the work section and the petal colour in ASCII sprigs. Never used for text on paper.

### Tertiary
- **Muted Leaf Green** (leaf): the "open to opportunities" status dot and leaf colour in ASCII ornaments.

### Neutral
- **Warm Paper** (paper): page background in light mode, text on inverse panels.
- **Green-Black Ink** (ink): body text, headings, solid pill background, inverse panel background, focus outline.
- **Muted Grey-Green** (ink-soft): secondary text, metadata labels, sub-headings, card descriptions.
- **Hairline** (line): section dividers, meta-table rules, quiet surface borders.
- **Quiet Surface** (surface): translucent fill for calm content blocks on reading pages.
- **Frosted Glass** (glass-bg, glass-border, chip-bg): translucent fills and bright edges for glass cards, pills and chips.
- **Night Paper / Cream Ink / Soft Sage-Grey** (paper-dark, ink-dark, ink-soft-dark): the dark-mode paper, ink and secondary text. Glass darkens to a smoky green (glass-bg-dark) with a faint white edge.

### Named Rules
**The One Ink Rule.** Text is never coloured for emphasis: headings, emphasised words, numbers and arrows all use the ink colour, with italics doing the emphasising. Pastels light the page; they never carry words. (The Deep Terracotta tokens remain defined but are not used for text.)

**The Pastels-Are-Light Rule.** Sage, blue, butter, peach and coral appear as blurred light, gradients and highlighter. Never as flat solid UI fills behind body text.

**The Two-Theme Rule.** Every colour decision is made through the custom properties on `:root`, with a dark value defined for both the system-preference block and `[data-theme="dark"]`. No hard-coded colour may break dark mode (the white label backgrounds on thumbnails are the deliberate exception: they sit on fixed light artwork).

## Typography

**Display Font:** Instrument Serif (with Times New Roman, serif)
**Body Font:** Instrument Sans (with system-ui, sans-serif) for all paragraph and reading text
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace)

**Character:** A condensed, slightly literary serif for the name, headings and a few display links, a clean modern sans from the same family for everything you read, and a small, technical mono in spaced capitals. The serif feels hand-set and warm, the sans keeps paragraphs easy, the mono feels like careful notes in the margin.

### Hierarchy
- **Display** (400, clamp(54.4px, 12.8vw, 195.5px), 0.82): the name in the homepage hero only. Second line indented and italic.
- **Headline** (400, clamp(37.4px, 6vw, 81.6px), 0.95, -0.02em): case-study titles, About title, homepage section heads (slightly smaller at clamp(34px, 5.1vw, 64.6px)), footer call to action.
- **Section** (400, clamp(28.9px, 3.7vw, 45.9px), 1.02): headings inside case studies and the About story, capped near 20ch.
- **Title** (400, clamp(27.2px, 2.7vw, 37.4px), 0.95): case card titles (every card the same size, no featured card). Smaller titles (19–24px) for theme cards, features, process steps.
- **Body** (sans, 400, 16px, 1.6): default text, card descriptions, lists, fact values.
- **Prose** (sans, 400, 17px, 1.75, max 66ch): long-form reading in case studies and the About story.
- **Label** (400, 11px, 0.12em, uppercase, mono): metadata: tags, meta-table labels, card rows, citations, nav and pill text. Never as a heading or a label above one.

### Named Rules
**The Heading Speaks Alone Rule.** No eyebrow, kicker, section number or tiny mono label above (or beside) a heading. If a fact matters, it goes in the meta table or the heading itself; if a block needs a title, it gets a real serif heading.

**The Single Weight Rule.** Everything is weight 400. Hierarchy comes from size, italics, ink vs ink-soft, and the switch between serif, sans and mono. Even `<strong>` stays 400 and gets a butter highlighter instead of bold.

**The Italic Voice Rule.** Italic is the emphasis voice: the second half of a heading, "Read case study", emphasised words in prose. It is the only emphasis; the colour never changes.

**The Margin Note Rule.** Facts (dates, codes, team size, role, tags) go in the mono label style, never in the serif.

## Layout

- **Gutters:** 32px page gutters on desktop, 16px under 760px.
- **Containers:** homepage content up to 1240px (left-aligned, not centred), with the case card grid capped at 1054px; case-study header 1100px; case-study reading column 820px with prose at 62ch; covers and About sections up to 1240px, centred.
- **Hero:** full viewport height (`100svh`) grid of top bar, name, and bottom row; the tagline and CTAs sit right-aligned under the name at 34ch, breaking the left edge for an editorial feel.
- **Work grid:** two equal columns with 24px gaps and equal-height rows (`grid-auto-rows: 1fr`), so every case card is the same size; no card spans both columns. One column under 760px.
- **Meta tables:** four-column grids (case-study facts, About facts) bounded by hairlines top and bottom, collapsing to two columns under 900px and one under 500px.
- **Rhythm:** sections breathe at 100–120px on the homepage, 64px between case-study sections, each separated by a hairline. Small gaps step through 6, 10, 14, 22, 28px.
- **Breakpoints:** 900px (grids halve, About hero stacks, bubbles become a wrapped list), 760px (single column, mobile gutters, nav drops to its own row), 500px (meta tables single column).

## Elevation & Depth

Depth is **glass over light**. On the homepage, the deepest layer is drifting blurred colour fields; above them, frosted glass with `backdrop-filter: blur(22px) saturate(1.5)` picks up that light, a bright inset top edge suggests a pane, and a soft, far-dropped ambient shadow grounds it. A fixed film-grain layer sits above everything (multiply in light, overlay in dark). Case studies keep the light at the header, the margins and the end of the page, with the facts strip as a frosted glass pane; their content blocks stay translucent surfaces with hairline borders so the reading column reads as paper. The About page has no glows at all. Shadows are always soft and low-contrast, and only appear under glass and photos.

### Shadow Vocabulary
- **Glass at rest** (`inset 0 1px 0 var(--glass-hi), inset 0 -1px 0 rgba(255,255,255,.06), 0 20px 50px -24px var(--glass-shadow)`): case and graphic-design cards.
- **Glass lifted** (`inset 0 1px 0 var(--glass-hi), 0 30px 60px -26px var(--glass-shadow)`): card hover/focus with a 6px rise.
- **Bubble** (`inset 0 1px 0 var(--glass-hi), 0 12px 30px -18px var(--glass-shadow)`): skill bubbles.
- **Photo** (`0 20px 40px -18px var(--glass-shadow)`): Yam's Oven collage photos, framed with a 6px paper border.

### Named Rules
**The Glass-Needs-Light Rule.** Glass only appears where there is coloured light behind it to frost (the homepage, and the case-study header). Where there is no light behind it, use the Quiet Surface instead.

**The Even Edge Rule.** Cards and surfaces have the same border on every side. No coloured strip along one edge (left rules, top bars) to signal a category.

**The Readable Fallback Rule.** Where `backdrop-filter` is unsupported, glass, pills and the theme toggle fall back to 92% paper so text stays legible.

## Shapes

Soft and rounded throughout, with no hard corners on interactive elements.
- **Pills** (999px) for every action, tag, chip, bubble and the theme toggle.
- **Cards** are generously rounded (22px; 18px for small graphic-design tiles), with thumbnails inset at 12px.
- **Calm surfaces** on reading pages at 16px; the inverse panel at 24px (18px on mobile).
- **The Arch:** portraits use an arched-window frame, a fully round top with gently rounded bottom corners (160px 160px 14px 14px on the homepage; 210px 210px 16px 16px on About). This is the signature silhouette.
- Circles for dots: status dot, slideshow dots, theme-toggle half-moon.

## Components

### Buttons (Pills)
Soft and tactile: round, translucent, and they rise a little when touched.
- **Shape:** full pill (999px), 10px 18px padding, mono label text, optional 14px icon or arrow glyph (↓ ↗ →).
- **Primary (solid):** Green-Black Ink fill, Warm Paper text. Hover lightens to Muted Grey-Green.
- **Glass:** Frosted Glass fill with a bright 1px glass edge and 14px backdrop blur. Hover brightens the glass and lifts 2px over .4s.
- **Focus:** 2px ink outline, 3px offset (global `:focus-visible`).

### Chips
- **Style:** small pills (5px 10px) in mono label text, chip-bg fill, bright chip-border edge, ink text. Used for project tags in card footers.
- **Thumbnail tags:** mono labels on a 70% white pill pinned to the top of a thumbnail, always dark ink (they sit on fixed light artwork).

### Cards / Containers
- **Glass case card:** 22px radius, 16px 16px 24px padding, column layout with 22px gap: thumbnail (with only the year as a small tag), title, description, chips, then a hairline footer with an italic "Read case study →". No item numbers, subject codes, team sizes or colour swatches on the card. A diagonal sheen overlays the card and slides 12% on hover while the card rises 6px. All cards are the same size.
- **Thumbnails:** real images are sharp from the start, with no hover focus effect. Projects without an image get a clean, sharp colour gradient (no blurred shapes).
- **Coming-soon card:** same glass card and size, unlinked, with a plain italic serif "Coming soon" on a white pill in the centre of the thumbnail and no footer.
- **Quiet surface blocks** (reading pages): pull quotes, theme cards, features, metrics, AI columns, slideshow. Quiet Surface fill, an even hairline border on all sides, 16px radius, no shadow. Each block opens with its own serif heading (e.g. italic 26px "Where it helped"), never a mono label.
- **Inverse panel:** ink background, paper text, 24px radius, generous padding (64px 48px). Used for case-study reflections.

### Navigation
- **Top bar:** three-column grid: name at left, centred nav (Work, About, Contact), theme toggle at right. Plain ink text links in the body serif.
- **Hover/active:** a 1px underline grows from the left over .35s; the current page keeps it.
- **Theme toggle:** a glass pill holding a half-filled circle that rotates 180° between themes.
- **Mobile (<760px):** name and toggle on the first row, nav centred on a second row.

### Metadata Tables
Four-column facts strips (Project, Role, Timeline, Team / Based in, Studying…) bounded by hairlines: a mono label over a 20–22px serif value with an optional italic ink-soft second line.

### Skill Bubbles (signature)
Italic serif words in glass pills, scattered absolutely across a 360px field, each floating on its own 7–10s loop, drifting with scroll and moving away from the cursor. Peach and cream tones mix in. Below 900px they become a static wrapped list.

### ASCII Ornaments (signature)
Hand-drawn ASCII in JetBrains Mono: a large generated lily glowing behind the hero name, small sprigs beside section heads (coral petals, ochre centres, leaf stems). Always `aria-hidden` and decorative.

Case studies carry two: the generated lily beside the title (its stem fades out above the facts strip) and a hand-drawn flower meadow in the sprig colours above "Next up".

## Do's and Don'ts

### Do:
- **Do** keep every heading and body text at weight 400; create emphasis with italics, size or the butter highlighter, never with a text colour.
- **Do** put all facts, dates, tags and codes in the 11px mono label style with 0.12em tracking.
- **Do** define every colour as a `:root` custom property with values for both light and dark themes.
- **Do** use pills (999px) for actions and tags, and glass only over coloured light.
- **Do** use the shared soft easing (`cubic-bezier(.2,.7,.2,1)`) for lifts, sheens and focus effects, and disable animation and transitions under `prefers-reduced-motion`.
- **Do** keep reading columns calm: 820px column, 17px sans prose at 66ch, Quiet Surface blocks, hairline section dividers.
- **Do** show project images sharp from the start; no blur-to-focus effects.
- **Do** punctuate with commas, colons, semicolons, parentheses or full stops; use "·" as the separator in page titles.

### Don't:
- **Don't** use bold (600+) weights anywhere, including `<strong>`.
- **Don't** put strong light directly under prose on case-study or About pages: keep the middle glows in the margins.
- **Don't** drift toward a corporate SaaS look: no sharp-cornered saturated blue buttons, stock icon sets, or generic dashboard styling.
- **Don't** colour any text: no terracotta, pastel or coral words; ASCII art is the only coloured lettering.
- **Don't** add typefaces beyond the three: Instrument Serif (headings), Instrument Sans (reading text), JetBrains Mono (labels).
- **Don't** put tiny subheadings (eyebrows, kickers, numbered section marks like "01 The problem", counters like "(01 / 06)") above or beside headings.
- **Don't** use em dashes anywhere: copy, titles, citations or labels.
- **Don't** give cards or callouts a single coloured strip (a thick left border or top bar); keep borders even.
