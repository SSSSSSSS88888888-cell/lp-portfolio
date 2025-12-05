# LP Portfolio

ランディングページ制作のポートフォリオサイトです。Next.js 14 (App Router)、Tailwind CSS、Framer Motionを使用して構築しています。

## デモ

各LPサンプルは以下のURLでアクセスできます：

- **トップページ（ポートフォリオ一覧）**: `/`
- **SaaS LP（WriteAI）**: `/saas`
- **美容院LP（hair salon BLOOM）**: `/salon`
- **コンサルティングLP（SHIFT Partners）**: `/consulting`

## 使用技術

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| アニメーション | Framer Motion |
| アイコン | Lucide React |
| フォント | Inter, Noto Sans JP, Noto Serif JP |
| 画像最適化 | next/image |

## 各LPの説明

### 1. WriteAI（SaaS LP）
架空のAIライティングツールのランディングページ。
- **テーマ**: パープル〜ブルーのグラデーション
- **特徴**: タイプライターアニメーション、カウントアップ統計、ダッシュボードモックアップ
- **セクション**: ヒーロー、課題提起、解決策、機能紹介、導入実績、料金プラン、FAQ、CTA

### 2. hair salon BLOOM（美容院LP）
大人の女性向けプライベートサロンのランディングページ。
- **テーマ**: ベージュ・ゴールドのエレガントなデザイン
- **特徴**: 縦書きテキスト、パララックス効果、セリフ体フォント
- **セクション**: ヒーロー、コンセプト、ターゲット、メニュー、スタイリスト、サロン情報、予約

### 3. SHIFT Partners（コンサルティングLP）
中小企業向けDXコンサルティング会社のランディングページ。
- **テーマ**: ダークネイビーのビジネステーマ
- **特徴**: 統計カウントアップ、タイムラインプロセス、比較表
- **セクション**: ヒーロー、課題、サービス、プロセス、導入事例、選ばれる理由、FAQ、お問い合わせ

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ（ポートフォリオ一覧）
│   ├── globals.css         # グローバルスタイル
│   ├── saas/
│   │   ├── layout.tsx      # SaaS LP メタデータ
│   │   └── page.tsx        # SaaS LP ページ
│   ├── salon/
│   │   ├── layout.tsx      # 美容院LP メタデータ
│   │   └── page.tsx        # 美容院LP ページ
│   └── consulting/
│       └── page.tsx        # コンサルティングLP ページ
├── components/
│   ├── common/             # 共通コンポーネント
│   │   ├── ScrollAnimation.tsx
│   │   ├── CTAButton.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonial.tsx
│   │   └── PricingCard.tsx
│   ├── portfolio/          # ポートフォリオトップ用
│   ├── saas/               # SaaS LP用
│   ├── salon/              # 美容院LP用
│   └── consulting/         # コンサルティングLP用
└── lib/
    └── utils.ts            # ユーティリティ関数
```

## ローカル起動方法

### 必要要件

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd lp-portfolio

# 依存パッケージをインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアクセスできます。

### プロダクションビルド

```bash
npm run build
npm start
```

## 対応ブラウザ

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## アクセシビリティ対応

- `prefers-reduced-motion` に対応（アニメーション軽減）
- フォーカス状態の可視化
- 適切なalt属性の設定
- 十分なカラーコントラスト
- タップターゲットサイズの確保（44px以上）

## 注意事項

- 本サイトの画像はUnsplashから取得しています
- OGP画像（`/public/og-image.svg`）は本番環境では PNG に変換してください
- これはポートフォリオ用のデモサイトです。実際のサービスではありません

## ライセンス

MIT
