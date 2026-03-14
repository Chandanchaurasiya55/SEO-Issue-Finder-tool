// ══════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════
const MODULES = {
  seo: {
    label: "SEO",
    icon: "🔍",
    color: "#ff642d",
    categories: [
      {
        name: "On-Page SEO",
        icon: "📄",
        bg: "#fff0eb",
        checks: [
          {
            n: "Title Tag",
            p: "critical",
            g: "Unique 50–60 char title with primary keyword",
            b: "Title tag missing or too generic — add a targeted title",
          },
          {
            n: "Meta Description",
            p: "high",
            g: "Compelling 150–160 char description with CTA",
            b: "Meta description missing — add one with a call-to-action",
          },
          {
            n: "H1 Heading",
            p: "high",
            g: "Single H1 with target keyword found",
            b: "H1 missing or multiple H1s — use exactly one per page",
          },
          {
            n: "H2/H3 Hierarchy",
            p: "medium",
            g: "Proper heading hierarchy aids readability",
            b: "Broken heading structure — fix H2/H3 order",
          },
          {
            n: "Keyword in First 100 Words",
            p: "high",
            g: "Target keyword in opening paragraph",
            b: "Keyword not in first 100 words — place it early",
          },
          {
            n: "Image Alt Attributes",
            p: "medium",
            g: "All images have descriptive alt text",
            b: "Images missing alt text — add keyword-rich descriptions",
          },
          {
            n: "Canonical Tag",
            p: "high",
            g: "Canonical tag set to preferred URL",
            b: "Canonical missing — may cause duplicate content issues",
          },
          {
            n: "Internal Linking",
            p: "medium",
            g: "Good internal link structure found",
            b: "Few internal links — add contextual links to key pages",
          },
          {
            n: "Content Word Count",
            p: "medium",
            g: "Comprehensive content — 1000+ words",
            b: "Thin content — expand with in-depth coverage",
          },
        ],
      },
      {
        name: "Technical SEO",
        icon: "⚙️",
        bg: "#eff6ff",
        checks: [
          {
            n: "HTTPS / SSL",
            p: "critical",
            g: "Site served over HTTPS — secure and trusted",
            b: "No HTTPS — critical security and ranking penalty",
          },
          {
            n: "robots.txt",
            p: "high",
            g: "robots.txt accessible and correctly configured",
            b: "robots.txt missing or blocking important content",
          },
          {
            n: "XML Sitemap",
            p: "high",
            g: "Sitemap found and submitted",
            b: "Sitemap not found — search engines may miss pages",
          },
          {
            n: "Noindex Tags",
            p: "critical",
            g: "No accidental noindex on key pages",
            b: "Noindex on important pages — remove to allow indexing",
          },
          {
            n: "Structured Data",
            p: "high",
            g: "Schema markup detected — eligible for rich results",
            b: "No schema found — add JSON-LD for rich results",
          },
          {
            n: "404 Error Page",
            p: "high",
            g: "Custom 404 page configured",
            b: "No custom 404 — poor UX on broken links",
          },
          {
            n: "URL Structure",
            p: "medium",
            g: "Clean readable URLs with keywords",
            b: "Messy URLs — simplify with keywords only",
          },
          {
            n: "Redirect Chains",
            p: "high",
            g: "No redirect chains detected",
            b: "Multiple redirect hops — fix for crawl efficiency",
          },
          {
            n: "Hreflang Tags",
            p: "medium",
            g: "Hreflang correctly set for language targeting",
            b: "Hreflang missing or misconfigured",
          },
        ],
      },
      {
        name: "Core Web Vitals",
        icon: "⚡",
        bg: "#fefce8",
        checks: [
          {
            n: "Page Load Speed",
            p: "critical",
            g: "Page loads under 3 seconds",
            b: "Slow load time — optimize assets and server",
          },
          {
            n: "LCP — Largest Contentful Paint",
            p: "critical",
            g: "LCP under 2.5s — excellent score",
            b: "LCP over 4s — major performance issue",
          },
          {
            n: "CLS — Cumulative Layout Shift",
            p: "high",
            g: "CLS below 0.1 — stable layout",
            b: "High CLS — elements shift on load",
          },
          {
            n: "INP — Interaction to Next Paint",
            p: "high",
            g: "INP under 200ms — responsive",
            b: "High INP — page feels sluggish",
          },
          {
            n: "TTFB",
            p: "high",
            g: "TTFB under 200ms — fast server",
            b: "Slow TTFB — use CDN and server-side caching",
          },
          {
            n: "Image Optimization",
            p: "medium",
            g: "Images in WebP/AVIF format",
            b: "Uncompressed images — convert to WebP/AVIF",
          },
          {
            n: "Render-Blocking Resources",
            p: "high",
            g: "Minimal render-blocking scripts",
            b: "Render-blocking JS/CSS — defer them",
          },
          {
            n: "Browser Caching",
            p: "medium",
            g: "Cache headers configured",
            b: "No caching headers — repeat visitors reload all",
          },
        ],
      },
      {
        name: "Mobile & UX",
        icon: "📱",
        bg: "#f0fdf4",
        checks: [
          {
            n: "Mobile Responsiveness",
            p: "critical",
            g: "Passes Google Mobile-Friendly test",
            b: "Not mobile-friendly — critical in mobile-first indexing",
          },
          {
            n: "Viewport Meta Tag",
            p: "high",
            g: "Correct viewport tag present",
            b: "Viewport missing — mobile display broken",
          },
          {
            n: "Touch Target Size",
            p: "medium",
            g: "Tap targets at least 44×44px",
            b: "Touch elements too small — bad mobile UX",
          },
          {
            n: "Font Size on Mobile",
            p: "medium",
            g: "Base font ≥16px on mobile",
            b: "Small fonts — users must pinch-zoom",
          },
        ],
      },
      {
        name: "Backlinks & Off-Page",
        icon: "🔗",
        bg: "#fdf4ff",
        checks: [
          {
            n: "Domain Authority",
            p: "high",
            g: "Healthy authority — strong link profile",
            b: "Low authority — earn quality backlinks",
          },
          {
            n: "Total Backlinks",
            p: "medium",
            g: "Good backlink volume from diverse sources",
            b: "Very few backlinks — build a link strategy",
          },
          {
            n: "Referring Domains",
            p: "high",
            g: "Good unique referring domain count",
            b: "Low referring domains — diversify sources",
          },
          {
            n: "Toxic Backlinks",
            p: "high",
            g: "No toxic links detected",
            b: "Spammy links found — disavow via Search Console",
          },
          {
            n: "Social Profiles Linked",
            p: "low",
            g: "Key social profiles linked from site",
            b: "Social profiles not linked",
          },
        ],
      },
      {
        name: "Local SEO",
        icon: "📍",
        bg: "#fef3c7",
        checks: [
          {
            n: "Google Business Profile",
            p: "high",
            g: "GBP verified and complete",
            b: "No GBP — missing local visibility",
          },
          {
            n: "NAP Consistency",
            p: "high",
            g: "Name, address, phone consistent",
            b: "NAP inconsistencies — fix across directories",
          },
          {
            n: "Local Business Schema",
            p: "medium",
            g: "LocalBusiness schema implemented",
            b: "Missing local schema — add for local SERP features",
          },
          {
            n: "Local Citations",
            p: "medium",
            g: "Listed in key local directories",
            b: "Missing from major directories",
          },
        ],
      },
    ],
  },
  aeo: {
    label: "AEO",
    icon: "🎯",
    color: "#10b981",
    categories: [
      {
        name: "Featured Snippet Optimization",
        icon: "⭐",
        bg: "#f0fdf4",
        checks: [
          {
            n: "Question-Based Headings",
            p: "critical",
            g: "Headings as questions — great for snippets",
            b: "No question headings — use How/What/Why format",
          },
          {
            n: "Direct Answer Paragraphs",
            p: "critical",
            g: "40–60 word concise answer paragraphs",
            b: "Answers buried — restructure for snippet capture",
          },
          {
            n: "Definition Sections",
            p: "high",
            g: "Clear definitions — eligible for definition snippets",
            b: "No definitions — add 'X is...' explanations",
          },
          {
            n: "Ordered Lists for Steps",
            p: "high",
            g: "Steps in numbered lists — snippet-ready",
            b: "Steps not in lists — restructure as ordered lists",
          },
          {
            n: "Comparison Tables",
            p: "medium",
            g: "Tables found — eligible for table snippets",
            b: "No tables — add for table snippet opportunity",
          },
          {
            n: "FAQ Section",
            p: "high",
            g: "FAQ section found — PAA box eligible",
            b: "No FAQ section — add for People Also Ask",
          },
        ],
      },
      {
        name: "Voice Search",
        icon: "🎙️",
        bg: "#eff6ff",
        checks: [
          {
            n: "Conversational Keywords",
            p: "high",
            g: "Natural language voice-query phrases found",
            b: "Too formal — add conversational long-tail phrases",
          },
          {
            n: "Long-Tail Questions",
            p: "high",
            g: "Full question phrases targeted",
            b: "Only short keywords — target full questions",
          },
          {
            n: "Local Voice Signals",
            p: "medium",
            g: "'Near me' and local signals present",
            b: "No local voice signals — add location content",
          },
          {
            n: "Speakable Schema",
            p: "medium",
            g: "Speakable schema marks audio content",
            b: "No speakable schema — assistants won't read aloud",
          },
        ],
      },
      {
        name: "Answer Engine Schema",
        icon: "🗂️",
        bg: "#fdf4ff",
        checks: [
          {
            n: "FAQPage Schema",
            p: "critical",
            g: "FAQPage schema — FAQ SERP expansion enabled",
            b: "Missing FAQPage schema — high-value opportunity missed",
          },
          {
            n: "HowTo Schema",
            p: "high",
            g: "HowTo schema — step-by-step results eligible",
            b: "HowTo schema missing — add for tutorial rich results",
          },
          {
            n: "QAPage Schema",
            p: "high",
            g: "QAPage schema implemented",
            b: "No QAPage schema — add for Q&A content",
          },
          {
            n: "Review / Rating Schema",
            p: "medium",
            g: "Review schema with ratings found",
            b: "Missing review schema — add for SERP star ratings",
          },
          {
            n: "Event Schema",
            p: "medium",
            g: "Event schema found",
            b: "No event schema — add for events in search",
          },
        ],
      },
      {
        name: "E-E-A-T Signals",
        icon: "🏆",
        bg: "#fff7ed",
        checks: [
          {
            n: "Author Bio & Credentials",
            p: "critical",
            g: "Author credentials clearly displayed",
            b: "No author bio — critical E-E-A-T signal missing",
          },
          {
            n: "About Page Quality",
            p: "high",
            g: "Detailed About page found",
            b: "About page thin — key E-E-A-T trust signal",
          },
          {
            n: "External Citations",
            p: "high",
            g: "Authoritative sources cited",
            b: "No citations — add source references",
          },
          {
            n: "Trust Badges & Reviews",
            p: "high",
            g: "Trust badges and reviews visible",
            b: "No trust signals — add certifications and reviews",
          },
          {
            n: "Last Updated Date",
            p: "medium",
            g: "Content dates visible",
            b: "No dates — add publication/update dates",
          },
        ],
      },
      {
        name: "NLP & Semantic",
        icon: "🧠",
        bg: "#fefce8",
        checks: [
          {
            n: "Clear Topic Sentences",
            p: "high",
            g: "Clear topic sentences per section",
            b: "Unclear topic sentences — restructure opening sentences",
          },
          {
            n: "Entity Linking",
            p: "high",
            g: "Key entities properly linked",
            b: "Entities not linked — add contextual links",
          },
          {
            n: "Semantic Keyword Coverage",
            p: "high",
            g: "LSI and semantic keywords throughout",
            b: "Limited semantic coverage — expand vocabulary",
          },
          {
            n: "Readability Score",
            p: "medium",
            g: "Flesch score above 60 — accessible",
            b: "Low readability — simplify language",
          },
          {
            n: "Topical Depth",
            p: "high",
            g: "Comprehensive topic coverage",
            b: "Shallow content — expand for topical authority",
          },
        ],
      },
    ],
  },
  geo: {
    label: "GEO",
    icon: "🌐",
    color: "#8b5cf6",
    categories: [
      {
        name: "LLM-Ready Content",
        icon: "🤖",
        bg: "#f5f3ff",
        checks: [
          {
            n: "Clear Page Summaries",
            p: "critical",
            g: "Intro clearly summarizes page for AI parsing",
            b: "No clear summary — AI may misread page purpose",
          },
          {
            n: "Factual Data with Sources",
            p: "critical",
            g: "Statistics backed with citations",
            b: "Unsourced claims — AI systems prefer verified data",
          },
          {
            n: "Unique Research / Data",
            p: "high",
            g: "Original research or data present",
            b: "No unique data — add original surveys or studies",
          },
          {
            n: "AI Crawler Permissions",
            p: "high",
            g: "AI crawlers addressed in robots.txt",
            b: "robots.txt lacks AI bot rules — define permissions",
          },
          {
            n: "Structured for Extraction",
            p: "medium",
            g: "Headers and lists for easy AI parsing",
            b: "Dense prose — restructure with headers and bullets",
          },
        ],
      },
      {
        name: "Brand Citability",
        icon: "📣",
        bg: "#fff7ed",
        checks: [
          {
            n: "Consistent Brand Name",
            p: "critical",
            g: "Brand name consistent across all pages",
            b: "Inconsistent brand mentions — may confuse AI",
          },
          {
            n: "Wikipedia / Wikidata",
            p: "high",
            g: "Brand in Wikipedia or Wikidata",
            b: "No Wikipedia presence — pursue digital PR",
          },
          {
            n: "Industry Directories",
            p: "high",
            g: "Listed in industry directories",
            b: "Missing from directories — build citations",
          },
          {
            n: "News & Press Mentions",
            p: "high",
            g: "Brand in news and press articles",
            b: "No press coverage — pursue PR outreach",
          },
          {
            n: "Niche Term Co-occurrence",
            p: "high",
            g: "Brand co-occurs with niche keywords",
            b: "Brand not co-occurring externally with target terms",
          },
        ],
      },
      {
        name: "AI Topical Coverage",
        icon: "🗺️",
        bg: "#f0fdf4",
        checks: [
          {
            n: "Pillar + Cluster Content",
            p: "critical",
            g: "Content hub with pillar and cluster pages",
            b: "No cluster strategy — build topic authority hubs",
          },
          {
            n: "Definition Pages",
            p: "high",
            g: "Definition and explainer pages present",
            b: "No definition pages — AI values definitional content",
          },
          {
            n: "Comparison Pages",
            p: "medium",
            g: "Competitor comparison pages found",
            b: "No comparison content — add vs-competitor pages",
          },
          {
            n: "Use Case Content",
            p: "high",
            g: "Use case and how-to content found",
            b: "Limited use-case content — expand for AI citation",
          },
          {
            n: "Glossary / Terminology",
            p: "medium",
            g: "Glossary demonstrates domain expertise",
            b: "No glossary — add to signal expertise",
          },
        ],
      },
      {
        name: "AI Trust & Credibility",
        icon: "🛡️",
        bg: "#eff6ff",
        checks: [
          {
            n: "HTTPS Security",
            p: "critical",
            g: "Secure HTTPS — trusted by AI systems",
            b: "HTTP only — AI systems prefer secure sources",
          },
          {
            n: "Contact & Ownership",
            p: "high",
            g: "Contact and ownership clearly displayed",
            b: "Contact info hidden — reduces AI trust",
          },
          {
            n: "Legal Pages",
            p: "high",
            g: "Privacy policy and T&C present",
            b: "Legal pages missing — critical for AI trust eval",
          },
          {
            n: "Content Freshness",
            p: "high",
            g: "Content regularly updated",
            b: "Stale content — update regularly for AI preference",
          },
          {
            n: "Social Proof",
            p: "medium",
            g: "Testimonials and social proof visible",
            b: "No testimonials — add for credibility signals",
          },
        ],
      },
      {
        name: "Machine-Readable Metadata",
        icon: "📡",
        bg: "#fdf4ff",
        checks: [
          {
            n: "Organization Schema",
            p: "critical",
            g: "Organization schema with logo and contacts",
            b: "No Organization schema — AI can't identify business",
          },
          {
            n: "Author / Person Schema",
            p: "high",
            g: "Person schema on content pages",
            b: "No Person schema — missed author authority",
          },
          {
            n: "BreadcrumbList Schema",
            p: "medium",
            g: "Breadcrumb schema for site structure",
            b: "Missing breadcrumb schema — add for clarity",
          },
          {
            n: "Open Graph Tags",
            p: "medium",
            g: "Complete OG and Twitter Card tags",
            b: "Social meta tags incomplete — won't preview well",
          },
          {
            n: "SiteLinksSearchBox",
            p: "medium",
            g: "Sitelinks SearchBox schema found",
            b: "No sitelinks schema — missed SERP feature",
          },
        ],
      },
    ],
  },
};

// ══════════════════════════════════════════════════════
//  GENERATE
// ══════════════════════════════════════════════════════
function rng(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function roll(p) {
  const r = Math.random();
  if (p === "critical") return r < 0.42 ? 1 : r < 0.68 ? 0.5 : 0;
  if (p === "high") return r < 0.58 ? 1 : r < 0.78 ? 0.5 : 0;
  if (p === "medium") return r < 0.72 ? 1 : r < 0.87 ? 0.5 : 0;
  return r < 0.83 ? 1 : r < 0.92 ? 0.5 : 0;
}
function grade(s) {
  return s >= 90
    ? "A+"
    : s >= 80
      ? "A"
      : s >= 70
        ? "B+"
        : s >= 60
          ? "B"
          : s >= 50
            ? "C"
            : s >= 40
              ? "D"
              : "F";
}
function gradeClass(s) {
  return s >= 65 ? "grade-good" : s >= 45 ? "grade-ok" : "grade-bad";
}
function scoreColor(s) {
  return s >= 65 ? "#21bf6b" : s >= 45 ? "#f59e0b" : "#ef4444";
}
function dotClass(v) {
  return v === 1 ? "sd-pass" : v === 0.5 ? "sd-warn" : "sd-fail";
}
function piClass(v) {
  return v === 1 ? "pi-pass" : v === 0.5 ? "pi-warn" : "pi-fail";
}
function piIcon(v) {
  return v === 1 ? "✓" : v === 0.5 ? "~" : "✕";
}
function prClass(p) {
  return "pr-" + p;
}
function impactPct(p, ok) {
  if (ok === 0.5) return 40;
  const m = { critical: 90, high: 72, medium: 50, low: 28 };
  return m[p] || 40;
}
function impactColor(p) {
  const m = {
    critical: "#ef4444",
    high: "#f59e0b",
    medium: "#3b82f6",
    low: "#9ca3af",
  };
  return m[p];
}

function generateModule(mod) {
  const cats = mod.categories.map((cat) => {
    const checks = cat.checks.map((c) => {
      const ok = roll(c.p);
      const desc =
        ok === 1
          ? c.g
          : ok === 0.5
            ? "Partially set up — " + c.g.toLowerCase()
            : c.b;
      return { ...c, ok, desc };
    });
    const score = Math.round(
      (checks.reduce((s, c) => s + (c.ok || 0), 0) / checks.length) * 100,
    );
    return { ...cat, checks, score };
  });
  const score = Math.round(cats.reduce((s, c) => s + c.score, 0) / cats.length);
  return { ...mod, categories: cats, score };
}

function generate(url) {
  const domain = url
    .replace(/https?:\/\//i, "")
    .replace(/^www\./, "")
    .replace(/\/.*/, "");
  const mods = {};
  ["seo", "aeo", "geo"].forEach((k) => (mods[k] = generateModule(MODULES[k])));
  const overall = Math.round(
    Object.values(mods).reduce((s, m) => s + m.score, 0) / 3,
  );
  return { domain, mods, overall };
}

// ══════════════════════════════════════════════════════
//  LOADING
// ══════════════════════════════════════════════════════
const SCAN_STEPS = [
  "Resolving domain DNS",
  "Crawling homepage",
  "Checking on-page elements",
  "Analyzing technical setup",
  "Testing page performance",
  "Running AEO checks",
  "Scanning GEO signals",
  "Auditing structured data",
  "Checking backlinks",
  "Compiling results",
];

function startAudit() {
  let url = (document.getElementById("url-input").value || "").trim();
  if (!url) {
    document.getElementById("url-input").focus();
    return;
  }
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  document.getElementById("audit-btn").disabled = true;
  document.getElementById("page-hero").style.display = "none";
  document.getElementById("results").style.display = "none";
  const ld = document.getElementById("loading");
  ld.style.display = "block";
  document.getElementById("scan-domain-text").textContent = url.replace(
    /https?:\/\//i,
    "",
  );
  const stepsEl = document.getElementById("scan-steps");
  stepsEl.innerHTML = SCAN_STEPS.map(
    (s, i) =>
      `<div class="scan-step" id="ss${i}"><div class="ss-dot"></div><div class="ss-text">${s}</div></div>`,
  ).join("");
  let idx = 0;
  const pf = document.getElementById("prog-fill");
  const pp = document.getElementById("prog-pct");
  function next() {
    if (idx > 0)
      document.getElementById("ss" + (idx - 1)).className = "scan-step done";
    if (idx >= SCAN_STEPS.length) {
      pf.style.width = "100%";
      pp.textContent = "100%";
      setTimeout(() => {
        ld.style.display = "none";
        renderResults(generate(url));
      }, 400);
      return;
    }
    document.getElementById("ss" + idx).className = "scan-step active";
    const p = Math.round(((idx + 1) / SCAN_STEPS.length) * 100);
    pf.style.width = p + "%";
    pp.textContent = p + "%";
    idx++;
    setTimeout(next, rng(280, 560));
  }
  next();
}

// ══════════════════════════════════════════════════════
//  RENDER
// ══════════════════════════════════════════════════════
let _data = null;

function renderResults(data) {
  _data = data;
  const d = data.domain;
  document.getElementById("bc-domain").textContent = d;
  document.getElementById("res-domain").textContent = d;
  document.getElementById("res-meta").textContent =
    "Audit completed " +
    new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }) +
    " · 85+ checks · SEO + AEO + GEO";

  // build tabs
  const tabsEl = document.getElementById("module-tabs");
  const panelsEl = document.getElementById("tab-panels");
  tabsEl.innerHTML = "";
  panelsEl.innerHTML = "";

  const tabDefs = [
    { key: "seo", label: "SEO Analysis", mod: data.mods.seo },
    { key: "aeo", label: "AEO Analysis", mod: data.mods.aeo },
    { key: "geo", label: "GEO Analysis", mod: data.mods.geo },
    { key: "recommendations", label: "Recommendations" },
    { key: "all", label: "All Issues" },
  ];
  tabDefs.forEach((t, i) => {
    const allChecks = t.mod
      ? t.mod.categories.flatMap((c) => c.checks)
      : t.key === "recommendations"
        ? ["seo", "aeo", "geo"]
            .flatMap((k) => data.mods[k].categories.flatMap((c) => c.checks))
            .filter((c) => c.ok !== 1)
        : ["seo", "aeo", "geo"].flatMap((k) =>
            data.mods[k].categories.flatMap((c) => c.checks),
          );
    const issues =
      t.key === "recommendations"
        ? allChecks.length
        : allChecks.filter((c) => c.ok !== 1).length;
    const btn = document.createElement("button");
    btn.className = "mtab" + (i === 0 ? " active" : "");
    btn.innerHTML = `${t.label}<span class="mtab-count">${issues}</span>`;
    btn.onclick = () => switchTab(t.key, btn);
    tabsEl.appendChild(btn);

    const pane = document.createElement("div");
    pane.id = "tp-" + t.key;
    pane.className = "tab-content" + (i === 0 ? " active" : "");
    pane.innerHTML =
      t.key === "all"
        ? buildAllIssues(data)
        : t.key === "recommendations"
          ? buildRecommendationsTab(data)
          : buildModulePanel(t.mod, data);
    panelsEl.appendChild(pane);
  });

  document.getElementById("results").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchTab(key, btn) {
  document
    .querySelectorAll(".mtab")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tp-" + key).classList.add("active");
}

// ── MODULE PANEL ─────────────────────────────────────
function buildModulePanel(mod, data) {
  const allChecks = mod.categories.flatMap((c) => c.checks);
  const pass = allChecks.filter((c) => c.ok === 1).length;
  const warn = allChecks.filter((c) => c.ok === 0.5).length;
  const fail = allChecks.filter((c) => c.ok === 0).length;
  const circ = 2 * Math.PI * 58;
  const offset = circ - (mod.score / 100) * circ;
  const col = scoreColor(mod.score);

  // overview row
  let html = `<div class="overview-row">
    <div class="gauge-card">
      <div class="gauge-title">${mod.label} Health Score</div>
      <div class="gauge-wrap">
        <svg viewBox="0 0 140 140">
          <circle class="gauge-bg" cx="70" cy="70" r="58"/>
          <circle class="gauge-fill" cx="70" cy="70" r="58" stroke="${col}"
            stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
            transform="rotate(-90 70 70)"/>
        </svg>
        <div class="gauge-num">
          <div class="gauge-score">${mod.score}</div>
          <div class="gauge-label">out of 100</div>
        </div>
      </div>
      <div class="gauge-grade ${gradeClass(mod.score)}">${grade(mod.score)}</div>
    </div>
    <div class="stat-cards">
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Errors</div>
          <div class="sc-icon" style="background:#fee2e2">🔴</div>
        </div>
        <div class="sc-num" style="color:#dc2626">${fail}</div>
        <div class="sc-sub">Critical issues to fix</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((fail / allChecks.length) * 100)}%;background:#ef4444"></div></div>
      </div>
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Warnings</div>
          <div class="sc-icon" style="background:#fff7ed">🟡</div>
        </div>
        <div class="sc-num" style="color:#d97706">${warn}</div>
        <div class="sc-sub">Improvements needed</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((warn / allChecks.length) * 100)}%;background:#f59e0b"></div></div>
      </div>
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Passed</div>
          <div class="sc-icon" style="background:#dcfce7">🟢</div>
        </div>
        <div class="sc-num" style="color:#16a34a">${pass}</div>
        <div class="sc-sub">Checks passing</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((pass / allChecks.length) * 100)}%;background:#21bf6b"></div></div>
      </div>
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Total Checks</div>
          <div class="sc-icon" style="background:#f1f3f7">📋</div>
        </div>
        <div class="sc-num">${allChecks.length}</div>
        <div class="sc-sub">Analyzed across ${mod.categories.length} categories</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:100%;background:#e2e5ed"></div></div>
      </div>
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Critical Issues</div>
          <div class="sc-icon" style="background:#fee2e2">⚠️</div>
        </div>
        <div class="sc-num" style="color:#dc2626">${allChecks.filter((c) => c.p === "critical" && c.ok === 0).length}</div>
        <div class="sc-sub">Require immediate action</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((allChecks.filter((c) => c.p === "critical" && c.ok === 0).length / allChecks.filter((c) => c.p === "critical").length) * 100 || 0)}%;background:#dc2626"></div></div>
      </div>
      <div class="stat-card">
        <div class="sc-top">
          <div class="sc-label">Impact Score</div>
          <div class="sc-icon" style="background:#f0fdf4">📈</div>
        </div>
        <div class="sc-num" style="color:#16a34a">${mod.score}</div>
        <div class="sc-sub">Overall ${mod.label} health</div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${mod.score}%;background:${col}"></div></div>
      </div>
    </div>
  </div>`;

  // category grid
  html += `<div class="section-title-row"><div><div class="section-title">Category Breakdown</div><div class="section-sub">Click any category to see detailed checks</div></div></div>`;
  html += `<div class="cat-grid">`;
  mod.categories.forEach((cat, ci) => {
    const col2 = scoreColor(cat.score);
    const p2 = cat.checks.filter((c) => c.ok === 1).length;
    const f2 = cat.checks.filter((c) => c.ok === 0).length;
    const w2 = cat.checks.filter((c) => c.ok === 0.5).length;
    html += `<div class="cat-card" onclick="toggleCatDetail('${mod.label}-${ci}')">
      <div class="cat-head">
        <div class="cat-icon" style="background:${cat.bg}">${cat.icon}</div>
        <div><div class="cat-name">${cat.name}</div><div class="cat-sub">${cat.checks.length} checks</div></div>
      </div>
      <div class="cat-score-row">
        <div class="cat-score-num">${cat.score}</div>
        <span class="cat-grade-badge ${gradeClass(cat.score)}">${grade(cat.score)}</span>
        <div class="cat-track"><div class="cat-fill" style="width:${cat.score}%;background:${col2}"></div></div>
      </div>
      <div class="cat-footer">
        <span><strong style="color:#16a34a">${p2}</strong> passed</span>
        <span><strong style="color:#d97706">${w2}</strong> warnings</span>
        <span><strong style="color:#dc2626">${f2}</strong> errors</span>
      </div>
    </div>`;
  });
  html += `</div>`;

  // main issues table
  html += `<div class="section-title-row" style="margin-top:8px">
    <div><div class="section-title">All Checks</div><div class="section-sub">Sorted by priority — click a row to expand details</div></div>
  </div>`;
  html += buildChecksTable(allChecks, "main-" + mod.label);

  return html;
}

// Recommendation text per check
function recoText(c) {
  const map = {
    "Title Tag":
      "Add a unique 50–60 character title tag on every page. Include your primary keyword near the beginning. Avoid duplicate titles across pages.",
    "Meta Description":
      "Write a compelling 150–160 character meta description. Include a call-to-action and your target keyword. Each page needs a unique description.",
    "H1 Heading":
      "Use exactly one H1 tag per page containing your primary keyword. Place it as the first visible heading on the page.",
    "H2/H3 Hierarchy":
      "Structure headings logically: H1 → H2 → H3. Never skip levels. Use H2 for main sections and H3 for subsections.",
    "Keyword in First 100 Words":
      "Place your target keyword naturally within the first 100 words of body content. This signals topic relevance to search engines.",
    "Image Alt Attributes":
      "Add descriptive alt text to every image. Include relevant keywords where appropriate. Keep alt text under 125 characters.",
    "Canonical Tag":
      "Add a self-referencing canonical tag to every page to prevent duplicate content. Point all variants to the preferred URL.",
    "Internal Linking":
      "Add 3–5 contextual internal links per page. Link to relevant pillar pages and use keyword-rich anchor text.",
    "Content Word Count":
      "Expand thin content to at least 800–1200 words. Cover the topic thoroughly to outrank competitors.",
    "HTTPS / SSL":
      "Install an SSL certificate and redirect all HTTP traffic to HTTPS. Ensure no mixed content warnings exist.",
    "robots.txt":
      "Create or fix your robots.txt file. Allow crawling of all important pages. Disallow only admin and private directories.",
    "XML Sitemap":
      "Create an XML sitemap listing all important URLs. Submit it to Google Search Console and Bing Webmaster Tools.",
    "Noindex Tags":
      "Remove noindex directives from all pages you want indexed. Audit meta robots tags and X-Robots-Tag headers.",
    "Structured Data":
      "Add JSON-LD schema markup. Start with Organization, WebSite, and BreadcrumbList schemas on every page.",
    "404 Error Page":
      "Create a helpful custom 404 page with navigation links. Log 404 errors in Search Console and redirect broken URLs.",
    "URL Structure":
      "Use short, keyword-rich URLs with hyphens as separators. Remove stop words, numbers, and parameters from URLs.",
    "Redirect Chains":
      "Fix redirect chains by pointing each old URL directly to its final destination. Maximum one redirect per URL.",
    "Hreflang Tags":
      "Implement hreflang tags for multilingual sites. Ensure bidirectional implementation between language variants.",
    "Page Load Speed":
      "Minify CSS/JS, enable GZIP compression, use a CDN, and optimize server response time. Target under 3 seconds.",
    "LCP — Largest Contentful Paint":
      "Optimize LCP by preloading hero images, removing render-blocking resources, and using efficient image formats (WebP).",
    "CLS — Cumulative Layout Shift":
      "Set explicit width/height on images and embeds. Reserve space for ads and dynamic content to prevent layout shifts.",
    "INP — Interaction to Next Paint":
      "Break up long JavaScript tasks, defer non-critical scripts, and optimize event handlers to reduce interaction delays.",
    TTFB: "Use server-side caching, upgrade hosting, implement a CDN, and optimize database queries to reduce time to first byte.",
    "Image Optimization":
      "Convert all images to WebP or AVIF format. Use srcset for responsive images. Compress images with lossy/lossless tools.",
    "Render-Blocking Resources":
      "Add defer or async attributes to non-critical scripts. Move CSS to the head and eliminate unused stylesheets.",
    "Browser Caching":
      "Set cache-control headers: 1 year for static assets, 1 day for HTML. Use versioned filenames for cache-busting.",
    "Mobile Responsiveness":
      "Use responsive CSS with flexible grids. Test on Google Mobile-Friendly Test. Avoid fixed-width layouts.",
    "Viewport Meta Tag":
      "Add <meta name='viewport' content='width=device-width, initial-scale=1'> to every page's <head>.",
    "Touch Target Size":
      "Make all buttons and links at least 44×44px. Add sufficient padding around small touch targets.",
    "Font Size on Mobile":
      "Set base font size to at least 16px. Avoid using px for font sizes — use rem units for accessibility.",
    "Domain Authority":
      "Earn high-quality backlinks from authoritative sites. Create linkable assets like original research, tools, and guides.",
    "Total Backlinks":
      "Build a consistent link acquisition strategy. Guest post, create partnerships, and submit to relevant directories.",
    "Referring Domains":
      "Focus on earning links from diverse domains. One link from 100 domains beats 100 links from one domain.",
    "Toxic Backlinks":
      "Identify toxic links in Google Search Console. Create a disavow file and submit it to remove their influence.",
    "Social Profiles Linked":
      "Link all active social media profiles from your site footer or About page. Keep NAP consistent across platforms.",
    "Google Business Profile":
      "Claim and fully complete your Google Business Profile. Add photos, hours, categories, and respond to reviews.",
    "NAP Consistency":
      "Audit all business directory listings. Ensure name, address, and phone are identical across every platform.",
    "Local Business Schema":
      "Implement LocalBusiness JSON-LD schema with name, address, phone, hours, and geo coordinates.",
    "Local Citations":
      "List your business on Google, Bing Places, Apple Maps, Yelp, and industry-specific directories.",
    "Question-Based Headings":
      "Rewrite H2/H3 headings as questions users actually search. Use tools like Answer The Public to find question keywords.",
    "Direct Answer Paragraphs":
      "Follow each question heading with a concise 40–60 word answer paragraph. Lead with the answer, then elaborate.",
    "Definition Sections":
      "Add 'What is X?' sections with clear, concise definitions. Format as: 'X is [definition]' for featured snippet eligibility.",
    "Ordered Lists for Steps":
      "Format how-to content as numbered lists with 3–8 steps. Each step should be one sentence with a clear action.",
    "Comparison Tables":
      "Add HTML tables comparing key attributes. Use clear headers and short cell values for table snippet eligibility.",
    "FAQ Section":
      "Add a FAQ section with 5–10 Q&A pairs at the bottom of each page. Keep answers between 40–80 words.",
    "Conversational Keywords":
      "Target natural language questions users ask voice assistants. Include 'how to', 'what is', 'near me' phrases.",
    "Long-Tail Questions":
      "Create dedicated pages for specific question keywords. Target low-competition, high-intent question phrases.",
    "Local Voice Signals":
      "Add location-based content and use 'near me' phrases naturally. Include city/region in your content and meta tags.",
    "Speakable Schema":
      "Add SpeakableSpecification schema to identify content suitable for text-to-speech. Mark intro paragraphs and definitions.",
    "FAQPage Schema":
      "Implement FAQPage JSON-LD schema with your FAQ Q&A pairs. Ensure answers are under 300 characters for best display.",
    "HowTo Schema":
      "Add HowTo schema to tutorial and step-by-step content. Include each step, estimated time, and required tools.",
    "QAPage Schema":
      "Add QAPage schema to community Q&A content. Mark the accepted answer with the upvoteCount property.",
    "Review / Rating Schema":
      "Implement Product or LocalBusiness review schema with aggregateRating. Collect genuine reviews from users.",
    "Event Schema":
      "Add Event JSON-LD to all upcoming events with name, date, location, and URL. Enables Google Event rich results.",
    "Author Bio & Credentials":
      "Add a detailed author bio with credentials, expertise, and links to social profiles on every piece of content.",
    "About Page Quality":
      "Create a comprehensive About page with company history, team bios, credentials, and mission statement.",
    "External Citations":
      "Link out to authoritative sources (government, academic, industry) to support claims and show research depth.",
    "Trust Badges & Reviews":
      "Display security badges, industry certifications, and real customer reviews prominently on key pages.",
    "Last Updated Date":
      "Show publication and last-updated dates on all content pages. Update content regularly to maintain freshness signals.",
    "Clear Topic Sentences":
      "Begin each section with a clear topic sentence that summarizes what follows. Helps NLP systems parse content.",
    "Entity Linking":
      "Link first mentions of key entities (people, brands, places) to authoritative sources. Use consistent entity names.",
    "Semantic Keyword Coverage":
      "Use LSI keywords and semantic variants throughout content. Avoid over-reliance on exact-match keywords.",
    "Readability Score":
      "Simplify complex sentences. Aim for Flesch Reading Ease above 60. Use active voice and short paragraphs.",
    "Topical Depth":
      "Cover your topic exhaustively. Address related questions, subtopics, and use cases to establish topical authority.",
    "Clear Page Summaries":
      "Start every page with a 2–3 sentence summary of the content. This helps LLMs accurately describe your page.",
    "Factual Data with Sources":
      "Back every statistic with a citation link. Use government, academic, or authoritative industry sources.",
    "Unique Research / Data":
      "Conduct original surveys or compile unique datasets. LLMs and journalists cite original data more frequently.",
    "AI Crawler Permissions":
      "Update robots.txt to explicitly allow or disallow AI training crawlers (GPTBot, ClaudeBot, Google-Extended).",
    "Structured for Extraction":
      "Use clear H2/H3 headings, bullet lists, and short paragraphs. Avoid dense walls of text that AI systems can't parse.",
    "Consistent Brand Name":
      "Use your exact brand name consistently across all pages, metadata, and external mentions to aid entity recognition.",
    "Wikipedia / Wikidata":
      "Submit your brand to Wikidata with a unique identifier. Pursue Wikipedia coverage through PR and notable coverage.",
    "Industry Directories":
      "List your brand in relevant niche directories and association member pages. These build topic authority citations.",
    "News & Press Mentions":
      "Issue press releases for milestones. Build journalist relationships to earn brand mentions in news articles.",
    "Niche Term Co-occurrence":
      "Create content that naturally pairs your brand with target niche keywords to build semantic associations.",
    "Pillar + Cluster Content":
      "Build topic clusters: one pillar page per main topic + 5–10 cluster pages. Link all clusters back to the pillar.",
    "Definition Pages":
      "Create standalone definition pages for key terms in your niche. Title them 'What is [Term]?' for AI discoverability.",
    "Comparison Pages":
      "Create [Your Brand] vs [Competitor] pages. Use balanced comparison tables to rank for comparison searches.",
    "Use Case Content":
      "Create dedicated pages for each use case or customer segment. Include specific examples and outcomes.",
    "Glossary / Terminology":
      "Build a comprehensive glossary of niche terms. Link glossary terms throughout your site content.",
    "HTTPS Security":
      "Ensure valid SSL certificate, force HTTPS, and fix all mixed-content warnings. Renew certificates before expiry.",
    "Contact & Ownership":
      "Display full company name, address, phone, email, and team details prominently on contact and about pages.",
    "Legal Pages":
      "Create and maintain Privacy Policy, Terms of Service, Cookie Policy, and Disclaimer pages. Update them regularly.",
    "Content Freshness":
      "Audit and update content at least quarterly. Add new information, update statistics, and refresh outdated advice.",
    "Social Proof":
      "Add testimonials, case studies, review counts, and user-generated content to key pages to build credibility.",
    "Organization Schema":
      "Implement Organization JSON-LD with legalName, url, logo, contactPoint, and sameAs (social profiles).",
    "Author / Person Schema":
      "Add Person schema to author pages and bylines with name, jobTitle, sameAs, and knowsAbout properties.",
    "BreadcrumbList Schema":
      "Add BreadcrumbList JSON-LD to all pages showing their position in the site hierarchy.",
    "Open Graph Tags":
      "Add og:title, og:description, og:image, and og:url to all pages. Twitter cards with twitter:card and twitter:image.",
    SiteLinksSearchBox:
      "Add WebSite schema with SearchAction potentialAction to enable the sitelinks search box in Google results.",
  };
  return map[c.n] || c.b;
}

function buildChecksTable(checks, prefix) {
  const sorted = [...checks].sort((a, b) => {
    const o = ["critical", "high", "medium", "low"];
    const oa = o.indexOf(a.p),
      ob = o.indexOf(b.p);
    if (oa !== ob) return oa - ob;
    return a.ok - b.ok;
  });
  let html = `<div class="issues-table">
    <div class="it-header">
      <div class="it-hcell"></div>
      <div class="it-hcell">Check</div>
      <div class="it-hcell">Category</div>
      <div class="it-hcell">Priority</div>
      <div class="it-hcell">Impact</div>
      <div class="it-hcell">Recommendation</div>
    </div>`;
  sorted.forEach((c, i) => {
    const ip = impactPct(c.p, c.ok);
    const ic = impactColor(c.p);
    const reco = recoText(c);
    const recoClass = c.ok === 1 ? "it-reco it-reco-pass" : "it-reco";
    const recoDisplay =
      c.ok === 1 ? "✓ No action needed" : reco.split(".")[0] + ".";
    html += `<div class="it-row" onclick="toggleRow('${prefix}-${i}')">
      <div class="it-status"><div class="status-dot ${dotClass(c.ok)}"></div></div>
      <div class="it-name">
        <div class="it-name-main">${c.n}</div>
        <div class="it-name-desc">${c.desc}</div>
      </div>
      <div><span class="it-category">${c.cat || "Check"}</span></div>
      <div><span class="it-priority ${prClass(c.p)}">${c.p}</span></div>
      <div class="it-impact">
        <div class="impact-track"><div class="impact-bar" style="width:${ip}%;background:${ic}"></div></div>
        <span style="font-size:10px;color:#9ba3af">${ip}%</span>
      </div>
      <div class="${recoClass}">${recoDisplay}</div>
    </div>
    <div class="expand-panel" id="exp-${prefix}-${i}">
      <div class="ep-row">
        <div class="ep-status ${dotClass(c.ok)}"></div>
        <div class="ep-info">
          <div class="ep-name">${c.ok === 1 ? "✓ Passed" : c.ok === 0.5 ? "⚠ Warning" : "✕ Failed"} — ${c.n}</div>
          <div class="ep-desc" style="margin-bottom:6px">${c.ok === 1 ? c.g : c.b}</div>
          ${c.ok !== 1 ? `<div style="font-size:11px;color:#374151;background:#fff;border:1px solid #e9ecef;border-radius:6px;padding:8px 10px;line-height:1.6"><strong style="color:#ff642d">How to fix:</strong> ${reco}</div>` : ""}
        </div>
        <div class="ep-right">
          <span class="it-priority ${prClass(c.p)}">${c.p}</span>
        </div>
      </div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

function toggleRow(id) {
  const el = document.getElementById("exp-" + id);
  if (el) el.classList.toggle("open");
}

function toggleCatDetail(id) {
  // just scroll to table
}

// ── ALL ISSUES ───────────────────────────────────────
function buildAllIssues(data) {
  const allChecks = [];
  ["seo", "aeo", "geo"].forEach((k) => {
    data.mods[k].categories.forEach((cat) => {
      cat.checks.forEach((c) =>
        allChecks.push({ ...c, module: k.toUpperCase(), cat: cat.name }),
      );
    });
  });
  const fail = allChecks.filter((c) => c.ok === 0);
  const warn = allChecks.filter((c) => c.ok === 0.5);
  const pass = allChecks.filter((c) => c.ok === 1);

  let html = `<div class="overview-row" style="grid-template-columns:repeat(4,1fr)">`;
  [
    {
      label: "Total Checks",
      val: allChecks.length,
      col: "#6b7280",
      bg: "#f1f3f7",
    },
    { label: "Errors", val: fail.length, col: "#dc2626", bg: "#fee2e2" },
    { label: "Warnings", val: warn.length, col: "#d97706", bg: "#fff7ed" },
    { label: "Passed", val: pass.length, col: "#16a34a", bg: "#dcfce7" },
  ].forEach((s) => {
    html += `<div class="stat-card">
      <div class="sc-top"><div class="sc-label">${s.label}</div><div class="sc-icon" style="background:${s.bg}"></div></div>
      <div class="sc-num" style="color:${s.col}">${s.val}</div>
      <div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((s.val / allChecks.length) * 100)}%;background:${s.col}"></div></div>
    </div>`;
  });
  html += `</div>`;

  // top issues + passed panels
  html += `<div class="two-col">
    <div class="panel">
      <div class="panel-head">
        <div class="panel-head-title">🔴 Errors <span class="panel-count">${fail.length}</span></div>
      </div>
      ${fail
        .slice(0, 8)
        .map(
          (c) => `
        <div class="panel-item">
          <div class="pi-icon pi-fail">✕</div>
          <div class="pi-body">
            <div class="pi-name">${c.n}</div>
            <div class="pi-desc">${c.b}</div>
            <span class="pi-tag pr-${c.p}">${c.p} · ${c.module}</span>
          </div>
        </div>`,
        )
        .join("")}
    </div>
    <div class="panel">
      <div class="panel-head">
        <div class="panel-head-title">🟡 Warnings <span class="panel-count">${warn.length}</span></div>
      </div>
      ${warn
        .slice(0, 8)
        .map(
          (c) => `
        <div class="panel-item">
          <div class="pi-icon pi-warn">~</div>
          <div class="pi-body">
            <div class="pi-name">${c.n}</div>
            <div class="pi-desc">${c.g}</div>
            <span class="pi-tag pr-${c.p}">${c.p} · ${c.module}</span>
          </div>
        </div>`,
        )
        .join("")}
    </div>
  </div>`;

  html += `<div class="section-title-row"><div class="section-title">All Issues — Full List</div></div>`;
  html += buildChecksTable(
    allChecks.filter((c) => c.ok !== 1),
    "allissues",
  );
  return html;
}

// ── RECOMMENDATIONS TAB ─────────────────────────────
function buildRecommendationsTab(data) {
  const allChecks = [];
  ["seo", "aeo", "geo"].forEach((k) => {
    data.mods[k].categories.forEach((cat) => {
      cat.checks
        .filter((c) => c.ok !== 1)
        .forEach((c) => {
          allChecks.push({
            ...c,
            module: k.toUpperCase(),
            modKey: k,
            cat: cat.name,
          });
        });
    });
  });

  const byCrit = { critical: [], high: [], medium: [], low: [] };
  allChecks.forEach((c) => byCrit[c.p].push(c));

  const total = allChecks.length;
  const critCount = byCrit.critical.length;
  const highCount = byCrit.high.length;
  const medCount = byCrit.medium.length;
  const lowCount = byCrit.low.length;

  let html = `<div class="reco-summary-bar">
    <div class="rsb-item"><div class="rsb-dot" style="background:#6b7280"></div>Total issues: <span class="rsb-num" style="margin-left:4px">${total}</span></div>
    <div class="rsb-item"><div class="rsb-dot" style="background:#dc2626"></div>Critical: <span class="rsb-num" style="margin-left:4px;color:#dc2626">${critCount}</span></div>
    <div class="rsb-item"><div class="rsb-dot" style="background:#d97706"></div>High: <span class="rsb-num" style="margin-left:4px;color:#d97706">${highCount}</span></div>
    <div class="rsb-item"><div class="rsb-dot" style="background:#a16207"></div>Medium: <span class="rsb-num" style="margin-left:4px;color:#a16207">${medCount}</span></div>
    <div class="rsb-item"><div class="rsb-dot" style="background:#6b7280"></div>Low: <span class="rsb-num" style="margin-left:4px">${lowCount}</span></div>
  </div>`;

  const priConfig = [
    {
      key: "critical",
      label: "Critical Issues",
      dot: "#dc2626",
      numCls: "rn-critical",
    },
    { key: "high", label: "High Priority", dot: "#d97706", numCls: "rn-high" },
    {
      key: "medium",
      label: "Medium Priority",
      dot: "#a16207",
      numCls: "rn-medium",
    },
    { key: "low", label: "Low Priority", dot: "#6b7280", numCls: "rn-low" },
  ];

  priConfig.forEach((pc) => {
    const items = byCrit[pc.key];
    if (!items.length) return;
    let num = 1;
    html += `<div class="reco-section">
      <div class="reco-section-head">
        <div class="reco-section-dot" style="background:${pc.dot}"></div>
        <div class="reco-section-title">${pc.label}</div>
        <span class="reco-section-count">${items.length} issues</span>
      </div>`;
    items.forEach((c, i) => {
      const reco = recoText(c);
      const modCls = "rmt-" + c.modKey;
      const ip = impactPct(c.p, c.ok);
      const ic = impactColor(c.p);
      html += `<div class="reco-card">
        <div class="reco-num ${pc.numCls}">${num++}</div>
        <div class="reco-body">
          <div class="reco-title">${c.n}</div>
          <div class="reco-action">${reco}</div>
          <div class="reco-impact-row">
            <div class="reco-impact-label">Impact</div>
            <div class="reco-impact-track"><div class="reco-impact-fill" style="width:${ip}%;background:${ic}"></div></div>
            <div class="reco-impact-pct">${ip}%</div>
          </div>
          <div class="reco-meta-row" style="margin-top:8px">
            <span class="reco-module-tag ${modCls}">${c.module}</span>
            <span class="reco-tag">${c.cat}</span>
            <span class="reco-tag">${c.ok === 0.5 ? "⚠ Partial" : "✕ Missing"}</span>
          </div>
        </div>
      </div>`;
    });
    html += `</div>`;
  });
  return html;
}

// ── PDF DOWNLOAD (jsPDF direct download) ─────────────
function pdfGrade(s) {
  return s >= 90
    ? "A+"
    : s >= 80
      ? "A"
      : s >= 70
        ? "B+"
        : s >= 60
          ? "B"
          : s >= 50
            ? "C"
            : s >= 40
              ? "D"
              : "F";
}
function pdfScoreCol(s) {
  return s >= 65 ? "#21bf6b" : s >= 45 ? "#f59e0b" : "#ef4444";
}
function pdfH2r(h) {
  h = h.replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

async function downloadPDF() {
  if (!_data) {
    return;
  }
  const btn = document.querySelector(".btn-orange");
  const origTxt = btn.textContent;
  btn.textContent = "Generating PDF...";
  btn.disabled = true;
  try {
    await new Promise((res, rej) => {
      if (window.jspdf) {
        res();
        return;
      }
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const PW = 210,
      PH = 297,
      ML = 14,
      MR = 14,
      CW = PW - ML - MR;
    const SF = (c) => {
      const [r, g, b] = pdfH2r(c);
      doc.setFillColor(r, g, b);
    };
    const SD = (c) => {
      const [r, g, b] = pdfH2r(c);
      doc.setDrawColor(r, g, b);
    };
    const ST = (c) => {
      const [r, g, b] = pdfH2r(c);
      doc.setTextColor(r, g, b);
    };
    const OR = "#ff642d",
      DK = "#1a1a2e",
      MD = "#5c6070",
      LT = "#9ba3af";
    const BD = "#e2e5ed",
      BG2 = "#f8f9fc";
    const GR = "#21bf6b",
      RD = "#ef4444",
      YL = "#f59e0b",
      BL = "#3b82f6";
    const GRB = "#dcfce7",
      RDB = "#fee2e2",
      YLB = "#fff7ed",
      BLB = "#eff6ff";
    const WH = "#ffffff";
    const SEO = "#ff642d",
      AEO = "#10b981",
      GEO = "#8b5cf6";
    const d = _data;
    const allC = ["seo", "aeo", "geo"].flatMap((k) =>
      d.mods[k].categories.flatMap((c) => c.checks),
    );
    const totP = allC.filter((c) => c.ok === 1).length;
    const totW = allC.filter((c) => c.ok === 0.5).length;
    const totF = allC.filter((c) => c.ok === 0).length;
    const ov = Math.round(
      (d.mods.seo.score + d.mods.aeo.score + d.mods.geo.score) / 3,
    );
    let y = 0;
    function hdr() {
      SF(OR);
      doc.rect(0, 0, PW, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      ST(WH);
      doc.text("AuditX", ML, 6.5);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      ST(WH);
      doc.text("SEO / AEO / GEO Audit Platform", ML + 22, 6.5);
      doc.setFontSize(7);
      const dt = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      doc.text(dt, PW - ML, 6.5, "right");
      y = 14;
    }
    function ftr() {
      const fy = PH - 9;
      SF(DK);
      doc.rect(0, fy - 1, PW, 10, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      ST(WH);
      doc.text("BuimbDigital", ML, fy + 4);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      ST(LT);
      doc.text("info@buimbdigital.com", ML + 27, fy + 4);
      doc.text(
        "Powered by AuditX  |  buimbdigital.com",
        PW - ML,
        fy + 4,
        "right",
      );
    }
    const newPage = () => {
      doc.addPage();
      y = 0;
      hdr();
      ftr();
    };
    const needY = (n) => {
      if (y + n > PH - 20) newPage();
    };
    function secTitle(txt, sub) {
      needY(12);
      SF(BG2);
      SD(BD);
      doc.setLineWidth(0.2);
      doc.rect(ML, y, CW, 8, "FD");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      ST(DK);
      doc.text(txt, ML + 3, y + 5.5);
      if (sub) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        ST(LT);
        doc.text(sub, PW - MR, y + 5.5, "right");
      }
      y += 11;
    }
    function gauge(cx, cy, r, score) {
      const col = pdfScoreCol(score);
      SD(BD);
      doc.setLineWidth(3);
      doc.circle(cx, cy, r, "S");
      SD(col);
      doc.setLineWidth(3);
      const steps = Math.round((score / 100) * 48);
      for (let i = 0; i < steps; i++) {
        const a1 = -Math.PI / 2 + (i / 48) * 2 * Math.PI;
        const a2 = -Math.PI / 2 + ((i + 1) / 48) * 2 * Math.PI;
        doc.line(
          cx + r * Math.cos(a1),
          cy + r * Math.sin(a1),
          cx + r * Math.cos(a2),
          cy + r * Math.sin(a2),
        );
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      ST(DK);
      doc.text(String(score), cx, cy + 1, "center");
      doc.setFontSize(6);
      ST(LT);
      doc.text("/100", cx, cy + 5.5, "center");
    }
    function miniBar(x, by, w, h, val, max, col) {
      SF(BG2);
      doc.rect(x, by, w, h, "F");
      const fw = max > 0 ? Math.max(0, (val / max) * w) : 0;
      if (fw > 0) {
        SF(col);
        doc.rect(x, by, fw, h, "F");
      }
    }
    function chipPDF(x, cy, txt, bg, fg, w) {
      const cw = w || Math.min(doc.getTextWidth(txt) + 6, 40);
      SF(bg);
      doc.roundedRect(x, cy, cw, 4, 0.8, 0.8, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(6);
      ST(fg);
      doc.text(txt, x + cw / 2, cy + 2.9, "center");
      return cw;
    }
    // PAGE 1: COVER
    hdr();
    ftr();
    SF(OR);
    doc.rect(ML, y, CW, 28, "F");
    SF("#c2410c");
    doc.rect(PW - MR - 18, y, 18, 28, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    ST(WH);
    doc.text("Site Audit Report", ML + 6, y + 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    ST("#ffd4c2");
    doc.text(
      "SEO / AEO / GEO  --  Complete Search Visibility Analysis",
      ML + 6,
      y + 20,
    );
    doc.setFontSize(7);
    ST("#ffb89a");
    doc.text(
      "Generated by BuimbDigital  |  info@buimbdigital.com",
      ML + 6,
      y + 26,
    );
    y += 32;
    SF(WH);
    SD(BD);
    doc.setLineWidth(0.3);
    doc.roundedRect(ML, y, CW, 24, 2, 2, "FD");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    ST(LT);
    doc.text("WEBSITE AUDITED", ML + 5, y + 5);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    ST(DK);
    doc.text(d.domain, ML + 5, y + 13);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    ST(MD);
    doc.text(
      "Audit Date: " +
        new Date().toLocaleString("en-GB", {
          dateStyle: "long",
          timeStyle: "short",
        }),
      ML + 5,
      y + 19,
    );
    doc.text(
      "Total Checks: " + allC.length + "  |  SEO + AEO + GEO",
      PW - MR - 3,
      y + 19,
      "right",
    );
    y += 28;
    secTitle("Overall Audit Scores", "SEO / AEO / GEO + Overall Health");
    const gDefs = [
      { lbl: "SEO", sc: d.mods.seo.score, col: SEO },
      { lbl: "AEO", sc: d.mods.aeo.score, col: AEO },
      { lbl: "GEO", sc: d.mods.geo.score, col: GEO },
      { lbl: "Overall", sc: ov, col: OR },
    ];
    gDefs.forEach((g, i) => {
      const gx = ML + 22 + i * 46;
      gauge(gx, y + 14, 11, g.sc);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      ST(DK);
      doc.text(g.lbl, gx, y + 29, "center");
      const gr = pdfGrade(g.sc);
      const grCol = g.sc >= 65 ? GR : g.sc >= 45 ? YL : RD;
      const grBg = g.sc >= 65 ? GRB : g.sc >= 45 ? YLB : RDB;
      chipPDF(gx - 5, y + 31, gr, grBg, grCol, 10);
    });
    y += 40;
    needY(24);
    const stats = [
      { lbl: "ERRORS", val: totF, col: RD, bg: RDB },
      { lbl: "WARNINGS", val: totW, col: YL, bg: YLB },
      { lbl: "PASSED", val: totP, col: GR, bg: GRB },
      { lbl: "TOTAL", val: allC.length, col: BL, bg: BLB },
    ];
    const sw = (CW - 9) / 4;
    stats.forEach((s, i) => {
      const sx = ML + i * (sw + 3);
      SF(s.bg);
      SD(BD);
      doc.setLineWidth(0.2);
      doc.roundedRect(sx, y, sw, 18, 2, 2, "FD");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(6);
      ST(LT);
      doc.text(s.lbl, sx + 3, y + 5);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(15);
      ST(s.col);
      doc.text(String(s.val), sx + 3, y + 13);
      miniBar(sx + 3, y + 15.5, sw - 6, 1.5, s.val, allC.length, s.col);
    });
    y += 24;
    needY(36);
    secTitle("Issues Distribution by Module");
    const mkDef = [
      { k: "seo", lbl: "SEO Analysis", col: SEO },
      { k: "aeo", lbl: "AEO Analysis", col: AEO },
      { k: "geo", lbl: "GEO Analysis", col: GEO },
    ];
    const bW = CW - 44,
      bX = ML + 40;
    mkDef.forEach((m, i) => {
      const mc = d.mods[m.k].categories.flatMap((c) => c.checks);
      const mf = mc.filter((c) => c.ok === 0).length,
        mw = mc.filter((c) => c.ok === 0.5).length,
        mp = mc.filter((c) => c.ok === 1).length;
      const by = y + i * 10;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      ST(DK);
      doc.text(m.lbl, ML, by + 5);
      SF(BG2);
      doc.roundedRect(bX, by, bW, 7, 1, 1, "F");
      let xo = bX;
      [
        [mf, RD],
        [mw, YL],
        [mp, GR],
      ].forEach(([n, c]) => {
        if (n > 0) {
          const w = (n / mc.length) * bW;
          SF(c);
          doc.rect(xo, by, w, 7, "F");
          xo += w;
        }
      });
      SD(BD);
      doc.setLineWidth(0.15);
      doc.roundedRect(bX, by, bW, 7, 1, 1, "S");
      const scBg2 =
        d.mods[m.k].score >= 65 ? GRB : d.mods[m.k].score >= 45 ? YLB : RDB;
      const scFg2 =
        d.mods[m.k].score >= 65 ? GR : d.mods[m.k].score >= 45 ? YL : RD;
      chipPDF(
        bX + bW + 3,
        by + 1.5,
        String(d.mods[m.k].score),
        scBg2,
        scFg2,
        10,
      );
    });
    y += mkDef.length * 10 + 2;
    [
      [RD, "Errors"],
      [YL, "Warnings"],
      [GR, "Passed"],
    ].forEach(([c, lbl], i) => {
      SF(c);
      doc.circle(ML + i * 30 + 2, y + 2, 1.5, "F");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(6.5);
      ST(MD);
      doc.text(lbl, ML + i * 30 + 5.5, y + 3);
    });
    y += 8;
    needY(20);
    secTitle("Category Scores Overview");
    const catW = (CW - 6) / 3;
    let cx = ML,
      cy = y,
      cc = 0;
    const modColMap = { seo: SEO, aeo: AEO, geo: GEO };
    mkDef.forEach((m) => {
      d.mods[m.k].categories.forEach((cat) => {
        if (cc >= 3) {
          cx = ML;
          cy += 20;
          cc = 0;
        }
        needY(22);
        const cs = cat.score,
          cFg = cs >= 65 ? GR : cs >= 45 ? YL : RD,
          cBg = cs >= 65 ? GRB : cs >= 45 ? YLB : RDB;
        SF(WH);
        SD(BD);
        doc.setLineWidth(0.2);
        doc.roundedRect(cx, cy, catW - 2, 18, 1.5, 1.5, "FD");
        SF(modColMap[m.k]);
        doc.rect(cx, cy, 2, 18, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        ST(DK);
        doc.text(
          cat.name.length > 20 ? cat.name.slice(0, 19) + ".." : cat.name,
          cx + 5,
          cy + 5.5,
        );
        doc.setFont("helvetica", "bold");
        doc.setFontSize(5.5);
        ST(modColMap[m.k]);
        doc.text(m.k.toUpperCase(), cx + 5, cy + 9.5);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        ST(cFg);
        doc.text(String(cs), cx + catW - 6, cy + 10, "right");
        miniBar(cx + 5, cy + 12, catW - 13, 2, cs, 100, cFg);
        const cp2 = cat.checks.filter((c) => c.ok === 1).length,
          cf2 = cat.checks.filter((c) => c.ok === 0).length;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(5.5);
        ST(LT);
        doc.text("P:" + cp2 + " F:" + cf2, cx + 5, cy + 16.5);
        cx += catW;
        cc++;
      });
    });
    y = cy + (cc > 0 ? 21 : 2);
    // DETAILED PAGES
    const colObj = {
      SF,
      SD,
      ST,
      WH,
      DK,
      MD,
      LT,
      BD,
      BG2,
      GR,
      RD,
      YL,
      GRB,
      RDB,
      YLB,
    };
    newPage();
    secTitle(
      "SEO Analysis -- Detailed Checks",
      "On-Page / Technical / Performance / Mobile / Backlinks / Local",
    );
    y = pdfChecks(
      doc,
      d.mods.seo.categories,
      y,
      colObj,
      ML,
      CW,
      PH,
      needY,
      chipPDF,
      miniBar,
    );
    newPage();
    secTitle(
      "AEO Analysis -- Detailed Checks",
      "Featured Snippets / Voice Search / Schema / E-E-A-T / NLP",
    );
    y = pdfChecks(
      doc,
      d.mods.aeo.categories,
      y,
      colObj,
      ML,
      CW,
      PH,
      needY,
      chipPDF,
      miniBar,
    );
    newPage();
    secTitle(
      "GEO Analysis -- Detailed Checks",
      "LLM Content / Brand Citability / AI Coverage / Trust / Metadata",
    );
    y = pdfChecks(
      doc,
      d.mods.geo.categories,
      y,
      colObj,
      ML,
      CW,
      PH,
      needY,
      chipPDF,
      miniBar,
    );
    // RECOMMENDATIONS
    newPage();
    secTitle(
      "Action Plan -- Prioritized Recommendations",
      "Fix these issues to improve your search visibility",
    );
    const allIss = [];
    ["seo", "aeo", "geo"].forEach((k) =>
      d.mods[k].categories.forEach((cat) =>
        cat.checks
          .filter((c) => c.ok !== 1)
          .forEach((c) => allIss.push({ ...c, module: k.toUpperCase() })),
      ),
    );
    allIss.sort(
      (a, b) =>
        ["critical", "high", "medium", "low"].indexOf(a.p) -
        ["critical", "high", "medium", "low"].indexOf(b.p),
    );
    const priCfg = [
      {
        k: "critical",
        lbl: "Critical Issues",
        col: RD,
        bg: RDB,
        fg: "#dc2626",
      },
      { k: "high", lbl: "High Priority", col: YL, bg: YLB, fg: "#c2410c" },
      {
        k: "medium",
        lbl: "Medium Priority",
        col: "#d97706",
        bg: "#fef9c3",
        fg: "#a16207",
      },
      { k: "low", lbl: "Low Priority", col: LT, bg: BG2, fg: LT },
    ];
    let rn = 1;
    priCfg.forEach((pc) => {
      const items = allIss.filter((c) => c.p === pc.k);
      if (!items.length) return;
      needY(12);
      SF(pc.bg);
      SD(pc.col);
      doc.setLineWidth(0.3);
      doc.roundedRect(ML, y, CW, 7, 1, 1, "FD");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      ST(pc.fg);
      doc.text(pc.lbl, ML + 5, y + 5);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      ST(LT);
      doc.text(
        "(" + items.length + " issues)",
        ML + 5 + doc.getTextWidth(pc.lbl) + 3,
        y + 5,
      );
      y += 10;
      items.forEach((item) => {
        const reco = recoText(item);
        const lines = doc.splitTextToSize(reco, CW - 28);
        const cardH = Math.max(14, 6 + lines.length * 3.6 + 4);
        needY(cardH + 3);
        SF(WH);
        SD(BD);
        doc.setLineWidth(0.2);
        doc.roundedRect(ML, y, CW, cardH, 1.5, 1.5, "FD");
        SF(pc.bg);
        doc.roundedRect(ML + 2.5, y + 3, 7, 7, 1, 1, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        ST(pc.fg);
        doc.text(String(rn++), ML + 6, y + 7.5, "center");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        ST(DK);
        doc.text(item.n, ML + 12, y + 7.5);
        const mCol = { SEO: SEO, AEO: AEO, GEO: GEO }[item.module] || OR;
        const mBg =
          { SEO: "#fff0eb", AEO: "#f0fdf4", GEO: "#f5f3ff" }[item.module] ||
          "#fff0eb";
        chipPDF(ML + 12, y + 9.5, item.module, mBg, mCol);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(6.5);
        ST(MD);
        lines.forEach((ln, li) => doc.text(ln, ML + 12, y + 14.5 + li * 3.6));
        const ip = impactPct(item.p, item.ok);
        doc.setFontSize(5.5);
        ST(LT);
        doc.text("Impact: " + ip + "%", ML + CW - 22, y + 7.5);
        SF(BG2);
        doc.rect(ML + CW - 22, y + 9.5, 19, 2, "F");
        SF(pc.col);
        doc.rect(ML + CW - 22, y + 9.5, (ip / 100) * 19, 2, "F");
        y += cardH + 3;
      });
      y += 3;
    });
    doc.save(
      "AuditX-Report-" +
        d.domain +
        "-" +
        new Date().toISOString().slice(0, 10) +
        ".pdf",
    );
  } catch (err) {
    console.error("PDF error:", err);
    alert("PDF generation failed: " + err.message);
  }
  btn.textContent = origTxt;
  btn.disabled = false;
}

// helper: render checks table pages
function pdfChecks(doc, categories, y, C, ML, CW, PH, needY, chip, bar) {
  const {
    SF,
    SD,
    ST,
    WH,
    WH2,
    DK,
    MD,
    LT,
    BD,
    BG2,
    GR,
    RD,
    YL,
    GRB,
    RDB,
    YLB,
  } = C;
  const scCol = (s) => (s >= 65 ? GR : s >= 45 ? YL : RD);
  const scBg = (s) => (s >= 65 ? GRB : s >= 45 ? YLB : RDB);

  categories.forEach((cat) => {
    needY(16);
    const sc = cat.score;
    SF(BG2);
    SD(BD);
    doc.setLineWidth(0.15);
    doc.rect(ML, y, CW, 8, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    ST(DK);
    doc.text(cat.name, ML + 3, y + 5.5);
    const cp = cat.checks.filter((c) => c.ok === 1).length;
    const cw = cat.checks.filter((c) => c.ok === 0.5).length;
    const cf = cat.checks.filter((c) => c.ok === 0).length;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    ST(LT);
    doc.text(
      "Passed: " + cp + "  Warnings: " + cw + "  Errors: " + cf,
      ML + CW - 15,
      y + 5.5,
      "right",
    );
    chip(
      ML + CW - 13,
      y + 2,
      String(sc) + "  " + pdfGrade(sc),
      scBg(sc),
      scCol(sc),
      13,
    );
    y += 10;

    cat.checks.forEach((c) => {
      const desc = c.ok === 1 ? c.g : c.b;
      const lines = doc.splitTextToSize(desc, CW - 24);
      const rh = Math.max(9, 4 + lines.length * 3.4 + 2);
      needY(rh + 1);
      const rowBg = c.ok === 0 ? "#fff5f5" : c.ok === 0.5 ? "#fffbf0" : WH;
      SF(rowBg);
      doc.rect(ML, y, CW, rh, "F");
      SD(BD);
      doc.setLineWidth(0.08);
      doc.line(ML, y + rh, ML + CW, y + rh);
      // dot
      const dc = c.ok === 1 ? GR : c.ok === 0.5 ? YL : RD;
      SF(dc);
      doc.circle(ML + 3, y + rh / 2, 1.4, "F");
      // name
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      ST(DK);
      doc.text(c.n, ML + 7, y + 4.5);
      // desc
      doc.setFont("helvetica", "normal");
      doc.setFontSize(6.2);
      ST(MD);
      lines.forEach((ln, li) => doc.text(ln, ML + 7, y + 8 + li * 3.4));
      // priority chip
      const pMap = {
        critical: { bg: RDB, fg: RD },
        high: { bg: YLB, fg: "#c2410c" },
        medium: { bg: "#fef9c3", fg: "#a16207" },
        low: { bg: BG2, fg: LT },
      };
      const pm = pMap[c.p] || pMap.low;
      chip(ML + CW - 18, y + 1.5, c.p.toUpperCase(), pm.bg, pm.fg, 17);
      y += rh + 1;
    });
    y += 4;
  });
  return y;
}

function resetAudit() {
  _data = null;
  document.getElementById("results").style.display = "none";
  document.getElementById("page-hero").style.display = "block";
  document.getElementById("audit-btn").disabled = false;
  document.getElementById("url-input").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("url-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") startAudit();
});
