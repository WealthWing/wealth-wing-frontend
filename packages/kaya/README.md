# Kaya

Kaya is the Next.js app in this workspace.

## Requirements

- Node.js 20 or newer
- Yarn 1.x
- A `RESEND_API_KEY` value for the contact form API route

## Install

Install dependencies from the repository root:

```sh
yarn install
```

## Environment

Create a local environment file for Kaya:

```sh
touch packages/kaya/.env.local
```

Add the Resend API key:

```sh
RESEND_API_KEY=your_resend_api_key
```

## Run Locally

From the repository root:

```sh
yarn kaya start
```

The app runs at `http://localhost:3000`.

You can also run the app from `packages/kaya`:

```sh
yarn start
```

## Build

From the repository root:

```sh
yarn kaya build
```

The production output is generated in `packages/kaya/.next`.

## Preview Production Build

After building, run:

```sh
yarn kaya preview
```

## Deploy to Netlify

Kaya includes its own `netlify.toml`:

```toml
[build]
	command = "yarn build"
	publish = ".next"
```

To deploy:

1. Connect the repository to Netlify.
2. Set the base directory to `packages/kaya`.
3. Use the build settings from `packages/kaya/netlify.toml`.
4. Add `RESEND_API_KEY` in Netlify under Site configuration > Environment variables.
5. Deploy the site.

Netlify detects the Next.js app from the build output and uses its Next.js adapter automatically, so no manual Next.js plugin is required.
