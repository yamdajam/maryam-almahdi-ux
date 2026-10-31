# Cove: UX Case Study

Oct 29, 2026 · @User

## Final poster

> **Space reserved for the final poster.** Add the poster image here. Suggested file: images/cove/poster.png

## Project video

> **Space reserved for the project video.** Add the video embed or link here. Suggested file: images/cove/video-cover.png for the thumbnail

## Overview

Cove is a mobile app that helps students start their work and meets doomscrolling with reflection instead of restriction. It was designed by a team of seven for students who know what they should be doing and still end up scrolling.

|  |  |
| --- | --- |
| Project | Cove, a task initiation and focus app for students who doomscroll to avoid work |
| Context | INFO30008 Interactive Technology Project, University of Melbourne |
| Timeline | Semester 2, 2026 |
| Team | 7 designers: Bowen Mai, Jessica Zou, Jiexi Xiao, Maryam Al Mahdi, Rumaysa Fatima, Shevy Gupta, Violani Julia |
| My role | UX researcher and designer |
| Methods | Rich picture, stakeholder interviews, early concept critique, prototype interviews, cognitive walkthroughs, user-based evaluation with the System Usability Scale |
| Tools | Figma, FigJam |
| Evaluation | 11 participants aged 18 to 24, 5 task scenarios |

## The challenge

Students rarely scroll because they lack discipline. They scroll because starting a hard task feels uncomfortable, and a feed offers instant relief from that feeling.

Our research pointed to the same pattern across sources:

- Estimates suggest 80 to 95% of college students procrastinate on academic work.
- 94% of students in one study felt less happy after delaying work (Fadeyi et al., 2026).
- A systematic review of 27 studies found fear of failure, perfectionism and difficulty regulating emotion are the core causes (Ramadhani et al., 2026).
- Heavier short-form video use is linked to reduced analytic thinking in young adults (Jiang & Ma, 2024).

This reframed the problem. Procrastination is an emotional avoidance strategy, so better to-do lists and reminders are not enough on their own. Taking the phone away does not remove the urge to avoid. It sends the urge somewhere else.

The design question became: **how might we help students notice the moment they start avoiding, and make the first step back to their work small enough to take?**

## Research

Interviews with students, plus parents and educators, showed that existing tools fail in predictable ways. I built the team's rich picture of the problem space and ran two student interviews, then tested eight early concepts from across the group in prototype interviews.

### 1. Limits that the user can undo get undone

Self-set limits collapse because the person who sets the boundary can remove it.

> "When TikTok reaches its limit, pressing '15 more minutes' just becomes part of the habit." (Student 2)

### 2. Rewards need weight to compete with a feed

A gamified consequence stopped working once it stopped mattering to her.

> "Something like growing a tree, and if you use the phone, the tree just stops growing... why would I care for that tree?" (Student 1)

### 3. Blocking everything blocks useful use too

Social apps also carry real value, such as cooking and health information, so a hard block punishes helpful use along with avoidance.

> "Social media isn't always used purely for wasting time." (Student 2)

### 4. Control lands differently for different people

Some participants responded well to being told what to do. Others pushed back. Reactions to forced restriction split in the same way.

> "I felt like it was cute in the beginning, not cute at the end... the forcing technique may have more downsides than positive stuff... but for some people it can be really useful." (Student 1, on a lockout concept)

### 5. Prompts that feel invasive get resisted

Unskippable ads and persistent activity tracking raised immediate objections, and one participant raised a privacy concern about tracking continuing after a shared session ended. Participants were most open to concepts that helped "without making me go crazy about my phone" being blocked.

These findings set the direction: interrupt without locking people out, adapt to the situation, and keep the user in control.

## Design process

The design moved from a pile of ideas to one connected prototype in six steps, with research deciding what stayed and what was cut.

1. **FigJam ideation.** We mapped every idea against our interview notes: app limits, task lists, subtasks, focus sessions with friends, reflection questions, a pet companion, coins, a shop and room decoration.
2. **Interview findings.** We kept ideas that answered the research and dropped those that did not.
3. **Feature priorities.** Tasks, Pair Up, reflection and the lockout became the core. The shop, furniture and detailed pet features moved down, because the app was starting to feel like a game. The pet and coins stayed as small encouragements.
4. **Early wireframes.** Each member designed flows and wireframes for one section in a shared Figma file.
5. **Peer feedback.** Comparing sections exposed mismatched colours, navigation, button styles and instruction wording. Comments across the group brought the screens together under one description: cute but disciplined.
6. **Final prototype.** The sections were joined and tested with users.

### Concept critique: TICKET

My own early concept, TICKET, asked users to set an intention before opening a distracting app. Measured against our research, it had three weak points. It treated procrastination as a logistics problem when the research showed it was emotional avoidance. The goal field could be gamed with a vague goal like "check notifications". And nothing stopped a user from dismissing the exit prompt and carrying on. These points shaped the direction Cove took: respond to the user's situation instead of applying one fixed rule.

### How the Tasks flow changed

The first version was a plain list. Later versions added categories, due dates, estimated focus time and optional subtasks, plus options to continue or reschedule when a task became overdue. Some users believed subtasks were required, so we rewrote the wording and removed steps.

### What testing changed

Users understood the general idea, but the reflection and focus session rules felt restrictive. The final design keeps some friction to interrupt impulsive scrolling and gives users clearer choices about what happens next.

## The solution

Cove replaces restriction with honest reflection. It interrupts avoidance at the moment it happens, responds to the situation, and asks for real evidence of engagement before giving any reward. It rests on two ideas.

**1. A reflective scroll interruption.** During onboarding, users pick which apps to restrict and set a daily limit. When they open a restricted app, Cove asks why they are there instead of applying one fixed rule.

**2. Supported task initiation.** Starting is harder than continuing, so Cove makes the first step small: optional subtasks, focus sessions alone or with others, tips for getting unstuck, and a short reflection before coins are earned.

### Features

- **Onboarding.** Choose and name a pet companion, pick apps to block, set a daily limit, add friends and add a first task.
- **Tasks.** The empty state says "Start with one thing." Subtasks are optional, and each task shows its breakdown and progress.
- **Focus Room.** Study in a private room with friends or a public room with strangers. Shared presence gives gentle accountability without comparison. Ending a session asks for a short reflection, and coins follow.
- **Pet Playground.** Coins buy accessories and room items for the pet. It stays a small reward, not the main point.
- **Account.** Weekly and monthly recaps show reflections, common feelings, common triggers and a focus breakdown, so users can see their own patterns.

### Blocked-app interventions

A daily limit shows up as the pet's energy bar. The response depends on what is happening, so the prompt does not turn into something users learn to ignore.

| Situation | What Cove does |
| --- | --- |
| Opening a blocked app with time left | Asks what is going on. Taking a break leads to a short goal-writing step before entry. Feeling stuck leads to tips for starting smaller. |
| A task is due within 24 hours | Names the task and asks if now is the time to get started, with a path to the Tips page. |
| The last 3 sessions were marked regretted | Asks whether the user wants to sit this one out. |
| Time allowance is running out | Warns at the midpoint and with 5 minutes left, then asks the user to rate the session: Needed, Regretted or Mixed. |
| Daily allowance is used up | Explains that the limit is reached and closes the app until the energy bar refreshes the next day. |

## Testing and outcome

We tested the Figma prototype with 11 participants aged 18 to 24, all of whom said they use their phones to avoid tasks. Each group member ran sessions alone or in pairs. Participants worked through five scenarios in the app's natural order, rated each one from 1 (very easy) to 5 (very difficult), then completed the System Usability Scale, compared against the benchmark of 68.

| Feature | Scenario | What it tested |
| --- | --- | --- |
| Onboarding | Sign up for a new productivity app | Setup and understanding of app restrictions and time allowance |
| Tasks | Break an upcoming assignment into manageable steps | Task creation and how subtasks work |
| Focus session | Start a session with the setup that suits you | Private and shared room options |
| Pet Playground | Spend earned coins on the pet | Finding the Playground and understanding rewards |
| Blocked-app intervention | Open a distracting app mid-session | Understanding the prompts and what happens next |

### What the sessions showed

- **Wording needs one voice.** One participant read "time limit" and "allowance time" as daily usage quotas, not a period of app blocking. Onboarding should use clearer, consistent language.
- **Task setup asked for too much.** Participants wanted to add a task without planning first, so categories, subtasks and time limits become optional.
- **Focus sessions need a direct entry point.** A participant preferred to start studying straight away. Public rooms need a clearer purpose and meaningful accountability cues, plus optional, well-timed check-ins.

In our report, one recorded session gave Cove a SUS score of 70, above the benchmark of 68, with onboarding, task setup and starting a focus room all rated 1 (very easy).

### Limits of the evidence

Participants were friends of the team, and research suggests people are about 2.5 times more likely to favour a design they believe belongs to the researcher (Dell et al., 2012). Scenarios ran in a fixed order, so later tasks may have benefited from earlier learning. The effect of Cove on actual scrolling behaviour is not yet measured.

### Outcome

The project delivered a connected, tested prototype of five features and four intervention scenarios, a user journey, and a final poster and video. It met its design goals: make starting a task small, interrupt scrolling at the moment it happens, and keep the user in control of what happens next.

- [ ] Add the SUS average and task difficulty ratings across all 11 participants once finalised

## Reflection

- **Research changed the brief.** Almost every concept built on pure restriction was challenged by participants within minutes. Interviews moved the project from blocking apps to supporting the person using them.
- **One interface from seven designers takes active work.** Splitting features across the team surfaced mismatched colours, navigation and wording. A shared Figma file, regular comments and one named style kept the screens consistent.
- **Interventions can become noise.** A prompt that never changes gets ignored. Varying the response by situation, and keeping reflection short and optional where possible, protects against that.
- **Friends are a limited test group.** Future rounds would recruit strangers, vary the order of scenarios, and track real scrolling over weeks to measure whether behaviour changes.
