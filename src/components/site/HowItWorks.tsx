import { steps } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";

export function HowItWorks() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="How it works"
        title="Four steps to the driver's seat"
        tone="light"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.no} delay={i * 0.14}>
            <div className="group relative h-full rounded-3xl border border-light-foreground/10 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_70px_-45px_rgba(0,0,0,0.4)]">
              <p className="font-display text-4xl font-black text-primary">{step.no}</p>
              <h3 className="mt-5 font-display text-base font-black tracking-wide uppercase">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-light-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
