import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hair salon BLOOM - 大人の女性のためのプライベートサロン | LP Portfolio",
  description:
    "完全予約制のプライベート美容室。髪質改善やグレイカラーを得意とし、大人の女性の髪の悩みに寄り添います。",
  openGraph: {
    title: "hair salon BLOOM - 大人の女性のためのプライベートサロン",
    description:
      "完全予約制のプライベート美容室。髪質改善やグレイカラーを得意としています。",
    type: "website",
  },
};

export default function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
