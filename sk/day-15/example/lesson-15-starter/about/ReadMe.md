# Understanding React Custom Hooks

Understanding Custom Hooks in React means you need to understand how React uses its built-in hooks. Two resources are provided for you here:

1. A slideshow that you can launch with `npm run about` or `pnpm about`.
1. A [document](./Takeaways.md) with some AI-generated content that tries to do a "deep-dive" into React Hooks.

## About Script

The `about` script in `package.json` is used to start the Vite dev server with the
`about` directory as the project root and automatically open the slides page.

```json
"about": "vite --root about --open /lesson-15-slides.html"
```

- `--root about`: tells Vite to serve from the `about` folder instead of the workspace root.
- `--open /lesson-15-slides.html`: instructs the browser to open the specified HTML file by
  default (the leading slash makes it the entry point, e.g. `http://localhost:5173/lesson-15-slides.html`).

Run the script with your package manager, for example:
```bash
npm run about
# or
pnpm run about
```
