import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { site } from "@/data/site";
import { Cta, Reveal, Section, SectionHeading } from "./primitives";

export function Location() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Location" title="Find Kargil Driving School" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="h-full rounded-3xl glass p-8">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-primary">
                <MapPin className="size-5" />
              </span>
              <address className="not-italic">
                <p className="eyebrow text-muted-foreground">Address</p>
                <p className="mt-2 font-display text-lg leading-snug font-bold">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </address>
            </div>

            <div className="mt-8 flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-primary">
                <Phone className="size-5" />
              </span>
              <div>
                <p className="eyebrow text-muted-foreground">Phone</p>
                <a
                  href={site.phoneHref}
                  data-cta="call"
                  className="mt-2 block font-display text-2xl font-black tracking-wide hover:text-primary"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="mt-9 grid gap-3">
              <Cta action="call" size="lg">
                <Phone className="size-4" /> Call Now
              </Cta>
              <Cta action="whatsapp" variant="ghost" size="lg">
                <MessageCircle className="size-4" /> WhatsApp
              </Cta>
              <Cta action="directions" variant="ghost" size="lg">
                <Navigation className="size-4" /> Get Directions
              </Cta>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full min-h-[22rem] overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Map showing Kargil Driving School in Sri Ganganagar"
              src={site.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[22rem] w-full"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
