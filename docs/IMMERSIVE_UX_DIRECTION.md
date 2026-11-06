# Interactive agency experience — design direction

**Working branch:** `design/immersive-agency-experience`  
**Base:** the consolidated `main` branch  
**Application:** `alif-growth-media/` (TanStack Start, React 19, TypeScript, Tailwind CSS, Motion)  
**Status:** iterative concept and implementation, **not approved production UI**

## Creative brief

Build an agency website that **feels alive, precise, and premium** without compromising
accessibility, credibility, mobile performance or clarity for nontechnical business owners.

Our brand base is warm editorial neutrals, restrained emerald and gold, generous white space,
distinctive typography, and high-quality visual contrast. Add cinematic transitions,
responsive hover/focus feedback and genuinely explorable service and project experiences.
A visual effect must **communicate information or guide interaction**, not merely decorate a page.

## Observed references and transfer principles

These are *additional public inspiration sources* and not claims that the originally
shared roadmap listed them:

- [Cuberto](https://cuberto.com/) — confident editorial hierarchy, oversized
  typography, interaction-led project stories and polished creative direction.
- [Locomotive](https://locomotive.ca/) — scroll-led narrative sequencing and
  tactile movement; emulate the pacing, **not scroll hijacking**.
- [Lusion](https://lusion.co/) — spatial depth and art direction; evaluate
  individual lightweight motion techniques before introducing WebGL.

The supplied engineering roadmap names **SAFA Fresh, DT Interiors and Sumera
Collections** as portfolio material, not confirmed UI-inspiration websites.
Present them as portfolio examples with honest provenance and verifiable outcomes.
Do not copy another agency's artwork, source code, brand identity or interactions wholesale.

## Existing strengths and gaps

The repository already has a Motion abstraction layer, parallax, staged scroll sections,
animated headlines, responsive layouts and reduced-motion behavior. The goal is to
upgrade the **art direction and useful interaction** rather than add another heavy
animation framework.

The old homepage hero centered on a fixed abstract image and descriptive overlay.
The first design change introduces a responsive, three-mode interactive concept
showcase for digital experiences, business systems and automation. This is clearly
labeled a **concept preview**; it does not imply a real CRM or analytics backend.

## Principles and measurable acceptance

1. **Immediate impact:** clear hero message, legible typography, signature visual
   identity, purposeful CTAs, and a visible interactive point of discovery.
2. **Genuine interaction:** keyboard and pointer users can change hero modes;
   content, visual composition and supporting copy update together. UI should work
   without hover and with JS hydration completed.
3. **Motion with restraint:** transform/opacity transitions, no forced scrolling,
   no elaborate particles on mobile; always honor `prefers-reduced-motion`.
4. **Mobile-first:** 320px width should have no horizontal overflow; retain
   adequate touch target sizes and avoid autoplay-heavy components.
5. **Honest showcases:** concept UIs are labeled as such; no invented client
   metrics, testimonials, awards or customer data.
6. **Performance:** measure Core Web Vitals on deployed preview; evaluate
   performance before adding shaders, video backgrounds or new animation packages.
7. **Release safety:** run `npm ci`, `npm run lint`, `npm run typecheck`, and
   `npm run build`. Verify the preview on mobile and desktop, keyboard navigation,
   reduced motion and no console errors. Do not merge simply because animation looks good.

## Sequenced design work on this one branch

- **Phase A:** interactive hero visual and credible brand message (initial work).
- **Phase B:** rich portfolio browsing and case-study transitions with real assets.
- **Phase C:** motion-led service storytelling and conversion-focused contact journey.
- **Phase D:** mobile refinements, performance budgets, accessibility tests and polish.

Keep changes on this branch and update one reviewable PR to `main`; do not create
multiple parallel feature branches for each visual tweak. Production releases still
require an explicit quality review, and the shared deployment must be checked.

## Manual design review checklist

At desktop, tablet and mobile sizes: compare the old static hero with the
interactive concept; switch all three modes; keyboard-tab through controls;
test touch input; test with reduced motion enabled; verify text contrast,
external links, layout stability, route transitions and content claims.
