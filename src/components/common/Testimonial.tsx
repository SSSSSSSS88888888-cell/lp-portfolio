"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image?: string;
  rating?: number;
}

export default function Testimonial({
  name,
  role,
  content,
  image,
  rating = 5,
}: TestimonialProps) {
  return (
    <ScrollAnimation>
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        {/* 星評価 */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* コンテンツ */}
        <p className="text-gray-700 leading-relaxed mb-6">
          &ldquo;{content}&rdquo;
        </p>

        {/* ユーザー情報 */}
        <div className="flex items-center gap-4">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
