"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const services = [
  {
    title: "DX戦略策定",
    subtitle: "Strategy",
    description:
      "現状分析から始め、貴社に最適なDXロードマップを策定。優先順位を明確にし、投資対効果の高い施策から着手します。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    features: ["現状業務の可視化", "課題の優先順位付け", "3ヵ年ロードマップ策定"],
  },
  {
    title: "システム導入支援",
    subtitle: "Implementation",
    description:
      "ツール選定から導入、運用定着まで一貫してサポート。ベンダーに丸投げせず、貴社の立場で伴走します。",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    features: ["最適ツールの選定", "導入プロジェクト管理", "社内定着化支援"],
  },
  {
    title: "伴走サポート",
    subtitle: "Support",
    description:
      "導入後も継続的にサポート。運用課題の解決、追加施策の提案など、長期的なパートナーとして支援します。",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    features: ["月次定例ミーティング", "運用課題の解決", "追加施策の提案"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded mb-4">
              SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              サービス概要
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              戦略策定から導入、運用まで一貫して支援。
              貴社のDX推進を成功に導きます。
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} delay={index * 0.1}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* 画像 */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* テキスト */}
                <div className="w-full lg:w-1/2">
                  <span className="text-blue-500 text-sm font-medium tracking-wider">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E293B] mt-2 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600"
                  >
                    詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
