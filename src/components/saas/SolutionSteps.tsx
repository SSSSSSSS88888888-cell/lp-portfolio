"use client";

import { motion } from "framer-motion";
import { Search, Cpu, Send } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "キーワード入力",
    description: "書きたいテーマやキーワードを入力するだけ。難しい設定は一切不要です。",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "02",
    icon: Cpu,
    title: "AIが記事生成",
    description: "最新のAIが、SEOに最適化された高品質な記事を数分で作成します。",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "03",
    icon: Send,
    title: "編集して公開",
    description: "生成された記事を確認・編集して、そのまま公開。WordPressにも連携可能。",
    color: "from-cyan-500 to-cyan-600",
  },
];

export default function SolutionSteps() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full mb-4">
              SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WriteAIなら
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                3ステップ
              </span>
              で解決
            </h2>
          </div>
        </ScrollAnimation>

        <div className="relative">
          {/* 接続線 */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 0.2}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
                >
                  {/* ステップ番号 */}
                  <div
                    className={`absolute -top-4 left-8 px-4 py-1 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-full`}
                  >
                    STEP {step.number}
                  </div>

                  <div className="pt-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl mb-6`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* アニメーション矢印 */}
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md items-center justify-center z-10"
                    >
                      <span className="text-purple-500">→</span>
                    </motion.div>
                  )}
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
