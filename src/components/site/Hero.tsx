import { motion } from "motion/react";
import { Phone, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { Cta } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24">
      {/* cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
        <div className="absolute bottom-[-14rem] right-[-10rem] size-[34rem] rounded-full bg-primary/8 blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-primary"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            LEARN TO DRIVE · DRIVE WITH CONFIDENCE
          </motion.p>

          <h1 className="mt-7 text-4xl leading-[0.98] font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl">
            {["KARGIL DRIVING", "POINT SCHOOL"].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 1 ? <span className="accent-text">{line}</span> : line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional driving training in Sri Ganganagar with experienced instruction, practical road experience and well-maintained cars.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Cta action="book" size="lg">
              Book Now
            </Cta>
            <Cta action="whatsapp" variant="ghost" size="lg">
              WhatsApp Us
            </Cta>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <a
              href={site.phoneHref}
              data-cta="call"
              className="group flex items-center gap-3"
            >
              <span className="grid size-11 place-items-center rounded-full glass text-primary transition-colors group-hover:border-primary/60">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
                  Call Now
                </span>
                <span className="block font-display text-xl font-black tracking-wide">
                  {site.phone}
                </span>
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <a
        href="#why-us"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="size-5" />
        </motion.span>
      </a>
    </section>
  );
}
