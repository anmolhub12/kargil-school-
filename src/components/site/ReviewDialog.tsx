import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(60, "Name is too long"),
  rating: z.number().min(1, "Please select a rating").max(5),
  review: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(1000, "Review must be under 1000 characters"),
});

export type ReviewDraft = z.infer<typeof schema>;

/**
 * Frontend-only review capture. `onSubmit` is the single hook to wire up to a
 * backend later — nothing else in this component needs to change.
 */
export function ReviewDialog({
  open,
  onOpenChange,
  onSubmit,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSubmit?: (draft: ReviewDraft) => Promise<void> | void;
}) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  function reset() {
    setName("");
    setRating(0);
    setReview("");
    setErrors({});
    setDone(false);
    setSaving(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, rating, review });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSaving(true);
    try {
      await onSubmit?.(parsed.data);
      setDone(true);
    } catch {
      setErrors({ form: "Sorry, your review could not be saved. Please try again." });
    } finally {
      setSaving(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="max-w-lg rounded-3xl border-border bg-popover p-7">
        {done ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto size-12 text-primary" />
            <h3 className="mt-5 font-display text-xl font-black uppercase">Thank you</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Your review has been published and is now visible to everyone who visits the site.
            </p>
            <button
              onClick={() => onOpenChange(false)}
              className="mt-7 rounded-full bg-primary px-7 py-3 font-display text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl font-black uppercase">
                Write a review
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Tell us how your training experience went.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 grid gap-5">
              <div>
                <label htmlFor="review-name" className="eyebrow text-muted-foreground">
                  Name
                </label>
                <input
                  id="review-name"
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
                {errors['name'] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors['name']}</p>
                ) : null}
              </div>

              <div>
                <span className="eyebrow text-muted-foreground">Rating</span>
                <div className="mt-2 flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      onClick={() => setRating(n)}
                      className="transition-transform hover:scale-115"
                    >
                      <Star
                        className={cn(
                          "size-7",
                          n <= rating ? "fill-primary text-primary" : "text-muted-foreground",
                        )}
                      />
                    </button>
                  ))}
                </div>
                {errors['rating'] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors['rating']}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="review-text" className="eyebrow text-muted-foreground">
                  Your review
                </label>
                <textarea
                  id="review-text"
                  value={review}
                  rows={4}
                  maxLength={1000}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  placeholder="What did you like about your training?"
                />
                {errors['review'] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors['review']}</p>
                ) : null}
              </div>

              {errors['form'] ? (
                <p className="text-xs text-destructive">{errors['form']}</p>
              ) : null}

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-full bg-primary px-6 py-3.5 font-display text-xs font-bold tracking-[0.16em] text-primary-foreground uppercase transition-all hover:brightness-110 disabled:opacity-60"
                >
                  {saving ? "Submitting…" : "Submit Review"}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="flex-1 rounded-full glass px-6 py-3.5 font-display text-xs font-bold tracking-[0.16em] uppercase transition-colors hover:text-primary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
