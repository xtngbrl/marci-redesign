# marci-redesign

## Deploy to Vercel

1. Push the repository to GitHub, including `bun.lock`.
2. Import the repository in Vercel.
3. Keep the project root as the Vercel root directory and deploy with the default settings.

The Vercel Nitro preset is configured in `vite.config.ts`. The build creates the SSR deployment output in `.vercel/output`.

