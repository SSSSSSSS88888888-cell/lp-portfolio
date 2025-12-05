"use client";

import Link from "next/link";
import { ArrowLeft, Instagram } from "lucide-react";
import HeroSalon from "@/components/salon/HeroSalon";
import Concept from "@/components/salon/Concept";
import TargetSection from "@/components/salon/TargetSection";
import Menu from "@/components/salon/Menu";
import Stylist from "@/components/salon/Stylist";
import SalonInfo from "@/components/salon/SalonInfo";
import Reservation from "@/components/salon/Reservation";

export default function SalonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ナビゲーション（透過ヘッダー） */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">ポートフォリオに戻る</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-white/80 text-sm">
            <a href="#concept" className="hover:text-white transition-colors">
              コンセプト
            </a>
            <a href="#menu" className="hover:text-white transition-colors">
              メニュー
            </a>
            <a href="#stylist" className="hover:text-white transition-colors">
              スタイリスト
            </a>
            <a href="#access" className="hover:text-white transition-colors">
              アクセス
            </a>
            <a
              href="#reservation"
              className="px-5 py-2 bg-[#D4A574] text-white hover:bg-[#c49664] transition-colors"
            >
              ご予約
            </a>
          </div>
        </div>
      </nav>

      {/* ヒーロー */}
      <HeroSalon />

      {/* コンセプト */}
      <div id="concept">
        <Concept />
      </div>

      {/* こんな方へ */}
      <TargetSection />

      {/* メニュー */}
      <div id="menu">
        <Menu />
      </div>

      {/* スタイリスト */}
      <div id="stylist">
        <Stylist />
      </div>

      {/* サロン情報 */}
      <div id="access">
        <SalonInfo />
      </div>

      {/* 予約 */}
      <Reservation />

      {/* フッター */}
      <footer className="bg-[#2D5A47] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            {/* ロゴ */}
            <p className="text-[#D4A574] text-xs tracking-[0.3em] mb-2">
              hair salon
            </p>
            <h2 className="font-serif text-2xl tracking-wider mb-6">BLOOM</h2>

            {/* SNS */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@hairsalon_bloom</span>
            </a>

            {/* コピーライト */}
            <div className="text-center text-white/60 text-sm">
              <p>&copy; 2024 hair salon BLOOM. All rights reserved.</p>
              <p className="mt-2 text-xs">
                ※ これはポートフォリオ用のデモサイトです
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
