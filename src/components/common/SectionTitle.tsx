"use client";

import { cn } from "@/lib/utils";
import ScrollAnimation from "./ScrollAnimation";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <ScrollAnimation
      className={cn("mb-12", align === "center" ? "text-center" : "text-left")}
    >
      {subtitle && (
        <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
        {title}
        <span
          className={cn(
            "absolute -bottom-2 left-0 h-1 bg-primary rounded-full",
            align === "center" ? "w-1/2 left-1/4" : "w-16"
          )}
        />
      </h2>
    </ScrollAnimation>
  );
}
