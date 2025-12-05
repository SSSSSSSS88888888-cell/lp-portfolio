"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageSquare,
  Image,
  Share2,
  Users,
  History,
} from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const features = [
  {
    icon: Search,
    title: "SEO最適化",
    description: "検索エンジンに最適化された構成で、上位表示を狙えます",
  },
  {
    icon: MessageSquare,
    title: "自然な日本語",
    description: "違和感のない、読みやすい日本語文章を生成します",
  },
  {
    icon: Image,
    title: "画像提案",
    description: "記事に合った画像を自動で提案。挿入位置も最適化",
  },
  {
    icon: Share2,
    title: "WordPress連携",
    description: "ワンクリックでWordPressに下書き保存できます",
  },
  {
    icon: Users,
    title: "チーム共有",
    description: "チームメンバーとプロジェクトを共有・共同編集",
  },
  {
    icon: History,
    title: "履歴管理",
    description: "生成した記事は全て履歴に保存。いつでも再編集可能",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
              FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              充実の機能
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ライティングに必要な機能を全て搭載。
              初心者からプロまで、誰でも簡単に使えます。
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollAnimation key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-purple-200 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
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
