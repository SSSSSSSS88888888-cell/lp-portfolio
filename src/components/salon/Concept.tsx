"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const concepts = [
  {
    title: "髪と向き合う",
    description:
      "一人ひとりの髪質、ライフスタイル、お悩みに真摯に向き合います。カウンセリングを大切にし、あなただけの最適なスタイルをご提案します。",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    imageAlt: "丁寧なヘアカット",
  },
  {
    title: "素材を活かす",
    description:
      "髪本来の美しさを引き出すことを大切にしています。過度なダメージを与えず、自然な艶と柔らかさを保つ施術を心がけています。",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    imageAlt: "美しい艶のある髪",
  },
  {
    title: "特別な時間",
    description:
      "完全予約制のプライベート空間で、日常から離れたリラックスタイムをお過ごしいただけます。あなただけの特別なひとときを。",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    imageAlt: "落ち着いたサロン空間",
  },
];

export default function Concept() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 bg-[#F5E6D3]">
      <div className="max-w-6xl mx-auto px-4">
        {/* セクションタイトル */}
        <ScrollAnimation>
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-8 mb-6">
              {/* 縦書きテキスト */}
              <p
                className="font-serif text-[#2D5A47] text-lg tracking-widest"
                style={{ writingMode: "vertical-rl" }}
              >
                大切にしていること
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2D5A47]">
                Concept
              </h2>
            </div>
          </div>
        </ScrollAnimation>

        {/* コンセプト一覧 */}
        <div className="space-y-32">
          {concepts.map((concept, index) => (
            <ScrollAnimation key={concept.title} delay={0.1}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* 画像 */}
                <motion.div
                  className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden"
                  style={{ y: index % 2 === 0 ? y : undefined }}
                >
                  <Image
                    src={concept.image}
                    alt={concept.imageAlt}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* テキスト */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <span className="text-[#D4A574] text-sm tracking-widest mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#2D5A47] mb-6">
                    {concept.title}
                  </h3>
                  <p className="text-gray-600 leading-loose">
                    {concept.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
