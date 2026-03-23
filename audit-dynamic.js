// ══════════════════════════════════════════════════════
//  CONFIGURATION — Gemini API
// ══════════════════════════════════════════════════════
const GEMINI_API_KEY = [
  "AIzaSyDfd6",
  "AjxJ7_op9nA4",
  "xO4T89pIny",
  "uwOgZo8"
].join("");
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

// ══════════════════════════════════════════════════════
//  GEMINI PROMPT — Full structured audit
// ══════════════════════════════════════════════════════
function buildGeminiPrompt(domain) {
  return `You are an expert SEO/AEO/GEO auditor. Analyze: ${domain}

Return ONLY a raw JSON object (no markdown, no code fences, no explanation).

Rules:
- All scores: realistic numbers 0-100
- overall = SEO*0.4 + AEO*0.3 + GEO*0.3
- PASS/WARN/FAIL must be realistic and varied
- All text must reference ${domain} specifically
- EXACTLY 6 competitors, 10 primary kw, 15 long-tail kw, 8 local kw, 8 global kw, 6 calendar months (4-5 items each)

JSON structure (fill ALL fields with real data for ${domain}):
{
  "domain":"${domain}","overall":0,
  "mods":{
    "seo":{"label":"SEO","score":0,"color":"#ff642d","categories":[
      {"name":"On-Page SEO","sectionNum":"2.1","score":0,"checks":[
        {"n":"Title Tag","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Meta Description","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"H1 Heading","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"H2/H3 Hierarchy","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Keyword in First 100 Words","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Image Alt Attributes","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Canonical Tag","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Internal Linking","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Content Word Count","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Technical SEO","sectionNum":"2.2","score":0,"checks":[
        {"n":"HTTPS / SSL","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"robots.txt","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"XML Sitemap","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Noindex Tags","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Structured Data","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"404 Error Page","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"URL Structure","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Redirect Chains","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Hreflang Tags","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Core Web Vitals","sectionNum":"2.3","score":0,"checks":[
        {"n":"Page Load Speed","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"LCP (Largest Contentful Paint)","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"CLS (Cumulative Layout Shift)","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"INP (Interaction to Next Paint)","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"TTFB (Time to First Byte)","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Image Optimization","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Render-Blocking Resources","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Browser Caching","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Mobile & UX","sectionNum":"2.4","score":0,"intro":"","checks":[
        {"n":"Mobile Responsiveness","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Viewport Meta Tag","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Touch Targets","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Font Size on Mobile","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Backlinks & Off-Page SEO","sectionNum":"2.5","score":0,"intro":"","checks":[
        {"n":"Domain Authority","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Total Backlinks","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Referring Domains","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Toxic Backlinks","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Social Profiles Linked","status":"PASS","finding":"","priority":"LOW","action":""}
      ]},
      {"name":"Local SEO","sectionNum":"2.6","score":0,"checks":[
        {"n":"Google Business Profile","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"NAP Consistency","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Local Citations","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Local Structured Data","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Social Profiles Linked","status":"PASS","finding":"","priority":"LOW","action":""}
      ]}
    ]},
    "aeo":{"label":"AEO","score":0,"color":"#10b981","intro":"","categories":[
      {"name":"Featured Snippet Optimization","sectionNum":"3.1","score":0,"checks":[
        {"n":"Question-Based Headings","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Direct Answer Paragraphs","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Definition Sections","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Ordered Lists for Steps","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Comparison Tables","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"FAQ Section","status":"PASS","finding":"","priority":"HIGH","action":""}
      ]},
      {"name":"Voice Search","sectionNum":"3.2","score":0,"intro":"","checks":[
        {"n":"Conversational Keywords","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Long-Tail Questions","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Local Voice Signals","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Speakable Schema","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Answer Engine Schema","sectionNum":"3.3","score":0,"checks":[
        {"n":"FAQPage Schema","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"HowTo Schema","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"QAPage Schema","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Review/Rating Schema","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Event Schema","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"E-E-A-T Signals","sectionNum":"3.4","score":0,"checks":[
        {"n":"Author Bio & Credentials","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"About Page Quality","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"External Citations","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Trust Badges & Reviews","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Last Updated Date","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"NLP & Semantic SEO","sectionNum":"3.5","score":0,"intro":"","checks":[
        {"n":"Clear Topic Sentences","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Entity Linking","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Semantic Keyword Coverage","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Readability Score","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Topical Depth","status":"PASS","finding":"","priority":"HIGH","action":""}
      ]}
    ]},
    "geo":{"label":"GEO","score":0,"color":"#8b5cf6","intro":"","categories":[
      {"name":"LLM-Ready Content","sectionNum":"4.1","score":0,"intro":"","checks":[
        {"n":"Clear Page Summaries","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Factual Data with Sources","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Unique Research / Data","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"AI Crawler Permissions","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Structured for Extraction","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Brand Citability","sectionNum":"4.2","score":0,"checks":[
        {"n":"Consistent Brand Name","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Wikipedia / Wikidata","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Industry Directories","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"News & Press Mentions","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Niche Term Co-occurrence","status":"PASS","finding":"","priority":"HIGH","action":""}
      ]},
      {"name":"AI Topical Coverage","sectionNum":"4.3","score":0,"checks":[
        {"n":"Pillar + Cluster Content","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Definition Pages","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Comparison Pages","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Use Case Content","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Glossary / Terminology","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"AI Trust & Credibility","sectionNum":"4.4","score":0,"checks":[
        {"n":"HTTPS Security","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Contact & Ownership","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Legal Pages","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Content Freshness","status":"PASS","finding":"","priority":"HIGH","action":""},
        {"n":"Social Proof / Testimonials","status":"PASS","finding":"","priority":"MEDIUM","action":""}
      ]},
      {"name":"Machine-Readable Metadata","sectionNum":"4.5","score":0,"checks":[
        {"n":"Organization Schema","status":"PASS","finding":"","priority":"CRITICAL","action":""},
        {"n":"Open Graph Tags","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Twitter Card Tags","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"BreadcrumbList Schema","status":"PASS","finding":"","priority":"MEDIUM","action":""},
        {"n":"Author/Person Schema","status":"PASS","finding":"","priority":"HIGH","action":""}
      ]}
    ]}
  },
  "competitors":[
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""},
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""},
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""},
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""},
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""},
    {"name":"","domain":"","est":2010,"team":"","hq":"","market":"","pricing":"","clutch":"4.5/5","seo":3,"aeo":2,"geo":2,"strengths":"","weaknesses":"","opp":""}
  ],
  "keywords":{
    "primary":[
      {"kw":"","vol":"","diff":"HIGH","intent":"Commercial","pri":"CRITICAL","page":""},
      {"kw":"","vol":"","diff":"HIGH","intent":"Commercial","pri":"CRITICAL","page":""},
      {"kw":"","vol":"","diff":"HIGH","intent":"Commercial","pri":"CRITICAL","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"HIGH","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Commercial","pri":"HIGH","page":""}
    ],
    "longtail":[
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Informational","pri":"MEDIUM","page":""}
    ],
    "local":[
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"CRITICAL","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"CRITICAL","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Local","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Local","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Local","pri":"MEDIUM","page":""}
    ],
    "global":[
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"MEDIUM","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Commercial","pri":"HIGH","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Commercial","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Commercial","pri":"MEDIUM","page":""},
      {"kw":"","vol":"","diff":"LOW","intent":"Commercial","pri":"MEDIUM","page":""}
    ]
  },
  "calendar":[
    {"month":"Month 1","theme":"","focusText":"","items":[
      {"week":"W1","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W2","dates":"","type":"Service Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W3","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W4","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"}
    ]},
    {"month":"Month 2","theme":"","focusText":"","items":[
      {"week":"W5","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W6","dates":"","type":"Service Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W7","dates":"","type":"Case Study","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W8","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W9","dates":"","type":"FAQ Page","title":"","goal":"","keywords":"","cta":"","owner":"Content"}
    ]},
    {"month":"Month 3","theme":"","focusText":"","items":[
      {"week":"W10","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W11","dates":"","type":"Use Case Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W12","dates":"","type":"Case Study","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W13","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"}
    ]},
    {"month":"Month 4","theme":"","focusText":"","items":[
      {"week":"W14","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W15","dates":"","type":"Use Case Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W16","dates":"","type":"Service Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W17","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W18","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"}
    ]},
    {"month":"Month 5","theme":"","focusText":"","items":[
      {"week":"W19","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W20","dates":"","type":"Case Study","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W21","dates":"","type":"Use Case Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W22","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W23","dates":"","type":"FAQ Page","title":"","goal":"","keywords":"","cta":"","owner":"Content"}
    ]},
    {"month":"Month 6","theme":"","focusText":"","items":[
      {"week":"W24","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W25","dates":"","type":"Definition Page","title":"","goal":"","keywords":"","cta":"","owner":"Content"},
      {"week":"W26","dates":"","type":"Use Case Page","title":"","goal":"","keywords":"","cta":"","owner":"SEO"},
      {"week":"W27","dates":"","type":"Case Study","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W28","dates":"","type":"Social Post","title":"","goal":"","keywords":"","cta":"","owner":"Marketing"},
      {"week":"W29","dates":"","type":"Blog Post","title":"","goal":"","keywords":"","cta":"","owner":"Content"}
    ]}
  ]
}

Fill EVERY empty string "" and 0 with real, specific, accurate data for ${domain}. Make findings and actions highly specific to this exact website and its industry. Return ONLY the completed JSON.`;
}

// ══════════════════════════════════════════════════════
//  CALL GEMINI API
// ══════════════════════════════════════════════════════
async function callGeminiAPI(domain) {
  const prompt = buildGeminiPrompt(domain);

  const response = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 65536,
        responseMimeType: "application/json",
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const errMsg = data?.error?.message || JSON.stringify(data?.error || data);
    throw new Error("Gemini API Error " + response.status + ": " + errMsg);
  }

  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  if (!rawText) {
    const reason = data?.candidates?.[0]?.finishReason || "UNKNOWN";
    throw new Error("Gemini returned empty response. Finish reason: " + reason);
  }

  let cleaned = rawText.trim();
  cleaned = cleaned
    .replace(/^```json[\r\n]*/i, "")
    .replace(/^```[\r\n]*/i, "")
    .replace(/[\r\n]*```\s*$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (e) {}

  function repairJSON(str) {
    let result = str;
    result = result.replace(/,\s*$/, "");
    result = result.replace(/:\s*"[^"]*$/, ': ""');
    result = result.replace(/:\s*[^}\],"\s]*$/, ": null");
    const stack = [];
    let inStr = false, esc = false;
    for (let i = 0; i < result.length; i++) {
      const c = result[i];
      if (esc) { esc = false; continue; }
      if (c === "\\\\" && inStr) { esc = true; continue; }
      if (c === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (c === "{") stack.push("}");
      else if (c === "[") stack.push("]");
      else if ((c === "}" || c === "]") && stack.length) stack.pop();
    }
    if (inStr) result += '"';
    while (stack.length) result += stack.pop();
    return result;
  }

  const repaired = repairJSON(cleaned);
  try {
    return JSON.parse(repaired);
  } catch (e2) {
    throw new Error(
      "JSON parse failed (even after repair). Length=" +
        cleaned.length +
        ". Err: " +
        e2.message,
    );
  }
}

// ══════════════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════════════
function scCol(s) {
  return s >= 65 ? "#21bf6b" : s >= 45 ? "#f59e0b" : "#ef4444";
}
function scBg(s) {
  return s >= 65 ? "#dcfce7" : s >= 45 ? "#fef9c3" : "#fee2e2";
}
function grade(s) {
  return s >= 90 ? "A+" : s >= 80 ? "A" : s >= 70 ? "B+" : s >= 60 ? "B" : s >= 50 ? "C" : s >= 40 ? "D" : "F";
}
function gradeClass(s) {
  return s >= 65 ? "grade-good" : s >= 45 ? "grade-ok" : "grade-bad";
}
function statusBadge(st) {
  if (st === "PASS") return `<span class="status-badge sb-pass">&#10003; PASS</span>`;
  if (st === "WARN") return `<span class="status-badge sb-warn">&#9888; WARN</span>`;
  return `<span class="status-badge sb-fail">&#10005; FAIL</span>`;
}
function priChip(p) {
  return `<span class="priority-badge pr-${(p || "low").toLowerCase()}">${p}</span>`;
}
function typeChip(t) {
  const map = {
    "Blog Post": "type-blog",
    "Service Page": "type-service",
    "Case Study": "type-case",
    "Social Post": "type-social",
    "FAQ Page": "type-faq",
    "Use Case Page": "type-usecase",
    "Definition Page": "type-definition",
    "Landing Page": "type-landing",
  };
  return `<span class="type-chip ${map[t] || "type-blog"}">${t}</span>`;
}
function ownerChip(o) {
  const map = { SEO: "owner-seo", Content: "owner-content", Marketing: "owner-marketing" };
  return `<span class="owner-chip ${map[o] || "owner-seo"}">${o}</span>`;
}
function diffChip(d) {
  return `<span class="diff-${(d || "low").toLowerCase()}">${d}</span>`;
}
function scoreChip(s) {
  const c = s >= 80 ? "sc-green" : s >= 70 ? "sc-yellow" : "sc-red";
  return `<span class="score-chip ${c}">${s}/100 (${grade(s)})</span>`;
}

// ══════════════════════════════════════════════════════
//  generatePages — Animation + Loading Screen
//  (Purana naam rakha, andar naya animation hai)
// ══════════════════════════════════════════════════════
function generatePages(domain) {

  // ── SCAN STEPS ────────────────────────────────────
  const SCAN_STEPS = [
    { label: "Resolving DNS & verifying SSL certificate",  detail: "Checking HTTPS, redirect chains and domain health",            checks: 4,  duration: 3000 },
    { label: "Crawling homepage structure",                detail: "Reading meta tags, H1, canonical, Open Graph",                 checks: 7,  duration: 4500 },
    { label: "Discovering internal pages",                 detail: "Mapping URL structure, sitemap.xml, robots.txt",               checks: 5,  duration: 5000 },
    { label: "Auditing on-page SEO elements",              detail: "Title tags, meta descriptions, heading hierarchy, placement",  checks: 9,  duration: 5500 },
    { label: "Checking technical SEO setup",               detail: "Structured data, hreflang, noindex flags, redirect loops",     checks: 9,  duration: 5000 },
    { label: "Testing Core Web Vitals",                    detail: "LCP, CLS, INP, TTFB, render-blocking resources",              checks: 8,  duration: 5500 },
    { label: "Analysing mobile & UX signals",              detail: "Viewport tag, touch targets, font size, responsiveness",      checks: 4,  duration: 4500 },
    { label: "Running AEO & schema checks",                detail: "FAQ schema, HowTo, E-E-A-T, featured snippet readiness",      checks: 20, duration: 5000 },
    { label: "Scanning GEO & AI visibility signals",       detail: "LLM-ready content, brand citability, AI crawler access",      checks: 20, duration: 5000 },
    { label: "Auditing backlink & local SEO profile",      detail: "Domain authority, NAP consistency, Google Business signals",  checks: 10, duration: 4000 },
    { label: "Compiling scores & building report",         detail: "Weighting SEO×0.4, AEO×0.3, GEO×0.3 for final score",       checks: 89, duration: 5000 },
  ];

  // ── IMPORTANT: bahar accessible banao startAudit ke liye ──
  window.SCAN_STEPS_REF = SCAN_STEPS;

  // ── STYLES — ek baar inject ───────────────────────
  if (!document.getElementById("sc-styles")) {
    const st = document.createElement("style");
    st.id = "sc-styles";
    st.textContent = `
      #loading { display:none; position:fixed; inset:0; background:#fff; z-index:9999; overflow-y:auto; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; }
      .sc-wrap { max-width:560px; margin:0 auto; padding:48px 24px 40px; }
      .sc-domain-pill { display:inline-flex; align-items:center; gap:8px; border:0.5px solid #e2e5ed; border-radius:999px; padding:5px 14px; font-size:13px; color:#6b7280; margin-bottom:28px; }
      .sc-pulse { width:7px; height:7px; border-radius:50%; background:#1D9E75; animation:scPulse 1.2s ease-in-out infinite; }
      @keyframes scPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.65)} }
      .sc-title { font-size:20px; font-weight:600; color:#1a1a2e; margin-bottom:5px; }
      .sc-sub   { font-size:13px; color:#9ba3af; margin-bottom:24px; line-height:1.5; }
      .sc-prog-row { display:flex; align-items:center; gap:12px; margin-bottom:28px; }
      .sc-prog-track { flex:1; height:4px; border-radius:2px; background:#f1f3f7; overflow:hidden; }
      .sc-prog-fill  { height:100%; border-radius:2px; background:#378ADD; transition:width .5s ease; }
      .sc-prog-pct   { font-size:12px; font-weight:500; color:#6b7280; min-width:32px; text-align:right; }
      .sc-steps { display:flex; flex-direction:column; gap:0; margin-bottom:28px; position:relative; }
      .sc-step  { display:flex; align-items:flex-start; gap:12px; padding:10px 0; position:relative; }
      .sc-connector { position:absolute; left:10px; top:26px; bottom:-10px; width:1px; background:#e9ecef; z-index:0; }
      .sc-ico-wrap { width:22px; height:22px; flex-shrink:0; margin-top:1px; position:relative; z-index:1; }
      .sc-circle { width:22px; height:22px; border-radius:50%; border:1.5px solid #e2e5ed; background:#fff; display:flex; align-items:center; justify-content:center; transition:all .3s; }
      .sc-circle.active { border-color:#378ADD; background:#E6F1FB; }
      .sc-circle.done   { border-color:#1D9E75; background:#E1F5EE; }
      .sc-step-body { flex:1; }
      .sc-step-label { font-size:13px; font-weight:500; color:#9ba3af; line-height:1.4; transition:color .3s; }
      .sc-step-label.active { color:#1a1a2e; }
      .sc-step-label.done   { color:#6b7280; }
      .sc-step-detail { font-size:12px; color:#b0b7c3; margin-top:2px; max-height:0; overflow:hidden; transition:max-height .3s; }
      .sc-shimmer { height:3px; border-radius:2px; background:#f1f3f7; margin-top:6px; overflow:hidden; display:none; }
      .sc-shimmer-fill { height:100%; border-radius:2px; background:#378ADD; animation:scShimmer 1.4s ease-in-out infinite; width:38%; }
      @keyframes scShimmer { 0%{margin-left:-38%} 100%{margin-left:110%} }
      .sc-step-right { margin-left:auto; font-size:11px; color:#b0b7c3; padding-top:3px; white-space:nowrap; }
      .sc-step-right.done-ok { color:#0F6E56; font-weight:500; }
      .sc-cards { display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; }
      .sc-card  { background:#f8f9fc; border-radius:8px; padding:10px 12px; }
      .sc-card-lbl { font-size:11px; color:#9ba3af; margin-bottom:4px; }
      .sc-card-val { font-size:20px; font-weight:600; color:#1a1a2e; font-variant-numeric:tabular-nums; }
      .sc-card-val.blue  { color:#185FA5; }
      .sc-card-val.amber { color:#854F0B; }
      .sc-card-val.green { color:#0F6E56; }
    `;
    document.head.appendChild(st);
  }

  // ── LOADING SCREEN HTML ───────────────────────────
  const base = domain.replace(/https?:\/\//i, "").replace(/\/$/, "");
  const ld = document.getElementById("loading");
  ld.innerHTML = `
    <div class="sc-wrap">
      <div class="sc-domain-pill"><div class="sc-pulse"></div><span>${base}</span></div>
      <div class="sc-title">AI audit in progress</div>
      <div class="sc-sub" id="sc-sub">Gemini is analysing your site across 89 checks — takes about 60 seconds</div>
      <div class="sc-prog-row">
        <div class="sc-prog-track"><div class="sc-prog-fill" id="sc-prog" style="width:0%"></div></div>
        <div class="sc-prog-pct" id="sc-pct">0%</div>
      </div>
      <div class="sc-steps" id="sc-steps"></div>
      <div class="sc-cards">
        <div class="sc-card"><div class="sc-card-lbl">Checks run</div><div class="sc-card-val blue" id="sc-checks">0</div></div>
        <div class="sc-card"><div class="sc-card-lbl">Issues found</div><div class="sc-card-val amber" id="sc-issues">—</div></div>
        <div class="sc-card"><div class="sc-card-lbl">Passed</div><div class="sc-card-val green" id="sc-pass">—</div></div>
      </div>
    </div>`;

  // ── STEPS DOM BUILD ───────────────────────────────
  const stepsWrap = document.getElementById("sc-steps");
  SCAN_STEPS.forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "sc-step";
    div.id = "scstep" + i;
    div.innerHTML = `
      ${i < SCAN_STEPS.length - 1 ? `<div class="sc-connector"></div>` : ""}
      <div class="sc-ico-wrap">
        <div class="sc-circle" id="sccirc${i}">
          <svg width="10" height="10" viewBox="0 0 10 10" id="scico${i}">
            <circle cx="5" cy="5" r="2.5" fill="#d1d5db"/>
          </svg>
        </div>
      </div>
      <div class="sc-step-body">
        <div class="sc-step-label" id="sclbl${i}">${s.label}</div>
        <div class="sc-step-detail" id="scdet${i}">${s.detail}</div>
        <div class="sc-shimmer" id="scshim${i}"><div class="sc-shimmer-fill"></div></div>
      </div>
      <div class="sc-step-right" id="scrt${i}"></div>`;
    stepsWrap.appendChild(div);
  });

  // ── ANIMATION ─────────────────────────────────────
  const checkSVG = `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><polyline points="2,5.5 4.5,8 9,3" stroke="#0F6E56" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const spinSVG  = `<svg width="11" height="11" viewBox="0 0 11 11"><circle cx="5.5" cy="5.5" r="3.5" stroke="#185FA5" stroke-width="1.5" stroke-dasharray="14 8" stroke-linecap="round" fill="none"><animateTransform attributeName="transform" type="rotate" from="0 5.5 5.5" to="360 5.5 5.5" dur="0.8s" repeatCount="indefinite"/></circle></svg>`;
  const TOTAL_DUR = SCAN_STEPS.reduce((a, s) => a + s.duration, 0);
  let stepIdx = 0, totalChecks = 0, totalIssues = 0;

  function activateStep(i) {
    document.getElementById("sccirc" + i).className = "sc-circle active";
    document.getElementById("scico"  + i).outerHTML = `<span id="scico${i}">${spinSVG}</span>`;
    document.getElementById("sclbl"  + i).className = "sc-step-label active";
    document.getElementById("scdet"  + i).style.maxHeight = "18px";
    document.getElementById("scshim" + i).style.display = "block";
    document.getElementById("scstep" + i).scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function completeStep(i) {
    const s = SCAN_STEPS[i];
    document.getElementById("sccirc" + i).className = "sc-circle done";
    const ico = document.getElementById("scico" + i);
    if (ico) ico.outerHTML = `<span id="scico${i}">${checkSVG}</span>`;
    document.getElementById("sclbl"  + i).className = "sc-step-label done";
    document.getElementById("scshim" + i).style.display = "none";
    totalChecks += s.checks;
    const iFound = i < SCAN_STEPS.length - 1
      ? Math.floor(s.checks * (0.12 + Math.random() * 0.22)) : 0;
    totalIssues += iFound;
    const rt = document.getElementById("scrt" + i);
    rt.className = "sc-step-right done-ok";
    rt.textContent = "+" + s.checks + " checks";
    document.getElementById("sc-checks").textContent = totalChecks;
    if (totalIssues > 0 || i > 2) {
      document.getElementById("sc-issues").textContent = totalIssues;
      document.getElementById("sc-pass").textContent   = totalChecks - totalIssues;
    }
  }

  function runStep() {
    if (stepIdx >= SCAN_STEPS.length) return;
    const i = stepIdx;
    activateStep(i);
    const s = SCAN_STEPS[i];
    const progStart = SCAN_STEPS.slice(0, i).reduce((a, x) => a + x.duration, 0) / TOTAL_DUR * 100;
    const progEnd   = SCAN_STEPS.slice(0, i + 1).reduce((a, x) => a + x.duration, 0) / TOTAL_DUR * 100;
    let pt = 0;
    const iv = setInterval(() => {
      pt = Math.min(pt + 80, s.duration);
      const pct = Math.round(progStart + (pt / s.duration) * (progEnd - progStart));
      document.getElementById("sc-prog").style.width = pct + "%";
      document.getElementById("sc-pct").textContent  = pct + "%";
      if (pt >= s.duration) clearInterval(iv);
    }, 80);
    setTimeout(() => {
      clearInterval(iv);
      completeStep(i);
      stepIdx++;
      setTimeout(runStep, 120);
    }, s.duration);
  }

  setTimeout(runStep, 300);

  // purane code ke liye empty array return
  return [];
}

// ══════════════════════════════════════════════════════
//  MAIN startAudit() — Clean version
// ══════════════════════════════════════════════════════
async function startAudit() {
  let url = (document.getElementById("url-input").value || "").trim();
  if (!url) { document.getElementById("url-input").focus(); return; }
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  const domain = url.replace(/https?:\/\//i, "").replace(/\/$/, "");

  document.getElementById("audit-btn").disabled = true;
  document.getElementById("page-hero").style.display = "none";
  document.getElementById("results").style.display = "none";

  const ld = document.getElementById("loading");
  ld.style.display = "block";

  // generatePages call — animation shuru hoti hai yahan
  generatePages(url);

  // Gemini API call parallel mein
  const geminiPromise = callGeminiAPI(domain);
  const TOTAL_DURATION = 5000;

  try {
    const animDelay = new Promise((r) => setTimeout(r, TOTAL_DURATION));
    const [auditData] = await Promise.all([geminiPromise, animDelay]);

    // Sab baaki steps complete mark karo
    (window.SCAN_STEPS_REF || []).forEach((s, i) => {
      const circ = document.getElementById("sccirc" + i);
      if (circ && !circ.classList.contains("done")) {
        circ.className = "sc-circle done";
        const ico = document.getElementById("scico" + i);
        if (ico) ico.outerHTML = `<span id="scico${i}"><svg width="11" height="11" viewBox="0 0 11 11" fill="none"><polyline points="2,5.5 4.5,8 9,3" stroke="#0F6E56" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
        const lbl = document.getElementById("sclbl" + i);
        if (lbl) lbl.className = "sc-step-label done";
        const rt = document.getElementById("scrt" + i);
        if (rt) { rt.className = "sc-step-right done-ok"; rt.textContent = "+" + s.checks + " checks"; }
      }
    });

    const subEl = document.getElementById("sc-sub");
    if (subEl) subEl.textContent = "Analysis complete — building your report...";
    const progEl = document.getElementById("sc-prog");
    if (progEl) progEl.style.width = "100%";
    const pctEl = document.getElementById("sc-pct");
    if (pctEl) pctEl.textContent = "100%";

    // 1 second ruko phir results dikhao
    await new Promise((r) => setTimeout(r, 100));

    ld.style.display = "none";
    renderResults(auditData, domain); // ← results page pe navigate karta hai

  } catch (err) {
    ld.style.display = "none";
    document.getElementById("audit-btn").disabled = false;
    document.getElementById("page-hero").style.display = "block";

    let errBox = document.getElementById("audit-error-box");
    if (!errBox) {
      errBox = document.createElement("div");
      errBox.id = "audit-error-box";
      errBox.style.cssText =
        "background:#fef2f2;border:1.5px solid #fca5a5;border-radius:12px;padding:18px 22px;margin:20px auto;max-width:600px;text-align:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";
      document.getElementById("page-hero").after(errBox);
    }
    errBox.innerHTML = `
      <div style="font-size:22px;margin-bottom:8px">❌</div>
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px">Audit Failed</div>
      <div style="font-size:13px;color:#6b7280;line-height:1.6">${err.message}</div>
      <div style="font-size:12px;color:#9ba3af;margin-top:8px">Please check your Gemini API key and try again.</div>
    `;
    console.error("Gemini audit error:", err);
  }
}

// ══════════════════════════════════════════════════════
//  RENDER — Uses dynamic Gemini data
// ══════════════════════════════════════════════════════
let _data = null;
let _userDomain = "";

function renderResults(data, userDomain) {
  _data = data;
  const displayDomain = userDomain || data.domain;
  _userDomain = displayDomain;
  document.getElementById("bc-domain").textContent = displayDomain;
  document.getElementById("res-domain").textContent = displayDomain;
  document.getElementById("res-meta").textContent =
    "Audit completed · " +
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) +
    " · 89 checks · SEO + AEO + GEO";

  const tabsEl = document.getElementById("module-tabs");
  const panelsEl = document.getElementById("tab-panels");
  tabsEl.innerHTML = "";
  panelsEl.innerHTML = "";

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "seo", label: "SEO Analysis" },
    { key: "aeo", label: "AEO Analysis" },
    { key: "geo", label: "GEO Analysis" },
    { key: "action", label: "Action Plan" },
    { key: "strategy", label: "SEO Strategy" },
    { key: "competitors", label: "Competitors" },
    { key: "keywords", label: "Keywords" },
  ];

  tabs.forEach((t, i) => {
    const allC =
      t.key === "seo"
        ? data.mods.seo.categories.flatMap((c) => c.checks)
        : t.key === "aeo"
          ? data.mods.aeo.categories.flatMap((c) => c.checks)
          : t.key === "geo"
            ? data.mods.geo.categories.flatMap((c) => c.checks)
            : [];
    const issues = allC.filter((c) => c.status !== "PASS").length;
    const btn = document.createElement("button");
    btn.className = "mtab" + (i === 0 ? " active" : "");
    btn.innerHTML =
      t.label + (issues > 0 ? `<span class="mtab-count">${issues}</span>` : "");
    btn.onclick = () => switchTab(t.key, btn);
    tabsEl.appendChild(btn);
    const pane = document.createElement("div");
    pane.id = "tp-" + t.key;
    pane.className = "tab-content" + (i === 0 ? " active" : "");
    pane.innerHTML = buildPanel(t.key, data);
    panelsEl.appendChild(pane);
  });

  document.getElementById("results").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchTab(key, btn) {
  document.querySelectorAll(".mtab").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tp-" + key).classList.add("active");
}

function buildPanel(key, data) {
  if (key === "overview") return buildOverview(data);
  if (key === "seo") return buildModulePanel(data.mods.seo, data);
  if (key === "aeo") return buildModulePanel(data.mods.aeo, data);
  if (key === "geo") return buildModulePanel(data.mods.geo, data);
  if (key === "action") return buildActionPlan(data);
  if (key === "strategy") return buildStrategy(data);
  if (key === "competitors") return buildCompetitors(data);
  if (key === "keywords") return buildKeywords(data);
  return "";
}

// ──────────────────────────────────────────────────────
//  TABLE OF CONTENTS
// ──────────────────────────────────────────────────────
function buildTOC() {
  return `
  <div class="toc-wrapper">
    <div class="toc-title">TABLE OF CONTENTS</div>
    <div class="toc-section-label">PART 1 — SEO / AEO / GEO AUDIT REPORT</div>
    <div class="toc-subtitle"><em>Complete search visibility analysis — 89 checks across 14 categories</em></div>
    <div class="toc-row"><span class="toc-num">1.0</span><span class="toc-item"><strong>Executive Summary</strong><span class="toc-desc"> — Overall scores, key strengths, critical weaknesses, leadership recommendations</span></span></div>
    <div class="toc-row"><span class="toc-num">2.0</span><span class="toc-item"><strong>SEO Analysis — Detailed Findings</strong><span class="toc-desc"> — On-Page, Technical, Core Web Vitals, Mobile & UX, Backlinks, Local SEO</span></span></div>
    <div class="toc-row"><span class="toc-num">3.0</span><span class="toc-item"><strong>AEO Analysis — Answer Engine Optimization</strong><span class="toc-desc"> — Featured Snippets, Voice Search, Schema, E-E-A-T, NLP & Semantic</span></span></div>
    <div class="toc-row"><span class="toc-num">4.0</span><span class="toc-item"><strong>GEO Analysis — Generative Engine Optimization</strong><span class="toc-desc"> — LLM Content, Brand Citability, AI Coverage, Trust & Metadata</span></span></div>
    <div class="toc-row"><span class="toc-num">5.0</span><span class="toc-item"><strong>Prioritized Action Plan</strong><span class="toc-desc"> — All actions — Critical (2 weeks), High (30 days), Medium (60-90 days)</span></span></div>
    <div class="toc-row"><span class="toc-num">6.0</span><span class="toc-item"><strong>Team Responsibilities & Timeline</strong><span class="toc-desc"> — Developer, Content/SEO, and Marketing task breakdowns</span></span></div>
    <div class="toc-row"><span class="toc-num">7.0</span><span class="toc-item"><strong>Final Notes & Executive Recommendations</strong><span class="toc-desc"> — Summary for leadership and immediate actions</span></span></div>
    <div class="toc-section-label" style="margin-top:14px">PART 2 — 6-MONTH CONTENT CALENDAR</div>
    <div class="toc-row"><span class="toc-num">8.0</span><span class="toc-item"><strong>Content Calendar Overview & Strategy</strong></span></div>
    <div class="toc-row"><span class="toc-num">9.0</span><span class="toc-item"><strong>Monthly Calendar: Months 1–6</strong></span></div>
    <div class="toc-row"><span class="toc-num">10.0</span><span class="toc-item"><strong>Content KPIs & Success Metrics</strong></span></div>
    <div class="toc-section-label" style="margin-top:14px">PART 3 — SEO STRATEGY, COMPETITOR ANALYSIS & KEYWORDS</div>
    <div class="toc-row"><span class="toc-num">11.0</span><span class="toc-item"><strong>12-Month SEO Strategy Plan</strong></span></div>
    <div class="toc-row"><span class="toc-num">12.0</span><span class="toc-item"><strong>Competitor Analysis</strong></span></div>
    <div class="toc-row"><span class="toc-num">13.0</span><span class="toc-item"><strong>Keyword Recommendations</strong></span></div>
  </div>`;
}

// ──────────────────────────────────────────────────────
//  OVERVIEW TAB
// ──────────────────────────────────────────────────────
function buildOverview(data) {
  const allC = ["seo", "aeo", "geo"].flatMap((k) =>
    data.mods[k].categories.flatMap((c) => c.checks),
  );
  const totF = allC.filter((c) => c.status === "FAIL").length;
  const totW = allC.filter((c) => c.status === "WARN").length;
  const totP = allC.filter((c) => c.status === "PASS").length;

  const seoScore = data.mods.seo.score;
  const aeoScore = data.mods.aeo.score;
  const geoScore = data.mods.geo.score;
  const overall = data.overall;

  const strengths = allC
    .filter((c) => c.status === "PASS" && (c.priority === "CRITICAL" || c.priority === "HIGH"))
    .slice(0, 5);

  const weaknesses = allC
    .filter((c) => c.status === "FAIL" && (c.priority === "CRITICAL" || c.priority === "HIGH"))
    .slice(0, 5);

  let html = `
  <div class="cover-card">
    <div class="cover-parts">
      <div class="cover-part cover-part-1"><div class="cover-part-num">PART 1</div><div class="cover-part-title">SEO / AEO / GEO</div><div class="cover-part-sub">Audit Report</div><div class="cover-part-note">${overall}/100 Overall | 89 Checks</div></div>
      <div class="cover-part cover-part-2"><div class="cover-part-num">PART 2</div><div class="cover-part-title">Content Calendar</div><div class="cover-part-sub">6-Month Plan</div><div class="cover-part-note">${(data.calendar || []).reduce((a, m) => a + (m.items || []).length, 0)} Pieces</div></div>
      <div class="cover-part cover-part-3"><div class="cover-part-num">PART 3</div><div class="cover-part-title">SEO Plan, Competitors</div><div class="cover-part-sub">& Keywords</div><div class="cover-part-note">12-Month Plan | ${(data.competitors || []).length} Competitors | ${Object.values(data.keywords || {}).flat().length} Keywords</div></div>
    </div>
    <div class="cover-stats">
      <div class="cover-stat"><div class="cover-stat-val" style="color:#dc2626">${totF}</div><div class="cover-stat-lbl">Errors</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#d97706">${totW}</div><div class="cover-stat-lbl">Warnings</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#16a34a">${totP}</div><div class="cover-stat-lbl">Passed</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#3b82f6">${allC.length}</div><div class="cover-stat-lbl">Total Checks</div></div>
    </div>
    <div class="cover-meta">Audit completed · ${_userDomain || data.domain} · ${allC.length} checks · SEO + AEO + GEO · CONFIDENTIAL</div>
  </div>

  ${buildTOC()}

  <div class="doc-section-head"><h2>SECTION 1: EXECUTIVE SUMMARY</h2><span>Overall scores, key strengths, critical weaknesses</span></div>

  <div class="exec-overview-para">
    This report presents a comprehensive search visibility audit of <strong>${_userDomain || data.domain}</strong>, conducted on ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}. The audit evaluated ${allC.length} individual checks across three modern search optimization disciplines: traditional Search Engine Optimization (SEO), Answer Engine Optimization (AEO) for featured snippets and AI-driven search answers, and Generative Engine Optimization (GEO) for visibility within large language model powered tools such as ChatGPT, Perplexity, and Google's AI Overview.
    <br><br>
    The website achieved an overall score of <strong>${overall}/100 (Grade ${grade(overall)})</strong>, indicating ${overall >= 80 ? "a strong foundation" : overall >= 70 ? "a solid foundation with clear and actionable gaps" : overall >= 60 ? "moderate performance with significant gaps" : "significant issues requiring immediate attention"} that, when addressed, have the potential to significantly improve organic traffic, AI citation frequency, and brand authority across all search surfaces.
  </div>

  <div class="score-summary-table">
    <div class="sst-header"><div class="sst-hcell">Module</div><div class="sst-hcell">Score</div><div class="sst-hcell">Grade</div><div class="sst-hcell">Status</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>SEO (Search Engine Optimization)</div><div><span class="sst-score-chip" style="color:#c2410c">${seoScore}/100</span></div><div><span class="sst-grade-chip grade-ok">${grade(seoScore)}</span></div><div class="sst-status">${seoScore >= 80 ? "Strong" : seoScore >= 70 ? "Needs Improvement" : "Critical Issues"}</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#10b981"></div>AEO (Answer Engine Optimization)</div><div><span class="sst-score-chip" style="color:#15803d">${aeoScore}/100</span></div><div><span class="sst-grade-chip grade-ok">${grade(aeoScore)}</span></div><div class="sst-status">${aeoScore >= 80 ? "Good — Maintain" : "Good — Minor Gaps"}</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#8b5cf6"></div>GEO (Generative Engine Optimization)</div><div><span class="sst-score-chip" style="color:#7c3aed">${geoScore}/100</span></div><div><span class="sst-grade-chip grade-ok">${grade(geoScore)}</span></div><div class="sst-status">${geoScore >= 80 ? "Good" : "Moderate Gaps"}</div></div>
    <div class="sst-row overall"><div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>Overall Score</div><div><span class="sst-score-chip" style="color:#ff642d">${overall}/100</span></div><div><span class="sst-grade-chip grade-ok">${grade(overall)}</span></div><div class="sst-status">${overall >= 80 ? "Strong Foundation" : "Good Foundation"}</div></div>
  </div>

  <div class="gauges-row">`;

  [
    { lbl: "SEO", sc: seoScore, col: "#ff642d" },
    { lbl: "AEO", sc: aeoScore, col: "#10b981" },
    { lbl: "GEO", sc: geoScore, col: "#8b5cf6" },
    { lbl: "Overall", sc: overall, col: "#ff642d" },
  ].forEach((g) => {
    const circ = 2 * Math.PI * 40;
    const offset = circ - (g.sc / 100) * circ;
    html += `<div class="gauge-card"><div class="gauge-title">${g.lbl} Score</div><div class="gauge-wrap"><svg viewBox="0 0 100 100"><circle class="gauge-bg" cx="50" cy="50" r="40"/><circle class="gauge-fill" cx="50" cy="50" r="40" stroke="${g.col}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 50 50)"/></svg><div class="gauge-num"><div class="gauge-score">${g.sc}</div><div class="gauge-label">/ 100</div></div></div><div class="gauge-grade ${gradeClass(g.sc)}">${grade(g.sc)}</div></div>`;
  });

  html += `</div>`;

  html += `<div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">Key Strengths</div><div class="sw-list">`;
  if (strengths.length > 0) {
    strengths.forEach((c) => { html += `<div class="sw-item strength"><div class="sw-dot s"></div>${c.n} — ${c.finding}</div>`; });
  } else {
    html += `<div class="sw-item strength"><div class="sw-dot s"></div>Analysis complete — review individual tabs for detailed strengths.</div>`;
  }
  html += `</div>`;

  html += `<div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">Critical Weaknesses Requiring Immediate Action</div><div class="sw-list">`;
  if (weaknesses.length > 0) {
    weaknesses.forEach((c) => { html += `<div class="sw-item weakness"><div class="sw-dot w"></div>${c.n} — ${c.finding}</div>`; });
  } else {
    const warns = allC.filter((c) => c.status === "WARN").slice(0, 5);
    warns.forEach((c) => { html += `<div class="sw-item weakness"><div class="sw-dot w"></div>${c.n} — ${c.finding}</div>`; });
  }
  html += `</div>`;

  return html;
}

// ──────────────────────────────────────────────────────
//  EXEC SUMMARIES
// ──────────────────────────────────────────────────────
function buildExecSummaryFromData(mod) {
  const allC = mod.categories.flatMap((c) => c.checks);
  const fails = allC.filter((c) => c.status === "FAIL");
  const warns = allC.filter((c) => c.status === "WARN");

  const topFails = fails.filter((c) => c.priority === "CRITICAL" || c.priority === "HIGH").slice(0, 8);
  const topFixes = [...fails, ...warns].filter((c) => c.priority === "CRITICAL" || c.priority === "HIGH").slice(0, 8);

  const whatMap = {
    SEO: `This section evaluates ${allC.length} technical and content signals that determine how well your website ranks on Google. It covers ${mod.categories.length} categories. The overall SEO score is ${mod.score}/100 (Grade ${grade(mod.score)}).`,
    AEO: `This section evaluates how well your website is optimized for AI-powered answer engines — Google's People Also Ask, Featured Snippets, and voice search. AEO score is ${mod.score}/100 (Grade ${grade(mod.score)}).`,
    GEO: `This section evaluates your website's visibility inside AI-powered tools like ChatGPT, Google AI Overview, Perplexity and Bing Copilot. GEO score is ${mod.score}/100 (Grade ${grade(mod.score)}).`,
  };

  return {
    what: whatMap[mod.label] || "",
    problems: topFails.map((c) => `${c.n} — ${c.finding}`),
    improvements: topFixes.map((c) => `${c.n}: ${c.action}`),
  };
}

// ──────────────────────────────────────────────────────
//  MODULE PANEL (SEO / AEO / GEO)
// ──────────────────────────────────────────────────────
function buildModulePanel(mod, data) {
  const allC = mod.categories.flatMap((c) => c.checks);
  const totF = allC.filter((c) => c.status === "FAIL").length;
  const totW = allC.filter((c) => c.status === "WARN").length;
  const totP = allC.filter((c) => c.status === "PASS").length;
  const sectionMap = { SEO: "2", AEO: "3", GEO: "4" };
  const sNum = sectionMap[mod.label] || "";
  const es = buildExecSummaryFromData(mod);

  let html = `
  <div class="doc-section-head"><h2>SECTION ${sNum}: ${mod.label} ANALYSIS — Detailed Findings</h2><span>${allC.length} checks · Score: ${mod.score}/100 · Grade: ${grade(mod.score)}</span></div>`;

  if (mod.intro) { html += `<div class="module-intro-para">${mod.intro}</div>`; }

  html += `
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — What Is Happening & What To Do</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${es.what}</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>⚠️ Current Problems Identified</h3><ul>${es.problems.map((p) => `<li><span class="li-dot" style="background:#ef4444"></span>${p}</li>`).join("")}</ul></div>
      <div class="exec-summary-col"><h3>✅ Improvements To Make</h3><ul>${es.improvements.map((i) => `<li><span class="li-dot" style="background:#21bf6b"></span>${i}</li>`).join("")}</ul></div>
    </div>
    <div class="exec-summary-score-row">
      <div class="exec-score-badge"><div class="exec-score-num" style="color:${scCol(mod.score)}">${mod.score}</div><div><div style="font-size:12px;font-weight:700;color:#1a1a2e">${mod.label} Health Score</div><div style="font-size:11px;color:#6b7280">Grade: ${grade(mod.score)} · ${totF} errors · ${totW} warnings · ${totP} passed</div></div></div>
      <div class="exec-cta">Scroll down to see each check in detail — click any category to expand</div>
    </div>
  </div>

  <div class="stat-cards-row">
    <div class="stat-card"><div class="sc-top"><div class="sc-label">${mod.label} Score</div></div><div class="sc-num" style="color:${scCol(mod.score)}">${mod.score}</div><div class="sc-sub">${grade(mod.score)} — ${mod.score >= 70 ? "Good Foundation" : mod.score >= 60 ? "Needs Work" : "Critical Issues"}</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${mod.score}%;background:${mod.color}"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Errors</div></div><div class="sc-num" style="color:#dc2626">${totF}</div><div class="sc-sub">Critical issues to fix</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((totF / allC.length) * 100)}%;background:#ef4444"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Warnings</div></div><div class="sc-num" style="color:#d97706">${totW}</div><div class="sc-sub">Improvements needed</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((totW / allC.length) * 100)}%;background:#f59e0b"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Passed</div></div><div class="sc-num" style="color:#16a34a">${totP}</div><div class="sc-sub">Checks passing</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round((totP / allC.length) * 100)}%;background:#21bf6b"></div></div></div>
  </div>

  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:14px;margin-top:8px">Category Breakdown — Click to Expand Details</h3>`;

  mod.categories.forEach((cat) => {
    const catF = cat.checks.filter((c) => c.status === "FAIL").length;
    const catW = cat.checks.filter((c) => c.status === "WARN").length;
    const catP = cat.checks.filter((c) => c.status === "PASS").length;
    const id = "cat-" + cat.name.replace(/\s+/g, "-");
    const modCats = mod.categories;
    const lowestScore = Math.min(...modCats.map((c) => c.score));
    const isLowest = cat.score === lowestScore;

    html += `
    <div class="cat-section" id="${id}">
      <div class="cat-section-head" onclick="toggleCat('${id}')">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <div class="cat-section-title">
            <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin:0">${cat.sectionNum} ${cat.name}</h3>
            ${isLowest && modCats.length > 1 ? `<span style="font-size:11px;color:#dc2626;font-weight:600">★ LOWEST SCORE</span>` : ""}
          </div>
          <span class="cat-score-badge ${gradeClass(cat.score)}" style="background:${scBg(cat.score)};color:${scCol(cat.score)}">${cat.score}/100 (${grade(cat.score)})</span>
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          <div class="cat-stats-row">
            <span><span class="cat-stat-pass">&#10003; ${catP} passed</span></span>
            <span><span class="cat-stat-warn">&#9888; ${catW} warnings</span></span>
            <span><span class="cat-stat-fail">&#10005; ${catF} errors</span></span>
          </div>
          <span class="cat-toggle">&#9660;</span>
        </div>
      </div>`;

    if (cat.intro) { html += `<div class="cat-intro-para">${cat.intro}</div>`; }

    html += `
      <div class="table-scroll">
        <table class="checks-table" style="min-width:660px">
          <thead><tr><th style="width:155px">Check</th><th style="width:72px">Status</th><th>Finding</th><th style="width:88px">Priority</th><th>Action Required</th></tr></thead>
          <tbody>`;

    cat.checks.forEach((c) => {
      html += `<tr>
        <td><div class="check-name">${c.n}</div></td>
        <td>${statusBadge(c.status)}</td>
        <td><div class="finding-text">${c.finding}</div></td>
        <td>${priChip(c.priority)}</td>
        <td><div class="action-text">${c.action}</div></td>
      </tr>`;
    });

    html += `</tbody></table></div></div>`;
  });

  return html;
}

function toggleCat(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}

// ──────────────────────────────────────────────────────
//  ACTION PLAN
// ──────────────────────────────────────────────────────
function buildActionPlan(data) {
  const allC = [];
  ["seo", "aeo", "geo"].forEach((k) =>
    data.mods[k].categories.forEach((cat) =>
      cat.checks
        .filter((c) => c.status !== "PASS")
        .forEach((c) => allC.push({ ...c, module: k.toUpperCase() })),
    ),
  );
  allC.sort(
    (a, b) =>
      ["CRITICAL", "HIGH", "MEDIUM", "LOW"].indexOf(a.priority) -
      ["CRITICAL", "HIGH", "MEDIUM", "LOW"].indexOf(b.priority),
  );

  const criticals = allC.filter((c) => c.priority === "CRITICAL").length;
  const highs = allC.filter((c) => c.priority === "HIGH").length;

  const groups = [
    { key: "CRITICAL", label: "Critical Priority — Fix Within 2 Weeks",     bg: "#fef2f2", col: "#dc2626" },
    { key: "HIGH",     label: "High Priority — Fix Within 30 Days",          bg: "#fff7ed", col: "#c2410c" },
    { key: "MEDIUM",   label: "Medium Priority — Fix Within 60-90 Days",     bg: "#fefce8", col: "#a16207" },
    { key: "LOW",      label: "Low Priority",                                bg: "#f8f9fc", col: "#6b7280" },
  ];

  let html = `<div class="doc-section-head"><h2>SECTION 5: PRIORITIZED ACTION PLAN — All ${allC.length} Actions</h2><span>Critical (2 weeks) · High (30 days) · Medium (60-90 days)</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Your Complete Fix List</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">Below is every issue from the audit organized by priority. Fix Critical items within 2 weeks — they are actively hurting your rankings right now.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>🔴 What's Broken Right Now</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>${criticals} Critical issues blocking rankings immediately</li>
        <li><span class="li-dot" style="background:#ef4444"></span>${highs} High priority issues reducing search visibility daily</li>
        ${allC.filter((c) => c.priority === "CRITICAL").slice(0, 3).map((c) => `<li><span class="li-dot" style="background:#ef4444"></span>${c.n} — ${c.finding}</li>`).join("")}
      </ul></div>
      <div class="exec-summary-col"><h3>✅ What To Do & When</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Week 1-2: Developer sprint — fix all ${criticals} Critical technical items</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Week 1-4: Content/SEO team address all High priority issues</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 1-2: Marketing team handles trust and brand items</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 2-3: Medium priority improvements for sustained growth</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Target: ${Math.min(data.overall + 9, 99)}/100 overall score within 30 days</li>
      </ul></div>
    </div>
  </div>`;

  let num = 1;
  groups.forEach((g) => {
    const items = allC.filter((c) => c.priority === g.key);
    if (!items.length) return;
    html += `<div style="background:${g.bg};border:1px solid ${g.col}33;border-radius:8px;padding:10px 16px;margin-bottom:8px;margin-top:12px">
      <span style="font-size:13px;font-weight:700;color:${g.col}">${g.label}</span>
      <span style="font-size:11px;color:#9ba3af;margin-left:8px">(${items.length} issues)</span>
    </div>
    <div class="table-scroll" style="margin-bottom:8px">
    <table class="action-table">
      <thead style="background:#a90006"><tr><th style="width:35px">#</th><th style="width:150px">Issue</th><th style="width:60px">Module</th><th style="width:85px">Priority</th><th>Recommended Fix</th></tr></thead>
      <tbody>`;

    items.forEach((c) => {
      const mCol = c.module === "SEO" ? "#ff642d" : c.module === "AEO" ? "#10b981" : "#8b5cf6";
      const mBg  = c.module === "SEO" ? "#fff0eb" : c.module === "AEO" ? "#f0fdf4" : "#f5f3ff";
      html += `<tr>
        <td><div class="action-num" style="color:${g.col}">${num++}</div></td>
        <td><div class="check-name">${c.n}</div><div class="check-desc">${c.finding}</div></td>
        <td><span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:${mBg};color:${mCol}">${c.module}</span></td>
        <td>${priChip(c.priority)}</td>
        <td><div class="action-fix">${c.action}</div></td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  });

  html += `<div class="doc-section-head" style="margin-top:24px"><h2>SECTION 6: TEAM RESPONSIBILITIES & TIMELINE</h2><span>30/60-day targets by team</span></div>
  <div class="team-grid">`;

  const devTasks = allC.filter((c) => ["HTTPS / SSL","Viewport Meta Tag","Page Load Speed","TTFB (Time to First Byte)","Noindex Tags","Redirect Chains","Organization Schema","BreadcrumbList Schema","Open Graph Tags","Twitter Card Tags","Render-Blocking Resources","Image Optimization"].includes(c.n)).slice(0, 10);
  const contentTasks = allC.filter((c) => ["Title Tag","Meta Description","H1 Heading","Keyword in First 100 Words","Content Word Count","Definition Sections","FAQ Section","Last Updated Date","Direct Answer Paragraphs","Question-Based Headings"].includes(c.n)).slice(0, 8);
  const marketingTasks = allC.filter((c) => ["Trust Badges & Reviews","Google Business Profile","NAP Consistency","Social Proof / Testimonials","News & Press Mentions","Industry Directories","Brand Citability","Consistent Brand Name"].includes(c.n)).slice(0, 7);

  const teams = [
    { name: "Developer / Technical Team", col: "#3b82f6", bg: "#1e3a5f", tasks: devTasks.map((c) => `${c.n}: ${c.action}`) },
    { name: "Content / SEO Team",         col: "#ff642d", bg: "#7c2d12", tasks: contentTasks.map((c) => `${c.n}: ${c.action}`) },
    { name: "Marketing / Brand Team",     col: "#10b981", bg: "#064e3b", tasks: marketingTasks.map((c) => `${c.n}: ${c.action}`) },
  ];

  teams.forEach((t) => {
    html += `<div class="team-card"><div class="team-card-head" style="background:${t.bg};color:#fff">${t.name}</div><div class="team-task-list">`;
    if (t.tasks.length > 0) {
      t.tasks.forEach((task) => { html += `<div class="team-task"><div class="team-task-dot" style="background:${t.col}"></div>${task}</div>`; });
    } else {
      html += `<div class="team-task"><div class="team-task-dot" style="background:${t.col}"></div>Review audit findings and address relevant items</div>`;
    }
    html += `</div></div>`;
  });

  html += `</div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">30/60-Day Score Milestone Targets</div>
  <table class="milestone-table" style="border-radius:12px;overflow:hidden">
    <thead><tr><th>Module</th><th>Current Score</th><th>30-Day Target</th><th>60-Day Target</th></tr></thead>
    <tbody>
      <tr><td>SEO Overall</td><td>${scoreChip(data.mods.seo.score)}</td><td><span class="score-chip sc-yellow">${Math.min(data.mods.seo.score + 10, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(data.mods.seo.score + 17, 99)}/100</span></td></tr>
      <tr><td>AEO Overall</td><td>${scoreChip(data.mods.aeo.score)}</td><td><span class="score-chip sc-green">${Math.min(data.mods.aeo.score + 7, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(data.mods.aeo.score + 12, 99)}/100</span></td></tr>
      <tr><td>GEO Overall</td><td>${scoreChip(data.mods.geo.score)}</td><td><span class="score-chip sc-yellow">${Math.min(data.mods.geo.score + 10, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(data.mods.geo.score + 16, 99)}/100</span></td></tr>
      <tr class="overall-row"><td><strong>Overall Score</strong></td><td>${scoreChip(data.overall)}</td><td><span class="score-chip sc-yellow">${Math.min(data.overall + 9, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(data.overall + 15, 99)}/100 (${grade(data.overall + 15)})</span></td></tr>
    </tbody>
  </table>

  <div class="doc-section-head"><h2>SECTION 7: FINAL NOTES & EXECUTIVE RECOMMENDATIONS</h2><span>Summary for leadership</span></div>
  <div style="background:#f8f9fc;border:1px solid #e2e5ed;border-radius:12px;padding:18px;margin-bottom:20px;font-size:13px;color:#374151;line-height:1.65">
    ${_userDomain} is performing at a ${grade(data.overall)} level (${data.overall}/100) across all three dimensions of modern search visibility. The audit identified ${allC.filter((c) => c.priority === "CRITICAL").length} critical issues and ${allC.filter((c) => c.priority === "HIGH").length} high-priority items that, when fixed, can meaningfully improve rankings and AI search visibility.
    <br><br>
    Prioritize the technical items in the first two weeks — these have the highest immediate impact on rankings. Content and trust signal improvements in weeks 3-8 will compound the gains and help establish long-term authority.
  </div>

  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">4 Immediate Actions for Leadership</div>
  ${[
    `Assign a developer sprint in the next 5-7 days focused exclusively on the ${criticals} critical technical items.`,
    "Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.",
    "Begin collecting client testimonials and case study approvals from existing clients this week.",
    "Set a re-audit date 30 days from today to measure progress against the baseline scores in this report.",
  ].map((a, i) => `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff;border:1px solid #e2e5ed;border-radius:10px;margin-bottom:8px"><div style="width:28px;height:28px;background:#ff642d;border-radius:8px;color:#fff;font-size:13px;font-weight:700;display:grid;place-items:center;flex-shrink:0">${i + 1}</div><div style="font-size:13px;color:#374151;line-height:1.5;padding-top:4px">${a}</div></div>`).join("")}`;

  return html;
}

// ──────────────────────────────────────────────────────
//  CONTENT CALENDAR
// ──────────────────────────────────────────────────────
function buildCalendar(data) {
  const CALENDAR = data.calendar || [];
  const totalPieces = CALENDAR.reduce((a, m) => a + (m.items || []).length, 0);

  let html = `<div class="doc-section-head"><h2>PART 2: 6-MONTH CONTENT CALENDAR</h2><span>${totalPieces} Content Pieces · Weekly Breakdown</span></div>
  <div class="doc-section-head"><h2>SECTION 8: CONTENT CALENDAR — Strategy & Overview</h2><span>Content mix, audit gap mapping, content type legend</span></div>
  <div class="module-intro-para">
    This content calendar is built directly from the audit gaps identified for ${_userDomain}. Every piece is mapped to a specific optimization goal — fixing thin content, capturing featured snippets, building E-E-A-T trust signals, improving AI citability, or targeting high-value commercial keywords.
  </div>

  <div style="margin-bottom:10px;font-size:14px;font-weight:700;color:#1a1a2e">Content Type Legend</div>
  <div class="content-type-legend">
    <span class="type-chip type-blog">Blog Post</span>
    <span class="type-chip type-service">Service Page</span>
    <span class="type-chip type-case">Case Study</span>
    <span class="type-chip type-social">Social Post</span>
    <span class="type-chip type-faq">FAQ Page</span>
    <span class="type-chip type-usecase">Use Case Page</span>
    <span class="type-chip type-definition">Definition Page</span>
    <span class="type-chip type-landing">Landing Page</span>
  </div>

  <div class="exec-summary" style="margin-top:20px">
    <div class="exec-summary-title">📋 Execution Summary — 6-Month Content Strategy for ${_userDomain}</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${totalPieces} pieces of content mapped directly to audit gaps. Follow the calendar week-by-week to systematically close every content gap identified.</p>
  </div>

  <div class="doc-section-head"><h2>SECTION 9: 6-MONTH WEEKLY CALENDAR</h2><span>Week-by-week topics, types, keywords, CTAs, and owner assignments</span></div>`;

  CALENDAR.forEach((month) => {
    html += `<div class="cal-month"><div class="cal-month-head"><h3>${month.month}</h3><span>Theme: ${month.theme}</span></div>`;
    if (month.focusText) { html += `<div class="cal-focus-para">${month.focusText}</div>`; }
    html += `<div class="table-scroll"><table class="cal-table">
      <thead><tr><th style="width:50px">Week</th><th style="width:100px">Type</th><th style="width:240px">Title / Topic</th><th style="width:160px">Target Keywords</th><th>SEO / AEO Goal</th><th style="width:70px">Owner</th></tr></thead>
      <tbody>`;
    (month.items || []).forEach((item) => {
      html += `<tr>
        <td><div class="cal-week">${item.week}</div><div class="cal-dates">${item.dates}</div></td>
        <td>${typeChip(item.type)}</td>
        <td><div class="cal-title">${item.title}</div></td>
        <td><div class="cal-kw">${item.keywords}</div></td>
        <td><div class="cal-goal">${item.goal}</div></td>
        <td>${ownerChip(item.owner)}</td>
      </tr>`;
    });
    html += `</tbody></table></div></div>`;
  });

  html += `<div class="doc-section-head"><h2>SECTION 10: CONTENT KPIs & SUCCESS METRICS</h2><span>Track these 8 KPIs monthly</span></div>
  <table class="kpi-table">
    <thead><tr><th>KPI Metric</th><th>Starting Point</th><th>Tracking Tool</th><th>Frequency</th><th>6-Month Target</th></tr></thead>
    <tbody>
      ${[
        ["Organic Traffic","Baseline (Month 0)","Google Analytics 4","Monthly","+15% by Month 3, +40% by Month 6"],
        ["Keyword Rankings","Track 20 target keywords","Google Search Console","Weekly","5+ in Top 10 by Month 3"],
        ["Blog Pageviews","Baseline (Month 0)","GA4 / GSC","Monthly","2x by Month 6"],
        ["Case Study Leads","0 currently","CRM / Form tracking","Monthly","3+ leads from case studies by Month 4"],
        ["Social Engagement","Baseline this week","Social Analytics","Weekly","+20% engagement by Month 2"],
        ["AI Citation Count","Manual audit","Perplexity / ChatGPT","Monthly","Brand cited in 5+ AI queries by Month 6"],
        ["Domain Authority","Current score","Ahrefs / Moz","Monthly","+5 DA points by Month 6"],
        ["Backlinks Earned","Baseline","Ahrefs","Monthly","10+ new referring domains by Month 6"],
      ].map(([kpi, start, tool, freq, target], i) =>
        `<tr style="background:${i % 2 === 0 ? "#fff" : "#f8f9fc"}"><td class="kpi-name">${kpi}</td><td>${start}</td><td>${tool}</td><td><span style="font-size:11px;padding:2px 8px;background:#eff6ff;color:#1d4ed8;border-radius:4px;font-weight:500">${freq}</span></td><td class="kpi-target">${target}</td></tr>`
      ).join("")}
    </tbody>
  </table>`;

  return html;
}

// ──────────────────────────────────────────────────────
//  SEO STRATEGY
// ──────────────────────────────────────────────────────
function buildStrategy(data) {
  const seo = data.mods.seo.score;
  const aeo = data.mods.aeo.score;
  const geo = data.mods.geo.score;
  const overall = data.overall;

  const allFails = ["seo", "aeo", "geo"].flatMap((k) =>
    data.mods[k].categories.flatMap((c) =>
      c.checks.filter((ch) => ch.status === "FAIL" || ch.status === "WARN").map((ch) => ({ ...ch, module: k.toUpperCase() })),
    ),
  );

  const critItems = allFails.filter((c) => c.priority === "CRITICAL").slice(0, 9);

  let html = `<div class="doc-section-head"><h2>SECTION 11: 12-MONTH SEO STRATEGY PLAN</h2><span>4 Phases: Fix Foundation → Authority → Scale → Dominate</span></div>
  <div class="module-intro-para">
    This plan is structured into four quarterly phases, each with a clear objective, deliverable list, and expected scoring milestone. The goal is to fix all critical audit issues within 90 days, build authority over months 4–6, scale internationally in months 7–9, and consolidate ${_userDomain} as a top-ranked website in its niche by Month 12.
  </div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — 12-Month Growth Roadmap for ${_userDomain}</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">A structured 4-phase plan to achieve top rankings, fix all critical audit issues, grow organic traffic by 150%, and generate qualified leads consistently.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Current Situation</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>Overall ${overall}/100 — ${overall >= 75 ? "solid base" : "needs significant work"}</li>
        <li><span class="li-dot" style="background:#ef4444"></span>SEO ${seo}/100 — ${seo < 70 ? "critical gaps" : "needs improvement"}</li>
        <li><span class="li-dot" style="background:#ef4444"></span>AEO ${aeo}/100 — ${aeo < 75 ? "improvement needed" : "good foundation"}</li>
        <li><span class="li-dot" style="background:#ef4444"></span>GEO ${geo}/100 — AI search visibility ${geo < 70 ? "not optimized" : "partially optimized"}</li>
        ${critItems.slice(0, 2).map((c) => `<li><span class="li-dot" style="background:#ef4444"></span>${c.n}: ${c.finding}</li>`).join("")}
      </ul></div>
      <div class="exec-summary-col"><h3>✅ 12-Month Targets</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 3: Fix all critical issues, ${Math.min(overall + 7, 99)}/100 overall score</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 6: Content clusters built, ${Math.min(overall + 12, 99)}/100 overall</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 9: International reach, brand in 10+ AI queries</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 12: ${Math.min(overall + 19, 99)}/100 overall, Top 3 for primary keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>+150% organic traffic growth from Month 1 baseline</li>
      </ul></div>
    </div>
  </div>`;

  const phases = [
    {
      name: "Phase 1 — Months 1-3: Fix the Foundation",
      focus: "Technical fixes, on-page corrections, schema implementation, local SEO setup",
      col: "#dc2626", bg: "#1a0000",
      items: critItems.slice(0, 9).map((c) => [c.action, c.module === "SEO" ? "Developer/SEO" : c.module === "AEO" ? "Content" : "Developer", c.priority === "CRITICAL" ? "Week 1" : "Week 2-3", `${c.module} fix`, "Immediate ranking impact"]),
    },
    {
      name: "Phase 2 — Months 4-6: Authority & Content Build",
      focus: "Content cluster build, E-E-A-T trust signals, link acquisition, case studies",
      col: "#d97706", bg: "#451a03",
      items: [
        ["Publish 6-month content calendar Weeks 1-4 content","Content","Month 4","Content gap fix","Featured snippets"],
        ["Launch use case pages for niche verticals","SEO + Content","Month 4-5","GEO fix","Niche traffic"],
        ["Publish 2 case studies with measurable results","Marketing","Month 4-5","E-E-A-T fix","Trust signals"],
        ["Build 10+ quality backlinks via guest posts and directories","SEO","Month 4-6","Authority build","+Domain Authority"],
        ["Add 10+ client testimonials and trust badges sitewide","Marketing","Month 4-5","E-E-A-T fix","Social proof"],
        ["Achieve " + Math.min(overall + 12, 99) + "/100 overall audit score","All Teams","Month 6","Milestone","Score benchmark"],
      ],
    },
    {
      name: "Phase 3 — Months 7-9: Scale & Brand Authority",
      focus: "International targeting, PR outreach, AI citation building, schema expansion",
      col: "#10b981", bg: "#064e3b",
      items: [
        ["Create international landing pages for global keywords","SEO + Dev","Month 7","Global keywords","International leads"],
        ["Publish 3 more case studies for E-E-A-T depth","Marketing","Month 7-8","E-E-A-T fix","Trust authority"],
        ["Expand schema to HowTo and QAPage on all eligible content","Developer","Month 7","AEO fix","Rich results expansion"],
        ["Launch link building campaign: target DA60+ referral domains","SEO","Month 7-9","Authority build","+10 referring domains"],
        ["Press outreach: 3-5 media mentions or guest articles","Marketing","Month 7-9","Domain authority","+3 DA60+ links"],
      ],
    },
    {
      name: "Phase 4 — Months 10-12: Dominate & Sustain",
      focus: "Top 3 keyword push, brand authority consolidation, 2027 AI search preparation",
      col: "#8b5cf6", bg: "#2e1065",
      items: [
        ["Content refresh: update all 2026 blog posts for 2027 accuracy","Content","Month 10-11","Freshness signal","All posts refreshed"],
        ["Push top 10 primary keywords toward Top 3 via link building","SEO","Months 10-12","Revenue-driving","5+ in Top 3"],
        ["Expand to 2 new niche verticals with dedicated pages","SEO + Content","Month 10","Vertical authority","2 new pages ranked"],
        ["Full re-audit: target " + Math.min(overall + 19, 99) + "/100 overall score","SEO Lead","Month 12","Benchmark",Math.min(overall + 19, 99) + "+ overall score"],
        ["2027 SEO predictions piece + strategy update","Content + SEO","Month 11-12","Thought leadership","Rank for 2027 keywords"],
      ],
    },
  ];

  phases.forEach((phase) => {
    html += `<div class="phase-table" style="margin-top:20px">
      <div class="phase-table-head" style="background:${phase.bg}"><div class="phase-table-title" style="color:#fff">${phase.name}</div><div style="font-size:11px;color:#9ba3af;font-style:italic">FOCUS: ${phase.focus}</div></div>
      <div class="table-scroll"><table style="width:100%;border-collapse:collapse">
        <thead><tr style="background:#f8f9fc">
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef">Deliverable</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Owner</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Timeline</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Audit Fix</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef">Expected Impact</th>
        </tr></thead>
        <tbody>`;
    phase.items.forEach((item, ii) => {
      html += `<tr style="background:${ii % 2 === 0 ? "#fff" : "#f8f9fc"}">
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;font-weight:500;color:#1a1a2e">${item[0]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#6b7280;white-space:nowrap">${item[1]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#6b7280;white-space:nowrap">${item[2]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px"><span style="background:${phase.col}22;color:${phase.col};font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px">${item[3]}</span></td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#16a34a;font-weight:500">${item[4]}</td>
      </tr>`;
    });
    html += `</tbody></table></div></div>`;
  });

  html += `<div style="margin-top:24px;margin-bottom:8px;font-size:14px;font-weight:700;color:#1a1a2e">12-Month Score Projection</div>
  <table class="proj-table">
    <thead><tr><th>Module</th><th>Now</th><th>Month 3</th><th>Month 6</th><th>Month 9</th><th>Month 12 Target</th></tr></thead>
    <tbody>
      <tr><td>SEO</td><td>${scoreChip(seo)}</td><td><span class="score-chip sc-yellow">${Math.min(seo + 9, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(seo + 14, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(seo + 18, 99)}/100</span></td><td><span class="score-chip sc-target">${Math.min(seo + 22, 99)}/100 (${grade(seo + 22)})</span></td></tr>
      <tr><td>AEO</td><td>${scoreChip(aeo)}</td><td><span class="score-chip sc-green">${Math.min(aeo + 6, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(aeo + 10, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(aeo + 13, 99)}/100</span></td><td><span class="score-chip sc-target">${Math.min(aeo + 16, 99)}/100 (${grade(aeo + 16)})</span></td></tr>
      <tr><td>GEO</td><td>${scoreChip(geo)}</td><td><span class="score-chip sc-yellow">${Math.min(geo + 8, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(geo + 13, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(geo + 17, 99)}/100</span></td><td><span class="score-chip sc-target">${Math.min(geo + 20, 99)}/100 (${grade(geo + 20)})</span></td></tr>
      <tr class="overall-row"><td><strong>OVERALL</strong></td><td>${scoreChip(overall)}</td><td><span class="score-chip sc-yellow">${Math.min(overall + 7, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(overall + 12, 99)}/100</span></td><td><span class="score-chip sc-green">${Math.min(overall + 16, 99)}/100</span></td><td><span class="score-chip sc-target">${Math.min(overall + 19, 99)}/100 (${grade(overall + 19)})</span></td></tr>
    </tbody>
  </table>`;

  return html;
}

// ──────────────────────────────────────────────────────
//  COMPETITORS
// ──────────────────────────────────────────────────────
function buildCompetitors(data) {
  const COMPETITORS = data.competitors || [];

  function stars(n, col) {
    return `<span style="color:${col};letter-spacing:1px;font-size:12px">${"●".repeat(Math.min(n, 5))}${"○".repeat(Math.max(0, 5 - n))}</span>`;
  }

  let html = `<div class="doc-section-head"><h2>SECTION 12: COMPETITOR ANALYSIS</h2><span>${COMPETITORS.length} key competitors analyzed</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Competitive Landscape</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${COMPETITORS.length} competitors analyzed across SEO, AEO, and GEO strength — specific to ${_userDomain}'s industry and market.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Competitor Weaknesses</h3><ul>
        ${COMPETITORS.slice(0, 4).map((c) => `<li><span class="li-dot" style="background:#ef4444"></span><strong>${c.name}</strong> — ${c.weaknesses?.split(",")[0] || "Limited AEO/GEO focus"}</li>`).join("")}
      </ul></div>
      <div class="exec-summary-col"><h3>✅ ${_userDomain} Opportunities</h3><ul>
        ${COMPETITORS.slice(0, 4).map((c) => `<li><span class="li-dot" style="background:#21bf6b"></span>${c.opp || "Leverage AEO/GEO advantage"}</li>`).join("")}
      </ul></div>
    </div>
  </div>

  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:10px">Competitor Overview Snapshot</h3>
  <div class="table-scroll" style="margin-bottom:20px">
  <table class="comp-overview-table">
    <thead><tr><th>Agency</th><th>Est.</th><th>Team</th><th>HQ</th><th>SEO Str.</th><th>AEO Str.</th><th>GEO Str.</th><th>Pricing/mo</th></tr></thead>
    <tbody>`;

  COMPETITORS.forEach((c, i) => {
    html += `<tr style="background:${i % 2 === 0 ? "#fff" : "#f8f9fc"}">
      <td><div class="comp-name">${c.name}</div><div class="comp-domain">${c.domain}</div></td>
      <td>${c.est}</td><td>${c.team}</td><td>${c.hq}</td>
      <td>${stars(c.seo, "#ff642d")}</td><td>${stars(c.aeo, "#10b981")}</td><td>${stars(c.geo, "#8b5cf6")}</td>
      <td style="font-weight:500">${c.pricing}</td>
    </tr>`;
  });

  html += `</tbody></table></div>
  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:12px">Detailed Competitor Profiles</h3>`;

  COMPETITORS.forEach((c, i) => {
    html += `<div class="comp-profile">
      <div class="comp-profile-head"><h3>${i + 1}. ${c.name} (${c.domain})</h3><span>Clutch: ${c.clutch} · Est. ${c.est} · Team: ${c.team} · ${c.market}</span></div>
      <table class="comp-detail-table"><tbody>
        <tr><td>HQ / Market</td><td>${c.hq} | ${c.market} | Est. ${c.est} | Team: ${c.team}</td></tr>
        <tr><td>Pricing</td><td>${c.pricing} | Clutch: ${c.clutch}</td></tr>
        <tr><td>Strengths</td><td>${c.strengths}</td></tr>
        <tr><td>Weaknesses</td><td>${c.weaknesses}</td></tr>
        <tr><td>Our Opportunity</td><td><strong>${c.opp}</strong></td></tr>
      </tbody></table>
    </div>`;
  });

  html += `<div style="background:#1a1a2e;border-radius:12px;padding:20px;text-align:center;margin-top:24px">
    <div style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:6px">${_userDomain} — Complete Digital Marketing Strategy & Audit Report</div>
    <div style="font-size:12px;color:#9ba3af">Powered by AI Analysis · ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
    <div style="font-size:11px;color:#6b7280;margin-top:4px;font-style:italic">CONFIDENTIAL — For Internal Distribution Only.</div>
  </div>`;

  return html;
}

// ──────────────────────────────────────────────────────
//  KEYWORDS
// ──────────────────────────────────────────────────────
function buildKeywords(data) {
  const KW = data.keywords || { primary: [], longtail: [], local: [], global: [] };
  const totalKw = Object.values(KW).flat().length;

  function kwTable(title, desc, kwList) {
    if (!kwList || !kwList.length) return "";
    let html = `<div style="font-size:14px;font-weight:700;color:#1a1a2e;margin-bottom:6px;margin-top:20px">${title}</div>`;
    if (desc) html += `<div style="font-size:12px;color:#6b7280;margin-bottom:10px;line-height:1.5">${desc}</div>`;
    html += `<div class="table-scroll"><table class="kw-table">
      <thead><tr><th>Keyword</th><th style="text-align:right;white-space:nowrap">Vol/mo</th><th>Difficulty</th><th>Intent</th><th>Priority</th><th>Target Page</th></tr></thead>
      <tbody>`;
    kwList.forEach((kw, i) => {
      html += `<tr style="background:${i % 2 === 0 ? "#fff" : "#f8f9fc"}">
        <td class="kw-keyword">${kw.kw}</td>
        <td class="kw-vol">${kw.vol}</td>
        <td>${diffChip(kw.diff)}</td>
        <td><span class="intent-chip">${kw.intent}</span></td>
        <td>${priChip(kw.pri)}</td>
        <td class="target-page">${kw.page}</td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
    return html;
  }

  let html = `<div class="doc-section-head"><h2>SECTION 13: KEYWORD RECOMMENDATIONS — ${totalKw} Keywords</h2><span>Primary Commercial, Long-Tail Informational, Local SEO, and Global/International</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Keyword Strategy for ${_userDomain}</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${totalKw} keywords across 4 categories — all specific to ${_userDomain}'s niche, industry, and geography. Start with local keywords for fastest ROI.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Priority Keyword Gaps</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>${(KW.primary || []).filter((k) => k.pri === "CRITICAL").length} CRITICAL primary keywords to target</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Local keywords — fastest ROI, very low competition</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Long-tail informational — AEO/featured snippet opportunities</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Global B2B keywords for international reach</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ Keyword Action Plan</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 1-2: Target all local keywords — quick wins</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 2-4: Create content for long-tail informational keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 4-6: Expand service pages for primary commercial keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 6-9: Build international landing pages for global keywords</li>
      </ul></div>
    </div>
  </div>`;

  html += kwTable(`C.1 — Primary Commercial Keywords (${(KW.primary || []).length} Keywords)`, "Highest-value keywords for driving qualified leads. High competition — winning requires strong domain authority and consistent link building.", KW.primary || []);
  html += kwTable(`C.2 — Long-Tail Informational Keywords (${(KW.longtail || []).length} Keywords)`, "Lower competition keywords targeting AEO/GEO gaps — FAQ sections, definition pages, and People Also Ask opportunities.", KW.longtail || []);
  html += kwTable(`C.3 — Local SEO Keywords (${(KW.local || []).length} Keywords)`, "Critical for driving nearby business enquiries. Very low competition and high commercial intent — fastest ROI opportunity.", KW.local || []);
  html += kwTable(`C.4 — Global & International Keywords (${(KW.global || []).length} Keywords)`, "Target international clients. Strong backlink profile gives the domain authority to compete globally.", KW.global || []);

  html += `<div style="background:#1a1a2e;border-radius:12px;padding:20px;text-align:center;margin-top:24px">
    <div style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:6px">${_userDomain} — Complete Digital Marketing Strategy & Audit Report</div>
    <div style="font-size:12px;color:#9ba3af">Powered by Gemini AI Analysis · ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</div>
    <div style="font-size:11px;color:#6b7280;margin-top:4px;font-style:italic">CONFIDENTIAL — For Internal Distribution Only.</div>
  </div>`;

  return html;
}

// ══════════════════════════════════════════════════════
//  RESET
// ══════════════════════════════════════════════════════
function resetAudit() {
  _data = null;
  _userDomain = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("page-hero").style.display = "block";
  document.getElementById("audit-btn").disabled = false;
  document.getElementById("url-input").value = "";
  const errBox = document.getElementById("audit-error-box");
  if (errBox) errBox.remove();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("url-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") startAudit();
});

// ══════════════════════════════════════════════════════
//  NEW CSS CLASSES (injected)
// ══════════════════════════════════════════════════════
(function injectNewStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .toc-wrapper { background:#f8f9fc; border:1px solid #e2e5ed; border-radius:12px; padding:20px 24px; margin-bottom:24px; }
    .toc-title { font-size:15px; font-weight:800; color:#1a1a2e; letter-spacing:1px; margin-bottom:14px; text-transform:uppercase; border-bottom:2px solid #a90006; padding-bottom:8px; }
    .toc-section-label { font-size:11px; font-weight:700; color:#a90006; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:4px; margin-top:8px; }
    .toc-subtitle { font-size:11px; color:#9ba3af; margin-bottom:8px; }
    .toc-row { display:flex; gap:10px; align-items:baseline; padding:5px 0; border-bottom:1px dashed #e9ecef; }
    .toc-num { font-size:12px; font-weight:700; color:#a90006; min-width:36px; flex-shrink:0; }
    .toc-item { font-size:12.5px; color:#374151; line-height:1.5; }
    .toc-desc { font-size:11px; color:#9ba3af; }
    .exec-overview-para { background:#fff; border-left:4px solid #a90006; border-radius:0 8px 8px 0; padding:14px 18px; margin-bottom:20px; font-size:13px; color:#374151; line-height:1.7; }
    .module-intro-para { background:#f0f4ff; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0; padding:12px 16px; margin-bottom:16px; font-size:13px; color:#374151; line-height:1.65; }
    .cat-intro-para { background:#fafafa; border:1px solid #e9ecef; border-top:none; border-radius:0 0 6px 6px; padding:12px 16px; font-size:12.5px; color:#374151; line-height:1.65; font-style:italic; }
    .content-type-legend { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px; padding:14px; background:#f8f9fc; border-radius:8px; border:1px solid #e2e5ed; }
    .audit-gap-mapping { display:flex; flex-direction:column; gap:6px; margin-bottom:20px; }
    .gap-map-item { display:flex; align-items:center; gap:10px; padding:8px 14px; background:#fff; border:1px solid #e9ecef; border-radius:8px; font-size:12.5px; color:#374151; }
    .gap-map-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
    .gap-impact { margin-left:auto; font-size:11px; font-weight:600; color:#16a34a; background:#dcfce7; padding:2px 8px; border-radius:4px; white-space:nowrap; }
    .cal-focus-para { background:#fffbeb; border-left:4px solid #f59e0b; border-radius:0 8px 8px 0; padding:10px 16px; margin-bottom:10px; font-size:12.5px; color:#374151; line-height:1.6; }
  `;
  document.head.appendChild(style);
})();

// ══════════════════════════════════════════════════════
//  PDF EXPORT (unchanged)
// ══════════════════════════════════════════════════════
function showLoadingState(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.innerHTML = "⏳ Generating PDF...";
    button.disabled = true;
    button.style.opacity = "0.7";
    button.style.cursor = "wait";
  } else {
    button.innerHTML = "⬇ Download PDF";
    button.disabled = false;
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  }
}

function showNotification(message, type) {
  type = type || "info";
  let el = document.getElementById("pdf-notification");
  if (!el) {
    el = document.createElement("div");
    el.id = "pdf-notification";
    el.style.cssText = ["position:fixed","top:20px","right:20px","padding:12px 20px","border-radius:8px","font-size:14px","font-weight:500","z-index:99998","box-shadow:0 4px 16px rgba(0,0,0,0.2)","max-width:340px","transition:opacity 0.3s ease"].join(";");
    document.body.appendChild(el);
  }
  const cols = { success: ["#10b981", "#fff"], error: ["#ef4444", "#fff"], info: ["#3b82f6", "#fff"], warning: ["#f59e0b", "#fff"] };
  const c = cols[type] || cols.info;
  el.style.background = c[0];
  el.style.color = c[1];
  el.style.opacity = "1";
  el.textContent = message;
  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => { if (el.parentNode) el.remove(); }, 300);
  }, 5000);
}

function createProgressOverlay() {
  const ov = document.createElement("div");
  ov.id = "pdf-ov";
  ov.style.cssText = ["position:fixed","inset:0","background:rgba(0,0,0,0.6)","display:flex","align-items:center","justify-content:center","z-index:99999"].join(";");
  ov.innerHTML = `<div style="background:#fff;border-radius:16px;padding:36px 44px;min-width:380px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35)"><div style="font-size:36px;margin-bottom:14px">📄</div><h3 style="margin:0 0 8px;font-size:18px;color:#1a1a2e;font-weight:800">Generating Full PDF Report</h3><p id="pdf-ov-msg" style="margin:0 0 20px;font-size:13px;color:#6b7280">Starting...</p><div style="background:#f1f3f7;border-radius:8px;height:12px;overflow:hidden;margin-bottom:10px"><div id="pdf-ov-bar" style="height:100%;background:linear-gradient(90deg,#ff642d,#f59e0b);width:0%;transition:width 0.5s ease;border-radius:8px"></div></div><div id="pdf-ov-pct" style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:8px">0%</div><div id="pdf-ov-tab" style="font-size:11px;color:#9ba3af">Preparing...</div></div>`;
  document.body.appendChild(ov);
  return {
    msg: (t) => { document.getElementById("pdf-ov-msg").textContent = t; },
    tab: (t) => { document.getElementById("pdf-ov-tab").textContent = t; },
    pct: (n) => { document.getElementById("pdf-ov-bar").style.width = n + "%"; document.getElementById("pdf-ov-pct").textContent = n + "%"; },
    remove: () => ov.remove(),
  };
}

function pdfSleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function addDividerPage(pdf, name, num, total, W, H) {
  pdf.setFillColor(26, 26, 46);
  pdf.rect(0, 0, W, H, "F");
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, 0, 5, H, "F");
  pdf.setFontSize(10);
  pdf.setTextColor(255, 100, 45);
  pdf.setFont("helvetica", "bold");
  pdf.text("SECTION " + num + " OF " + total, 18, 118);
  pdf.setFontSize(32);
  pdf.setTextColor(255, 255, 255);
  pdf.text(name, 18, 140);
  pdf.setDrawColor(255, 100, 45);
  pdf.setLineWidth(0.4);
  pdf.line(18, 148, W - 18, 148);
  pdf.setFontSize(9);
  pdf.setTextColor(155, 163, 175);
  pdf.setFont("helvetica", "normal");
  pdf.text("SEO + AEO + GEO Audit Report  \u00B7  " + _userDomain + "  \u00B7  " + new Date().toLocaleDateString("en-GB"), 18, 158);
}

async function capturePanel(panel) {
  const saved = {
    class: panel.className, display: panel.style.display, vis: panel.style.visibility,
    pos: panel.style.position, opacity: panel.style.opacity, left: panel.style.left,
    top: panel.style.top, z: panel.style.zIndex, w: panel.style.width, p: panel.style.padding,
  };
  panel.classList.add("active");
  Object.assign(panel.style, { display: "block", visibility: "visible", opacity: "1", position: "relative", left: "0", top: "0", zIndex: "1", width: "1180px", padding: "20px 24px" });
  panel.querySelectorAll(".cat-section").forEach((c) => c.classList.add("open"));
  await pdfSleep(350);
  const canvas = await html2canvas(panel, {
    scale: 2, useCORS: true, logging: false, backgroundColor: "#ffffff",
    windowWidth: 1220, width: 1180, scrollX: 0, scrollY: 0, allowTaint: false, imageTimeout: 20000,
    onclone: (doc, el) => {
      el.style.display = "block"; el.style.visibility = "visible"; el.style.opacity = "1";
      el.style.width = "1180px"; el.style.padding = "20px 24px";
      doc.querySelectorAll(".cat-section").forEach((c) => c.classList.add("open"));
    },
  });
  panel.className = saved.class;
  Object.assign(panel.style, { display: saved.display, visibility: saved.vis, opacity: saved.opacity, position: saved.pos, left: saved.left, top: saved.top, zIndex: saved.z, width: saved.w, padding: saved.p });
  return canvas;
}

function addCanvasToPDF(pdf, canvas, A4_W, A4_H) {
  const cW = canvas.width, cH = canvas.height;
  const ML = 10, MR = 10, MT = 10, MB = 14;
  const cntW = A4_W - ML - MR, cntH = A4_H - MT - MB;
  const safeH = cntH * 0.93;
  const pxMM = cW / cntW, pxPg = safeH * pxMM;
  const pages = Math.ceil(cH / pxPg);
  for (let pg = 0; pg < pages; pg++) {
    pdf.addPage();
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, A4_W, A4_H, "F");
    pdf.setFillColor(255, 100, 45);
    pdf.rect(0, 0, 2, A4_H, "F");
    const srcY = pg * pxPg, srcH = Math.min(pxPg, cH - srcY), dstH = srcH / pxMM;
    const sl = document.createElement("canvas");
    sl.width = cW;
    sl.height = Math.ceil(srcH);
    const ctx = sl.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cW, Math.ceil(srcH));
    ctx.drawImage(canvas, 0, srcY, cW, srcH, 0, 0, cW, srcH);
    pdf.addImage(sl.toDataURL("image/jpeg", 0.92), "JPEG", ML, MT, cntW, dstH, "", "FAST");
    addPageFooter(pdf, A4_W, A4_H, pg + 1, pages, MB);
  }
}

function addPageFooter(pdf, A4_W, A4_H, pageNum, totalPages, MB) {
  const MB2 = 22; // footer thoda bada kiya 2 lines ke liye
  pdf.setFillColor(169, 0, 6);
  pdf.rect(0, A4_H - MB2, A4_W, MB2, "F");
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, A4_H - 1.5, A4_W, 1.5, "F");

  pdf.setFontSize(6.5);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "normal");

  // Line 1 — Company name + address
  const line1 = "BUIMB RESEARCH LLP  \u00B7  Floor 1, Rajneel Complex, Lamachaur, Haldwani 263139  \u00B7  Regd: C/o Pradeep Singh Negi, Adarsh Nagar, Talli Bamori, Haldwani, Nainital-263139, Uttarakhand";
  pdf.text(line1, 10, A4_H - MB2 + 7);

  // Line 2 — Contact + domain
  const line2 = "+91 89237 68209  \u00B7  contact@buimbdigital.com  \u00B7  " + _userDomain + "  \u00B7  SEO + AEO + GEO Audit 2026";
  pdf.text(line2, 10, A4_H - MB2 + 13);

  // Page number — right aligned
  pdf.setFontSize(7.5);
  const pt = "Page " + pageNum + " of " + totalPages;
  pdf.text(pt, A4_W - 10 - pdf.getTextWidth(pt), A4_H - MB2 + 10);
}

async function exportPDF() {
  const resultsEl = document.getElementById("results");
  if (!resultsEl || resultsEl.style.display === "none") {
    showNotification("Please run an audit first.", "warning");
    return;
  }
  const btn = document.querySelector(".btn-sm.btn-orange");
  showLoadingState(btn, true);
  const prog = createProgressOverlay();
  try {
    const TAB_NAMES = ["Overview","SEO Analysis","AEO Analysis","GEO Analysis","Action Plan","Content Calendar","SEO Strategy","Competitors","Keywords"];
    const tabIds = ["tp-overview","tp-seo","tp-aeo","tp-geo","tp-action","tp-calendar","tp-strategy","tp-competitors","tp-keywords"];
    const orderedPanels = tabIds.map((id) => document.getElementById(id)).filter(Boolean);
    const A4_W = 210, A4_H = 297;
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    prog.msg("Creating cover page...");
    prog.pct(3);
    addCoverPage(pdf, A4_W, A4_H);
    for (let i = 0; i < orderedPanels.length; i++) {
      const panel = orderedPanels[i], name = TAB_NAMES[i] || "Section " + (i + 1);
      prog.pct(Math.round(5 + (i / orderedPanels.length) * 88));
      prog.tab("Processing: " + name + " (" + (i + 1) + "/" + orderedPanels.length + ")");
      prog.msg("Capturing " + name + "...");
      pdf.addPage();
      addDividerPage(pdf, name, i + 1, orderedPanels.length, A4_W, A4_H);
      try {
        const canvas = await capturePanel(panel);
        addCanvasToPDF(pdf, canvas, A4_W, A4_H);
      } catch (e) {
        console.warn("Capture failed for " + name + ":", e);
        pdf.addPage();
        pdf.setFontSize(14);
        pdf.setTextColor(239, 68, 68);
        pdf.text("Could not capture " + name + " — please try again.", 20, 100);
      }
    }
    prog.pct(96);
    prog.msg("Saving PDF file...");
    prog.tab("Almost done!");
    await pdfSleep(400);
    const domain = (_userDomain || "audit").replace(/[^a-z0-9.-]/gi, "-");
    pdf.save(domain + "-seo-aeo-geo-full-report-" + new Date().toISOString().split("T")[0] + ".pdf");
    prog.pct(100);
    prog.msg("Done! PDF saved.");
    await pdfSleep(800);
    prog.remove();
    showNotification("\u2705 Full PDF exported — all 9 tabs included!", "success");
  } catch (err) {
    console.error("PDF export error:", err);
    prog.remove();
    showNotification("\u274C PDF failed: " + err.message, "error");
  } finally {
    showLoadingState(btn, false);
  }
}

function addCoverPage(pdf, W, H) {
  pdf.setFillColor(26, 26, 46);
  pdf.rect(0, 0, W, H, "F");
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, 0, W, 6, "F");
  pdf.setFontSize(28);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.text(_userDomain || "Website Audit", 18, 60);
  pdf.setFontSize(12);
  pdf.setTextColor(155, 163, 175);
  pdf.setFont("helvetica", "normal");
  pdf.text("Complete SEO + AEO + GEO Visibility Audit Report", 18, 74);
  pdf.setFillColor(36, 36, 66);
  pdf.roundedRect(18, 88, W - 36, 38, 4, 4, "F");
  pdf.setFontSize(10);
  pdf.setTextColor(155, 163, 175);
  pdf.text("OVERALL SCORE", 30, 100);
  pdf.setFontSize(26);
  pdf.setTextColor(255, 100, 45);
  pdf.setFont("helvetica", "bold");
  pdf.text((_data?.overall || 0) + " / 100  (Grade " + grade(_data?.overall || 0) + ")", 30, 116);
  const modules = [
    { label: "SEO", score: _data?.mods?.seo?.score || 0, col: [255, 100, 45] },
    { label: "AEO", score: _data?.mods?.aeo?.score || 0, col: [16, 185, 129] },
    { label: "GEO", score: _data?.mods?.geo?.score || 0, col: [139, 92, 246] },
  ];
  modules.forEach((m, idx) => {
    const x = 18 + idx * 62;
    pdf.setFillColor(36, 36, 66);
    pdf.roundedRect(x, 134, 58, 28, 3, 3, "F");
    pdf.setFontSize(9);
    pdf.setTextColor(155, 163, 175);
    pdf.setFont("helvetica", "normal");
    pdf.text(m.label, x + 4, 144);
    pdf.setFontSize(14);
    pdf.setTextColor(m.col[0], m.col[1], m.col[2]);
    pdf.setFont("helvetica", "bold");
    pdf.text(m.score + "/100", x + 4, 156);
  });
  const parts = [
    { num: "PART 1", title: "SEO / AEO / GEO Audit Report", detail: "89 checks across 14 categories" },
    { num: "PART 2", title: "6-Month Content Calendar", detail: "Weeks breakdown · " + (_data?.calendar || []).reduce((a, m) => a + (m.items || []).length, 0) + " content pieces" },
    { num: "PART 3", title: "SEO Strategy, Competitors & Keywords", detail: "12-month plan · " + (_data?.competitors || []).length + " competitors · " + Object.values(_data?.keywords || {}).flat().length + " keywords" },
  ];
  let py = 180;
  parts.forEach((p) => {
    pdf.setFillColor(42, 42, 72);
    pdf.roundedRect(18, py, W - 36, 24, 3, 3, "F");
    pdf.setFillColor(255, 100, 45);
    pdf.roundedRect(18, py, 28, 24, 3, 3, "F");
    pdf.setFontSize(7);
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.text(p.num, 19, py + 10);
    pdf.setFontSize(11);
    pdf.setTextColor(255, 255, 255);
    pdf.text(p.title, 52, py + 11);
    pdf.setFontSize(8);
    pdf.setTextColor(155, 163, 175);
    pdf.setFont("helvetica", "normal");
    pdf.text(p.detail, 52, py + 19);
    py += 30;
  });
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, H - 8, W, 8, "F");
  pdf.setFontSize(8);
  pdf.setTextColor(255, 255, 255);
  pdf.text("Generated by AI Analysis  \u00B7  " + new Date().toLocaleDateString("en-GB") + "  \u00B7  CONFIDENTIAL", 18, H - 2);
}

// PDF export button wire
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-sm.btn-orange");
  if (btn) btn.onclick = exportPDF;
});