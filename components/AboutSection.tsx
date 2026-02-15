"use client";

import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-12 h-px bg-secondary mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          {t("sectionTitle")}
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t("paragraph1")}
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {t("paragraph2")}
          </p>
        </div>
        <div className="mt-10 flex items-center gap-3">
          <div className="w-8 h-px bg-secondary" />
          <span className="text-sm font-medium text-secondary tracking-widest uppercase">
            {t("oab")}
          </span>
        </div>
      </div>
    </section>
  );
}
