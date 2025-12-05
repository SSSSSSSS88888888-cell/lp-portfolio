"use client";

import { MapPin, Phone, Clock, Calendar } from "lucide-react";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const info = [
  {
    icon: MapPin,
    label: "住所",
    value: "東京都渋谷区神宮前3-21-5 BLOOMビル 2F",
  },
  {
    icon: Phone,
    label: "電話番号",
    value: "03-1234-5678",
  },
  {
    icon: Clock,
    label: "営業時間",
    value: "10:00 - 19:00（最終受付 17:00）",
  },
  {
    icon: Calendar,
    label: "定休日",
    value: "毎週月曜日・第2火曜日",
  },
];

export default function SalonInfo() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D5A47] mb-4">
              Salon Info
            </h2>
            <p className="text-gray-600">サロン情報</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 情報 */}
          <ScrollAnimation delay={0.1}>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-serif text-xl text-[#2D5A47] mb-6">
                hair salon BLOOM
              </h3>

              <div className="space-y-6">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#2D5A47]/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#2D5A47]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">アクセス</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  東京メトロ「表参道駅」A2出口より徒歩5分
                  <br />
                  JR「原宿駅」竹下口より徒歩10分
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* 地図 */}
          <ScrollAnimation delay={0.2}>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.169634095417!2d139.70540687677!3d35.66715797259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca44c6c46fd%3A0x6f59c8d2b8f39c99!2z5aSp54Gt!5e0!3m2!1sja!2sjp!4v1699999999999!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="hair salon BLOOM アクセスマップ"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
