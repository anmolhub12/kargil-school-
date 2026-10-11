import { Phone, MessageCircle, Car } from "lucide-react";
import { site } from "@/data/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 glass px-3 py-3 md:hidden">
      <a
        href={site.phoneHref}
        data-cta="call"
        className="flex flex-col items-center gap-1 rounded-xl py-2 text-[0.62rem] font-bold tracking-[0.14em] uppercase"
      >
        <Phone className="size-4 text-primary" /> Call
      </a>
      <a
        href={site.whatsappHref}
        data-cta="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 rounded-xl py-2 text-[0.62rem] font-bold tracking-[0.14em] uppercase"
      >
        <MessageCircle className="size-4 text-primary" /> WhatsApp
      </a>
      <a
        href={site.phoneHref}
        data-cta="book"
        className="flex flex-col items-center gap-1 rounded-xl bg-primary py-2 text-[0.62rem] font-bold tracking-[0.14em] text-primary-foreground uppercase"
      >
        <Car className="size-4" /> Book Now
      </a>
    </div>
  );
}
