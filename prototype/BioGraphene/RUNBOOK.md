# Bio-Graphene Global, Inc. — Project Runbook
**Handoff Date:** April 15, 2026  
**Built by:** Christopher DeMaria via Saulved LLC / Claude Code  
**Current location:** `saulved.com/prototype/BioGraphene/`  
**Live prototype URL:** `https://saulved.com/prototype/BioGraphene/`

---

## What Was Built

A full 8-page prototype website for Bio-Graphene Global, Inc. — a graphene startup client.  
Pure static HTML/CSS, no framework, no build step.

### Pages
| File | Status | Notes |
|---|---|---|
| `index.html` | Complete | Full homepage — hero, 4 pillars, market stats, CTA |
| `investors.html` | Complete | Full investors page with vision, differentiators, ESG |
| `about.html` | Complete | Company overview, mission, values, team placeholders |
| `sustainability.html` | Placeholder | Structure + `[Client to provide]` content blocks |
| `technology.html` | Placeholder | Structure + `[Client to provide]` content blocks |
| `markets.html` | Placeholder | Structure + `[Client to provide]` content blocks |
| `news.html` | Placeholder | 3 news card templates — client fills headlines/copy |
| `contact.html` | Complete | Contact form (not wired up), office info placeholders |
| `style.css` | Complete | Full shared stylesheet — responsive, dark green theme |

### Design System
- **Colors:** Dark green nav (`#071510`), green accent (`#2e8b57`), light green (`#4db87a`)
- **Fonts:** Montserrat (headings) + Inter (body) via Google Fonts
- **Logo:** SVG hexagonal graphene lattice, inline in each page nav
- **Responsive:** Desktop / tablet (hamburger menu at 900px) / mobile
- **Footer note:** "Prototype developed by Saulved LLC" on every page

---

## Content Status

### Ready to publish (content complete):
- `index.html` — uses client-provided investor content, rewritten as original copy
- `investors.html` — full investor relations page based on client content
- `about.html` — original copy drafted, client should review and approve

### Needs client content (placeholders marked `[Client to provide]`):
- `sustainability.html` — 4 pillars: Sourcing, Production, Application, Lifecycle + ESG metrics
- `technology.html` — production process steps, in-situ synthesis description, IP overview
- `markets.html` — concrete/asphalt detail, expansion market descriptions, market metrics
- `news.html` — 3 news card headlines, summaries, and dates
- `contact.html` — real email addresses for: investor relations, general inquiries, media/press

---

## Immediate To-Do List

### For the client (content):
- [ ] Fill in all `[Client to provide]` placeholders across sustainability, technology, markets pages
- [ ] Provide real contact email addresses for contact.html
- [ ] Review and approve about.html copy
- [ ] Provide 3 real news items for news.html
- [ ] Confirm or update the $18B+ / 5% CAGR market figures on markets and investors pages
- [x] Location updated to Spokane, WA across all pages (contact, about, investors, news)

### For the developer (technical):
- [ ] **Get a domain** — e.g. `biographeneglobal.com` or similar (register via GoDaddy or Namecheap)
- [ ] **Move to its own GitHub repo** — waiting on client approval
- [ ] **Set up Netlify hosting** — blocked until own repo/domain exists (site currently on GitHub Pages)
- [ ] **Add Decap CMS** — blocked until on Netlify
- [ ] **Wire up contact form** — blocked until on Netlify (Netlify Forms) or use Formspree as interim
- [x] **Add favicon** — `favicon.svg` created (hex lattice logo, dark green background, 32×32) — April 15 2026
- [ ] Remove "Prototype developed by Saulved LLC" footer note when going live
- [x] **Add meta descriptions and Open Graph tags** — added to all 8 pages — April 15 2026
- [x] **Polish placeholder pages** — `[Client to provide]` blocks replaced with styled `.pending` class (green left-border, italic, "Content pending" label) across sustainability, technology, and markets — April 15 2026

---

## How to Move to Its Own Repo

```bash
# From inside saulved.com repo
cd ~/saulved.com

# Copy the prototype files to a new folder outside the saulved repo
cp -r prototype/BioGraphene ~/biographene-global

# Initialize as its own git repo
cd ~/biographene-global
git init
git add .
git commit -m "Initial commit — Bio-Graphene Global prototype"

# Create a new GitHub repo at github.com/cdemaria1313/biographene-global
# Then connect and push:
git remote add origin https://github.com/cdemaria1313/biographene-global.git
git push -u origin main
```

---

## How to Add Netlify CMS (Decap CMS)

Once on its own repo and connected to Netlify:

1. Create `admin/index.html` and `admin/config.yml` in the repo
2. In `config.yml`, define editable collections (News posts, Investors page fields, etc.)
3. Enable Netlify Identity in the Netlify dashboard
4. Client registers at `yourdomain.com/admin`, you approve their account
5. They can then edit content through a clean UI — changes auto-commit to GitHub

*Ask Claude Code to set this up when starting the new session.*

---

## Starting a New Claude Code Session for BioGraphene

When opening a new session, paste this as your first message:

> I'm continuing work on a prototype website for a client called Bio-Graphene Global, Inc. — a sustainable graphene startup. The prototype was built at saulved.com/prototype/BioGraphene/ and is now being moved to its own repo at [repo URL]. The full runbook is at RUNBOOK.md in the project root. Next steps are: move to own domain, set up Netlify hosting, add Decap CMS so the client can edit content, and wire up the contact form.

---

## Tech Stack Summary
- Pure HTML5 / CSS3 / vanilla JS (hamburger menu toggle only)
- No npm, no build process, no dependencies
- Hosted on GitHub Pages (via saulved.com repo, to be moved)
- Google Fonts CDN for typography
- All SVG icons inline — no external icon library

---

*Runbook created by Saulved LLC — Christopher DeMaria*
