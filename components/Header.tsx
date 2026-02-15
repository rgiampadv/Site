"use client";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useState } from "react";

export function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#hero", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#areas", label: t("areas") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border/10">
      <div className="max-w-6xl mx-auto flex items-center h-16 px-4">
        {/* Logo - left */}
        <a
          href="#hero"
          className="font-serif text-xl font-bold tracking-wide text-primary-foreground shrink-0"
        >
          RGF <span className="text-secondary">Advocacia</span>
        </a>

        {/* Nav links - pushed left, close to logo */}
        <nav className="hidden md:flex items-center gap-6 ml-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Spacer pushes flags to far right */}
        <div className="flex-1" />

        {/* Language flags - far right */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground ml-4"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-border/10 px-4 pb-4">
          <nav className="flex flex-col gap-3 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
