# Netlify edge functions skipped in a workspace package

```bash
cd apps/web
netlify build --offline
ls .netlify/edge-functions-dist
```

Expected: `hello` is bundled.

Actual: no "Edge Functions bundling" step, and `.netlify/edge-functions-dist` does not exist.
