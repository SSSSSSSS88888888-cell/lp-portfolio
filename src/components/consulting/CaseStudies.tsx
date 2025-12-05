"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const cases = [
  {
    industry: "IT企業",
    company: "A社（従業員50名）",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    challenge: "紙の申請書類が多く、承認に時間がかかっていた",
    solution: "ワークフローシステムを導入し、申請・承認を電子化",
    results: [
      { label: "承認時間", before: "3日", after: "2時間", improvement: "90%短縮" },
      { label: "紙使用量", before: "月5000枚", after: "月500枚", improvement: "90%削減" },
    ],
  },
  {
    industry: "製造業",
    company: "B社（従業員120名）",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80",
    challenge: "在庫管理がExcelで、欠品や過剰在庫が頻発",
    solution: "クラウド在庫管理システムを導入し、リアルタイムで把握",
    results: [
      { label: "在庫精度", before: "75%", after: "98%", improvement: "23pt改善" },
      { label: "欠品率", before: "月10件", after: "月1件", improvement: "90%削減" },
    ],
  },
  {
    industry: "小売業",
    company: "C社（店舗数8店舗）",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    challenge: "各店舗の売上データが本部で集約できていない",
    solution: "POSシステム刷新とBIツール導入で売上を可視化",
    results: [
      { label: "レポート作成", before: "週3日", after: "自動化", improvement: "工数ゼロ" },
      { label: "売上", before: "-", after: "-", improvement: "前年比115%" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-600 text-sm font-medium rounded mb-4">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
              導入事例
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              業種・規模を問わず、多くの企業様のDXを支援してきました
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <ScrollAnimation key={caseStudy.company} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* 画像 */}
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1E293B] text-white text-xs font-medium rounded">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-6">
                  <h3 className="font-bold text-[#1E293B] mb-4">
                    {caseStudy.company}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">課題</p>
                      <p className="text-sm text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">解決策</p>
                      <p className="text-sm text-gray-700">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* 成果 */}
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      成果
                    </p>
                    <div className="space-y-2">
                      {caseStudy.results.map((result) => (
                        <div
                          key={result.label}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-600">{result.label}</span>
                          <span className="font-bold text-blue-500">
                            {result.improvement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600"
            >
              すべての事例を見る
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
