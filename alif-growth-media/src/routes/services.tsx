import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, Card } from "@/components/site/Sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { services, engagements, steps, company } from "@/content/site";

const title = "Custom Business Software, Visual CMS & Tools — Alif Growth Media";
const description =
  "Custom web engineering with live visual CMS, tailored WhatsApp CRMs, digital invoicing, live inventory, and mobile BI dashboards for local businesses in Telangana and the Gulf.";
const canonical = "https://alif-growth-media.vercel.app/services";

export const Route = createFileRoute("/services")({
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
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services by Alif Growth Media",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.t,
              description: s.b,
              serviceType: s.t,
              provider: {
                "@type": "Organization",
                name: company.name,
                url: "https://alif-growth-media.vercel.app",
              },
              areaServed: [
                "Warangal",
                "Hanamkonda",
                "Hyderabad",
                "Telangana",
                "India",
                "UAE",
                "Saudi Arabia",
                "Qatar",
                "Kuwait",
                "Bahrain",
                "Oman",
              ],
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://alif-growth-media.vercel.app/",
            },
            { "@type": "ListItem", position: 2, name: "Services", item: canonical },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Software Suite"
        title="Custom business software, engineered for complete owner control"
        intro="We build scalable web platforms with live visual admin editors, custom WhatsApp CRMs, tailored invoicing, and unified mobile executive dashboards—operating as your embedded IT team across India and the Gulf."
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} direction={i % 2 === 0 ? "up" : "up"} delay={0.04}>
              <article
                id={s.slug}
                className="surface-card grid scroll-mt-28 gap-6 p-6 transition-shadow sm:p-7 hover:shadow-[var(--shadow-lift)] md:grid-cols-[0.9fr_1.1fr] md:p-9"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    0{i + 1} · Service
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold">{s.t}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                  <p className="mt-5 rounded-xl bg-secondary/50 p-4 text-sm text-foreground/80">
                    <strong className="font-semibold text-primary">Outcome: </strong>
                    {s.outcome}
                  </p>
                </div>
                <ul className="grid gap-3 self-center">
                  {s.includes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Regions"
        title="Built for local businesses in India and the Gulf"
        intro="We adapt the same growth system to local customer behaviour, language and culture across both markets."
      >
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          <StaggerItem lift className="surface-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold">India</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Serving {company.areas} with on-the-ground understanding of how local customers
              search, message and buy.
            </p>
          </StaggerItem>
          <StaggerItem lift className="surface-card p-6 sm:p-7">
            <h3 className="text-lg font-semibold">Gulf / GCC</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Working with businesses in {company.regions.slice(1).join(", ")} to build trust-first
              digital presence and customer communication.
            </p>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section
        eyebrow="Engagements"
        title="Ways to work with us"
        intro="Start small with an audit, launch fast with a sprint, or keep momentum with a monthly retainer."
        tone="muted"
      >
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {engagements.map((e) => (
            <StaggerItem
              key={e.t}
              lift
              className={`surface-card flex h-full flex-col p-7 transition-colors hover:border-gold/50 ${
                e.featured ? "border-primary/30 bg-secondary/40" : ""
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {e.price}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.b}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                {e.points.map((p: string) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Discuss this <ArrowRight className="h-4 w-4" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section eyebrow="Delivery" title="How every engagement runs">
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <Card index={`0${i + 1}`} title={s.t} body={s.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
