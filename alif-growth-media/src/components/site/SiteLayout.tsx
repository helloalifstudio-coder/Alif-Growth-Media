import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";

import { useCoarsePointer, useSafeReducedMotion } from "@/components/motion/primitives";
import { Header } from "./Header";
import { FloatingActions } from "./FloatingActions";
import { SiteFooter } from "./SiteFooter";
import { AmbientBackground } from "./AmbientBackground";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useSafeReducedMotion();
  const coarse = useCoarsePointer();

  return (
    <div id="top" className="flex min-h-screen flex-col">
      <AmbientBackground />
      <Header />
      <FloatingActions />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          {/* Opacity-only transition keeps route changes on the compositor
                (no layout/paint work), which avoids the scroll stutter that a
                translating wrapper caused on long pages. */}
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : coarse ? 0.1 : 0.16, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}
