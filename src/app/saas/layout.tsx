import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WriteAI - AIライティングアシスタント | LP Portfolio",
  description:
    "AIがあなたのライティングを加速。SEO最適化された高品質な記事を、誰でも簡単に作成できるAIライティングツール。",
  openGraph: {
    title: "WriteAI - AIライティングアシスタント",
    description:
      "AIがあなたのライティングを加速。SEO最適化された高品質な記事を作成。",
    type: "website",
  },
};

export default function SaaSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
