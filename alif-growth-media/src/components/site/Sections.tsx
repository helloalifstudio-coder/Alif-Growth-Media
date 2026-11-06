import type { ReactNode } from "react";
import { motion } from "motion/react";

import {
  MaskedText,
  Reveal,
  ScrollLift,
  useSafeReducedMotion,
} from "@/components/motion/primitives";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "cream",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  tone?: "cream" | "muted" | "deep";
}) {
  const toneClass =
    tone === "deep"
      ? "gradient-deep text-primary-foreground"
      : tone === "muted"
        ? "bg-secondary/40"
        : "bg-background/75";

  return (
    <section
      id={id}
      className={`${toneClass} scroll-mt-24 px-5 py-14 sm:px-6 sm:py-20 md:py-28 lg:px-8`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <ScrollLift className="max-w-2xl" distance={18}>
          {eyebrow && (
            <Reveal>
              <span
                className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] sm:text-xs ${
                  tone === "deep" ? "text-gold" : "text-primary"
                }`}
              >
                {eyebrow}
              </span>
            </Reveal>
          )}
          <h2 className="mt-3 text-balance text-[clamp(1.55rem,5.2vw,2.6rem)] font-semibold leading-[1.15]">
            <MaskedText>{title}</MaskedText>
          </h2>
          {intro && (
            <Reveal delay={0.12}>
              <p
                className={`mt-4 text-pretty text-[0.975rem] leading-relaxed sm:text-base ${
                  tone === "deep" ? "text-primary-foreground/75" : "text-muted-foreground"
                }`}
              >
                {intro}
              </p>
            </Reveal>
          )}
        </ScrollLift>
        {children}
      </div>
    </section>
  );
}

export function Card({
  index,
  title,
  body,
  tone = "light",
}: {
  index?: string;
  title: string;
  body: ReactNode;
  tone?: "light" | "dark";
}) {
  const reduced = useSafeReducedMotion();
  const Article = reduced ? ("article" as const) : motion.article;
  return (
    <Article
      {...(reduced
        ? {}
        : {
            whileHover: { y: -6 },
            transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
          })}
      className={
        tone === "dark"
          ? "h-full rounded-[var(--radius)] border border-primary-foreground/15 bg-primary-foreground/[0.07] p-5 transition-colors duration-300 hover:border-gold/40 sm:p-6"
          : "surface-card h-full p-5 transition-[box-shadow,border-color] duration-300 hover:border-gold/40 hover:shadow-[var(--shadow-lift)] sm:p-6"
      }
    >
      {index && (
        <span className="mb-4 inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent font-display text-sm font-semibold text-accent-foreground">
          {index}
        </span>
      )}
      <h3 className="text-balance text-base font-semibold sm:text-lg">{title}</h3>
      <div
        className={`mt-2 text-pretty text-sm leading-relaxed ${
          tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground"
        }`}
      >
        {body}
      </div>
    </Article>
  );
}
