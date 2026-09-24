import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}
