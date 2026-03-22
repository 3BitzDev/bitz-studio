Monorepo guide (Bun + TypeScript)

Quick setup:

1. Install Bun (if not installed):

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. From the repository root run:

   ```bash
   bun install
   ```

3. To build all packages from the repo root:

   ```bash
   sh -c 'for d in packages/*; do (cd "$d" && bun run build); done'
   ```

Notes:

- Root `package.json` declares `workspaces` as `packages/*` so Bun will hoist workspace
  dependencies.
- Each package contains a `tsconfig.json` and builds to `dist/` via `tsc`.
- Run package-local scripts with `bun run <script>` inside the package directory.
- `bun.lockb` will be created at the repo root after `bun install`.
