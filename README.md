# New Path Vision — Website

Static marketing site for New Path Vision (Pottstown, PA). No build step —
plain HTML/CSS/JS, deploys to Vercel as-is.

This is a from-scratch rebuild, not a port of the practice's live Wix site
(`newpathvision.com`) — it doesn't share that site's backend, CMS, commerce,
blog, or patient portal. External systems (booking, contact-lens reorder,
patient portal) are linked out to, never rebuilt here. See
`NEW_PATH_VISION_WEBSITE_REINVENTION_BLUEPRINT.md`-derived Phase 1 plan for
the full rationale if you have access to it — the short version: this phase
covers the informational/marketing site only.

## Structure

```
index.html                              Homepage
about.html                              Practice story, values, team teaser
contact.html                            Reason-selector contact form, address/hours/map
team.html                               Team overview
team/provider-1.html .. provider-4.html Individual bio pages (placeholder names)
eye-care.html                           Eye Care hub
eye-care/comprehensive-eye-exams.html
eye-care/medical-eye-care.html
eye-care/emergency-eye-care.html
eye-care/cataract-evaluations.html
eye-care/pre-post-operative-care.html
dry-eye.html                            Dry Eye Center hub
dry-eye/symptoms.html
dry-eye/causes.html
dry-eye/diagnosis.html
dry-eye/treatments.html
patient-resources.html                  Resource hub + FAQ accordion (#faqs)
patient-resources/insurance-payment.html
patient-resources/what-to-expect.html
eyewear-contacts.html                   Minimal stub — full build is a later phase
eye-health-library.html                 Minimal stub — full build is a later phase
css/styles.css                          All styles; design tokens as CSS custom properties
js/main.js                              Mobile nav, dropdown nav, copyright year, contact form
images/                                 Drop team headshots here
```

Every nested page is one folder deep and uses `../` for root-relative links —
there's no templating, so header/nav/footer markup is duplicated per file.
If you're regenerating pages, the Python generator scripts used to build
`eye-care/`, `dry-eye/`, `team/`, and `patient-resources/` (not checked into
this repo — they lived in the build session's scratch space) are the
reference for that pattern; hand-edit consistently with the existing markup
otherwise.

## Design system

- Colors, spacing, and type scale are CSS custom properties in
  `css/styles.css` (`:root`), including a semantic alias layer
  (`--brand-primary`, `--surface`, `--text-primary`, etc.) for new
  components, and a dark-surface palette (`--accent-bright`,
  `--text-on-dark`, `--text-on-dark-muted`) used by the masthead, hero,
  and footer.
- Header (`.utility-bar` + `.site-nav`) and footer (`.main-footer`) are dark
  ink-green and identical on every page. Nav dropdowns and the FAQ/stepper
  accordions are native `<details>/<summary>` — no JS framework, no ARIA
  menu hand-rolled.
- `.hero` is a dark panel reused on every page; the homepage additionally
  uses `.care-path-grid`, `.technology-grid`, and a library teaser not used
  elsewhere.
- TODO comments are tagged by kind — grep for these to find what's blocking
  launch:
  - `TODO(fact)` — unverified fact pending confirmation (roster, hours,
    services, insurance, exam/treatment specifics)
  - `TODO(asset)` — real photography/headshot/logo needed
  - `TODO(link)` — external destination needs verification (Patient Portal)
  - `TODO(later-phase)` — intentionally deferred (see below)
  - `TODO(copy)` — proposed marketing copy, not client-approved final text

## Still open

- [ ] **Real logo file.** The header/footer use a placeholder icon +
      wordmark. The client shared real logo artwork in chat, but pasted
      chat images can't be saved to disk in this environment — they need
      to arrive as an actual file upload (or a fetchable URL) before they
      can be dropped into the repo.
- [ ] **Team roster.** Names, credentials, and bios are all `Dr. [Name]`
      placeholders across `about.html`, `team.html`, and the 4 bio pages.
      Also note: 4 providers are stubbed (1 MD + 3 OD) to match the
      original homepage copy, but that copy also says "four optometrists"
      — i.e. 5 providers total. Don't guess a 5th; confirm the real count.
- [ ] **Team headshots** — swap each `.team-photo`/`.provider-bio-photo`
      placeholder for a real image once available.
- [ ] **Hours** — every hours block is flagged `TODO(fact)`; the source
      blueprint noted the practice's own web properties disagree on hours.
      Pick one canonical source before publishing.
- [ ] **Insurance & accepted plans** — `patient-resources/insurance-payment.html`
      deliberately does not list specific accepted plans (unverified).
      The homepage's pre-existing "AOA · PA Optometric Association ·
      Opticians Association of PA" strip is also flagged `TODO(fact)`.
- [ ] **Clinical content review** — exam protocol specifics, the emergency
      first-aid guidance, conditions-monitored scope, and treatment
      offerings are all written as general/safe placeholder guidance and
      need clinician sign-off before publishing (see `TODO(fact)` tags in
      `eye-care/*` and `dry-eye/*`).
- [ ] **Patient Portal link** — currently points at the Eyefinity URL from
      the practice's existing site, but that hasn't been verified as the
      correct patient-facing destination.
- [ ] **Later-phase pages** — Blog/Eye Health Library and full Eyewear &
      Contacts (frame browsing, optical team) are minimal "coming soon"
      stubs; Privacy Policy and Accessibility Statement don't exist yet.
- [ ] **Contact form backend** — the form validates client-side but has
      nowhere to submit to; it currently tells the user to call/email
      directly instead of faking a success state. Same for the footer
      newsletter signup.
- [ ] **Map embed** — `contact.html`'s map is a placeholder box, not a
      real embed.

## Local preview

No build tooling needed. Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deployment

This repo deploys to Vercel with zero configuration (static site, no
framework). Import the repo at vercel.com/new and every push to `main`
gets its own deployment; pushes to other branches / PRs get preview URLs.
