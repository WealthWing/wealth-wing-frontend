# Wealth Wing Frontend

This repository is a Yarn-workspaces monorepo. Determine the owning package before making changes:

| Path | Package | Stack |
| --- | --- | --- |
| `packages/lani/` | Main finance application | React, Vite, React Router, Redux Toolkit, RTK Query |
| `packages/tayo/` | Shared UI library | React, Emotion, Storybook |
| `packages/kaya/` | Public site | Next.js 15 Pages Router |
| `packages/utils/` | Shared utilities | TypeScript, Vitest |

The path-scoped files in `.github/instructions/` are the package source of truth. Copilot uses the matching file together with this repository-wide file in clients that support path-specific instructions. For multi-package changes, follow every applicable file. `AGENTS.md` provides the equivalent routing for agents that support agent instructions.

## Rules for all packages

- Prefer existing workspace components, hooks, utilities, and patterns. Do not add a dependency or a new architectural pattern without a clear need.
- For new cross-package code, import public workspace APIs such as `@wealth-wing/tayo`; do not create relative imports across packages or new imports from another package's `src` directory.
- Treat Tayo as the required design system for application UI. Search it first, compose its components/hooks/icons/accessibility helpers, and use its active theme. Do not build a custom control or local styling system when Tayo has a suitable primitive or token.
- If a reusable UI pattern is missing from Tayo, implement or extend it in Tayo first, then consume it from the application. Only create app-local UI when it is truly feature-specific and cannot be generalized.
- Keep TypeScript strict. Avoid `any`, broad casts, and lint suppressions that hide a real problem.
- Use semantic HTML, accessible names for controls, keyboard support, and a visible `:focus-visible` state.
- Do not hand-edit generated code. Use the package's documented generation command.
- Run the narrowest available verification command for the changed package. Do not claim checks that were not run.
