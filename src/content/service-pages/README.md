# Service Detail Content Schema

This directory stores structured content for individual service detail pages.

Current schema:

- `meta`
  - `title`
  - `description`
- `hero`
  - `title`
  - `lead`
- `sections[]`
  - `title`
  - `paragraphs[]` (optional)
  - `list[]` (optional)
- `faq[]` (optional)
  - `question`
  - `answer`
- `cta` (optional)
  - `title`
  - `text`
  - `primary` (`label`, `to`)
  - `secondary` (`label`, `to`) optional
- `outro` (optional)

Registry file:

- `index.js` maps route paths to content files.

Validation:

```bash
npm run validate:service-pages
```
