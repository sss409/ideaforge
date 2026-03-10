---
created: "2026-03-11"
topic: "IdeaForge 開発アプローチ調査"
status: completed
tags: [development, mvp, claude-api]
---

# 調査: IdeaForge 開発アプローチ

## 目的
IdeaForge に最適な開発アプローチ・技術選定を決定する。

## 調査内容
詳細は `D:\ideaforge\docs\research\development-approach.md` を参照。

### 主要な結論
1. 「コードを書く前に売れ」— LP + 手動コンシェルジュで検証
2. Claude API 直接利用（LangChain 不要、~100行で十分）
3. Phase 0 → 1 → 2 の段階的開発

## 結論
- 3フェーズ計画が最適。Phase 0（プロンプト）→ Phase 1（LP + 手動）→ Phase 2（MVP）
- 検証ゲート: Phase 1 で 3-5件の実購入がないと Phase 2 に進まない
- 技術スタック: Next.js + Supabase + Clerk + Stripe Connect + Claude API

## ネクストアクション
- [x] 開発アプローチ調査完了
- [x] 技術スタック確定（CLAUDE.md に記載済み）
- [ ] Phase 0 のプロンプト開発を開始

## 参考リンク
- `D:\ideaforge\docs\research\development-approach.md`（原本）
