# Walk of Life AI: UX Case Study

Oct 28, 2026 · @User

## Overview

Students want help writing CVs and portfolios, but they don't want to sound like everyone else. Walk of Life AI is a web tool that guides students through building career documents with a conversational assistant, then hands control back to them to edit, style and refine. The brief was simple. The real design problem was keeping the output personal.

|  |  |
| --- | --- |
| **Project** | Walk of Life AI, a career document builder for students |
| **Course** | INFO10003, The University of Melbourne |
| **Year** | 2024 |
| **Team** | 4 designers |
| **My role** | Personas, conceptual design, paper prototype, high-fidelity UI for the portfolio flow, usability results analysis |
| **Tools** | Figma, Zoom, Google Docs |
| **Methods** | Semi-structured interviews, thematic analysis, personas, user scenarios, paper and digital prototyping, think-aloud testing |
| **Outcome** | High Distinction (H1) |

## The problem

Undergraduates juggle study, work and applications, and career documents often get left to the last minute. Existing tools like Canva, Word and Wix offer templates, but students described them as samey and slow to format. AI writing tools save time, yet students worried employers could spot generic AI phrasing.

**How might we help students create career documents quickly, without losing what makes them distinct?**

## Research

We started with desk research, then spoke to students directly.

- **Desk research.** Recruiter commentary and articles showed hiring managers increasingly accept AI-assisted resumes, provided candidates edit and personalise the output. Academic sources on CVs stressed credibility, relevance over volume, and the cost of a poorly presented document.
- **Interviews.** We ran 5 semi-structured interviews over Zoom with undergraduates studying design, architecture, data science, sociology and commerce. A 13-question guide kept responses comparable while leaving room to follow up.
- **Thematic analysis.** We transcribed and coded the interviews into six themes: perception of AI content, personalisation, existing tools, challenges, university support, and desired features.

## What we learned

Three findings shaped every design decision that followed.

| Finding | What students said | Design response |
| --- | --- | --- |
| AI content reads as generic | "The answers suggested by AI usually have similar wordings." | An AI detector that flags generic phrasing so users can rewrite it |
| Personal style matters | "It is a part of your personal branding which is a part of yourself." | A chatbot that asks about style and preferred colours before generating templates |
| Formatting eats time | "It takes time to make the CV look professional." | Automated professional formatting and colour matching, toggled on or off |

## Personas

I translated the themes into two personas to keep the team designing for real needs rather than assumptions.

- **Marie, the Creative Designer.** A first-year design student who wants a portfolio that reflects her personality. Existing templates feel static and generic to her, and she wants interactive elements without hours of build time.
- **James, the Efficiency Seeker.** A second-year data science student who knows his content but struggles with layout and phrasing. He wants a polished CV fast, with no unnecessary design decisions.

The two personas pulled in different directions, one toward expression and one toward speed. Designing for both became the central tension of the project.

## Design principles

1. **Guide, don't generate.** AI acts as an editing partner and source of inspiration, not the author.
2. **Personal by default.** Every output starts from the user's own content, style and colour choices.
3. **Fast to a professional result.** Formatting and structure should never be the user's job.

## Ideation and paper prototype

Each team member sketched concepts against the three principles. We shortlisted the strongest ideas and combined them into a single flow, which we built out as a 12-screen paper prototype covering both the CV and portfolio paths.

1. **Choose a document.** CV or portfolio, the first decision on the welcome screen.
2. **Upload work.** Drawings, files and existing documents give the AI real material to work from.
3. **Chat.** A conversational assistant asks about the user's name, field and preferred style.
4. **Pick a template.** Three generated options, each shaped by the conversation.
5. **Customise.** A drag-and-drop toolbar, type controls and AI-suggested text the user can accept or ignore.
6. **Edit features.** Toggles for automated formatting and colour palette matching.
7. **Preview and export.** Name the file, save it or share it.

We tested the paper prototype with 2 participants to check the flow made sense before committing to high fidelity. It confirmed the chatbot-first structure and gave us confidence to move into Figma.

*\[Image: paper prototype screens\]*

## Visual design and high-fidelity prototype

I designed the portfolio flow in Figma while a teammate took the CV flow, so we agreed on a shared system up front to keep both halves consistent.

- **Colour.** Orange for energy and optimism, paired with blue for trust, set against soft grey-blue backgrounds. A friendly tool for a stressful task.
- **Type and labels.** Clear button labels and supporting icons so every action explains itself.
- **Interaction.** Component variants drove the animations and state changes without duplicating frames.

The portfolio flow adds two features built specifically for the Creative Designer persona:

- **Upload and analyse.** Users can start from scratch or upload an existing portfolio. The AI detects missing information and prompts for it in the chat.
- **Magic suggestions.** A panel with an AI detector score, readability checks, corrections, and an "Animate with AI" tool that turns static work into motion. Flagged phrases are highlighted so the user rewrites them in their own words.

*\[Image: Figma screens, portfolio flow and Magic suggestions panel\]*

## Usability testing

All 5 participants completed the full set of 22 tasks across both flows, averaging 7 minutes 37 seconds. We ran think-aloud sessions over Zoom, followed by a short interview, and tracked errors, help requests and critical errors.

| Measure | Total across 5 participants |
| --- | --- |
| Errors | 12 |
| Requests for help | 4 |
| Critical errors | 3 |
| Completion time | 5 min 12 s to 9 min 20 s |

Participants described the tool as efficient and straightforward, and valued the AI detector as a guard against over-reliance on AI. One said it was easy to navigate for people who are not very computer literate. Most errors clustered around three moments: drag and drop, going back a step, and the help button.

## Iterations

| Issue observed | Change made |
| --- | --- |
| Users clicked "Drag and drop" items instead of dragging them | Bolded the label to make the instruction explicit |
| No way to return to the previous screen except the browser | Added back arrows to every page |
| Help button overlapped content when opened | Flagged for repositioning |
| Portfolio page showed a "Save your CV" button | Flagged as a copy fix |

Testing also surfaced a split worth designing for. Design-focused users wanted more styling control, while practical users loved how little there was to decide. A next version would offer a simple default with an optional advanced styling mode, larger body text, a one-click "fix all" for corrections, and free-text input in the chatbot.

## Outcome

The project received a High Distinction (H1). The final prototype met each design principle: a chatbot that gets users to a professional document quickly, personalisation built into the flow from the first question, and an AI detector that keeps the user's own voice in the final document.

## Reflection

- **Interview design.** Asking job seekers whether employers liked their CVs produced guesses, not data. Grouping related questions would also have produced deeper answers.
- **Sample diversity.** All participants were undergraduates aged 18 to 25 from personal networks. A wider sample would sharpen the personas.
- **Differentiation.** The customisation page sat close to Canva's patterns. The detector and Magic suggestions panel are where the product earns its place, and a next round would push them further.
- **Responsible AI.** Data privacy, ownership of generated content and accountability for AI errors all need clear answers before a tool like this could launch.
