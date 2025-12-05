"use client";

import { motion } from "framer-motion";
import { FileText, Layers, Users, HelpCircle } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const challenges = [
  {
    icon: FileText,
    title: "紙の業務が減らない",
    description: "申請書、報告書、請求書...紙とハンコの業務に時間を取られている",
  },
  {
    icon: Layers,
    title: "システムが乱立している",
    description: "部署ごとにバラバラのツール。データ連携ができず二重入力が発生",
  },
  {
    icon: Users,
    title: "DX人材がいない",
    description: "ITに詳しい社員がいない。誰に相談すればいいかわからない",
  },
  {
    icon: HelpCircle,
    title: "何から始めればいいかわからない",
    description: "DXが大事なのはわかるが、自社に何が必要か判断できない",
  },
];

export default function Challenges() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-red-100 text-red-600 text-sm font-medium rounded mb-4">
              CHALLENGES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              こんな課題を抱えていませんか？
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <ScrollAnimation key={challenge.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white p-6 rounded-lg border-l-4 border-[#1E293B] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center">
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1E293B] mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-lg text-[#1E293B] font-medium">
              これらの課題、
              <span className="text-blue-500">SHIFT Partners</span>
              が解決します
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
