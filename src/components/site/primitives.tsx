import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section shell ---------- */

export function Section({
  id,
  tone = "dark",
  className,
  children,
}: {
  id?: string;
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-5 py-20 sm:px-8 md:py-28",
        tone === "light" ? "bg-light text-light-foreground" : "bg-background text-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Reveal>
          <p className="eyebrow text-primary">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.06}>
        <h2 className="mt-4 text-3xl leading-[1.05] font-extrabold uppercase sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-light-muted" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* ---------- CTA buttons (analytics-friendly) ---------- */

type CtaAction = "book" | "call" | "whatsapp" | "directions" | "reviews";

const ctaHref: Record<CtaAction, string> = {
  book: site.phoneHref,
  call: site.phoneHref,
  whatsapp: site.whatsappHref,
  directions: site.directionsHref,
  reviews: site.justdialUrl,
};

const ctaStyles = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 glow-accent border border-transparent",
  ghost:
    "glass text-foreground hover:border-primary/60 hover:text-primary",
  outlineLight:
    "border border-light-foreground/20 bg-transparent text-light-foreground hover:border-primary hover:text-primary",
  solidDark:
    "bg-light-foreground text-light hover:brightness-125",
} as const;

export function Cta({
  action,
  variant = "primary",
  children,
  className,
  size = "md",
  ...rest
}: {
  action: CtaAction;
  variant?: keyof typeof ctaStyles;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = action === "whatsapp" || action === "directions" || action === "reviews";
  return (
    <a
      href={ctaHref[action]}
      data-cta={action}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold tracking-[0.14em] uppercase transition-all duration-300 active:scale-[0.98]",
        size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3 text-xs",
        ctaStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ---------- Number counter ---------- */

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 48;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(to * progress));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

/* ---------- 3D tilt wrapper ---------- */

export function Tilt({
  children,
  className,
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${-py * intensity}deg`);
    el.style.setProperty("--ry", `${px * intensity}deg`);
    el.style.setProperty("--mx", `${px * 18}px`);
    el.style.setProperty("--my", `${py * 18}px`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("[perspective:1200px]", className)}
    >
      <div
        className="h-full transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
      >
        {children}
      </div>
    </div>
  );
}
