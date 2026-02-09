# Wealth Wing Frontend - Copilot Instructions

## Project Architecture

**Monorepo Structure**: Three workspace packages coordinated via root `package.json` workspaces:

-   **`lani`** – Main application (React + TypeScript, Vite, Redux)
-   **`tayo`** – Reusable UI component library (Storybook, Emotion CSS-in-JS)
-   **`utils`** – Utility functions (currency formatting, time/date helpers, tested with Vitest)

**Core Dependencies**: React 18.3, React Router 6.25, Redux Toolkit, Emotion, Vite, date-fns, Storybook 8.4

## Key Architectural Patterns

### Package Imports

Use workspace imports (`@wealth-wing/<package>`) rather than relative paths for cross-package dependencies:

```tsx
// ✓ Correct
import { Button, theme } from '@wealth-wing/tayo';

// ✗ Avoid relative paths between packages
import { Button } from '../../tayo/src/button';
```

### State Management (Redux + RTK Query)

-   Redux store combines auth reducer + RTK Query API base (`apiBase`) – see `store.ts`
-   API types auto-generated from OpenAPI spec via `openapi-typescript` (avoid manual edits to `api.ts`)
-   RTK Query handles all API caching/loading states
-   Auth state in `redux/auth/` – check before adding new Redux slices
-   Generate types: `npm run generate:types` in `lani` package

### Styling: Emotion CSS-in-JS

All styles use `@emotion/react` with TypeScript. Pattern:

```tsx
// Component.styles.ts
import { css } from '@emotion/react';
import { theme } from '@wealth-wing/tayo';

export const component = {
	root: css`
		color: ${theme.color.textPrimary};
		gap: ${theme.space.s16};
	`
};

// Component.tsx
import { component } from './component.styles';
export const Component = () => <div css={component.root}>...</div>;
```

**Theme tokens** in `tayo/src/theme/definitions.ts` (colors, spacing `s*`, typography, shadows) – use these consistently.

### Form Components & Validation

-   Use `FormControl` from `tayo` as wrapper for all inputs
-   Forms use `react-hook-form` + `FormControl` provider pattern (see `form-control-provider.tsx`)
-   Custom inputs (input, select, date-picker, textarea) all integrate via `FormControlProvider` context
-   Error messages auto-managed by FormControl state

## Copilot Behavior Rules

-   Prefer modifying existing patterns over introducing new ones
-   Do NOT introduce new libraries unless explicitly requested
-   Follow existing file structure and naming conventions exactly
-   Ask for clarification (via TODO comments) if requirements are ambiguous
-   When unsure, choose the simplest solution consistent with current patterns
-   Avoid large components; refactor into smaller units if logic grows

## Uncertainty Handling

If information is missing or unclear:

-   Do NOT invent APIs, routes, or data fields
-   Leave a TODO comment explaining the uncertainty
-   Prefer existing similar components as reference

## Hard Constraints

-   Do NOT hardcode colors, spacing, or typography
-   Do NOT bypass FormControl for inputs
-   Do NOT manually edit generated API files
-   Do NOT introduce local state when Redux or providers already exist
-   Do NOT create new patterns without matching existing ones

## Before creating a new component or utility:

-   Search `tayo` for an existing equivalent
-   Extend or compose existing components where possible
-   Avoid near-duplicate abstractions

### Component Library (tayo)

Folder structure: `src/<component-type>/` (e.g., `button/`, `form/`, `table/`).
Each component includes:

-   `index.ts` – exports
-   `<name>.tsx` – component logic
-   `<name>.styles.ts` – Emotion styles
-   `<name>.definitions.ts` – TypeScript types/interfaces
-   `<name>.stories.tsx` – Storybook story

Run Storybook locally: `yarn tayo start` (port 6006, uses root `.storybook` config).

### Routing

React Router configured in `lani/src/router/router.tsx`:

-   Page components in `router/<feature>/<name>-page.tsx`
-   Child route pages co-located in feature folders
-   No dynamic route generation – define explicit routes

## Developer Workflows

### Local Development

```bash
# Root workspace install
npm install  # or yarn install

# Start main app (lani) on http://localhost:3001
cd packages/lani && npm run dev

# Start Storybook (tayo components) on http://localhost:6006
yarn tayo start

# Run utils tests (Vitest)
yarn utils test:run
```

### Building & Deployment

```bash
# Build lani for production
cd packages/lani && npm run build  # Output: packages/lani/build/

# Type check (detect issues before build)
yarn utils typecheck  # in tayo: npm run lint (ESLint max-warnings=0)

# Generate component icons from SVG
yarn tayo generate:icons
```

Netlify deployment via `lani-deploy.sh` script – configures output dir and routing.

### Code Generation

-   **API types**: `npm run generate:types` in `lani` (reads OpenAPI spec, regenerates `api.ts`)
-   **Icons**: `yarn tayo generate:icons` (converts SVG files to React TSX using SVGR)

## Project-Specific Conventions

### Naming & File Organization

-   Kebab-case for file names (`job-card.tsx`, `date-picker.tsx`)
-   PascalCase for component/type names
-   Append `.styles` for style files, `.definitions` for types-only files
-   Group related components by feature (e.g., `router/account/`, `router/transaction/`)

### BaseUrl Configuration

-   `lani/tsconfig.json`: `baseUrl: "src"` enables path shortcuts (`import { Button } from 'components/button'`)
-   Apply same pattern to other packages if adding baseUrl

### TypeScript Strictness

-   Strict mode enabled – avoid `any` types
-   Use discriminated unions for complex component props (see FormControlProps pattern)
-   Export types from `.definitions.ts` files for clarity
-   Try to use type instead of interface where possibles

### Spacing & Theme Usage

-   Only use theme tokens (`theme.space.s*`, `theme.color.*`, `theme.borderRadius.*`) – no hard-coded values
-   Common spacing: `s8`, `s12`, `s16`, `s24` (8px, 12px, 16px, 24px increments)
-   Box component provides margin/padding shortcuts: `mt="s8"`, `px="s16"` (from tayo containers)

### Icons

-   Icon component in `tayo/src/icon/` with `size` prop and predefined names (see generated icons)
-   Add SVG files to `src/icon/svg/`, run `generate:icons` script

### Accessibility

-   Use semantic HTML (nav, main, section, button elements)
-   Include ARIA labels/roles (`role="navigation"`, `aria-label="..."`)
-   Screen reader only utilities in `tayo/src/accessibility/`

## Integration Points & External Services

### AWS Amplify

-   Configured in `lani` for authentication/backend integration
-   Check `lani/src/data/` for API base config connecting to Amplify backend
-   Backend infrastructure in AWS CDK constructs (see `@aws-amplify/backend` in dev dependencies)

### OpenAPI/RTK Query

-   Backend API contract defined via OpenAPI spec
-   Auto-generates TypeScript types and RTK Query hooks
-   Modify via OpenAPI spec + regenerate, not by hand-editing `api.ts`

## Testing & Quality

### Linting

-   ESLint in `tayo` with strict config (`--max-warnings=0`)
-   Run: `yarn tayo lint`

### Type Checking

-   TypeScript strict mode
-   Run: `yarn utils typecheck`

### Unit Tests (utils package)

-   Vitest configuration in `utils/vitest.config.ts`
-   Test files: `*.test.ts`
-   Run: `yarn utils test:run`

### Storybook

-   Interactive UI testing and documentations
-   A11y addon enabled for accessibility checks
-   Run: `yarn tayo start`

## Common Gotchas

1. **Cross-package imports**: Always use `@wealth-wing/<package>` scoping; relative imports between packages break builds
2. **Theme tokens**: Don't hardcode colors/spacing – use `theme.*` from `@wealth-wing/tayo`
3. **API types**: Never manually edit `lani/src/data/api.ts` – regenerate via OpenAPI spec
4. **FormControl children**: Form inputs _must_ be wrapped in `FormControl` to inherit validation state
5. **Baseurl paths**: `lani` only – other packages may not resolve shortcut paths without tsconfig updates
6. **Icon generation**: Add SVGs to `tayo/src/icon/svg/` and run `generate:icons` to update icon components. Make sure you format the newley generated icon. It should change the color to current color.
7. **Keep consistent naming conventions**: Follow established patterns for file/component names to maintain codebase clarity.
8. **Avoid `any` types**: Leverage TypeScript's strict mode to ensure type safety across the codebase.
9. **Avoid creating large components**: Break down complex components into smaller, reusable pieces for better maintainability and readability.
10. **Use Storybook for UI components**: Always add stories for new components to facilitate testing and documentation.
11. **Make sure to use versions**: from the packages json files to avoid version conflicts.
12. **CamelCase for variable and function names**: Follow JavaScript conventions for naming variables and functions to ensure consistency.
13. **For managing state if it is getting larger use use createProvider tayo/src/provider/create-provider.tsx**: This will help to manage the state in a better way and avoid prop drilling.
14. **Always check for existing components**: Before creating a new component, check if there is an existing one in the `tayo` package that can be reused or extended.
    example: If you need a button, check if there is already a `Select` component in `tayo` that you can use instead of creating a new one from scratch.
15. **Use the existing API hooks**: If you need to fetch data, check if there is already an RTK Query hook available in `lani/src/data/api.ts` that you can use instead of creating a new one.
