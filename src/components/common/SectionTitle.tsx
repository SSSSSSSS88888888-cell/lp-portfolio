"use client";

import ScrollAnimation from "./ScrollAnimation";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-12", alignClasses[align], className)}>
      {subtitle && (
        <ScrollAnimation delay={0}>
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-2">
            {subtitle}
          </span>
        </ScrollAnimation>
      )}
      <ScrollAnimation delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {title}
        </h2>
      </ScrollAnimation>
      {description && (
        <ScrollAnimation delay={0.2}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </ScrollAnimation>
      )}
    </div>
  );
}
