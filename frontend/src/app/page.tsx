const TYPEFORM_URL = "https://example.typeform.com/ideaforge";
const STRIPE_STANDARD_URL = "https://buy.stripe.com/example-standard";
const STRIPE_PRO_URL = "https://buy.stripe.com/example-pro";

function HeroSection() {
  return (
    <section className="px-6 pt-24 pb-20 text-center">
      <p className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase">
        AI-Powered Idea Refinement
      </p>
      <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl">
        30分で、思いつきを
        <br />
        <span className="text-indigo-600">事業計画</span>に。
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        AIが市場規模・競合・収益モデルを自動分析。
        <br className="hidden sm:inline" />
        生のアイデアを、投資家や企業が評価できる
        「アイデアパッケージ」に変換します。
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href={TYPEFORM_URL}
          className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-indigo-700"
        >
          最初のアイデアを無料で精錬する →
        </a>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          アイデアの9割は
          <span className="text-red-500">「検証不足」</span>
          で消えていく。
        </h2>
        <div className="mt-8 space-y-4 text-lg text-gray-600">
          <p>市場規模は？ 競合は？ 技術的に実現できる？ 収益モデルは？</p>
          <p>一人で全てを調べるのは非現実的。</p>
          <p>
            かといって、コンサルに頼めば
            <span className="font-semibold text-gray-900">数十万円</span>。
          </p>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    icon: "📊",
    title: "市場分析",
    description:
      "ターゲット市場の規模、競合5社の強み弱み、トレンドの追い風と向かい風を自動レポート",
  },
  {
    icon: "⚙️",
    title: "実現可能性評価",
    description:
      "技術難易度、必要リソース、リスクと対策を定量評価",
  },
  {
    icon: "💰",
    title: "収益モデル提案",
    description:
      "あなたのアイデアに最適な価格戦略とマネタイズ方法を提案",
  },
] as const;

function SolutionSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          IdeaForge は、AIがあなたのアイデアを
          <span className="text-indigo-600">「精錬」</span>します。
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm"
            >
              <div className="text-4xl">{b.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {b.title}
              </h3>
              <p className="mt-3 text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: 1, label: "構造化", description: "生のアイデアをAIが構造化。足りない情報は質問で補完" },
  { num: 2, label: "市場分析", description: "市場規模・競合・ターゲットを自動分析" },
  { num: 3, label: "実現可能性", description: "技術難易度・リソース・タイムラインを評価" },
  { num: 4, label: "収益モデル", description: "最適な収益モデルを提案" },
  { num: 5, label: "レポート", description: "全てを1つのレポートにまとめて納品" },
] as const;

function ProcessSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          5ステップで、アイデアを精錬
        </h2>
        <div className="mt-12 space-y-6">
          {STEPS.map((s) => (
            <div key={s.num} className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                {s.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{s.label}</h3>
                <p className="mt-1 text-gray-600">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Before → After
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-gray-200 bg-gray-50 p-8">
            <p className="text-sm font-semibold text-gray-400 uppercase">
              Before — 生アイデア
            </p>
            <p className="mt-4 text-lg italic text-gray-500">
              「請求書を楽にするSaaS作りたい」
            </p>
            <ul className="mt-6 space-y-2 text-gray-500">
              <li>❌ ターゲットが曖昧</li>
              <li>❌ 競合がわからない</li>
              <li>❌ 何から始めればいいかわからない</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8">
            <p className="text-sm font-semibold text-indigo-600 uppercase">
              After — アイデアパッケージ
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-900">
              構造化データ + 市場分析 + 競合5社比較 + 収益モデル
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✅ ターゲット・競合・市場規模が明確</li>
              <li>✅ リスクと対策が整理済み</li>
              <li>✅ 次にやるべきことが見える</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "お試し",
    price: "無料",
    period: "",
    description: "まずはアイデアの可能性を確認",
    features: [
      "Step 1-2（構造化 + 市場分析）",
      "競合5社の比較レポート",
      "24時間以内に納品",
    ],
    cta: "無料で試す",
    href: TYPEFORM_URL,
    featured: false,
  },
  {
    name: "スタンダード",
    price: "¥4,980",
    period: "/ 1アイデア",
    description: "本格的な事業計画レポート",
    features: [
      "全5ステップの完全レポート",
      "収益モデル提案付き",
      "リスク分析 + 対策",
      "24時間以内に納品",
    ],
    cta: "精錬する",
    href: STRIPE_STANDARD_URL,
    featured: true,
  },
  {
    name: "プロ",
    price: "¥14,800",
    period: "/ 1アイデア",
    description: "専門家のフィードバック付き",
    features: [
      "スタンダードの全内容",
      "専門家によるフィードバック",
      "30分のオンライン相談",
      "修正1回付き",
    ],
    cta: "相談付きで精錬する",
    href: STRIPE_PRO_URL,
    featured: false,
  },
] as const;

function PricingSection() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          シンプルな料金体系
        </h2>
        <p className="mt-4 text-center text-gray-600">
          まずは無料でお試し。納得してからアップグレード。
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border-2 p-8 ${
                plan.featured
                  ? "border-indigo-600 shadow-xl"
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <p className="mb-4 text-center text-sm font-semibold text-indigo-600">
                  人気プラン
                </p>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-gray-500">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-0.5 text-indigo-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`mt-8 block rounded-xl px-6 py-3 text-center font-semibold transition ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border-2 border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "どんなアイデアでも精錬できますか？",
    a: "ビジネスアイデアであれば、ジャンルを問いません。SaaS、アプリ、マーケットプレイス、飲食、教育など幅広く対応しています。",
  },
  {
    q: "AIの分析はどれくらい正確ですか？",
    a: "市場データは公開情報に基づき、出典を明記します。確信度が低い推定にはその旨を表示します。人間のアナリストが最終チェックを行います。",
  },
  {
    q: "自分のアイデアが盗まれることはありませんか？",
    a: "投稿されたアイデアは暗号化して保管され、あなたの許可なく第三者に開示されることはありません。NDA締結オプションもあります。",
  },
  {
    q: "レポートはどのくらいで届きますか？",
    a: "お試しプランは即時。スタンダード・プロは24時間以内にお届けします。",
  },
] as const;

function FaqSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          よくある質問
        </h2>
        <div className="mt-12 space-y-8">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-bold text-gray-900">{faq.q}</h3>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-indigo-600 px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-white">
        最初のアイデアを、今すぐ精錬する。
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
        無料プランでAI精錬を体験。あなたのアイデアの可能性を、数字で確認しましょう。
      </p>
      <a
        href={TYPEFORM_URL}
        className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-600 shadow-lg transition hover:bg-gray-100"
      >
        無料で始める →
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-sm text-gray-400">
      <p>© 2026 IdeaForge. All rights reserved.</p>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <BeforeAfterSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
