---
date: "2026-03-11"
topic: "Phase 1 セットアップガイド（利用者永久無料モデル）"
---

# Phase 1 公開までの手順ガイド

## 前提

- 発案者は永久無料。Stripe 決済は Phase 1 では不要
- LP は GitHub Pages にデプロイ済み: https://sss409.github.io/ideaforge/
- 必要なのは Typeform フォーム作成 → LP の URL 差し替え → 再デプロイ

---

## 1. Typeform フォーム作成（20分）

1. [typeform.com](https://typeform.com) にログイン
2. 「Create a new form」→ 「Start from scratch」
3. 以下の質問を追加:

| # | 質問タイプ | 質問文 | 必須 |
|---|-----------|--------|------|
| 1 | Short Text | お名前（ニックネーム可） | ✅ |
| 2 | Email | メールアドレス（レポート送付先） | ✅ |
| 3 | Long Text | あなたのビジネスアイデアを自由に書いてください | ✅ |
| 4 | Long Text | 補足情報（ターゲット層、きっかけなど、任意） | ❌ |

4. Thank You Screen: 「ありがとうございます！24時間以内に精錬レポートをメールでお届けします。完全無料です。」
5. 「Publish」→ フォーム URL をメモ

---

## 2. LP の URL 差し替え

`frontend/src/app/page.tsx` の先頭を実際の URL に変更:

```typescript
const TYPEFORM_URL = "https://実際のTypeform URL";
```

変更後:
```bash
cd D:\ideaforge
git add frontend/src/app/page.tsx
git commit -m "Typeform の実URL を設定"
git push origin main
```
→ GitHub Actions が自動で GitHub Pages に再デプロイ

---

## 3. サンプルパッケージ掲載

LP にサンプルの精錬レポート（Layer 1 + 2）を掲載し、実際の出力品質を見せる。
Before/After セクションの強化、または新セクションとして追加。

---

## 4. 動作確認チェックリスト

- [ ] LP が https://sss409.github.io/ideaforge/ で表示される
- [ ] 全CTAボタン → Typeform が開く
- [ ] Typeform 送信 → Thank You 画面
- [ ] スマホで表示確認
- [ ] OGP画像・タイトルの確認

---

## 5. 広告出稿（Phase 1 本番）

LP 公開後:
- X (Twitter) 広告: ¥10,000-25,000
- LinkedIn 広告: ¥10,000-25,000
- ターゲット: スタートアップ・起業家・個人開発者
- メッセージ: 「あなたのアイデア、AIが無料で事業計画に変換します」

---

## 6. NPS アンケート（レポート納品後）

精錬レポートをメール送付する際に、NPS アンケートリンクを添付。
Google Forms or Typeform で別フォームを作成:

| 質問 | タイプ |
|------|--------|
| このレポートを友人に薦める可能性は？（0-10） | NPS |
| 最も役に立った部分は？ | Long Text |
| 改善してほしい点は？ | Long Text |
| もう一つアイデアを精錬したいですか？ | Yes/No |
