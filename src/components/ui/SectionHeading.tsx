import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  titleLight: string;
  titleHighlight: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  badge,
  titleLight,
  titleHighlight,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant="brand">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-3 leading-tight">
        <span>{titleLight} </span>
        <span className="text-blue-600 dark:text-blue-400 font-extrabold">{titleHighlight}</span>
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
