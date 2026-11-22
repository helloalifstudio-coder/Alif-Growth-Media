import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MessageCircle, Sparkles, Check } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Sections";
import {
  AnimatedStat,
  Parallax,
  Stagger,
  StaggerItem,
  Reveal,
} from "@/components/motion/primitives";
import { PrototypeIllustration } from "@/components/site/PrototypeIllustration";
import {
  collaborations,
  results,
  prototypes,
  getPrototypeWhatsappUrl,
} from "@/content/site";

const title = "Selected Client Work & Reference Prototypes | Alif Growth Media";
const description =
  "Explore selected client platform examples and hosted software prototypes by Alif Growth Media. Current availability, features, integrations and customization are reviewed and agreed per project.";
const canonical = "https://alif-growth-media.vercel.app/work";

export const Route = createFileRoute("/work/")({
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
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Selected Work & Reference Prototypes"
        title="Explore selected platforms and business-tool concepts"
        intro="Explore selected client platforms and hosted reference examples. Use sample information only: do not submit customer, payment or confidential business data unless the destination has been separately reviewed and approved for that purpose. Features, integrations, hosting and support are confirmed per project."
      />

      {/* Selected platform examples */}
      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Hosted Prototypes & Client Examples
              </span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Explore Business Tools & Client Platforms
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Open an example to review its current experience. A hosted prototype or existing
                platform is not automatically ready for your business; customization, data
                migration, integrations, hosting and support depend on a separate written scope.
              </p>
            </div>
            <a
              href="https://wa.me/919121809212?text=Hello%20Alif%20Growth%20Media%2C%20I%20want%20to%20discuss%20customizing%20your%20software%20tools%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-semibold shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss a Scoped Build
            </a>
          </div>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {prototypes.map((p) => (
              <StaggerItem key={p.id} lift className="h-full">
                <div className="surface-card group flex h-full flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border/80 transition-all hover:border-gold/40 hover:shadow-[var(--shadow-lift)]">
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                        {p.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                        <Sparkles className="w-3 h-3" /> {p.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-foreground/90">{p.tagline}</p>

                    {/* Professional Visual Illustration Mockup */}
                    <div className="my-5">
                      <PrototypeIllustration type={p.illustrationType} />
                    </div>

                    {/* Plain English Summary */}
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
                      {p.bulletPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-foreground/80">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold shadow transition-all hover:opacity-90"
                    >
                      <span>Open Hosted Example</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={getPrototypeWhatsappUrl(p.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-4 py-2.5 text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Discuss a Scoped Version</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Selected client platform examples */}
      <section className="border-t border-border bg-secondary/20 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Selected Client Platforms
            </span>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Selected Projects & Platforms</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A selection of public-facing platforms developed for client projects. Visit each
              current deployment to review its experience; availability and ongoing maintenance
              arrangements may vary.
            </p>
          </Reveal>

          <Stagger className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collaborations.map((c, i) => (
              <StaggerItem key={c.name} lift className="h-full">
                <div className="surface-card group flex h-full flex-col justify-between p-6 sm:p-7 rounded-2xl transition-shadow hover:shadow-[var(--shadow-lift)]">
                  <div>
                    <Parallax
                      distance={10}
                      className={`mb-6 flex items-center ${i === 1 ? "h-28 sm:h-36" : "h-16 sm:h-20"}`}
                    >
                      <img
                        src={c.logo}
                        alt={`${c.name} logo`}
                        loading="lazy"
                        className={`w-auto object-contain object-left transition-transform duration-500 group-hover:scale-[1.04] ${
                          i === 1
                            ? "max-h-28 sm:max-h-36 max-w-[90%]"
                            : "max-h-16 sm:max-h-20 max-w-[85%]"
                        }`}
                      />
                    </Parallax>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {c.industry}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{c.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <p className="mt-4 text-xs font-medium text-foreground/80">{c.scope}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                    <Link
                      to="/work/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all hover:gap-2.5"
                    >
                      View Project Overview{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                    >
                      Visit Live Site <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Potential outcomes section */}
      <Section
        eyebrow="Potential Outcomes"
        title="What well-scoped systems can improve"
        intro="Connected workflows can help teams organize information, follow up consistently and reduce avoidable handoffs. The practical impact depends on adoption, data quality and the systems included in each project."
        tone="muted"
      >
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {results.map((r) => (
            <StaggerItem key={r.t} lift>
              <div className="surface-card h-full p-6 sm:p-7 rounded-2xl">
                <AnimatedStat
                  value={r.s}
                  className="font-display text-3xl font-semibold text-primary"
                />
                <h3 className="mt-3 text-base font-semibold">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand title="Planning a digital tool for your business?" />
    </SiteLayout>
  );
}
