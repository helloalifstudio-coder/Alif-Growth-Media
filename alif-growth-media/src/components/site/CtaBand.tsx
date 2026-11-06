import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

import { company } from "@/content/site";
import { Reveal, HoverLift, useSafeReducedMotion } from "@/components/motion/primitives";

export function CtaBand({
  title = "Zero Upfront Fees. Zero Service Charges.",
  body = "We don't charge anything until you succeed and gain extra profit. A clear, one-time owning charge is applied only if you want a complete professional setup for your business.",
}: {
  title?: string;
  body?: string;
}) {
  const reduced = useSafeReducedMotion();
  return (
    <section className="gradient-deep relative overflow-hidden px-5 py-14 text-primary-foreground sm:px-6 sm:py-16 md:py-20 lg:px-8">
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 opacity-40"
          style={{
            background:
              "linear-gradient(100deg, transparent, color-mix(in oklab, var(--gold) 45%, transparent), transparent)",
            willChange: "transform",
          }}
          initial={{ x: "0%" }}
          whileInView={{ x: "420%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-semibold text-gold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Success-First Partnership Guarantee</span>
          </div>
          <h2 className="text-balance text-[clamp(1.5rem,4.6vw,2.2rem)] font-bold leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {body}
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>₹0 Upfront Investment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>₹0 Recurring Service Cut</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>100% Full Client Ownership</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          direction="left"
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap"
        >
          <HoverLift className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-transform sm:w-auto hover:brightness-105"
            >
              Claim Your Free Growth Setup <ArrowRight className="h-4 w-4" />
            </Link>
          </HoverLift>
          <HoverLift className="w-full sm:w-auto">
            <a
              href={company.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" /> {company.phone}
            </a>
          </HoverLift>
        </Reveal>
      </div>
    </section>
  );
}
