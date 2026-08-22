---
description: 'Lani application conventions: React, Vite, React Router, Redux Toolkit, RTK Query, Amplify, and Tayo.'
applyTo: 'packages/lani/**/*'
---

# Lani application instructions

Lani is the authenticated Wealth Wing finance application. It uses React 19, TypeScript, Vite, React Router, Redux Toolkit/RTK Query, AWS Amplify, and the shared `@wealth-wing/tayo` UI library. It is **not** a Next.js application.

## Structure and imports

-   `src/index.tsx` configures Amplify, Redux, and the React root; `src/app.tsx` owns the Tayo and router providers. Keep providers at those boundaries.
-   `src/router/` owns routes, route layouts, and page-level features. Add routes explicitly in `src/router/router.tsx`; keep route-specific code in its feature directory.
-   `src/components/` holds shared app components. Keep route- or feature-specific components close to the feature that owns them.
-   Put non-trivial Emotion styles in a sibling `*.styles.ts` file. Small component-only prop types may remain in the component file; put shared or non-trivial types in `*.definitions.ts`.
-   `src/data/` owns API definitions and RTK Query bases. `src/redux/` owns Redux slices, store wiring, and feature query modules.
-   `tsconfig.json` sets `baseUrl` to `src`. Use its absolute aliases (`router/...`, `components/...`, `data/...`, `redux/...`) for Lani source imports.
-   Do not add new relative imports that traverse feature boundaries.
-   Follow existing patterns in neighboring files before introducing a new architectural pattern.

## Feature organization

-   Keep code close to the feature that owns it.
-   Keep feature-specific components, hooks, utilities, constants, and types inside the feature directory unless they have genuine cross-feature consumers.
-   Do not move code into global `components`, `hooks`, or `utils` directories only because it might be reusable in the future.
-   Promote code to a shared location only when it has real reuse across features.
-   Avoid importing implementation details from unrelated feature directories. Extract genuinely shared behavior instead.
-   Prefer clear feature boundaries over large global utility modules.

## UI and styling

-   **Tayo is Lani's required design system.** Before writing or changing UI, search `packages/tayo/src/index.ts`, the relevant component directory, and its stories. Import supported APIs only from the public `@wealth-wing/tayo` entry point; never reach into `packages/tayo/src` or use `@wealth-wing/tayo/src/...`.
-   Use Tayo components instead of raw HTML or Lani-local replacements when Tayo owns the visual or interaction pattern. This includes:
    -   `Button` and `IconButton` for actions.
    -   `Form`, `FormControl`, `Input`, `TextArea`, `Select`, `Radio`, and `DatePicker` for forms.
    -   `Heading` and `Text` for design-system typography.
    -   `Box`, `Flex`, `Grid`, `Elevated`, `CenterContent`, and `RightSidebar` for supported layout and surface patterns.
    -   `Modal`, `Dropdown`, `Menu`, `Tabs`, `Expand`, badges, charts, progress, skeleton loaders, icons, and accessibility helpers for their corresponding patterns.
-   Do not recreate Tayo behavior or styling with a raw `button`, `input`, `select`, `textarea`, generic container, bespoke SVG, or feature-local component. Use the Tayo component's props and variants first.
-   Keep Lani UI limited to feature-specific composition and domain behavior. If a missing primitive or interaction would be reusable outside the feature, add or extend it in Tayo, export it from Tayo's public entry point, and consume that export in Lani.
-   If the closest Tayo component lacks required semantics, keyboard behavior, states, or an API needed by multiple consumers, improve the Tayo component instead of bypassing it in Lani.
-   Do not create wrapper components around Tayo components unless the wrapper adds meaningful application-specific behavior, composition, constraints, or domain semantics.
-   Use `@emotion/react` and existing `*.styles.ts` object patterns.
-   Keep markup and behavior in the component file and non-trivial reusable styles in a sibling `*.styles.ts` file. Inline `css` is acceptable only for a small, local rule or a value that is genuinely dynamic.
-   Use the active `theme` from `@wealth-wing/tayo` for colors, spacing, typography, radii, shadows, and responsive values whenever a suitable token exists.
-   Use Tayo's exported responsive helpers and constants when available. Do not introduce a second token system, theme object, breakpoint scale, or hard-coded equivalent of an available Tayo token.
-   Build responsive layouts deliberately instead of relying on accidental wrapping behavior.

## Component design and reusability

-   Prefer small, focused components with a clear responsibility.
-   Split a component when it owns substantially different UI concerns, has reusable behavior, or becomes difficult to understand as one unit.
-   Build reusable components when the same UI pattern or behavior appears in multiple places.
-   Do not create abstractions for hypothetical future reuse.
-   Prefer composition over large configurable components with many boolean props.
-   Prefer children, focused subcomponents, slots, or discriminated unions when they produce a clearer API.
-   Keep business logic out of presentational components when practical.
-   Extract reusable behavior into hooks or feature utilities when it makes the component easier to understand, test, or reuse.
-   Do not create passthrough wrapper components that simply rename or forward props to another component without adding meaningful behavior.
-   Keep component props focused. Do not pass large domain objects when the component only needs a small subset of fields.

## Semantic HTML and accessibility

-   Tayo-first does not mean replacing document semantics with `div` elements. Use Tayo for design-system UI and native HTML for semantics that its public components cannot express.
-   Prefer semantic elements such as `main`, `nav`, `section`, `article`, `header`, `footer`, `fieldset`, `table`, `ul`, and `ol` when they match the content. Style them with Emotion and Tayo tokens rather than substituting a generic `Box` or `Flex` that would lose the landmark or content meaning.
-   Use the semantic tag APIs Tayo already provides: choose the correct `tag` on `Heading`, `Text`, and `Box`. Use `Heading`'s `font` prop to change visual size without falsifying the heading level.
-   Use Tayo `Form`, form controls, buttons, menus, and dialogs so their semantics, styling, and interaction behavior stay centralized. Use raw form or interactive elements only when Tayo has no suitable public primitive and the behavior is intentionally feature-specific.
-   Use React Router `Link` or `NavLink` for navigation and Tayo `Button`/`IconButton` for actions. Do not use a button to navigate or an anchor to perform a mutation or UI action.
-   Do not use clickable `div` or `span` elements when a native interactive element such as `button` or `a` is appropriate.
-   Preserve a meaningful heading hierarchy. Pages should have an appropriate `h1`; subsequent headings should reflect document structure rather than visual size.
-   Associate form controls with visible labels. Placeholder text is not a replacement for a label.
-   Prefer native browser semantics over manually added ARIA.
-   Add ARIA only when native HTML or the Tayo component does not already provide the required semantics.
-   Interactive controls must be keyboard usable, have a visible focus state, and have an accessible name.
-   Give every `IconButton` a concise `label`; mark purely decorative icons as hidden from assistive technology.
-   Dialogs and menus must manage focus correctly and support keyboard dismissal/navigation when appropriate.
-   Use semantic `table` markup for tabular data instead of recreating table behavior with generic layout elements.
-   Images that convey information must have appropriate alternative text; decorative images should not create unnecessary screen-reader noise.

## State management

-   Use local React state for isolated, ephemeral UI state.
-   Use feature-scoped context for state shared through a component subtree; use Tayo's exported `createProvider` helper when following the existing Lani provider pattern.
-   Use Redux only for application-wide client state.
-   Do not add Redux state for server data already managed by RTK Query.
-   Derive values during render when possible instead of storing duplicated derived state.
-   Do not use `useEffect` to synchronize state that can be calculated directly from props, query data, or existing state.
-   Use effects for synchronization with external systems, subscriptions, browser APIs, or other true side effects rather than as the default mechanism for application logic.
-   Keep URL-relevant state such as filters, pagination, selected tabs, or search terms in React Router/search params when users should be able to refresh, bookmark, or share that state.
-   Avoid keeping the same source of truth in local state, Redux, and URL state simultaneously.

## Data fetching and RTK Query

-   Use existing RTK Query bases and feature query modules for server data.
-   Reuse `apiBase` or `aiApiBase` as appropriate.
-   Preserve their authentication and header behavior.
-   Do not issue duplicate ad-hoc `fetch` or Axios requests for endpoints already represented by RTK Query.
-   Prefer injecting endpoints into `apiBase` or `aiApiBase`; injected endpoints do not require another reducer or middleware registration.
-   If the backend boundary genuinely requires a new RTK Query API service, register its reducer in `redux/root-reducer.ts` and its middleware in `redux/store.ts`.
-   Prefer RTK Query cache invalidation, tag updates, and query lifecycle behavior over manually coordinating server-cache state in components.
-   Do not copy RTK Query response data into Redux or local state unless there is a specific interaction requirement that needs an editable local copy.
-   Do not manually refetch unrelated data when proper cache invalidation can express the dependency.

## Async UI states

-   Every server-backed UI should deliberately handle loading, empty, error, and success states where those states are possible.
-   Prefer RTK Query request state instead of duplicating `isLoading`, `error`, or fetched data in local state.
-   Search Tayo for an existing feedback primitive before composing a state locally. Use its exported skeleton loaders and other matching feedback components when available; do not assume an unexported or nonexistent component API.
-   Do not silently hide API failures. Present an appropriate user-facing error state or feedback.
-   Preserve already-rendered content during background refetches when possible instead of replacing the entire view with a loading state.
-   Prevent accidental duplicate submissions for mutations when repeated requests would create incorrect behavior.
-   Show mutation progress or feedback when the user needs to understand that an action is being processed.

## Forms

-   Use the application's established `react-hook-form` approach for form state and submission; use `FormProvider` only when nested form content needs the form context. Do not introduce another form-state library.
-   Render forms with Tayo `Form`, `FormControl`, and the matching Tayo input component. Pass validation errors through the established `FormControl` error presentation rather than creating feature-local label or error styles.
-   Keep validation rules close to the form or domain boundary.
-   Provide clear, actionable field-level validation messages.
-   Do not duplicate form values in component state unless behavior outside the form requires it.
-   Use appropriate HTML input types, `autocomplete` values, and input modes.
-   Disable or guard destructive or repeated submissions while a request is pending when duplicate submission would be unsafe.
-   Preserve entered user data when recoverable validation or API errors occur.
-   Use `fieldset` and `legend` for logically grouped controls when appropriate.

## Authentication and environment configuration

-   Keep Amplify configuration and `VITE_*` environment values at the application boundary.
-   Preserve the existing authentication flow instead of implementing alternate token handling inside features.
-   Never commit credentials, secrets, tokens, or hard-coded environment-specific endpoint/auth values.
-   Do not bypass existing auth-aware RTK Query bases with feature-local request logic.
-   Treat authentication and authorization failures explicitly rather than assuming all authenticated users have the same permissions.

## Generated API types

-   Do not manually edit `src/data/api.ts` or `src/data/ai-api.ts`; both are generated by `openapi-typescript` from the services configured in `redocly.yaml`.
-   Change the source contract and run `yarn lani generate:types` when regeneration is required.
-   Do not duplicate generated API types unnecessarily.
-   Derive application types from generated contracts when those contracts accurately represent the domain.
-   Create application-specific types when the UI meaningfully transforms, combines, or narrows API data.

## TypeScript

-   Use `import type` for type-only imports.
-   Use `type` aliases by default.
-   Use `interface` only when declaration merging or extension is genuinely useful.
-   Prefer discriminated unions for variants.
-   Avoid `any`.
-   Prefer `unknown` when a value truly has an unknown type and narrow it before use.
-   Avoid type assertions (`as`) when the type can be modeled or narrowed correctly.
-   Avoid non-null assertions (`!`) when legitimate uncertainty exists.
-   Model nullable and optional values accurately instead of suppressing TypeScript errors.
-   Prefer precise domain names and types over generic objects such as `Record<string, any>`.
-   Keep component and function APIs narrow and explicit.

## React practices

-   Prefer function components and hooks.
-   Keep rendering logic declarative.
-   Prefer derived values over synchronized duplicate state.
-   Avoid effects whose only purpose is to transform one piece of React state into another.
-   Do not add `useMemo`, `useCallback`, or `React.memo` by default.
-   Use memoization only when it prevents meaningful work, stabilizes an API that requires identity, or addresses an observed rendering concern.
-   Do not mutate props, Redux state outside reducers, query results, or other shared state.
-   Prefer stable identifiers for list keys. Do not use array indexes as keys when list items can be reordered, inserted, or removed.
-   Avoid deeply nested conditional JSX. Extract focused components or derive descriptive state when that makes the UI easier to understand.
-   Prefer early returns for loading, error, permission, or unsupported states when they improve readability.

## Performance

-   Optimize based on actual rendering, data-volume, or interaction concerns rather than adding complexity preemptively.
-   Avoid unnecessary state updates and expensive work during render.
-   Use pagination, incremental loading, or virtualization for genuinely large collections where rendering everything would materially affect performance.
-   Avoid fetching data that an existing parent, query cache, or route already provides.
-   Lazy-load route-level or genuinely heavy features when doing so provides meaningful benefit.
-   Do not introduce unnecessary lazy boundaries for small components.
-   Avoid duplicating large transformed datasets in multiple pieces of state.

## Error handling

-   Handle expected errors at the layer where they can be acted on meaningfully.
-   Show user-facing errors when the user can recover or needs to understand what failed.
-   Use `console.warn` and `console.error` only at meaningful boundaries.
-   `console.log` is disallowed.
-   Do not catch errors only to ignore them.
-   Do not expose raw backend errors, stack traces, tokens, or sensitive implementation details to users.
-   Prefer typed or normalized application error states when multiple components need consistent handling.

## Naming and maintainability

-   Prefer readable code over clever abstractions.
-   Use descriptive domain names rather than generic names such as `data`, `item`, `thing`, `handleStuff`, or broad `utils` when a more precise name is available.
-   Name event handlers according to the action they perform, such as `handleSave`, `handleAccountChange`, or `handleDeleteTransaction`.
-   Keep functions focused and avoid deeply nested control flow.
-   Prefer early returns when they make logic easier to follow.
-   Remove dead code instead of commenting it out.
-   Do not keep obsolete implementations alongside new implementations unless there is an active migration reason.
-   Add comments for non-obvious intent, constraints, or business rules rather than narrating straightforward code.
-   Prefer existing project utilities and browser/platform APIs over introducing new dependencies for simple functionality.
-   Do not introduce a new dependency unless it provides clear value that existing project dependencies cannot reasonably provide.

## Reuse decision rules

Before creating a new abstraction, use this order:

1. Check Tayo's public exports, component source, and stories for the UI component, hook, accessibility behavior, responsive helper, theme token, or utility.
2. Check whether Lani already has a shared implementation.
3. Check whether the current feature already has an implementation that should be reused locally.
4. If the pattern is feature-specific, keep it in the feature.
5. If it has real cross-feature reuse, promote it to a shared Lani component or utility.
6. If it is a reusable design-system pattern, implement or extend it in Tayo first.

Do not generalize code solely because two pieces of code look similar. Shared abstractions should represent the same concept or behavior, not only similar syntax.

## Quality and verification

-   Follow ESLint import sorting.
-   `console.log` is disallowed.
-   `console.warn` and `console.error` are permitted only at meaningful boundaries.
-   Build Lani with `yarn lani build`.
-   Run `yarn lani generate:types` only for API-contract changes.
-   There is no dedicated Lani test or lint script today; do not invent one.
-   For UI changes that add or extend a reusable Tayo primitive, also follow the Tayo instructions, add or update its story, run `yarn tayo lint`, and then run `yarn lani build` for the consumer.
-   Before considering a change complete, check for:
    -   TypeScript/build errors.
    -   Broken imports.
    -   Loading, empty, error, and success states.
    -   Keyboard interaction and accessible names.
    -   Responsive layout regressions.
    -   Unnecessary duplicate state or data fetching.
    -   Existing Tayo components or tokens that should have been reused.
    -   New abstractions or dependencies that are not justified.

## Avoid these patterns

Do not:

-   Treat Lani as a Next.js application.
-   Reimplement a component that already exists in Tayo.
-   Deep-import Tayo implementation files instead of using `@wealth-wing/tayo`.
-   Use raw HTML to recreate a control, typography style, layout primitive, icon, or interaction that Tayo already exports.
-   Replace a meaningful native landmark with a generic Tayo container that cannot render the required semantic element.
-   Create clickable `div` or `span` elements instead of semantic controls.
-   Add Redux for local component state.
-   Store RTK Query server data in Redux again.
-   Use `useEffect` for values that can be derived during render.
-   Add memoization everywhere as a default optimization.
-   Create shared abstractions for hypothetical reuse.
-   Add passthrough wrappers around Tayo components without meaningful behavior.
-   Introduce a new design token system.
-   Hard-code values that already exist as Tayo theme tokens.
-   Manually edit generated API types.
-   Add ad-hoc requests that bypass the established RTK Query bases.
-   Introduce dependencies for functionality already available in the project or browser platform.
-   Silence TypeScript with `any`, unnecessary casts, or non-null assertions instead of modeling the data correctly.
-   Create generic global `utils` or `components` files for code that belongs to one feature.
-   Comment out old code instead of removing it.
-   Invent build, test, lint, or generation commands that do not exist in the repository.
