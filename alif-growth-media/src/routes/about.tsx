import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, Card } from "@/components/site/Sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import {
  company,
  pillars,
  faqs,
  team,
  originStory,
  ideology,
  evidence,
  standards,
  milestones,
} from "@/content/site";

const title = "About Alif Growth Media | Our Idea, Ideology & Founder";
const description =
  "Why Alif Growth Media exists: the meaning behind the name, the ideology we build on, the research we trust, and the standards every client engagement is held to across India and the Gulf.";
const canonical = "https://alif-growth-media.vercel.app/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const facts = [
  { k: "Based in", v: "Warangal, Telangana" },
  { k: "Serving", v: company.areas },
  { k: "Also serving", v: "UAE · Saudi Arabia · Qatar · Kuwait · Bahrain · Oman" },
  { k: "Focus", v: "Local service & retail businesses" },
  { k: "Working hours", v: company.hours },
];

function AboutPage() {
  const founder = team[0];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Alif — the first stroke of a business that scales"
        intro="Alif Growth Media is an embedded technical partner and business software studio in Warangal, Telangana. We partner with local service and retail businesses in India and the Gulf to build scalable web platforms, visual CMS editors, custom WhatsApp CRMs, and executive dashboards that put owners in complete control."
      />

      {/* Origin story + facts */}
      <section className="bg-background/75 px-5 pb-14 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="space-y-8">
            {originStory.map((s, i) => (
              <Reveal key={s.h} direction="right" delay={i * 0.06}>
                <div className="relative border-l-2 border-primary/25 pl-5 sm:pl-6">
                  <h2 className="text-lg font-semibold sm:text-xl">{s.h}</h2>
                  <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                    {s.b}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="left" delay={0.1}>
            <dl className="surface-card divide-y divide-border p-6 sm:p-7 md:sticky md:top-28">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                    {f.k}
                  </dt>
                  <dd className="text-sm font-medium sm:text-right">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Ideology / manifesto */}
      <Section
        eyebrow="Our ideology"
        title="Six beliefs that decide how we work"
        intro="These are not slogans on a wall. Each one changes something concrete about what we build, what we charge for, and what we refuse to do."
        tone="muted"
      >
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {ideology.map((v) => (
            <StaggerItem key={v.n} lift className="h-full">
              <article className="surface-card h-full p-5 transition-[box-shadow,border-color] duration-300 hover:border-gold/40 hover:shadow-[var(--shadow-lift)] sm:p-7">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold">
                  {v.n}
                </span>
                <h3 className="mt-3 text-balance text-base font-semibold sm:text-lg">{v.t}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {v.b}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Evidence */}
      <Section
        eyebrow="Why this matters"
        title="The research our approach is built on"
        intro="We would rather show you the numbers behind our advice than ask you to trust a pitch."
      >
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {evidence.map((e) => (
            <StaggerItem key={e.stat} lift className="h-full">
              <article className="surface-card flex h-full flex-col p-5 transition-[box-shadow,border-color] duration-300 hover:border-gold/40 hover:shadow-[var(--shadow-lift)] sm:p-6">
                <span className="font-display text-[clamp(1.6rem,5vw,2.1rem)] font-semibold leading-none text-primary">
                  {e.stat}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {e.label}
                </span>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {e.body}
                </p>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  {e.source} <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Journey */}
      <Section eyebrow="How we got here" title="From one reply flow to a growth system" tone="deep">
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {milestones.map((m) => (
            <StaggerItem
              key={m.y}
              lift
              className="h-full rounded-[var(--radius)] border border-primary-foreground/15 bg-primary-foreground/5 p-5 sm:p-6"
            >
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gold">
                {m.y}
              </span>
              <h3 className="mt-3 text-base font-semibold sm:text-lg">{m.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{m.b}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Founder */}
      <Section eyebrow="Leadership" title="Meet the founder" tone="muted">
        <Reveal className="mx-auto mt-10 max-w-4xl">
          <div className="surface-card flex flex-col gap-6 p-6 sm:gap-8 sm:p-8 md:flex-row md:items-start">
            <div className="mx-auto grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 font-display text-3xl font-bold text-primary sm:h-32 sm:w-32 sm:text-4xl md:mx-0">
              {founder.name.charAt(0)}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold sm:text-2xl">{founder.name}</h3>
              <p className="text-sm font-medium text-gold">{founder.role}</p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {founder.bio}
              </p>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                He started Alif Growth Media after watching too many well-run local businesses lose
                customers to competitors who were simply easier to find and quicker to answer. His
                working rule is simple: if a recommendation cannot be explained to an owner in one
                sentence, it is not ready to be sold.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="h-4 w-4 shrink-0" />{" "}
                  <span className="break-all">{founder.email}</span>
                </a>
                <a
                  href={`tel:${founder.phone.replace(/\s/g, "")}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Phone className="h-4 w-4 shrink-0" /> {founder.phone}
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Linkedin className="h-4 w-4 shrink-0" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Standards */}
      <Section
        eyebrow="Our standards"
        title="What every client is promised in writing"
        intro="Commitments we hold ourselves to on every engagement, regardless of budget size."
      >
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {standards.map((s) => (
            <StaggerItem key={s.t}>
              <Card title={s.t} body={s.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Pillars */}
      <Section
        eyebrow="Our framework"
        title="Three pillars that turn digital effort into growth"
        intro="Practical foundations that make daily digital work compound into steady business growth."
        tone="deep"
      >
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <StaggerItem
              key={p.k}
              lift
              className="h-full rounded-[var(--radius)] border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-7"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                {p.k}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{p.b}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions" tone="muted">
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {faqs.map((f) => (
            <StaggerItem key={f.q}>
              <Card title={f.q} body={f.a} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand />
    </SiteLayout>
  );
}
