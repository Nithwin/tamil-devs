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
    <div className={`mb-14 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
        <span className="text-slate-100">{titleLight} </span>
        <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
