# Portfolio Revamp: AI Automation Engineer Positioning

Goal: reposition nteinpraises.vercel.app from a software engineering portfolio to an AI Automation Engineering portfolio, keeping the existing static site's design, layout, typography, white/dark/blue palette, animations, and structure exactly as-is. Everything is additive or a content rewrite — no redesign.

## Step 1 — Bring the real site into this project

Right now this Lovable project is an empty React template and your live site is a static HTML/CSS/JS site. First move, so we edit your actual codebase:

- Import `index.html`, `index.css`, `index.js`, `robots.txt`, `sitemap.xml` from your uploads.
- Pull the missing repo assets (the `img/` folder: `PP.jpeg`, `Praises_logo.png`, project screenshots) from `github.com/Nteinpraises/Praises-Engr-portfolio` through the connected GitHub API so nothing renders broken.
- Add `resume.pdf` (the PDF you're uploading) next to the site files.
- Point the preview at the static site so you can review it live.

## Step 2 — Pull and verify LinkedIn data

Read your LinkedIn profile via the connected account for: experience (Abooa Digital Solutions), education (University of Bamenda), Yutiva, SoftGrid certificate (exact title), GDG Bamenda, skills, projects. Only verifiable items get used. Nothing invented — no clients, numbers, titles, or results that aren't already on your site or LinkedIn.

Note: the current About section claims "30% business performance" and "10% lead generation increase". These stay only if your LinkedIn/repo supports them; otherwise they get rewritten as capabilities rather than metrics.

## Step 3 — Hero (same layout, new message)

Same photo + text two-column hero. Changes:

- Role line: `AI Automation Engineer`
- Headline copy: "I build AI agents and automation systems that save time and help businesses scale."
- Supporting paragraph: AI-powered workflows, agents, integrations, automation systems — practical, no hype language.
- Add two buttons in the existing button style: **View My Projects** (primary) and **Download Resume** (secondary, links to `resume.pdf`).
- Existing contact links and social icons untouched.

## Step 4 — Navigation

Keep the current nav bar, logo, burger, and mobile drawer. Add `Download Resume` as a visible button next to "Let's Talk" (and in the mobile drawer). Nav items updated to: Home · About · Projects · Experience · Education · Skills · Contact — reusing existing anchor-scroll and active-link logic.

## Step 5 — About rewrite

Same grid and card styling. New copy positioning you as an AI Automation Engineer with a software engineering foundation: agents, workflow automation, APIs, databases, integrations. The skill icon grid gets AI/automation entries (OpenAI, n8n/Make, APIs & Webhooks, Airtable) alongside existing dev icons.

## Step 6 — AI Automation Projects section (before software projects)

New section using the exact existing project-card markup, grid, hover, reveal animation, and detail-view mechanics — so it looks native. Four projects, each with description, technologies, problem solved, what was automated, and a workflow visual:

1. **AI Agent for Sales & Appointment Booking** — Lead → AI Agent → Qualification → CRM → Follow-up → Appointment
2. **AI Resume Analysis Agent** — Resume → AI Analysis → Skills Extraction → Match Score → Insights
3. **AI Content Intelligence & Research System** — Sources → Research → Collection → Database → Platform
4. **AI Content Generator & Auto Publisher** — Research Data → Generation → Review → Scheduling → Publishing

Visuals: four generated SaaS-style dashboard/workflow mockups (white background, blue accents, dark text, clean UI — no robots). No fake demo links; GitHub/live links only where they genuinely exist.

## Step 7 — Software Engineering Projects section

Your existing projects stay, unchanged in content, moved below the AI section under the heading **Software Engineering Projects** with a short framing line about the foundation they represent. Slightly more compact presentation so they don't out-shout the AI work.

## Step 8 — Services section → "AI Automation Solutions"

Same card grid, six cards: AI Agents, Workflow Automation, Business Process Automation, CRM & Lead Automation, AI Content Automation, APIs & Integrations.

## Step 9 — Experience, Education, Community

Using the existing timeline component:

- **Experience** — Abooa Digital Solutions, emphasising AI automation, agents, workflow/CRM automation, email/SMS follow-ups, lead management, SaaS/web work.
- **Education & Training** — Yutiva — AI Automation (May 2026 – Aug 2026) with the covered topics and the ~98% weekly-assignment performance phrased as coursework, not a GPA; University of Bamenda, BSc Computer Engineering, 2022–2025 (GPA omitted from display); SoftGrid under **Certifications & Training** with its real certificate title from LinkedIn.
- **Community & Technical Activities** — GDG Bamenda: Google I/O Extended, workshops, hackathons, collaboration — explicitly community, not education.

## Step 10 — Skills & Technologies

Categorised skill section in existing card/pill styling: AI & LLMs · Automation · Integrations · Data · Development · Business Automation · Platforms. Tools listed at the level your experience actually supports.

## Step 11 — Contact

Keep the form, EmailJS wiring, and contact details exactly as they are. Heading becomes "Let's build something useful." with AI-automation-relevant supporting copy. Resume download link added near the footer.

## Step 12 — SEO, responsiveness, QA

- Title: `Ntein Praises | AI Automation Engineer`; new description; updated keywords, Open Graph, Twitter card, and JSON-LD job title. Canonical and sitemap keep the vercel.app URL.
- Check desktop, tablet, mobile in a real browser: nav, resume button, project cards, timeline, skills, images, no horizontal scroll.
- Verify every link, image, anchor, the resume download, and the browser console for errors.

## Technical notes

- The site stays plain static HTML/CSS/JS — no framework introduced, so Vercel keeps deploying it the same way. New CSS is appended using your existing `--accent`, `--radius`, `--shadow-*`, `.reveal`, and `.stagger` tokens; no variable values changed.
- Project data continues to live in the `projects` array in `index.js`, extended with an AI-automation group so the existing detail-view/lightbox code is reused rather than replaced.
- One caveat to flag: this Lovable project's own git sync may not point at `Praises-Engr-portfolio`. Once the work is done, if the sync target differs, the changed files can be copied into that repo (or the sync repo repointed) so Vercel picks them up — I'll confirm the sync target before finishing.
