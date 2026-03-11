import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import { blogArticles } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli e guide pratiche su siti web, conversione, SEO locale e Google Ads per attivita e aziende.",
};

export default function BlogPage() {
  const featuredArticle = blogArticles[0];
  const secondaryArticles = blogArticles.slice(1);

  return (
    <main className="main-ambient min-h-screen overflow-hidden pb-20">
      <div className="container-pad pt-8 sm:pt-10">
        <header className="glass-strong gradient-border rounded-3xl px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                Blog {COMPANY_NAME}
              </p>
              <h1 className="heading-display mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Articoli utili per chi vuole un sito che lavori davvero
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-secondary focus-ring">
                Torna alla home
              </Link>
              <Link href="/#preventivo" className="btn-primary focus-ring">
                Richiedi una proposta
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-12">
          <article className="glass-strong gradient-border card-tech overflow-hidden rounded-3xl lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                {featuredArticle.category} · {featuredArticle.readTime}
              </p>
              <h2 className="heading-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-(--muted)">
                {featuredArticle.excerpt}
              </p>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="btn-primary focus-ring mt-6 inline-flex"
              >
                Leggi l&apos;articolo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-5">
            {secondaryArticles.map((article) => (
              <article
                key={article.slug}
                className="glass gradient-border card-tech overflow-hidden rounded-3xl"
              >
                <div className="grid gap-4 p-4 sm:grid-cols-[132px_minmax(0,1fr)] sm:p-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="132px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                      {article.category} · {article.readTime}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-(--muted)">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                    >
                      Apri articolo
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
