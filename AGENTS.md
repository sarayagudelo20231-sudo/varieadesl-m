## Development

The project folder name contains `&`, which breaks npm's `.cmd` shims on Windows
(`npx astro …` and `node_modules/.bin/astro` fail). Always run Astro through node:

```
node node_modules/astro/bin/astro.mjs dev --background
```

Manage the background server with `node node_modules/astro/bin/astro.mjs dev stop|status|logs`.
The npm scripts (`npm run dev`, `npm run build`, `npm run check`) already do this.

Deployment: static site served by Cloudflare Workers static assets (`wrangler.jsonc`, assets dir
`./dist`, no adapter). Cloudflare Workers Builds runs `npm run build` then `npx wrangler deploy`.
Locally use `npm run cf:preview` / `npm run deploy` (they call wrangler through node).

Editable content lives in `src/data/` (business info, catalog, occasions). Brand tokens are in
`src/styles/global.css`; the brand manual slides are in `docs/brand/`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
