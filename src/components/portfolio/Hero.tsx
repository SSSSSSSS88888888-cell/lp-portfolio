"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const thumbnails = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    alt: "SaaS LP",
    label: "SaaS",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "美容院LP",
    label: "Beauty",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "BtoB LP",
    label: "BtoB",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-32">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* キャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            売れるLPを、
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              最速で。
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto">
            React × アニメーションで、成果の出るLP制作
          </p>
        </motion.div>

        {/* サムネイルグリッド */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {thumbnails.map((thumb, index) => (
            <motion.div
              key={thumb.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-video rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl"
            >
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
                  {thumb.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-slate-500 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
