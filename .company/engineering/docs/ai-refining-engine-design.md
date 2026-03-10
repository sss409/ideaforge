---
created: "2026-03-11"
topic: "AI精錬エンジン設計"
type: technical-doc
tags: [ai, claude-api, pipeline]
---

# AI精錬エンジン設計書

## 概要
ユーザーが投稿した「生のアイデア」を、AI が 5 ステップで「精錬」し、
買い手が価値判断できるレポートに変換するエンジン。

Arrow の情報パラドックスを **3層開示モデル** で解決する:
- Layer 1（無料）: カテゴリ・領域・AI スコアのみ → 興味喚起
- Layer 2（低額）: 要約 + 市場分析 → 購入判断
- Layer 3（本額）: フルレポート + 実行計画 → 実行可能

## 設計・方針

### 5ステップパイプライン

```
[生アイデア] → Step 1 → Step 2 → Step 3 → Step 4 → Step 5 → [精錬レポート]
  自然言語     構造化   市場分析  実現可能性  収益モデル  レポート生成
```

### Step 1: 構造化（Haiku 4.5）
- 入力: 自然言語テキスト（日本語 or 英語）
- 出力: 構造化 JSON（Pydantic: IdeaStructured）
- フィールド: title, domain, problem, solution, target_users, differentiators

### Step 2: 市場分析（Sonnet 4.6）
- 入力: IdeaStructured
- 出力: MarketAnalysis
- フィールド: tam_estimate, competitors[], target_segments[], market_trends[]

### Step 3: 実現可能性評価（Sonnet 4.6）
- 入力: IdeaStructured + MarketAnalysis
- 出力: FeasibilityAssessment
- フィールド: tech_difficulty(1-5), required_skills[], timeline_months, estimated_cost_range, risks[]

### Step 4: 収益モデル提案（Sonnet 4.6）
- 入力: IdeaStructured + MarketAnalysis + FeasibilityAssessment
- 出力: RevenueModel
- フィールド: pricing_strategies[], monetization_methods[], unit_economics, break_even_estimate

### Step 5: レポート生成（Sonnet 4.6）
- 入力: 全ステップの出力
- 出力: RefinedReport（3層開示対応）
- Layer 1 フィールド: category, domain, ai_score(1-100), one_liner
- Layer 2 フィールド: executive_summary, market_highlights, competitive_edge
- Layer 3 フィールド: full_report_markdown, action_plan[], financial_projections

### モデル選定理由
| Step | モデル | 理由 |
|------|--------|------|
| 1 | Haiku 4.5 | 構造化は簡単なタスク。低コスト・高速 |
| 2-5 | Sonnet 4.6 | 分析・生成の品質とコストのバランス |
| (例外) | Opus 4.6 | 品質スコアが低い場合のフォールバック |

### コスト構造
- 1件あたり: ~$0.18（キャッシュ適用前）→ ~$0.03-0.05（キャッシュ適用後）
- システムプロンプト + Few-shot 例に `cache_control` を適用

## 詳細

### Pydantic スキーマ（Phase 2 実装時）

```python
class IdeaStructured(BaseModel):
    title: str
    domain: str
    problem: str
    solution: str
    target_users: list[str]
    differentiators: list[str]

class MarketAnalysis(BaseModel):
    tam_estimate: str
    competitors: list[CompetitorInfo]
    target_segments: list[str]
    market_trends: list[str]

class FeasibilityAssessment(BaseModel):
    tech_difficulty: int  # 1-5
    required_skills: list[str]
    timeline_months: int
    estimated_cost_range: str
    risks: list[RiskItem]

class RevenueModel(BaseModel):
    pricing_strategies: list[str]
    monetization_methods: list[str]
    unit_economics: str
    break_even_estimate: str

class RefinedReport(BaseModel):
    # Layer 1 (無料)
    category: str
    domain: str
    ai_score: int
    one_liner: str
    # Layer 2 (低額)
    executive_summary: str
    market_highlights: list[str]
    competitive_edge: str
    # Layer 3 (本額)
    full_report_markdown: str
    action_plan: list[str]
    financial_projections: str
```

### エラーハンドリング
- 各ステップ独立でリトライ（最大3回）
- パイプライン全体の再実行は禁止
- Step N が失敗しても Step 1〜(N-1) の結果はキャッシュ

### 品質保証
1. スキーマバリデーション（Pydantic で自動）
2. LLM-as-judge（Sonnet で 5軸評価、20/25 以上で合格）
3. 低スコアは Opus にフォールバック or 人間レビューキューへ

## 参考
- development-approach.md: Claude API コスト見積もり
- market-survey.md: 3層開示モデルの根拠（Arrow パラドックス）
- CLAUDE.md: 技術スタック・コーディングルール
