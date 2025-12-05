"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Palette } from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "完全レスポンシブ対応",
    description: "スマホ・タブレット・PCすべてのデバイスで最適な表示を実現",
  },
  {
    icon: Zap,
    title: "高速表示",
    description: "Next.jsの最適化により、Core Web Vitals スコア向上",
  },
  {
    icon: Palette,
    title: "スムーズなアニメーション",
    description: "Framer Motionによる滑らかで印象的なインタラクション",
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            強み
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
