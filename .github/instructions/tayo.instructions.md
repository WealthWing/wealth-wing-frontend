---
description: "Tayo shared UI-library conventions: components, Emotion, theme tokens, exports, and Storybook."
applyTo: "packages/tayo/**/*"
---

# Tayo component-library instructions

Tayo is the shared React UI library used across this workspace. It provides the theme, primitives, icons, form controls, accessibility helpers, and Storybook stories.

## Component design and layout

- Search `src/` for an existing primitive before creating one. Prefer extending or composing it over adding a near duplicate.
- Each reusable component belongs in `src/<component-name>/`. Follow the existing structure: implementation (`<name>.tsx`), styles (`<name>.styles.ts`), definitions (`<name>.definitions.ts` when needed), `index.ts`, and a `<name>.stories.tsx` story.
- Export intended public APIs from the component's `index.ts` and add them to `src/index.ts`. Do not expose implementation-only files accidentally.
- Maintain backward compatibility for exported props. Treat changes to public props, tokens, and component behavior as workspace-wide changes; check Lani and Kaya consumers.

## Styling and accessibility

- Use `@emotion/react` and Tayo's existing theme objects. Use theme tokens for visual system values; do not add arbitrary colors, spacing scales, or typography values when a token exists.
- Keep component styles co-located in `*.styles.ts`. Preserve the existing classless Emotion `css` pattern.
- Use semantic elements before ARIA. Every interactive component needs keyboard behavior, focus-visible treatment, and an accessible name; validate disabled, loading, and error states where relevant.
- Use the library's `Icon` system and `ScreenReaderOnly` utility rather than re-creating those behaviors locally.

## Icons and verification

- Add source SVGs under `src/icon/svg/`; regenerate icon components with `yarn tayo generate:icons`. Treat the generated icon output as generated code and do not hand-edit it.
- Add or update a focused Storybook story for new reusable UI and meaningful visual states.
- Run `yarn tayo lint` for Tayo source changes. Use `yarn tayo start` to inspect Storybook when the change is visual or interactive.
