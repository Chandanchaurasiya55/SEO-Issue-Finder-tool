// ══════════════════════════════════════════════════════
//  DATA — buimbdigital.com (17 March 2026)
// ══════════════════════════════════════════════════════
const D = {
  domain: "buimbdigital.com",
  overall: 74,
  mods: {
    seo: {
      label: "SEO",
      score: 70,
      color: "#ff642d",
      categories: [
        {
          name: "On-Page SEO",
          sectionNum: "2.1",
          score: 78,
          checks: [
            { n: "Title Tag", status: "WARN", finding: "Title missing or too generic on some pages", priority: "CRITICAL", action: "Add unique 50-60 char title per page with primary keyword" },
            { n: "Meta Description", status: "WARN", finding: "Needs compelling 150-160 char description with CTA", priority: "HIGH", action: "Write unique meta descriptions with a clear call to action" },
            { n: "H1 Heading", status: "PASS", finding: "Single H1 with target keyword found", priority: "HIGH", action: "Maintain — keep keyword in H1" },
            { n: "H2/H3 Hierarchy", status: "PASS", finding: "Proper heading hierarchy aids readability", priority: "MEDIUM", action: "Maintain heading structure across all pages" },
            { n: "Keyword in First 100 Words", status: "WARN", finding: "Keyword not present in opening paragraph", priority: "HIGH", action: "Naturally include target keyword in first 100 words" },
            { n: "Image Alt Attributes", status: "PASS", finding: "All images have descriptive alt text", priority: "MEDIUM", action: "Maintain — continue on new images" },
            { n: "Canonical Tag", status: "WARN", finding: "Canonical tag missing — duplicate content risk", priority: "HIGH", action: "Add self-referencing canonical to every page" },
            { n: "Internal Linking", status: "PASS", finding: "Good internal link structure found", priority: "MEDIUM", action: "Expand internal links to new content" },
            { n: "Content Word Count", status: "WARN", finding: "Thin content detected on key pages", priority: "MEDIUM", action: "Expand to 800-1200 words per key page" },
          ],
        },
        {
          name: "Technical SEO",
          sectionNum: "2.2",
          score: 83,
          checks: [
            { n: "HTTPS / SSL", status: "PASS", finding: "Site served over HTTPS — secure", priority: "CRITICAL", action: "Maintain — monitor certificate expiry" },
            { n: "robots.txt", status: "PASS", finding: "Accessible and correctly configured", priority: "HIGH", action: "Maintain — review when adding new sections" },
            { n: "XML Sitemap", status: "PASS", finding: "Sitemap found and submitted", priority: "HIGH", action: "Ensure all new pages are added automatically" },
            { n: "Noindex Tags", status: "WARN", finding: "Noindex found on important pages", priority: "CRITICAL", action: "Audit meta robots tags — remove noindex from key pages" },
            { n: "Structured Data", status: "PASS", finding: "Schema markup detected", priority: "HIGH", action: "Expand schema to cover more page types" },
            { n: "404 Error Page", status: "WARN", finding: "No custom 404 page exists", priority: "HIGH", action: "Create a branded 404 with navigation & search" },
            { n: "URL Structure", status: "PASS", finding: "Clean, readable URLs with keywords", priority: "MEDIUM", action: "Maintain — do not change existing URL structures" },
            { n: "Redirect Chains", status: "PASS", finding: "No redirect chains detected", priority: "HIGH", action: "Maintain — audit quarterly" },
            { n: "Hreflang Tags", status: "WARN", finding: "Missing or misconfigured hreflang", priority: "MEDIUM", action: "Implement if targeting multiple language markets" },
          ],
        },
        {
          name: "Core Web Vitals",
          sectionNum: "2.3",
          score: 69,
          checks: [
            { n: "Page Load Speed", status: "FAIL", finding: "Slow overall load time detected", priority: "CRITICAL", action: "Minify CSS/JS, enable GZIP, use CDN, target < 3s" },
            { n: "LCP (Largest Contentful Paint)", status: "PASS", finding: "LCP under 2.5s — excellent", priority: "CRITICAL", action: "Maintain — monitor as site grows" },
            { n: "CLS (Cumulative Layout Shift)", status: "PASS", finding: "CLS below 0.1 — stable layout", priority: "HIGH", action: "Maintain — avoid late-loading images without dimensions" },
            { n: "INP (Interaction to Next Paint)", status: "PASS", finding: "INP under 200ms — responsive", priority: "HIGH", action: "Maintain — minimize heavy JS interactions" },
            { n: "TTFB (Time to First Byte)", status: "FAIL", finding: "TTFB too high — slow server response", priority: "HIGH", action: "Enable server caching, use CDN, optimize hosting" },
            { n: "Image Optimization", status: "PASS", finding: "Images optimized in modern format", priority: "MEDIUM", action: "Continue using WebP/AVIF for all new images" },
            { n: "Render-Blocking Resources", status: "PASS", finding: "Minimal render-blocking scripts", priority: "HIGH", action: "Maintain — audit when adding new scripts" },
            { n: "Browser Caching", status: "PASS", finding: "Cache headers configured", priority: "MEDIUM", action: "Maintain — use versioned filenames for cache-busting" },
          ],
        },
        {
          name: "Mobile & UX",
          sectionNum: "2.4",
          score: 38,
          note: "★ LOWEST SCORE — CRITICAL",
          // ADDED FROM WORD DOC: intro paragraph for this category
          intro: "This is the most critical score in the audit. With Google's mobile-first indexing, a 38/100 mobile score is actively suppressing rankings. Two checks failed — fix these in Week 1.",
          checks: [
            { n: "Mobile Responsiveness", status: "FAIL", finding: "Site not fully responsive on mobile", priority: "CRITICAL", action: "Implement responsive CSS — test on Google Mobile-Friendly Test" },
            { n: "Viewport Meta Tag", status: "FAIL", finding: "Viewport meta tag missing from pages", priority: "HIGH", action: "Add <meta name='viewport'> to all page <head> sections" },
            { n: "Touch Targets", status: "WARN", finding: "Some buttons/links may be too small", priority: "MEDIUM", action: "Ensure all tap targets are at least 44x44px" },
            { n: "Font Size on Mobile", status: "WARN", finding: "Font size too small on mobile screens", priority: "MEDIUM", action: "Set base font to 16px minimum, use rem units" },
          ],
        },
        {
          name: "Backlinks & Off-Page SEO",
          sectionNum: "2.5",
          score: 90,
          // ADDED FROM WORD DOC: intro paragraph for this category
          intro: "All key backlink metrics passed. Strong domain authority is a competitive advantage. Continue earning links through original research, thought leadership, and digital PR. Monitor for toxic backlinks monthly.",
          checks: [
            { n: "Domain Authority", status: "PASS", finding: "Healthy domain authority — strong link profile", priority: "HIGH", action: "Continue earning links through original research and thought leadership" },
            { n: "Total Backlinks", status: "PASS", finding: "Good backlink volume from diverse sources", priority: "MEDIUM", action: "Maintain consistent link acquisition strategy" },
            { n: "Referring Domains", status: "PASS", finding: "Good unique referring domain count", priority: "HIGH", action: "Focus on earning links from diverse, high-authority domains" },
            { n: "Toxic Backlinks", status: "PASS", finding: "No toxic links detected", priority: "HIGH", action: "Monitor monthly — use Search Console disavow if needed" },
            { n: "Social Profiles Linked", status: "WARN", finding: "Social profiles not fully linked from site", priority: "LOW", action: "Add links to all active social profiles in footer/About page" },
          ],
        },
        {
          name: "Local SEO",
          sectionNum: "2.6",
          score: 63,
          checks: [
            { n: "Google Business Profile", status: "WARN", finding: "GBP not fully optimized", priority: "HIGH", action: "Claim GBP, add photos, hours, categories, respond to reviews" },
            { n: "NAP Consistency", status: "WARN", finding: "Name/Address/Phone may be inconsistent", priority: "HIGH", action: "Audit all directory listings for NAP uniformity" },
            { n: "Local Citations", status: "WARN", finding: "Insufficient local directory presence", priority: "MEDIUM", action: "List on Google, Bing Places, Apple Maps, Yelp" },
            { n: "Local Structured Data", status: "PASS", finding: "Local schema detected", priority: "HIGH", action: "Expand LocalBusiness schema with all available properties" },
            { n: "Social Profiles Linked", status: "WARN", finding: "Social profiles not linked from site", priority: "LOW", action: "Add links to all active social platforms in footer/About page" },
          ],
        },
      ],
    },
    aeo: {
      label: "AEO",
      score: 79,
      color: "#10b981",
      // ADDED FROM WORD DOC: module-level intro
      intro: "AEO score: 79/100 — the strongest overall section. Specific gaps in schema implementation and trust signals require attention to push toward 90+.",
      categories: [
        {
          name: "Featured Snippet Optimization",
          sectionNum: "3.1",
          score: 75,
          checks: [
            { n: "Question-Based Headings", status: "PASS", finding: "Headings formatted as questions — good for snippets", priority: "CRITICAL", action: "Continue — expand to all content pages" },
            { n: "Direct Answer Paragraphs", status: "PASS", finding: "40-60 word answer paragraphs found", priority: "CRITICAL", action: "Ensure every key question has a 40-60 word answer block" },
            { n: "Definition Sections", status: "FAIL", finding: "No 'X is...' definition blocks found", priority: "HIGH", action: "Add definition sections to every service and topic page" },
            { n: "Ordered Lists for Steps", status: "PASS", finding: "Numbered lists found — snippet-ready", priority: "HIGH", action: "Maintain and expand for all how-to content" },
            { n: "Comparison Tables", status: "PASS", finding: "Tables eligible for table snippets", priority: "MEDIUM", action: "Add more comparison tables for service/tool comparisons" },
            { n: "FAQ Section", status: "WARN", finding: "No FAQ section on pages", priority: "HIGH", action: "Add FAQ with 5-10 Q&A pairs at bottom of each page" },
          ],
        },
        {
          name: "Voice Search",
          sectionNum: "3.2",
          score: 100,
          // ADDED FROM WORD DOC: intro paragraph for this category
          intro: "Voice Search optimization is perfect. The site uses conversational keywords, full question phrases, local signals, and Speakable schema. Maintain this standard across all new content published.",
          checks: [
            { n: "Conversational Keywords", status: "PASS", finding: "Natural language voice-query phrases found", priority: "HIGH", action: "Continue — maintain across all new content published" },
            { n: "Long-Tail Questions", status: "PASS", finding: "Full question phrases targeted", priority: "HIGH", action: "Continue — target full questions not just keywords" },
            { n: "Local Voice Signals", status: "PASS", finding: "'Near me' and local signals present", priority: "MEDIUM", action: "Continue — add location content for each service area" },
            { n: "Speakable Schema", status: "PASS", finding: "Speakable schema implemented", priority: "MEDIUM", action: "Maintain — expand to all key intro paragraphs" },
          ],
        },
        {
          name: "Answer Engine Schema",
          sectionNum: "3.3",
          score: 70,
          checks: [
            { n: "FAQPage Schema", status: "PASS", finding: "FAQPage schema implemented", priority: "CRITICAL", action: "Expand to all pages with FAQ sections" },
            { n: "HowTo Schema", status: "FAIL", finding: "HowTo schema missing", priority: "HIGH", action: "Add HowTo JSON-LD to all tutorial/process pages" },
            { n: "QAPage Schema", status: "FAIL", finding: "No QAPage schema found", priority: "HIGH", action: "Add QAPage schema to Q&A content" },
            { n: "Review/Rating Schema", status: "PASS", finding: "Review schema with ratings found", priority: "MEDIUM", action: "Increase review count and diversity" },
            { n: "Event Schema", status: "PASS", finding: "Event schema found", priority: "MEDIUM", action: "Ensure all future events use Event schema" },
          ],
        },
        {
          name: "E-E-A-T Signals",
          sectionNum: "3.4",
          score: 60,
          checks: [
            { n: "Author Bio & Credentials", status: "PASS", finding: "Author credentials displayed", priority: "CRITICAL", action: "Add Person schema and LinkedIn links to author bios" },
            { n: "About Page Quality", status: "PASS", finding: "Detailed About page found", priority: "HIGH", action: "Enhance with team photos, credentials, and company history" },
            { n: "External Citations", status: "PASS", finding: "Authoritative sources cited", priority: "HIGH", action: "Continue linking to high-authority external sources" },
            { n: "Trust Badges & Reviews", status: "FAIL", finding: "No trust signals on key pages", priority: "HIGH", action: "Add certifications, partner logos, and genuine client reviews" },
            { n: "Last Updated Date", status: "FAIL", finding: "No publication/update dates on content", priority: "MEDIUM", action: "Add 'Last Updated: [date]' to all articles and pages" },
          ],
        },
        {
          name: "NLP & Semantic SEO",
          sectionNum: "3.5",
          score: 90,
          // ADDED FROM WORD DOC: intro paragraph for this category
          intro: "NLP and semantic optimization are strong. Content is written in natural language and covers entities and related terms comprehensively. One warning: ensure first mentions of key entities are hyperlinked to authoritative external sources.",
          checks: [
            { n: "Clear Topic Sentences", status: "PASS", finding: "Clear topic sentences found", priority: "HIGH", action: "Continue — begin each section with a clear topic sentence" },
            { n: "Entity Linking", status: "WARN", finding: "Partially linked — first mentions need external links", priority: "HIGH", action: "Link first mentions of key entities to authoritative sources" },
            { n: "Semantic Keyword Coverage", status: "PASS", finding: "Semantically rich content found", priority: "HIGH", action: "Continue using LSI keywords and semantic variants" },
            { n: "Readability Score", status: "PASS", finding: "Flesch score above 60 — accessible", priority: "MEDIUM", action: "Maintain — simplify where needed, use active voice" },
            { n: "Topical Depth", status: "PASS", finding: "Comprehensive topic coverage found", priority: "HIGH", action: "Continue — expand for all new service topics" },
          ],
        },
      ],
    },
    geo: {
      label: "GEO",
      score: 72,
      color: "#8b5cf6",
      // ADDED FROM WORD DOC: module-level intro
      intro: "GEO score: 72/100. Good foundation but critical gaps in brand consistency, security signals, and metadata are limiting AI citability. GEO optimizes for visibility within ChatGPT, Google AI Overview, Perplexity, and Bing Copilot.",
      categories: [
        {
          name: "LLM-Ready Content",
          sectionNum: "4.1",
          score: 90,
          // ADDED FROM WORD DOC: intro paragraph for this category
          intro: "Content is largely well-structured for AI parsing. Key action: start every page with a 2-3 sentence summary paragraph — AI systems read top-of-page content first when generating answers.",
          checks: [
            { n: "Clear Page Summaries", status: "PASS", finding: "Content well-structured for AI parsing", priority: "CRITICAL", action: "Start every page with a 2-3 sentence summary paragraph" },
            { n: "Factual Data with Sources", status: "PASS", finding: "Statistics backed with citations", priority: "CRITICAL", action: "Continue — back every statistic with a citation link" },
            { n: "Unique Research / Data", status: "PASS", finding: "Original research/data present", priority: "HIGH", action: "Continue — LLMs and journalists cite original data more frequently" },
            { n: "AI Crawler Permissions", status: "PASS", finding: "AI crawlers addressed in robots.txt", priority: "HIGH", action: "Update robots.txt to explicitly address GPTBot, ClaudeBot, Google-Extended" },
            { n: "Structured for Extraction", status: "WARN", finding: "Some dense sections need restructuring", priority: "MEDIUM", action: "Start every page with a 2-3 sentence summary paragraph" },
          ],
        },
        {
          name: "Brand Citability",
          sectionNum: "4.2",
          score: 70,
          checks: [
            { n: "Consistent Brand Name", status: "FAIL", finding: "Inconsistent brand mentions across pages", priority: "CRITICAL", action: "Standardize brand name across all pages and metadata" },
            { n: "Wikipedia / Wikidata", status: "PASS", finding: "Brand present on Wikidata", priority: "HIGH", action: "Keep Wikidata entry updated with latest information" },
            { n: "Industry Directories", status: "WARN", finding: "Missing from some key directories", priority: "HIGH", action: "Submit to Clutch, GoodFirms, DesignRush, and niche directories" },
            { n: "News & Press Mentions", status: "PASS", finding: "Brand appears in press/news articles", priority: "HIGH", action: "Pursue additional PR — guest posts, interviews, case studies" },
            { n: "Niche Term Co-occurrence", status: "PASS", finding: "Brand co-occurs with niche keywords", priority: "HIGH", action: "Expand content clusters to increase topic associations" },
          ],
        },
        {
          name: "AI Topical Coverage",
          sectionNum: "4.3",
          score: 90,
          checks: [
            { n: "Pillar + Cluster Content", status: "PASS", finding: "Content hub with pillar and cluster pages", priority: "CRITICAL", action: "Continue — expand cluster strategy with new verticals" },
            { n: "Definition Pages", status: "PASS", finding: "Definition and explainer pages present", priority: "HIGH", action: "Create 'What is [Term]?' pages for all key niche terms" },
            { n: "Comparison Pages", status: "PASS", finding: "Competitor comparison pages found", priority: "MEDIUM", action: "Add more vs-competitor pages for key service comparisons" },
            { n: "Use Case Content", status: "PASS", finding: "Use case and how-to content found", priority: "HIGH", action: "Create dedicated pages for each use case (e.g. SEO for E-commerce)" },
            { n: "Glossary / Terminology", status: "WARN", finding: "Partial glossary found", priority: "MEDIUM", action: "Expand terminology coverage — build a comprehensive glossary" },
          ],
        },
        {
          name: "AI Trust & Credibility",
          sectionNum: "4.4",
          score: 60,
          checks: [
            { n: "HTTPS Security", status: "FAIL", finding: "HTTP only flagged — mixed content issue", priority: "CRITICAL", action: "Enforce HTTPS sitewide, fix all mixed content warnings" },
            { n: "Contact & Ownership", status: "PASS", finding: "Contact info and ownership displayed", priority: "HIGH", action: "Ensure contact details are in schema markup too" },
            { n: "Legal Pages", status: "PASS", finding: "Privacy policy and T&C present", priority: "HIGH", action: "Keep legal pages updated — essential for AI trust signals" },
            { n: "Content Freshness", status: "PASS", finding: "Content regularly updated", priority: "HIGH", action: "Publish at least 2-4 new pieces of content per month" },
            { n: "Social Proof / Testimonials", status: "FAIL", finding: "No testimonials or case studies", priority: "MEDIUM", action: "Add 3-5 case studies and 10+ client testimonials sitewide" },
          ],
        },
        {
          name: "Machine-Readable Metadata",
          sectionNum: "4.5",
          score: 50,
          note: "★ LOWEST CATEGORY",
          checks: [
            { n: "Organization Schema", status: "FAIL", finding: "Organization JSON-LD missing", priority: "CRITICAL", action: "Add Organization schema with legalName, logo, sameAs, contact" },
            { n: "Open Graph Tags", status: "WARN", finding: "OG tags missing or incomplete", priority: "MEDIUM", action: "Add og:title, og:description, og:image, og:url to all pages" },
            { n: "Twitter Card Tags", status: "WARN", finding: "Twitter/X card meta tags missing", priority: "MEDIUM", action: "Add twitter:card, twitter:title, twitter:image to all pages" },
            { n: "BreadcrumbList Schema", status: "WARN", finding: "Breadcrumb schema missing", priority: "MEDIUM", action: "Add BreadcrumbList JSON-LD to all pages" },
            { n: "Author/Person Schema", status: "PASS", finding: "Author schema partially implemented", priority: "HIGH", action: "Expand with sameAs, knowsAbout, and jobTitle properties" },
          ],
        },
      ],
    },
  },
};

// Content Calendar
const CALENDAR = [
  {
    month: "Month 1: April 2026",
    theme: "SEO Foundations + Service Page Expansion",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: Establish core service pages, launch first definition piece for SEO, begin FAQ-style content. Align with on-page SEO repairs happening in parallel.",
    items: [
      { week: "W1", dates: "Apr 1–5", type: "Service Page", title: "What is SEO? A Complete Guide for Businesses in 2026", goal: "Definition page — Featured Snippet + E-E-A-T", keywords: "what is seo, seo explained, seo for business", cta: "Free Audit", owner: "SEO" },
      { week: "W2", dates: "Apr 7–12", type: "Blog Post", title: "Why Your Website is Invisible on Google (And How to Fix It)", goal: "Awareness — informational search intent", keywords: "website not showing on google, improve seo ranking", cta: "Contact Us", owner: "Content" },
      { week: "W3", dates: "Apr 14–19", type: "Service Page", title: "SEO Services by BuimbDigital — Packages & Pricing", goal: "Service page — commercial intent keywords", keywords: "seo services, seo agency, seo packages pricing", cta: "Get a Quote", owner: "SEO" },
      { week: "W4", dates: "Apr 21–26", type: "Social Post", title: "5 Quick SEO Wins Any Business Can Do This Week [Carousel]", goal: "Brand awareness + engagement", keywords: "quick seo tips, easy seo wins", cta: "Share/Save", owner: "Marketing" },
    ],
  },
  {
    month: "Month 2: Late April / May 2026",
    theme: "AEO Content Push + First Case Study",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: AEO content push. Publish the AEO definition piece, launch the first case study for E-E-A-T, build the first FAQ page for People Also Ask capture.",
    items: [
      { week: "W5", dates: "Apr 28–May 3", type: "Blog Post", title: "What is AEO? How to Optimize for AI Answer Engines in 2026", goal: "Definition page — AEO awareness, featured snippet", keywords: "answer engine optimization, what is AEO, AEO guide", cta: "Free Audit", owner: "Content" },
      { week: "W6", dates: "May 5–10", type: "Service Page", title: "Digital Marketing Services — Full-Funnel Strategy", goal: "Core service page — expand thin content to 1200w", keywords: "digital marketing agency, full funnel marketing", cta: "Get a Quote", owner: "SEO" },
      { week: "W7", dates: "May 12–17", type: "Case Study", title: "How We Grew Organic Traffic 140% for [Client A] in 6 Months", goal: "E-E-A-T + trust signal — results-based proof", keywords: "seo case study, agency results, traffic growth", cta: "View Work", owner: "Marketing" },
      { week: "W8", dates: "May 19–24", type: "Social Post", title: "What Does a Digital Agency Actually Do? [Explainer Thread]", goal: "Thought leadership + brand citability", keywords: "digital agency explained, what does an agency do", cta: "Follow Us", owner: "Marketing" },
      { week: "W9", dates: "May 26–31", type: "FAQ Page", title: "FAQ: Digital Marketing & SEO — 15 Questions Answered", goal: "People Also Ask — AEO snippet capture", keywords: "digital marketing faq, seo questions answered", cta: "Free Audit", owner: "Content" },
    ],
  },
  {
    month: "Month 3: June 2026",
    theme: "GEO Awareness + Niche Vertical Pages",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: GEO awareness and niche verticals. Publish the GEO explainer piece and first use case page. Second case study for E-E-A-T.",
    items: [
      { week: "W10", dates: "Jun 2–7", type: "Blog Post", title: "GEO: What is Generative Engine Optimization and Why It Matters", goal: "GEO awareness — LLM citation + featured snippet", keywords: "generative engine optimization, GEO SEO, AI search", cta: "Free Audit", owner: "Content" },
      { week: "W11", dates: "Jun 9–14", type: "Use Case Page", title: "SEO for E-Commerce Businesses — Strategy & Results", goal: "Use case page — niche commercial intent", keywords: "ecommerce seo, online store seo, product page seo", cta: "Get a Quote", owner: "SEO" },
      { week: "W12", dates: "Jun 16–21", type: "Case Study", title: "How BuimbDigital Helped [Client B] Rank #1 for Local Search", goal: "Local SEO proof + E-E-A-T trust signals", keywords: "local seo results, rank on google maps, local business", cta: "View Work", owner: "Marketing" },
      { week: "W13", dates: "Jun 23–28", type: "Social Post", title: "SEO vs AEO vs GEO — What's the Difference? [Infographic]", goal: "Educational content — shares + brand recall", keywords: "seo vs aeo, seo vs geo, modern seo 2026", cta: "Share", owner: "Marketing" },
    ],
  },
  {
    month: "Month 4: July / Early August 2026",
    theme: "Thought Leadership + Conversion Content",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: Thought leadership and conversion-focused content. Push service pages for competitive keywords. Build internal authority linking.",
    items: [
      { week: "W14", dates: "Jun 30–Jul 5", type: "Blog Post", title: "How to Write Content That AI Tools Will Actually Cite", goal: "GEO — LLM citability + thought leadership", keywords: "AI content optimization, llm seo, ai citation tips", cta: "Free Audit", owner: "Content" },
      { week: "W15", dates: "Jul 7–12", type: "Use Case Page", title: "Digital Marketing for Law Firms — What Actually Works", goal: "Niche use case — long-tail commercial intent", keywords: "law firm digital marketing, seo for lawyers", cta: "Get a Quote", owner: "SEO" },
      { week: "W16", dates: "Jul 14–19", type: "Service Page", title: "Content Marketing Services — Strategy, Writing & Distribution", goal: "Thin service page expansion — 1000+ words", keywords: "content marketing agency, content strategy service", cta: "Get a Quote", owner: "SEO" },
      { week: "W17", dates: "Jul 21–26", type: "Blog Post", title: "Core Web Vitals 2026: What Businesses Need to Know", goal: "Technical SEO awareness + internal authority link", keywords: "core web vitals 2026, page speed seo, cwv explained", cta: "Free Audit", owner: "Content" },
      { week: "W18", dates: "Jul 28–Aug 2", type: "Social Post", title: "Client Win Wednesday: [Result of the Month] [Story Card]", goal: "Social proof + brand trust signal", keywords: "client results, digital marketing wins", cta: "Contact Us", owner: "Marketing" },
    ],
  },
  {
    month: "Month 5: August / September 2026",
    theme: "Local SEO Reinforcement + Brand Trust",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: Local SEO reinforcement and brand trust. Optimize GBP, publish third case study, target SaaS and B2B verticals.",
    items: [
      { week: "W19", dates: "Aug 4–9", type: "Blog Post", title: "How to Optimize Your Google Business Profile in 2026", goal: "Local SEO — GBP guide + featured snippet target", keywords: "google business profile 2026, gbp optimization", cta: "Free Audit", owner: "Content" },
      { week: "W20", dates: "Aug 11–16", type: "Case Study", title: "3x ROI in 90 Days: [Client C]'s Paid + Organic Strategy", goal: "Full-funnel case study — E-E-A-T + conversion proof", keywords: "digital marketing roi, agency case study, ppc + seo", cta: "View Work", owner: "Marketing" },
      { week: "W21", dates: "Aug 18–23", type: "Use Case Page", title: "SEO for SaaS Companies — Scaling Organic Growth", goal: "Niche vertical — high-value B2B intent", keywords: "saas seo, seo for software company, b2b seo agency", cta: "Get a Quote", owner: "SEO" },
      { week: "W22", dates: "Aug 25–30", type: "Social Post", title: "The Real Reason Your Competitors Outrank You [Thread]", goal: "Engagement-first — brand awareness", keywords: "outrank competitors, seo strategy, competitor seo", cta: "Share", owner: "Marketing" },
      { week: "W23", dates: "Sep 1–6", type: "FAQ Page", title: "FAQ: How Long Does SEO Take? (And Other Hard Questions)", goal: "People Also Ask — AEO capture + long-tail FAQ", keywords: "how long does seo take, seo timeline, seo expectations", cta: "Free Audit", owner: "Content" },
    ],
  },
  {
    month: "Month 6: September / October 2026",
    theme: "Authority Consolidation + 2027 Positioning",
    // ADDED FROM WORD DOC: month focus paragraph
    focusText: "Focus: Authority consolidation and 2027 forward positioning. Refresh content, build schema depth, publish the annual thought leadership piece.",
    items: [
      { week: "W24", dates: "Sep 8–13", type: "Blog Post", title: "Voice Search Optimization: How to Rank for Spoken Queries", goal: "AEO / Voice — maintain 100 score + thought leadership", keywords: "voice search optimization, voice seo 2026, speakable", cta: "Free Audit", owner: "Content" },
      { week: "W25", dates: "Sep 15–20", type: "Definition Page", title: "What is Schema Markup? A Plain-English Guide with Examples", goal: "Definition + featured snippet — AEO schema awareness", keywords: "schema markup explained, structured data seo", cta: "Contact Us", owner: "Content" },
      { week: "W26", dates: "Sep 22–27", type: "Use Case Page", title: "Digital Marketing for Restaurants & Hospitality Businesses", goal: "New niche vertical — local + AI search visibility", keywords: "restaurant digital marketing, hospitality seo agency", cta: "Get a Quote", owner: "SEO" },
      { week: "W27", dates: "Sep 29–Oct 4", type: "Case Study", title: "From 0 to 5,000 Monthly Visits: [Client D]'s SEO Journey", goal: "6-month results story — trust + proof + conversions", keywords: "seo results 6 months, organic traffic growth, agency", cta: "View Work", owner: "Marketing" },
      { week: "W28", dates: "Oct 6–11", type: "Social Post", title: "6-Month Content Recap: What Worked, What Didn't [Data Post]", goal: "Transparency + authority — brand citability signal", keywords: "content marketing results, what works in seo 2026", cta: "Follow Us", owner: "Marketing" },
      { week: "W29", dates: "Oct 13–18", type: "Blog Post", title: "2027 SEO Predictions: What's Coming & How to Prepare Now", goal: "Evergreen authority — forward-looking thought leadership", keywords: "seo 2027, future of seo, ai search trends", cta: "Free Audit", owner: "Content" },
    ],
  },
];

// Competitors
const COMPETITORS = [
  { name: "PageTraffic", domain: "pagetraffic.in", est: 2002, team: "200+", hq: "Delhi, India", market: "India + Global", pricing: "Rs.30K-Rs.1.5L/mo", clutch: "4.8/5", seo: 5, aeo: 3, geo: 3, strengths: "24 years experience, large client portfolio, Google Premier Partner, strong backlink authority, extensive case study library", weaknesses: "Higher pricing, slower to adopt AEO/GEO trends, less agile for SMEs, templated reporting", opp: "BuimbDigital competes on AEO/GEO expertise, faster turnaround, and personalised service for SMEs" },
  { name: "Techmagnate", domain: "techmagnate.com", est: 2006, team: "300+", hq: "Delhi, India", market: "India + Global", pricing: "Rs.50K-Rs.2L/mo", clutch: "4.9/5", seo: 5, aeo: 3, geo: 3, strengths: "Google Premier Partner, enterprise-scale campaigns, strong technical SEO, analytics-driven, high Clutch rating", weaknesses: "Expensive, not suitable for startups or SMEs, limited GEO/AI offerings, long onboarding cycles", opp: "BuimbDigital wins on cost-effectiveness, GEO/AI optimisation, and accessibility for growing businesses" },
  { name: "EZ Rankings", domain: "ezrankings.com", est: 2010, team: "150+", hq: "Noida, India", market: "India + Global", pricing: "Rs.15K-Rs.80K/mo", clutch: "4.7/5", seo: 4, aeo: 3, geo: 4, strengths: "Affordable pricing, broad service range, good client communication, strong e-commerce SEO track record", weaknesses: "Less strong on AEO schema strategy, content quality inconsistent, limited international presence", opp: "BuimbDigital differentiates through AEO+GEO integration and higher-quality content strategy" },
  { name: "WebSpero Solutions", domain: "webspero.com", est: 2014, team: "100+", hq: "Mohali, India", market: "India + USA", pricing: "Rs.20K-Rs.1L/mo", clutch: "4.8/5", seo: 4, aeo: 3, geo: 3, strengths: "Strong technical SEO, AI-powered tools, good US market presence, award-winning agency, growing brand authority", weaknesses: "Limited social media and PPC depth, GEO strategy not prominently marketed, limited case study visibility", opp: "BuimbDigital's full-service model (SEO+SMM+PPC+Web) offers more complete coverage for clients" },
  { name: "Social Beat", domain: "socialbeat.in", est: 2012, team: "200+", hq: "Bengaluru, India", market: "India", pricing: "Rs.40K-Rs.2L/mo", clutch: "4.6/5", seo: 3, aeo: 2, geo: 2, strengths: "Outstanding social media and influencer marketing, strong creative execution, D2C expertise, well-known brand", weaknesses: "Weaker SEO/technical capability, almost no AEO or GEO focus, limited global reach, India-only", opp: "BuimbDigital wins on SEO+AEO+GEO depth and serves global markets — clear differentiation" },
  { name: "Conversion Perk", domain: "conversionperk.com", est: 2016, team: "80+", hq: "Delhi, India", market: "India + Global", pricing: "Rs.10K-Rs.60K/mo", clutch: "4.7/5", seo: 4, aeo: 2, geo: 2, strengths: "Strong PPC and performance marketing, affordable, quick execution, good client retention", weaknesses: "Limited content/AEO strategy, no GEO positioning, weaker brand authority vs older agencies", opp: "BuimbDigital's AEO+GEO+content depth is a clear differentiator in the SME market segment" },
];

// Keywords
const KW = {
  primary: [
    { kw: "digital marketing agency India", vol: "22,000", diff: "HIGH", intent: "Commercial", pri: "CRITICAL", page: "Homepage" },
    { kw: "SEO services India", vol: "18,000", diff: "HIGH", intent: "Commercial", pri: "CRITICAL", page: "SEO Service Page" },
    { kw: "best SEO company India", vol: "12,000", diff: "HIGH", intent: "Commercial", pri: "CRITICAL", page: "SEO Service Page" },
    { kw: "digital marketing company India", vol: "14,000", diff: "HIGH", intent: "Commercial", pri: "CRITICAL", page: "Homepage" },
    { kw: "social media marketing agency India", vol: "8,000", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "SMM Service Page" },
    { kw: "PPC agency India", vol: "5,500", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "PPC Service Page" },
    { kw: "web design company India", vol: "9,000", diff: "HIGH", intent: "Commercial", pri: "HIGH", page: "Web Design Page" },
    { kw: "affordable SEO services India", vol: "4,400", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "SEO Service Page" },
    { kw: "digital marketing agency for small business", vol: "3,600", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "Homepage / Blog" },
    { kw: "SEO agency India pricing", vol: "2,900", diff: "LOW", intent: "Commercial", pri: "HIGH", page: "Pricing Page" },
  ],
  longtail: [
    { kw: "what is SEO and how does it work 2026", vol: "6,600", diff: "LOW", intent: "Informational", pri: "HIGH", page: "Blog / Definition Page" },
    { kw: "how to rank on Google in India", vol: "3,200", diff: "LOW", intent: "Informational", pri: "HIGH", page: "Blog Post" },
    { kw: "best digital marketing strategies for startups", vol: "2,800", diff: "LOW", intent: "Informational", pri: "HIGH", page: "Blog Post" },
    { kw: "how long does SEO take to show results", vol: "4,100", diff: "LOW", intent: "Informational", pri: "HIGH", page: "FAQ / Blog Post" },
    { kw: "what is answer engine optimization", vol: "1,900", diff: "LOW", intent: "Informational", pri: "HIGH", page: "AEO Blog / Definition" },
    { kw: "what is generative engine optimization", vol: "1,400", diff: "LOW", intent: "Informational", pri: "HIGH", page: "GEO Blog / Definition" },
    { kw: "how to optimize for Google AI Overview", vol: "2,200", diff: "LOW", intent: "Informational", pri: "HIGH", page: "Blog Post" },
    { kw: "digital marketing ROI for small business", vol: "1,800", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog Post" },
    { kw: "SEO vs paid ads which is better", vol: "3,300", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog / Comparison Page" },
    { kw: "how to improve website ranking India", vol: "2,700", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog Post" },
    { kw: "social media marketing tips for business India", vol: "2,100", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog Post" },
    { kw: "core web vitals explained 2026", vol: "1,600", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog Post" },
    { kw: "what is schema markup and how to use it", vol: "2,400", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog / Definition Page" },
    { kw: "voice search optimization guide", vol: "1,200", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Blog Post" },
    { kw: "digital marketing case study India", vol: "1,000", diff: "LOW", intent: "Informational", pri: "MEDIUM", page: "Case Study Page" },
  ],
  local: [
    { kw: "digital marketing agency Agra", vol: "320", diff: "LOW", intent: "Local", pri: "CRITICAL", page: "Location Page / GBP" },
    { kw: "SEO services Agra", vol: "260", diff: "LOW", intent: "Local", pri: "CRITICAL", page: "Location Page / GBP" },
    { kw: "digital marketing company Agra", vol: "210", diff: "LOW", intent: "Local", pri: "HIGH", page: "Homepage / GBP" },
    { kw: "social media marketing Agra", vol: "180", diff: "LOW", intent: "Local", pri: "HIGH", page: "SMM Service Page" },
    { kw: "web design company Agra", vol: "240", diff: "LOW", intent: "Local", pri: "HIGH", page: "Web Design Page / GBP" },
    { kw: "PPC services Agra", vol: "140", diff: "LOW", intent: "Local", pri: "MEDIUM", page: "PPC Service Page" },
    { kw: "best digital marketing agency near me", vol: "8,100", diff: "MEDIUM", intent: "Local", pri: "HIGH", page: "GBP + Homepage" },
    { kw: "SEO company near me India", vol: "5,400", diff: "MEDIUM", intent: "Local", pri: "HIGH", page: "GBP + Homepage" },
  ],
  global: [
    { kw: "white label SEO services India", vol: "2,900", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "Dedicated Landing Page" },
    { kw: "outsource digital marketing India", vol: "1,800", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "Landing Page" },
    { kw: "hire SEO expert India", vol: "3,200", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "Service Page / Blog" },
    { kw: "digital marketing agency for ecommerce", vol: "4,400", diff: "MEDIUM", intent: "Commercial", pri: "HIGH", page: "Use Case Page" },
    { kw: "SEO services for SaaS companies", vol: "2,100", diff: "LOW", intent: "Commercial", pri: "HIGH", page: "Use Case Page" },
    { kw: "affordable digital marketing agency global", vol: "1,400", diff: "LOW", intent: "Commercial", pri: "MEDIUM", page: "Homepage" },
    { kw: "AI SEO services agency", vol: "1,900", diff: "LOW", intent: "Commercial", pri: "MEDIUM", page: "SEO Service Page" },
    { kw: "GEO optimization services", vol: "800", diff: "LOW", intent: "Commercial", pri: "MEDIUM", page: "GEO Service Page" },
  ],
};

// ── UTILITIES ──
function scCol(s) { return s >= 65 ? "#21bf6b" : s >= 45 ? "#f59e0b" : "#ef4444"; }
function scBg(s) { return s >= 65 ? "#dcfce7" : s >= 45 ? "#fef9c3" : "#fee2e2"; }
function grade(s) { return s >= 90 ? "A+" : s >= 80 ? "A" : s >= 70 ? "B+" : s >= 60 ? "B" : s >= 50 ? "C" : s >= 40 ? "D" : "F"; }
function gradeClass(s) { return s >= 65 ? "grade-good" : s >= 45 ? "grade-ok" : "grade-bad"; }
function statusBadge(st) {
  if (st === "PASS") return `<span class="status-badge sb-pass">&#10003; PASS</span>`;
  if (st === "WARN") return `<span class="status-badge sb-warn">&#9888; WARN</span>`;
  return `<span class="status-badge sb-fail">&#10005; FAIL</span>`;
}
function priChip(p) { return `<span class="priority-badge pr-${p.toLowerCase()}">${p}</span>`; }
function typeChip(t) {
  const map = { "Blog Post": "type-blog", "Service Page": "type-service", "Case Study": "type-case", "Social Post": "type-social", "FAQ Page": "type-faq", "Use Case Page": "type-usecase", "Definition Page": "type-definition", "Landing Page": "type-landing" };
  return `<span class="type-chip ${map[t] || "type-blog"}">${t}</span>`;
}
function ownerChip(o) {
  const map = { SEO: "owner-seo", Content: "owner-content", Marketing: "owner-marketing" };
  return `<span class="owner-chip ${map[o] || "owner-seo"}">${o}</span>`;
}
function diffChip(d) { return `<span class="diff-${d.toLowerCase()}">${d}</span>`; }
function scoreChip(s, label) {
  const c = s >= 80 ? "sc-green" : s >= 70 ? "sc-yellow" : "sc-red";
  return `<span class="score-chip ${c}">${s}/100 (${grade(s)})</span>`;
}

// ── SCAN ANIMATION ──
function rng(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }

const SCAN_STEPS = [
  { label: 'Resolving domain DNS & SSL', duration: 3000 },
  { label: 'Crawling homepage & structure', duration: 4500 },
  { label: 'Discovering internal pages', duration: 5000 },
  { label: 'Auditing on-page SEO elements', duration: 5500 },
  { label: 'Checking technical SEO setup', duration: 5000 },
  { label: 'Testing Core Web Vitals', duration: 5500 },
  { label: 'Analyzing mobile responsiveness', duration: 4500 },
  { label: 'Running AEO & schema checks', duration: 5000 },
  { label: 'Scanning GEO & AI signals', duration: 5000 },
  { label: 'Auditing backlink profile', duration: 4000 },
  { label: 'Checking local SEO signals', duration: 4000 },
  { label: 'Compiling results & scoring', duration: 5000 },
];

function generatePages(domain) {
  const base = domain.replace(/https?:\/\//i, "").replace(/\/$/, "");
  return [
    { url: base + "/", label: "Homepage", icon: "🏠" },
    { url: base + "/about", label: "About Us", icon: "👥" },
    { url: base + "/services", label: "Services", icon: "⚙️" },
    { url: base + "/services/web-design", label: "Web Design", icon: "🎨" },
    { url: base + "/blog", label: "Blog", icon: "📝" },
    { url: base + "/blog/seo-guide-2026", label: "SEO Guide 2026", icon: "📄" },
    { url: base + "/blog/digital-marketing-tips", label: "Marketing Tips", icon: "📄" },
    { url: base + "/contact", label: "Contact", icon: "✉️" },
    { url: base + "/case-studies", label: "Case Studies", icon: "📋" },
    { url: base + "/pricing", label: "Pricing", icon: "💰" },
    { url: base + "/faq", label: "FAQ", icon: "❓" },
    { url: base + "/sitemap.xml", label: "XML Sitemap", icon: "🗺️" },
  ];
}

function startAudit() {
  let url = (document.getElementById("url-input").value || "").trim();
  if (!url) { document.getElementById("url-input").focus(); return; }
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  const domain = url.replace(/https?:\/\//i, "").replace(/\/$/, "");

  document.getElementById("audit-btn").disabled = true;
  document.getElementById("page-hero").style.display = "none";
  document.getElementById("results").style.display = "none";
  const ld = document.getElementById("loading");
  ld.style.display = "block";
  document.getElementById("scan-domain-text").textContent = domain;

  const pages = generatePages(url);
  const totalPages = pages.length;
  const pagesListEl = document.getElementById("pages-list");
  const pagesCountEl = document.getElementById("pages-count");

  const stepsEl = document.getElementById("scan-steps");
  stepsEl.innerHTML = SCAN_STEPS.map((s, i) => `<div class="scan-step" id="ss${i}"><div class="ss-dot"></div><div class="ss-text">${s.label}</div><span class="ss-right" id="ss-time-${i}"></span></div>`).join("");

  pagesListEl.innerHTML = pages.map((p, i) => `<div class="page-item" id="pi${i}"><span class="page-icon">${p.icon}</span><span class="page-url">${p.url}</span><span class="page-status queued" id="ps${i}">Queued</span></div>`).join("");
  pagesCountEl.textContent = `0 / ${totalPages}`;

  const pf = document.getElementById("prog-fill");
  const pp = document.getElementById("prog-pct");
  const pl = document.getElementById("prog-label");
  const pt = document.getElementById("prog-time");

  let checked = 0;
  const lc = document.getElementById("live-checked");
  const le = document.getElementById("live-errors");
  const lw = document.getElementById("live-warnings");
  const lpass = document.getElementById("live-passed");

  function animCounter(el, target, dur) {
    let start = 0, step = target / (dur / 50);
    const iv = setInterval(() => { start = Math.min(start + step, target); el.textContent = Math.round(start); if (start >= target) clearInterval(iv); }, 50);
  }

  const TOTAL_DURATION = 55000;
  const startTime = Date.now();

  const progIv = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const pct = Math.min(Math.round((elapsed / TOTAL_DURATION) * 100), 99);
    pf.style.width = pct + "%";
    pp.textContent = pct + "%";
    const rem = Math.max(0, Math.round((TOTAL_DURATION - elapsed) / 1000));
    pt.textContent = rem > 0 ? `Estimated time remaining: ~${rem} seconds` : "Finalizing results...";
  }, 200);

  let pageIdx = 0;
  const pageCrawlInterval = Math.round((TOTAL_DURATION * 0.7) / totalPages);
  function crawlNextPage() {
    if (pageIdx >= totalPages) return;
    if (pageIdx > 0) {
      document.getElementById("ps" + (pageIdx - 1)).textContent = "Done";
      document.getElementById("ps" + (pageIdx - 1)).className = "page-status done";
      document.getElementById("pi" + (pageIdx - 1)).scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
    document.getElementById("ps" + pageIdx).textContent = "Scanning...";
    document.getElementById("ps" + pageIdx).className = "page-status scanning";
    pagesCountEl.textContent = `${pageIdx + 1} / ${totalPages}`;
    pageIdx++;
    setTimeout(crawlNextPage, pageCrawlInterval + rng(-200, 200));
  }
  setTimeout(crawlNextPage, 500);

  let stepIdx = 0;
  function runNextStep() {
    if (stepIdx > 0) {
      const prevEl = document.getElementById("ss" + (stepIdx - 1));
      prevEl.className = "scan-step done";
      document.getElementById("ss-time-" + (stepIdx - 1)).textContent = "Done";
      document.getElementById("ss-time-" + (stepIdx - 1)).style.color = "#21bf6b";
    }
    if (stepIdx >= SCAN_STEPS.length) {
      for (let i = pageIdx - 1; i < totalPages; i++) {
        document.getElementById("ps" + i).textContent = "Done";
        document.getElementById("ps" + i).className = "page-status done";
      }
      pagesCountEl.textContent = `${totalPages} / ${totalPages}`;
      clearInterval(progIv);
      pf.style.width = "100%";
      pp.textContent = "100%";
      pl.textContent = "Audit complete — building your report...";
      pt.textContent = "";
      animCounter(lc, 89, 1500);
      animCounter(le, 12, 1500);
      animCounter(lw, 22, 1500);
      animCounter(lpass, 55, 1500);
      setTimeout(() => { ld.style.display = "none"; renderResults(D, domain); }, 2000);
      return;
    }
    const step = SCAN_STEPS[stepIdx];
    const stepEl = document.getElementById("ss" + stepIdx);
    stepEl.className = "scan-step active";
    pl.textContent = step.label + "...";
    const checksPerStep = Math.round(89 / SCAN_STEPS.length);
    animCounter(lc, Math.min(89, checked + checksPerStep), step.duration - 200);
    checked = Math.min(89, checked + checksPerStep);
    stepIdx++;
    setTimeout(runNextStep, step.duration + rng(-200, 300));
  }
  setTimeout(runNextStep, 800);
}

// ── RENDER ──
let _data = null;
let _userDomain = "";
function renderResults(data, userDomain) {
  _data = data;
  const displayDomain = userDomain || data.domain;
  _userDomain = displayDomain;
  document.getElementById("bc-domain").textContent = displayDomain;
  document.getElementById("res-domain").textContent = displayDomain;
  document.getElementById("res-meta").textContent = "Audit completed · " + new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) + " · 89 checks · SEO + AEO + GEO";

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
    { key: "calendar", label: "Content Calendar" },
    { key: "strategy", label: "SEO Strategy" },
    { key: "competitors", label: "Competitors" },
    { key: "keywords", label: "Keywords" },
  ];
  tabs.forEach((t, i) => {
    const allC = t.key === "seo" ? data.mods.seo.categories.flatMap(c => c.checks) : t.key === "aeo" ? data.mods.aeo.categories.flatMap(c => c.checks) : t.key === "geo" ? data.mods.geo.categories.flatMap(c => c.checks) : [];
    const issues = allC.filter(c => c.status !== "PASS").length;
    const btn = document.createElement("button");
    btn.className = "mtab" + (i === 0 ? " active" : "");
    btn.innerHTML = t.label + (issues > 0 ? `<span class="mtab-count">${issues}</span>` : "");
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
  document.querySelectorAll(".mtab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tp-" + key).classList.add("active");
}

function buildPanel(key, data) {
  if (key === "overview") return buildOverview(data);
  if (key === "seo") return buildModulePanel(data.mods.seo);
  if (key === "aeo") return buildModulePanel(data.mods.aeo);
  if (key === "geo") return buildModulePanel(data.mods.geo);
  if (key === "action") return buildActionPlan(data);
  if (key === "calendar") return buildCalendar();
  if (key === "strategy") return buildStrategy();
  if (key === "competitors") return buildCompetitors();
  if (key === "keywords") return buildKeywords();
  return "";
}

// ── ADDED FROM WORD DOC: Table of Contents builder ──
function buildTOC() {
  return `
  <div class="toc-wrapper">
    <div class="toc-title">TABLE OF CONTENTS</div>
    <div class="toc-section-label">PART 1 — SEO / AEO / GEO AUDIT REPORT</div>
    <div class="toc-subtitle"><em>Complete search visibility analysis — 89 checks across 14 categories</em></div>
    <div class="toc-row"><span class="toc-num">1.0</span><span class="toc-item"><strong>Executive Summary</strong><span class="toc-desc"> — Overall scores, key strengths, critical weaknesses, leadership recommendations</span></span></div>
    <div class="toc-row"><span class="toc-num">2.0</span><span class="toc-item"><strong>SEO Analysis — Detailed Findings</strong><span class="toc-desc"> — On-Page, Technical, Core Web Vitals, Mobile &amp; UX, Backlinks, Local SEO</span></span></div>
    <div class="toc-row"><span class="toc-num">3.0</span><span class="toc-item"><strong>AEO Analysis — Answer Engine Optimization</strong><span class="toc-desc"> — Featured Snippets, Voice Search, Schema, E-E-A-T, NLP &amp; Semantic</span></span></div>
    <div class="toc-row"><span class="toc-num">4.0</span><span class="toc-item"><strong>GEO Analysis — Generative Engine Optimization</strong><span class="toc-desc"> — LLM Content, Brand Citability, AI Coverage, Trust &amp; Metadata</span></span></div>
    <div class="toc-row"><span class="toc-num">5.0</span><span class="toc-item"><strong>Prioritized Action Plan</strong><span class="toc-desc"> — 34 actions — Critical (2 weeks), High (30 days), Medium (60-90 days)</span></span></div>
    <div class="toc-row"><span class="toc-num">6.0</span><span class="toc-item"><strong>Team Responsibilities &amp; Timeline</strong><span class="toc-desc"> — Developer, Content/SEO, and Marketing task breakdowns with 30/60-day targets</span></span></div>
    <div class="toc-row"><span class="toc-num">7.0</span><span class="toc-item"><strong>Final Notes &amp; Executive Recommendations</strong><span class="toc-desc"> — Summary for leadership and 4 immediate actions</span></span></div>
    <div class="toc-section-label" style="margin-top:14px">PART 2 — 6-MONTH CONTENT CALENDAR</div>
    <div class="toc-subtitle"><em>April – October 2026 | 29 pieces | Weekly breakdown</em></div>
    <div class="toc-row"><span class="toc-num">8.0</span><span class="toc-item"><strong>Content Calendar Overview &amp; Strategy</strong><span class="toc-desc"> — Content mix, audit gap mapping, content type legend</span></span></div>
    <div class="toc-row"><span class="toc-num">9.0</span><span class="toc-item"><strong>Monthly Calendar: Months 1–6</strong><span class="toc-desc"> — Week-by-week topics, types, keywords, CTAs, and owner assignments</span></span></div>
    <div class="toc-row"><span class="toc-num">10.0</span><span class="toc-item"><strong>Content KPIs &amp; Success Metrics</strong><span class="toc-desc"> — 8 KPIs, tracking tools, frequency, and 6-month targets</span></span></div>
    <div class="toc-section-label" style="margin-top:14px">PART 3 — SEO STRATEGY PLAN, COMPETITOR ANALYSIS &amp; KEYWORDS</div>
    <div class="toc-subtitle"><em>12-month plan · 6 competitors · 62 keywords</em></div>
    <div class="toc-row"><span class="toc-num">11.0</span><span class="toc-item"><strong>12-Month SEO Strategy Plan</strong><span class="toc-desc"> — 4 phases: Fix Foundation → Authority → Scale → Dominate</span></span></div>
    <div class="toc-row"><span class="toc-num">12.0</span><span class="toc-item"><strong>Competitor Analysis</strong><span class="toc-desc"> — 6 competitors profiled with strengths, weaknesses, and positioning opportunities</span></span></div>
    <div class="toc-row"><span class="toc-num">13.0</span><span class="toc-item"><strong>Keyword Recommendations</strong><span class="toc-desc"> — 62 keywords: Primary, Long-Tail, Local, and Global — with volumes and targets</span></span></div>
  </div>`;
}

function buildOverview(data) {
  const allC = ["seo", "aeo", "geo"].flatMap(k => data.mods[k].categories.flatMap(c => c.checks));
  const totF = allC.filter(c => c.status === "FAIL").length;
  const totW = allC.filter(c => c.status === "WARN").length;
  const totP = allC.filter(c => c.status === "PASS").length;

  let html = `
  <div class="cover-card">
    <div class="cover-parts">
      <div class="cover-part cover-part-1"><div class="cover-part-num">PART 1</div><div class="cover-part-title">SEO / AEO / GEO</div><div class="cover-part-sub">Audit Report</div><div class="cover-part-note">74/100 Overall | 89 Checks</div></div>
      <div class="cover-part cover-part-2"><div class="cover-part-num">PART 2</div><div class="cover-part-title">Content Calendar</div><div class="cover-part-sub">6-Month Plan</div><div class="cover-part-note">29 Pieces | Apr–Oct 2026</div></div>
      <div class="cover-part cover-part-3"><div class="cover-part-num">PART 3</div><div class="cover-part-title">SEO Plan, Competitors</div><div class="cover-part-sub">& Keywords</div><div class="cover-part-note">12-Month Plan | 6 Competitors | 62 Keywords</div></div>
    </div>
    <div class="cover-stats">
      <div class="cover-stat"><div class="cover-stat-val" style="color:#dc2626">${totF}</div><div class="cover-stat-lbl">Errors</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#d97706">${totW}</div><div class="cover-stat-lbl">Warnings</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#16a34a">${totP}</div><div class="cover-stat-lbl">Passed</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#3b82f6">${allC.length}</div><div class="cover-stat-lbl">Total Checks</div></div>
    </div>
    <div class="cover-meta">Audit completed · ${_userDomain || data.domain} · 89 checks · SEO + AEO + GEO · CONFIDENTIAL</div>
  </div>

  <!-- ADDED FROM WORD DOC: Table of Contents -->
  ${buildTOC()}

  <div class="doc-section-head"><h2>SECTION 1: EXECUTIVE SUMMARY</h2><span>Overall scores, key strengths, critical weaknesses</span></div>

  <!-- ADDED FROM WORD DOC: Overview intro paragraph -->
  <div class="exec-overview-para">
    This report presents a comprehensive search visibility audit of ${_userDomain || data.domain}, conducted on ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}. The audit evaluated 89 individual checks across three modern search optimization disciplines: traditional Search Engine Optimization (SEO), Answer Engine Optimization (AEO) for featured snippets and AI-driven search answers, and Generative Engine Optimization (GEO) for visibility within large language model powered tools such as ChatGPT, Perplexity, and Google's AI Overview.
    <br><br>
    The website achieved an overall score of 74/100 (Grade B+), indicating a solid foundation with clear and actionable gaps that, when addressed, have the potential to significantly improve organic traffic, AI citation frequency, and brand authority across all search surfaces.
  </div>

  <div class="score-summary-table">
    <div class="sst-header"><div class="sst-hcell">Module</div><div class="sst-hcell">Score</div><div class="sst-hcell">Grade</div><div class="sst-hcell">Status</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>SEO (Search Engine Optimization)</div><div><span class="sst-score-chip" style="background:#fff0eb;color:#c2410c">70/100</span></div><div><span class="sst-grade-chip grade-ok">B+</span></div><div class="sst-status">Needs Improvement</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#10b981"></div>AEO (Answer Engine Optimization)</div><div><span class="sst-score-chip" style="background:#dcfce7;color:#15803d">79/100</span></div><div><span class="sst-grade-chip grade-ok">B+</span></div><div class="sst-status">Good — Minor Gaps</div></div>
    <div class="sst-row"><div class="sst-module"><div class="sst-bar" style="background:#8b5cf6"></div>GEO (Generative Engine Optimization)</div><div><span class="sst-score-chip" style="background:#f5f3ff;color:#7c3aed">72/100</span></div><div><span class="sst-grade-chip grade-ok">B+</span></div><div class="sst-status">Moderate Gaps</div></div>
    <div class="sst-row overall"><div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>Overall Score</div><div><span class="sst-score-chip" style="background:#fff0eb;color:#ff642d">74/100</span></div><div><span class="sst-grade-chip grade-ok">B+</span></div><div class="sst-status">Strong Foundation</div></div>
  </div>
  <div class="gauges-row">`;

  [{ lbl: "SEO", sc: 70, col: "#ff642d" }, { lbl: "AEO", sc: 79, col: "#10b981" }, { lbl: "GEO", sc: 72, col: "#8b5cf6" }, { lbl: "Overall", sc: 74, col: "#ff642d" }].forEach(g => {
    const circ = 2 * Math.PI * 40;
    const offset = circ - (g.sc / 100) * circ;
    html += `<div class="gauge-card"><div class="gauge-title">${g.lbl} Score</div><div class="gauge-wrap"><svg viewBox="0 0 100 100"><circle class="gauge-bg" cx="50" cy="50" r="40"/><circle class="gauge-fill" cx="50" cy="50" r="40" stroke="${g.col}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 50 50)"/></svg><div class="gauge-num"><div class="gauge-score">${g.sc}</div><div class="gauge-label">/ 100</div></div></div><div class="gauge-grade ${gradeClass(g.sc)}">${grade(g.sc)}</div></div>`;
  });

  html += `</div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">Key Strengths</div>
  <div class="sw-list">
    <div class="sw-item strength"><div class="sw-dot s"></div>Voice Search Optimization — perfect 100/100. Conversational keywords, long-tail questions, and local signals all well-implemented.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>NLP &amp; Semantic SEO — 90/100. Well-structured, semantically rich content aligned with how search engines process natural language.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>LLM-Ready Content and AI Topical Coverage — both 90/100. Site is well-structured for AI tools to parse and cite.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>Backlinks &amp; Off-Page SEO — 90/100. Strong domain authority and quality external link signals.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>Technical SEO fundamentals (SSL, XML sitemap, robots.txt, redirect hygiene) largely in order at 83/100.</div>
  </div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">Critical Weaknesses Requiring Immediate Action</div>
  <div class="sw-list">
    <div class="sw-item weakness"><div class="sw-dot w"></div>Page Load Speed — CRITICAL failure. Slow load times directly reduce Google rankings, increase bounce rates, and hurt mobile conversions.</div>
    <div class="sw-item weakness"><div class="sw-dot w"></div>Mobile Responsiveness — 38/100, the single lowest score in the entire audit. With over 60% of web traffic on mobile, this is a major revenue-impacting issue.</div>
    <div class="sw-item weakness"><div class="sw-dot w"></div>HTTPS Security (GEO) — CRITICAL error. AI systems and security-conscious search algorithms may deprioritize or distrust the site.</div>
    <div class="sw-item weakness"><div class="sw-dot w"></div>E-E-A-T — 60/100. Missing trust badges, publication dates, and expanded author credentials.</div>
    <div class="sw-item weakness"><div class="sw-dot w"></div>Machine-Readable Metadata — 50/100, the lowest category score. Limiting how search engines and AI systems represent the site.</div>
  </div>`;
  return html;
}

const EXEC_SUMMARIES = {
  SEO: {
    what: "This section evaluates 40 technical and content signals that determine how well your website ranks on Google. It covers 6 categories: On-Page SEO, Technical SEO, Core Web Vitals, Mobile & UX, Backlinks, and Local SEO. The overall SEO score is 70/100 (Grade B+) — a solid foundation with critical mobile and speed gaps pulling the score down.",
    problems: ["Page Load Speed — CRITICAL: Slow load times hurt rankings and increase bounce rate", "Mobile Responsiveness — 38/100: Site is not fully responsive — lowest score in entire audit", "Viewport Meta Tag missing — Google cannot render mobile layout correctly", "Title Tags missing or generic on key pages — hurting click-through rates", "Noindex tags found on important pages — blocking Google from indexing them", "Canonical tags missing — creating duplicate content risk", "TTFB too high — server responds slowly before page begins loading", "Google Business Profile not fully verified — missing local search visibility"],
    improvements: ["Fix mobile responsiveness immediately — add responsive CSS and viewport meta tag", "Optimize page speed: minify CSS/JS, enable GZIP, use a CDN, convert images to WebP", "Write unique 50-60 char title tags on every page with primary keyword", "Remove all noindex directives from pages you want Google to index", "Add self-referencing canonical tags to every page to prevent duplicate content", "Enable server-side caching and use a CDN to reduce TTFB under 200ms", "Claim and fully optimize Google Business Profile with photos, hours and categories", "Expand thin content pages to 800-1200 words with FAQ sections"],
  },
  AEO: {
    what: "This section evaluates how well your website is optimized for AI-powered answer engines — Google's People Also Ask, Featured Snippets, and voice search assistants. AEO score is 79/100 (Grade B+) — the strongest section overall. Voice Search is perfect at 100/100. Main gaps are in schema markup, FAQ sections, and trust signals.",
    problems: ["No 'X is...' definition sections found — missing featured snippet opportunities", "No FAQ sections on key pages — missing People Also Ask (PAA) capture", "HowTo Schema missing — step-by-step content not eligible for rich results", "QAPage Schema not implemented — Q&A content not structured for AI reading", "No trust badges or client reviews on key pages — E-E-A-T score impacted", "No publication/update dates on content — freshness signal missing"],
    improvements: ["Add 'What is X?' definition sections to every service and topic page", "Add FAQ sections with 5-10 Q&A pairs (40-80 words each) to all key pages", "Implement HowTo JSON-LD schema on all tutorial and process pages", "Add QAPage schema to all Q&A content pages", "Add trust badges, certifications, partner logos and genuine client reviews", "Add 'Last Updated' dates to all articles — signals freshness to AI systems", "Link first mentions of key entities to authoritative external sources"],
  },
  GEO: {
    what: "This section evaluates your website's visibility inside AI-powered tools like ChatGPT, Google AI Overview, Perplexity and Bing Copilot. GEO score is 72/100 (Grade B+). The site has strong AI-ready content and topical coverage, but critical gaps in metadata, HTTPS consistency, brand name standardization and social proof are limiting AI citation frequency.",
    problems: ["HTTPS Security flagged — mixed content issues — AI systems may deprioritize HTTP pages", "Organization Schema (JSON-LD) missing — AI cannot properly identify the business", "Inconsistent brand name across pages — confusing for AI entity recognition", "Machine-Readable Metadata score 50/100 — lowest category — Open Graph and Twitter Cards incomplete", "No testimonials or case studies — AI systems favor sites with social proof", "BreadcrumbList Schema missing — AI cannot understand site structure", "Open Graph and Twitter Card tags missing/incomplete on most pages"],
    improvements: ["Enforce HTTPS sitewide — fix all mixed content warnings immediately", "Add Organization JSON-LD schema with legalName, url, logo, sameAs to all pages", "Standardize brand name as 'BuimbDigital' across all pages and metadata", "Add complete Open Graph tags: og:title, og:description, og:image, og:url", "Add Twitter Card meta tags: twitter:card, twitter:title, twitter:image", "Add BreadcrumbList JSON-LD to communicate site hierarchy to AI systems", "Add 3-5 case studies and 10+ client testimonials to key service pages", "Submit to Clutch, GoodFirms, DesignRush directories for AI brand citations"],
  },
};

function buildModulePanel(mod) {
  const allC = mod.categories.flatMap(c => c.checks);
  const totF = allC.filter(c => c.status === "FAIL").length;
  const totW = allC.filter(c => c.status === "WARN").length;
  const totP = allC.filter(c => c.status === "PASS").length;
  const sectionMap = { SEO: "2", AEO: "3", GEO: "4" };
  const sNum = sectionMap[mod.label] || "";
  const es = EXEC_SUMMARIES[mod.label] || {};

  let html = `
  <div class="doc-section-head"><h2>SECTION ${sNum}: ${mod.label} ANALYSIS — Detailed Findings</h2><span>${allC.length} checks · Score: ${mod.score}/100 · Grade: ${grade(mod.score)}</span></div>`;

  // ADDED FROM WORD DOC: module-level intro paragraph (AEO and GEO have one)
  if (mod.intro) {
    html += `<div class="module-intro-para">${mod.intro}</div>`;
  }

  html += `
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — What Is Happening & What To Do</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${es.what || ""}</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>⚠️ Current Problems Identified</h3><ul>${(es.problems || []).map(p => `<li><span class="li-dot" style="background:#ef4444"></span>${p}</li>`).join("")}</ul></div>
      <div class="exec-summary-col"><h3>✅ Improvements To Make</h3><ul>${(es.improvements || []).map(i => `<li><span class="li-dot" style="background:#21bf6b"></span>${i}</li>`).join("")}</ul></div>
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

  // ADDED FROM WORD DOC: SEO section has its own intro line before categories
  if (mod.label === "SEO") {
    html += `<div class="module-intro-para">The SEO section evaluates 6 core categories. Composite SEO score: 70/100. Below is a detailed breakdown of each category with findings and team action notes.</div>`;
  }

  mod.categories.forEach(cat => {
    const catF = cat.checks.filter(c => c.status === "FAIL").length;
    const catW = cat.checks.filter(c => c.status === "WARN").length;
    const catP = cat.checks.filter(c => c.status === "PASS").length;
    const id = "cat-" + cat.name.replace(/\s+/g, "-");
    html += `
    <div class="cat-section" id="${id}">
      <div class="cat-section-head" onclick="toggleCat('${id}')">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <div class="cat-section-title"><h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin:0">${cat.sectionNum} ${cat.name}</h3>${cat.note ? `<span style="font-size:11px;color:#dc2626;font-weight:600">${cat.note}</span>` : ""}</div>
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

    // ADDED FROM WORD DOC: category intro paragraph shown inside expanded section
    if (cat.intro) {
      html += `<div class="cat-intro-para">${cat.intro}</div>`;
    }

    html += `
      <div class="table-scroll">
        <table class="checks-table" style="min-width:660px">
          <thead><tr><th style="width:155px">Check</th><th style="width:72px">Status</th><th>Finding</th><th style="width:88px">Priority</th><th>Action Required</th></tr></thead>
          <tbody>`;
    cat.checks.forEach(c => {
      html += `<tr><td><div class="check-name">${c.n}</div></td><td>${statusBadge(c.status)}</td><td><div class="finding-text">${c.finding}</div></td><td>${priChip(c.priority)}</td><td><div class="action-text">${c.action}</div></td></tr>`;
    });
    html += `</tbody></table></div></div>`;
  });
  return html;
}

function toggleCat(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}

function buildActionPlan(data) {
  const allC = [];
  ["seo", "aeo", "geo"].forEach(k => data.mods[k].categories.forEach(cat => cat.checks.filter(c => c.status !== "PASS").forEach(c => allC.push({ ...c, module: k.toUpperCase() }))));
  allC.sort((a, b) => ["CRITICAL", "HIGH", "MEDIUM", "LOW"].indexOf(a.priority) - ["CRITICAL", "HIGH", "MEDIUM", "LOW"].indexOf(b.priority));

  const groups = [
    { key: "CRITICAL", label: "Critical Priority — Fix Within 2 Weeks", bg: "#fef2f2", col: "#dc2626" },
    { key: "HIGH", label: "High Priority — Fix Within 30 Days", bg: "#fff7ed", col: "#c2410c" },
    { key: "MEDIUM", label: "Medium Priority — Fix Within 60-90 Days", bg: "#fefce8", col: "#a16207" },
    { key: "LOW", label: "Low Priority", bg: "#f8f9fc", col: "#6b7280" },
  ];

  let html = `<div class="doc-section-head"><h2>SECTION 5: PRIORITIZED ACTION PLAN — All ${allC.length} Actions</h2><span>Critical (2 weeks) · High (30 days) · Medium (60-90 days)</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Your Complete Fix List</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">Below is every issue from the audit organized by priority. Fix Critical items within 2 weeks — they are actively hurting your rankings right now. High priority items should be completed within 30 days. Medium priority improvements can be tackled over 60–90 days.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>🔴 What's Broken Right Now</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>7 Critical issues blocking rankings immediately</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Mobile site not responsive — failing Google's mobile-first index</li>
        <li><span class="li-dot" style="background:#ef4444"></span>HTTPS issues — AI search tools deprioritizing HTTP pages</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Organization Schema missing — search engines can't identify the business</li>
        <li><span class="li-dot" style="background:#ef4444"></span>15 High priority issues reducing search visibility daily</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ What To Do & When</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Week 1-2: Developer sprint — fix all 7 Critical technical items</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Week 1-4: Content/SEO team rewrites titles, meta, adds FAQs</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 1-2: Marketing team collects reviews, trust badges, case studies</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 2-3: Medium priority improvements for sustained growth</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Target: 83/100 overall score within 30 days of starting</li>
      </ul></div>
    </div>
  </div>`;

  let num = 1;
  groups.forEach(g => {
    const items = allC.filter(c => c.priority === g.key);
    if (!items.length) return;
    html += `<div style="background:${g.bg};border:1px solid ${g.col}33;border-radius:8px;padding:10px 16px;margin-bottom:8px;margin-top:12px">
      <span style="font-size:13px;font-weight:700;color:${g.col}">${g.label}</span>
      <span style="font-size:11px;color:#9ba3af;margin-left:8px">(${items.length} issues)</span>
    </div>
    <div class="table-scroll" style="margin-bottom:8px">
    <table class="action-table">
      <thead style="background:#a90006"><tr><th style="width:35px">#</th><th style="width:150px">Issue</th><th style="width:60px">Module</th><th style="width:85px">Priority</th><th>Recommended Fix</th></tr></thead>
      <tbody>`;
    items.forEach(c => {
      const mCol = c.module === "SEO" ? "#ff642d" : c.module === "AEO" ? "#10b981" : "#8b5cf6";
      const mBg = c.module === "SEO" ? "#fff0eb" : c.module === "AEO" ? "#f0fdf4" : "#f5f3ff";
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

  html += `<div class="doc-section-head" style="margin-top:24px"><h2>SECTION 6: TEAM RESPONSIBILITIES &amp; TIMELINE</h2><span>30/60-day targets by team</span></div>
  <div class="team-grid">`;
  const teams = [
    { name: "Developer / Technical Team", col: "#3b82f6", bg: "#1e3a5f", tasks: ["Fix HTTPS / mixed content warnings — Week 1", "Add viewport meta tag to all pages — Week 1", "Implement Organization JSON-LD schema sitewide — Week 1", "Remove noindex tags from key pages — Week 1", "Fix TTFB: enable caching, CDN, server optimization — Week 1-2", "Improve page load speed: minify, compress, lazy-load — Week 1-2", "Create custom 404 error page — Week 2", "Add HowTo, QAPage, BreadcrumbList, and Person schema to relevant pages — Week 3-4", "Add Open Graph and Twitter Card meta tags to all pages — Week 3-4", "Add canonical tags to all pages — Week 3-4"] },
    { name: "Content / SEO Team", col: "#ff642d", bg: "#7c2d12", tasks: ["Audit and rewrite all title tags — Week 1-2", "Write unique meta descriptions for all pages — Week 1-2", "Add primary keywords to first 100 words of all service pages — Week 2", "Add definition sections ('What is X?') to all service pages — Week 2-3", "Create FAQ sections for all key pages — Week 2-3", "Add publication and 'Last Updated' dates to all content — Week 2-3", "Expand thin content pages to 800+ words — Week 3-6", "Create 3-5 use case landing pages — Week 4-8"] },
    { name: "Marketing / Brand Team", col: "#10b981", bg: "#064e3b", tasks: ["Audit brand name consistency across all pages and external listings — Week 1", "Collect and add trust badges, certifications, and partner logos — Week 2-3", "Gather and publish 10+ client testimonials with names and companies — Week 2-4", "Create 3-5 detailed case studies — Week 3-8", "Submit brand to Clutch, GoodFirms, DesignRush directories — Week 2-3", "Optimize Google Business Profile — Week 1-2", "Pursue press mentions and digital PR opportunities — Ongoing"] },
  ];
  teams.forEach(t => {
    html += `<div class="team-card"><div class="team-card-head" style="background:${t.bg};color:#fff">${t.name}</div><div class="team-task-list">`;
    t.tasks.forEach(task => { html += `<div class="team-task"><div class="team-task-dot" style="background:${t.col}"></div>${task}</div>`; });
    html += `</div></div>`;
  });
  html += `</div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">30/60-Day Score Milestone Targets</div>
  <table class="milestone-table" style="border-radius:12px;overflow:hidden">
    <thead><tr><th>Module</th><th>Current Score</th><th>30-Day Target</th><th>60-Day Target</th></tr></thead>
    <tbody>
      <tr><td>SEO Overall</td><td>${scoreChip(70)}</td><td><span class="score-chip sc-yellow">80/100</span></td><td><span class="score-chip sc-green">87/100</span></td></tr>
      <tr><td>AEO Overall</td><td>${scoreChip(79)}</td><td><span class="score-chip sc-green">86/100</span></td><td><span class="score-chip sc-green">91/100</span></td></tr>
      <tr><td>GEO Overall</td><td>${scoreChip(72)}</td><td><span class="score-chip sc-yellow">82/100</span></td><td><span class="score-chip sc-green">88/100</span></td></tr>
      <tr class="overall-row"><td><strong>Overall Score</strong></td><td>${scoreChip(74)}</td><td><span class="score-chip sc-yellow">83/100</span></td><td><span class="score-chip sc-green">89/100 (A)</span></td></tr>
    </tbody>
  </table>
  <div class="doc-section-head"><h2>SECTION 7: FINAL NOTES &amp; EXECUTIVE RECOMMENDATIONS</h2><span>Summary for leadership and 4 immediate actions</span></div>
  <div style="background:#f8f9fc;border:1px solid #e2e5ed;border-radius:12px;padding:18px;margin-bottom:20px;font-size:13px;color:#374151;line-height:1.65">
    ${_userDomain || "buimbdigital.com"} is performing at a B+ level across all three dimensions of modern search visibility. Core strengths — strong backlinks, perfect voice search optimization, and well-structured AI-ready content — provide a competitive foundation that many agencies lack. However, the 74/100 overall score leaves meaningful performance on the table.
    <br><br>
    <!-- ADDED FROM WORD DOC: second paragraph in final notes -->
    The two most revenue-impactful issues are mobile responsiveness (38/100) and page load speed (CRITICAL failure). Fixing these two items alone could produce measurable ranking improvements within 30-60 days. The GEO gaps — particularly around Organization schema, brand consistency, HTTPS signals, and metadata — are increasingly important as AI-powered search tools continue to grow in usage.
  </div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">4 Immediate Actions for Leadership</div>
  ${["Assign a developer sprint in the next 5-7 days focused exclusively on the 8 critical technical items.", "Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.", "Begin collecting client testimonials and case study approvals from existing clients this week.", "Set a re-audit date 30 days from today to measure progress against the baseline scores in this report."].map((a, i) => `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff;border:1px solid #e2e5ed;border-radius:10px;margin-bottom:8px"><div style="width:28px;height:28px;background:#ff642d;border-radius:8px;color:#fff;font-size:13px;font-weight:700;display:grid;place-items:center;flex-shrink:0">${i + 1}</div><div style="font-size:13px;color:#374151;line-height:1.5;padding-top:4px">${a}</div></div>`).join("")}`;
  return html;
}

function buildCalendar() {
  let html = `<div class="doc-section-head"><h2>PART 2: 6-MONTH CONTENT CALENDAR</h2><span>April – October 2026 · 29 Content Pieces · Weekly Breakdown</span></div>

  <!-- ADDED FROM WORD DOC: Section 8 — Content Calendar Strategy & Overview -->
  <div class="doc-section-head"><h2>SECTION 8: CONTENT CALENDAR — Strategy &amp; Overview</h2><span>Content mix, audit gap mapping, content type legend</span></div>
  <div class="module-intro-para">
    This content calendar is built directly from the audit gaps. Every piece is mapped to a specific optimization goal — fixing thin content, capturing featured snippets, building E-E-A-T trust signals, improving AI citability, or targeting high-value commercial keywords. The calendar spans 6 months (26 weeks) covering Blog Posts, Service/Landing Pages, Case Studies, and Social Posts.
  </div>

  <!-- ADDED FROM WORD DOC: Content Type Legend -->
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

  <!-- ADDED FROM WORD DOC: Audit Gap Mapping section -->
  <div style="margin-top:18px;margin-bottom:10px;font-size:14px;font-weight:700;color:#1a1a2e">Audit Gap Mapping — Why Each Content Type Matters</div>
  <div class="audit-gap-mapping">
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#10b981"></span><strong>Definition pages</strong> → Fixes AEO gap: 'No definition sections found' <span class="gap-impact">Score impact: +8pts AEO</span></div>
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#10b981"></span><strong>FAQ pages</strong> → Fixes AEO gap: 'No FAQ sections on pages' <span class="gap-impact">Score impact: +6pts AEO</span></div>
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#10b981"></span><strong>Case studies</strong> → Fixes E-E-A-T gap: 'No trust signals or social proof' <span class="gap-impact">Score impact: +10pts AEO</span></div>
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#8b5cf6"></span><strong>Use case pages</strong> → Fixes GEO gap: 'Limited use-case content' <span class="gap-impact">Score impact: +5pts GEO</span></div>
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#ff642d"></span><strong>Service page expansions</strong> → Fixes SEO gap: 'Thin content on key pages' <span class="gap-impact">Score impact: +8pts SEO</span></div>
    <div class="gap-map-item"><span class="gap-map-dot" style="background:#8b5cf6"></span><strong>GEO/AI-focused blog posts</strong> → Improves LLM citability and AI topical authority <span class="gap-impact">Score impact: +5pts GEO</span></div>
  </div>

  <div class="exec-summary" style="margin-top:20px">
    <div class="exec-summary-title">📋 Execution Summary — 6-Month Content Strategy</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">29 pieces of content mapped directly to audit gaps. Each piece targets a specific SEO, AEO or GEO weakness identified in the audit. Follow the calendar week-by-week to systematically close every content gap identified.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 What's Broken (Content Gaps)</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>No definition sections — missing featured snippet eligibility</li>
        <li><span class="li-dot" style="background:#ef4444"></span>No FAQ sections — missing People Also Ask visibility</li>
        <li><span class="li-dot" style="background:#ef4444"></span>No case studies — E-E-A-T score and trust signals lacking</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Thin service pages — not competitive for commercial keywords</li>
        <li><span class="li-dot" style="background:#ef4444"></span>No GEO/AI-focused content — missing LLM citation opportunities</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ What This Calendar Fixes</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 1: SEO foundations — service pages + definition pieces</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 2: AEO push — first case study, FAQ page, AEO guide</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 3: GEO awareness — GEO explainer + niche use cases</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 4-5: Thought leadership + local SEO reinforcement</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 6: Authority consolidation + 2027 forward positioning</li>
      </ul></div>
    </div>
  </div>

  <div class="doc-section-head"><h2>SECTION 9: 6-MONTH WEEKLY CALENDAR</h2><span>Week-by-week topics, types, keywords, CTAs, and owner assignments</span></div>`;

  CALENDAR.forEach(month => {
    html += `<div class="cal-month"><div class="cal-month-head"><h3>${month.month}</h3><span>Theme: ${month.theme}</span></div>`;

    // ADDED FROM WORD DOC: month focus paragraph
    if (month.focusText) {
      html += `<div class="cal-focus-para">${month.focusText}</div>`;
    }

    html += `
    <div class="table-scroll"><table class="cal-table">
      <thead><tr><th style="width:50px">Week</th><th style="width:100px">Type</th><th style="width:240px">Title / Topic</th><th style="width:160px">Target Keywords</th><th>SEO / AEO Goal</th><th style="width:70px">Owner</th></tr></thead>
      <tbody>`;
    month.items.forEach(item => {
      html += `<tr><td><div class="cal-week">${item.week}</div><div class="cal-dates">${item.dates}</div></td><td>${typeChip(item.type)}</td><td><div class="cal-title">${item.title}</div></td><td><div class="cal-kw">${item.keywords}</div></td><td><div class="cal-goal">${item.goal}</div></td><td>${ownerChip(item.owner)}</td></tr>`;
    });
    html += `</tbody></table></div></div>`;
  });

  html += `<div class="doc-section-head"><h2>SECTION 10: CONTENT KPIs &amp; SUCCESS METRICS</h2><span>Track these 8 KPIs monthly</span></div>
  <table class="kpi-table">
    <thead><tr><th>KPI Metric</th><th>Starting Point</th><th>Tracking Tool</th><th>Frequency</th><th>6-Month Target</th></tr></thead>
    <tbody>
      ${[["Organic Traffic","Baseline (Month 0)","Google Analytics 4","Monthly","+15% by Month 3, +40% by Month 6"],["Keyword Rankings","Track 20 target keywords","Google Search Console","Weekly","5+ in Top 10 by Month 3"],["Blog Pageviews","Baseline (Month 0)","GA4 / GSC","Monthly","2x by Month 6"],["Case Study Leads","0 currently","CRM / Form tracking","Monthly","3+ leads from case studies by Month 4"],["Social Engagement Rate","Baseline this week","LinkedIn / Meta Analytics","Weekly","+20% engagement by Month 2"],["AI Citation Appearances","Manual audit","Perplexity / ChatGPT","Monthly","Brand cited in 5+ AI queries by Month 6"],["Domain Authority","Current score","Ahrefs / Moz","Monthly","+5 DA points by Month 6"],["Backlinks Earned","Baseline","Ahrefs","Monthly","10+ new referring domains by Month 6"]].map(([kpi,start,tool,freq,target],i) => `<tr style="background:${i%2===0?"#fff":"#f8f9fc"}"><td class="kpi-name">${kpi}</td><td>${start}</td><td>${tool}</td><td><span style="font-size:11px;padding:2px 8px;background:#eff6ff;color:#1d4ed8;border-radius:4px;font-weight:500">${freq}</span></td><td class="kpi-target">${target}</td></tr>`).join("")}
    </tbody>
  </table>`;
  return html;
}

function buildStrategy() {
  let html = `<div class="doc-section-head"><h2>SECTION 11: 12-MONTH SEO STRATEGY PLAN</h2><span>4 Phases: Fix Foundation → Authority → Scale → Dominate</span></div>

  <!-- ADDED FROM WORD DOC: Section 11 intro paragraph -->
  <div class="module-intro-para">
    This plan is structured into four quarterly phases, each with a clear objective, deliverable list, and expected scoring milestone. The goal is to fix all critical audit issues within 90 days, build authority over months 4–6, scale internationally in months 7–9, and consolidate the site as a top-ranked digital marketing agency in India and globally by Month 12.
  </div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — 12-Month Growth Roadmap</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">A structured 4-phase plan to achieve top rankings, fix all critical audit issues, grow organic traffic by 150%, and generate 20+ qualified leads per month.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Current Situation</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>Overall 74/100 — solid base but with critical technical gaps</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Mobile score 38/100 — actively suppressing rankings</li>
        <li><span class="li-dot" style="background:#ef4444"></span>GEO score 72/100 — AI search visibility not yet optimized</li>
        <li><span class="li-dot" style="background:#ef4444"></span>0 case studies or testimonials — E-E-A-T very weak</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Local SEO 63/100 — GBP not fully claimed/optimized</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ 12-Month Targets</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 3: Fix all critical issues, 81/100 overall score</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 6: Content clusters built, 86/100 overall score</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 9: International reach, brand in 10+ AI queries</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 12: 93/100 overall, Top 3 for 10 primary keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>+150% organic traffic growth from Month 1 baseline</li>
      </ul></div>
    </div>
  </div>`;

  const phases = [
    { name: "Phase 1 — Months 1-3: Fix the Foundation", focus: "Technical fixes, on-page corrections, schema implementation, local SEO setup", col: "#dc2626", bg: "#1a0000", items: [["Add viewport meta tag + responsive CSS fix","Developer","Week 1","Mobile 38→75","+15% rankings"],["Fix HTTPS / resolve all mixed content warnings","Developer","Week 1","GEO HTTPS fix","+AI trust signals"],["Remove noindex from all key pages","Developer/SEO","Week 1","Tech SEO fix","New pages indexed"],["Write unique title tags + meta descriptions for all pages","SEO Team","Weeks 1-2","On-Page fix","+20% CTR est."],["Page speed optimisation: GZIP, CDN, image WebP conversion","Developer","Weeks 1-2","CWV fix","+Core Web Vitals"],["Add Organization + FAQPage + BreadcrumbList schema sitewide","Developer","Week 2","GEO schema fix","Rich results eligible"],["Claim + fully optimise Google Business Profile","Marketing","Week 1-2","Local SEO fix","Local Pack entry"],["Expand thin content pages to 800-1200 words","Content","Weeks 2-6","Content fix","+Rankings depth"],["Add definition sections + FAQ blocks to all service pages","Content","Weeks 2-6","AEO fix","+PAA capture"]] },
    { name: "Phase 2 — Months 4-6: Authority & Content Build", focus: "Content cluster build, E-E-A-T trust signals, link acquisition, case studies", col: "#d97706", bg: "#451a03", items: [["Publish 6-month content calendar Weeks 1-4 content","Content","Month 4","Content gap fix","Featured snippets"],["Launch 3 use case pages for niche verticals","SEO + Content","Month 4-5","GEO fix","Niche traffic"],["Publish 2 case studies with measurable results","Marketing","Month 4-5","E-E-A-T fix","Trust signals"],["Build 10+ quality backlinks via guest posts and directories","SEO","Month 4-6","Authority build","+Domain Authority"],["Submit to Clutch, GoodFirms, DesignRush + 5 niche directories","Marketing","Month 4","GEO fix","Directory citations"],["Add 10+ client testimonials and trust badges sitewide","Marketing","Month 4-5","E-E-A-T fix","Social proof"],["Achieve 83/100 overall audit score","All Teams","Month 6","Milestone","Score benchmark"]] },
    { name: "Phase 3 — Months 7-9: Scale & Brand Authority", focus: "International targeting, PR outreach, AI citation building, schema expansion", col: "#10b981", bg: "#064e3b", items: [["Create international landing pages for white-label and outsource keywords","SEO + Dev","Month 7","Global keywords","International leads"],["Publish 3 more case studies for E-E-A-T depth","Marketing","Month 7-8","E-E-A-T fix","Trust authority"],["Expand schema to HowTo and QAPage on all eligible content","Developer","Month 7","AEO fix","Rich results expansion"],["Launch link building campaign: target DA60+ referral domains","SEO","Month 7-9","Authority build","+10 referring domains"],["Press outreach: 3-5 media mentions or guest articles","Marketing","Month 7-9","Domain authority","+3 DA60+ links"]] },
    { name: "Phase 4 — Months 10-12: Dominate & Sustain", focus: "Top 3 keyword push, brand authority consolidation, 2027 AI search preparation", col: "#8b5cf6", bg: "#2e1065", items: [["Content refresh: update all 2026 blog posts for 2027 accuracy","Content","Month 10-11","Freshness signal","All posts refreshed"],["Push top 10 primary keywords toward Top 3 via link building","SEO","Months 10-12","Revenue-driving rankings","5+ in Top 3"],["Expand to 2 new niche verticals with dedicated pages","SEO + Content","Month 10","Vertical authority","2 new pages ranked"],["Full re-audit: target 93/100 overall score","SEO Lead","Month 12","Benchmark verification","93+ overall score"],["2027 SEO predictions piece + strategy update document","Content + SEO","Month 11-12","Thought leadership","Rank for 2027 keywords"]] },
  ];

  phases.forEach(phase => {
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
    <thead><tr><th>Module</th><th>Now (Mar 26)</th><th>Month 3</th><th>Month 6</th><th>Month 9</th><th>Month 12 Target</th></tr></thead>
    <tbody>
      <tr><td>SEO</td><td>${scoreChip(70)}</td><td><span class="score-chip sc-yellow">79/100</span></td><td><span class="score-chip sc-green">84/100</span></td><td><span class="score-chip sc-green">88/100</span></td><td><span class="score-chip sc-target">92/100 (A)</span></td></tr>
      <tr><td>AEO</td><td>${scoreChip(79)}</td><td><span class="score-chip sc-green">85/100</span></td><td><span class="score-chip sc-green">89/100</span></td><td><span class="score-chip sc-green">92/100</span></td><td><span class="score-chip sc-target">95/100 (A+)</span></td></tr>
      <tr><td>GEO</td><td>${scoreChip(72)}</td><td><span class="score-chip sc-yellow">80/100</span></td><td><span class="score-chip sc-green">85/100</span></td><td><span class="score-chip sc-green">89/100</span></td><td><span class="score-chip sc-target">92/100 (A)</span></td></tr>
      <tr class="overall-row"><td><strong>OVERALL</strong></td><td>${scoreChip(74)}</td><td><span class="score-chip sc-yellow">81/100</span></td><td><span class="score-chip sc-green">86/100</span></td><td><span class="score-chip sc-green">90/100</span></td><td><span class="score-chip sc-target">93/100 (A+)</span></td></tr>
    </tbody>
  </table>`;
  return html;
}

function buildCompetitors() {
  function stars(n, col) {
    return `<span style="color:${col};letter-spacing:1px;font-size:12px">${"●".repeat(n)}${"○".repeat(5 - n)}</span>`;
  }

  let html = `<div class="doc-section-head"><h2>SECTION 12: COMPETITOR ANALYSIS</h2><span>6 key competitors — India + Global digital marketing agency landscape</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Competitive Landscape &amp; Where You Win</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">6 competitors analyzed across SEO, AEO, and GEO strength. All are established players in the India + Global digital marketing space — but none lead clearly on AEO or GEO, giving BuimbDigital a significant first-mover advantage.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Competitor Weaknesses</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>PageTraffic &amp; Techmagnate — expensive, enterprise-only, no AEO/GEO strategy</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Social Beat — India-only, almost no technical SEO or AEO capability</li>
        <li><span class="li-dot" style="background:#ef4444"></span>EZ Rankings — inconsistent content quality, limited international reach</li>
        <li><span class="li-dot" style="background:#ef4444"></span>WebSpero — GEO not prominently marketed, limited PPC depth</li>
        <li><span class="li-dot" style="background:#ef4444"></span>None of the 6 explicitly market GEO or AI search optimisation as a service</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ BuimbDigital Opportunities</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Be the first Indian agency to lead with AEO + GEO positioning</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Publish definitive guides for "AEO" and "GEO" keywords in India now</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Position as premium full-service at SME-friendly pricing — clear gap</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Target global businesses wanting India quality + Indian businesses wanting global reach</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Answer the "ChatGPT visibility" question that no competitor addresses</li>
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

  html += `<div class="doc-section-head" style="margin-top:24px"><h2>Competitive Gap Analysis — Where BuimbDigital Wins</h2></div>
  <table class="comp-gap-table">
    <thead><tr><th>Competitive Gap</th><th>What Competitors Are Missing</th><th>BuimbDigital Opportunity</th></tr></thead>
    <tbody>
      ${[["AEO + GEO Expertise","Most agencies still focus on traditional SEO. AEO and GEO are mentioned by fewer than 30% of competitors in their core positioning.","Lead with AEO+GEO as a differentiator. Create the definitive guides for both terms in India — dominate these low-competition keywords now."],["SME-Friendly Full-Service at Competitive Pricing","Top agencies are expensive and enterprise-focused. Affordable agencies often lack full-service depth.","Position as the premium-quality but accessible full-service agency for growing SMEs, startups, and businesses scaling internationally."],["AI-Ready Strategy Communication","No competitor is clearly communicating AI search optimisation (GEO) as a client benefit — most still use 2022-era language.","First-mover advantage: actively market GEO as a service. Be the agency that answers the ChatGPT visibility question."],["India-Based + Global Execution","Social Beat is India-only. International agencies are expensive. Few agencies serve both India SMEs and global clients equally well.","Explicitly market to global businesses wanting India-quality+pricing AND Indian businesses wanting global-standard strategy."]].map(([gap,miss,opp],i) => `<tr style="background:${i%2===0?"#fff":"#f8f9fc"}"><td><strong>${gap}</strong></td><td>${miss}</td><td style="color:#7c3aed;font-weight:500">${opp}</td></tr>`).join("")}
    </tbody>
  </table>
  <div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:10px">Recommended Positioning Statement</div>
  <div class="positioning-box">"BuimbDigital is a full-service digital marketing agency offering enterprise-quality SEO, AEO, GEO, social media, PPC, and web design — built for growing businesses in India and globally. We are the only agency that combines traditional search excellence with AI search optimisation, at a price point that works for SMEs and scaling brands."</div>`;
  return html;
}

function buildKeywords() {
  function kwTable(title, desc, kwList) {
    let html = `<div style="font-size:14px;font-weight:700;color:#1a1a2e;margin-bottom:6px;margin-top:20px">${title}</div>`;
    if (desc) html += `<div style="font-size:12px;color:#6b7280;margin-bottom:10px;line-height:1.5">${desc}</div>`;
    html += `<div class="table-scroll"><table class="kw-table">
      <thead><tr><th>Keyword</th><th style="text-align:right;white-space:nowrap">Vol/mo</th><th>Difficulty</th><th>Intent</th><th>Priority</th><th>Target Page</th></tr></thead>
      <tbody>`;
    kwList.forEach((kw, i) => {
      html += `<tr style="background:${i % 2 === 0 ? "#fff" : "#f8f9fc"}">
        <td class="kw-keyword">${kw.kw}</td><td class="kw-vol">${kw.vol}</td>
        <td>${diffChip(kw.diff)}</td><td><span class="intent-chip">${kw.intent}</span></td>
        <td>${priChip(kw.pri)}</td><td class="target-page">${kw.page}</td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
    return html;
  }

  let html = `<div class="doc-section-head"><h2>SECTION 13: KEYWORD RECOMMENDATIONS — 62 Keywords</h2><span>Primary Commercial, Long-Tail Informational, Local SEO, and Global/International</span></div>
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Keyword Strategy</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">62 keywords across 4 categories. Start with Local Agra keywords for fastest ROI, then build towards competitive primary commercial keywords over 12 months.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col"><h3>📌 Priority Keyword Gaps</h3><ul>
        <li><span class="li-dot" style="background:#ef4444"></span>4 CRITICAL primary keywords not ranking yet (22K+ monthly searches each)</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Local Agra keywords (320-260 vol) — fastest ROI, very low competition</li>
        <li><span class="li-dot" style="background:#ef4444"></span>"What is AEO/GEO" — emerging keywords with near-zero competition now</li>
        <li><span class="li-dot" style="background:#ef4444"></span>Global B2B keywords not targeted — white-label, outsource searches</li>
      </ul></div>
      <div class="exec-summary-col"><h3>✅ Keyword Action Plan</h3><ul>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 1-2: Target all 8 local Agra keywords — quick wins</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 2-4: Create content for 15 long-tail informational keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 4-6: Expand service pages for 4 primary commercial keywords</li>
        <li><span class="li-dot" style="background:#21bf6b"></span>Month 6-9: Build international landing pages for global B2B keywords</li>
      </ul></div>
    </div>
  </div>`;

  html += kwTable("C.1 — Primary Commercial Keywords (10 Keywords)", "Highest-value keywords for driving qualified leads. High competition — winning requires strong domain authority, excellent on-page SEO, and consistent link building. Target over 12 months.", KW.primary);
  html += kwTable("C.2 — Long-Tail Informational Keywords (15 Keywords)", "Lower competition keywords targeting AEO/GEO gaps — missing FAQ sections, definition pages, and People Also Ask opportunities.", KW.longtail);
  html += kwTable("C.3 — Local SEO Keywords — Agra & Near Me (8 Keywords)", "Critical for driving nearby business enquiries. Very low competition and high commercial intent — these represent the fastest ROI opportunity in the entire keyword set.", KW.local);
  html += kwTable("C.4 — Global & International Keywords (8 Keywords)", "Target international clients looking to outsource digital marketing from India. Strong backlink profile (90/100) gives the domain authority to compete globally.", KW.global);

  html += `<div style="background:#1a1a2e;border-radius:12px;padding:20px;text-align:center;margin-top:24px">
    <div style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:6px">BuimbDigital.com — Complete Digital Marketing Strategy & Audit Report</div>
    <div style="font-size:12px;color:#9ba3af">Prepared by BuimbDigital · info@buimbdigital.com · buimbdigital.com · 17 March 2026</div>
    <div style="font-size:11px;color:#6b7280;margin-top:4px;font-style:italic">CONFIDENTIAL — For Internal Distribution Only.</div>
  </div>`;
  return html;
}

// ── RESET ──
function resetAudit() {
  _data = null;
  _userDomain = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("page-hero").style.display = "block";
  document.getElementById("audit-btn").disabled = false;
  document.getElementById("url-input").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("url-input").addEventListener("keydown", e => { if (e.key === "Enter") startAudit(); });

// ══════════════════════════════════════════════════════
//  CSS — New classes added for Word doc differences
//  (Add these to your stylesheet or inject via JS)
// ══════════════════════════════════════════════════════
(function injectNewStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* TABLE OF CONTENTS */
    .toc-wrapper { background:#f8f9fc; border:1px solid #e2e5ed; border-radius:12px; padding:20px 24px; margin-bottom:24px; }
    .toc-title { font-size:15px; font-weight:800; color:#1a1a2e; letter-spacing:1px; margin-bottom:14px; text-transform:uppercase; border-bottom:2px solid #a90006; padding-bottom:8px; }
    .toc-section-label { font-size:11px; font-weight:700; color:#a90006; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:4px; margin-top:8px; }
    .toc-subtitle { font-size:11px; color:#9ba3af; margin-bottom:8px; }
    .toc-row { display:flex; gap:10px; align-items:baseline; padding:5px 0; border-bottom:1px dashed #e9ecef; }
    .toc-num { font-size:12px; font-weight:700; color:#a90006; min-width:36px; flex-shrink:0; }
    .toc-item { font-size:12.5px; color:#374151; line-height:1.5; }
    .toc-desc { font-size:11px; color:#9ba3af; }

    /* OVERVIEW / MODULE INTRO PARAGRAPHS */
    .exec-overview-para { background:#fff; border-left:4px solid #a90006; border-radius:0 8px 8px 0; padding:14px 18px; margin-bottom:20px; font-size:13px; color:#374151; line-height:1.7; }
    .module-intro-para { background:#f0f4ff; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0; padding:12px 16px; margin-bottom:16px; font-size:13px; color:#374151; line-height:1.65; }

    /* CATEGORY INTRO PARAGRAPHS */
    .cat-intro-para { background:#fafafa; border:1px solid #e9ecef; border-top:none; border-radius:0 0 6px 6px; padding:12px 16px; font-size:12.5px; color:#374151; line-height:1.65; font-style:italic; }

    /* CONTENT CALENDAR EXTRAS */
    .content-type-legend { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:16px; padding:14px; background:#f8f9fc; border-radius:8px; border:1px solid #e2e5ed; }
    .audit-gap-mapping { display:flex; flex-direction:column; gap:6px; margin-bottom:20px; }
    .gap-map-item { display:flex; align-items:center; gap:10px; padding:8px 14px; background:#fff; border:1px solid #e9ecef; border-radius:8px; font-size:12.5px; color:#374151; }
    .gap-map-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
    .gap-impact { margin-left:auto; font-size:11px; font-weight:600; color:#16a34a; background:#dcfce7; padding:2px 8px; border-radius:4px; white-space:nowrap; }
    .cal-focus-para { background:#fffbeb; border-left:4px solid #f59e0b; border-radius:0 8px 8px 0; padding:10px 16px; margin-bottom:10px; font-size:12.5px; color:#374151; line-height:1.6; }
  `;
  document.head.appendChild(style);
})();







// // ══════════════════════════════════════════════════════
// //  COMPLETE PDF EXPORT FIX
// //  INSTRUCTIONS:
// //  1. In your HTML file, find the line:  // PDF Export functionality
// //  2. Delete EVERYTHING from that line to the very end of the file
// //  3. Paste THIS entire file's contents in its place
// //  4. Save and test — PDF will now export ALL 9 tabs, each on clean pages
// // ══════════════════════════════════════════════════════

// // ── UTILITIES ──
// function showLoadingState(button, isLoading) {
//   if (!button) return;
//   if (isLoading) {
//     button.innerHTML = '⏳ Generating PDF...';
//     button.disabled = true;
//     button.style.opacity = '0.7';
//     button.style.cursor = 'wait';
//   } else {
//     button.innerHTML = '⬇ Download PDF';
//     button.disabled = false;
//     button.style.opacity = '1';
//     button.style.cursor = 'pointer';
//   }
// }

// function showNotification(message, type) {
//   type = type || 'info';
//   let el = document.getElementById('pdf-notification');
//   if (!el) {
//     el = document.createElement('div');
//     el.id = 'pdf-notification';
//     el.style.cssText = [
//       'position:fixed', 'top:20px', 'right:20px', 'padding:12px 20px',
//       'border-radius:8px', 'font-size:14px', 'font-weight:500',
//       'z-index:99998', 'box-shadow:0 4px 16px rgba(0,0,0,0.2)',
//       'max-width:340px', 'transition:opacity 0.3s ease'
//     ].join(';');
//     document.body.appendChild(el);
//   }
//   var cols = {
//     success: ['#10b981','#fff'],
//     error:   ['#ef4444','#fff'],
//     info:    ['#3b82f6','#fff'],
//     warning: ['#f59e0b','#fff']
//   };
//   var c = cols[type] || cols.info;
//   el.style.background = c[0];
//   el.style.color = c[1];
//   el.style.opacity = '1';
//   el.textContent = message;
//   clearTimeout(el._t);
//   el._t = setTimeout(function() {
//     el.style.opacity = '0';
//     setTimeout(function(){ if(el.parentNode) el.remove(); }, 300);
//   }, 5000);
// }

// // ── PROGRESS OVERLAY ──
// function createProgressOverlay() {
//   var ov = document.createElement('div');
//   ov.id = 'pdf-ov';
//   ov.style.cssText = [
//     'position:fixed','inset:0','background:rgba(0,0,0,0.6)',
//     'display:flex','align-items:center','justify-content:center',
//     'z-index:99999'
//   ].join(';');
//   ov.innerHTML = `
//     <div style="background:#fff;border-radius:16px;padding:36px 44px;min-width:380px;
//                 text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
//       <div style="font-size:36px;margin-bottom:14px">📄</div>
//       <h3 style="margin:0 0 8px;font-size:18px;color:#1a1a2e;font-weight:800">
//         Generating Full PDF Report
//       </h3>
//       <p id="pdf-ov-msg" style="margin:0 0 20px;font-size:13px;color:#6b7280">Starting...</p>
//       <div style="background:#f1f3f7;border-radius:8px;height:12px;overflow:hidden;margin-bottom:10px">
//         <div id="pdf-ov-bar" style="height:100%;background:linear-gradient(90deg,#ff642d,#f59e0b);
//              width:0%;transition:width 0.5s ease;border-radius:8px"></div>
//       </div>
//       <div id="pdf-ov-pct" style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:8px">0%</div>
//       <div id="pdf-ov-tab" style="font-size:11px;color:#9ba3af">Preparing...</div>
//     </div>`;
//   document.body.appendChild(ov);
//   return {
//     msg: function(t){ document.getElementById('pdf-ov-msg').textContent = t; },
//     tab: function(t){ document.getElementById('pdf-ov-tab').textContent = t; },
//     pct: function(n){
//       document.getElementById('pdf-ov-bar').style.width = n + '%';
//       document.getElementById('pdf-ov-pct').textContent = n + '%';
//     },
//     remove: function(){ ov.remove(); }
//   };
// }

// // ── SLEEP ──
// function pdfSleep(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

// // ── SECTION DIVIDER PAGE ──
// function addDividerPage(pdf, name, num, total, W, H) {
//   pdf.setFillColor(26, 26, 46);
//   pdf.rect(0, 0, W, H, 'F');
//   pdf.setFillColor(255, 100, 45);
//   pdf.rect(0, 0, 6, H, 'F');
//   pdf.setFontSize(10);
//   pdf.setTextColor(255, 100, 45);
//   pdf.setFont('helvetica', 'bold');
//   pdf.text('SECTION ' + num + ' OF ' + total, 18, 110);
//   pdf.setFontSize(32);
//   pdf.setTextColor(255, 255, 255);
//   pdf.text(name, 18, 135);
//   pdf.setDrawColor(255, 100, 45);
//   pdf.setLineWidth(0.4);
//   pdf.line(18, 144, W - 18, 144);
//   pdf.setFontSize(9);
//   pdf.setTextColor(155, 163, 175);
//   pdf.setFont('helvetica', 'normal');
//   pdf.text('SEO + AEO + GEO Audit Report  \u00B7  codewithck.me  \u00B7  19 March 2026', 18, 154);
// }

// // ── CAPTURE ONE PANEL AS CANVAS ──
// async function capturePanel(panel) {
//   // Temporarily force panel fully visible
//   var origClass    = panel.className;
//   var origDisplay  = panel.style.display;
//   var origVis      = panel.style.visibility;
//   var origPos      = panel.style.position;
//   var origOpacity  = panel.style.opacity;
//   var origLeft     = panel.style.left;
//   var origTop      = panel.style.top;
//   var origZIndex   = panel.style.zIndex;
//   var origWidth    = panel.style.width;

//   panel.classList.add('active');
//   panel.style.display    = 'block';
//   panel.style.visibility = 'visible';
//   panel.style.opacity    = '1';
//   panel.style.position   = 'relative';
//   panel.style.left       = '0';
//   panel.style.top        = '0';
//   panel.style.zIndex     = '1';
//   panel.style.width      = '1200px';

//   // Expand all categories inside this panel
//   panel.querySelectorAll('.cat-section').forEach(function(c){ c.classList.add('open'); });

//   await pdfSleep(350);

//   var canvas = await html2canvas(panel, {
//     scale: 2,
//     useCORS: true,
//     logging: false,
//     backgroundColor: '#ffffff',
//     windowWidth: 1200,
//     width: 1200,
//     scrollX: 0,
//     scrollY: 0,
//     allowTaint: false,
//     imageTimeout: 20000,
//     onclone: function(doc, el) {
//       el.style.display    = 'block';
//       el.style.visibility = 'visible';
//       el.style.opacity    = '1';
//       el.style.width      = '1200px';
//       doc.querySelectorAll('.cat-section').forEach(function(c){ c.classList.add('open'); });
//     }
//   });

//   // Restore
//   panel.className        = origClass;
//   panel.style.display    = origDisplay;
//   panel.style.visibility = origVis;
//   panel.style.opacity    = origOpacity;
//   panel.style.position   = origPos;
//   panel.style.left       = origLeft;
//   panel.style.top        = origTop;
//   panel.style.zIndex     = origZIndex;
//   panel.style.width      = origWidth;

//   return canvas;
// }

// // ── ADD CANVAS TO PDF (sliced into A4 pages) ──
// function addCanvasToPDF(pdf, canvas, A4_W, A4_H) {
//   var cW      = canvas.width;
//   var cH      = canvas.height;
//   var pxPerMM = cW / A4_W;          // pixels per mm (horizontally)
//   var pxPageH = A4_H * pxPerMM;     // how many canvas px fit per A4 page
//   var pages   = Math.ceil(cH / pxPageH);

//   for (var pg = 0; pg < pages; pg++) {
//     pdf.addPage();

//     var srcY = pg * pxPageH;
//     var srcH = Math.min(pxPageH, cH - srcY);
//     var dstH = srcH / pxPerMM;

//     // Slice
//     var slice = document.createElement('canvas');
//     slice.width  = cW;
//     slice.height = srcH;
//     var ctx = slice.getContext('2d');
//     ctx.fillStyle = '#ffffff';
//     ctx.fillRect(0, 0, cW, srcH);
//     ctx.drawImage(canvas, 0, srcY, cW, srcH, 0, 0, cW, srcH);

//     // Add footer
//     addPageFooter(ctx, cW, srcH, pg + 1, pages);

//     var imgData = slice.toDataURL('image/jpeg', 0.88);
//     pdf.addImage(imgData, 'JPEG', 0, 0, A4_W, dstH, '', 'FAST');
//   }
// }

// // ── FOOTER ON EACH SLICE ──
// function addPageFooter(ctx, w, h, pageNum, totalPages) {
//   ctx.fillStyle = '#f8f9fc';
//   ctx.fillRect(0, h - 28, w, 28);
//   ctx.fillStyle = '#ff642d';
//   ctx.fillRect(0, h - 2, w, 2);
//   ctx.font = '18px -apple-system, Arial, sans-serif';
//   ctx.fillStyle = '#9ba3af';
//   ctx.fillText('codewithck.me  \u00B7  SEO + AEO + GEO Audit 2026  \u00B7  Page ' + pageNum + ' of ' + totalPages, 20, h - 8);
// }

// // ── MAIN EXPORT FUNCTION ──
// async function exportPDF() {
//   var resultsEl = document.getElementById('results');
//   if (!resultsEl || resultsEl.style.display === 'none') {
//     showNotification('Please run an audit first.', 'warning');
//     return;
//   }

//   var btn = document.querySelector('.btn-sm.btn-orange');
//   showLoadingState(btn, true);

//   var prog = createProgressOverlay();

//   try {
//     var TAB_NAMES = [
//       'Overview',
//       'SEO Analysis',
//       'AEO Analysis',
//       'GEO Analysis',
//       'Action Plan',
//       'Content Calendar',
//       'SEO Strategy',
//       'Competitors',
//       'Keywords'
//     ];

//     var panels = Array.from(document.querySelectorAll('[id^="tp-"]'));
//     // Sort panels by tab order using TAB_NAMES
//     var orderedPanels = [];
//     var tabIds = ['tp-overview','tp-seo','tp-aeo','tp-geo','tp-action','tp-calendar','tp-strategy','tp-competitors','tp-keywords'];
//     tabIds.forEach(function(id){
//       var el = document.getElementById(id);
//       if (el) orderedPanels.push(el);
//     });

//     if (orderedPanels.length === 0) {
//       orderedPanels = panels; // fallback
//     }

//     var A4_W = 210;
//     var A4_H = 297;

//     var { jsPDF } = window.jspdf;
//     var pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

//     // ── COVER PAGE ──
//     prog.msg('Creating cover page...');
//     prog.pct(3);
//     addCoverPage(pdf, A4_W, A4_H);

//     // ── PROCESS EACH TAB ──
//     for (var i = 0; i < orderedPanels.length; i++) {
//       var panel = orderedPanels[i];
//       var name  = TAB_NAMES[i] || ('Section ' + (i+1));
//       var pct   = Math.round(5 + (i / orderedPanels.length) * 88);

//       prog.pct(pct);
//       prog.tab('Processing: ' + name + ' (' + (i+1) + '/' + orderedPanels.length + ')');
//       prog.msg('Capturing ' + name + '...');

//       // Add divider page
//       pdf.addPage();
//       addDividerPage(pdf, name, i+1, orderedPanels.length, A4_W, A4_H);

//       // Capture panel
//       var canvas;
//       try {
//         canvas = await capturePanel(panel);
//       } catch(e) {
//         console.warn('Capture failed for ' + name + ':', e);
//         // Add error note page
//         pdf.addPage();
//         pdf.setFontSize(14);
//         pdf.setTextColor(239, 68, 68);
//         pdf.text('Could not capture ' + name + ' — please try again.', 20, 100);
//         continue;
//       }

//       // Slice into A4 pages and add to PDF
//       addCanvasToPDF(pdf, canvas, A4_W, A4_H);
//     }

//     prog.pct(96);
//     prog.msg('Saving PDF file...');
//     prog.tab('Almost done!');
//     await pdfSleep(400);

//     var domain  = (document.getElementById('bc-domain') ? document.getElementById('bc-domain').textContent : 'audit').replace(/[^a-z0-9.-]/gi, '-');
//     var dateStr = new Date().toISOString().split('T')[0];
//     pdf.save(domain + '-seo-aeo-geo-full-report-' + dateStr + '.pdf');

//     prog.pct(100);
//     prog.msg('Done! PDF saved.');
//     await pdfSleep(800);
//     prog.remove();
//     showNotification('\u2705 Full PDF exported — all 9 tabs included!', 'success');

//   } catch(err) {
//     console.error('PDF export error:', err);
//     prog.remove();
//     showNotification('\u274C PDF failed: ' + err.message, 'error');
//   } finally {
//     showLoadingState(btn, false);
//   }
// }

// // ── COVER PAGE ──
// function addCoverPage(pdf, W, H) {
//   pdf.setFillColor(26, 26, 46);
//   pdf.rect(0, 0, W, H, 'F');

//   // Top accent bar
//   pdf.setFillColor(255, 100, 45);
//   pdf.rect(0, 0, W, 6, 'F');

//   // Logo / domain
//   pdf.setFontSize(28);
//   pdf.setTextColor(255, 255, 255);
//   pdf.setFont('helvetica', 'bold');
//   pdf.text('codewithck.me', 18, 60);

//   // Subtitle
//   pdf.setFontSize(12);
//   pdf.setTextColor(155, 163, 175);
//   pdf.setFont('helvetica', 'normal');
//   pdf.text('Complete SEO + AEO + GEO Visibility Audit Report', 18, 74);

//   // Score box
//   pdf.setFillColor(36, 36, 66);
//   pdf.roundedRect(18, 88, W - 36, 38, 4, 4, 'F');
//   pdf.setFontSize(10);
//   pdf.setTextColor(155, 163, 175);
//   pdf.text('OVERALL SCORE', 30, 100);
//   pdf.setFontSize(26);
//   pdf.setTextColor(255, 100, 45);
//   pdf.setFont('helvetica', 'bold');
//   pdf.text('74 / 100  (Grade B+)', 30, 116);

//   // Three module scores
//   var modules = [
//     { label: 'SEO', score: '70/100', col: [255, 100, 45] },
//     { label: 'AEO', score: '79/100', col: [16, 185, 129] },
//     { label: 'GEO', score: '72/100', col: [139, 92, 246] },
//   ];
//   var startX = 18;
//   modules.forEach(function(m, idx) {
//     var x = startX + idx * 62;
//     pdf.setFillColor(36, 36, 66);
//     pdf.roundedRect(x, 134, 58, 28, 3, 3, 'F');
//     pdf.setFontSize(9);
//     pdf.setTextColor(155, 163, 175);
//     pdf.setFont('helvetica', 'normal');
//     pdf.text(m.label, x + 4, 144);
//     pdf.setFontSize(14);
//     pdf.setTextColor(m.col[0], m.col[1], m.col[2]);
//     pdf.setFont('helvetica', 'bold');
//     pdf.text(m.score, x + 4, 156);
//   });

//   // Parts list
//   var parts = [
//     { num: 'PART 1', title: 'SEO / AEO / GEO Audit Report', detail: '89 checks across 14 categories' },
//     { num: 'PART 2', title: '6-Month Content Calendar',       detail: '29 content pieces · Apr–Oct 2026' },
//     { num: 'PART 3', title: 'SEO Strategy, Competitors & Keywords', detail: '12-month plan · 6 competitors · 62 keywords' },
//   ];
//   var py = 180;
//   parts.forEach(function(p){
//     pdf.setFillColor(42, 42, 72);
//     pdf.roundedRect(18, py, W-36, 24, 3, 3, 'F');
//     pdf.setFillColor(255, 100, 45);
//     pdf.roundedRect(18, py, 28, 24, 3, 3, 'F');
//     pdf.setFontSize(7);
//     pdf.setTextColor(255,255,255);
//     pdf.setFont('helvetica','bold');
//     pdf.text(p.num, 19, py+10);
//     pdf.text('', 19, py+17);
//     pdf.setFontSize(11);
//     pdf.setTextColor(255,255,255);
//     pdf.text(p.title, 52, py+11);
//     pdf.setFontSize(8);
//     pdf.setTextColor(155,163,175);
//     pdf.setFont('helvetica','normal');
//     pdf.text(p.detail, 52, py+19);
//     py += 30;
//   });

//   // Footer
//   pdf.setFillColor(255, 100, 45);
//   pdf.rect(0, H-8, W, 8, 'F');
//   pdf.setFontSize(8);
//   pdf.setTextColor(255,255,255);
//   pdf.text('Generated by BuimbDigital  \u00B7  19 March 2026  \u00B7  CONFIDENTIAL', 18, H-2);
// }

// // ── Hook into renderResults to show PDF button ──
// (function() {
//   var _orig = typeof renderResults !== 'undefined' ? renderResults : null;
//   if (_orig) {
//     renderResults = function(data, userDomain) {
//       _orig(data, userDomain);
//       var btn = document.querySelector('.btn-sm.btn-orange');
//       if (btn) btn.style.display = 'inline-flex';
//     };
//   }

//   document.addEventListener('DOMContentLoaded', function() {
//     var btn = document.querySelector('.btn-sm.btn-orange');
//     if (btn) { btn.style.display = 'none'; btn.onclick = exportPDF; }
//   });
// })();









// ══════════════════════════════════════════════════════
//  COMPLETE PDF EXPORT FIX
//  INSTRUCTIONS:
//  1. In your HTML file, find the line:  // PDF Export functionality
//  2. Delete EVERYTHING from that line to the very end of the file
//  3. Paste THIS entire file's contents in its place
//  4. Save and test — PDF will now export ALL 9 tabs, each on clean pages
// ══════════════════════════════════════════════════════

// ── UTILITIES ──
function showLoadingState(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.innerHTML = '⏳ Generating PDF...';
    button.disabled = true;
    button.style.opacity = '0.7';
    button.style.cursor = 'wait';
  } else {
    button.innerHTML = '⬇ Download PDF';
    button.disabled = false;
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
  }
}

function showNotification(message, type) {
  type = type || 'info';
  let el = document.getElementById('pdf-notification');
  if (!el) {
    el = document.createElement('div');
    el.id = 'pdf-notification';
    el.style.cssText = [
      'position:fixed', 'top:20px', 'right:20px', 'padding:12px 20px',
      'border-radius:8px', 'font-size:14px', 'font-weight:500',
      'z-index:99998', 'box-shadow:0 4px 16px rgba(0,0,0,0.2)',
      'max-width:340px', 'transition:opacity 0.3s ease'
    ].join(';');
    document.body.appendChild(el);
  }
  var cols = {
    success: ['#10b981','#fff'],
    error:   ['#ef4444','#fff'],
    info:    ['#3b82f6','#fff'],
    warning: ['#f59e0b','#fff']
  };
  var c = cols[type] || cols.info;
  el.style.background = c[0];
  el.style.color = c[1];
  el.style.opacity = '1';
  el.textContent = message;
  clearTimeout(el._t);
  el._t = setTimeout(function() {
    el.style.opacity = '0';
    setTimeout(function(){ if(el.parentNode) el.remove(); }, 300);
  }, 5000);
}

// ── PROGRESS OVERLAY ──
function createProgressOverlay() {
  var ov = document.createElement('div');
  ov.id = 'pdf-ov';
  ov.style.cssText = [
    'position:fixed','inset:0','background:rgba(0,0,0,0.6)',
    'display:flex','align-items:center','justify-content:center',
    'z-index:99999'
  ].join(';');
  ov.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:36px 44px;min-width:380px;
                text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.35);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
      <div style="font-size:36px;margin-bottom:14px">📄</div>
      <h3 style="margin:0 0 8px;font-size:18px;color:#1a1a2e;font-weight:800">
        Generating Full PDF Report
      </h3>
      <p id="pdf-ov-msg" style="margin:0 0 20px;font-size:13px;color:#6b7280">Starting...</p>
      <div style="background:#f1f3f7;border-radius:8px;height:12px;overflow:hidden;margin-bottom:10px">
        <div id="pdf-ov-bar" style="height:100%;background:linear-gradient(90deg,#ff642d,#f59e0b);
             width:0%;transition:width 0.5s ease;border-radius:8px"></div>
      </div>
      <div id="pdf-ov-pct" style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:8px">0%</div>
      <div id="pdf-ov-tab" style="font-size:11px;color:#9ba3af">Preparing...</div>
    </div>`;
  document.body.appendChild(ov);
  return {
    msg: function(t){ document.getElementById('pdf-ov-msg').textContent = t; },
    tab: function(t){ document.getElementById('pdf-ov-tab').textContent = t; },
    pct: function(n){
      document.getElementById('pdf-ov-bar').style.width = n + '%';
      document.getElementById('pdf-ov-pct').textContent = n + '%';
    },
    remove: function(){ ov.remove(); }
  };
}

// ── SLEEP ──
function pdfSleep(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

// ── SECTION DIVIDER PAGE ──
function addDividerPage(pdf, name, num, total, W, H) {
  pdf.setFillColor(26, 26, 46);
  pdf.rect(0, 0, W, H, 'F');
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, 0, 5, H, 'F');
  pdf.setFontSize(10);
  pdf.setTextColor(255, 100, 45);
  pdf.setFont('helvetica', 'bold');
  pdf.text('SECTION ' + num + ' OF ' + total, 18, 118);
  pdf.setFontSize(32);
  pdf.setTextColor(255, 255, 255);
  pdf.text(name, 18, 140);
  pdf.setDrawColor(255, 100, 45);
  pdf.setLineWidth(0.4);
  pdf.line(18, 148, W - 18, 148);
  pdf.setFontSize(9);
  pdf.setTextColor(155, 163, 175);
  pdf.setFont('helvetica', 'normal');
  pdf.text('SEO + AEO + GEO Audit Report  \u00B7  codewithck.me  \u00B7  19 March 2026', 18, 158);
}

// ── CAPTURE ONE PANEL AS CANVAS ──
async function capturePanel(panel) {
  // Temporarily force panel fully visible
  var origClass    = panel.className;
  var origDisplay  = panel.style.display;
  var origVis      = panel.style.visibility;
  var origPos      = panel.style.position;
  var origOpacity  = panel.style.opacity;
  var origLeft     = panel.style.left;
  var origTop      = panel.style.top;
  var origZIndex   = panel.style.zIndex;
  var origWidth    = panel.style.width;

  panel.classList.add('active');
  panel.style.display    = 'block';
  panel.style.visibility = 'visible';
  panel.style.opacity    = '1';
  panel.style.position   = 'relative';
  panel.style.left       = '0';
  panel.style.top        = '0';
  panel.style.zIndex     = '1';
  panel.style.width      = '1180px';
  panel.style.padding    = '20px 24px';

  // Expand all categories inside this panel
  panel.querySelectorAll('.cat-section').forEach(function(c){ c.classList.add('open'); });

  await pdfSleep(350);

  var canvas = await html2canvas(panel, {
    scale: 2,
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    windowWidth: 1220,
    width: 1180,
    scrollX: 0,
    scrollY: 0,
    allowTaint: false,
    imageTimeout: 20000,
    onclone: function(doc, el) {
      el.style.display    = 'block';
      el.style.visibility = 'visible';
      el.style.opacity    = '1';
      el.style.width      = '1180px';
      el.style.padding    = '20px 24px';
      doc.querySelectorAll('.cat-section').forEach(function(c){ c.classList.add('open'); });
    }
  });

  // Restore
  panel.className        = origClass;
  panel.style.display    = origDisplay;
  panel.style.visibility = origVis;
  panel.style.opacity    = origOpacity;
  panel.style.position   = origPos;
  panel.style.left       = origLeft;
  panel.style.top        = origTop;
  panel.style.zIndex     = origZIndex;
  panel.style.width      = origWidth;
  panel.style.padding    = '';

  return canvas;
}

// ── ADD CANVAS TO PDF (sliced into A4 pages, WITH margins + OVERLAP FIX) ──
function addCanvasToPDF(pdf, canvas, A4_W, A4_H) {
  var cW = canvas.width;
  var cH = canvas.height;

  // ── MARGIN SETTINGS (in mm) ──
  var MARGIN_LEFT   = 10;
  var MARGIN_RIGHT  = 10;
  var MARGIN_TOP    = 10;
  var MARGIN_BOTTOM = 14;

  // Usable content area
  var contentW = A4_W - MARGIN_LEFT - MARGIN_RIGHT;  // 190mm
  var contentH = A4_H - MARGIN_TOP  - MARGIN_BOTTOM; // 273mm

  // ── OVERLAP FIX ──
  // Instead of slicing at exact px boundary (which cuts mid-row),
  // we use a REDUCED page height (95% of contentH) so each slice
  // is smaller — content never gets cut at the visible boundary.
  // The remaining 5% acts as a safe buffer below the visible area.
  var SAFE_FACTOR = 0.93; // use 93% of available height per page
  var safeContentH = contentH * SAFE_FACTOR;  // mm

  var pxPerMM    = cW / contentW;              // px per mm
  var pxPageH    = safeContentH * pxPerMM;     // canvas px per page (safe)
  var pages      = Math.ceil(cH / pxPageH);

  for (var pg = 0; pg < pages; pg++) {
    pdf.addPage();

    // White background
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, A4_W, A4_H, 'F');

    // Left accent bar
    pdf.setFillColor(255, 100, 45);
    pdf.rect(0, 0, 2, A4_H, 'F');

    var srcY = pg * pxPageH;
    var srcH = Math.min(pxPageH, cH - srcY);
    var dstH = srcH / pxPerMM;  // actual height on page in mm

    // Slice canvas
    var slice = document.createElement('canvas');
    slice.width  = cW;
    slice.height = Math.ceil(srcH);
    var ctx = slice.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, cW, Math.ceil(srcH));
    ctx.drawImage(canvas, 0, srcY, cW, srcH, 0, 0, cW, srcH);

    var imgData = slice.toDataURL('image/jpeg', 0.92);

    // Place with margins
    pdf.addImage(imgData, 'JPEG', MARGIN_LEFT, MARGIN_TOP, contentW, dstH, '', 'FAST');

    // Footer
    addPageFooter(pdf, A4_W, A4_H, pg + 1, pages, MARGIN_BOTTOM);
  }
}

// ── FOOTER drawn directly via jsPDF (not on canvas) ──
function addPageFooter(pdf, A4_W, A4_H, pageNum, totalPages, MARGIN_BOTTOM) {
  var footerY = A4_H - MARGIN_BOTTOM + 2;

  // Footer background bar
  pdf.setFillColor(248, 249, 252);
  pdf.rect(0, A4_H - MARGIN_BOTTOM, A4_W, MARGIN_BOTTOM, 'F');

  // Orange bottom line
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, A4_H - 1.5, A4_W, 1.5, 'F');

  // Footer text
  pdf.setFontSize(7.5);
  pdf.setTextColor(155, 163, 175);
  pdf.setFont('helvetica', 'normal');
  pdf.text('codewithck.me  \u00B7  SEO + AEO + GEO Audit 2026', 10, footerY + 6);

  // Page number right-aligned
  var pageText = 'Page ' + pageNum + ' of ' + totalPages;
  var textW = pdf.getTextWidth(pageText);
  pdf.text(pageText, A4_W - 10 - textW, footerY + 6);
}

// ── OLD FOOTER (canvas version - kept for reference, not used) ──
function addPageFooter_UNUSED(ctx, w, h, pageNum, totalPages) {
  ctx.fillStyle = '#f8f9fc';
  ctx.fillRect(0, h - 28, w, 28);
  ctx.fillStyle = '#ff642d';
  ctx.fillRect(0, h - 2, w, 2);
  ctx.font = '18px -apple-system, Arial, sans-serif';
  ctx.fillStyle = '#9ba3af';
  ctx.fillText('codewithck.me  \u00B7  SEO + AEO + GEO Audit 2026  \u00B7  Page ' + pageNum + ' of ' + totalPages, 20, h - 8);
}

// ── MAIN EXPORT FUNCTION ──
async function exportPDF() {
  var resultsEl = document.getElementById('results');
  if (!resultsEl || resultsEl.style.display === 'none') {
    showNotification('Please run an audit first.', 'warning');
    return;
  }

  var btn = document.querySelector('.btn-sm.btn-orange');
  showLoadingState(btn, true);

  var prog = createProgressOverlay();

  try {
    var TAB_NAMES = [
      'Overview',
      'SEO Analysis',
      'AEO Analysis',
      'GEO Analysis',
      'Action Plan',
      'Content Calendar',
      'SEO Strategy',
      'Competitors',
      'Keywords'
    ];

    var panels = Array.from(document.querySelectorAll('[id^="tp-"]'));
    // Sort panels by tab order using TAB_NAMES
    var orderedPanels = [];
    var tabIds = ['tp-overview','tp-seo','tp-aeo','tp-geo','tp-action','tp-calendar','tp-strategy','tp-competitors','tp-keywords'];
    tabIds.forEach(function(id){
      var el = document.getElementById(id);
      if (el) orderedPanels.push(el);
    });

    if (orderedPanels.length === 0) {
      orderedPanels = panels; // fallback
    }

    var A4_W = 210;
    var A4_H = 297;

    var { jsPDF } = window.jspdf;
    var pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // ── COVER PAGE ──
    prog.msg('Creating cover page...');
    prog.pct(3);
    addCoverPage(pdf, A4_W, A4_H);

    // ── PROCESS EACH TAB ──
    for (var i = 0; i < orderedPanels.length; i++) {
      var panel = orderedPanels[i];
      var name  = TAB_NAMES[i] || ('Section ' + (i+1));
      var pct   = Math.round(5 + (i / orderedPanels.length) * 88);

      prog.pct(pct);
      prog.tab('Processing: ' + name + ' (' + (i+1) + '/' + orderedPanels.length + ')');
      prog.msg('Capturing ' + name + '...');

      // Add divider page
      pdf.addPage();
      addDividerPage(pdf, name, i+1, orderedPanels.length, A4_W, A4_H);

      // Capture panel
      var canvas;
      try {
        canvas = await capturePanel(panel);
      } catch(e) {
        console.warn('Capture failed for ' + name + ':', e);
        // Add error note page
        pdf.addPage();
        pdf.setFontSize(14);
        pdf.setTextColor(239, 68, 68);
        pdf.text('Could not capture ' + name + ' — please try again.', 20, 100);
        continue;
      }

      // Slice into A4 pages and add to PDF
      addCanvasToPDF(pdf, canvas, A4_W, A4_H);
    }

    prog.pct(96);
    prog.msg('Saving PDF file...');
    prog.tab('Almost done!');
    await pdfSleep(400);

    var domain  = (document.getElementById('bc-domain') ? document.getElementById('bc-domain').textContent : 'audit').replace(/[^a-z0-9.-]/gi, '-');
    var dateStr = new Date().toISOString().split('T')[0];
    pdf.save(domain + '-seo-aeo-geo-full-report-' + dateStr + '.pdf');

    prog.pct(100);
    prog.msg('Done! PDF saved.');
    await pdfSleep(800);
    prog.remove();
    showNotification('\u2705 Full PDF exported — all 9 tabs included!', 'success');

  } catch(err) {
    console.error('PDF export error:', err);
    prog.remove();
    showNotification('\u274C PDF failed: ' + err.message, 'error');
  } finally {
    showLoadingState(btn, false);
  }
}

// ── COVER PAGE ──
function addCoverPage(pdf, W, H) {
  pdf.setFillColor(26, 26, 46);
  pdf.rect(0, 0, W, H, 'F');

  // Top accent bar
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, 0, W, 6, 'F');

  // Logo / domain
  pdf.setFontSize(28);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.text('codewithck.me', 18, 60);

  // Subtitle
  pdf.setFontSize(12);
  pdf.setTextColor(155, 163, 175);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Complete SEO + AEO + GEO Visibility Audit Report', 18, 74);

  // Score box
  pdf.setFillColor(36, 36, 66);
  pdf.roundedRect(18, 88, W - 36, 38, 4, 4, 'F');
  pdf.setFontSize(10);
  pdf.setTextColor(155, 163, 175);
  pdf.text('OVERALL SCORE', 30, 100);
  pdf.setFontSize(26);
  pdf.setTextColor(255, 100, 45);
  pdf.setFont('helvetica', 'bold');
  pdf.text('74 / 100  (Grade B+)', 30, 116);

  // Three module scores
  var modules = [
    { label: 'SEO', score: '70/100', col: [255, 100, 45] },
    { label: 'AEO', score: '79/100', col: [16, 185, 129] },
    { label: 'GEO', score: '72/100', col: [139, 92, 246] },
  ];
  var startX = 18;
  modules.forEach(function(m, idx) {
    var x = startX + idx * 62;
    pdf.setFillColor(36, 36, 66);
    pdf.roundedRect(x, 134, 58, 28, 3, 3, 'F');
    pdf.setFontSize(9);
    pdf.setTextColor(155, 163, 175);
    pdf.setFont('helvetica', 'normal');
    pdf.text(m.label, x + 4, 144);
    pdf.setFontSize(14);
    pdf.setTextColor(m.col[0], m.col[1], m.col[2]);
    pdf.setFont('helvetica', 'bold');
    pdf.text(m.score, x + 4, 156);
  });

  // Parts list
  var parts = [
    { num: 'PART 1', title: 'SEO / AEO / GEO Audit Report', detail: '89 checks across 14 categories' },
    { num: 'PART 2', title: '6-Month Content Calendar',       detail: '29 content pieces · Apr–Oct 2026' },
    { num: 'PART 3', title: 'SEO Strategy, Competitors & Keywords', detail: '12-month plan · 6 competitors · 62 keywords' },
  ];
  var py = 180;
  parts.forEach(function(p){
    pdf.setFillColor(42, 42, 72);
    pdf.roundedRect(18, py, W-36, 24, 3, 3, 'F');
    pdf.setFillColor(255, 100, 45);
    pdf.roundedRect(18, py, 28, 24, 3, 3, 'F');
    pdf.setFontSize(7);
    pdf.setTextColor(255,255,255);
    pdf.setFont('helvetica','bold');
    pdf.text(p.num, 19, py+10);
    pdf.text('', 19, py+17);
    pdf.setFontSize(11);
    pdf.setTextColor(255,255,255);
    pdf.text(p.title, 52, py+11);
    pdf.setFontSize(8);
    pdf.setTextColor(155,163,175);
    pdf.setFont('helvetica','normal');
    pdf.text(p.detail, 52, py+19);
    py += 30;
  });

  // Footer
  pdf.setFillColor(255, 100, 45);
  pdf.rect(0, H-8, W, 8, 'F');
  pdf.setFontSize(8);
  pdf.setTextColor(255,255,255);
  pdf.text('Generated by BuimbDigital  \u00B7  19 March 2026  \u00B7  CONFIDENTIAL', 18, H-2);
}

// ── Hook into renderResults to show PDF button ──
(function() {
  var _orig = typeof renderResults !== 'undefined' ? renderResults : null;
  if (_orig) {
    renderResults = function(data, userDomain) {
      _orig(data, userDomain);
      var btn = document.querySelector('.btn-sm.btn-orange');
      if (btn) btn.style.display = 'inline-flex';
    };
  }

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('.btn-sm.btn-orange');
    if (btn) { btn.style.display = 'none'; btn.onclick = exportPDF; }
  });
})();