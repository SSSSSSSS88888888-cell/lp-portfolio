"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const menuCategories = [
  {
    name: "カット",
    items: [
      { name: "カット", price: "¥6,600", time: "60分", description: "シャンプー・ブロー込み" },
      { name: "前髪カット", price: "¥1,100", time: "15分", description: "" },
    ],
  },
  {
    name: "カラー",
    items: [
      { name: "リタッチカラー", price: "¥6,600", time: "60分", description: "根元〜3cm" },
      { name: "フルカラー", price: "¥8,800〜", time: "90分", description: "髪の長さにより変動" },
      { name: "グレイカラー", price: "¥7,700〜", time: "90分", description: "白髪染め" },
      { name: "ハイライト", price: "¥5,500〜", time: "60分", description: "部分的な明るさをプラス" },
    ],
  },
  {
    name: "パーマ",
    items: [
      { name: "デジタルパーマ", price: "¥13,200〜", time: "150分", description: "持ちの良い柔らかカール" },
      { name: "コールドパーマ", price: "¥9,900〜", time: "120分", description: "ふんわりナチュラルウェーブ" },
      { name: "ポイントパーマ", price: "¥5,500〜", time: "60分", description: "前髪・トップなど部分的に" },
    ],
  },
  {
    name: "トリートメント",
    items: [
      { name: "クイックトリートメント", price: "¥2,200", time: "15分", description: "手軽にツヤ感アップ" },
      { name: "プレミアムトリートメント", price: "¥5,500", time: "30分", description: "集中補修ケア" },
      { name: "髪質改善トリートメント", price: "¥11,000", time: "60分", description: "芯から髪を改善" },
    ],
  },
];

export default function Menu() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D5A47] mb-4">
              Menu
            </h2>
            <p className="text-gray-600">施術メニュー・料金</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <ScrollAnimation key={category.name} delay={categoryIndex * 0.1}>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="font-serif text-xl text-[#2D5A47] mb-6 pb-3 border-b border-[#D4A574]/30">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="flex flex-wrap items-baseline justify-between gap-2 py-2"
                    >
                      <div className="flex-1">
                        <span className="text-gray-800">{item.name}</span>
                        {item.description && (
                          <span className="text-sm text-gray-500 ml-2">
                            {item.description}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{item.time}</span>
                        <span className="font-medium text-[#2D5A47]">
                          {item.price}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <p className="text-center text-gray-500 text-sm mt-8">
            ※ 価格は全て税込です
            <br />
            ※ 髪の長さ・状態により価格が変動する場合があります
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
