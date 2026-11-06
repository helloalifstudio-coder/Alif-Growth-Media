// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Netlify sets NETLIFY=true during its build.
const isNetlify = process.env.NETLIFY === "true" || process.env.NETLIFY === "1";

// Vercel sets VERCEL=1 or VERCEL_ENV during its build.
const isVercel =
  process.env.VERCEL === "true" || process.env.VERCEL === "1" || Boolean(process.env.VERCEL_ENV);

// Pick the appropriate Nitro preset for the target cloud platform.
const customPreset =
  process.env.NITRO_PRESET || (isVercel ? "vercel" : isNetlify ? "netlify" : undefined);

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  ...(customPreset
    ? {
        nitro: {
          preset: customPreset,
          ...(customPreset === "vercel"
            ? {
                vercel: {
                  functions: {
                    runtime: "nodejs22.x",
                  },
                },
              }
            : {}),
        },
      }
    : {}),
});
