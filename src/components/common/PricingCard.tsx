"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollAnimation from "./ScrollAnimation";
import CTAButton from "./CTAButton";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

export default function PricingCard({
  name,
  price,
  features,
  isPopular = false,
  ctaText = "今すぐ始める",
  ctaHref = "#",
}: PricingCardProps) {
  return (
    <ScrollAnimation>
      <div
        className={cn(
          "relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-transform hover:-translate-y-1",
          isPopular ? "border-primary" : "border-gray-100"
        )}
      >
        {/* 人気バッジ */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
              人気No.1
            </span>
          </div>
        )}

        {/* プラン名 */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        {/* 価格 */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-1">/月</span>
        </div>

        {/* 機能リスト */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTAボタン */}
        <CTAButton
          href={ctaHref}
          variant={isPopular ? "primary" : "secondary"}
          gradient={isPopular}
          className="w-full"
        >
          {ctaText}
        </CTAButton>
      </div>
    </ScrollAnimation>
  );
}
