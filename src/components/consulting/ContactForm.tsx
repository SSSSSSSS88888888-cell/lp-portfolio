"use client";

import { motion } from "framer-motion";
import { Send, Shield } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-[#1E293B]">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded mb-4">
              CONTACT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              無料相談のお申し込み
            </h2>
            <p className="text-gray-400">
              まずはお気軽にご相談ください。
              <br />
              貴社の課題をお聞きし、最適なソリューションをご提案します。
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <form className="bg-white rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="山田 太郎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="株式会社〇〇"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="example@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="03-1234-5678"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ご相談内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                placeholder="現在の課題やご要望をお聞かせください"
              />
            </div>

            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">
                  <a href="#" className="text-blue-500 hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意する
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Send className="w-5 h-5" />
              無料相談を申し込む
            </motion.button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>SSL暗号化通信で安全に送信されます</span>
            </div>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
