"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeroSaas from "@/components/saas/HeroSaas";
import ProblemSection from "@/components/saas/ProblemSection";
import SolutionSteps from "@/components/saas/SolutionSteps";
import Features from "@/components/saas/Features";
import SocialProof from "@/components/saas/SocialProof";
import PricingSection from "@/components/saas/PricingSection";
import FinalCTA from "@/components/saas/FinalCTA";
import FAQ from "@/components/common/FAQ";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const faqItems = [
  {
    question: "無料プランでどこまで使えますか？",
    answer:
      "無料プランでは月5記事まで生成可能です。基本的なSEO最適化機能も利用でき、WriteAIの使い心地を十分にお試しいただけます。",
  },
  {
    question: "生成された記事の著作権はどうなりますか？",
    answer:
      "生成された記事の著作権は、すべてお客様に帰属します。商用利用も含め、自由にご利用いただけます。",
  },
  {
    question: "他のライティングAIとの違いは何ですか？",
    answer:
      "WriteAIは日本語に特化して開発されており、自然で読みやすい文章を生成します。また、SEO最適化機能が標準搭載されているため、検索上位を狙いやすい記事構成が可能です。",
  },
  {
    question: "プラン変更やキャンセルはいつでもできますか？",
    answer:
      "はい、プランのアップグレード・ダウングレード、解約はいつでも可能です。解約した場合、次の請求日まではサービスをご利用いただけます。",
  },
  {
    question: "APIは利用できますか？",
    answer:
      "BusinessプランではAPIアクセスが可能です。お客様のシステムやワークフローに組み込んで、自動化を実現できます。",
  },
];

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">ポートフォリオに戻る</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              WriteAI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              ログイン
            </button>
            <button className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity">
              無料で始める
            </button>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <HeroSaas />

      {/* 課題提起 */}
      <ProblemSection />

      {/* 解決策 */}
      <SolutionSteps />

      {/* 機能紹介 */}
      <Features />

      {/* 導入実績 */}
      <SocialProof />

      {/* 料金プラン */}
      <PricingSection />

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                よくある質問
              </h2>
            </div>
          </ScrollAnimation>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* 最終CTA */}
      <FinalCTA />

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WriteAI
              </span>
              <p className="mt-4 text-gray-400 text-sm">
                AIでライティングを、もっとシンプルに。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">プロダクト</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    機能
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    料金
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    ヘルプセンター
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ステータス
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    運営会社
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 WriteAI. All rights reserved.</p>
            <p className="mt-2 text-xs">
              ※ これはポートフォリオ用のデモサイトです
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
