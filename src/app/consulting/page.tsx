import HeroConsulting from "@/components/consulting/HeroConsulting";
import Challenges from "@/components/consulting/Challenges";
import Services from "@/components/consulting/Services";
import Process from "@/components/consulting/Process";
import CaseStudies from "@/components/consulting/CaseStudies";
import WhyUs from "@/components/consulting/WhyUs";
import ContactForm from "@/components/consulting/ContactForm";
import FAQ from "@/components/common/FAQ";

const faqItems = [
  {
    question: "どのような企業が対象ですか？",
    answer:
      "従業員10名〜300名程度の中小企業が主な対象です。業種は問いませんが、特に製造業、小売業、IT企業、サービス業での支援実績が豊富です。",
  },
  {
    question: "費用はどのくらいかかりますか？",
    answer:
      "プロジェクトの規模や内容により異なりますが、スポットコンサルは月額30万円〜、DX推進支援は月額50万円〜が目安です。まずは無料相談でお見積りいたします。",
  },
  {
    question: "対応エリアはどこですか？",
    answer:
      "全国対応しております。オンラインでのミーティングを中心に、必要に応じて現地訪問も行います。リモートでも十分な成果を出せる体制を整えています。",
  },
  {
    question: "どのくらいの期間がかかりますか？",
    answer:
      "課題の把握と施策の立案に1〜2ヶ月、実行支援に3〜6ヶ月が標準的なスケジュールです。ただし、まずは小さく始めて成果を確認しながら進めることも可能です。",
  },
  {
    question: "自社でIT人材がいなくても大丈夫ですか？",
    answer:
      "はい、大丈夫です。ITに詳しい人材がいなくても進められるよう、わかりやすい説明と手厚いサポートを行います。必要に応じて、操作マニュアルの作成や社員研修も実施します。",
  },
  {
    question: "契約前に詳しい話を聞くことはできますか？",
    answer:
      "もちろんです。まずは無料相談（60分程度）で貴社の課題をお聞きし、どのような支援が可能かご説明いたします。その上で正式なご提案をさせていただきます。",
  },
];

export default function ConsultingPage() {
  return (
    <main>
      <HeroConsulting />
      <Challenges />
      <Services />
      <Process />
      <CaseStudies />
      <WhyUs />
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B]">
              よくあるご質問
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>
      <ContactForm />

      {/* フッター */}
      <footer className="bg-[#0F172A] text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-white font-bold text-xl mb-2">
                SHIFT Partners
              </p>
              <p className="text-sm">
                中小企業のDX推進を支援するコンサルティング会社
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                会社概要
              </a>
              <a href="#" className="hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="hover:text-white transition-colors">
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2024 SHIFT Partners Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
