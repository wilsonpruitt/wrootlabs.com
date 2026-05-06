# wrootlabs.com

Landing site for Wroot Labs, the software shop. Sister site to wrootpress.com, sharing the same Wroot design system.

## Stack

- Next.js 16, App Router, TypeScript
- `next/font/google` for EB Garamond + Inter
- Design tokens forked from `~/wroot-labs/brand/design-system/colors_and_type.css` (in `app/globals.css`)
- Deployed on Vercel under `wilson-pruitts-projects` team

## Develop

```bash
pnpm install
pnpm dev
```

## Deploy

```bash
npx vercel deploy --prod
```

## Migration note

This site replaces the previous Netlify-hosted dark-mode landing (single `~/wroot-labs/site/index.html` with grain texture and Fraunces type). The Netlify deploy on the `gryngamour@gmail.com` team will be sunset once DNS swings to Vercel.

## Products listed

- Fairshare — `fairshare.church` — live
- Chapel — `chapelapp.com` — live
- Book the Church — `bookthechurch.com` — live
- Cupboard — in preparation, no URL yet

Circuit (single-tenant for Covenant UMC Austin) is intentionally not listed — it's effectively private infrastructure rather than a public product. Chapel is its productized successor.
