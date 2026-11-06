import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

import alifMark from "@/assets/alif-symbol.png";
import { navLinks } from "@/content/site";
import { useCoarsePointer } from "@/components/motion/primitives";

const links = navLinks;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const coarse = useCoarsePointer();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  // On touch devices the spring runs a frame loop through every fling; read
  // the raw scroll value instead so scrolling stays on the compositor.
  const progress = coarse ? scrollYProgress : smoothProgress;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 12;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 transition-[padding] duration-300 sm:px-6 md:flex md:justify-between md:gap-4 lg:px-8 ${
          scrolled ? "py-2.5" : "py-3.5 md:py-4"
        }`}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src={alifMark}
            alt="Alif Growth Media logo"
            width={44}
            height={44}
            fetchPriority="high"
            decoding="async"
            className={`w-auto shrink-0 object-contain transition-[height,transform] duration-300 group-hover:scale-105 ${
              scrolled ? "h-8 sm:h-9" : "h-9 sm:h-11"
            }`}
          />
          <span className="truncate font-display text-sm font-semibold tracking-tight sm:text-base">
            <span className="text-gold">Alif</span>{" "}
            <span className="text-primary">Growth Media</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
            >
              Free Audit
            </Link>
          </motion.div>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="h-[2px] origin-left bg-[var(--gradient-gold)]"
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background/97 px-5 backdrop-blur-xl sm:px-6 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "bg-muted text-foreground" }}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Free Audit
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
