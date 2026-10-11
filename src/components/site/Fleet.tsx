import { motion } from "motion/react";
import { fleet } from "@/data/site";
import { Cta, Reveal, Section, SectionHeading, Tilt } from "./primitives";

export function Fleet() {
  return (
    <Section id="our-cars">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-72 bg-primary/6 blur-[130px]" />
      <SectionHeading
        eyebrow="Training Fleet"
        title="Our training fleet"
        subtitle="Learn in cars that are comfortable, practical and well maintained."
      />

      <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {fleet.map((car, i) => (
          <Reveal
            key={car.name}
            delay={i * 0.1}
            className="min-w-[82%] snap-center sm:min-w-0"
          >
            <Tilt className="h-full" intensity={10}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_50px_90px_-45px_rgba(0,0,0,0.85)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow rounded-full border border-primary/40 px-3 py-1 text-primary">
                    {car.tag}
                  </span>
                  {car.badge ? (
                    <span className="rounded-full bg-primary px-3 py-1 text-[0.55rem] font-bold tracking-[0.18em] text-primary-foreground uppercase">
                      Automatic
                    </span>
                  ) : null}
                </div>

                <div className="relative mt-6 aspect-[3/2] w-full overflow-hidden rounded-2xl car-plate">
                  <div className="absolute inset-x-8 bottom-4 h-16 rounded-[50%] bg-primary/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={car.image}
                    alt={`${car.name} training car at Kargil Driving School`}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-108"
                    style={{ transform: "translate3d(var(--mx,0), var(--my,0), 0)" }}
                  />
                </div>

                <div className="mt-6 flex-1">
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-display text-xl font-black tracking-wide uppercase"
                  >
                    {car.name}
                  </motion.h3>
                  {car.badge ? (
                    <p className="mt-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
                      {car.badge}
                    </p>
                  ) : null}
                </div>

                <Cta action="book" variant="ghost" className="mt-6 w-full">
                  Book This Car
                </Cta>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase sm:hidden">
        Swipe to explore
      </p>
    </Section>
  );
}
