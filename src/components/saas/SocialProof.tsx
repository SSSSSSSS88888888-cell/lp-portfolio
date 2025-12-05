"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const stats = [
  { value: 500, suffix: "社", label: "導入企業" },
  { value: 50000, suffix: "件", label: "生成記事数" },
  { value: 98, suffix: "%", label: "継続率" },
];

const testimonials = [
  {
    name: "田中 健太",
    role: "マーケティングマネージャー",
    company: "株式会社テックスタート",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    content:
      "記事作成の時間が1/10に短縮されました。品質も高く、修正もほとんど不要です。",
    rating: 5,
  },
  {
    name: "佐藤 美咲",
    role: "コンテンツディレクター",
    company: "メディア株式会社",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    content:
      "SEO対策に悩んでいましたが、WriteAIのおかげで検索順位が大幅に改善しました。",
    rating: 5,
  },
  {
    name: "山本 誠",
    role: "フリーランスブロガー",
    company: "",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content:
      "個人ブログの更新頻度を上げることができ、収益も2倍になりました。",
    rating: 5,
  },
];

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 導入実績 */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full mb-4">
              SOCIAL PROOF
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              導入企業
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                500社
              </span>
              突破
            </h2>
          </div>
        </ScrollAnimation>

        {/* 数字 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollAnimation key={stat.label} delay={index * 0.1}>
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* 企業ロゴ（プレースホルダー） */}
        <ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-8 mb-20 opacity-50">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm"
              >
                LOGO {i + 1}
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* お客様の声 */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">お客様の声</h3>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                {/* 星評価 */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                      {testimonial.company && ` / ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
