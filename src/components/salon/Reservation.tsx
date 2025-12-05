"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, AlertCircle } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D5A47] mb-4">
              Reservation
            </h2>
            <p className="text-gray-600">ご予約方法</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="bg-[#F5E6D3]/30 rounded-lg p-8 md:p-12 text-center">
            <p className="text-gray-700 mb-8 leading-relaxed">
              ご予約はLINEまたはお電話にて承っております。
              <br />
              初めての方もお気軽にご連絡ください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#06C755] text-white font-medium rounded-full hover:bg-[#05b34c] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                LINEで予約する
              </motion.a>

              <motion.a
                href="tel:03-1234-5678"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2D5A47] text-white font-medium rounded-full hover:bg-[#234839] transition-colors"
              >
                <Phone className="w-5 h-5" />
                電話で予約する
              </motion.a>
            </div>

            <p className="text-sm text-gray-500">
              電話受付時間: 10:00 - 18:00（定休日を除く）
            </p>
          </div>
        </ScrollAnimation>

        {/* 注意事項 */}
        <ScrollAnimation delay={0.2}>
          <div className="mt-12 p-6 border border-[#D4A574]/30 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-[#D4A574]" />
              <h3 className="font-medium text-gray-800">ご予約について</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 完全予約制となっております</li>
              <li>• キャンセル・変更は前日18時までにご連絡ください</li>
              <li>• 当日キャンセルはキャンセル料（施術料金の50%）を頂戴いたします</li>
              <li>• 初めてのお客様はカウンセリングのお時間を頂くため、施術時間に余裕を持ってご来店ください</li>
            </ul>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
