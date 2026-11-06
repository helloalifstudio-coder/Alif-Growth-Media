import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/motion/primitives";
import { company, privacyContent } from "@/content/site";

const title = "Privacy Policy | Alif Growth Media";
const description =
  "Alif Growth Media privacy policy — how we collect, use, store and protect your personal information.";
const canonical = "https://alif-growth-media.vercel.app/privacy";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: canonical }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="We respect your privacy. This page explains what information we collect, how we use it, and how you can contact us about your data."
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Last updated: {privacyContent.lastUpdated}
          </p>

          <div className="mt-10 space-y-10">
            {privacyContent.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-lg font-semibold">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-secondary/40 p-6">
            <h2 className="text-lg font-semibold">Questions about your privacy?</h2>
            <p className="mt-2 text-muted-foreground">
              Contact us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-primary hover:underline"
              >
                {company.email}
              </a>{" "}
              or call{" "}
              <a href={company.phoneHref} className="font-medium text-primary hover:underline">
                {company.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
