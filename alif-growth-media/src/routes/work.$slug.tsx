import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { caseStudies, collaborations } from "@/content/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    const title = study
      ? `${study.name} Case Study | Alif Growth Media`
      : "Case Study | Alif Growth Media";
    const description = study
      ? `How Alif Growth Media helped ${study.name} strengthen their digital presence, customer communication and growth.`
      : "Alif Growth Media case study.";
    const canonical = `https://alif-growth-media.vercel.app/work/${study?.slug ?? ""}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://alif-growth-media.vercel.app/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: canonical }],
      scripts: study
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: `${study.name} case study`,
                description,
                image: "https://alif-growth-media.vercel.app/og-image.jpg",
                mainEntityOfPage: canonical,
                author: { "@type": "Organization", name: "Alif Growth Media" },
                publisher: {
                  "@type": "Organization",
                  name: "Alif Growth Media",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://alif-growth-media.vercel.app/og-image.jpg",
                  },
                },
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
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Work",
                    item: "https://alif-growth-media.vercel.app/work",
                  },
                  { "@type": "ListItem", position: 3, name: study.name, item: canonical },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const otherStudies = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case Study"
        title={study.name}
        intro={`${study.industry} · ${study.location}`}
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.35fr_0.65fr]">
            <Reveal
              direction="right"
              className="surface-card flex flex-col items-start gap-6 self-start p-7"
            >
              <img
                src={study.logo}
                alt={`${study.name} logo`}
                loading="lazy"
                className="h-24 w-auto object-contain"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Industry
                </p>
                <p className="mt-1 font-medium">{study.industry}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Location
                </p>
                <p className="mt-1 font-medium">{study.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Scope
                </p>
                <p className="mt-1 font-medium">{study.scope}</p>
              </div>
              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
              >
                Visit live site <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>

            <div className="space-y-10">
              <Reveal>
                <h2 className="text-2xl font-semibold">The challenge</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{study.challenge}</p>
              </Reveal>

              <Reveal>
                <h2 className="text-2xl font-semibold">Our approach</h2>
                <ul className="mt-4 space-y-3">
                  {study.approach.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div>
                <h2 className="text-2xl font-semibold">What we delivered</h2>
                <Stagger className="mt-4 grid gap-3 sm:grid-cols-2">
                  {study.deliverables.map((item: string) => (
                    <StaggerItem
                      key={item}
                      className="rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground"
                    >
                      {item}
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <Reveal className="rounded-2xl bg-primary p-7 text-primary-foreground">
                <h2 className="text-xl font-semibold">The outcome</h2>
                <ul className="mt-4 space-y-3">
                  {study.outcomes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {study.quote && (
                <Reveal as="div" className="border-l-4 border-gold pl-6">
                  <p className="text-lg font-medium italic text-foreground">"{study.quote.text}"</p>
                  <footer className="mt-3 text-sm text-muted-foreground">
                    — {study.quote.author}, {study.quote.role}
                  </footer>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {otherStudies.length > 0 && (
        <Section eyebrow="More work" title="Explore other brand partners" tone="muted">
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {otherStudies.map((c) => (
              <StaggerItem key={c.slug} lift className="h-full">
                <Link
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="surface-card group flex h-full flex-col p-7 transition-shadow hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="mb-6 flex h-20 items-center">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="h-16 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {c.industry}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      <CtaBand title="Want a case study like this for your business?" />
    </SiteLayout>
  );
}
