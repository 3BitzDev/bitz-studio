# @bitz-studio/builder

A minimal builder package written in TypeScript that depends on `@bitz-studio/core`.

Build and run from the package directory:

```bash
bun install
bun run build
node dist/index.js
```

# @bitz/web

A placeholder web package demonstrating a workspace dependency on `@bitz/core`.

Run `bun install` then run package scripts with `bun run dev` inside the package directory. To run
dev for all packages from the repo root:

```bash
sh -c 'for d in packages/*; do (cd "$d" && bun run dev || true); done'
```
