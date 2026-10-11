import { Check } from "lucide-react";
import { about, site } from "@/data/site";
import { Cta, Reveal, Section, Tilt } from "./primitives";

export function About() {
  return (
    <Section id="about" tone="light">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow text-primary">About us</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-3xl leading-[1.05] font-extrabold uppercase sm:text-4xl md:text-5xl">
              {about.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-light-muted sm:text-lg">
              {about.copy}
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.points.map((point, i) => (
              <Reveal key={point} delay={0.16 + i * 0.05}>
                <li className="flex items-center gap-3 rounded-xl border border-light-foreground/10 bg-white px-4 py-3 text-sm font-semibold">
                  <Check className="size-4 shrink-0 text-primary" />
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Cta action="book" size="lg">
                Book Now
              </Cta>
              <Cta action="whatsapp" variant="outlineLight" size="lg">
                WhatsApp Us
              </Cta>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Tilt intensity={7}>
            <div className="relative overflow-hidden rounded-[2rem] border border-light-foreground/10 bg-gradient-to-b from-white to-light p-8 shadow-[0_50px_90px_-60px_rgba(0,0,0,0.5)]">
              <img
                src={about.image}
                alt="Well-maintained Maruti Suzuki Ignis training car"
                loading="lazy"
                className="w-full object-contain"
                style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
              />
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-light-foreground/10 pt-6">
                <div>
                  <p className="font-display text-4xl font-black text-primary">30+</p>
                  <p className="text-[0.62rem] tracking-[0.24em] text-light-muted uppercase">
                    Years of driving education
                  </p>
                </div>
                <a
                  href={site.phoneHref}
                  data-cta="call"
                  className="font-display text-lg font-black tracking-wide"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </Section>
  );
}
