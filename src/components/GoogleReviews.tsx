"use client";

import { ArrowUpRight, Star, MessageSquarePlus } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { GOOGLE_REVIEW_URL, COMPANY_NAME } from "@/lib/constants";

/* ──────────────────────────────────────────────────────────
   Each review: { author, date, text, rating (1-5) }
   When you receive your first reviews, add them here.
   ────────────────────────────────────────────────────────── */
interface Review {
  author: string;
  date: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  // ──  Add your real Google reviews below  ──
  // Example:
  // {
  //   author: "Mario Rossi",
  //   date: "15 Gennaio, 2026",
  //   text: "Sito bellissimo, professionalità e precisione. Consigliatissimo!",
  //   rating: 5,
  // },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-white/10 text-white/20"
          }`}
        />
      ))}
    </span>
  );
}

function GoogleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="h-7 w-7"
      aria-label="Google"
    >
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.04 24.04 0 0 0 0 21.56l7.98-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

export function GoogleReviews() {
  const { locale } = useLanguage();
  const hasReviews = REVIEWS.length > 0;

  const averageRating = hasReviews
    ? REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
    : 0;

  return (
    <section className="section-pad" id="recensioni">
      <div className="container-pad">
        <div className="reveal text-center">
          <h2 className="heading-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl">
            {locale === "it" ? (
              <>
                Cosa dicono i nostri{" "}
                <span className="heading-accent">clienti</span>
              </>
            ) : (
              <>
                What our <span className="heading-accent">clients</span> say
              </>
            )}
          </h2>
          <p className="mt-4 text-sm text-(--muted) sm:text-base">
            {locale === "it"
              ? "Recensioni verificate su Google Business Profile."
              : "Verified reviews on Google Business Profile."}
          </p>
        </div>

        {/* ── Aggregate badge ── */}
        <div className="reveal mt-10 flex justify-center">
          <div className="glass gradient-border panel-tech inline-flex items-center gap-4 rounded-2xl px-6 py-4 sm:px-8">
            <GoogleLogo />
            <div className="text-left">
              <p className="heading-display text-lg font-bold tracking-tight sm:text-xl">
                {COMPANY_NAME}
              </p>
              {hasReviews ? (
                <div className="flex items-center gap-2">
                  <Stars count={Math.round(averageRating)} />
                  <span className="text-sm font-semibold text-amber-300">
                    {averageRating.toFixed(1)}
                  </span>
                  <span className="text-xs text-(--muted)">
                    ({REVIEWS.length}{" "}
                    {locale === "it"
                      ? REVIEWS.length === 1
                        ? "recensione"
                        : "recensioni"
                      : REVIEWS.length === 1
                        ? "review"
                        : "reviews"}
                    )
                  </span>
                </div>
              ) : (
                <p className="text-xs text-(--muted)">
                  {locale === "it"
                    ? "Sii il primo a lasciare una recensione!"
                    : "Be the first to leave a review!"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ── Review cards ── */}
        {hasReviews && (
          <div className="mt-8 grid gap-4 reveal-stagger sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <div
                key={`${review.author}-${review.date}`}
                className="glass gradient-border panel-tech reveal rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">
                      {review.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.author}</p>
                      <p className="text-xs text-(--muted)">{review.date}</p>
                    </div>
                  </div>
                  <GoogleLogo />
                </div>
                <div className="mt-3">
                  <Stars count={review.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-(--muted)">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ── Empty state: call-to-action ── */}
        {!hasReviews && (
          <div className="reveal mt-8 flex justify-center">
            <div className="glass gradient-border panel-tech flex max-w-md flex-col items-center gap-4 rounded-2xl p-8 text-center">
              <MessageSquarePlus className="h-10 w-10 text-cyan-400/60" />
              <p className="text-sm text-(--muted)">
                {locale === "it"
                  ? "Hai lavorato con noi? La tua opinione conta. Lascia una recensione su Google e aiuta altri imprenditori a scegliere con fiducia."
                  : "Have you worked with us? Your opinion matters. Leave a review on Google and help other entrepreneurs choose with confidence."}
              </p>
            </div>
          </div>
        )}

        {/* ── CTA: Write a review ── */}
        {GOOGLE_REVIEW_URL && (
          <div className="reveal mt-6 flex justify-center">
            <a
              className="btn-primary focus-ring"
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === "it" ? "Scrivi una recensione" : "Write a review"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
