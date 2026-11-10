# Cloudflare Worker preview toolchain

This directory isolates the preview adapter and its lockfile from the production
Next.js package. Run these commands from the repository root:

```sh
npm ci
npm ci --prefix cloudflare-preview
npm run --prefix cloudflare-preview build
npm run --prefix cloudflare-preview check
npm run --prefix cloudflare-preview dev
```

`check` bundles the full Worker with Wrangler's `--dry-run`; `dev` serves it locally.
Both use `wrangler.preview.jsonc` explicitly. No script here deploys a Worker.
The build packages the application in the repository root. Next.js and React are
pinned to the same versions in both packages so peer installation cannot select
a different framework version. OpenNext 1.20.7 and its AWS adapter 4.1.6 support
the application's Next.js 16.3.6; Wrangler 4.159.0 supports Worker Previews.

The root remains free of a default `wrangler.jsonc`, `wrangler.json` or
`wrangler.toml`, preserving the existing production automatic-configuration
entry point. Keep the production build and deploy settings unchanged.

This preview configuration uses OpenNext's default cache-free overrides. The
site has no ISR or on-demand revalidation. It does not bind production storage
or a production self-reference service. Its existing unoptimized images are
served through the `ASSETS` binding, together with all gallery files, fonts,
scripts and styles.

After repository publication and a separately authorized Cloudflare settings
change, the preview-only command can be:

```sh
npm ci --prefix cloudflare-preview && npm run --prefix cloudflare-preview build && cloudflare-preview/node_modules/.bin/wrangler preview --config wrangler.preview.jsonc
```

This last command creates an external Worker Preview. Review and authorize that
publication separately. Do not use the alternate configuration with production
`wrangler deploy`.

On hosts where the sandbox blocks Turbopack's PostCSS process port binding,
local verification can use `npm run build -- --webpack`, followed by
`npm run --prefix cloudflare-preview build -- --skipNextBuild`. This checks the
Webpack-built application and complete OpenNext bundle; it does not establish
that the default Turbopack build succeeded on that host.
