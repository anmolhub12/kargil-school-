import { stats } from "@/data/site";
import { Counter, Reveal } from "./primitives";

export function Stats() {
  return (
    <section className="relative border-y border-border bg-surface/60 px-5 py-12 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="relative lg:pl-6">
              <span className="absolute left-0 top-1 hidden h-12 w-px bg-primary/50 lg:block" />
              <p className="font-display text-2xl font-black tracking-tight text-primary sm:text-3xl">
                {stat.count ? <Counter to={stat.count} suffix={stat.suffix} /> : stat.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed tracking-[0.16em] text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
