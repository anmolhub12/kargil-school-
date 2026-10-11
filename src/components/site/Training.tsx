import { training } from "@/data/site";
import { getIcon } from "./icons";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Training() {
  return (
    <Section id="training" tone="light">
      <SectionHeading
        eyebrow="Our Training"
        title="Learn more than just driving"
        subtitle="Structured, practical modules that take you from first gear to full road confidence."
        tone="light"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {training.map((item, i) => {
          const Icon = getIcon(item.icon);
          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-light-foreground/10 bg-white p-7 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_40px_70px_-40px_rgba(0,0,0,0.35)]">
                <span className="absolute right-6 top-6 font-display text-5xl font-black text-light-foreground/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-primary/12 text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="relative mt-6 font-display text-base font-black tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-light-muted">{item.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
