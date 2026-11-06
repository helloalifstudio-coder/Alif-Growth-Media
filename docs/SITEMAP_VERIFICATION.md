# Sitemap implementation and release verification

The website already implements a **dynamic** XML sitemap in
`alif-growth-media/src/routes/sitemap[.]xml.ts` using TanStack Start's
`/sitemap.xml` server route. **Do not create
`alif-growth-media/public/sitemap.xml`**: a static asset with the same URL
can shadow or conflict with this route in production.

## Included public URLs

The handler includes `/`, `/services`, `/work`, `/blog`,
`/about`, `/contact`, `/privacy` and `/terms`, plus routes derived
from `caseStudies` and `blogPosts` in `src/content/site.ts`.
The `/thank-you` route is omitted because it is not a public landing
page and should not be indexed.

The canonical host is currently `https://alif-growth-media.vercel.app`.
Before release, confirm that the production domain actually matches these
canonical URLs. The `public/robots.txt` file references the dynamic
`/sitemap.xml` endpoint.

## Release smoke checks

Once the application is deployed to the intended hosting platform, verify
from a terminal with no authentication credentials:

```sh
curl -i https://alif-growth-media.vercel.app/sitemap.xml
curl -i https://alif-growth-media.vercel.app/robots.txt
```

- The sitemap responds with HTTP 200, an XML content type and the expected
  absolute canonical URL for every intentionally indexable public page.
- The sitemap contains no `/thank-you` URL and no duplicate locations.
- The URL returned by `robots.txt` points to the same working sitemap.
- Each sitemap URL returns a successful public page, not a redirect loop,
  error page, or a `noindex` response.
- The sitemap's metadata is updated whenever public routes or slugs change.

This document is a manual QA checklist. It does **not** establish that
the production URL has been verified or that search engines indexed it.
Do not submit a sitemap to Search Console until the checks pass.
