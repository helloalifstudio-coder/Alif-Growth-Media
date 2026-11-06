import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Card } from "@/components/site/Sections";
import { motion } from "motion/react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { company, faqs, steps } from "@/content/site";

const title = "Contact Alif Growth Media | Free Growth Audit in Telangana & Gulf";
const description =
  "Talk to Alif Growth Media in Warangal. Request a free growth audit covering your online presence, enquiry handling and next best steps for your local business in India or the Gulf.";
const canonical = "https://alif-growth-media.vercel.app/contact";

export const Route = createFileRoute("/contact")({
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
          "@type": "ProfessionalService",
          "@id": "https://alif-growth-media.vercel.app/#localbusiness",
          name: company.name,
          description,
          url: "https://alif-growth-media.vercel.app/contact",
          image: "https://alif-growth-media.vercel.app/og-image.jpg",
          email: company.email,
          telephone: company.phoneE164,
          priceRange: "₹₹",
          currenciesAccepted: "INR",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hanamkonda",
            addressLocality: "Warangal",
            addressRegion: "Telangana",
            postalCode: "506002",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 17.9689, longitude: 79.5941 },
          areaServed: [
            { "@type": "City", name: "Warangal" },
            { "@type": "City", name: "Hanamkonda" },
            { "@type": "City", name: "Hyderabad" },
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Saudi Arabia" },
            { "@type": "Country", name: "Qatar" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          ],
          sameAs: [
            "https://www.instagram.com/alifgrowthmedia/",
            "https://www.linkedin.com/in/alif-growth-media-2526453b2/",
            "https://x.com/alifgrowthmedia",
            "https://www.youtube.com/@alifgrowthmedia",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, label: "Call us", value: company.phone, href: company.phoneHref },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with the growth team",
    href: company.whatsapp,
  },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: "Studio", value: company.address },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const business = String(data.get("business") || "").trim();
    const city = String(data.get("city") || "").trim();

    if (!name || name.length < 2) next.name = "Please enter your full name.";
    if (!phone || !/^[+0-9\s-]{7,20}$/.test(phone))
      next.phone = "Please enter a valid phone number.";
    if (!business || business.length < 2) next.business = "Please enter your business name.";
    if (!city || city === "") next.city = "Please select a city.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (!validate(form)) {
      setStatus("error");
      return;
    }
    setStatus("idle");
    const data = new FormData(form);
    const text = encodeURIComponent(
      [
        `Hello Alif Growth Media,`,
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Business: ${data.get("business")}`,
        `City: ${data.get("city")}`,
        `Need help with: ${data.get("interest") || "Not sure yet"}`,
        `Message: ${data.get("text") || "N/A"}`,
      ].join("\n"),
    );
    window.open(
      `https://wa.me/${company.whatsappPhone}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => {
      navigate({ to: "/thank-you" });
    }, 400);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Free growth audit"
        title="Let’s look at your business together"
        intro="Share a few details and we’ll review your online presence, enquiry handling and next best growth steps — in plain, non-technical language."
      />

      <section className="bg-background/75 px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
          <Stagger className="grid gap-4 self-start">
            {channels.map((c) => (
              <StaggerItem key={c.label} lift className="surface-card flex items-start gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/60 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{c.value}</p>
                  )}
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="surface-card p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Working hours</p>
              <p className="mt-1">{company.hours}</p>
              <p className="mt-3">Serving {company.areas}</p>
              <p className="mt-1">Also serving: {company.regions.slice(1).join(" · ")}</p>
            </StaggerItem>
          </Stagger>

          <Reveal direction="left" delay={0.1} className="surface-card p-6 sm:p-7 md:p-9">
            <h2 className="text-xl font-semibold">Request your free growth audit</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We reply within one working day, usually much sooner.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    aria-invalid={!!errors.phone}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <input
                  required
                  name="business"
                  placeholder="Business name"
                  aria-label="Business name"
                  aria-invalid={!!errors.business}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
                />
                {errors.business && (
                  <p className="mt-1 text-xs text-destructive">{errors.business}</p>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <select
                    required
                    name="city"
                    aria-label="City"
                    defaultValue=""
                    aria-invalid={!!errors.city}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
                  >
                    <option value="" disabled>
                      Select city
                    </option>
                    <option>Warangal</option>
                    <option>Hanamkonda</option>
                    <option>Hyderabad</option>
                    <option>Dubai</option>
                    <option>Riyadh</option>
                    <option>Doha</option>
                    <option>Other</option>
                  </select>
                  {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
                </div>
                <select
                  name="interest"
                  aria-label="What do you need help with"
                  defaultValue=""
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
                >
                  <option value="" disabled>
                    What do you need?
                  </option>
                  <option>Digital marketing</option>
                  <option>Website</option>
                  <option>WhatsApp automation</option>
                  <option>Brand identity</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <textarea
                name="text"
                rows={4}
                placeholder="Tell us briefly about your business and goals"
                aria-label="Message"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ring focus:ring-2 focus:ring-ring/40 sm:text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
              >
                Request Free Growth Audit
              </motion.button>
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Please fix the errors above and try again.
                </p>
              )}
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Your details are used only to contact you about your growth audit. By submitting, you
              agree to our{" "}
              <a href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <Section eyebrow="What happens next" title="A simple, predictable start" tone="muted">
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <Card index={`0${i + 1}`} title={s.t} body={s.b} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section eyebrow="FAQ" title="Before you reach out">
        <Stagger className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <StaggerItem key={f.q}>
              <Card title={f.q} body={f.a} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </SiteLayout>
  );
}
