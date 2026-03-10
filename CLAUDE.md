# IdeaForge — プロジェクト固有ルール

## 技術スタック

- **バックエンド**: Python 3.12+ / FastAPI / SQLAlchemy / Alembic
- **フロントエンド**: Next.js 15+ / TypeScript / Tailwind CSS
- **DB**: PostgreSQL 16 + pgvector
- **AI**: Claude API (Anthropic SDK for Python)
- **認証**: NextAuth.js
- **決済**: Stripe
- **リント**: ruff (Python) / ESLint + Prettier (TypeScript)
- **テスト**: pytest (Python) / Vitest (TypeScript)

## コーディングルール

### Python (backend/)

- フォーマッタ: `ruff format`
- リンター: `ruff check --fix`
- 型ヒント必須（`from __future__ import annotations`）
- docstring: Google スタイル、日本語
- テスト: `pytest tests/`
- 非同期: `async/await` をデフォルトで使用（FastAPI の async エンドポイント）

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
├── backend/           # FastAPI アプリケーション
├── frontend/          # Next.js アプリケーション
├── docs/              # 設計ドキュメント
├── CLAUDE.md          # このファイル
└── README.md
```

## 環境変数

- `.env` ファイルは `.gitignore` に含める
- `.env.example` にキー名のみ記載（値は空）
- 必須キー: `DATABASE_URL`, `ANTHROPIC_API_KEY`, `STRIPE_SECRET_KEY`, `NEXTAUTH_SECRET`

## Git ルール

- ブランチ: `main` → `feature/*`, `fix/*`
- コミットメッセージ: 日本語
- PR なしで main に直接 push 可（個人開発フェーズ）
