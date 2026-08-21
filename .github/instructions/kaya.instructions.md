---
description: "Kaya public-site conventions for Next.js 15 Pages Router, Emotion, Tayo, metadata, and static assets."
applyTo: "packages/kaya/**/*"
---

# Kaya public-site instructions

Kaya is the public Wealth Wing site. It uses Next.js 15 with the **Pages Router**, React, Emotion, and the Tayo theme. Do not apply App Router conventions unless the project is explicitly migrated.

## Structure and framework rules

- `pages/` owns routes. Keep the application wrapper in `pages/_app.tsx`; route-level metadata belongs in `next/head` or the existing `metadata.ts` helpers.
- Put reusable page sections in `components/<feature>/` with the established `<name>.tsx`, `<name>.styles.ts`, `<name>.definitions.ts`, and `index.ts` structure. Keep site-specific hooks in `hooks/`.
- **Tayo is Kaya's required design system.** Preserve the current provider/theme setup and compose public `@wealth-wing/tayo` components, hooks, icons, and accessibility utilities before building custom UI. Do not add new deep imports into Tayo internals.
- Do not create app-local versions of a button, input, modal, menu, layout primitive, icon, or other reusable interaction when Tayo provides one. If the pattern is reusable and missing, add or extend it in Tayo first; reserve Kaya-local components for site-specific composition.
- Use Emotion styles and the active Tayo theme tokens for all available colors, typography, spacing, radii, shadows, and responsive values. Keep visual rules in sibling `*.styles.ts` files; do not introduce a disconnected token set or hard-coded equivalent of a Tayo token.

## Content, SEO, and assets

- Update `metadata.ts` together with any change that affects canonical URL, social cards, site title, description, or structured data. Keep `robots.txt` and `sitemap.xml` consistent with public routes.
- Store static assets in `public/` and reference them with stable public paths. Do not commit generated `.next/` or `.netlify/` output.
- Use semantic document structure, descriptive links, alt text for meaningful images, keyboard-accessible navigation, and visible focus states.

## Verification

- Run `yarn kaya build` for a production check. Use `yarn kaya start` for local development. There is no dedicated Kaya test or lint script today; do not invent one.
