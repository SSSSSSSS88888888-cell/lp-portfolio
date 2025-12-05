"use client";

import { motion } from "framer-motion";
import { Building2, Users, PiggyBank, Check, X } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const reasons = [
  {
    icon: Building2,
    title: "中小企業専門",
    description:
      "大企業向けではなく、中小企業のリソースや予算に合わせた現実的な提案を行います。",
  },
  {
    icon: Users,
    title: "伴走型支援",
    description:
      "コンサルレポートを納品して終わりではありません。導入から定着まで、一緒に走り続けます。",
  },
  {
    icon: PiggyBank,
    title: "費用対効果重視",
    description:
      "投資に見合うリターンを重視。まずは小さく始めて、成果を確認しながら拡大します。",
  },
];

const comparison = [
  { item: "中小企業への理解", us: true, others: false },
  { item: "導入後の伴走サポート", us: true, others: false },
  { item: "予算に応じた柔軟な提案", us: true, others: false },
  { item: "経営目線でのアドバイス", us: true, others: true },
  { item: "最新技術の知見", us: true, others: true },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded mb-4">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              選ばれる理由
            </h2>
          </div>
        </ScrollAnimation>

        {/* 3つの強み */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <ScrollAnimation key={reason.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-gray-50 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-lg mb-6">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* 比較表 */}
        <ScrollAnimation>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#1E293B] text-center mb-8">
              他社との違い
            </h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1E293B] text-white text-sm font-medium">
                <div className="p-4"></div>
                <div className="p-4 text-center">SHIFT Partners</div>
                <div className="p-4 text-center">一般的なコンサル</div>
              </div>
              {comparison.map((row, index) => (
                <div
                  key={row.item}
                  className={`grid grid-cols-3 text-sm ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="p-4 text-gray-700">{row.item}</div>
                  <div className="p-4 flex justify-center">
                    {row.us ? (
                      <Check className="w-5 h-5 text-blue-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                  <div className="p-4 flex justify-center">
                    {row.others ? (
                      <Check className="w-5 h-5 text-gray-400" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
