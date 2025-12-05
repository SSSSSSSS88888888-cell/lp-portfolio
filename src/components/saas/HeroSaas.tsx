"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSaas() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AIが書く。あなたは、伸ばすだけ。";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600">
      {/* 幾何学模様の背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* 左側: テキスト */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>AIライティングツール</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 min-h-[1.5em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            キーワードを入れるだけで、SEOに強い記事を自動生成
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="group relative px-8 py-4 bg-white text-purple-600 font-semibold rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center justify-center gap-2">
                無料で始める
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              デモを見る
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="mt-6 text-white/60 text-sm"
          >
            クレジットカード不要 ・ 今すぐ無料で開始
          </motion.p>
        </div>

        {/* 右側: ダッシュボードモックアップ */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/20">
            {/* ブラウザヘッダー */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-xs text-white/60">
                  app.writeai.jp
                </div>
              </div>
            </div>

            {/* ダッシュボード本体 */}
            <div className="bg-slate-900 rounded-b-xl p-6">
              {/* サイドバー + メイン */}
              <div className="flex gap-4">
                {/* サイドバー */}
                <div className="hidden md:block w-48 space-y-3">
                  <div className="h-8 bg-purple-500/30 rounded-lg" />
                  <div className="h-6 bg-white/10 rounded w-3/4" />
                  <div className="h-6 bg-white/10 rounded w-1/2" />
                  <div className="h-6 bg-white/10 rounded w-2/3" />
                </div>

                {/* メインコンテンツ */}
                <div className="flex-1 space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 bg-white/10 rounded-lg" />
                    <div className="w-24 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-full" />
                    <div className="h-4 bg-white/15 rounded w-5/6" />
                    <div className="h-4 bg-white/10 rounded w-4/6" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-16 bg-purple-500/20 rounded-lg" />
                    <div className="h-16 bg-blue-500/20 rounded-lg" />
                    <div className="h-16 bg-cyan-500/20 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 装飾 */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl blur-xl opacity-50" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-xl opacity-50" />
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
