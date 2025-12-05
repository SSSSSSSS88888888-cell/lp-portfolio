"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Rocket, HeartHandshake } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const steps = [
  {
    icon: MessageSquare,
    title: "ヒアリング",
    duration: "1-2週間",
    description: "現状の業務フローや課題をヒアリング。経営層から現場まで幅広くお話を伺います。",
  },
  {
    icon: Target,
    title: "戦略策定",
    duration: "2-4週間",
    description: "分析結果をもとにDX戦略を策定。優先順位と具体的なアクションプランを提示します。",
  },
  {
    icon: Rocket,
    title: "導入支援",
    duration: "1-6ヶ月",
    description: "計画に基づきシステム導入を実行。ベンダー調整や社内調整もサポートします。",
  },
  {
    icon: HeartHandshake,
    title: "運用サポート",
    duration: "継続",
    description: "導入後も月次で定例会を実施。運用課題の解決と次の施策を提案し続けます。",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              支援の流れ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ヒアリングから運用定着まで、一貫して伴走します
            </p>
          </div>
        </ScrollAnimation>

        <div className="relative">
          {/* タイムライン線 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-gray-800/50 p-6 rounded-lg border border-gray-700"
                >
                  {/* ステップ番号 */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                    STEP {index + 1}
                  </div>

                  {/* アイコン */}
                  <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {step.duration}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* 接続矢印（デスクトップのみ） */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-[#1E293B] rounded-full flex items-center justify-center border-2 border-blue-500">
                        <span className="text-blue-500">→</span>
                      </div>
                    </div>
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
