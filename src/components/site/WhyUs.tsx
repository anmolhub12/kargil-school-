import { whyUs } from "@/data/site";
import { cn } from "@/lib/utils";
import { getIcon } from "./icons";
import { Reveal, Section, SectionHeading, Tilt } from "./primitives";

export function WhyUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="Why Kargil?"
        title="Why choose Kargil Driving School?"
        subtitle="More than just learning to operate a car — learn to drive with confidence."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item, i) => {
          const Icon = getIcon(item.icon);
          const featured = item.featured ?? false;
          return (
            <Reveal
              key={item.title}
              delay={i * 0.07}
              className={featured ? "lg:row-span-2" : ""}
            >
              <Tilt className="h-full">
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-2",
                    featured
                      ? "glow-accent p-4 lg:p-5"
                      : "hover:border-primary/50 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -top-24 left-1/2 size-56 -translate-x-1/2 rounded-full bg-primary/18 blur-3xl" />
                  </div>
                  {!item.image && (
                    <span
                      className={cn(
                        "relative grid place-items-center rounded-2xl bg-surface-2 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6",
                        featured ? "size-16" : "size-14",
                      )}
                    >
                      <Icon className={cn("transition-transform duration-500", featured ? "size-7" : "size-6")} />
                    </span>
                  )}
                  {item.image ? (
                    <div className="relative flex min-h-0 flex-grow items-center justify-center overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt="Justdial Users' Choice 2025 award for Kargil Driving Point, Jawahar Nagar"
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <h3
                        className={cn(
                          "relative mt-6 font-display font-black tracking-wide uppercase transition-transform duration-500 group-hover:translate-x-1",
                          featured
                            ? "text-xl leading-tight md:text-2xl lg:text-3xl accent-text"
                            : "text-lg",
                        )}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={cn(
                          "relative mt-3 leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:translate-x-1",
                          featured ? "text-base" : "text-sm",
                        )}
                      >
                        {item.text}
                      </p>
                    </>
                  )}
                  <span className="hairline absolute inset-x-7 bottom-5 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
