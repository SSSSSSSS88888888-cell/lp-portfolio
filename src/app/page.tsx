"use client";

import { motion } from "framer-motion";
import { Code, FileCode, Wrench, FormInput, Github, Twitter } from "lucide-react";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import WorkCard from "@/components/portfolio/WorkCard";

const works = [
  {
    title: "SaaS LP - タスク管理ツール",
    category: "SaaS / Webサービス",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    href: "/saas",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "美容院LP - Hair Salon",
    category: "店舗 / 美容",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    href: "/salon",
    tags: ["Next.js", "アニメーション", "レスポンシブ"],
  },
  {
    title: "BtoB LP - コンサルティング",
    category: "BtoB / 企業向け",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    href: "/consulting",
    tags: ["Next.js", "フォーム実装", "CTA最適化"],
  },
];

const services = [
  {
    icon: Code,
    title: "LPコーディング",
    description: "デザインカンプからの正確なコーディング",
  },
  {
    icon: FileCode,
    title: "デザイン → コーディング",
    description: "デザインから一貫した制作が可能",
  },
  {
    icon: Wrench,
    title: "既存LPの改修・高速化",
    description: "パフォーマンス改善とモダン化",
  },
  {
    icon: FormInput,
    title: "フォーム実装",
    description: "お問い合わせ・予約フォームの構築",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* ヒーローセクション */}
      <Hero />

      {/* 強みセクション */}
      <Skills />

      {/* 作品一覧セクション */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-slate-400">制作実績</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <WorkCard
                key={work.href}
                {...work}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 対応可能な業務 */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-slate-400">対応可能な業務</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* ソーシャルリンク */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* お仕事依頼 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-slate-400 mb-4">
                お仕事のご依頼はクラウドワークスから
              </p>
              <a
                href="https://crowdworks.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                クラウドワークスで依頼する
              </a>
            </motion.div>

            {/* コピーライト */}
            <p className="text-slate-500 text-sm">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
