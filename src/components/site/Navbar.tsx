import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import logoAsset from "@/assets/logo-luxury.png.asset.json";
import { Cta } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass py-2 shadow-2xl" : "border-b border-transparent py-4",
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Kargil Driving School logo"
            width={40}
            height={40}
            className="size-10 shrink-0 object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-base font-black tracking-[0.16em] sm:text-lg">
              {site.brand.line1}
            </span>
            <span className="block truncate text-[0.6rem] tracking-[0.32em] text-muted-foreground">
              {site.brand.line2}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <Cta action="book">Book Now</Cta>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            data-cta="call"
            aria-label="Call now"
            className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Phone className="size-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full glass"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="glass mx-5 mt-3 grid gap-1 rounded-2xl p-3 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-colors hover:bg-surface-2 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
