"use client";

import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-primary pt-16"
    >
      {/* Subtle decorative line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-secondary/10" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-secondary/10" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-secondary/10" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-secondary/10" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="w-16 h-px bg-secondary mx-auto mb-8" />
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto leading-relaxed text-pretty">
          {t("subtitle")}
        </p>
        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-3.5 bg-secondary text-secondary-foreground font-medium text-sm tracking-wide rounded hover:brightness-110 transition-all"
        >
          {t("cta")}
        </a>
        <div className="w-16 h-px bg-secondary mx-auto mt-12" />
      </div>
    </section>
  );
}
