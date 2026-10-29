# Champion Fight Club Calgary

Concept single-page website for Champion Fight Club (CFC), Calgary. Built with SvelteKit (static adapter), Svelte 5 and Tailwind CSS 4.

## Develop

```sh
npm install
npm run dev
```

## Edit content

All text, schedule times, prices, coaches, FAQ and contact details are in `src/lib/content.js`.
Images are in `src/lib/assets/` (current photos are placeholders from CFC Kyiv).

## Deploy to GitHub Pages

1. Push to the `main` branch of a GitHub repository.
2. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site to `https://<user>.github.io/<repo>/`.

Using a custom domain or a `<user>.github.io` repository? Set `BASE_PATH` to an empty string in the workflow.

## Standalone preview

`PREVIEW=1 npm run build` bundles the whole page (JS, CSS and images) into a single `build/index.html`.
