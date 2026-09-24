import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "brand" | "outline";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
  const variantStyles = {
    default:
      "border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300",
    brand:
      "border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300",
    outline:
      "border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-700 dark:text-zinc-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
