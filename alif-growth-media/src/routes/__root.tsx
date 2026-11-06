import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { company } from "@/content/site";

const rootTitle = "Alif Growth Media | Digital Marketing, Websites & Automation";
const rootDescription =
  "Alif Growth Media helps local businesses in Telangana and the Gulf grow with digital marketing, websites, WhatsApp automation and clear growth systems.";
const SITE_URL = "https://alif-growth-media.vercel.app";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: rootTitle },
      { name: "description", content: rootDescription },
      { name: "author", content: company.name },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#0d7c6a" },
      { name: "apple-mobile-web-app-title", content: "Alif" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "application-name", content: company.name },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Warangal, Telangana" },
      { name: "geo.position", content: "17.9689;79.5941" },
      { name: "ICBM", content: "17.9689, 79.5941" },
      { property: "og:title", content: rootTitle },
      { property: "og:description", content: rootDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.name },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: `${company.name} — digital growth systems for local businesses`,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@alifgrowthmedia" },
      { name: "twitter:creator", content: "@alifgrowthmedia" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: company.name,
              alternateName: "Alif Studio",
              description: rootDescription,
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/og-image.jpg`,
                width: 1200,
                height: 630,
              },
              image: `${SITE_URL}/og-image.jpg`,
              email: company.email,
              telephone: company.phoneE164,
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Warangal",
                addressRegion: "Telangana",
                postalCode: "506002",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: company.phoneE164,
                  contactType: "customer service",
                  email: company.email,
                  areaServed: ["IN", "AE", "SA", "QA", "KW", "BH", "OM"],
                  availableLanguage: ["en", "hi", "te", "ur"],
                },
              ],
              sameAs: [
                "https://www.instagram.com/alifgrowthmedia/",
                "https://www.linkedin.com/in/alif-growth-media-2526453b2/",
                "https://x.com/alifgrowthmedia",
                "https://www.youtube.com/@alifgrowthmedia",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: company.name,
              description: rootDescription,
              inLanguage: "en-IN",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
