import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, ExternalLink, BookOpen } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/motion/primitives";
import { blogPosts, type BlogReference, type BlogStat } from "@/content/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | Alif Growth Media` : "Article | Alif Growth Media";
    const description = post?.excerpt ?? "Alif Growth Media growth insight.";
    const canonical = `https://alif-growth-media.vercel.app/blog/${post?.slug ?? ""}`;
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
      scripts: post
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                dateModified: post.date,
                image: "https://alif-growth-media.vercel.app/og-image.jpg",
                mainEntityOfPage: canonical,
                articleSection: post.category,
                inLanguage: "en-IN",
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
                    name: "Insights",
                    item: "https://alif-growth-media.vercel.app/blog",
                  },
                  { "@type": "ListItem", position: 3, name: post.title, item: canonical },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <article className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 pt-28 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to insights
          </Link>

          <Reveal as="div" className="mt-8">
            <header>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.category}</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </header>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 md:h-80" />
          </Reveal>

          {post.keyStats && post.keyStats.length > 0 ? (
            <Reveal delay={0.15}>
              <section
                aria-label="Key data"
                className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {post.keyStats.map((stat: BlogStat, i: number) => (
                  <div key={i} className="rounded-2xl border border-border/70 bg-card/60 p-5">
                    <div className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{stat.label}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Source: {stat.source}
                    </p>
                  </div>
                ))}
              </section>
            </Reveal>
          ) : null}

          <div className="prose prose-lg mt-12 max-w-none dark:prose-invert">
            {post.content.map((section: { heading: string; body: string[] }, i: number) => (
              <Reveal key={i}>
                <h2 className="mt-10 text-2xl font-semibold">{section.heading}</h2>
                {section.body.map((paragraph: string, j: number) => (
                  <p key={j} className="mt-4 leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          {post.references && post.references.length > 0 ? (
            <Reveal>
              <section
                aria-labelledby="references-heading"
                className="mt-14 rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-8"
              >
                <h2
                  id="references-heading"
                  className="flex items-center gap-2 font-display text-xl font-semibold"
                >
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                  References
                </h2>
                <ol className="mt-5 space-y-4">
                  {post.references.map((ref: BlogReference, i: number) => (
                    <li key={i} className="text-sm leading-relaxed">
                      <span className="mr-2 text-muted-foreground">[{i + 1}]</span>
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex min-h-6 items-baseline gap-1 font-medium text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
                      >
                        {ref.label}
                        <ExternalLink
                          className="h-3.5 w-3.5 shrink-0 self-center"
                          aria-hidden="true"
                        />
                      </a>
                      <span className="block text-muted-foreground">
                        {ref.publisher} · {ref.year}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Figures are quoted as published by the sources above. Where studies are US-based,
                  we say so in the text rather than presenting them as Indian or GCC data.
                </p>
              </section>
            </Reveal>
          ) : null}
        </div>
      </article>

      <CtaBand title="Want help implementing this for your business?" />
    </SiteLayout>
  );
}
