"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Brand */}
          <div className="flex-1">
            <p className="font-serif text-xl font-bold tracking-wide">
              RGF <span className="text-secondary">Advocacia</span>
            </p>
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
              {t("oabNotice")}
            </p>
          </div>

          {/* LGPD */}
          <div className="flex-1">
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {t("lgpd")}
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/40 text-center">
            {"© "}{year}{" RGF Advocacia. "}{t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
