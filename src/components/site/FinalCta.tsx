import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import { hero, site } from "@/data/site";
import { Cta, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-y border-border px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-[150px]" />
        <motion.img
          src={hero.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute right-[-8%] bottom-[-6%] w-[46rem] max-w-none opacity-15"
          animate={{ x: [0, -22, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl leading-[1.02] font-black uppercase sm:text-5xl md:text-6xl">
            Ready to get <span className="accent-text">behind the wheel?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Start your driving journey with Kargil Driving School.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta action="book" size="lg">
              Book Your Class
            </Cta>
            <Cta action="call" variant="ghost" size="lg">
              <Phone className="size-4" /> Call {site.phone}
            </Cta>
            <Cta action="whatsapp" variant="ghost" size="lg">
              <MessageCircle className="size-4" /> WhatsApp Us
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
