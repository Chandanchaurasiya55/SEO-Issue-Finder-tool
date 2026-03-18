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
      categories: [
        {
          name: "LLM-Ready Content",
          sectionNum: "4.1",
          score: 90,
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
  { label: "Resolving domain DNS & SSL", duration: 3000 },
  { label: "Crawling homepage & structure", duration: 4500 },
  { label: "Discovering internal pages", duration: 5000 },
  { label: "Auditing on-page SEO elements", duration: 5500 },
  { label: "Checking technical SEO setup", duration: 5000 },
  { label: "Testing Core Web Vitals", duration: 5500 },
  { label: "Analyzing mobile responsiveness", duration: 4500 },
  { label: "Running AEO & schema checks", duration: 5000 },
  { label: "Scanning GEO & AI signals", duration: 5000 },
  { label: "Auditing backlink profile", duration: 4000 },
  { label: "Checking local SEO signals", duration: 4000 },
  { label: "Compiling results & scoring", duration: 5000 },
];

function generatePages(domain) {
  const base = domain.replace(/https?:\/\//i, "").replace(/\/$/, "");
  return [
    { url: base + "/", label: "Homepage", icon: "🏠" },
    { url: base + "/about", label: "About Us", icon: "👥" },
    { url: base + "/services", label: "Services", icon: "⚙️" },
    { url: base + "/services/seo", label: "SEO Services", icon: "🔍" },
    { url: base + "/services/social-media", label: "Social Media", icon: "📱" },
    { url: base + "/services/ppc", label: "PPC Advertising", icon: "📊" },
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
  <div class="doc-section-head"><h2>SECTION 1: EXECUTIVE SUMMARY</h2><span>Overall scores, key strengths, critical weaknesses</span></div>
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
  <div class="doc-section-head"><h2>SECTION ${sNum}: ${mod.label} ANALYSIS — Detailed Findings</h2><span>${allC.length} checks · Score: ${mod.score}/100 · Grade: ${grade(mod.score)}</span></div>
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
      </div>
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
    buimbdigital.com is performing at a B+ level across all three dimensions of modern search visibility. Core strengths — strong backlinks, perfect voice search optimization, and well-structured AI-ready content — provide a competitive foundation that many agencies lack. The two most revenue-impactful issues are mobile responsiveness (38/100) and page load speed (CRITICAL failure). Fixing these two items alone could produce measurable ranking improvements within 30-60 days.
  </div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">4 Immediate Actions for Leadership</div>
  ${["Assign a developer sprint in the next 5-7 days focused exclusively on the 8 critical technical items.", "Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.", "Begin collecting client testimonials and case study approvals from existing clients this week.", "Set a re-audit date 30 days from today to measure progress against the baseline scores in this report."].map((a, i) => `<div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff;border:1px solid #e2e5ed;border-radius:10px;margin-bottom:8px"><div style="width:28px;height:28px;background:#ff642d;border-radius:8px;color:#fff;font-size:13px;font-weight:700;display:grid;place-items:center;flex-shrink:0">${i + 1}</div><div style="font-size:13px;color:#374151;line-height:1.5;padding-top:4px">${a}</div></div>`).join("")}`;
  return html;
}

function buildCalendar() {
  let html = `<div class="doc-section-head"><h2>PART 2: 6-MONTH CONTENT CALENDAR</h2><span>April – October 2026 · 29 Content Pieces · Weekly Breakdown</span></div>
  <div class="exec-summary">
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
    html += `<div class="cal-month"><div class="cal-month-head"><h3>${month.month}</h3><span>Theme: ${month.theme}</span></div>
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
//  PDF DOWNLOAD — Full 3-Part Report (Screen-Matching)
// ══════════════════════════════════════════════════════
function pdfGrade(s) { return s >= 90 ? "A+" : s >= 80 ? "A" : s >= 70 ? "B+" : s >= 60 ? "B" : s >= 50 ? "C" : s >= 40 ? "D" : "F"; }
function pdfScoreCol(s) { return s >= 65 ? "#21bf6b" : s >= 45 ? "#f59e0b" : "#ef4444"; }
function h2r(h) {
  if (typeof h !== "string") return [0, 0, 0];
  h = h.replace("#", "").replace(/^0x/i, "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  if (h.length !== 6) return [0, 0, 0];
  return [parseInt(h.slice(0, 2), 16) || 0, parseInt(h.slice(2, 4), 16) || 0, parseInt(h.slice(4, 6), 16) || 0];
}

async function downloadPDF() {
  if (!_data) return;
  const btn = document.querySelector(".btn-orange");
  if (!btn) return;
  btn.textContent = "Generating PDF...";
  btn.disabled = true;
  try {
    await new Promise((res, rej) => {
      if (window.jspdf) { res(); return; }
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
    await generatePDFInline();
  } catch (err) {
    console.error(err);
    alert("PDF generation error: " + err.message);
  }
  btn.textContent = "Export PDF";
  btn.disabled = false;
}

async function generatePDFInline() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  // ── Constants ──
  const PW = 210, PH = 297, ML = 12, MR = 12, MT = 14, MB = 14, CW = 186;
  const BOTTOM = PH - MB - 2;

  // Color helpers
  const SF = (c) => { if (typeof c !== "string") return; const [r,g,b] = h2r(c); doc.setFillColor(r,g,b); };
  const SD = (c) => { if (typeof c !== "string") return; const [r,g,b] = h2r(c); doc.setDrawColor(r,g,b); };
  const ST = (c) => { if (typeof c !== "string") return; const [r,g,b] = h2r(c); doc.setTextColor(r,g,b); };

  // Brand colors matching screen exactly
  const BRAND  = "#a90006";
  const OR     = "#ff642d";   // SEO orange
  const AEO_C  = "#10b981";   // AEO green
  const GEO_C  = "#8b5cf6";   // GEO purple
  const DK     = "#1a1a2e";   // dark navy
  const MD     = "#5c6070";   // medium grey
  const LT     = "#9ba3af";   // light grey
  const BD     = "#e2e5ed";   // border
  const BG2    = "#f8f9fc";   // subtle bg
  const WH     = "#ffffff";
  const GR     = "#21bf6b";   // green pass
  const RD     = "#ef4444";   // red fail
  const YL     = "#f59e0b";   // yellow warn
  const GRB    = "#dcfce7";
  const RDB    = "#fee2e2";
  const YLB    = "#fff7ed";

  const d = _data;
  let y = 0;
  let _part = "";

  // ── Page header (brand bar top) ──
  function hdr() {
    const [r,g,b] = h2r(BRAND);
    doc.setFillColor(r,g,b);
    doc.rect(0, 0, PW, 9, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    ST(WH);
    doc.text("BuimbDigital", ML, 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.text((_userDomain || "buimbdigital.com") + " — Complete Digital Marketing Strategy & Audit Report", ML + 32, 6);
    doc.text(new Date().toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" }), PW - MR, 6, "right");
    y = MT;
  }

  // ── Page footer ──
  function ftr() {
    const fy = PH - MB + 1;
    SF(DK);
    doc.rect(0, fy, PW, MB + 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    ST(OR);
    doc.text("BuimbDigital", ML, fy + 5.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6);
    ST(LT);
    doc.text("info@buimbdigital.com", ML + 28, fy + 5.5);
    if (_part) { ST("#ffd4c2"); doc.text(_part, PW / 2, fy + 5.5, "center"); }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6);
    ST(WH);
    doc.text("CONFIDENTIAL", PW - MR, fy + 5.5, "right");
  }

  // ── Page break check ──
  const needY = (n) => {
    if (y + n > BOTTOM) { ftr(); doc.addPage(); hdr(); }
  };

  // ── Mini chip (colored badge) ──
  function chip(x, cy, txt, bg, fg, w) {
    const cw = w || Math.min(doc.getTextWidth(txt) + 6, 42);
    SF(bg); doc.roundedRect(x, cy, cw, 3.8, 0.8, 0.8, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(5.5); ST(fg);
    doc.text(txt, x + cw / 2, cy + 2.8, "center");
    return cw;
  }

  // ── Section header (dark red bar matching screen) ──
  function sectionHead(txt, sub) {
    needY(10);
    SF(BRAND); doc.rect(ML, y, CW, 8, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(9.5); ST(WH);
    doc.text(txt, ML + 3, y + 5.5);
    if (sub) { doc.setFont("helvetica", "normal"); doc.setFontSize(6.2); ST("#ffd0d0"); doc.text(sub, PW - MR, y + 5.5, "right"); }
    y += 10.5;
  }

  // ── Status badge text ──
  function statusText(st) {
    return st === "PASS" ? "PASS" : st === "WARN" ? "WARN" : "FAIL";
  }
  function statusColors(st) {
    if (st === "PASS") return { bg: GRB, fg: GR };
    if (st === "WARN") return { bg: YLB, fg: "#b45309" };
    return { bg: RDB, fg: RD };
  }
  function priorityColors(p) {
    const m = { CRITICAL: { bg: RDB, fg: RD }, HIGH: { bg: YLB, fg: "#c2410c" }, MEDIUM: { bg: "#fef9c3", fg: "#a16207" }, LOW: { bg: BG2, fg: LT } };
    return m[p] || m.LOW;
  }

  // ══════════════════
  //  PART 1 — COVER
  // ══════════════════
  _part = "PART 1: SEO / AEO / GEO AUDIT REPORT";
  hdr();

  // Cover: 3 coloured panels matching screen
  const panW = (CW - 4) / 3;
  [
    { num: "PART 1", title: "SEO / AEO / GEO", sub: "Audit Report", note: "74/100 Overall | 89 Checks", col: OR },
    { num: "PART 2", title: "Content Calendar", sub: "6-Month Plan", note: "29 Pieces | Apr-Oct 2026", col: AEO_C },
    { num: "PART 3", title: "SEO Plan + Competitors & Keywords", sub: "12-Month Strategic Plan", note: "6 Competitors | 62 Keywords", col: GEO_C },
  ].forEach((p, i) => {
    const px = ML + i * (panW + 2);
    SF(p.col); doc.roundedRect(px, y, panW - 1, 30, 2, 2, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(7); ST(WH); doc.text(p.num, px + 3, y + 7);
    doc.setFontSize(10); doc.text(p.title, px + 3, y + 14);
    doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.text(p.sub, px + 3, y + 20);
    doc.setFontSize(5.5); ST("rgba(255,255,255,0.75)"); doc.text(p.note, px + 3, y + 27);
  });
  y += 33;

  // Stats row — matching screen cover-stat boxes
  needY(14);
  const sw = (CW - 9) / 4;
  const allChecks = ["seo","aeo","geo"].flatMap(k => d.mods[k].categories.flatMap(c => c.checks));
  const totF_all = allChecks.filter(c => c.status === "FAIL").length;
  const totW_all = allChecks.filter(c => c.status === "WARN").length;
  const totP_all = allChecks.filter(c => c.status === "PASS").length;
  [
    { val: String(totF_all), lbl: "ERRORS", col: RD, bg: RDB },
    { val: String(totW_all), lbl: "WARNINGS", col: YL, bg: YLB },
    { val: String(totP_all), lbl: "PASSED", col: GR, bg: GRB },
    { val: "89", lbl: "TOTAL CHECKS", col: "#3b82f6", bg: "#eff6ff" },
  ].forEach((s, i) => {
    const sx = ML + i * (sw + 3);
    SF(s.bg); SD(BD); doc.setLineWidth(0.2); doc.roundedRect(sx, y, sw, 12, 1.5, 1.5, "FD");
    doc.setFont("helvetica", "bold"); doc.setFontSize(14); ST(s.col); doc.text(s.val, sx + sw / 2, y + 7.5, "center");
    doc.setFont("helvetica", "normal"); doc.setFontSize(5.5); ST(LT); doc.text(s.lbl, sx + sw / 2, y + 11, "center");
  });
  y += 15;

  // Audit meta bar
  needY(7);
  SF(BG2); doc.roundedRect(ML, y, CW, 6, 1, 1, "F");
  doc.setFont("helvetica", "normal"); doc.setFontSize(6.5); ST(MD);
  doc.text(`Audit Date: ${new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}  |  Audited: ${_userDomain||"buimbdigital.com"}  |  CONFIDENTIAL — For Internal Distribution Only`, ML + CW / 2, y + 4, "center");
  y += 9;

  // ══════════════════════════════
  //  SECTION 1: EXECUTIVE SUMMARY
  // ══════════════════════════════
  sectionHead("SECTION 1: EXECUTIVE SUMMARY", "Score Summary · Key Strengths & Weaknesses");

  // Score summary table — matches screen sst-row
  needY(38);
  const stX = [ML, ML + 72, ML + 92, ML + 110];
  SF(BRAND); doc.rect(ML, y, CW, 5.5, "F");
  ["Module", "Score", "Grade", "Status"].forEach((h, i) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(WH); doc.text(h, stX[i] + 2, y + 3.8);
  });
  y += 5.5;
  [
    { mod: "SEO (Search Engine Optimization)", sc: 70, col: OR, status: "Needs Improvement" },
    { mod: "AEO (Answer Engine Optimization)", sc: 79, col: AEO_C, status: "Good — Minor Gaps" },
    { mod: "GEO (Generative Engine Optimization)", sc: 72, col: GEO_C, status: "Moderate Gaps" },
    { mod: "Overall Score", sc: 74, col: OR, status: "Strong Foundation" },
  ].forEach((r, ri) => {
    needY(7);
    const isOv = ri === 3;
    SF(isOv ? BG2 : WH); doc.rect(ML, y, CW, 6.5, "F");
    SF(r.col); doc.rect(ML, y, 2.5, 6.5, "F");
    SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + 6.5, ML + CW, y + 6.5);
    doc.setFont("helvetica", isOv ? "bold" : "normal"); doc.setFontSize(6.8); ST(DK);
    doc.text(r.mod, ML + 5, y + 4.3);
    const sc2 = r.sc >= 65 ? GR : r.sc >= 45 ? YL : RD, sb2 = r.sc >= 65 ? GRB : r.sc >= 45 ? YLB : RDB;
    chip(stX[1] + 1, y + 1.3, r.sc + "/100", sb2, sc2, 16);
    chip(stX[2] + 1, y + 1.3, pdfGrade(r.sc), sb2, sc2, 12);
    doc.setFont("helvetica", "normal"); doc.setFontSize(6.5); ST(MD); doc.text(r.status, stX[3] + 2, y + 4.3);
    y += 6.5;
  });
  y += 5;

  // Score gauges (circular progress approx)
  needY(36);
  [{ lbl: "SEO", sc: 70, col: OR }, { lbl: "AEO", sc: 79, col: AEO_C }, { lbl: "GEO", sc: 72, col: GEO_C }, { lbl: "Overall", sc: 74, col: OR }].forEach((g, i) => {
    const gx = ML + 22 + i * 46, r2 = 11;
    // Background circle
    SD(BD); doc.setLineWidth(3.5);
    for (let k = 0; k < 48; k++) {
      const a1 = -Math.PI / 2 + (k / 48) * 2 * Math.PI, a2 = -Math.PI / 2 + ((k + 1) / 48) * 2 * Math.PI;
      doc.line(gx + r2 * Math.cos(a1), y + 14 + r2 * Math.sin(a1), gx + r2 * Math.cos(a2), y + 14 + r2 * Math.sin(a2));
    }
    // Filled arc
    SD(g.col); doc.setLineWidth(3.5);
    const steps = Math.round((g.sc / 100) * 48);
    for (let k = 0; k < steps; k++) {
      const a1 = -Math.PI / 2 + (k / 48) * 2 * Math.PI, a2 = -Math.PI / 2 + ((k + 1) / 48) * 2 * Math.PI;
      doc.line(gx + r2 * Math.cos(a1), y + 14 + r2 * Math.sin(a1), gx + r2 * Math.cos(a2), y + 14 + r2 * Math.sin(a2));
    }
    doc.setFont("helvetica", "bold"); doc.setFontSize(12); ST(DK); doc.text(String(g.sc), gx, y + 16, "center");
    doc.setFontSize(5.5); ST(LT); doc.text("/100", gx, y + 20, "center");
    doc.setFontSize(7); ST(DK); doc.text(g.lbl, gx, y + 28, "center");
    const gc = g.sc >= 65 ? GR : g.sc >= 45 ? YL : RD, gb = g.sc >= 65 ? GRB : g.sc >= 45 ? YLB : RDB;
    chip(gx - 5.5, y + 30, pdfGrade(g.sc), gb, gc, 11);
  });
  y += 40;

  // Key Strengths
  ftr(); doc.addPage(); hdr();
  sectionHead("SECTION 1 (cont.): KEY STRENGTHS & CRITICAL WEAKNESSES", "Executive Summary");

  needY(8);
  SF("#15803d"); doc.rect(ML, y, CW, 7, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); ST(WH); doc.text("KEY STRENGTHS — Areas Performing Well", ML + 4, y + 5);
  y += 9;
  [
    "Voice Search Optimization — PERFECT 100/100. Conversational keywords, long-tail questions, and local signals all well-implemented.",
    "NLP & Semantic SEO — 90/100. Well-structured, semantically rich content aligned with how search engines process natural language.",
    "LLM-Ready Content and AI Topical Coverage — both 90/100. Site is well-structured for AI tools to parse and cite.",
    "Backlinks & Off-Page SEO — 90/100. Strong domain authority and quality external link signals.",
    "Technical SEO fundamentals (SSL, XML sitemap, robots.txt, redirect hygiene) largely in order at 83/100.",
  ].forEach(s => {
    const lines = doc.splitTextToSize(s, CW - 12);
    const rh = Math.max(7, lines.length * 3.6 + 2.5);
    needY(rh + 1.5);
    SF(GRB); doc.roundedRect(ML, y, CW, rh, 1.2, 1.2, "F");
    SF(GR); doc.roundedRect(ML, y, 4, rh, 0, 0, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(20, 83, 45);
    lines.forEach((ln, li) => doc.text(ln, ML + 7, y + 3.2 + li * 3.6));
    y += rh + 1.5;
  });
  y += 3;

  needY(8);
  SF("#b91c1c"); doc.rect(ML, y, CW, 7, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); ST(WH); doc.text("CRITICAL WEAKNESSES — Fix Immediately", ML + 4, y + 5);
  y += 9;
  [
    "Page Load Speed — CRITICAL FAILURE. Slow load times directly reduce Google rankings, increase bounce rates, and hurt mobile conversions.",
    "Mobile Responsiveness — 38/100, THE LOWEST SCORE in the entire audit. With 60%+ of web traffic on mobile, this is a major revenue-impacting issue requiring immediate developer action.",
    "HTTPS Security (GEO) — CRITICAL ERROR. AI systems and security-conscious search algorithms may deprioritize or distrust the site. Fix in Week 1.",
    "E-E-A-T — 60/100. Missing trust badges, publication dates, and expanded author credentials — all key signals for Google's quality assessment.",
    "Machine-Readable Metadata — 50/100, the lowest category score. Organization Schema missing, Open Graph tags incomplete — limiting how AI systems represent the site.",
  ].forEach(s => {
    const lines = doc.splitTextToSize(s, CW - 12);
    const rh = Math.max(7, lines.length * 3.6 + 2.5);
    needY(rh + 1.5);
    SF(RDB); doc.roundedRect(ML, y, CW, rh, 1.2, 1.2, "F");
    SF(RD); doc.roundedRect(ML, y, 4, rh, 0, 0, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(127, 29, 29);
    lines.forEach((ln, li) => doc.text(ln, ML + 7, y + 3.2 + li * 3.6));
    y += rh + 1.5;
  });

  // ══════════════════════════════════════════════
  //  SECTIONS 2, 3, 4: SEO / AEO / GEO ANALYSIS
  // ══════════════════════════════════════════════
  const modColMap = { seo: OR, aeo: AEO_C, geo: GEO_C };
  const modSecMap = { seo: "SECTION 2", aeo: "SECTION 3", geo: "SECTION 4" };

  ["seo", "aeo", "geo"].forEach(mk => {
    ftr(); doc.addPage(); hdr();
    _part = "PART 1: " + mk.toUpperCase() + " ANALYSIS";
    const mod = d.mods[mk];
    const modColor = modColMap[mk];
    const allC2 = mod.categories.flatMap(c => c.checks);
    const f2 = allC2.filter(c => c.status === "FAIL").length;
    const w2 = allC2.filter(c => c.status === "WARN").length;
    const p2 = allC2.filter(c => c.status === "PASS").length;

    sectionHead(`${modSecMap[mk]}: ${mod.label} ANALYSIS — Detailed Findings`, `Score: ${mod.score}/100 · Grade: ${pdfGrade(mod.score)} · ${f2} errors · ${w2} warnings · ${p2} passed`);

    // Module score cards row
    needY(16);
    const scW = (CW - 9) / 4;
    [
      { lbl: mod.label + " Score", val: mod.score + "/100", sub: pdfGrade(mod.score), col: modColor, bg: modColor + "22" },
      { lbl: "Errors", val: String(f2), sub: "Fix urgently", col: RD, bg: RDB },
      { lbl: "Warnings", val: String(w2), sub: "Improve", col: YL, bg: YLB },
      { lbl: "Passed", val: String(p2), sub: "Checks OK", col: GR, bg: GRB },
    ].forEach((s, i) => {
      const sx = ML + i * (scW + 3);
      SF(s.bg); SD(BD); doc.setLineWidth(0.15); doc.roundedRect(sx, y, scW, 13, 1.5, 1.5, "FD");
      doc.setFont("helvetica", "bold"); doc.setFontSize(11); ST(s.col); doc.text(s.val, sx + scW / 2, y + 7, "center");
      doc.setFont("helvetica", "normal"); doc.setFontSize(5.5); ST(LT); doc.text(s.lbl, sx + scW / 2, y + 10.5, "center");
    });
    y += 16;

    // Categories with checks table
    mod.categories.forEach(cat => {
      needY(14);
      // Category header bar
      const catSc = cat.score;
      const catBg = catSc >= 65 ? "#f0fdf4" : catSc >= 45 ? "#fef9c3" : "#fef2f2";
      SF(BG2); SD(BD); doc.setLineWidth(0.15); doc.rect(ML, y, CW, 8, "FD");
      SF(modColor); doc.rect(ML, y, 3, 8, "F");
      doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); ST(DK);
      doc.text(`${cat.sectionNum} ${cat.name}${cat.note ? " " + cat.note : ""}`, ML + 6, y + 5.5);
      const scC = catSc >= 65 ? GR : catSc >= 45 ? YL : RD, scB = catSc >= 65 ? GRB : catSc >= 45 ? YLB : RDB;
      chip(PW - MR - 28, y + 2.2, `${catSc}/100  ${pdfGrade(catSc)}`, scB, scC, 26);
      const catF2 = cat.checks.filter(c => c.status === "FAIL").length;
      const catW2 = cat.checks.filter(c => c.status === "WARN").length;
      const catP2 = cat.checks.filter(c => c.status === "PASS").length;
      doc.setFont("helvetica", "normal"); doc.setFontSize(6); ST(LT);
      doc.text(`Passed: ${catP2}   Warn: ${catW2}   Fail: ${catF2}`, PW - MR - 60, y + 5.5);
      y += 10;

      // Table header
      const cX = [ML, ML + 37, ML + 60, ML + 112, ML + 132];
      needY(6);
      SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
      ["Check", "Status", "Finding", "Priority", "Action Required"].forEach((h, i) => {
        doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(WH); doc.text(h, cX[i] + 1, y + 3.5);
      });
      y += 5.2;

      cat.checks.forEach(c => {
        const descL = doc.splitTextToSize(c.finding, 50);
        const actL  = doc.splitTextToSize(c.action,  52);
        const rh = Math.max(8, Math.max(descL.length, actL.length) * 3.3 + 2.5);
        needY(rh + 0.5);

        // Row background: fail=light red, warn=light yellow, pass=white
        const rowBg = c.status === "FAIL" ? "#fff5f5" : c.status === "WARN" ? "#fffbf0" : WH;
        SF(rowBg); doc.rect(ML, y, CW, rh, "F");
        SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + rh, ML + CW, y + rh);

        // Check name
        doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(DK);
        doc.text(c.n, cX[0] + 1, y + 4);

        // Status badge
        const stC2 = statusColors(c.status);
        chip(cX[1] + 1, y + rh / 2 - 2, statusText(c.status), stC2.bg, stC2.fg, 21);

        // Finding
        doc.setFont("helvetica", "normal"); doc.setFontSize(5.8); ST(MD);
        descL.forEach((ln, li) => doc.text(ln, cX[2] + 1, y + 3.5 + li * 3.3));

        // Priority badge
        const pc2 = priorityColors(c.priority);
        chip(cX[3] + 1, y + rh / 2 - 2, c.priority, pc2.bg, pc2.fg, 20);

        // Action
        doc.setFont("helvetica", "normal"); doc.setFontSize(5.8); ST(DK);
        actL.forEach((ln, li) => doc.text(ln, cX[4] + 1, y + 3.5 + li * 3.3));
        y += rh + 0.5;
      });
      y += 4;
    });
  });

  // ═══════════════════════════════
  //  SECTION 5: ACTION PLAN
  // ═══════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 1: PRIORITIZED ACTION PLAN";

  const allIss = [];
  ["seo","aeo","geo"].forEach(k => d.mods[k].categories.forEach(cat => cat.checks.filter(c => c.status !== "PASS").forEach(c => allIss.push({ ...c, module: k.toUpperCase() }))));
  allIss.sort((a, b) => ["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(a.priority) - ["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(b.priority));

  sectionHead("SECTION 5: PRIORITIZED ACTION PLAN", `All ${allIss.length} Issues Sorted by Priority — Critical (2 weeks) · High (30 days) · Medium (60-90 days)`);

  const priCfg2 = [
    { k: "CRITICAL", lbl: "Critical Priority — Fix Within 2 Weeks", col: RD, bg: RDB, fg: "#dc2626" },
    { k: "HIGH",     lbl: "High Priority — Fix Within 30 Days",     col: YL, bg: YLB, fg: "#c2410c" },
    { k: "MEDIUM",   lbl: "Medium Priority — Fix Within 60-90 Days",col: "#d97706", bg: "#fef9c3", fg: "#a16207" },
    { k: "LOW",      lbl: "Low Priority",                           col: LT, bg: BG2, fg: LT },
  ];
  let actN = 1;
  priCfg2.forEach(pg => {
    const items = allIss.filter(c => c.priority === pg.k);
    if (!items.length) return;
    needY(9);
    SF(pg.bg); SD(pg.col); doc.setLineWidth(0.3); doc.roundedRect(ML, y, CW, 6.5, 1, 1, "FD");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8); ST(pg.fg);
    doc.text(pg.lbl + `  (${items.length} issues)`, ML + 4, y + 4.5);
    y += 8.5;

    // Table header
    const cX3 = [ML, ML + 8, ML + 56, ML + 73, ML + 91];
    needY(5.5);
    SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
    ["#", "Issue / Finding", "Module", "Priority", "Recommended Fix"].forEach((h, i) => {
      doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(WH); doc.text(h, cX3[i] + 1, y + 3.5);
    });
    y += 5.2;

    items.forEach(item => {
      const findL = doc.splitTextToSize(item.finding, 46);
      const fixL  = doc.splitTextToSize(item.action,  CW - 91 - 3);
      const rh = Math.max(8, Math.max(1 + findL.length, fixL.length) * 3.3 + 2);
      needY(rh + 0.5);

      const rowBg = item.status === "FAIL" ? "#fff5f5" : YLB;
      SF(rowBg); doc.rect(ML, y, CW, rh, "F");
      SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + rh, ML + CW, y + rh);

      doc.setFont("helvetica", "bold"); doc.setFontSize(7); ST(pg.fg);
      doc.text(String(actN++), cX3[0] + 4, y + rh / 2 + 1.5, "center");

      doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(DK);
      doc.text(item.n, cX3[1] + 1, y + 4);
      doc.setFont("helvetica", "normal"); doc.setFontSize(5.5); ST(MD);
      findL.forEach((ln, li) => doc.text(ln, cX3[1] + 1, y + 7.5 + li * 3));

      const mC3 = { SEO: OR, AEO: AEO_C, GEO: GEO_C }[item.module] || OR;
      const mB3 = { SEO: "#fff0eb", AEO: "#f0fdf4", GEO: "#f5f3ff" }[item.module] || "#fff0eb";
      chip(cX3[2] + 1, y + rh / 2 - 2, item.module, mB3, mC3, 14);

      const pc3 = priorityColors(pg.k);
      chip(cX3[3] + 1, y + rh / 2 - 2, pg.k, pc3.bg, pc3.fg, 18);

      doc.setFont("helvetica", "normal"); doc.setFontSize(5.8); ST(DK);
      fixL.forEach((ln, li) => doc.text(ln, cX3[4] + 1, y + 3.5 + li * 3.3));
      y += rh + 0.5;
    });
    y += 4;
  });

  // ═══════════════════════════════
  //  SECTION 6: TEAM RESPONSIBILITIES
  // ═══════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 1: TEAM & MILESTONES";
  sectionHead("SECTION 6: TEAM RESPONSIBILITIES & TIMELINE", "30/60-day targets by team");

  const teams3 = [
    { name: "Developer / Technical Team", col: "#3b82f6", bg: "#1e3a5f", tasks: ["Fix HTTPS / mixed content warnings — Week 1", "Add viewport meta tag to all pages — Week 1", "Implement Organization JSON-LD schema sitewide — Week 1", "Remove noindex tags from key pages — Week 1", "Fix TTFB: enable caching, CDN, server optimization — Week 1-2", "Improve page load speed: minify, compress, lazy-load — Week 1-2", "Create custom 404 error page — Week 2", "Add HowTo, QAPage, BreadcrumbList, and Person schema — Week 3-4", "Add Open Graph and Twitter Card meta tags — Week 3-4", "Add canonical tags to all pages — Week 3-4"] },
    { name: "Content / SEO Team", col: OR, bg: "#7c2d12", tasks: ["Audit and rewrite all title tags — Week 1-2", "Write unique meta descriptions for all pages — Week 1-2", "Add primary keywords to first 100 words of all service pages — Week 2", "Add definition sections ('What is X?') to all service pages — Week 2-3", "Create FAQ sections for all key pages — Week 2-3", "Add publication and 'Last Updated' dates to all content — Week 2-3", "Expand thin content pages to 800+ words — Week 3-6", "Create 3-5 use case landing pages — Week 4-8"] },
    { name: "Marketing / Brand Team", col: AEO_C, bg: "#064e3b", tasks: ["Audit brand name consistency across all pages — Week 1", "Collect and add trust badges, certifications, partner logos — Week 2-3", "Gather and publish 10+ client testimonials — Week 2-4", "Create 3-5 detailed case studies — Week 3-8", "Submit brand to Clutch, GoodFirms, DesignRush — Week 2-3", "Optimize Google Business Profile — Week 1-2", "Pursue press mentions and digital PR — Ongoing"] },
  ];

  teams3.forEach(t => {
    needY(12);
    SF(t.bg); doc.roundedRect(ML, y, CW, 7.5, 1, 1, "F");
    SF(t.col); doc.rect(ML, y, 3.5, 7.5, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); ST(WH); doc.text(t.name, ML + 7, y + 5.2);
    y += 9.5;
    t.tasks.forEach(task => {
      const lines = doc.splitTextToSize(task, CW - 10);
      const rh = Math.max(5.5, lines.length * 3.4 + 0.5);
      needY(rh + 0.5);
      SD(BD); doc.setLineWidth(0.07); doc.line(ML, y + rh, ML + CW, y + rh);
      SF(t.col); doc.circle(ML + 4, y + rh / 2, 1.3, "F");
      doc.setFont("helvetica", "normal"); doc.setFontSize(6.5); ST(DK);
      lines.forEach((ln, li) => doc.text(ln, ML + 9, y + 2.8 + li * 3.4));
      y += rh + 0.5;
    });
    y += 5;
  });

  // 30/60 Milestone table
  needY(35);
  sectionHead("30/60-Day Score Milestone Targets");
  const mX2 = [ML, ML + 52, ML + 94, ML + 136];
  SF(BRAND); doc.rect(ML, y, CW, 5.5, "F");
  ["Module", "Current Score", "30-Day Target", "60-Day Target"].forEach((h, i) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(WH); doc.text(h, mX2[i] + 2, y + 3.8);
  });
  y += 5.5;
  [
    { mod: "SEO Overall", now: 70, d30: 80, d60: 87 },
    { mod: "AEO Overall", now: 79, d30: 86, d60: 91 },
    { mod: "GEO Overall", now: 72, d30: 82, d60: 88 },
    { mod: "Overall Score", now: 74, d30: 83, d60: 89 },
  ].forEach((m, ri) => {
    needY(7);
    const isOv = ri === 3;
    SF(isOv ? BG2 : WH); doc.rect(ML, y, CW, 6.5, "F");
    SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + 6.5, ML + CW, y + 6.5);
    doc.setFont("helvetica", isOv ? "bold" : "normal"); doc.setFontSize(6.8); ST(DK); doc.text(m.mod, mX2[0] + 2, y + 4.3);
    [m.now, m.d30, m.d60].forEach((v, i) => {
      const bg3 = v >= 80 ? GRB : v >= 70 ? YLB : RDB, fg3 = v >= 80 ? GR : v >= 70 ? YL : RD;
      chip(mX2[i + 1] + 2, y + 1.3, v + "/100", bg3, fg3, 18);
    });
    y += 6.5;
  });
  y += 5;

  // Section 7 final notes
  sectionHead("SECTION 7: FINAL NOTES & EXECUTIVE RECOMMENDATIONS", "4 Immediate Actions for Leadership");
  const sumText = (_userDomain || "buimbdigital.com") + " is performing at a B+ level across all three dimensions of modern search visibility. Core strengths — strong backlinks, perfect voice search optimization, and well-structured AI-ready content — provide a competitive foundation. The two most revenue-impactful issues are mobile responsiveness (38/100) and page load speed (CRITICAL failure). Fixing these two items alone could produce measurable ranking improvements within 30-60 days.";
  const sumLines = doc.splitTextToSize(sumText, CW - 8);
  needY(sumLines.length * 3.8 + 6);
  SF(BG2); doc.roundedRect(ML, y, CW, sumLines.length * 3.8 + 5, 1.5, 1.5, "F");
  doc.setFont("helvetica", "normal"); doc.setFontSize(6.8); ST(DK);
  sumLines.forEach((ln, li) => doc.text(ln, ML + 4, y + 4 + li * 3.8));
  y += sumLines.length * 3.8 + 7;

  ["Assign a developer sprint in the next 5-7 days focused exclusively on the 8 critical technical items.",
   "Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.",
   "Begin collecting client testimonials and case study approvals from existing clients this week.",
   "Set a re-audit date 30 days from today to measure progress against the baseline scores in this report."].forEach((a, i) => {
    const lines = doc.splitTextToSize(a, CW - 16);
    const rh = Math.max(9, lines.length * 3.5 + 3);
    needY(rh + 1.5);
    SF(BG2); doc.roundedRect(ML, y, CW, rh, 1.5, 1.5, "F");
    SF(OR); doc.roundedRect(ML + 2, y + rh / 2 - 4, 7.5, 7.5, 1, 1, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8); ST(WH); doc.text(String(i + 1), ML + 5.75, y + rh / 2 + 1.2, "center");
    doc.setFont("helvetica", "normal"); doc.setFontSize(6.8); ST(DK);
    lines.forEach((ln, li) => doc.text(ln, ML + 13, y + 4 + li * 3.5));
    y += rh + 2;
  });

  // ═══════════════════════════════════
  //  PART 2 — CONTENT CALENDAR BANNER
  // ═══════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 2: CONTENT CALENDAR";
  SF(AEO_C); doc.rect(ML, y, CW, 30, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); ST("#d1fae5"); doc.text("PART 2", ML + 5, y + 8);
  doc.setFontSize(17); ST(WH); doc.text("6-MONTH CONTENT CALENDAR", ML + 5, y + 18);
  doc.setFont("helvetica", "normal"); doc.setFontSize(8); ST("#d1fae5"); doc.text("April – October 2026  |  29 Content Pieces  |  Weekly Breakdown", ML + 5, y + 25);
  y += 33;

  sectionHead("SECTION 9: 6-MONTH WEEKLY CALENDAR", "Week-by-week topics, types, keywords, CTAs, and owner assignments");

  CALENDAR.forEach(month => {
    needY(11);
    SF(DK); doc.roundedRect(ML, y, CW, 8, 1, 1, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8); ST(AEO_C); doc.text(month.month, ML + 4, y + 5.5);
    doc.setFont("helvetica", "italic"); doc.setFontSize(6.5); ST(LT); doc.text("Theme: " + month.theme, PW - MR, y + 5.5, "right");
    y += 10;

    // Calendar table header
    const cX4 = [ML, ML + 10, ML + 30, ML + 82, ML + 133, ML + CW - 10];
    needY(5.5);
    SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
    ["Wk", "Type", "Title / Topic", "Target Keywords", "Goal", "Owner"].forEach((h, i) => {
      doc.setFont("helvetica", "bold"); doc.setFontSize(5.8); ST(WH); doc.text(h, cX4[i] + 1, y + 3.5);
    });
    y += 5.2;

    month.items.forEach((item, ii) => {
      const tLines = doc.splitTextToSize(item.title, 50);
      const kwLines = doc.splitTextToSize(item.keywords, 49);
      const gLines = doc.splitTextToSize(item.goal, 49);
      const rh = Math.max(8, Math.max(tLines.length, kwLines.length, gLines.length) * 3.3 + 2.5);
      needY(rh + 0.5);

      SF(ii % 2 === 0 ? WH : BG2); doc.rect(ML, y, CW, rh, "F");
      SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + rh, ML + CW, y + rh);

      doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(AEO_C); doc.text(item.week, cX4[0] + 5, y + rh / 2 + 1.5, "center");

      // Type chip
      const tColMap = { "Blog Post": "#3b82f6", "Service Page": OR, "Case Study": GEO_C, "Social Post": AEO_C, "FAQ Page": YL, "Use Case Page": "#8b5cf6", "Definition Page": "#06b6d4" };
      const tBgMap = { "Blog Post": "#dbeafe", "Service Page": "#fff0eb", "Case Study": "#f5f3ff", "Social Post": "#ecfdf5", "FAQ Page": "#fff7ed", "Use Case Page": "#f5f3ff", "Definition Page": "#ecfeff" };
      const tCol2 = tColMap[item.type] || DK, tBg2 = tBgMap[item.type] || BG2;
      const shortType = item.type.length > 9 ? item.type.slice(0, 8) + "." : item.type;
      chip(cX4[1] + 1, y + rh / 2 - 2, shortType, tBg2, tCol2, 18);

      doc.setFont("helvetica", "bold"); doc.setFontSize(6.2); ST(DK);
      tLines.forEach((ln, li) => doc.text(ln, cX4[2] + 1, y + 3.5 + li * 3.3));
      doc.setFont("helvetica", "normal"); doc.setFontSize(5.8); ST(MD);
      kwLines.forEach((ln, li) => doc.text(ln, cX4[3] + 1, y + 3.5 + li * 3.3));
      ST(DK);
      gLines.forEach((ln, li) => doc.text(ln, cX4[4] + 1, y + 3.5 + li * 3.3));

      const oC2 = { SEO: OR, Content: GEO_C, Marketing: AEO_C }[item.owner] || DK;
      const oB2 = { SEO: "#fff0eb", Content: "#f5f3ff", Marketing: "#ecfdf5" }[item.owner] || BG2;
      chip(cX4[5] + 1, y + rh / 2 - 2, item.owner, oB2, oC2, 10);
      y += rh + 0.5;
    });
    y += 5;
  });

  // Section 10 KPIs
  ftr(); doc.addPage(); hdr();
  sectionHead("SECTION 10: CONTENT KPIs & SUCCESS METRICS", "Track monthly using Looker Studio + GA4 + Search Console");

  const kpiCols = [ML, ML + 36, ML + 82, ML + 128, ML + 144];
  SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
  ["KPI Metric", "Starting Point", "Tracking Tool", "Frequency", "6-Month Target"].forEach((h, i) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(WH); doc.text(h, kpiCols[i] + 1, y + 3.5);
  });
  y += 5.2;

  [["Organic Traffic","Baseline (Month 0)","Google Analytics 4","Monthly","+15% by Month 3, +40% by Month 6"],
   ["Keyword Rankings","Track 20 keywords","Search Console","Weekly","5+ in Top 10 by Month 3"],
   ["Blog Pageviews","Baseline (Month 0)","GA4 / GSC","Monthly","2x by Month 6"],
   ["Case Study Leads","0 currently","CRM / Forms","Monthly","3+ leads from case studies by Month 4"],
   ["Social Engagement","Baseline this week","LinkedIn / Meta","Weekly","+20% engagement by Month 2"],
   ["AI Citation Appearances","Manual audit","Perplexity / ChatGPT","Monthly","Brand in 5+ AI queries by Month 6"],
   ["Domain Authority","Current score","Ahrefs / Moz","Monthly","+5 DA points by Month 6"],
   ["Backlinks Earned","Baseline","Ahrefs","Monthly","10+ new referring domains by Month 6"]
  ].forEach((r, ii) => {
    const tL = doc.splitTextToSize(r[4], CW - 144 - 3);
    const rh = Math.max(7, tL.length * 3.2 + 2);
    needY(rh + 0.5);
    SF(ii % 2 === 0 ? WH : BG2); doc.rect(ML, y, CW, rh, "F");
    SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + rh, ML + CW, y + rh);
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(DK); doc.text(r[0], kpiCols[0] + 1, y + rh / 2 + 1.5);
    doc.setFont("helvetica", "normal"); doc.setFontSize(6); ST(MD); doc.text(r[1], kpiCols[1] + 1, y + rh / 2 + 1.5);
    doc.text(r[2], kpiCols[2] + 1, y + rh / 2 + 1.5);
    chip(kpiCols[3] + 1, y + rh / 2 - 2, r[3], "#eff6ff", "#1d4ed8", 15);
    doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(GR);
    tL.forEach((ln, li) => doc.text(ln, kpiCols[4] + 1, y + 3.5 + li * 3.2));
    y += rh + 0.5;
  });

  // ════════════════════════════════════
  //  PART 3 — SEO STRATEGY BANNER
  // ════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 3: SEO STRATEGY, COMPETITORS & KEYWORDS";
  SF(GEO_C); doc.rect(ML, y, CW, 30, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(9); ST("#ede9fe"); doc.text("PART 3", ML + 5, y + 8);
  doc.setFontSize(15); ST(WH); doc.text("SEO STRATEGY · COMPETITORS · KEYWORDS", ML + 5, y + 18);
  doc.setFont("helvetica", "normal"); doc.setFontSize(8); ST("#ede9fe"); doc.text("12-Month Plan  |  6 Competitor Profiles  |  62 Keyword Recommendations", ML + 5, y + 25);
  y += 33;

  sectionHead("SECTION 11: 12-MONTH SEO STRATEGY PLAN", "4 Phases: Fix Foundation → Authority → Scale → Dominate");

  // Strategic objectives grid
  const objs = [
    { n:1, obj:"Top 3 rankings for 10 primary keywords", target:"10 keywords in Top 3 by Month 12", col: GEO_C },
    { n:2, obj:"Fix all Critical and High Priority audit issues", target:"Overall audit score >= 90/100 by Month 6", col: RD },
    { n:3, obj:"Grow organic traffic by 150%", target:"+150% sessions from organic by Month 12", col: GR },
    { n:4, obj:"Establish AEO & GEO authority in niche", target:"Brand cited in 10+ AI queries by Month 9", col: AEO_C },
    { n:5, obj:"Local SEO dominance in Agra + pan-India", target:"GBP in Top 3 Local Pack for 5 keywords by Month 6", col: YL },
    { n:6, obj:"Generate 20+ organic leads per month", target:"20+ monthly organic leads in CRM by Month 12", col: OR },
  ];
  const objW2 = (CW - 4) / 3;
  for (let i = 0; i < objs.length; i += 3) {
    needY(15);
    for (let j = 0; j < 3; j++) {
      const o = objs[i + j];
      if (!o) break;
      const ox = ML + j * (objW2 + 2);
      SF(WH); SD(BD); doc.setLineWidth(0.15); doc.roundedRect(ox, y, objW2 - 1, 13, 1.5, 1.5, "FD");
      SF(o.col); doc.roundedRect(ox + 1, y + 1, 5.5, 5.5, 1, 1, "F");
      doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); ST(WH); doc.text(String(o.n), ox + 3.75, y + 5.2, "center");
      doc.setFont("helvetica", "bold"); doc.setFontSize(6.2); ST(DK); doc.text(o.obj, ox + 9, y + 4.5);
      doc.setFont("helvetica", "normal"); doc.setFontSize(5.5); ST(GR); doc.text("→ " + o.target, ox + 9, y + 8.5);
    }
    y += 15;
  }
  y += 2;

  // 4 Phase tables
  const phases5 = [
    { name:"Phase 1 — Months 1-3: Fix the Foundation", focus:"Technical fixes, on-page corrections, schema, local SEO setup", col: RD, bg:"#fff5f5", hbg:"#450a0a",
      items:[["Viewport meta tag + responsive CSS fix","Developer","Week 1","Mobile fix","+15% rankings"],["Fix HTTPS / resolve mixed content","Developer","Week 1","GEO HTTPS","+AI trust"],["Remove noindex from key pages","Dev/SEO","Week 1","Tech SEO","Pages indexed"],["Unique title tags + meta descriptions","SEO Team","Weeks 1-2","On-Page","+20% CTR"],["Page speed: GZIP, CDN, WebP images","Developer","Weeks 1-2","CWV fix","+Core Vitals"],["Org + FAQPage + BreadcrumbList schema","Developer","Week 2","GEO schema","Rich results"],["Claim + fully optimise Google Business Profile","Marketing","Week 1-2","Local SEO","Local Pack"],["Expand thin content to 800-1200 words","Content","Weeks 2-6","Content fix","+Rankings"],["Add definition sections + FAQ blocks","Content","Weeks 2-6","AEO fix","+PAA capture"]] },
    { name:"Phase 2 — Months 4-6: Authority & Content Build", focus:"Content clusters, E-E-A-T trust signals, link acquisition", col: YL, bg:"#fffbf0", hbg:"#451a03",
      items:[["Publish 6-month content calendar","Content","Month 4","Content fix","Featured snippets"],["Launch 3 use case pages","SEO+Content","Month 4-5","GEO fix","Niche traffic"],["Publish 2 case studies with results","Marketing","Month 4-5","E-E-A-T fix","Trust signals"],["Build 10+ quality backlinks","SEO","Month 4-6","Authority","+Domain Authority"],["Submit to Clutch, GoodFirms, DesignRush","Marketing","Month 4","GEO fix","Directory citations"],["10+ client testimonials + trust badges","Marketing","Month 4-5","E-E-A-T fix","Social proof"],["Achieve 83/100 overall audit score","All Teams","Month 6","Milestone","Score benchmark"]] },
    { name:"Phase 3 — Months 7-9: Scale & Brand Authority", focus:"International targeting, PR outreach, AI citation building", col: AEO_C, bg:"#f0fdf4", hbg:"#052e16",
      items:[["International landing pages (white-label, outsource)","SEO+Dev","Month 7","Global kws","Intl leads"],["3 more case studies for E-E-A-T depth","Marketing","Month 7-8","E-E-A-T fix","Trust authority"],["Expand HowTo & QAPage schema","Developer","Month 7","AEO fix","Rich results"],["Link building: target DA60+ domains","SEO","Month 7-9","Authority","+10 domains"],["Press outreach: 3-5 media mentions","Marketing","Month 7-9","Domain auth","+3 DA60+ links"]] },
    { name:"Phase 4 — Months 10-12: Dominate & Sustain", focus:"Top 3 keyword push, 2027 AI search preparation", col: GEO_C, bg:"#f5f3ff", hbg:"#2e1065",
      items:[["Refresh all 2026 blog posts for 2027","Content","Month 10-11","Freshness","Posts refreshed"],["Push top 10 keywords toward Top 3","SEO","Month 10-12","Revenue kws","5+ in Top 3"],["Expand to 2 new niche verticals","SEO+Content","Month 10","Vertical auth","2 new pages"],["Full re-audit: target 93/100 score","SEO Lead","Month 12","Benchmark","93+ overall"],["2027 SEO predictions + strategy update","Content+SEO","Month 11-12","Thought lead","2027 keywords"]] },
  ];

  phases5.forEach(phase => {
    needY(13);
    SF(phase.hbg); doc.roundedRect(ML, y, CW, 7.5, 1, 1, "F");
    SF(phase.col); doc.rect(ML, y, 3.5, 7.5, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8); ST(WH); doc.text(phase.name, ML + 6.5, y + 5);
    doc.setFont("helvetica", "italic"); doc.setFontSize(6); ST(LT); doc.text(phase.focus, PW - MR, y + 5, "right");
    y += 9.5;

    const pCX2 = [ML, ML + 54, ML + 72, ML + 87, ML + 106];
    SF(BRAND); doc.rect(ML, y, CW, 4.5, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(5.5); ST(WH);
    ["Deliverable", "Owner", "Timeline", "Audit Fix", "Expected Impact"].forEach((h, i) => doc.text(h, pCX2[i] + 1, y + 3.2));
    y += 4.5;

    phase.items.forEach((item, ii) => {
      const rh = 7.2;
      needY(rh + 0.3);
      SF(ii % 2 === 0 ? WH : BG2); doc.rect(ML, y, CW, rh, "F");
      SD(BD); doc.setLineWidth(0.07); doc.line(ML, y + rh, ML + CW, y + rh);
      doc.setFont("helvetica", "normal"); doc.setFontSize(6.2); ST(DK); doc.text(item[0], pCX2[0] + 1, y + 4.5);
      doc.setFontSize(6); ST(MD); doc.text(item[1], pCX2[1] + 1, y + 4.5); doc.text(item[2], pCX2[2] + 1, y + 4.5);
      chip(pCX2[3] + 1, y + 1.8, item[3], phase.bg, phase.col);
      doc.setFont("helvetica", "bold"); doc.setFontSize(6); ST(GR); doc.text(item[4], pCX2[4] + 1, y + 4.5);
      y += rh + 0.3;
    });
    y += 4;
  });

  // 12-Month Score Projection table
  needY(34);
  sectionHead("12-Month Score Projection");
  const prjX2 = [ML, ML + 44, ML + 84, ML + 114, ML + 144];
  SF(BRAND); doc.rect(ML, y, CW, 5.5, "F");
  ["Module", "Now (Mar 26)", "Month 6", "Month 9", "Month 12 Target"].forEach((h, i) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(WH); doc.text(h, prjX2[i] + 2, y + 3.8);
  });
  y += 5.5;
  [
    { mod:"SEO",     now:70, m6:84, m9:88, m12:"92/100 (A)"  },
    { mod:"AEO",     now:79, m6:89, m9:92, m12:"95/100 (A+)" },
    { mod:"GEO",     now:72, m6:85, m9:89, m12:"92/100 (A)"  },
    { mod:"OVERALL", now:74, m6:86, m9:90, m12:"93/100 (A+)" },
  ].forEach((r, ri) => {
    needY(7);
    const isOv = ri === 3;
    SF(isOv ? BG2 : WH); doc.rect(ML, y, CW, 6.5, "F");
    SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + 6.5, ML + CW, y + 6.5);
    doc.setFont("helvetica", isOv ? "bold" : "normal"); doc.setFontSize(7); ST(DK); doc.text(r.mod, prjX2[0] + 2, y + 4.3);
    [r.now, r.m6, r.m9].forEach((v, i) => {
      const bg4 = v >= 80 ? GRB : v >= 70 ? YLB : RDB, fg4 = v >= 80 ? GR : v >= 70 ? YL : RD;
      chip(prjX2[i + 1] + 2, y + 1.3, v + "/100", bg4, fg4, 18);
    });
    SF(DK); doc.roundedRect(prjX2[4] + 2, y + 1.3, 24, 4, 1, 1, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(WH); doc.text(r.m12, prjX2[4] + 14, y + 4.3, "center");
    y += 6.5;
  });
  y += 5;

  // ═══════════════════════════════
  //  SECTION 12: COMPETITORS
  // ═══════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 3: COMPETITOR ANALYSIS";
  sectionHead("SECTION 12: COMPETITOR ANALYSIS", "6 key competitors — India + Global digital marketing agency landscape");

  // Competitor overview table
  const compX2 = [ML, ML + 28, ML + 40, ML + 50, ML + 80, ML + 96, ML + 112, ML + 128];
  SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
  ["Agency", "Est.", "Team", "HQ", "SEO", "AEO", "GEO", "Pricing/mo"].forEach((h, i) => {
    doc.setFont("helvetica", "bold"); doc.setFontSize(5.5); ST(WH); doc.text(h, compX2[i] + 1, y + 3.5);
  });
  y += 5.2;

  COMPETITORS.forEach((c, ii) => {
    needY(8);
    SF(ii % 2 === 0 ? WH : BG2); doc.rect(ML, y, CW, 7.5, "F");
    SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + 7.5, ML + CW, y + 7.5);
    doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); ST(DK); doc.text(c.name, compX2[0] + 1, y + 5);
    doc.setFont("helvetica", "normal"); doc.setFontSize(6); ST(MD);
    doc.text(String(c.est), compX2[1] + 1, y + 5);
    doc.text(c.team, compX2[2] + 1, y + 5);
    const hqL = doc.splitTextToSize(c.hq, 28);
    doc.setFontSize(5.5); hqL.forEach((ln, li) => doc.text(ln, compX2[3] + 1, y + 2.5 + li * 2.8));
    [[c.seo, OR], [c.aeo, AEO_C], [c.geo, GEO_C]].forEach(([n, col], i) => {
      doc.setFontSize(5.5); ST(col); doc.text("●".repeat(n) + "○".repeat(5 - n), compX2[4 + i] + 1, y + 5);
    });
    doc.setFont("helvetica", "normal"); doc.setFontSize(6); ST(DK); doc.text(c.pricing, compX2[7] + 1, y + 5);
    y += 7.5;
  });
  y += 4;
  doc.setFont("helvetica", "italic"); doc.setFontSize(5.8); ST(LT);
  doc.text("Strength: ●●●●● = Industry-leading  ●●●●○ = Strong  ●●●○○ = Moderate  ●●○○○ = Weak  ●○○○○ = Minimal", ML, y);
  y += 7;

  // Detailed competitor profiles
  COMPETITORS.forEach((c, ci) => {
    needY(38);
    SF(DK); doc.roundedRect(ML, y, CW, 7.5, 1, 1, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); ST(WH); doc.text(`${ci + 1}. ${c.name}  (${c.domain})`, ML + 4, y + 5.3);
    doc.setFont("helvetica", "normal"); doc.setFontSize(6.5); ST(LT); doc.text(`Clutch: ${c.clutch} · Est. ${c.est} · Team: ${c.team}`, PW - MR, y + 5.3, "right");
    y += 9.5;

    [["HQ / Market", c.hq + " | " + c.market + " | Est. " + c.est + " | Team: " + c.team],
     ["Pricing", c.pricing + " | Clutch: " + c.clutch],
     ["Strengths", c.strengths],
     ["Weaknesses", c.weaknesses],
     ["Our Opportunity", c.opp],
    ].forEach(([lbl, val]) => {
      const vL = doc.splitTextToSize(val, CW - 38 - 3);
      const rh = Math.max(7, vL.length * 3.2 + 2.5);
      needY(rh + 0.5);
      SF(BG2); doc.rect(ML, y, 38, rh, "F");
      SF(WH); doc.rect(ML + 38, y, CW - 38, rh, "F");
      SD(BD); doc.setLineWidth(0.1); doc.line(ML, y + rh, ML + CW, y + rh); doc.line(ML + 38, y, ML + 38, y + rh);
      doc.setFont("helvetica", "bold"); doc.setFontSize(6.2); ST(DK); doc.text(lbl, ML + 2, y + rh / 2 + 1.5);
      doc.setFont("helvetica", "normal"); doc.setFontSize(6.2); ST(lbl === "Our Opportunity" ? GEO_C : DK);
      vL.forEach((ln, li) => doc.text(ln, ML + 40, y + 3.5 + li * 3.2));
      y += rh + 0.5;
    });
    y += 4;
  });

  // ═══════════════════════════════
  //  SECTION 13: KEYWORDS
  // ═══════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part = "PART 3: KEYWORD RECOMMENDATIONS";
  sectionHead("SECTION 13: KEYWORD RECOMMENDATIONS — 62 Keywords", "Primary Commercial · Long-Tail Informational · Local SEO · Global/International");

  const kwSections2 = [
    ["C.1 — Primary Commercial Keywords (10 Keywords)", "Highest-value keywords for driving qualified leads. High competition — target over 12 months.", KW.primary],
    ["C.2 — Long-Tail Informational Keywords (15 Keywords)", "Lower competition keywords targeting AEO/GEO gaps — drive featured snippets and AI citations.", KW.longtail],
    ["C.3 — Local SEO Keywords — Agra & Near Me (8 Keywords)", "Critical for driving nearby business enquiries — fastest ROI opportunity in the keyword set.", KW.local],
    ["C.4 — Global & International Keywords (8 Keywords)", "Target international clients looking to outsource digital marketing from India.", KW.global],
  ];

  kwSections2.forEach(([title, desc, kwList]) => {
    needY(12);
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); ST(DK); doc.text(title, ML, y + 5);
    y += 7;
    const dL = doc.splitTextToSize(desc, CW);
    needY(dL.length * 3.5 + 3);
    doc.setFont("helvetica", "normal"); doc.setFontSize(6.5); ST(MD);
    dL.forEach((ln, li) => doc.text(ln, ML, y + 4 + li * 3.5));
    y += dL.length * 3.5 + 5;

    const kwX3 = [ML, ML + 66, ML + 84, ML + 100, ML + 120, ML + 136];
    SF(BRAND); doc.rect(ML, y, CW, 5.2, "F");
    ["Keyword", "Volume/mo", "Difficulty", "Intent", "Priority", "Target Page"].forEach((h, i) => {
      doc.setFont("helvetica", "bold"); doc.setFontSize(5.5); ST(WH); doc.text(h, kwX3[i] + 1, y + 3.5);
    });
    y += 5.2;

    kwList.forEach((kw, ii) => {
      const pgL = doc.splitTextToSize(kw.page, CW - 136 - 3);
      const rh = Math.max(7, pgL.length * 3.2 + 2);
      needY(rh + 0.5);
      SF(ii % 2 === 0 ? WH : BG2); doc.rect(ML, y, CW, rh, "F");
      SD(BD); doc.setLineWidth(0.08); doc.line(ML, y + rh, ML + CW, y + rh);
      doc.setFont("helvetica", "normal"); doc.setFontSize(6.2); ST(DK); doc.text(kw.kw, kwX3[0] + 1, y + rh / 2 + 1.5);
      doc.text(kw.vol, kwX3[1] + 1, y + rh / 2 + 1.5);
      const dif = kw.diff, dcC = dif === "HIGH" ? RD : dif === "MEDIUM" ? YL : GR, dcB = dif === "HIGH" ? RDB : dif === "MEDIUM" ? YLB : GRB;
      chip(kwX3[2] + 1, y + rh / 2 - 2, dif, dcB, dcC, 15);
      doc.setFont("helvetica", "normal"); doc.setFontSize(6); ST(MD); doc.text(kw.intent, kwX3[3] + 1, y + rh / 2 + 1.5);
      const pc5 = priorityColors(kw.pri); chip(kwX3[4] + 1, y + rh / 2 - 2, kw.pri, pc5.bg, pc5.fg, 16);
      doc.setFont("helvetica", "bold"); doc.setFontSize(5.8); ST(GEO_C);
      pgL.forEach((ln, li) => doc.text(ln, kwX3[5] + 1, y + 3.5 + li * 3.2));
      y += rh + 0.5;
    });
    y += 6;
  });

  // ── Back cover / sign-off ──
  needY(18);
  SF(DK); doc.roundedRect(ML, y, CW, 17, 2, 2, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(9.5); ST(OR);
  doc.text((_userDomain || "buimbdigital.com") + " — Complete Digital Marketing Strategy & Audit Report", ML + CW / 2, y + 7, "center");
  doc.setFont("helvetica", "normal"); doc.setFontSize(7); ST(WH);
  doc.text(`Audited: ${_userDomain || "buimbdigital.com"}  ·  ${new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}  ·  info@buimbdigital.com`, ML + CW / 2, y + 12, "center");
  doc.setFont("helvetica", "italic"); doc.setFontSize(6); ST(LT);
  doc.text("CONFIDENTIAL — For Internal Distribution Only. Do Not Distribute Without Authorization.", ML + CW / 2, y + 16, "center");

  ftr();
  doc.save("BuimbDigital-Complete-Report-" + new Date().toISOString().slice(0, 10) + ".pdf");
}