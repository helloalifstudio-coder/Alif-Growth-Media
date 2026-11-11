import { useState, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, LayoutTemplate, PanelsTopLeft, Workflow } from "lucide-react";

import { useSafeReducedMotion, useScrollFx } from "@/components/motion/primitives";

const experiences = [
  {
    id: "web",
    label: "Web experiences",
    eyebrow: "01 / DIGITAL PRESENCE",
    headline: "Make every first impression count.",
    detail: "Editorial storytelling, purposeful interactions and a clear path to enquiry.",
    accent: "from-emerald-300 via-teal-200 to-amber-200",
  },
  {
    id: "systems",
    label: "Business systems",
    eyebrow: "02 / OPERATIONS",
    headline: "Clarity for the people doing the work.",
    detail: "Thoughtfully arranged interfaces for the daily tasks that move a business.",
    accent: "from-amber-200 via-orange-200 to-rose-200",
  },
  {
    id: "automation",
    label: "Automation",
    eyebrow: "03 / CONNECTED WORKFLOWS",
    headline: "Connect the steps. Remove the friction.",
    detail: "Joined-up customer journeys that keep important work visible.",
    accent: "from-sky-200 via-teal-200 to-lime-200",
  },
] as const;

type ExperienceId = (typeof experiences)[number]["id"];

/**
 * An interactive concept preview, not a screenshot or a claim that an
 * integrated CRM / analytics product is already shipped.
 */
function ExperiencePreview({ active }: { active: ExperienceId }) {
  if (active === "systems") {
    return (
      <div
        className="grid gap-2.5 sm:grid-cols-[0.76fr_1fr]"
        aria-label="Illustrative operations interface"
      >
        <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
          <PanelsTopLeft className="h-5 w-5 text-amber-200" aria-hidden="true" />
          <p className="mt-8 text-[0.65rem] uppercase tracking-[0.16em] text-white/50">Workspace</p>
          <p className="mt-1 text-xl font-semibold tracking-tight text-white">All in one place.</p>
          <div className="mt-5 flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 flex-1 rounded-full bg-amber-200" />
            <span className="h-1.5 flex-1 rounded-full bg-white/20" />
            <span className="h-1.5 flex-1 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#142b29] p-4">
          <p className="text-xs font-medium text-white/70">Today’s workspace</p>
          <div className="mt-4 space-y-3">
            {["Customer enquiries", "Follow-ups", "Project handovers"].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-3 py-3"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber-200/15 text-xs text-amber-100">
                  0{index + 1}
                </span>
                <span className="text-xs font-medium text-white/85">{item}</span>
                <span
                  className="ml-auto h-2 w-2 shrink-0 rounded-full bg-emerald-300"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (active === "automation") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#142b29] px-4 py-6 sm:px-6">
        <p className="text-xs font-medium text-white/60">Example customer journey</p>
        <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
          {[
            { step: "01", label: "New enquiry" },
            { step: "02", label: "Organized lead" },
            { step: "03", label: "Follow-up ready" },
          ].map((item, index) => (
            <div key={item.step} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-1">
              <div className="flex min-w-0 flex-1 flex-col rounded-xl border border-teal-200/15 bg-teal-100/8 p-3">
                <span className="text-[0.65rem] text-teal-200">{item.step}</span>
                <span className="mt-4 text-xs font-semibold text-white">{item.label}</span>
              </div>
              {index < 2 && (
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 rotate-45 text-teal-200/70 sm:rotate-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-2 text-xs text-teal-100/70">
          <Workflow className="h-4 w-4" aria-hidden="true" />
          One connected experience, fewer manual handoffs
        </div>
      </div>
    );
  }

  return (
    <div
      className="grid gap-2.5 sm:grid-cols-[1.15fr_0.85fr]"
      aria-label="Illustrative responsive website design"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#dbece4] p-4 text-[#133a30]">
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] font-bold tracking-[0.13em]">STUDIO / 01</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="mt-10 max-w-48 text-[1.65rem] font-semibold leading-[1.05] tracking-tight sm:text-[1.85rem]">
          Better stories.
          <br />
          Bolder brands.
        </div>
        <div className="mt-8 h-2 w-24 rounded-full bg-[#1e6552]/65" aria-hidden="true" />
        <div className="mt-2 h-2 w-16 rounded-full bg-[#1e6552]/30" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="relative min-h-32 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#bb915e]">
          <div
            className="absolute -right-7 -top-8 h-36 w-36 rounded-full border-[24px] border-[#e9c69b]/70"
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 text-xs font-medium text-[#282719]">
            Crafted with intention
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 p-3">
          <LayoutTemplate className="h-6 w-6 text-emerald-200" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold text-white">Responsive by design</p>
            <p className="text-[0.65rem] text-white/60">Desktop · Tablet · Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveAgencyHero() {
  const [active, setActive] = useState<ExperienceId>("web");
  const reduced = useSafeReducedMotion();
  const pointerFx = useScrollFx();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const floatX = useSpring(pointerX, { stiffness: 85, damping: 25 });
  const floatY = useSpring(pointerY, { stiffness: 85, damping: 25 });
  const selected = experiences.find((item) => item.id === active) ?? experiences[0];

  function moveBackdrop(event: PointerEvent<HTMLDivElement>) {
    // Touch and pen movement should not animate the decorative backdrop.
    if (!pointerFx || reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 24);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 24);
  }

  function resetBackdrop() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      onPointerMove={moveBackdrop}
      onPointerLeave={resetBackdrop}
      onPointerCancel={resetBackdrop}
      role="region"
      className="relative isolate overflow-hidden rounded-[2rem] border border-emerald-100/15 bg-[#0b2420] p-4 text-white shadow-[0_28px_80px_-32px_rgba(4,35,26,0.65)] sm:p-5"
      aria-label="Explore interactive design concepts by Alif Growth Media"
    >
      <motion.div
        aria-hidden="true"
        style={pointerFx && !reduced ? { x: floatX, y: floatY } : undefined}
        className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-300/15 blur-[75px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber-200/10 blur-[72px]"
      />
      <div className="relative z-10 flex items-center justify-between gap-2 px-1">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/75">
          AGM / EXPERIENCE LAB
        </span>
        <span className="rounded-full border border-white/15 bg-white/8 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.12em] text-emerald-100">
          Interactive concepts
        </span>
      </div>

      <div
        className="relative z-10 mt-5 grid grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-white/5 p-1"
        role="group"
        aria-label="Choose a concept to explore"
      >
        {experiences.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={active === item.id}
            onClick={() => setActive(item.id)}
            className={
              active === item.id
                ? "min-h-11 min-w-0 rounded-xl bg-[#e6f3e7] px-1.5 py-3 text-[0.7rem] leading-tight font-semibold text-[#143b30] shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:text-xs"
                : "min-h-11 min-w-0 rounded-xl px-1.5 py-3 text-[0.7rem] leading-tight font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 sm:text-xs"
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="relative z-10 mt-4 rounded-[1.5rem] border border-white/12 bg-white/6 p-2.5 backdrop-blur-md sm:p-3">
        <div
          className="flex items-center gap-1.5 border-b border-white/10 px-2 pb-3"
          aria-hidden="true"
        >
          <span className="h-2 w-2 rounded-full bg-rose-200/80" />
          <span className="h-2 w-2 rounded-full bg-amber-200/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-200/80" />
          <span className="ml-auto text-[0.6rem] tracking-[0.06em] text-white/50">
            concept / preview
          </span>
        </div>
        <div className="min-h-[17rem] py-3" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduced ? undefined : { opacity: 0, y: -9 }}
              transition={{ duration: reduced ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <ExperiencePreview active={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {selected.label}: {selected.headline} {selected.detail}
      </p>
      <div className="relative z-10 mt-5 flex items-end justify-between gap-3 px-1 pb-1">
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-emerald-200/80">
            {selected.eyebrow}
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduced ? 0 : 0.26 }}
            >
              <p className="mt-2 text-base font-semibold leading-snug text-white sm:text-lg">
                {selected.headline}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/75">{selected.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <span aria-hidden="true" className="mb-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute inset-x-10 bottom-0 h-[2px] bg-gradient-to-r opacity-80 " +
          selected.accent
        }
      />
    </div>
  );
}
