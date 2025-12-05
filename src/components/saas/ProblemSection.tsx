"use client";

import { motion } from "framer-motion";
import { Clock, HelpCircle, Wallet } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const problems = [
  {
    icon: Clock,
    title: "記事を書く時間がない",
    description: "日々の業務に追われて、ブログ更新が後回しに...",
  },
  {
    icon: HelpCircle,
    title: "SEO対策がわからない",
    description: "検索上位を取るには何を書けばいいの？",
  },
  {
    icon: Wallet,
    title: "外注すると高い",
    description: "1記事数万円...継続するには予算が足りない",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
              PROBLEM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              こんなお悩みありませんか？
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ScrollAnimation key={problem.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-6">
                  <problem.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
