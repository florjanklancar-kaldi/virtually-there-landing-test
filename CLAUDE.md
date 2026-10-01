@AGENTS.md

## Linting & formatting

Biome (`biome.jsonc`) is the only linter and formatter — no ESLint or Prettier.
After editing code run `pnpm lint:fix`, then `pnpm check`; both must pass with zero diagnostics.
Fix the code instead of adding `biome-ignore`; when a suppression is truly needed, give a reason.
