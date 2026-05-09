# Service Content Structure

Service landing pages read their card/grid data from this directory:

- `ai.js` for `/services/ai`
- `apple.js` for `/services/apple`
- `audit.js` for `/services/audit`
- `index.js` for root `/services` cards and shared catalog metadata

Each file exports:

- `meta` for `<title>` and meta description
- `page` for page heading and intro text
  - `summary` (optional, used on the root `/services` cards)
- `sections` with grouped links:
  - `title` (optional section heading)
  - `groups[]` with:
    - `title`
    - `items[]` (`to`, `title`)

After edits, run:

```bash
npm run validate:services
```

The validator checks that every service link exists in `src/router/routes.js`
and that there are no duplicate or missing routes in service catalogs.
