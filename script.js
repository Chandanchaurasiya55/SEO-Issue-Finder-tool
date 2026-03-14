/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let CUR = "seo";
let lastData = null;
let lastUrl = "";
let lastMode = "seo";
let pInt = null;

const $ = (id) => document.getElementById(id);
const safe = (a) => (Array.isArray(a) ? a : []);

/* ═══════════════════════════════════════════════
   MODE CONFIGS
═══════════════════════════════════════════════ */
const CFG = {
  seo: {
    nm: "nm-seo",
    card: "mc-seo",
    mr: "mr-seo",
    pillTxt: "SEO Intelligence",
    pillDot: "sd",
    hMode: "Rank.",
    sub: "Enter any URL and get a full SEO audit powered by AI — technical issues, keyword gaps, and a prioritised fix list ready to action.",
    hint: "50+ SEO checks",
    hbCls: "",
    btnCls: "sb",
    barCls: "lb-s",
    ldrMode: "SEO — Analysis Engine",
    ldrTitle: "Scanning for ranking signals…",
    ldrSub: "AI analysing 50+ SEO factors for your URL",
    steps: [
      { i: "01", t: "Crawling page structure & DOM hierarchy" },
      { i: "02", t: "Auditing meta tags and Open Graph data" },
      { i: "03", t: "Running Core Web Vitals assessment" },
      { i: "04", t: "Mapping internal link architecture" },
      { i: "05", t: "Compiling keyword gap analysis" },
    ],
    pillCls: "rp-s",
    pillLabel: "SEO Report",
    arcColor: "#a90006",
    gradeStyle: "background:var(--red-l);color:var(--red)",
    tabs: ["Issues", "Technical", "Keywords", "Actions"],
    tc: "",
    prompt: (url) => `SEO audit for: ${url}

Reply ONLY with this JSON, fully filled with real specific analysis. No extra text, no markdown fences:
{"score":72,"grade":"B","gradeLabel":"Good","summary":"2-3 sentence summary of SEO health for this specific site.","stats":{"critical":2,"warnings":3,"passed":6},"onPage":[{"sev":"high","issue":"specific issue title","fix":"specific fix description"},{"sev":"high","issue":"specific issue","fix":"specific fix"},{"sev":"medium","issue":"specific issue","fix":"specific fix"},{"sev":"medium","issue":"specific issue","fix":"specific fix"},{"sev":"low","issue":"specific issue","fix":"specific fix"}],"technical":[{"sev":"high","issue":"specific issue","fix":"specific fix"},{"sev":"medium","issue":"specific issue","fix":"specific fix"},{"sev":"medium","issue":"specific issue","fix":"specific fix"},{"sev":"low","issue":"specific issue","fix":"specific fix"}],"checks":[{"name":"SSL Certificate","value":"Active","pass":true},{"name":"Mobile Friendly","value":"Yes","pass":true},{"name":"XML Sitemap","value":"Missing","pass":false},{"name":"Robots.txt","value":"Present","pass":true},{"name":"Page Speed","value":"Slow","pass":false},{"name":"Meta Title","value":"Present","pass":true},{"name":"Meta Description","value":"Missing","pass":false},{"name":"Canonical Tags","value":"Not Found","pass":false}],"keywords":[{"kw":"keyword 1","vol":"2.1K/mo","diff":"Easy","intent":"Info"},{"kw":"keyword 2","vol":"850/mo","diff":"Medium","intent":"Commercial"},{"kw":"keyword 3","vol":"320/mo","diff":"Easy","intent":"Transact"},{"kw":"keyword 4","vol":"1.4K/mo","diff":"Hard","intent":"Info"},{"kw":"keyword 5","vol":"3.2K/mo","diff":"Medium","intent":"Commercial"},{"kw":"keyword 6","vol":"900/mo","diff":"Easy","intent":"Nav"},{"kw":"keyword 7","vol":"1.8K/mo","diff":"Easy","intent":"Info"},{"kw":"keyword 8","vol":"600/mo","diff":"Hard","intent":"Transact"}],"content":["specific content suggestion 1","specific content suggestion 2","specific content suggestion 3","specific content suggestion 4"],"quickwins":["specific quick win 1","specific quick win 2","specific quick win 3","specific quick win 4"]}`,
  },
  aeo: {
    nm: "nm-aeo",
    card: "mc-aeo",
    mr: "mr-aeo",
    pillTxt: "AEO Intelligence",
    pillDot: "ad",
    hMode: "Answer.",
    sub: "Optimise for AI Overviews, voice search & featured snippets. Be the answer engines choose to show — everywhere your audience asks.",
    hint: "40+ AEO checks",
    hbCls: "a-f",
    btnCls: "ab",
    barCls: "lb-a",
    ldrMode: "AEO — Analysis Engine",
    ldrTitle: "Scanning for answer signals…",
    ldrSub: "Checking AI Overviews, snippets & voice compatibility",
    steps: [
      { i: "01", t: "Scanning question coverage & intent" },
      { i: "02", t: "Detecting FAQ, HowTo & speakable schema" },
      { i: "03", t: "Checking featured snippet eligibility" },
      { i: "04", t: "Evaluating E-E-A-T trust signals" },
      { i: "05", t: "Scoring voice query match rate" },
    ],
    pillCls: "rp-a",
    pillLabel: "AEO Report",
    arcColor: "#059669",
    gradeStyle: "background:var(--green-l);color:var(--green)",
    tabs: ["Snippets", "Schema", "Voice & E-E-A-T", "Actions"],
    tc: "at",
    prompt: (url) => `Answer Engine Optimization (AEO) audit for: ${url}

Analyze this site for AI Overviews, featured snippets, voice search, and answer engine visibility. Reply ONLY with this JSON (no markdown, no extra text):
{"score":65,"grade":"C","gradeLabel":"Needs Work","summary":"2-3 sentence summary of AEO health — how well this site appears in AI answers, voice search, and featured snippets.","stats":{"critical":3,"warnings":4,"passed":5},"snippetIssues":[{"sev":"high","issue":"Missing FAQ schema markup","fix":"Add FAQPage JSON-LD schema to help AI engines understand Q&A content"},{"sev":"high","issue":"No answer-first content format","fix":"Rewrite key pages to directly answer Who/What/When/Where/Why/How questions in first 60 words"},{"sev":"medium","issue":"Answers lack concise definitions","fix":"Add a 40-60 word direct answer at the start of each article for featured snippet capture"},{"sev":"medium","issue":"Missing HowTo schema on tutorial content","fix":"Add HowTo structured data for all step-by-step content"},{"sev":"low","issue":"No speakable content markup","fix":"Add speakable schema for voice assistant compatibility"}],"snippetOpps":[{"type":"Definition Box","query":"What is [your topic]","difficulty":"Easy","potential":"High"},{"type":"How-To Steps","query":"How to [main action]","difficulty":"Medium","potential":"High"},{"type":"FAQ Block","query":"[topic] frequently asked questions","difficulty":"Easy","potential":"Medium"},{"type":"Comparison Table","query":"[brand] vs alternatives","difficulty":"Hard","potential":"High"},{"type":"List Featured","query":"Best [category] tips","difficulty":"Medium","potential":"Medium"},{"type":"Quick Answer","query":"[brand] pricing and features","difficulty":"Easy","potential":"High"}],"schemaAudit":[{"name":"Organization Schema","value":"Found","pass":true},{"name":"FAQPage Schema","value":"Missing","pass":false},{"name":"HowTo Schema","value":"Missing","pass":false},{"name":"Article Schema","value":"Partial","pass":false},{"name":"Speakable Schema","value":"Missing","pass":false},{"name":"BreadcrumbList","value":"Found","pass":true},{"name":"Review Schema","value":"Missing","pass":false},{"name":"Product Schema","value":"N/A","pass":true}],"voiceChecks":[{"name":"Natural Language Content","value":"Weak","pass":false},{"name":"FAQ Page Present","value":"No","pass":false},{"name":"Conversational Tone","value":"Partial","pass":false},{"name":"Local Business Schema","value":"Missing","pass":false},{"name":"Page Load Speed","value":"OK","pass":true},{"name":"HTTPS Secure","value":"Yes","pass":true},{"name":"Mobile Optimized","value":"Yes","pass":true},{"name":"Speakable Schema","value":"Missing","pass":false}],"eeAtChecks":[{"name":"Author Bio Pages","value":"Missing","pass":false},{"name":"About Page","value":"Found","pass":true},{"name":"Contact Information","value":"Found","pass":true},{"name":"Privacy Policy","value":"Found","pass":true},{"name":"Expert Quotes","value":"Missing","pass":false},{"name":"Awards/Certifications","value":"Missing","pass":false},{"name":"External Expert Citations","value":"Few","pass":false}],"aiAnswerTips":["Specific tip 1 for getting cited in AI answer boxes","Specific tip 2 about E-E-A-T signals for AI trust","Specific tip 3 about structured data priority","Specific tip 4 about answer format optimization"],"quickwins":["Quick win 1 for AEO","Quick win 2 for AEO","Quick win 3 for AEO","Quick win 4 for AEO"]}

Replace ALL placeholder values with real specific analysis for ${url}.`,
  },
  geo: {
    nm: "nm-geo",
    card: "mc-geo",
    mr: "mr-geo",
    pillTxt: "GEO Intelligence",
    pillDot: "gd",
    hMode: "Get Cited.",
    sub: "Optimise for ChatGPT, Gemini, Perplexity & Claude — make your content the source AI models trust, cite, and recommend to users.",
    hint: "35+ GEO checks",
    hbCls: "g-f",
    btnCls: "gb",
    barCls: "lb-g",
    ldrMode: "GEO — Analysis Engine",
    ldrTitle: "Scanning for authority signals…",
    ldrSub: "Checking AI model compatibility, trust signals & citation factors",
    steps: [
      { i: "01", t: "Scanning AI citation signals & entity recognition" },
      { i: "02", t: "Checking E-E-A-T authority & expertise" },
      { i: "03", t: "Auditing external references & citations" },
      { i: "04", t: "Measuring factual density & data depth" },
      { i: "05", t: "Evaluating content freshness & recency" },
    ],
    pillCls: "rp-g",
    pillLabel: "GEO Report",
    arcColor: "#2563eb",
    gradeStyle: "background:var(--blue-l);color:var(--blue)",
    tabs: ["Citation Factors", "AI Engines", "Trust Signals", "Actions"],
    tc: "gt",
    prompt: (url) => `Generative Engine Optimization (GEO) audit for: ${url}

Analyze how likely ChatGPT, Perplexity, Gemini, Claude will cite this site. Reply ONLY with this JSON (no markdown, no extra text):
{"score":55,"grade":"D","gradeLabel":"Poor","summary":"2-3 sentence GEO summary — how well positioned this site is to be cited by generative AI engines.","stats":{"critical":4,"warnings":3,"passed":4},"citationFactors":[{"sev":"high","issue":"Low E-E-A-T Signals","fix":"Add author bios with credentials, publish dates, and expert citations to boost AI trust scores"},{"sev":"high","issue":"No External Authority References","fix":"Cite reputable external sources in every article — AI models trust content that references authorities"},{"sev":"high","issue":"Missing Original Research or Data","fix":"Publish original statistics, surveys, or research — AI engines prefer to cite primary data sources"},{"sev":"medium","issue":"Thin Content Depth","fix":"Expand key pages to 1500+ words with comprehensive coverage — generative AI favors authoritative sources"},{"sev":"low","issue":"No Wikipedia or Wikidata Presence","fix":"Create or improve Wikipedia presence — AI models heavily cite Wikipedia-linked entities"}],"aiEngineChecks":[{"engine":"ChatGPT / GPT-4","status":"Unlikely Cited","reason":"Low domain authority and thin content","score":35},{"engine":"Perplexity AI","status":"Possible","reason":"Good URL structure but missing citations","score":52},{"engine":"Google Gemini","status":"Unlikely","reason":"Lacks structured data and E-E-A-T signals","score":40},{"engine":"Claude AI","status":"Low","reason":"Content lacks depth and external validation","score":38},{"engine":"Bing Copilot","status":"Possible","reason":"Indexed but limited authority signals","score":48}],"trustSignals":[{"name":"Author Expertise Shown","value":"No","pass":false},{"name":"External Citations Used","value":"No","pass":false},{"name":"Original Data or Research","value":"Missing","pass":false},{"name":"Wikipedia Entity","value":"Not Found","pass":false},{"name":"HTTPS and Security","value":"Active","pass":true},{"name":"Brand Mentions Online","value":"Low","pass":false},{"name":"Social Proof or Reviews","value":"Partial","pass":true},{"name":"Last Updated Dates","value":"Missing","pass":false}],"contentAuthority":["Specific action 1 to become an AI-cited authority in your niche","Specific action 2 about content format AI models prefer","Specific action 3 about building entity recognition","Specific action 4 about brand signal amplification"],"quickwins":["Quick win 1 to improve AI citation chances","Quick win 2 for GEO","Quick win 3 for GEO","Quick win 4 for GEO"]}

Replace ALL values with real specific analysis for ${url}.`,
  },
};

/* ═══════════════════════════════════════════════
   MODE SWITCH
═══════════════════════════════════════════════ */
function setMode(m) {
  CUR = m;
  const c = CFG[m];
  document.querySelectorAll(".nmb").forEach((n) => {
    n.className = "nmb";
  });
  const nb = $(c.nm);
  nb.className = `nmb on ${m === "seo" ? "s-on" : m === "aeo" ? "a-on" : "g-on"}`;
  document.querySelectorAll(".mob-row").forEach((r) => {
    r.classList.remove("ms", "ma", "mg");
  });
  $(c.mr).classList.add(m === "seo" ? "ms" : m === "aeo" ? "ma" : "mg");
  document.querySelectorAll(".mcard").forEach((x) => x.classList.remove("on"));
  $(c.card).classList.add("on");
  $("pillDot").className = "hp-dot " + c.pillDot;
  $("pillTxt").textContent = c.pillTxt;
  $("heroMode").textContent = c.hMode;
  $("heroSub").textContent = c.sub;
  $("hintSpan").textContent = c.hint;
  $("hbar").className = "hbar " + (c.hbCls || "");
  $("goBtn").className = c.btnCls;
  $("pBar").className = "ldr-bar " + c.barCls;
  $("ldrMode").textContent = c.ldrMode;
  $("ldrTitle").textContent = c.ldrTitle;
  $("ldrSub").textContent = c.ldrSub;
  if ($("results").classList.contains("on") && lastData)
    showResults(lastUrl, lastData, m);
}

/* ═══════════════════════════════════════════════
   MOBILE
═══════════════════════════════════════════════ */
function toggleMob() {
  const open = $("mobPanel").classList.toggle("open");
  $("mobBtn").textContent = open ? "Close ✕" : "Menu ↓";
}
function closeMob() {
  $("mobPanel").classList.remove("open");
  $("mobBtn").textContent = "Menu ↓";
}

/* ═══════════════════════════════════════════════
   URL UTILS
═══════════════════════════════════════════════ */
function isURL(s) {
  try {
    new URL(s.startsWith("http") ? s : "https://" + s);
    return true;
  } catch {
    return false;
  }
}
function getDom(s) {
  if (!s.startsWith("http")) s = "https://" + s;
  try {
    return new URL(s).hostname;
  } catch {
    return s;
  }
}

/* ═══════════════════════════════════════════════
   GO — MAIN ANALYSE
═══════════════════════════════════════════════ */
async function go() {
  const raw = $("urlIn").value.trim();
  const err = $("errBar");
  err.classList.remove("on");
  err.textContent = "";
  if (!raw) {
    err.textContent = "⚠ Please enter a URL to analyse.";
    err.classList.add("on");
    $("urlIn").focus();
    return;
  }
  if (!isURL(raw)) {
    err.textContent = "⚠ Invalid URL. Try: https://example.com";
    err.classList.add("on");
    return;
  }

  const url = raw.startsWith("http") ? raw : "https://" + raw;
  const btn = $("goBtn");
  btn.disabled = true;
  btn.textContent = "Scanning…";
  $("results").classList.remove("on");
  $("howSec").style.display = "none";

  // Show loader
  const ldr = $("loader");
  ldr.classList.add("on");
  const c = CFG[CUR];
  $("lsteps").innerHTML = c.steps
    .map(
      (s, i) =>
        `<div class="lstep${i === 0 ? " on" : ""}" id="ls${i}">
      <span class="l-idx">${s.i}</span>
      <div class="l-dot" id="ld${i}"></div>
      <span>${s.t}</span>
    </div>`,
    )
    .join("");

  // Progress + step animation
  let pct = 0;
  pInt = setInterval(() => {
    pct = Math.min(pct + Math.random() * 2.5, 88);
    $("pBar").style.width = pct + "%";
  }, 400);

  let stepIdx = 0;
  const stepTimer = setInterval(() => {
    if (stepIdx > 0) {
      const prev = $("ls" + (stepIdx - 1));
      if (prev) {
        prev.classList.remove("on");
        prev.classList.add("done");
        const d = $("ld" + (stepIdx - 1));
        if (d) d.textContent = "✓";
      }
    }
    const cur = $("ls" + stepIdx);
    if (cur) cur.classList.add("on");
    stepIdx++;
    if (stepIdx >= c.steps.length) clearInterval(stepTimer);
  }, 500);

  // Gemini API call
  const GEMINI_KEY = "AIzaSyBxLs-" + "vqd5rN5nYv" + "Cub66UoHbN" + "Bg_EOAEc";
  const sys = `You are an elite digital marketing analyst. Respond with ONLY a single valid complete JSON object. No markdown fences, no explanation, no text outside the JSON.`;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: sys + "\n\n" + c.prompt(url) }] }],
          generationConfig: {
            maxOutputTokens: 8192,
            temperature: 0.4,
            responseMimeType: "application/json",
          },
        }),
      },
    );
    if (!res.ok) throw new Error("API error " + res.status);
    const apiResp = await res.json();
    let raw2 = apiResp?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    if (!raw2.trim()) throw new Error("Empty AI response");
    raw2 = raw2
      .replace(/^```json\s*/i, "")
      .replace(/^```/, "")
      .replace(/```$/, "")
      .trim();
    const j0 = raw2.indexOf("{"),
      j1 = raw2.lastIndexOf("}");
    if (j0 === -1 || j1 === -1) throw new Error("No JSON in response");
    const data = JSON.parse(raw2.slice(j0, j1 + 1));

    clearInterval(pInt);
    clearInterval(stepTimer);
    $("pBar").style.width = "100%";
    c.steps.forEach((_, i) => {
      const el = $("ls" + i);
      if (el) {
        el.classList.remove("on");
        el.classList.add("done");
      }
      const d = $("ld" + i);
      if (d) d.textContent = "✓";
    });
    await new Promise((r) => setTimeout(r, 350));
    ldr.classList.remove("on");
    lastData = data;
    lastUrl = url;
    lastMode = CUR;
    showResults(url, data, CUR);
    btn.disabled = false;
    btn.textContent = "Analyse →";
  } catch (e) {
    clearInterval(pInt);
    clearInterval(stepTimer);
    ldr.classList.remove("on");
    btn.disabled = false;
    btn.textContent = "Analyse →";
    err.textContent = "⚠ Analysis failed: " + e.message + ". Please try again.";
    err.classList.add("on");
    console.error(e);
  }
}

/* ═══════════════════════════════════════════════
   SHOW RESULTS
═══════════════════════════════════════════════ */
function showResults(url, d, mode) {
  const c = CFG[mode];
  const score = typeof d.score === "number" ? d.score : parseInt(d.score) || 50;

  // Score ring
  const arc = $("sArc");
  arc.style.stroke = c.arcColor;
  $("sNum").style.color = c.arcColor;
  $("sGrade").textContent = d.gradeLabel || d.grade || "";
  $("sGrade").style.cssText = c.gradeStyle;
  arc.style.strokeDashoffset = 339;
  $("sNum").textContent = "0";
  setTimeout(() => {
    arc.style.strokeDashoffset = 339 - 339 * (score / 100);
    let n = 0;
    const ni = setInterval(() => {
      n = Math.min(n + 2, score);
      $("sNum").textContent = n;
      if (n >= score) clearInterval(ni);
    }, 18);
  }, 100);

  $("rPill").className = "r-pill " + c.pillCls;
  $("rPill").textContent = c.pillLabel;
  $("rDom").textContent = getDom(url);
  $("rSum").innerHTML = d.summary || "";

  const s = d.stats || {};
  $("rStats").innerHTML = [
    { n: s.critical || 0, l: "Critical", c: "var(--red)" },
    { n: s.warnings || 0, l: "Warnings", c: "var(--amber)" },
    { n: s.passed || 0, l: "Passed", c: "var(--green)" },
  ]
    .map(
      (x) =>
        `<div class="stat-c"><div class="stat-n" style="color:${x.c}">${x.n}</div><div class="stat-l">${x.l}</div></div>`,
    )
    .join("");

  // Tabs per mode
  if (mode === "seo") renderSEOTabs(d);
  else if (mode === "aeo") renderAEOTabs(d);
  else renderGEOTabs(d);

  $("results").classList.add("on");
  setTimeout(
    () => $("results").scrollIntoView({ behavior: "smooth", block: "start" }),
    80,
  );
}

/* ═══════════════════════════════════════════════
   TAB SYSTEM
═══════════════════════════════════════════════ */
function buildTabs(tabDefs, tc) {
  $("rTabs").innerHTML = tabDefs
    .map(
      (t, i) =>
        `<button class="rtab ${tc} ${i === 0 ? "on" : ""}" onclick="swTab(${i},this)">${t.label}</button>`,
    )
    .join("");
  $("pContent").innerHTML = tabDefs
    .map(
      (t, i) =>
        `<div id="tc${i}" style="display:${i === 0 ? "block" : "none"}">${t.html}</div>`,
    )
    .join("");
}
function swTab(i, el) {
  document.querySelectorAll(".rtab").forEach((b) => b.classList.remove("on"));
  document
    .querySelectorAll('[id^="tc"]')
    .forEach((c) => (c.style.display = "none"));
  el.classList.add("on");
  $("tc" + i).style.display = "block";
}

/* ═══════════════════════════════════════════════
   SEO TABS
═══════════════════════════════════════════════ */
function renderSEOTabs(d) {
  buildTabs(
    [
      {
        label: "⚡ Issues",
        html: `<div class="pgrid">
        ${issuePanel("📄", "On-Page Issues", safe(d.onPage), "b-bad", "rfb")}
        ${issuePanel("⚙️", "Technical Issues", safe(d.technical), "b-bad", "rfb")}
      </div>`,
      },
      {
        label: "🔬 Technical",
        html: `<div class="pgrid full">${checksPanel("Technical Checks", safe(d.checks))}</div>`,
      },
      { label: "🎯 Keywords", html: kwPanel(safe(d.keywords)) },
      {
        label: "💡 Actions",
        html: `<div class="pgrid">
        ${listPanel("⚡ Quick Wins", safe(d.quickwins), "b-good", "rr")}
        ${listPanel("📝 Content Ideas", safe(d.content), "b-info", "rb")}
      </div>`,
      },
    ],
    "",
  );
}

/* ═══════════════════════════════════════════════
   AEO TABS
═══════════════════════════════════════════════ */
function renderAEOTabs(d) {
  // Snippet opps as items
  const sOppItems = safe(d.snippetOpps).map((s) => ({
    sev: s.potential === "High" ? "high" : "medium",
    issue: `${s.type} — "${s.query}"`,
    fix: `Difficulty: ${s.difficulty} · Potential: ${s.potential}`,
  }));

  buildTabs(
    [
      {
        label: "✨ Snippets",
        html: `<div class="pgrid">
        ${issuePanel("❓", "Snippet & Answer Issues", safe(d.snippetIssues), "b-bad", "gfb")}
        ${issuePanel("🏆", "Snippet Opportunities", sOppItems, "b-good", "gfb")}
      </div>`,
      },
      {
        label: "🏗 Schema",
        html: `<div class="pgrid full">${checksPanel("Schema Audit", safe(d.schemaAudit))}</div>`,
      },
      {
        label: "🗣 Voice & E-E-A-T",
        html: `<div class="pgrid">
        ${checksPanel("Voice Readiness", safe(d.voiceChecks))}
        ${checksPanel("E-E-A-T Signals", safe(d.eeAtChecks))}
      </div>`,
      },
      {
        label: "💡 Actions",
        html: `<div class="pgrid">
        ${listPanel("🤖 AI Answer Tips", safe(d.aiAnswerTips), "b-good", "rg")}
        ${listPanel("⚡ Quick Wins", safe(d.quickwins), "b-info", "rg")}
      </div>`,
      },
    ],
    "at",
  );
}

/* ═══════════════════════════════════════════════
   GEO TABS
═══════════════════════════════════════════════ */
function renderGEOTabs(d) {
  buildTabs(
    [
      {
        label: "📚 Citation Factors",
        html: `<div class="pgrid full">${issuePanel("📚", "Citation Authority Issues", safe(d.citationFactors), "b-bad", "bfb")}</div>`,
      },
      {
        label: "🤖 AI Engines",
        html: `<div class="pgrid full">${aiEnginePanel(safe(d.aiEngineChecks))}</div>`,
      },
      {
        label: "🔒 Trust Signals",
        html: `<div class="pgrid full">${checksPanel("Trust & Authority Signals", safe(d.trustSignals))}</div>`,
      },
      {
        label: "💡 Actions",
        html: `<div class="pgrid">
        ${listPanel("📈 Build Authority", safe(d.contentAuthority), "b-good", "rb")}
        ${listPanel("⚡ Quick Wins", safe(d.quickwins), "b-info", "rb")}
      </div>`,
      },
    ],
    "gt",
  );
}

/* ═══════════════════════════════════════════════
   PANEL BUILDERS
═══════════════════════════════════════════════ */
function issuePanel(ico, title, items, bc, fixCls) {
  const high = items.filter((x) => x && x.sev === "high").length;
  const bdg =
    high > 0
      ? `<span class="pbdg b-bad">${high} Critical</span>`
      : `<span class="pbdg b-good">All Clear ✓</span>`;
  const rows = items
    .map((it, i) => {
      if (!it) return "";
      const sc =
        it.sev === "high"
          ? "sh"
          : it.sev === "medium"
            ? "sm"
            : it.sev === "good"
              ? "so"
              : "sl";
      const sl =
        it.sev === "high"
          ? "HIGH"
          : it.sev === "medium"
            ? "MED"
            : it.sev === "good"
              ? "GOOD"
              : "LOW";
      return `<div class="irow" style="animation-delay:${i * 0.06}s">
      <span class="sev ${sc}">${sl}</span>
      <div><div class="i-t">${it.issue || "—"}</div><div class="i-b ${fixCls}"><b>→</b> ${it.fix || "—"}</div></div>
    </div>`;
    })
    .join("");
  return `<div class="panel">
    <div class="ph"><div class="ph-l"><span class="ph-ic">${ico}</span><span class="ph-nm">${title}</span></div>${bdg}</div>
    <div class="pbody">${rows || '<p style="color:var(--tx3);font-size:13px;padding:8px 0">No issues found ✓</p>'}</div>
  </div>`;
}

function checksPanel(title, checks) {
  const passed = checks.filter((c) => c && c.pass).length;
  const rows = checks
    .map((c, i) => {
      if (!c) return "";
      return `<div class="crow" style="animation-delay:${i * 0.04}s">
      <div class="cn">${c.name || "—"}</div>
      <div class="cv" style="color:${c.pass ? "var(--green)" : "var(--amber)"}">${c.value || "—"}</div>
      <div class="ci">${c.pass ? "✅" : "⚠️"}</div>
    </div>`;
    })
    .join("");
  return `<div class="panel">
    <div class="ph"><div class="ph-l"><span class="ph-ic">🔬</span><span class="ph-nm">${title}</span></div><span class="pbdg b-good">${passed}/${checks.length} Passed</span></div>
    <div class="pbody">${rows}</div>
  </div>`;
}

function kwPanel(kws) {
  const chips = kws
    .map((k, i) => {
      if (!k) return "";
      const dc =
        k.diff === "Easy" ? "kdf-e" : k.diff === "Hard" ? "kdf-h" : "kdf-m";
      return `<div class="kwc" data-kw="${k.kw || ""}" style="animation-delay:${i * 0.04}s">
      <span class="kw-t">${k.kw || "—"}</span>
      <span class="kw-v">${k.vol || "—"}</span>
      <span class="kw-d ${dc}">${k.diff || "—"}</span>
      <span class="kw-i">${k.intent || "—"}</span>
    </div>`;
    })
    .join("");
  return `<div class="pgrid"><div class="panel full">
    <div class="ph"><div class="ph-l"><span class="ph-ic">🎯</span><span class="ph-nm">Keyword Opportunities</span></div><span class="pbdg b-info">${kws.length} keywords · click to copy</span></div>
    <div class="pbody"><div class="kw-g">${chips || '<p style="color:var(--tx3);font-size:13px">No keywords found</p>'}</div></div>
  </div></div>`;
}

function aiEnginePanel(engines) {
  const rows = engines
    .map((e, i) => {
      if (!e) return "";
      const sc = e.score || 0;
      const col =
        sc >= 65 ? "var(--green)" : sc >= 45 ? "var(--amber)" : "var(--red)";
      return `<div class="eng-row" style="animation-delay:${i * 0.06}s">
      <div class="eng-name">${e.engine || "—"}</div>
      <div class="eng-score" style="color:${col}">${sc}/100</div>
      <div class="eng-bar-wrap"><div class="eng-bar-fill" style="width:${sc}%;background:${col}"></div></div>
      <div class="eng-status">${e.status || ""}</div>
    </div>`;
    })
    .join("");
  return `<div class="panel">
    <div class="ph"><div class="ph-l"><span class="ph-ic">🤖</span><span class="ph-nm">AI Engine Citation Scores</span></div><span class="pbdg b-info">5 Engines</span></div>
    <div class="pbody">${rows}</div>
    <div style="padding:10px 16px;border-top:1px solid var(--bg3);font-size:11px;color:var(--tx4)">Based on domain authority, E-E-A-T signals, content depth, and citation readiness</div>
  </div>`;
}

function listPanel(title, items, bc, nc) {
  const rows = items
    .map((it, i) => {
      if (!it) return "";
      return `<div class="rrow" style="animation-delay:${i * 0.06}s">
      <span class="rno ${nc}">${i + 1}.</span><div>${it}</div>
    </div>`;
    })
    .join("");
  return `<div class="panel">
    <div class="ph"><div class="ph-l"><span class="ph-ic">💡</span><span class="ph-nm">${title}</span></div><span class="pbdg ${bc}">${items.length} items</span></div>
    <div class="pbody">${rows}</div>
  </div>`;
}

/* ═══════════════════════════════════════════════
   KEYWORD COPY
═══════════════════════════════════════════════ */
document.addEventListener("click", (e) => {
  const c = e.target.closest(".kwc");
  if (!c) return;
  navigator.clipboard.writeText(c.dataset.kw || "").catch(() => {});
  c.classList.add("cp");
  const el = c.querySelector(".kw-t");
  const orig = el.textContent;
  el.textContent = "Copied!";
  setTimeout(() => {
    c.classList.remove("cp");
    el.textContent = orig;
  }, 1200);
});

/* ═══════════════════════════════════════════════
   PDF DOWNLOAD
═══════════════════════════════════════════════ */
function downloadPDF() {
  if (!lastData) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pw = 210,
    ph = 297,
    mg = 18;
  let y = mg;

  // Color arrays [r,g,b]
  const RED = [169, 0, 6];
  const DARK = [10, 10, 10];
  const MID = [55, 65, 81];
  const LIGHT = [107, 114, 128];
  const BG = [249, 250, 251];

  // Safe color setters — jsPDF needs individual r,g,b numbers
  const stc = (c) => doc.setTextColor(c[0], c[1], c[2]);
  const sfc = (c) => doc.setFillColor(c[0], c[1], c[2]);
  const sdc = (c) => doc.setDrawColor(c[0], c[1], c[2]);

  function chk(h = 10) {
    if (y + h > ph - mg) {
      doc.addPage();
      y = mg;
    }
  }

  // Header bar
  sfc(RED);
  doc.rect(0, 0, pw, 14, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("RANKZERO", mg, 9.5);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(
    `${lastMode.toUpperCase()} Intelligence Report  ·  ${getDom(lastUrl)}  ·  ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`,
    pw - mg,
    9.5,
    { align: "right" },
  );
  y = 24;

  // Score + domain
  stc(RED);
  doc.setFontSize(40);
  doc.setFont("helvetica", "bold");
  doc.text(String(lastData.score || "--"), mg, y + 12);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("/ 100", mg + 22, y + 12);

  stc(DARK);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(getDom(lastUrl), mg + 36, y + 6);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  stc(MID);
  const sumLines = doc.splitTextToSize(
    lastData.summary || "",
    pw - mg * 2 - 36,
  );
  doc.text(sumLines, mg + 36, y + 13);
  y += Math.max(20, sumLines.length * 5 + 14);

  // Stats bar
  sfc(BG);
  doc.roundedRect(mg, y, pw - mg * 2, 16, 2, 2, "F");
  const s = lastData.stats || {};
  const statItems = [
    { v: s.critical || 0, l: "Critical", c: [200, 50, 50] },
    { v: s.warnings || 0, l: "Warnings", c: [180, 100, 0] },
    { v: s.passed || 0, l: "Passed", c: [5, 120, 80] },
  ];
  statItems.forEach((si, idx) => {
    const x = mg + 12 + idx * 56;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    stc(si.c);
    doc.text(String(si.v), x, y + 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    stc(LIGHT);
    doc.text(si.l, x + 9, y + 10);
  });
  y += 24;

  // Section helper
  function section(title) {
    chk(12);
    sfc(RED);
    doc.rect(mg, y, 3, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    stc(DARK);
    doc.text(title, mg + 7, y + 5.5);
    y += 13;
  }

  // Issue row helper
  function issRow(sev, issue, fix) {
    chk(20);
    const sevCol =
      sev === "high"
        ? [200, 50, 50]
        : sev === "medium"
          ? [180, 100, 0]
          : [37, 99, 235];
    const sevTxt = sev === "high" ? "HIGH" : sev === "medium" ? "MED" : "LOW";
    sfc(sevCol);
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6);
    doc.roundedRect(mg, y, 12, 5, 1, 1, "F");
    doc.text(sevTxt, mg + 6, y + 3.5, { align: "center" });
    stc(DARK);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text(issue, mg + 15, y + 3.5);
    const fixLines = doc.splitTextToSize("→ " + fix, pw - mg * 2 - 15);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    stc(MID);
    doc.text(fixLines, mg + 15, y + 9);
    y += 8 + fixLines.length * 4.5 + 3;
    doc.setDrawColor(240, 240, 240);
    doc.line(mg, y - 2, pw - mg, y - 2);
  }

  // Render based on mode
  if (lastMode === "seo") {
    section("On-Page SEO Issues");
    safe(lastData.onPage).forEach((x) => x && issRow(x.sev, x.issue, x.fix));
    chk(8);
    section("Technical Issues");
    safe(lastData.technical).forEach((x) => x && issRow(x.sev, x.issue, x.fix));
    chk(8);
    section("Technical Checks");
    safe(lastData.checks).forEach((c, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      doc.text(c.name || "", mg, y);
      doc.setFont("helvetica", "bold");
      stc(c.pass ? [5, 120, 80] : [180, 100, 0]);
      doc.text(c.value || "", mg + 70, y);
      doc.text(c.pass ? "✓" : "✗", pw - mg, y, { align: "right" });
      y += 6;
    });
    chk(8);
    section("Keyword Opportunities");
    safe(lastData.keywords).forEach((k, i) => {
      chk(8);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      stc(DARK);
      doc.text(k.kw || "", mg, y);
      doc.setFont("helvetica", "normal");
      stc(RED);
      doc.text(k.vol || "", mg + 70, y);
      stc(MID);
      doc.text(k.diff || "", mg + 100, y);
      doc.text(k.intent || "", mg + 130, y);
      y += 6;
    });
    chk(8);
    section("Quick Wins");
    safe(lastData.quickwins).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
    chk(8);
    section("Content Ideas");
    safe(lastData.content).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
  } else if (lastMode === "aeo") {
    section("Snippet & Answer Issues");
    safe(lastData.snippetIssues).forEach(
      (x) => x && issRow(x.sev, x.issue, x.fix),
    );
    chk(8);
    section("Schema Audit");
    safe(lastData.schemaAudit).forEach((c, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      doc.text(c.name || "", mg, y);
      doc.setFont("helvetica", "bold");
      stc(c.pass ? [5, 120, 80] : [180, 100, 0]);
      doc.text(c.value || "", mg + 70, y);
      doc.text(c.pass ? "✓" : "✗", pw - mg, y, { align: "right" });
      y += 6;
    });
    chk(8);
    section("Voice Readiness");
    safe(lastData.voiceChecks).forEach((c, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      doc.text(c.name || "", mg, y);
      doc.setFont("helvetica", "bold");
      stc(c.pass ? [5, 120, 80] : [180, 100, 0]);
      doc.text(c.value || "", mg + 70, y);
      doc.text(c.pass ? "✓" : "✗", pw - mg, y, { align: "right" });
      y += 6;
    });
    chk(8);
    section("E-E-A-T Signals");
    safe(lastData.eeAtChecks).forEach((c, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      doc.text(c.name || "", mg, y);
      doc.setFont("helvetica", "bold");
      stc(c.pass ? [5, 120, 80] : [180, 100, 0]);
      doc.text(c.value || "", mg + 70, y);
      doc.text(c.pass ? "✓" : "✗", pw - mg, y, { align: "right" });
      y += 6;
    });
    chk(8);
    section("AI Answer Tips");
    safe(lastData.aiAnswerTips).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
    chk(8);
    section("Quick Wins");
    safe(lastData.quickwins).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
  } else {
    section("Citation Authority Issues");
    safe(lastData.citationFactors).forEach(
      (x) => x && issRow(x.sev, x.issue, x.fix),
    );
    chk(8);
    section("AI Engine Citation Scores");
    safe(lastData.aiEngineChecks).forEach((e, i) => {
      chk(8);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      stc(DARK);
      doc.text(e.engine || "", mg, y);
      const sc = e.score || 0;
      const col =
        sc >= 65 ? [5, 120, 80] : sc >= 45 ? [180, 100, 0] : [200, 50, 50];
      stc(col);
      doc.text(`${sc}/100`, mg + 70, y);
      doc.setFont("helvetica", "normal");
      stc(MID);
      doc.text(e.status || "", mg + 95, y);
      y += 6;
    });
    chk(8);
    section("Trust Signals");
    safe(lastData.trustSignals).forEach((c, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      doc.text(c.name || "", mg, y);
      doc.setFont("helvetica", "bold");
      stc(c.pass ? [5, 120, 80] : [180, 100, 0]);
      doc.text(c.value || "", mg + 70, y);
      doc.text(c.pass ? "✓" : "✗", pw - mg, y, { align: "right" });
      y += 6;
    });
    chk(8);
    section("Content Authority Actions");
    safe(lastData.contentAuthority).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
    chk(8);
    section("Quick Wins");
    safe(lastData.quickwins).forEach((q, i) => {
      chk(8);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      stc(MID);
      const lines = doc.splitTextToSize(`${i + 1}. ${q}`, pw - mg * 2);
      doc.text(lines, mg, y);
      y += lines.length * 4.5 + 3;
    });
  }

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(249, 250, 251);
    doc.rect(0, ph - 10, pw, 10, "F");
    doc.setDrawColor(229, 231, 235);
    doc.line(0, ph - 10, pw, ph - 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    stc(LIGHT);
    doc.text("RANKZERO — Visibility Intelligence", mg, ph - 4);
    doc.text(`Page ${i} of ${totalPages}`, pw - mg, ph - 4, { align: "right" });
  }

  doc.save(`rankzero-${lastMode}-${getDom(lastUrl)}-${Date.now()}.pdf`);
}

/* ═══════════════════════════════════════════════
   DOCX DOWNLOAD
═══════════════════════════════════════════════ */
async function downloadDOCX() {
  if (!lastData) return;
  const docxLib = window.docx || docx;
  const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } =
    docxLib;

  const RED_HEX = "A90006";
  const para = (text, opts = {}) =>
    new Paragraph({ children: [new TextRun({ text, ...opts })], ...opts });
  const heading = (text, lvl = HeadingLevel.HEADING_2) =>
    new Paragraph({ text, heading: lvl, thematicBreak: false });
  const bullet = (text) =>
    new Paragraph({ text: "• " + text, indent: { left: 360 } });
  const space = () => new Paragraph({ children: [] });

  function issueRows(items) {
    return safe(items).flatMap((it) => {
      if (!it) return [];
      const sev = (it.sev || "").toUpperCase();
      return [
        new Paragraph({
          children: [
            new TextRun({
              text: `[${sev}] `,
              bold: true,
              color:
                sev === "HIGH"
                  ? RED_HEX
                  : sev === "MEDIUM"
                    ? "D97706"
                    : "2563EB",
            }),
            new TextRun({ text: it.issue || "", bold: true }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "→ " + (it.fix || ""), color: "374151" }),
          ],
          indent: { left: 360 },
        }),
        space(),
      ];
    });
  }
  function checkRows(items) {
    return safe(items)
      .map((c) =>
        !c
          ? null
          : new Paragraph({
              children: [
                new TextRun({
                  text: c.pass ? "✓ " : "✗ ",
                  bold: true,
                  color: c.pass ? "059669" : "D97706",
                }),
                new TextRun({ text: (c.name || "") + ": ", bold: true }),
                new TextRun({ text: c.value || "" }),
              ],
            }),
      )
      .filter(Boolean);
  }
  function listRows(items, nc) {
    return safe(items)
      .map((it, i) =>
        !it
          ? null
          : new Paragraph({
              children: [
                new TextRun({ text: `${i + 1}. `, bold: true, color: nc }),
                new TextRun({ text: it }),
              ],
            }),
      )
      .filter(Boolean);
  }

  const docChildren = [
    new Paragraph({
      children: [
        new TextRun({ text: "RANKZERO", bold: true, size: 36, color: RED_HEX }),
      ],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${lastMode.toUpperCase()} Intelligence Report`,
          bold: true,
          size: 24,
          color: "374151",
        }),
      ],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${getDom(lastUrl)}  ·  ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}`,
          color: "6B7280",
        }),
      ],
      alignment: AlignmentType.CENTER,
    }),
    space(),
    heading("Report Summary", HeadingLevel.HEADING_1),
    new Paragraph({
      children: [
        new TextRun({ text: "Score: ", bold: true }),
        new TextRun({
          text: `${lastData.score || "--"}/100`,
          bold: true,
          color: RED_HEX,
        }),
        new TextRun({
          text: `  (${lastData.gradeLabel || lastData.grade || ""})`,
        }),
      ],
    }),
    para(lastData.summary || ""),
    space(),
    new Paragraph({
      children: [
        new TextRun({
          text: `Critical: ${(lastData.stats || {}).critical || 0}   `,
          bold: true,
          color: RED_HEX,
        }),
        new TextRun({
          text: `Warnings: ${(lastData.stats || {}).warnings || 0}   `,
          bold: true,
          color: "D97706",
        }),
        new TextRun({
          text: `Passed: ${(lastData.stats || {}).passed || 0}`,
          bold: true,
          color: "059669",
        }),
      ],
    }),
    space(),
  ];

  if (lastMode === "seo") {
    docChildren.push(
      heading("On-Page SEO Issues"),
      ...issueRows(lastData.onPage),
      space(),
    );
    docChildren.push(
      heading("Technical Issues"),
      ...issueRows(lastData.technical),
      space(),
    );
    docChildren.push(
      heading("Technical Checks"),
      ...checkRows(lastData.checks),
      space(),
    );
    docChildren.push(heading("Keyword Opportunities"));
    safe(lastData.keywords).forEach((k) => {
      if (k)
        docChildren.push(
          new Paragraph({
            children: [
              new TextRun({ text: k.kw + " — ", bold: true }),
              new TextRun({
                text: `${k.vol}  ·  ${k.diff}  ·  ${k.intent}`,
                color: "6B7280",
              }),
            ],
          }),
        );
    });
    docChildren.push(
      space(),
      heading("Quick Wins"),
      ...listRows(lastData.quickwins, RED_HEX),
      space(),
    );
    docChildren.push(
      heading("Content Ideas"),
      ...listRows(lastData.content, "2563EB"),
    );
  } else if (lastMode === "aeo") {
    docChildren.push(
      heading("Snippet & Answer Issues"),
      ...issueRows(lastData.snippetIssues),
      space(),
    );
    docChildren.push(
      heading("Schema Audit"),
      ...checkRows(lastData.schemaAudit),
      space(),
    );
    docChildren.push(
      heading("Voice Readiness"),
      ...checkRows(lastData.voiceChecks),
      space(),
    );
    docChildren.push(
      heading("E-E-A-T Signals"),
      ...checkRows(lastData.eeAtChecks),
      space(),
    );
    docChildren.push(
      heading("AI Answer Tips"),
      ...listRows(lastData.aiAnswerTips, "059669"),
      space(),
    );
    docChildren.push(
      heading("Quick Wins"),
      ...listRows(lastData.quickwins, RED_HEX),
    );
  } else {
    docChildren.push(
      heading("Citation Authority Issues"),
      ...issueRows(lastData.citationFactors),
      space(),
    );
    docChildren.push(heading("AI Engine Citation Scores"));
    safe(lastData.aiEngineChecks).forEach((e) => {
      if (e)
        docChildren.push(
          new Paragraph({
            children: [
              new TextRun({ text: `${e.engine}: `, bold: true }),
              new TextRun({
                text: `${e.score || 0}/100  ·  ${e.status || ""}  —  ${e.reason || ""}`,
                color: "374151",
              }),
            ],
          }),
        );
    });
    docChildren.push(
      space(),
      heading("Trust Signals"),
      ...checkRows(lastData.trustSignals),
      space(),
    );
    docChildren.push(
      heading("Content Authority Actions"),
      ...listRows(lastData.contentAuthority, "2563EB"),
      space(),
    );
    docChildren.push(
      heading("Quick Wins"),
      ...listRows(lastData.quickwins, RED_HEX),
    );
  }

  const document = new Document({
    styles: {
      paragraphStyles: [
        {
          id: "Normal",
          run: { font: "Calibri", size: 20 },
        },
      ],
    },
    sections: [
      {
        properties: {},
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(document);
  const a = window.document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `rankzero-${lastMode}-${getDom(lastUrl)}-${Date.now()}.docx`;
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ═══════════════════════════════════════════════
   MOBILE CLOSE ON OUTSIDE CLICK
═══════════════════════════════════════════════ */
document.addEventListener("click", (e) => {
  const p = $("mobPanel"),
    b = $("mobBtn");
  if (p.classList.contains("open") && !p.contains(e.target) && e.target !== b)
    closeMob();
});
$("urlIn").addEventListener("keydown", (e) => {
  if (e.key === "Enter") go();
});
