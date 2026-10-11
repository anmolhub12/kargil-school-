import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Quote, Star, ExternalLink } from "lucide-react";
import { reviewThemes, site } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";
import { Cta, Reveal, Section, SectionHeading } from "./primitives";
import { ReviewDialog, type ReviewDraft } from "./ReviewDialog";
import { VisitorReviews, visitorReviewsQuery } from "./VisitorReviews";

export function Reviews() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  async function saveReview(draft: ReviewDraft) {
    const { error } = await supabase.from("reviews").insert({
      name: draft.name,
      rating: draft.rating,
      review: draft.review,
    });
    if (error) throw error;
    await queryClient.invalidateQueries({ queryKey: visitorReviewsQuery.queryKey });
  }

  return (
    <Section id="reviews">
      <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-primary/8 blur-[120px]" />
      <SectionHeading
        eyebrow="Reviews"
        title="What our students say"
        subtitle="Themes summarised from the school's public Justdial listing. Read the full, unedited reviews on Justdial."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviewThemes.map((theme, i) => (
          <Reveal key={theme} delay={i * 0.05}>
            <div className="group h-full rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
              <Quote className="size-5 text-primary" />
              <p className="mt-4 font-display text-base leading-snug font-bold">{theme}</p>
              <p className="mt-3 text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase">
                Source: Justdial listing
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Cta action="reviews" size="lg">
            View Reviews <ExternalLink className="size-4" />
          </Cta>
          <p className="text-xs text-muted-foreground">
            Opens the Kargil Driving School listing on Justdial.
          </p>
        </div>
      </Reveal>

      {/* Share your experience */}
      <Reveal delay={0.14}>
        <div className="mt-16 overflow-hidden rounded-3xl glass p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
            <div>
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <h3 className="mt-5 font-display text-2xl font-black uppercase sm:text-3xl">
                Share your experience
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Have you learned with Kargil Driving School? We&apos;d love to hear about your
                experience.
              </p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-display text-sm font-bold tracking-[0.14em] text-primary-foreground uppercase transition-all duration-300 glow-accent hover:brightness-110 active:scale-[0.98]"
            >
              Write a Review
            </button>
          </div>
        </div>
      </Reveal>

      <VisitorReviews />

      <ReviewDialog open={open} onOpenChange={setOpen} onSubmit={saveReview} />
    </Section>
  );
}
