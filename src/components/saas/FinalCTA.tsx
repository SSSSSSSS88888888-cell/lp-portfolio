"use client";

import { motion } from "framer-motion";
import { Mail, Shield, CreditCard, Clock } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const badges = [
  { icon: CreditCard, text: "クレジットカード不要" },
  { icon: Clock, text: "5分で開始" },
  { icon: Shield, text: "いつでも解約OK" },
];

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            今すぐ無料で始めましょう
          </h2>
          <p className="text-xl text-white/80 mb-10">
            メールアドレスを入力するだけで、すぐに使い始められます
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <form className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/25"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl transition-shadow"
              >
                無料で始める
              </motion.button>
            </div>
          </form>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 text-white/80"
              >
                <badge.icon className="w-5 h-5" />
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
