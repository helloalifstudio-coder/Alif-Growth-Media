"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const DURATION = 0.36;

/**
 * Hydration-safe reduced-motion flag. `useReducedMotion()` resolves to a
 * different value on the server than on the client's first render, which
 * made every motion branch mismatch during hydration. This always reports
 * `false` for the server pass and the first client render, then settles.
 */
export function useSafeReducedMotion() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!reduced;
}

/**
 * Scroll-linked effects (springs running every frame) are only worth their
 * cost on pointer-capable, wide viewports. On touch / narrow screens and
 * before hydration they are skipped entirely, which keeps scrolling smooth.
 */
export function useScrollFx() {
  const reduced = useSafeReducedMotion();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const sync = () => setOk(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return ok && !reduced;
}

/**
 * True on touch / coarse-pointer devices. Used to skip per-frame spring work
 * (progress bars, scroll-linked springs) that makes fling scrolling feel laggy.
 */
export function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const sync = () => setCoarse(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return coarse;
}

type Direction = "up" | "down" | "left" | "right" | "none";

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 18,
  as = "div",
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  as?: "div" | "section" | "span" | "li" | "article";
  once?: boolean;
  amount?: number;
}) {
  const reduced = useSafeReducedMotion();
  const Comp = motion[as] as typeof motion.div;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, ...offsetFor(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: DURATION, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.02 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

export function Stagger({
  children,
  className,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduced = useSafeReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
}) {
  const reduced = useSafeReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={itemVariants}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  className,
  distance = 40,
  scale,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  /** Optional scroll-linked scale, e.g. [1, 1.08]. */
  scale?: [number, number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fx = useScrollFx();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(y, { stiffness: 110, damping: 26, mass: 0.35, restDelta: 0.5 });
  const s = useTransform(scrollYProgress, [0, 1], scale ?? [1, 1]);
  const smoothScale = useSpring(s, { stiffness: 110, damping: 26, mass: 0.35, restDelta: 0.001 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={
          fx
            ? { y: smooth, ...(scale ? { scale: smoothScale } : {}), willChange: "transform" }
            : undefined
        }
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Animates the first number found in a label (e.g. "Up to 4x", "+38%"). */
export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useSafeReducedMotion();
  const match = value.match(/\d+(\.\d+)?/);
  const [display, setDisplay] = useState(match && !reduced ? value.replace(match[0], "0") : value);
  const mv = useMotionValue(0);

  useEffect(() => {
    if (!inView || !match || reduced) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[0]);
    const decimals = match[0].includes(".") ? 1 : 0;
    const start = performance.now();
    const duration = 1100;
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(value.replace(match[0], current));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduced]);

  void mv;

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}

export function HoverLift({
  children,
  className,
  scale = 1.02,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  const reduced = useSafeReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      whileHover={{ scale, y: -3 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * Scroll-cinema stages
 * Only transform/opacity animate, so every beat stays on the compositor.
 * Pinning is desktop-only: short viewports fall back to plain reveals.
 * ------------------------------------------------------------------ */

function useDesktopStage() {
  const reduced = useSafeReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (min-height: 620px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return wide && !reduced;
}

type StageCtx = { progress: MotionValue<number>; active: boolean };

const StageContext = createContext<StageCtx | null>(null);

export function useStageProgress() {
  return useContext(StageContext);
}

/**
 * Tall scroll track with a pinned viewport. Children read normalized
 * 0 -> 1 progress through `ScrollScene` / `useStageProgress`.
 */
export function ScrollStage({
  children,
  className,
  /** Track length as a multiple of the viewport height. */
  length = 2.4,
}: {
  children: ReactNode;
  className?: string;
  length?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useDesktopStage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <StageContext.Provider value={{ progress, active }}>
      <div
        ref={ref}
        className={className}
        style={
          active
            ? {
                height: `${length * 100}vh`,
                contentVisibility: "auto",
                containIntrinsicSize: "1px 1200px",
              }
            : undefined
        }
      >
        {active ? (
          <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
            <div className="w-full">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    </StageContext.Provider>
  );
}

/**
 * One beat inside a `ScrollStage`. Maps [from, to] stage progress onto
 * opacity / y / scale. Outside a stage (or on mobile) it degrades to a
 * standard in-view reveal.
 */
export function ScrollScene({
  children,
  className,
  from = 0,
  to = 1,
  y = [40, 0],
  scale,
  opacity = [0, 1],
  fadeOut = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  y?: [number, number];
  scale?: [number, number];
  opacity?: [number, number];
  /** Fade + lift away again after the beat completes. */
  fadeOut?: boolean;
  delay?: number;
}) {
  const stage = useStageProgress();
  const fallback = useMotionValue(0);
  const p = stage?.progress ?? fallback;
  const span = Math.max(0.001, to - from);

  const keyframes = fadeOut ? [from, to, to + span * 0.8, to + span * 1.4] : [from, to];

  const yValue = useTransform(p, keyframes, fadeOut ? [y[0], y[1], y[1], y[1] - 40] : [y[0], y[1]]);
  const opacityValue = useTransform(
    p,
    keyframes,
    fadeOut ? [opacity[0], opacity[1], opacity[1], 0] : [opacity[0], opacity[1]],
  );
  const scaleValue = useTransform(
    p,
    keyframes,
    scale
      ? fadeOut
        ? [scale[0], scale[1], scale[1], scale[1]]
        : [scale[0], scale[1]]
      : fadeOut
        ? [1, 1, 1, 1]
        : [1, 1],
  );

  if (!stage?.active) {
    return (
      <Reveal className={className} delay={delay}>
        {children}
      </Reveal>
    );
  }

  return (
    <motion.div
      className={className}
      style={{
        y: yValue,
        opacity: opacityValue,
        scale: scaleValue,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-linked horizontal drift, used for the partner band. */
export function ScrollDrift({
  children,
  className,
  distance = 60,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fx = useScrollFx();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(x, { stiffness: 120, damping: 28, mass: 0.35, restDelta: 0.5 });

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.div style={fx ? { x: smooth, willChange: "transform" } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

/** Headline / quote lines that wipe up from behind a mask when in view. */
export function MaskedText({
  children,
  className,
  as = "span",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "div";
  delay?: number;
}) {
  const reduced = useSafeReducedMotion();
  const Wrapper = as === "div" ? "div" : "span";

  if (reduced) {
    return <Wrapper className={className}>{children}</Wrapper>;
  }

  return (
    <Wrapper className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "104%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -6% 0px" }}
        transition={{ duration: 0.5, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </Wrapper>
  );
}

/**
 * Scroll-linked lift: content drifts a few px as its section passes the
 * viewport. Transform-only, so it stays on the compositor.
 */
export function ScrollLift({
  children,
  className,
  distance = 26,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fx = useScrollFx();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const smooth = useSpring(y, { stiffness: 120, damping: 30, mass: 0.3, restDelta: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={fx ? { y: smooth, willChange: "transform" } : undefined}>
        {children}
      </motion.div>
    </div>
  );
}

export function MaskedLines({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  const reduced = useSafeReducedMotion();

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line) => (
          <span key={line} className={`block ${lineClassName ?? ""}`}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.055, delayChildren: delay } },
      }}
    >
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            variants={{
              hidden: { y: "108%" },
              show: { y: "0%", transition: { duration: 0.48, ease: EASE } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
