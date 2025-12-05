"use client";

import Image from "next/image";
import ScrollAnimation from "@/components/common/ScrollAnimation";

export default function Stylist() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D5A47] mb-4">
              Stylist
            </h2>
            <p className="text-gray-600">スタイリスト紹介</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* 写真 */}
            <div className="w-64 h-64 relative flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80"
                alt="オーナースタイリスト 山田 花子"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* プロフィール */}
            <div className="text-center md:text-left">
              <p className="text-[#D4A574] text-sm tracking-wider mb-2">
                Owner Stylist
              </p>
              <h3 className="font-serif text-2xl text-[#2D5A47] mb-4">
                山田 花子
                <span className="text-sm text-gray-500 ml-2 font-sans">
                  Hanako Yamada
                </span>
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  都内有名サロンで15年の経験を積み、2020年に独立。
                  「お客様の髪と人生に寄り添う」をモットーに、
                  一人ひとりに合ったスタイルを提案しています。
                </p>
                <p>
                  特に髪質改善・グレイカラーを得意とし、
                  年齢による髪の変化にお悩みの方からご支持いただいています。
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">保有資格</p>
                <p className="text-gray-700 mt-1">
                  美容師免許 / ヘアケアマイスター / カラーコーディネーター
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* お客様の声 */}
        <ScrollAnimation delay={0.3}>
          <div className="mt-20">
            <h3 className="font-serif text-xl text-[#2D5A47] text-center mb-10">
              お客様の声
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "M.K様",
                  age: "40代",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
                  comment:
                    "髪の悩みを丁寧に聞いてくださり、自分に合ったケア方法を教えていただきました。",
                },
                {
                  name: "S.T様",
                  age: "50代",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                  comment:
                    "白髪染めなのに自然な仕上がり。友人にも褒められました。",
                },
                {
                  name: "A.Y様",
                  age: "30代",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                  comment:
                    "プライベート空間で落ち着いて過ごせます。毎回癒されています。",
                },
              ].map((voice) => (
                <div
                  key={voice.name}
                  className="bg-[#F5E6D3]/30 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={voice.image}
                      alt={`${voice.name}のお写真`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{voice.name}</p>
                      <p className="text-sm text-gray-500">{voice.age}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    「{voice.comment}」
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
