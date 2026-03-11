---
date: "2026-03-11"
topic: "Phase 1 セットアップガイド"
---

# Phase 1 公開までの手順ガイド

## 1. Vercel デプロイ（10分）

1. [vercel.com](https://vercel.com) にログイン（GitHub アカウント連携）
2. 「Add New Project」→ GitHub から `sss409/ideaforge` を選択
3. 設定:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`（重要！）
   - **Build Command**: `next build`（デフォルト）
   - **Output Directory**: `out`（Static Export を使っているため）
4. 「Deploy」→ 数分で完了
5. デプロイ URL をメモ（例: `ideaforge-xxx.vercel.app`）

**カスタムドメイン（任意）**: Vercel ダッシュボード → Settings → Domains で設定

---

## 2. Typeform フォーム作成（20分）

1. [typeform.com](https://typeform.com) にログイン
2. 「Create a new form」→ 「Start from scratch」
3. 以下の質問を追加:

| # | 質問タイプ | 質問文 | 必須 |
|---|-----------|--------|------|
| 1 | Short Text | お名前（ニックネーム可） | ✅ |
| 2 | Email | メールアドレス | ✅ |
| 3 | Long Text | あなたのビジネスアイデアを自由に書いてください | ✅ |
| 4 | Multiple Choice | どのプランに興味がありますか？ → 無料 / スタンダード(¥4,980) / プロ(¥14,800) | ✅ |
| 5 | Long Text | 補足情報（任意） | ❌ |

4. Thank You Screen: 「ありがとうございます！24時間以内にレポートをお届けします。」
5. 「Publish」→ フォーム URL をメモ

---

## 3. Stripe Payment Links 作成（15分）

1. [dashboard.stripe.com](https://dashboard.stripe.com) にログイン
2. **Products** → 「Add product」で2つ作成:

### スタンダードプラン
- Product name: IdeaForge スタンダード
- Price: ¥4,980（One time）
- Description: 全5ステップの完全精錬レポート

### プロプラン
- Product name: IdeaForge プロ
- Price: ¥14,800（One time）
- Description: 完全レポート + 専門家フィードバック + 30分相談

3. 各プロダクトで **Payment Links** → 「Create payment link」
4. 設定:
   - After payment: カスタム URL → Typeform のフォーム URL（購入後にアイデア投稿へ誘導）
   - Collect email: ✅
5. Payment Link URL をメモ

---

## 4. LP の URL 差し替え

`frontend/src/app/page.tsx` の先頭3行を実際の URL に変更:

```typescript
const TYPEFORM_URL = "https://実際のTypeform URL";
const STRIPE_STANDARD_URL = "https://実際のStripe URL（スタンダード）";
const STRIPE_PRO_URL = "https://実際のStripe URL（プロ）";
```

変更後:
```bash
cd D:\ideaforge
git add frontend/src/app/page.tsx
git commit -m "Typeform/Stripe の実URL を設定"
git push origin main
```
→ Vercel が自動で再デプロイ

---

## 5. 動作確認チェックリスト

- [ ] LP がVercel URLで表示される
- [ ] 「無料で精錬する」ボタン → Typeform が開く
- [ ] 「精錬する」ボタン → Stripe 決済ページが開く
- [ ] Stripe テスト決済 → Typeform にリダイレクトされる
- [ ] Typeform 送信 → Thank You 画面
- [ ] スマホで表示確認

---

## 6. 広告出稿（Phase 1 本番）

LP 公開後:
- X (Twitter) 広告: ¥10,000-25,000
- LinkedIn 広告: ¥10,000-25,000
- ターゲット: スタートアップ・起業家・個人開発者
