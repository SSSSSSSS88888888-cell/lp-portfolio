"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "¥0",
    description: "まずは無料でお試し",
    features: [
      "月5記事まで生成",
      "基本的なSEO最適化",
      "メールサポート",
    ],
    cta: "無料で始める",
    popular: false,
  },
  {
    name: "Pro",
    price: "¥2,980",
    description: "個人・小規模チーム向け",
    features: [
      "月50記事まで生成",
      "高度なSEO最適化",
      "画像提案機能",
      "WordPress連携",
      "優先サポート",
    ],
    cta: "Proを始める",
    popular: true,
  },
  {
    name: "Business",
    price: "¥9,800",
    description: "企業・大規模チーム向け",
    features: [
      "無制限の記事生成",
      "高度なSEO最適化",
      "画像提案機能",
      "WordPress連携",
      "チーム共有（10名まで）",
      "API アクセス",
      "専属サポート",
    ],
    cta: "お問い合わせ",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
              PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              シンプルな料金プラン
            </h2>
            <p className="text-gray-600">
              14日間の無料トライアル付き。いつでもキャンセル可能です。
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <ScrollAnimation key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all ${
                  plan.popular
                    ? "border-purple-500 scale-105"
                    : "border-gray-100"
                }`}
              >
                {/* 人気バッジ */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      人気 No.1
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/月</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
