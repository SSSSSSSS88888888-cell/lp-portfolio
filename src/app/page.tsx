"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Store, Briefcase } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
  {
    title: "SaaS LP",
    description: "SaaSプロダクト向けのモダンなランディングページ",
    href: "/saas",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    features: ["ヒーローセクション", "機能紹介", "料金プラン", "FAQ"],
  },
  {
    title: "Salon LP",
    description: "美容院・サロン向けのエレガントなランディングページ",
    href: "/salon",
    icon: Store,
    gradient: "from-pink-500 to-rose-500",
    features: ["ビジュアル重視", "メニュー紹介", "スタッフ紹介", "予約導線"],
  },
  {
    title: "Consulting LP",
    description: "BtoB・コンサルティング向けの信頼感のあるランディングページ",
    href: "/consulting",
    icon: Briefcase,
    gradient: "from-slate-600 to-slate-800",
    features: ["実績紹介", "サービス詳細", "お問い合わせ", "事例紹介"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              LP Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Next.js 14 + Tailwind CSS + Framer Motion で作成した
              <br />
              ランディングページのポートフォリオ
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
          >
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              Next.js 14
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">
              Framer Motion
            </span>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            LPサンプル一覧
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item.href} className="block group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-r ${item.gradient} p-8 text-white`}
                    >
                      <item.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        主な機能
                      </h4>
                      <ul className="space-y-2">
                        {item.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        <span>詳しく見る</span>
                        <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Built with Next.js 14, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}
