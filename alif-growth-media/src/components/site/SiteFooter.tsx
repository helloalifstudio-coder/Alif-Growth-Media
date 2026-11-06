import { Link } from "@tanstack/react-router";

import alifMark from "@/assets/alif-symbol.png";
import { company, navLinks, services } from "@/content/site";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/alifgrowthmedia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alif-growth-media-2526453b2/" },
  { label: "X (Twitter)", href: "https://x.com/alifgrowthmedia" },
  { label: "YouTube", href: "https://www.youtube.com/@alifgrowthmedia" },
  { label: "Pinterest", href: "https://www.pinterest.com/alifgrowthmedia/" },
  { label: "WhatsApp", href: company.whatsapp },
];

export function SiteFooter() {
  return (
    <footer className="gradient-deep px-5 py-14 text-primary-foreground sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-5">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={alifMark}
              alt="Alif Growth Media logo"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-xl bg-primary-foreground/95 p-1.5 object-contain"
            />
            <h3 className="font-display text-lg font-semibold">
              <span className="text-gold">Alif</span> Growth Media
            </h3>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            A digital growth systems studio based in Warangal, Telangana — helping local businesses
            build trust, improve communication, and grow with clarity.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Company</h3>
          <ul className="mt-3 space-y-0.5 text-sm text-primary-foreground/75 sm:mt-4 sm:space-y-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                  to={l.to}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Legal
          </h3>
          <ul className="mt-3 space-y-0.5 text-sm text-primary-foreground/75 sm:mt-4 sm:space-y-2">
            <li>
              <Link
                className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                to="/terms"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Services</h3>
          <ul className="mt-3 space-y-0.5 text-sm text-primary-foreground/75 sm:mt-4 sm:space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                  to="/services"
                  hash={s.slug}
                >
                  {s.t}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
          <ul className="mt-3 space-y-0.5 text-sm text-primary-foreground/75 sm:mt-4 sm:space-y-2">
            <li>
              <a
                className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                href={`mailto:${company.email}`}
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                href={company.phoneHref}
              >
                {company.phone}
              </a>
            </li>
            <li className="leading-relaxed">{company.areas}</li>
            <li className="leading-relaxed">{company.hours}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Follow</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm text-primary-foreground/75 sm:mt-4 sm:gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  className="inline-flex min-h-11 items-center hover:text-primary-foreground sm:min-h-0"
                  href={s.href}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55">
        © {new Date().getFullYear()} Alif Growth Media. All rights reserved.
      </div>
    </footer>
  );
}
