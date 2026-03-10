# IdeaForge — プロジェクト固有ルール

## 技術スタック

- **フロントエンド**: Next.js 15+ / TypeScript / Tailwind CSS
- **DB**: Supabase (PostgreSQL 16 + Row Level Security + pgvector)
- **AI**: Claude API 直接 (Anthropic SDK for Python) — LangChain 不要
- **認証**: Clerk (10K MAUまで無料、SOC2対応)
- **決済**: Stripe Connect (3者間マーケットプレイス)
- **メール**: Resend
- **監視**: PostHog
- **リント**: ruff (Python) / ESLint + Prettier (TypeScript)
- **テスト**: pytest (Python) / Vitest (TypeScript)
- **インフラ**: Vercel (FE) + Vercel Cron or Railway (BG jobs)

## AI精錬エンジン

### モデル使い分け

| 用途 | モデル | 理由 |
|------|--------|------|
| 分類・ルーティング | Haiku 4.5 | 低コスト、高速 |
| 分析・レポート生成 | Sonnet 4.6 | コスパ最良、80-90%のタスク |
| 深い推論が必要な場合 | Opus 4.6 | エッジケースのみ |

### 必須パターン

- **構造化出力**: `client.messages.parse()` + Pydantic モデル（JSON手動パース禁止）
- **プロンプトキャッシュ**: システムプロンプト・Few-shot例に `cache_control: {"type": "ephemeral", "ttl": "1h"}`
- **ストリーミング**: レポート生成（10-30秒）には `client.messages.stream()` を使用
- **エラーハンドリング**: ステップ単位でリトライ（パイプライン全体の再実行禁止）

## コーディングルール

### Python (backend/)

- フォーマッタ: `ruff format`
- リンター: `ruff check --fix`
- 型ヒント必須（`from __future__ import annotations`）
- docstring: Google スタイル、日本語
- テスト: `pytest tests/`
- 非同期: `async/await` をデフォルトで使用

### TypeScript (frontend/)

- フォーマッタ: `prettier --write`
- リンター: `eslint --fix`
- 型: `strict` モード、`any` 禁止
- コンポーネント: 関数コンポーネント + hooks
- スタイル: Tailwind CSS（CSS-in-JS 禁止）
- テスト: `vitest run`

## 検証コマンド

```bash
# バックエンド
cd D:\ideaforge\backend && ruff check src/ && pytest tests/

# フロントエンド
cd D:\ideaforge\frontend && npm run lint && npm run typecheck && npx vitest run
```

## ディレクトリ構成

```
D:\ideaforge\
├── backend/           # Python（AI精錬エンジン + API）
├── frontend/          # Next.js（LP → MVP）
├── docs/
│   └── research/      # 市場調査・開発手法調査
├── prompts/           # 精錬プロンプト（バージョン管理）
├── evals/             # 品質評価データセット・スクリプト
├── CLAUDE.md          # このファイル
└── README.md
```

## 環境変数

- `.env` ファイルは `.gitignore` に含める
- `.env.example` にキー名のみ記載（値は空）
- 必須キー: `ANTHROPIC_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `CLERK_SECRET_KEY`, `STRIPE_SECRET_KEY`

## Git ルール

- ブランチ: `main` → `feature/*`, `fix/*`
- コミットメッセージ: 日本語
- PR なしで main に直接 push 可（個人開発フェーズ）

## 開発フロー

1. Phase 0（現在）: プロンプト開発はコードなし（Claude Web UI / API コンソール）
2. Phase 1: LP は Next.js 1ページ + Typeform + Stripe Payment Links
3. Phase 2: 検証済み機能のみ実装。過剰な抽象化禁止
