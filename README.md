# HawkFranklin

Corporate website for HawkFranklin OÜ, built with Astro and GSAP.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The site is deployed to GitHub Pages through the workflow in
`.github/workflows/deploy.yml`.


## AURA OpenRouter callback deployment

Static files in `public/aura/openrouter/` supply production and debug return
pages plus a first-party script. `public/.well-known/assetlinks.json` currently
contains only the AURA Debug association and its public debug signing fingerprint.
Add the actual Play signing fingerprint before production association; never
substitute the debug key. Remove debug domain access when testing ends.

The pages are intentionally standalone, without the corporate layout, analytics
or third-party assets. Their script handles same-origin trailing-slash routing,
removes callback query values from browser history, and forwards the response only
to the selected AURA package. The website never exchanges the code for an API key.
GitHub Pages still processes incoming requests under its own policies. Static
source files cannot configure GitHub's edge logs or response cache headers; do not
claim those platform controls have been applied. If stronger hosting controls
are required, deploy these routes on infrastructure that provides them.

`public/products/aura-privacy.html` and `.md` contain the app policy, sourced from
the AURA repository. Build with `npm run build`. The existing main-branch workflow
uploads `dist` and deploys GitHub Pages. Local source preparation/build is not a
live deployment and does not establish that App Links or authentication work.
