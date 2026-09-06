# New Path Vision — Website

Static marketing site for New Path Vision (Pottstown, PA). No build step —
plain HTML/CSS/JS, deploys to Vercel as-is.

## Structure

```
index.html      Homepage (design direction "2a")
about.html      Placeholder — not designed yet
contact.html    Placeholder — not designed yet
css/styles.css  All styles, design tokens as CSS custom properties
js/main.js      Mobile nav toggle only
images/         Drop team headshots here
```

## Still open

- [ ] Point every "Book now" link at the practice's real booking flow
      (4PatientCare widget — see the practice's own integration docs for the link)
- [ ] Add 4 team headshots in `images/` and swap into the team-teaser section
- [ ] Design and build `about.html` and `contact.html` (currently stubs)
- [ ] Practice logo/wordmark — currently text-only, per the design spec

## Local preview

No build tooling needed. Open `index.html` directly in a browser, or serve it:

```bash
npx serve .
```

## Deployment

This repo deploys to Vercel with zero configuration (static site, no
framework). Import the repo at vercel.com/new and every push to `main`
gets its own deployment; pushes to other branches / PRs get preview URLs.
