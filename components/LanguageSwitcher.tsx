"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#009b3a" />
      <polygon points="320,60 580,240 320,420 60,240" fill="#fedf00" />
      <circle cx="320" cy="240" r="95" fill="#002776" />
      <path
        d="M196,240 Q320,180 444,240"
        fill="none"
        stroke="#fff"
        strokeWidth="14"
      />
    </svg>
  );
}

function USFlag({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#fff" />
      <g>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            y={i * 480 / 13 * 2}
            width="640"
            height={480 / 13}
            fill="#b22234"
          />
        ))}
      </g>
      <rect width="256" height={480 * 7 / 13} fill="#3c3b6e" />
      <g fill="#fff">
        {[0, 1, 2, 3, 4].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <circle
              key={`a-${row}-${col}`}
              cx={22 + col * 42}
              cy={18 + row * 36}
              r="6"
            />
          ))
        )}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4].map((col) => (
            <circle
              key={`b-${row}-${col}`}
              cx={43 + col * 42}
              cy={36 + row * 36}
              r="6"
            />
          ))
        )}
      </g>
    </svg>
  );
}

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale("pt")}
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
          locale === "pt"
            ? "ring-2 ring-secondary scale-110"
            : "opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="Portugues"
        title="Portugues"
      >
        <BrazilFlag className="w-6 h-6 rounded-full object-cover" />
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
          locale === "en"
            ? "ring-2 ring-secondary scale-110"
            : "opacity-60 hover:opacity-100 hover:scale-105"
        }`}
        aria-label="English"
        title="English"
      >
        <USFlag className="w-6 h-6 rounded-full object-cover" />
      </button>
    </div>
  );
}
