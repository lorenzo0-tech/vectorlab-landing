import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";
import { blogArticles, getBlogArticle } from "../blog-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Articolo non trovato",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "it_IT",
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    inLanguage: "it-IT",
    image: `${SITE_URL.replace(/\/+$/, "")}${article.image}`,
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    mainEntityOfPage: `${SITE_URL.replace(/\/+$/, "")}/blog/${article.slug}`,
  };

  return (
    <main className="main-ambient min-h-screen overflow-hidden pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container-pad pt-8 sm:pt-10">
        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="btn-secondary focus-ring">
            <ArrowLeft className="h-4 w-4" />
            Torna al blog
          </Link>
          <Link href="/#preventivo" className="btn-primary focus-ring">
            Richiedi una proposta
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <article className="glass-strong gradient-border card-tech mt-6 overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-4xl px-5 py-8 sm:px-8 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
              {article.category} · {article.readTime}
            </p>
            <h1 className="heading-display mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-(--muted)">
              {article.excerpt}
            </p>

            <div className="mt-8 space-y-8">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-(--muted)"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="space-y-3 rounded-2xl border border-cyan-200/12 bg-cyan-950/10 p-5 text-sm leading-7 text-(--muted)">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
