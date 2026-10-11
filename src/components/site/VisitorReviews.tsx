import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

export type VisitorReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  created_at: string;
};

export const visitorReviewsQuery = {
  queryKey: ["visitor-reviews"],
  queryFn: async (): Promise<VisitorReview[]> => {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, rating, review, created_at")
      .order("created_at", { ascending: false })
      .limit(60);
    if (error) throw error;
    return (data ?? []) as VisitorReview[];
  },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={cn("size-3.5", n <= rating ? "fill-primary text-primary" : "text-muted-foreground/40")}
        />
      ))}
    </div>
  );
}

export function VisitorReviews() {
  const { data, isLoading, isError } = useQuery(visitorReviewsQuery);

  if (isLoading) {
    return (
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl glass" />
        ))}
      </div>
    );
  }

  if (isError) return null;
  if (!data || data.length === 0) {
    return (
      <p className="mt-8 text-sm text-muted-foreground">
        No reviews yet — be the first to share your experience.
      </p>
    );
  }

  const average = data.reduce((sum, r) => sum + r.rating, 0) / data.length;

  return (
    <div className="mt-14">
      <div className="flex flex-wrap items-center gap-4">
        <h3 className="font-display text-xl font-black uppercase sm:text-2xl">Reviews from visitors</h3>
        <div className="flex items-center gap-2 rounded-full glass px-4 py-2">
          <Stars rating={Math.round(average)} />
          <span className="font-display text-xs font-bold tracking-[0.14em] uppercase">
            {average.toFixed(1)} / 5 · {data.length} {data.length === 1 ? "review" : "reviews"}
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((r, i) => (
          <Reveal key={r.id} delay={Math.min(i, 5) * 0.05}>
            <article className="h-full rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50">
              <Stars rating={r.rating} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.review}</p>
              <footer className="mt-5 flex items-center justify-between gap-3">
                <span className="font-display text-sm font-bold uppercase">{r.name}</span>
                <time
                  dateTime={r.created_at}
                  className="text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase"
                >
                  {new Date(r.created_at).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
