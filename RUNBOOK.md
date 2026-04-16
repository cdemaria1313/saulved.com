# Saulved LLC — Site Runbook
**Last updated:** April 2026  
**Maintained by:** Christopher DeMaria (Christopher.DeMaria@saulved.com)  
**Claude Code session label:** Saulved (keep BioGraphene work in its own separate session)

---

## Overview

Static HTML/CSS/JS website for Saulved LLC, hosted on GitHub Pages with a custom domain via GoDaddy DNS.

- **Live URL:** https://saulved.com  
- **GitHub repo:** https://github.com/cdemaria1313/saulved.com  
- **Hosting:** GitHub Pages (auto-deploys on push to `main`)  
- **Domain registrar:** GoDaddy (DNS CNAME points to GitHub Pages — no action needed there)  
- **Contact form:** Formspree (https://formspree.io) — delivers to Christopher.DeMaria@saulved.com  
- **Booking link:** Outlook Bookings (https://outlook.office.com/bookwithme/...)

---

## Tech Stack

| Layer | What's Used |
|---|---|
| Pages | Pure static HTML5 |
| Styles | Single shared `style.css` with CSS custom properties |
| Fonts | Google Fonts — Montserrat (headings) + Inter (body) |
| Icons/Graphics | Inline SVG (favicon, patterns) |
| Form backend | Formspree (free tier, 50 submissions/month) |
| Hosting | GitHub Pages |
| Version control | Git / GitHub |
| Dev preview | Python3 HTTP server on port 3000 (via `.claude/launch.json`) |

No npm, no build step, no framework. Edit files → push → site updates.

---

## File Structure

```
saulved.com/
├── index.html          # Homepage — hero, What We Do, How It Works, Our Approach
├── about.html          # About page — company overview, philosophy, differentiators
├── services.html       # Services & Pricing — Good/Better/Best tables, add-ons
├── faq.html            # FAQ — 11 questions, accordion-style (HTML <details> element)
├── contact.html        # Contact form (Formspree) + phone/email/booking info
├── style.css           # Single shared stylesheet — ALL pages use this
├── favicon.svg         # Browser tab icon — gradient "S" on dark navy
├── header.png          # Original hero background image (kept, not currently used)
├── CNAME               # GitHub Pages custom domain config — do not edit
├── README.md           # GitHub repo readme
├── RUNBOOK.md          # This file
├── fireworks.js        # Legacy JS file — not currently used
├── Saulved LLC.html    # Legacy page — not linked, safe to archive
└── prototype/
    └── BioGraphene/    # Client prototype — managed in a separate Claude session
```

---

## Design System

All visual variables are in the `:root` block at the top of `style.css`:

```css
:root {
  --nav-bg:      #070d1a;   /* nav + footer background */
  --blue-dark:   #0f1929;   /* dark section backgrounds, page heroes */
  --blue-mid:    #1b2850;   /* CTA strip, table headers */
  --blue-bright: #3a7bd5;   /* primary accent, card borders, buttons */
  --blue-light:  #5aa0f0;   /* secondary accent, labels, links */
  --cyan:        #00d2ff;   /* callout borders, button gradient end */
  --graphite:    #1a1f2e;   /* headings on light backgrounds */
  --text:        #2c3650;   /* body text */
  --text-light:  #5a6a8a;   /* secondary text, card body */
  --bg:          #f5f7fc;   /* light section / page background */
  --white:       #ffffff;   /* card backgrounds */
  --border:      #d0d9f0;   /* table row borders */
  --shadow:      0 4px 28px rgba(10,20,60,0.10);
}
```

**To change the brand color:** update `--blue-bright` and `--blue-light`. Everything else follows.

---

## Key CSS Components

| Class | What it does |
|---|---|
| `.nav` + `.nav-inner` | Sticky top nav — hamburger activates at 900px |
| `.hero` | Full-height homepage hero (CSS network pattern, no image) |
| `.hero-eyebrow` | Pill-style label above the company name |
| `.page-hero` | Inner page hero (about, services, faq, contact) with hex pattern |
| `.section` | Page section — add `.section-dark` for navy background |
| `.section-inner` | Max-width content container (1100px) |
| `.section-label` | Small all-caps label above headings |
| `.card-grid` | Auto-fit responsive grid of cards |
| `.card` | White card with blue top border — add `.card-dark` for dark variant |
| `.vision-card` | Wide text card with left blue border |
| `.callout` | Highlighted block with cyan left border |
| `.steps-row` | Numbered 4-step horizontal process strip |
| `.faq-list` + `details.faq-item` | Accordion FAQ using native HTML `<details>` |
| `.contact-grid` | Two-column contact layout (info + form) |
| `.btn-primary` | Gradient blue button |
| `.btn-white` | White button (used on dark backgrounds) |
| `.cta-strip` | Full-width dark blue CTA band |
| `.table-scroll` + `.service-table` | Horizontally scrollable pricing tables |
| `.partner-badge` | Microsoft Partner badge block |

---

## Nav Structure (all pages)

```html
Home | About | Services & Pricing | FAQ | Contact →
```

- "Contact" is the blue CTA button (`.nav-cta`)
- Hamburger menu activates at ≤900px viewport width
- Active page gets class `active` on its `<a>` tag

**To add a new page to the nav**, update the `<div class="nav-links">` block in all 5 HTML files and the footer links too.

---

## Formspree (Contact Form)

- **Form endpoint:** `https://formspree.io/f/xpqkpdoe`
- **Delivers to:** Christopher.DeMaria@saulved.com
- **Dashboard:** https://formspree.io (log in with Saulved email)
- **Free tier limit:** 50 submissions/month — upgrade if volume increases
- Submissions also visible in the Formspree dashboard under "Saulved Contact"
- **Spam note:** Microsoft 365 may filter Formspree emails to Junk. Whitelist `formspree.io` in your M365 anti-spam policy or mark as Not Junk in Outlook.

---

## Deployment Workflow

From your WSL terminal (you're usually already in `~/saulved.com`):

```bash
# Stage specific files
git add index.html style.css

# Or stage all changed files
git add -A

# Commit
git commit -m "Brief description of what changed"

# Push — GitHub Pages rebuilds automatically (takes ~1-3 min)
git push origin main
```

**Check deployment status:** https://github.com/cdemaria1313/saulved.com/actions

---

## Backup Branches

| Branch | Date | Contents |
|---|---|---|
| `backup-pre-04-15-2026` | April 2026 | Original site before any Claude Code work |
| `backup-pre-redesign-04-15-2026` | April 2026 | Pre-redesign snapshot (dark theme, 3 pages) |
| `main` | Current | Live site |

To restore a backup:
```bash
git checkout backup-pre-redesign-04-15-2026 -- index.html style.css
```

---

## Working with Claude Code

This site is maintained via **Claude Code** (replaces GitHub Copilot).

**Start a session:** Open Claude Code in WSL, navigate to the project root, and describe what you want changed. Claude reads the files directly and makes edits.

**Keep sessions organized:**
- Saulved.com work → this session (project context: `saulved.com`)
- BioGraphene work → separate Claude Code session (see `prototype/BioGraphene/RUNBOOK.md`)

**The UNC path issue:** Claude Code runs from the Windows shell, so it references WSL files as `//wsl.localhost/Ubuntu-22.04/home/cdemaria1313/saulved.com/...`. Your own WSL terminal just uses `~/saulved.com`. Both point to the same files.

---

## Todo / Future Improvements

### Near-term
- [ ] **Testimonials** — add 1-2 real client quotes once available
- [ ] **Phone number in nav** — add `941-812-0407` as a small link in the nav bar for mobile visibility
- [ ] **Formspree upgrade** — if form volume exceeds 50/month, upgrade to Formspree Basic ($10/mo)
- [ ] **Google Analytics** — add GA4 tag to measure traffic (all 5 pages need `<script>` in `<head>`)

### Medium-term
- [ ] **Blog / resources page** — one article per month on a Microsoft topic builds SEO and authority
- [ ] **Case studies** — even anonymized ("Regional nonprofit, 45 users, migrated from Google Workspace to M365 Business Premium…")
- [ ] **"Is Saulved right for you?" self-assessment** — short checklist that filters leads

### Housekeeping
- [ ] Archive or delete `Saulved LLC.html` (legacy, not linked anywhere)
- [ ] Archive or delete `fireworks.js` (legacy, not used)
- [ ] Consider whether `header.png` should be kept or removed (no longer used in hero)
- [ ] Update footer copyright year from 2025 → 2026

---

## Pricing Reference (as of April 2026)

Verified current — update `services.html` if Microsoft changes pricing.

| Product | Price |
|---|---|
| M365 Business Basic | $6/user/mo |
| M365 Business Standard | $12.50/user/mo |
| M365 Business Premium | $22/user/mo |
| RapidStart CRM | Free, first 10 users |
| RapidStart additional users | $15/user/mo |
| Power Apps Per App | $5–6/user/mo |
| Power Apps Premium | $20–24/user/mo |
| Teams Phone Domestic | $17/user/mo |
| Defender for Business | $3/user/mo |
| M365 Copilot | $30–31.50/user/mo |

---

## Contact

**Christopher DeMaria**  
Christopher.DeMaria@saulved.com  
941-812-0407  
https://saulved.com
