# Wealth Wing Frontend instructions

This is a Yarn-workspaces monorepo. Start every task by identifying the package that owns each file in scope, then read the matching canonical instruction file before inspecting implementation details, proposing changes, or editing.

| Package | Purpose | Instructions |
| --- | --- | --- |
| `packages/lani` | Main authenticated finance application; React, Vite, React Router, Redux Toolkit | [`packages/lani/AGENTS.md`](packages/lani/AGENTS.md) |
| `packages/tayo` | Shared React component and theme library; Storybook and Emotion | [`packages/tayo/AGENTS.md`](packages/tayo/AGENTS.md) |
| `packages/kaya` | Public Wealth Wing site; Next.js Pages Router | [`packages/kaya/AGENTS.md`](packages/kaya/AGENTS.md) |
| `packages/utils` | Framework-agnostic TypeScript helpers; Vitest | [`packages/utils/AGENTS.md`](packages/utils/AGENTS.md) |

The canonical package guidance lives in `.github/instructions/*.instructions.md`. Copilot applies those files by path; the package `AGENTS.md` files point Codex and other agents to the same source of truth.

## Mandatory instruction loading

- Read the applicable `.github/instructions/<package>.instructions.md` file in full on every task, including small fixes, reviews, investigations, and follow-ups. Never skip it because the change appears simple or familiar.
- A package `AGENTS.md` reference is a pointer, not a substitute for reading the canonical instruction file. Agents that do not automatically expand `@` references must open the referenced file themselves.
- When work spans packages, read and apply every matching canonical instruction file before making changes. If the scope expands into another package, stop and read that package's instructions before continuing.
- For any UI, styling, accessibility, component, icon, or interaction work in Lani or Kaya, always read `.github/instructions/tayo.instructions.md` in addition to the application package instructions, even when the initial task does not modify Tayo.

## Repository-wide rules

- Use the root workspace scripts: `yarn lani <script>`, `yarn tayo <script>`, `yarn kaya <script>`, and `yarn utils <script>`.
- Keep package boundaries explicit. Consume public workspace exports (for example `@wealth-wing/tayo`) for new cross-package code; do not add new relative imports across packages or reach into another package's `src` directory.
- Treat Tayo as the required design system for application UI. Before writing or changing UI, search `packages/tayo/src`, its public exports, and relevant stories for components, hooks, icons, accessibility helpers, patterns, and theme tokens. Do not assume Tayo lacks a solution without performing this search.
- Compose and import Tayo through its public `@wealth-wing/tayo` exports. Do not recreate an app-local equivalent of an available Tayo control, visual primitive, interaction, icon, helper, or token.
- If Tayo lacks a reusable primitive, add or extend it in Tayo first, following the Tayo canonical instructions, then consume its public export in the application. Keep application-local UI limited to feature-specific composition.
- Use the active Tayo theme for colors, typography, spacing, radii, shadows, and responsive values. Do not introduce an application-local design system or hard-coded equivalents of available Tayo tokens.
- Follow the existing formatter, ESLint configuration, file naming, and import ordering. Use TypeScript types; do not add `any` or suppressions merely to silence an error.
- Reuse an existing component, hook, utility, or API hook before adding an abstraction or dependency. Do not add libraries without a task requirement.
- Do not edit generated files. Regenerate them through their owning package command and include the generated result only when the source contract changed.
- Preserve accessibility: semantic HTML first, labelled interactive controls, visible keyboard focus, and keyboard-operable flows.
- Keep changes scoped. Do not modify environment files, deployment configuration, or unrelated packages unless the task requires it.

## Verification

Run the narrowest relevant check after a change. At minimum, run the package's available build, lint, typecheck, or test command when practical. If a package has no corresponding script, say so instead of inventing one.
