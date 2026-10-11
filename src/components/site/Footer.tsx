import { nav, site } from "@/data/site";
import { Cta } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-surface/50 px-5 pt-16 pb-28 sm:px-8 md:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-black tracking-[0.16em] uppercase">
            {site.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional driving training in Sri Ganganagar.
          </p>
          <Cta action="book" className="mt-7">
            Book Now
          </Cta>
        </div>

        <div>
          <p className="eyebrow text-primary">Contact</p>
          <address className="mt-4 grid gap-3 text-sm text-muted-foreground not-italic">
            <span>
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
            <a href={site.phoneHref} data-cta="call" className="hover:text-primary">
              Phone: {site.phone}
            </a>
            <a
              href={site.whatsappHref}
              data-cta="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              WhatsApp: {site.phone}
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow text-primary">Explore</p>
          <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-7xl border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © 2026 Kargil Driving School. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
