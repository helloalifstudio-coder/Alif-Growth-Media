import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { blogPosts, company } from "@/content/site";

const title = "Growth Insights | Alif Growth Media";
const description =
  "Practical guides on digital marketing, WhatsApp automation, local SEO and growth strategy for businesses in Telangana and the Gulf.";
const canonical = "https://alif-growth-media.vercel.app/blog";

export const Route = createFileRoute("/blog/")({
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
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Growth Insights"
        intro="Practical strategy, local marketing playbooks and automation ideas for businesses in Telangana and the Gulf."
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug} lift className="h-full">
                <article className="surface-card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-lift)]">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-gold/20" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                    >
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-16 rounded-2xl bg-secondary/40 p-8 text-center">
            <h2 className="text-xl font-semibold">Get growth tips in your inbox</h2>
            <p className="mt-2 text-muted-foreground">
              We share one practical local marketing idea every week. No spam.
            </p>
            <a
              href={`mailto:${company.email}?subject=Subscribe%20to%20Alif%20Growth%20Insights`}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Subscribe via email
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ready to put these insights into action?" />
    </SiteLayout>
  );
}
