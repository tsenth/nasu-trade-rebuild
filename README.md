# NASU — Trade & Rebuild

A single-page documentary website for NASU ($NASU), an independent community initiative that designates 100% of token developer rewards for reconstruction support. The project does not represent or imply affiliation with the National Academy of Sciences of Ukraine, PrivatBank, or Robinhood.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

## Quality checks and build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The production-ready static export is written to `dist/client/`.

## Project configuration

Frequently changed values are centralized in `src/config/site.config.ts`. Update `contractAddress`, `contractExplorerUrl`, `tradeUrl`, `fundraiserUrl`, `officialStatementUrl`, and optional media credit fields there. No component contains a hidden duplicate.

## Media

Place the supplied hero assets at:

- `public/media/nasu-hero.mp4`
- `public/media/nasu-hero-poster.jpg`

The page remains intentional if either file is absent. A dark documentary-style background is used. Optional images can later be added as `public/media/damage-01.jpg` and `public/media/damage-02.jpg` with proper attribution.

## Donation data

`src/lib/donations/provider.ts` returns the normalized model in `src/lib/donations/types.ts`. The current provider reads verified manual configuration and otherwise reports an honest unavailable state. It does not scrape PrivatBank and does not invent an API.

To connect a future verified API or on-chain source, implement `DonationProvider`, validate and normalize the source response into `DonationData`, and replace the selected provider instance. Preserve `source` and `updatedAt` so the UI can distinguish live, on-chain, manual, and unavailable data. No UI change is required.

## Deployment from GitHub

Push the repository to GitHub and connect it to a provider that supports Next.js static exports. Use `npm run build` as the build command and `dist/client` as the publish directory. The project is also configured for OpenAI Sites through `.openai/hosting.json`.

Before launch, verify the contract address, trade URL, official statement URL, media rights/credit, and any donation totals.
