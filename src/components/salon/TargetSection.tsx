"use client";

import { Check } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const targets = [
  "髪のダメージが気になる方",
  "他のサロンで満足できなかった方",
  "ゆっくりリラックスしたい方",
  "髪質に合ったケアを知りたい方",
  "白髪染めを自然に仕上げたい方",
  "年齢による髪の変化にお悩みの方",
];

export default function TargetSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D5A47] mb-4">
              こんな方へ
            </h2>
            <p className="text-gray-600">
              一つでも当てはまる方、ぜひご相談ください
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {targets.map((target, index) => (
            <ScrollAnimation key={target} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-6 bg-[#F5E6D3]/30 rounded-lg hover:bg-[#F5E6D3]/50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-[#2D5A47] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700">{target}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
