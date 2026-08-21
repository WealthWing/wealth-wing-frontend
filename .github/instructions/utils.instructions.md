---
description: "Utilities package conventions: framework-independent TypeScript helpers, public exports, Vitest tests, and type safety."
applyTo: "packages/utils/**/*"
---

# Utils package instructions

Utils contains small, framework-independent TypeScript helpers shared by the workspace.

## Implementation

- Keep utilities deterministic, side-effect free, and free of React/UI dependencies unless a task explicitly changes the package's scope.
- Co-locate focused Vitest tests as `*.test.ts` beside the implementation. Cover normal cases, edge cases, and invalid input behavior when applicable.
- Export public functions and types through `src/index.ts`; do not require consumers to import internal file paths.
- Preserve existing formatting and date/time behavior. Be explicit about units, time zones, locale, and currency assumptions in APIs rather than relying on ambient defaults.
- Use strict TypeScript; avoid `any` and unchecked casts.

## Verification

- Run `yarn utils test:run` and `yarn utils typecheck` after utility changes.
