# PieFed Usability Evaluation: UX Case Study

Oct 28, 2026 · @User

## Overview

PieFed promises social media without the corporations. New users could sign up, but they could not find where to post, what the labels meant, or a reason to stay. This project measured that gap and turned it into a set of evidence-based redesign recommendations.

|  |  |
| --- | --- |
| Project | Usability evaluation of PieFed.social, a federated, privacy-focused alternative to Reddit and X |
| Context | INFO20004 Usability Evaluation Methods, University of Melbourne |
| Timeline | 10 weeks, August to October 2025 |
| Team | 4 designers: Maryam Al-Mahdi, Rumaysa Fatima, Huiting (Fiona) Li, Mai Nguyen |
| My role | UI Specialist |
| Methods | Heuristic evaluation, cognitive walkthrough, moderated lab testing, hybrid card sort, tree test, System Usability Scale |
| Tools | Melbourne Connect UX Lab, Lyssna, UXTweak, Miro, Google Forms |
| Participants | 14 total: 4 in the lab, 10 remote |

## The challenge

PieFed is a community platform built on the fediverse, where content lives across independently run servers instead of one company's database. That structure is its selling point, but it also brings unfamiliar concepts like instances, feeds, topics and federated communities.

The question we set out to answer: **can a first-time user understand and use PieFed without any prior knowledge, and does it match how people already expect social media to work?**

We focused on young adults aged 18 to 35 who use social media weekly, the group most likely to try a new platform, and specifically on people who had never used PieFed before.

## My role

As UI Specialist, I owned the heuristic evaluation synthesis and contributed across research, analysis and reporting.

- **Heuristic evaluation:** reviewed the platform against Nielsen's 10 heuristics, then consolidated three evaluators' findings into one prioritised issue table with annotated screenshots
- **Cognitive walkthrough:** completed an independent walkthrough of the complex posting task
- **Task design:** helped shape the task table used in lab testing
- **Analysis:** transcribed lab session recordings, analysed a participant session, and organised online test data into themes on the team's Miro affinity board
- **Reporting:** wrote the introduction and executive summary, compiled the appendices, and polished the final presentation

## Process

The study ran in four phases, each one narrowing the questions for the next. Expert reviews surfaced likely problems, testing with real users confirmed which ones mattered, and triangulation tied the two together.

1. **Expert review.** Three of us independently applied Nielsen's heuristics, then merged the results into 10 issues rated by severity. Three cognitive walkthroughs followed, tracing account creation and posting step by step from a new user's point of view.
2. **Study design.** We wrote a screener to recruit eligible participants and split them by familiarity with community platforms like Reddit. We then turned the walkthrough findings into a task table of realistic scenarios, such as posting a pumpkin pie recipe and then editing it to your grandma's apple pie.
3. **Testing.** Four participants completed moderated think-aloud sessions in the Melbourne Connect UX Lab, followed by the System Usability Scale. Ten remote participants completed a hybrid card sort on UXTweak and a tree test on Lyssna to test the information architecture without visual design getting in the way.
4. **Synthesis.** We coded lab observations and online results onto a Miro affinity board, then cross-checked qualitative quotes against quantitative success rates. Only patterns that appeared in both sources became key findings.

## Key findings

PieFed scored **53.75 on the System Usability Scale**, well below the industry benchmark of 68. Participants could complete familiar tasks like changing the theme in under a minute, but anything that required exploring the site took three to five minutes.

&#91;embedded content: Lyssna tree test, 11 responses, October 2025\]

### 1. The navigation doesn't match how people think

Feed, Topics, Explore and Communities overlapped in users' minds. When asked where to post a recipe, most went to Feed or Topics instead of a community. In the card sort, 6 of 10 participants filed Topics under Explore, not as its own section.

> "Once I found the right section, it was fine, but finding it took forever." (P3)

### 2. Labels said one thing and meant another

To change font size and theme, 73% of users chose Visibility, which actually controls privacy. Not one chose the correct label, User Interface.

> "I thought 'visibility' meant font size." (P4)

### 3. Settings were split across three places

Account details, preferences and notifications lived under Settings, Account and Notifications with no clear logic. Participants cycled between them to finish a single task.

> "Some things are under Account, some under Settings. It doesn't feel consistent." (P1)

### 4. Posting broke expected patterns

Users tried to paste images into Discussion posts, missing the separate Image post type. Pressing Enter could publish an unfinished post, and deleted posts stayed visible on profiles, so some users deleted and reposted instead of editing.

> "I deleted it, but it's still showing up. Was it actually deleted?" (P4)

### 5. Usability wasn't the only barrier

All four lab participants said they would not use PieFed again. Beyond friction, they saw no one they knew and no content they couldn't already get elsewhere. An unexplained onboarding question about public figures also left some assuming the platform had a political focus.

> "I use social media to connect with people I know, there's no one here." (P2)

## Recommendations

Each recommendation answers a finding directly and is grounded in Nielsen's heuristics, Norman's design principles and Krug's usability principles.

| Finding | Recommendation | Principle |
| --- | --- | --- |
| Overlapping navigation | Nest Topics and Communities under Explore, rename Topics to Tags, and add short tooltips explaining Feed versus Communities | Consistency and standards |
| Misleading labels | Rename User Interface to Appearance and separate it clearly from privacy controls | Match between system and the real world |
| Scattered settings | Merge everything into one Settings dashboard with Profile, Privacy, Notifications, Appearance and Accessibility sections | Recognition rather than recall |
| Confusing posting flow | Add a Create Post button on every page, unify text and images in one composer, and stop Enter from publishing | User control and freedom, error prevention |
| Weak feedback | Remove deleted posts everywhere they appear and confirm the action in plain language | Visibility of system status |
| Unclear onboarding | Replace the setup questions with a guided walkthrough that explains why each choice shapes your feed | Help and documentation |

## Outcome

The study delivered a full evaluation plan, a findings report backed by four methods and 14 participants, and a five-minute video presentation of results. It met its three goals: measuring how learnable PieFed is for new users, testing it against existing social media mental models, and pinpointing where navigation, terminology and feedback break down.

The strongest result was agreement between methods. Problems flagged in the expert review in week 4 reappeared in lab sessions and in the tree test numbers, which gave the recommendations a solid evidence base.

## Reflection

- **Triangulation matters.** A quote alone can be dismissed, and a percentage alone lacks a reason. Pairing "I thought visibility meant font size" with a 73% misrouting rate made the case for a label change hard to argue with.
- **Structure can be tested without visuals.** The tree test removed layout and styling, which isolated naming and hierarchy as the core problem rather than visual design.
- **Usability is not the same as value.** Fixing every issue found here would make PieFed easier to use, but participants also needed a reason to return. Evaluation work should flag that boundary instead of treating every problem as a design fix.
- **What would change next time:** a larger lab sample, and running the tree test on the redesigned structure to measure whether the recommendations improve success rates.
