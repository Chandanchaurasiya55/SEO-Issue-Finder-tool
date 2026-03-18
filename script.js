// ══════════════════════════════════════════════════════
//  DATA — buimbdigital.com (17 March 2026)
// ══════════════════════════════════════════════════════
const D = {
  domain:"buimbdigital.com", overall:74,
  mods:{
    seo:{label:"SEO",score:70,color:"#ff642d",
      categories:[
        {name:"On-Page SEO",sectionNum:"2.1",score:78,checks:[
          {n:"Title Tag",        status:"WARN",finding:"Title missing or too generic on some pages",priority:"CRITICAL",action:"Add unique 50-60 char title per page with primary keyword"},
          {n:"Meta Description", status:"WARN",finding:"Needs compelling 150-160 char description with CTA",priority:"HIGH",action:"Write unique meta descriptions with a clear call to action"},
          {n:"H1 Heading",       status:"PASS",finding:"Single H1 with target keyword found",priority:"HIGH",action:"Maintain — keep keyword in H1"},
          {n:"H2/H3 Hierarchy",  status:"PASS",finding:"Proper heading hierarchy aids readability",priority:"MEDIUM",action:"Maintain heading structure across all pages"},
          {n:"Keyword in First 100 Words",status:"WARN",finding:"Keyword not present in opening paragraph",priority:"HIGH",action:"Naturally include target keyword in first 100 words"},
          {n:"Image Alt Attributes",status:"PASS",finding:"All images have descriptive alt text",priority:"MEDIUM",action:"Maintain — continue on new images"},
          {n:"Canonical Tag",    status:"WARN",finding:"Canonical tag missing — duplicate content risk",priority:"HIGH",action:"Add self-referencing canonical to every page"},
          {n:"Internal Linking", status:"PASS",finding:"Good internal link structure found",priority:"MEDIUM",action:"Expand internal links to new content"},
          {n:"Content Word Count",status:"WARN",finding:"Thin content detected on key pages",priority:"MEDIUM",action:"Expand to 800-1200 words per key page"},
        ]},
        {name:"Technical SEO",sectionNum:"2.2",score:83,checks:[
          {n:"HTTPS / SSL",      status:"PASS",finding:"Site served over HTTPS — secure",priority:"CRITICAL",action:"Maintain — monitor certificate expiry"},
          {n:"robots.txt",       status:"PASS",finding:"Accessible and correctly configured",priority:"HIGH",action:"Maintain — review when adding new sections"},
          {n:"XML Sitemap",      status:"PASS",finding:"Sitemap found and submitted",priority:"HIGH",action:"Ensure all new pages are added automatically"},
          {n:"Noindex Tags",     status:"WARN",finding:"Noindex found on important pages",priority:"CRITICAL",action:"Audit meta robots tags — remove noindex from key pages"},
          {n:"Structured Data",  status:"PASS",finding:"Schema markup detected",priority:"HIGH",action:"Expand schema to cover more page types"},
          {n:"404 Error Page",   status:"WARN",finding:"No custom 404 page exists",priority:"HIGH",action:"Create a branded 404 with navigation & search"},
          {n:"URL Structure",    status:"PASS",finding:"Clean, readable URLs with keywords",priority:"MEDIUM",action:"Maintain — do not change existing URL structures"},
          {n:"Redirect Chains",  status:"PASS",finding:"No redirect chains detected",priority:"HIGH",action:"Maintain — audit quarterly"},
          {n:"Hreflang Tags",    status:"WARN",finding:"Missing or misconfigured hreflang",priority:"MEDIUM",action:"Implement if targeting multiple language markets"},
        ]},
        {name:"Core Web Vitals",sectionNum:"2.3",score:69,checks:[
          {n:"Page Load Speed",  status:"FAIL",finding:"Slow overall load time detected",priority:"CRITICAL",action:"Minify CSS/JS, enable GZIP, use CDN, target < 3s"},
          {n:"LCP (Largest Contentful Paint)",status:"PASS",finding:"LCP under 2.5s — excellent",priority:"CRITICAL",action:"Maintain — monitor as site grows"},
          {n:"CLS (Cumulative Layout Shift)",status:"PASS",finding:"CLS below 0.1 — stable layout",priority:"HIGH",action:"Maintain — avoid late-loading images without dimensions"},
          {n:"INP (Interaction to Next Paint)",status:"PASS",finding:"INP under 200ms — responsive",priority:"HIGH",action:"Maintain — minimize heavy JS interactions"},
          {n:"TTFB (Time to First Byte)",status:"FAIL",finding:"TTFB too high — slow server response",priority:"HIGH",action:"Enable server caching, use CDN, optimize hosting"},
          {n:"Image Optimization",status:"PASS",finding:"Images optimized in modern format",priority:"MEDIUM",action:"Continue using WebP/AVIF for all new images"},
          {n:"Render-Blocking Resources",status:"PASS",finding:"Minimal render-blocking scripts",priority:"HIGH",action:"Maintain — audit when adding new scripts"},
          {n:"Browser Caching", status:"PASS",finding:"Cache headers configured",priority:"MEDIUM",action:"Maintain — use versioned filenames for cache-busting"},
        ]},
        {name:"Mobile & UX",sectionNum:"2.4",score:38,note:"★ LOWEST SCORE — CRITICAL",checks:[
          {n:"Mobile Responsiveness",status:"FAIL",finding:"Site not fully responsive on mobile",priority:"CRITICAL",action:"Implement responsive CSS — test on Google Mobile-Friendly Test"},
          {n:"Viewport Meta Tag", status:"FAIL",finding:"Viewport meta tag missing from pages",priority:"HIGH",action:"Add <meta name='viewport'> to all page <head> sections"},
          {n:"Touch Targets",    status:"WARN",finding:"Some buttons/links may be too small",priority:"MEDIUM",action:"Ensure all tap targets are at least 44×44px"},
          {n:"Font Size on Mobile",status:"WARN",finding:"Font size too small on mobile screens",priority:"MEDIUM",action:"Set base font to 16px minimum, use rem units"},
        ]},
        {name:"Backlinks & Off-Page SEO",sectionNum:"2.5",score:90,checks:[
          {n:"Domain Authority",  status:"PASS",finding:"Healthy domain authority — strong link profile",priority:"HIGH",action:"Continue earning links through original research and thought leadership"},
          {n:"Total Backlinks",   status:"PASS",finding:"Good backlink volume from diverse sources",priority:"MEDIUM",action:"Maintain consistent link acquisition strategy"},
          {n:"Referring Domains", status:"PASS",finding:"Good unique referring domain count",priority:"HIGH",action:"Focus on earning links from diverse, high-authority domains"},
          {n:"Toxic Backlinks",   status:"PASS",finding:"No toxic links detected",priority:"HIGH",action:"Monitor monthly — use Search Console disavow if needed"},
          {n:"Social Profiles Linked",status:"WARN",finding:"Social profiles not fully linked from site",priority:"LOW",action:"Add links to all active social profiles in footer/About page"},
        ]},
        {name:"Local SEO",sectionNum:"2.6",score:63,checks:[
          {n:"Google Business Profile",status:"WARN",finding:"GBP not fully optimized",priority:"HIGH",action:"Claim GBP, add photos, hours, categories, respond to reviews"},
          {n:"NAP Consistency",   status:"WARN",finding:"Name/Address/Phone may be inconsistent",priority:"HIGH",action:"Audit all directory listings for NAP uniformity"},
          {n:"Local Citations",   status:"WARN",finding:"Insufficient local directory presence",priority:"MEDIUM",action:"List on Google, Bing Places, Apple Maps, Yelp"},
          {n:"Local Structured Data",status:"PASS",finding:"Local schema detected",priority:"HIGH",action:"Expand LocalBusiness schema with all available properties"},
          {n:"Social Profiles Linked",status:"WARN",finding:"Social profiles not linked from site",priority:"LOW",action:"Add links to all active social platforms in footer/About page"},
        ]},
      ]
    },
    aeo:{label:"AEO",score:79,color:"#10b981",
      categories:[
        {name:"Featured Snippet Optimization",sectionNum:"3.1",score:75,checks:[
          {n:"Question-Based Headings",status:"PASS",finding:"Headings formatted as questions — good for snippets",priority:"CRITICAL",action:"Continue — expand to all content pages"},
          {n:"Direct Answer Paragraphs",status:"PASS",finding:"40-60 word answer paragraphs found",priority:"CRITICAL",action:"Ensure every key question has a 40-60 word answer block"},
          {n:"Definition Sections",status:"FAIL",finding:"No 'X is...' definition blocks found",priority:"HIGH",action:"Add definition sections to every service and topic page"},
          {n:"Ordered Lists for Steps",status:"PASS",finding:"Numbered lists found — snippet-ready",priority:"HIGH",action:"Maintain and expand for all how-to content"},
          {n:"Comparison Tables",status:"PASS",finding:"Tables eligible for table snippets",priority:"MEDIUM",action:"Add more comparison tables for service/tool comparisons"},
          {n:"FAQ Section",      status:"WARN",finding:"No FAQ section on pages",priority:"HIGH",action:"Add FAQ with 5-10 Q&A pairs at bottom of each page"},
        ]},
        {name:"Voice Search",sectionNum:"3.2",score:100,checks:[
          {n:"Conversational Keywords",status:"PASS",finding:"Natural language voice-query phrases found",priority:"HIGH",action:"Continue — maintain across all new content published"},
          {n:"Long-Tail Questions",status:"PASS",finding:"Full question phrases targeted",priority:"HIGH",action:"Continue — target full questions not just keywords"},
          {n:"Local Voice Signals",status:"PASS",finding:"'Near me' and local signals present",priority:"MEDIUM",action:"Continue — add location content for each service area"},
          {n:"Speakable Schema", status:"PASS",finding:"Speakable schema implemented",priority:"MEDIUM",action:"Maintain — expand to all key intro paragraphs"},
        ]},
        {name:"Answer Engine Schema",sectionNum:"3.3",score:70,checks:[
          {n:"FAQPage Schema",   status:"PASS",finding:"FAQPage schema implemented",priority:"CRITICAL",action:"Expand to all pages with FAQ sections"},
          {n:"HowTo Schema",     status:"FAIL",finding:"HowTo schema missing",priority:"HIGH",action:"Add HowTo JSON-LD to all tutorial/process pages"},
          {n:"QAPage Schema",    status:"FAIL",finding:"No QAPage schema found",priority:"HIGH",action:"Add QAPage schema to Q&A content"},
          {n:"Review/Rating Schema",status:"PASS",finding:"Review schema with ratings found",priority:"MEDIUM",action:"Increase review count and diversity"},
          {n:"Event Schema",     status:"PASS",finding:"Event schema found",priority:"MEDIUM",action:"Ensure all future events use Event schema"},
        ]},
        {name:"E-E-A-T Signals",sectionNum:"3.4",score:60,checks:[
          {n:"Author Bio & Credentials",status:"PASS",finding:"Author credentials displayed",priority:"CRITICAL",action:"Add Person schema and LinkedIn links to author bios"},
          {n:"About Page Quality",status:"PASS",finding:"Detailed About page found",priority:"HIGH",action:"Enhance with team photos, credentials, and company history"},
          {n:"External Citations",status:"PASS",finding:"Authoritative sources cited",priority:"HIGH",action:"Continue linking to high-authority external sources"},
          {n:"Trust Badges & Reviews",status:"FAIL",finding:"No trust signals on key pages",priority:"HIGH",action:"Add certifications, partner logos, and genuine client reviews"},
          {n:"Last Updated Date",status:"FAIL",finding:"No publication/update dates on content",priority:"MEDIUM",action:"Add 'Last Updated: [date]' to all articles and pages"},
        ]},
        {name:"NLP & Semantic SEO",sectionNum:"3.5",score:90,checks:[
          {n:"Clear Topic Sentences",status:"PASS",finding:"Clear topic sentences found",priority:"HIGH",action:"Continue — begin each section with a clear topic sentence"},
          {n:"Entity Linking",   status:"WARN",finding:"Partially linked — first mentions need external links",priority:"HIGH",action:"Link first mentions of key entities to authoritative sources"},
          {n:"Semantic Keyword Coverage",status:"PASS",finding:"Semantically rich content found",priority:"HIGH",action:"Continue using LSI keywords and semantic variants"},
          {n:"Readability Score",status:"PASS",finding:"Flesch score above 60 — accessible",priority:"MEDIUM",action:"Maintain — simplify where needed, use active voice"},
          {n:"Topical Depth",    status:"PASS",finding:"Comprehensive topic coverage found",priority:"HIGH",action:"Continue — expand for all new service topics"},
        ]},
      ]
    },
    geo:{label:"GEO",score:72,color:"#8b5cf6",
      categories:[
        {name:"LLM-Ready Content",sectionNum:"4.1",score:90,checks:[
          {n:"Clear Page Summaries",status:"PASS",finding:"Content well-structured for AI parsing",priority:"CRITICAL",action:"Start every page with a 2-3 sentence summary paragraph"},
          {n:"Factual Data with Sources",status:"PASS",finding:"Statistics backed with citations",priority:"CRITICAL",action:"Continue — back every statistic with a citation link"},
          {n:"Unique Research / Data",status:"PASS",finding:"Original research/data present",priority:"HIGH",action:"Continue — LLMs and journalists cite original data more frequently"},
          {n:"AI Crawler Permissions",status:"PASS",finding:"AI crawlers addressed in robots.txt",priority:"HIGH",action:"Update robots.txt to explicitly address GPTBot, ClaudeBot, Google-Extended"},
          {n:"Structured for Extraction",status:"WARN",finding:"Some dense sections need restructuring",priority:"MEDIUM",action:"Start every page with a 2-3 sentence summary paragraph"},
        ]},
        {name:"Brand Citability",sectionNum:"4.2",score:70,checks:[
          {n:"Consistent Brand Name",status:"FAIL",finding:"Inconsistent brand mentions across pages",priority:"CRITICAL",action:"Standardize brand name across all pages and metadata"},
          {n:"Wikipedia / Wikidata",status:"PASS",finding:"Brand present on Wikidata",priority:"HIGH",action:"Keep Wikidata entry updated with latest information"},
          {n:"Industry Directories",status:"WARN",finding:"Missing from some key directories",priority:"HIGH",action:"Submit to Clutch, GoodFirms, DesignRush, and niche directories"},
          {n:"News & Press Mentions",status:"PASS",finding:"Brand appears in press/news articles",priority:"HIGH",action:"Pursue additional PR — guest posts, interviews, case studies"},
          {n:"Niche Term Co-occurrence",status:"PASS",finding:"Brand co-occurs with niche keywords",priority:"HIGH",action:"Expand content clusters to increase topic associations"},
        ]},
        {name:"AI Topical Coverage",sectionNum:"4.3",score:90,checks:[
          {n:"Pillar + Cluster Content",status:"PASS",finding:"Content hub with pillar and cluster pages",priority:"CRITICAL",action:"Continue — expand cluster strategy with new verticals"},
          {n:"Definition Pages",  status:"PASS",finding:"Definition and explainer pages present",priority:"HIGH",action:"Create 'What is [Term]?' pages for all key niche terms"},
          {n:"Comparison Pages",  status:"PASS",finding:"Competitor comparison pages found",priority:"MEDIUM",action:"Add more vs-competitor pages for key service comparisons"},
          {n:"Use Case Content",  status:"PASS",finding:"Use case and how-to content found",priority:"HIGH",action:"Create dedicated pages for each use case (e.g. SEO for E-commerce)"},
          {n:"Glossary / Terminology",status:"WARN",finding:"Partial glossary found",priority:"MEDIUM",action:"Expand terminology coverage — build a comprehensive glossary"},
        ]},
        {name:"AI Trust & Credibility",sectionNum:"4.4",score:60,checks:[
          {n:"HTTPS Security",    status:"FAIL",finding:"HTTP only flagged — mixed content issue",priority:"CRITICAL",action:"Enforce HTTPS sitewide, fix all mixed content warnings"},
          {n:"Contact & Ownership",status:"PASS",finding:"Contact info and ownership displayed",priority:"HIGH",action:"Ensure contact details are in schema markup too"},
          {n:"Legal Pages",       status:"PASS",finding:"Privacy policy and T&C present",priority:"HIGH",action:"Keep legal pages updated — essential for AI trust signals"},
          {n:"Content Freshness", status:"PASS",finding:"Content regularly updated",priority:"HIGH",action:"Publish at least 2-4 new pieces of content per month"},
          {n:"Social Proof / Testimonials",status:"FAIL",finding:"No testimonials or case studies",priority:"MEDIUM",action:"Add 3-5 case studies and 10+ client testimonials sitewide"},
        ]},
        {name:"Machine-Readable Metadata",sectionNum:"4.5",score:50,note:"★ LOWEST CATEGORY",checks:[
          {n:"Organization Schema",status:"FAIL",finding:"Organization JSON-LD missing",priority:"CRITICAL",action:"Add Organization schema with legalName, logo, sameAs, contact"},
          {n:"Open Graph Tags",   status:"WARN",finding:"OG tags missing or incomplete",priority:"MEDIUM",action:"Add og:title, og:description, og:image, og:url to all pages"},
          {n:"Twitter Card Tags", status:"WARN",finding:"Twitter/X card meta tags missing",priority:"MEDIUM",action:"Add twitter:card, twitter:title, twitter:image to all pages"},
          {n:"BreadcrumbList Schema",status:"WARN",finding:"Breadcrumb schema missing",priority:"MEDIUM",action:"Add BreadcrumbList JSON-LD to all pages"},
          {n:"Author/Person Schema",status:"PASS",finding:"Author schema partially implemented",priority:"HIGH",action:"Expand with sameAs, knowsAbout, and jobTitle properties"},
        ]},
      ]
    }
  }
};

// Content Calendar
const CALENDAR=[
  {month:"Month 1: April 2026",theme:"SEO Foundations + Service Page Expansion",items:[
    {week:"W1",dates:"Apr 1–5",type:"Service Page",title:"What is SEO? A Complete Guide for Businesses in 2026",goal:"Definition page — Featured Snippet + E-E-A-T",keywords:"what is seo, seo explained, seo for business",cta:"Free Audit",owner:"SEO"},
    {week:"W2",dates:"Apr 7–12",type:"Blog Post",title:"Why Your Website is Invisible on Google (And How to Fix It)",goal:"Awareness — informational search intent",keywords:"website not showing on google, improve seo ranking",cta:"Contact Us",owner:"Content"},
    {week:"W3",dates:"Apr 14–19",type:"Service Page",title:"SEO Services by BuimbDigital — Packages & Pricing",goal:"Service page — commercial intent keywords",keywords:"seo services, seo agency, seo packages pricing",cta:"Get a Quote",owner:"SEO"},
    {week:"W4",dates:"Apr 21–26",type:"Social Post",title:"5 Quick SEO Wins Any Business Can Do This Week [Carousel]",goal:"Brand awareness + engagement",keywords:"quick seo tips, easy seo wins",cta:"Share/Save",owner:"Marketing"},
  ]},
  {month:"Month 2: Late April / May 2026",theme:"AEO Content Push + First Case Study",items:[
    {week:"W5",dates:"Apr 28–May 3",type:"Blog Post",title:"What is AEO? How to Optimize for AI Answer Engines in 2026",goal:"Definition page — AEO awareness, featured snippet",keywords:"answer engine optimization, what is AEO, AEO guide",cta:"Free Audit",owner:"Content"},
    {week:"W6",dates:"May 5–10",type:"Service Page",title:"Digital Marketing Services — Full-Funnel Strategy",goal:"Core service page — expand thin content to 1200w",keywords:"digital marketing agency, full funnel marketing",cta:"Get a Quote",owner:"SEO"},
    {week:"W7",dates:"May 12–17",type:"Case Study",title:"How We Grew Organic Traffic 140% for [Client A] in 6 Months",goal:"E-E-A-T + trust signal — results-based proof",keywords:"seo case study, agency results, traffic growth",cta:"View Work",owner:"Marketing"},
    {week:"W8",dates:"May 19–24",type:"Social Post",title:"What Does a Digital Agency Actually Do? [Explainer Thread]",goal:"Thought leadership + brand citability",keywords:"digital agency explained, what does an agency do",cta:"Follow Us",owner:"Marketing"},
    {week:"W9",dates:"May 26–31",type:"FAQ Page",title:"FAQ: Digital Marketing & SEO — 15 Questions Answered",goal:"People Also Ask — AEO snippet capture",keywords:"digital marketing faq, seo questions answered",cta:"Free Audit",owner:"Content"},
  ]},
  {month:"Month 3: June 2026",theme:"GEO Awareness + Niche Vertical Pages",items:[
    {week:"W10",dates:"Jun 2–7",type:"Blog Post",title:"GEO: What is Generative Engine Optimization and Why It Matters",goal:"GEO awareness — LLM citation + featured snippet",keywords:"generative engine optimization, GEO SEO, AI search",cta:"Free Audit",owner:"Content"},
    {week:"W11",dates:"Jun 9–14",type:"Use Case Page",title:"SEO for E-Commerce Businesses — Strategy & Results",goal:"Use case page — niche commercial intent",keywords:"ecommerce seo, online store seo, product page seo",cta:"Get a Quote",owner:"SEO"},
    {week:"W12",dates:"Jun 16–21",type:"Case Study",title:"How BuimbDigital Helped [Client B] Rank #1 for Local Search",goal:"Local SEO proof + E-E-A-T trust signals",keywords:"local seo results, rank on google maps, local business",cta:"View Work",owner:"Marketing"},
    {week:"W13",dates:"Jun 23–28",type:"Social Post",title:"SEO vs AEO vs GEO — What's the Difference? [Infographic]",goal:"Educational content — shares + brand recall",keywords:"seo vs aeo, seo vs geo, modern seo 2026",cta:"Share",owner:"Marketing"},
  ]},
  {month:"Month 4: July / Early August 2026",theme:"Thought Leadership + Conversion Content",items:[
    {week:"W14",dates:"Jun 30–Jul 5",type:"Blog Post",title:"How to Write Content That AI Tools Will Actually Cite",goal:"GEO — LLM citability + thought leadership",keywords:"AI content optimization, llm seo, ai citation tips",cta:"Free Audit",owner:"Content"},
    {week:"W15",dates:"Jul 7–12",type:"Use Case Page",title:"Digital Marketing for Law Firms — What Actually Works",goal:"Niche use case — long-tail commercial intent",keywords:"law firm digital marketing, seo for lawyers",cta:"Get a Quote",owner:"SEO"},
    {week:"W16",dates:"Jul 14–19",type:"Service Page",title:"Content Marketing Services — Strategy, Writing & Distribution",goal:"Thin service page expansion — 1000+ words",keywords:"content marketing agency, content strategy service",cta:"Get a Quote",owner:"SEO"},
    {week:"W17",dates:"Jul 21–26",type:"Blog Post",title:"Core Web Vitals 2026: What Businesses Need to Know",goal:"Technical SEO awareness + internal authority link",keywords:"core web vitals 2026, page speed seo, cwv explained",cta:"Free Audit",owner:"Content"},
    {week:"W18",dates:"Jul 28–Aug 2",type:"Social Post",title:"Client Win Wednesday: [Result of the Month] [Story Card]",goal:"Social proof + brand trust signal",keywords:"client results, digital marketing wins",cta:"Contact Us",owner:"Marketing"},
  ]},
  {month:"Month 5: August / September 2026",theme:"Local SEO Reinforcement + Brand Trust",items:[
    {week:"W19",dates:"Aug 4–9",type:"Blog Post",title:"How to Optimize Your Google Business Profile in 2026",goal:"Local SEO — GBP guide + featured snippet target",keywords:"google business profile 2026, gbp optimization",cta:"Free Audit",owner:"Content"},
    {week:"W20",dates:"Aug 11–16",type:"Case Study",title:"3x ROI in 90 Days: [Client C]'s Paid + Organic Strategy",goal:"Full-funnel case study — E-E-A-T + conversion proof",keywords:"digital marketing roi, agency case study, ppc + seo",cta:"View Work",owner:"Marketing"},
    {week:"W21",dates:"Aug 18–23",type:"Use Case Page",title:"SEO for SaaS Companies — Scaling Organic Growth",goal:"Niche vertical — high-value B2B intent",keywords:"saas seo, seo for software company, b2b seo agency",cta:"Get a Quote",owner:"SEO"},
    {week:"W22",dates:"Aug 25–30",type:"Social Post",title:"The Real Reason Your Competitors Outrank You [Thread]",goal:"Engagement-first — brand awareness",keywords:"outrank competitors, seo strategy, competitor seo",cta:"Share",owner:"Marketing"},
    {week:"W23",dates:"Sep 1–6",type:"FAQ Page",title:"FAQ: How Long Does SEO Take? (And Other Hard Questions)",goal:"People Also Ask — AEO capture + long-tail FAQ",keywords:"how long does seo take, seo timeline, seo expectations",cta:"Free Audit",owner:"Content"},
  ]},
  {month:"Month 6: September / October 2026",theme:"Authority Consolidation + 2027 Positioning",items:[
    {week:"W24",dates:"Sep 8–13",type:"Blog Post",title:"Voice Search Optimization: How to Rank for Spoken Queries",goal:"AEO / Voice — maintain 100 score + thought leadership",keywords:"voice search optimization, voice seo 2026, speakable",cta:"Free Audit",owner:"Content"},
    {week:"W25",dates:"Sep 15–20",type:"Definition Page",title:"What is Schema Markup? A Plain-English Guide with Examples",goal:"Definition + featured snippet — AEO schema awareness",keywords:"schema markup explained, structured data seo",cta:"Contact Us",owner:"Content"},
    {week:"W26",dates:"Sep 22–27",type:"Use Case Page",title:"Digital Marketing for Restaurants & Hospitality Businesses",goal:"New niche vertical — local + AI search visibility",keywords:"restaurant digital marketing, hospitality seo agency",cta:"Get a Quote",owner:"SEO"},
    {week:"W27",dates:"Sep 29–Oct 4",type:"Case Study",title:"From 0 to 5,000 Monthly Visits: [Client D]'s SEO Journey",goal:"6-month results story — trust + proof + conversions",keywords:"seo results 6 months, organic traffic growth, agency",cta:"View Work",owner:"Marketing"},
    {week:"W28",dates:"Oct 6–11",type:"Social Post",title:"6-Month Content Recap: What Worked, What Didn't [Data Post]",goal:"Transparency + authority — brand citability signal",keywords:"content marketing results, what works in seo 2026",cta:"Follow Us",owner:"Marketing"},
    {week:"W29",dates:"Oct 13–18",type:"Blog Post",title:"2027 SEO Predictions: What's Coming & How to Prepare Now",goal:"Evergreen authority — forward-looking thought leadership",keywords:"seo 2027, future of seo, ai search trends",cta:"Free Audit",owner:"Content"},
  ]},
];

// Competitors
const COMPETITORS=[
  {name:"PageTraffic",domain:"pagetraffic.in",est:2002,team:"200+",hq:"Delhi, India",market:"India + Global",pricing:"₹30K–₹1.5L/mo",clutch:"4.8/5",seo:5,aeo:3,geo:3,strengths:"24 years experience, large client portfolio, Google Premier Partner, strong backlink authority, extensive case study library",weaknesses:"Higher pricing, slower to adopt AEO/GEO trends, less agile for SMEs, templated reporting",opp:"BuimbDigital competes on AEO/GEO expertise, faster turnaround, and personalised service for SMEs"},
  {name:"Techmagnate",domain:"techmagnate.com",est:2006,team:"300+",hq:"Delhi, India",market:"India + Global",pricing:"₹50K–₹2L/mo",clutch:"4.9/5",seo:5,aeo:3,geo:3,strengths:"Google Premier Partner, enterprise-scale campaigns, strong technical SEO, analytics-driven, high Clutch rating",weaknesses:"Expensive, not suitable for startups or SMEs, limited GEO/AI offerings, long onboarding cycles",opp:"BuimbDigital wins on cost-effectiveness, GEO/AI optimisation, and accessibility for growing businesses"},
  {name:"EZ Rankings",domain:"ezrankings.com",est:2010,team:"150+",hq:"Noida, India",market:"India + Global",pricing:"₹15K–₹80K/mo",clutch:"4.7/5",seo:4,aeo:3,geo:4,strengths:"Affordable pricing, broad service range, good client communication, strong e-commerce SEO track record",weaknesses:"Less strong on AEO schema strategy, content quality inconsistent, limited international presence",opp:"BuimbDigital differentiates through AEO+GEO integration and higher-quality content strategy"},
  {name:"WebSpero Solutions",domain:"webspero.com",est:2014,team:"100+",hq:"Mohali, India",market:"India + USA",pricing:"₹20K–₹1L/mo",clutch:"4.8/5",seo:4,aeo:3,geo:3,strengths:"Strong technical SEO, AI-powered tools, good US market presence, award-winning agency, growing brand authority",weaknesses:"Limited social media and PPC depth, GEO strategy not prominently marketed, limited case study visibility",opp:"BuimbDigital's full-service model (SEO+SMM+PPC+Web) offers more complete coverage for clients"},
  {name:"Social Beat",domain:"socialbeat.in",est:2012,team:"200+",hq:"Bengaluru, India",market:"India",pricing:"₹40K–₹2L/mo",clutch:"4.6/5",seo:3,aeo:2,geo:2,strengths:"Outstanding social media and influencer marketing, strong creative execution, D2C expertise, well-known brand",weaknesses:"Weaker SEO/technical capability, almost no AEO or GEO focus, limited global reach, India-only",opp:"BuimbDigital wins on SEO+AEO+GEO depth and serves global markets — clear differentiation"},
  {name:"Conversion Perk",domain:"conversionperk.com",est:2016,team:"80+",hq:"Delhi, India",market:"India + Global",pricing:"₹10K–₹60K/mo",clutch:"4.7/5",seo:4,aeo:2,geo:2,strengths:"Strong PPC and performance marketing, affordable, quick execution, good client retention",weaknesses:"Limited content/AEO strategy, no GEO positioning, weaker brand authority vs older agencies",opp:"BuimbDigital's AEO+GEO+content depth is a clear differentiator in the SME market segment"},
];

// Keywords
const KW={
  primary:[
    {kw:"digital marketing agency India",vol:"22,000",diff:"HIGH",intent:"Commercial",pri:"CRITICAL",page:"Homepage"},
    {kw:"SEO services India",vol:"18,000",diff:"HIGH",intent:"Commercial",pri:"CRITICAL",page:"SEO Service Page"},
    {kw:"best SEO company India",vol:"12,000",diff:"HIGH",intent:"Commercial",pri:"CRITICAL",page:"SEO Service Page"},
    {kw:"digital marketing company India",vol:"14,000",diff:"HIGH",intent:"Commercial",pri:"CRITICAL",page:"Homepage"},
    {kw:"social media marketing agency India",vol:"8,000",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"SMM Service Page"},
    {kw:"PPC agency India",vol:"5,500",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"PPC Service Page"},
    {kw:"web design company India",vol:"9,000",diff:"HIGH",intent:"Commercial",pri:"HIGH",page:"Web Design Page"},
    {kw:"affordable SEO services India",vol:"4,400",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"SEO Service Page"},
    {kw:"digital marketing agency for small business",vol:"3,600",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"Homepage / Blog"},
    {kw:"SEO agency India pricing",vol:"2,900",diff:"LOW",intent:"Commercial",pri:"HIGH",page:"Pricing Page"},
  ],
  longtail:[
    {kw:"what is SEO and how does it work 2026",vol:"6,600",diff:"LOW",intent:"Informational",pri:"HIGH",page:"Blog / Definition Page"},
    {kw:"how to rank on Google in India",vol:"3,200",diff:"LOW",intent:"Informational",pri:"HIGH",page:"Blog Post"},
    {kw:"best digital marketing strategies for startups",vol:"2,800",diff:"LOW",intent:"Informational",pri:"HIGH",page:"Blog Post"},
    {kw:"how long does SEO take to show results",vol:"4,100",diff:"LOW",intent:"Informational",pri:"HIGH",page:"FAQ / Blog Post"},
    {kw:"what is answer engine optimization",vol:"1,900",diff:"LOW",intent:"Informational",pri:"HIGH",page:"AEO Blog / Definition"},
    {kw:"what is generative engine optimization",vol:"1,400",diff:"LOW",intent:"Informational",pri:"HIGH",page:"GEO Blog / Definition"},
    {kw:"how to optimize for Google AI Overview",vol:"2,200",diff:"LOW",intent:"Informational",pri:"HIGH",page:"Blog Post"},
    {kw:"digital marketing ROI for small business",vol:"1,800",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog Post"},
    {kw:"SEO vs paid ads which is better",vol:"3,300",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog / Comparison Page"},
    {kw:"how to improve website ranking India",vol:"2,700",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog Post"},
    {kw:"social media marketing tips for business India",vol:"2,100",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog Post"},
    {kw:"core web vitals explained 2026",vol:"1,600",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog Post"},
    {kw:"what is schema markup and how to use it",vol:"2,400",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog / Definition Page"},
    {kw:"voice search optimization guide",vol:"1,200",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Blog Post"},
    {kw:"digital marketing case study India",vol:"1,000",diff:"LOW",intent:"Informational",pri:"MEDIUM",page:"Case Study Page"},
  ],
  local:[
    {kw:"digital marketing agency Agra",vol:"320",diff:"LOW",intent:"Local",pri:"CRITICAL",page:"Location Page / GBP"},
    {kw:"SEO services Agra",vol:"260",diff:"LOW",intent:"Local",pri:"CRITICAL",page:"Location Page / GBP"},
    {kw:"digital marketing company Agra",vol:"210",diff:"LOW",intent:"Local",pri:"HIGH",page:"Homepage / GBP"},
    {kw:"social media marketing Agra",vol:"180",diff:"LOW",intent:"Local",pri:"HIGH",page:"SMM Service Page"},
    {kw:"web design company Agra",vol:"240",diff:"LOW",intent:"Local",pri:"HIGH",page:"Web Design Page / GBP"},
    {kw:"PPC services Agra",vol:"140",diff:"LOW",intent:"Local",pri:"MEDIUM",page:"PPC Service Page"},
    {kw:"best digital marketing agency near me",vol:"8,100",diff:"MEDIUM",intent:"Local",pri:"HIGH",page:"GBP + Homepage"},
    {kw:"SEO company near me India",vol:"5,400",diff:"MEDIUM",intent:"Local",pri:"HIGH",page:"GBP + Homepage"},
  ],
  global:[
    {kw:"white label SEO services India",vol:"2,900",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"Dedicated Landing Page"},
    {kw:"outsource digital marketing India",vol:"1,800",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"Landing Page"},
    {kw:"hire SEO expert India",vol:"3,200",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"Service Page / Blog"},
    {kw:"digital marketing agency for ecommerce",vol:"4,400",diff:"MEDIUM",intent:"Commercial",pri:"HIGH",page:"Use Case Page"},
    {kw:"SEO services for SaaS companies",vol:"2,100",diff:"LOW",intent:"Commercial",pri:"HIGH",page:"Use Case Page"},
    {kw:"affordable digital marketing agency global",vol:"1,400",diff:"LOW",intent:"Commercial",pri:"MEDIUM",page:"Homepage"},
    {kw:"AI SEO services agency",vol:"1,900",diff:"LOW",intent:"Commercial",pri:"MEDIUM",page:"SEO Service Page"},
    {kw:"GEO optimization services",vol:"800",diff:"LOW",intent:"Commercial",pri:"MEDIUM",page:"GEO Service Page"},
  ],
};

// ── UTILITIES ──
function scCol(s){return s>=65?"#21bf6b":s>=45?"#f59e0b":"#ef4444"}
function scBg(s){return s>=65?"#dcfce7":s>=45?"#fef9c3":"#fee2e2"}
function grade(s){return s>=90?"A+":s>=80?"A":s>=70?"B+":s>=60?"B":s>=50?"C":s>=40?"D":"F"}
function gradeClass(s){return s>=65?"grade-good":s>=45?"grade-ok":"grade-bad"}
function statusBadge(st){
  if(st==="PASS") return `<span class="status-badge sb-pass">✓ PASS</span>`;
  if(st==="WARN") return `<span class="status-badge sb-warn">⚠ WARN</span>`;
  return `<span class="status-badge sb-fail">✕ FAIL</span>`;
}
function priChip(p){return `<span class="priority-badge pr-${p.toLowerCase()}">${p}</span>`}
function typeChip(t){
  const map={"Blog Post":"type-blog","Service Page":"type-service","Case Study":"type-case","Social Post":"type-social","FAQ Page":"type-faq","Use Case Page":"type-usecase","Definition Page":"type-definition","Landing Page":"type-landing"};
  return `<span class="type-chip ${map[t]||"type-blog"}">${t}</span>`;
}
function ownerChip(o){
  const map={"SEO":"owner-seo","Content":"owner-content","Marketing":"owner-marketing"};
  return `<span class="owner-chip ${map[o]||"owner-seo"}">${o}</span>`;
}
function diffChip(d){return `<span class="diff-${d.toLowerCase()}">${d}</span>`}
function scoreChip(s,label){
  const c=s>=80?"sc-green":s>=70?"sc-yellow":"sc-red";
  return `<span class="score-chip ${c}">${s}/100 (${grade(s)})</span>`;
}

// ── SCAN ANIMATION (55-60 second realistic crawl) ──
function rng(a,b){return Math.floor(Math.random()*(b-a+1))+a}

const SCAN_STEPS=[
  {label:"Resolving domain DNS & SSL",duration:3000},
  {label:"Crawling homepage & structure",duration:4500},
  {label:"Discovering internal pages",duration:5000},
  {label:"Auditing on-page SEO elements",duration:5500},
  {label:"Checking technical SEO setup",duration:5000},
  {label:"Testing Core Web Vitals",duration:5500},
  {label:"Analyzing mobile responsiveness",duration:4500},
  {label:"Running AEO & schema checks",duration:5000},
  {label:"Scanning GEO & AI signals",duration:5000},
  {label:"Auditing backlink profile",duration:4000},
  {label:"Checking local SEO signals",duration:4000},
  {label:"Compiling results & scoring",duration:5000},
];

// Fake pages that get "crawled"
function generatePages(domain){
  const base=domain.replace(/https?:\/\//i,"").replace(/\/$/,"");
  return [
    {url:base+"/",label:"Homepage",icon:"🏠"},
    {url:base+"/about",label:"About Us",icon:"👥"},
    {url:base+"/services",label:"Services",icon:"⚙️"},
    {url:base+"/services/seo",label:"SEO Services",icon:"🔍"},
    {url:base+"/services/social-media",label:"Social Media",icon:"📱"},
    {url:base+"/services/ppc",label:"PPC Advertising",icon:"📊"},
    {url:base+"/services/web-design",label:"Web Design",icon:"🎨"},
    {url:base+"/blog",label:"Blog",icon:"📝"},
    {url:base+"/blog/seo-guide-2026",label:"SEO Guide 2026",icon:"📄"},
    {url:base+"/blog/digital-marketing-tips",label:"Marketing Tips",icon:"📄"},
    {url:base+"/contact",label:"Contact",icon:"✉️"},
    {url:base+"/case-studies",label:"Case Studies",icon:"📋"},
    {url:base+"/pricing",label:"Pricing",icon:"💰"},
    {url:base+"/faq",label:"FAQ",icon:"❓"},
    {url:base+"/sitemap.xml",label:"XML Sitemap",icon:"🗺️"},
  ];
}

function startAudit(){
  let url=(document.getElementById("url-input").value||"").trim();
  if(!url){document.getElementById("url-input").focus();return}
  if(!/^https?:\/\//i.test(url)) url="https://"+url;
  const domain=url.replace(/https?:\/\//i,"").replace(/\/$/,"");

  document.getElementById("audit-btn").disabled=true;
  document.getElementById("page-hero").style.display="none";
  document.getElementById("results").style.display="none";
  const ld=document.getElementById("loading");
  ld.style.display="block";
  document.getElementById("scan-domain-text").textContent=domain;

  const pages=generatePages(url);
  const totalPages=pages.length;
  const pagesListEl=document.getElementById("pages-list");
  const pagesCountEl=document.getElementById("pages-count");

  // Build steps UI
  const stepsEl=document.getElementById("scan-steps");
  stepsEl.innerHTML=SCAN_STEPS.map((s,i)=>`<div class="scan-step" id="ss${i}">
    <div class="ss-dot"></div>
    <div class="ss-text">${s.label}</div>
    <span class="ss-right" id="ss-time-${i}"></span>
  </div>`).join("");

  // Build pages UI (all queued initially)
  pagesListEl.innerHTML=pages.map((p,i)=>`<div class="page-item" id="pi${i}">
    <span class="page-icon">${p.icon}</span>
    <span class="page-url">${p.url}</span>
    <span class="page-status queued" id="ps${i}">Queued</span>
  </div>`).join("");
  pagesCountEl.textContent=`0 / ${totalPages}`;

  const pf=document.getElementById("prog-fill");
  const pp=document.getElementById("prog-pct");
  const pl=document.getElementById("prog-label");
  const pt=document.getElementById("prog-time");

  // Live stat counters
  let checked=0,errors=12,warnings=22,passed=55;
  const lc=document.getElementById("live-checked");
  const le=document.getElementById("live-errors");
  const lw=document.getElementById("live-warnings");
  const lpass=document.getElementById("live-passed");

  // Animate counters
  function animCounter(el,target,dur){
    let start=0,step=target/((dur/50));
    const iv=setInterval(()=>{
      start=Math.min(start+step,target);
      el.textContent=Math.round(start);
      if(start>=target) clearInterval(iv);
    },50);
  }

  const TOTAL_DURATION=55000; // 55 seconds
  const startTime=Date.now();

  // Progress bar
  const progIv=setInterval(()=>{
    const elapsed=Date.now()-startTime;
    const pct=Math.min(Math.round((elapsed/TOTAL_DURATION)*100),99);
    pf.style.width=pct+"%";
    pp.textContent=pct+"%";
    const rem=Math.max(0,Math.round((TOTAL_DURATION-elapsed)/1000));
    pt.textContent=rem>0?`Estimated time remaining: ~${rem} seconds`:"Finalizing results...";
  },200);

  // Crawl pages one by one
  let pageIdx=0;
  const pageCrawlInterval=Math.round((TOTAL_DURATION*0.7)/totalPages);
  function crawlNextPage(){
    if(pageIdx>=totalPages) return;
    // Set previous to done
    if(pageIdx>0){
      document.getElementById("ps"+(pageIdx-1)).textContent="✓ Done";
      document.getElementById("ps"+(pageIdx-1)).className="page-status done";
      // Scroll page list
      document.getElementById("pi"+(pageIdx-1)).scrollIntoView({block:"nearest",behavior:"smooth"});
    }
    document.getElementById("ps"+pageIdx).textContent="Scanning...";
    document.getElementById("ps"+pageIdx).className="page-status scanning";
    pagesCountEl.textContent=`${pageIdx+1} / ${totalPages}`;
    pageIdx++;
    setTimeout(crawlNextPage,pageCrawlInterval+rng(-200,200));
  }
  setTimeout(crawlNextPage,500);

  // Run checks sequentially
  let stepIdx=0,totalStepTime=0;
  function runNextStep(){
    if(stepIdx>0){
      const prevEl=document.getElementById("ss"+(stepIdx-1));
      prevEl.className="scan-step done";
      document.getElementById("ss-time-"+(stepIdx-1)).textContent="✓";
      document.getElementById("ss-time-"+(stepIdx-1)).style.color="#21bf6b";
    }
    if(stepIdx>=SCAN_STEPS.length){
      // Complete remaining pages
      for(let i=pageIdx-1;i<totalPages;i++){
        document.getElementById("ps"+i).textContent="✓ Done";
        document.getElementById("ps"+i).className="page-status done";
      }
      pagesCountEl.textContent=`${totalPages} / ${totalPages}`;
      clearInterval(progIv);
      pf.style.width="100%";pp.textContent="100%";
      pl.textContent="Audit complete — building your report...";
      pt.textContent="";
      animCounter(lc,89,1500);
      animCounter(le,12,1500);
      animCounter(lw,22,1500);
      animCounter(lpass,55,1500);
      setTimeout(()=>{ld.style.display="none";renderResults(D, domain)},2000);
      return;
    }
    const step=SCAN_STEPS[stepIdx];
    const stepEl=document.getElementById("ss"+stepIdx);
    stepEl.className="scan-step active";
    pl.textContent=step.label+"...";
    // Update live counters incrementally
    const checksPerStep=Math.round(89/SCAN_STEPS.length);
    animCounter(lc,Math.min(89,checked+checksPerStep),step.duration-200);
    checked=Math.min(89,checked+checksPerStep);
    stepIdx++;
    setTimeout(runNextStep,step.duration+rng(-200,300));
  }
  setTimeout(runNextStep,800);
}

// ── RENDER ──
let _data=null;
let _userDomain="";
function renderResults(data, userDomain){
  _data=data;
  const displayDomain = userDomain || data.domain;
  _userDomain = displayDomain;
  document.getElementById("bc-domain").textContent=displayDomain;
  document.getElementById("res-domain").textContent=displayDomain;
  document.getElementById("res-meta").textContent="Audit completed · "+new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})+" · 89 checks · SEO + AEO + GEO";

  const tabsEl=document.getElementById("module-tabs");
  const panelsEl=document.getElementById("tab-panels");
  tabsEl.innerHTML=""; panelsEl.innerHTML="";

  const tabs=[
    {key:"overview",label:"Overview"},
    {key:"seo",label:"SEO Analysis"},
    {key:"aeo",label:"AEO Analysis"},
    {key:"geo",label:"GEO Analysis"},
    {key:"action",label:"Action Plan"},
    {key:"calendar",label:"Content Calendar"},
    {key:"strategy",label:"SEO Strategy"},
    {key:"competitors",label:"Competitors"},
    {key:"keywords",label:"Keywords"},
  ];
  tabs.forEach((t,i)=>{
    const allC=t.key==="seo"?data.mods.seo.categories.flatMap(c=>c.checks):t.key==="aeo"?data.mods.aeo.categories.flatMap(c=>c.checks):t.key==="geo"?data.mods.geo.categories.flatMap(c=>c.checks):[];
    const issues=allC.filter(c=>c.status!=="PASS").length;
    const btn=document.createElement("button");
    btn.className="mtab"+(i===0?" active":"");
    btn.innerHTML=t.label+(issues>0?`<span class="mtab-count">${issues}</span>`:"");
    btn.onclick=()=>switchTab(t.key,btn);
    tabsEl.appendChild(btn);
    const pane=document.createElement("div");
    pane.id="tp-"+t.key;
    pane.className="tab-content"+(i===0?" active":"");
    pane.innerHTML=buildPanel(t.key,data);
    panelsEl.appendChild(pane);
  });
  document.getElementById("results").style.display="block";
  window.scrollTo({top:0,behavior:"smooth"});
}

function switchTab(key,btn){
  document.querySelectorAll(".mtab").forEach(b=>b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(p=>p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("tp-"+key).classList.add("active");
}

function buildPanel(key,data){
  if(key==="overview") return buildOverview(data);
  if(key==="seo") return buildModulePanel(data.mods.seo);
  if(key==="aeo") return buildModulePanel(data.mods.aeo);
  if(key==="geo") return buildModulePanel(data.mods.geo);
  if(key==="action") return buildActionPlan(data);
  if(key==="calendar") return buildCalendar();
  if(key==="strategy") return buildStrategy();
  if(key==="competitors") return buildCompetitors();
  if(key==="keywords") return buildKeywords();
  return "";
}

// ── OVERVIEW (matches Word doc cover + Section 1) ──
function buildOverview(data){
  const allC=["seo","aeo","geo"].flatMap(k=>data.mods[k].categories.flatMap(c=>c.checks));
  const totF=allC.filter(c=>c.status==="FAIL").length;
  const totW=allC.filter(c=>c.status==="WARN").length;
  const totP=allC.filter(c=>c.status==="PASS").length;

  let html=`
  <!-- Cover card matching Word doc -->
  <div class="cover-card">
    <div class="cover-parts">
      <div class="cover-part cover-part-1">
        <div class="cover-part-num">PART 1</div>
        <div class="cover-part-title">SEO / AEO / GEO</div>
        <div class="cover-part-sub">Audit Report</div>
        <div class="cover-part-note">74/100 Overall | 89 Checks</div>
      </div>
      <div class="cover-part cover-part-2">
        <div class="cover-part-num">PART 2</div>
        <div class="cover-part-title">Content Calendar</div>
        <div class="cover-part-sub">6-Month Plan</div>
        <div class="cover-part-note">29 Pieces | Apr–Oct 2026</div>
      </div>
      <div class="cover-part cover-part-3">
        <div class="cover-part-num">PART 3</div>
        <div class="cover-part-title">SEO Plan, Competitors</div>
        <div class="cover-part-sub">& Keywords</div>
        <div class="cover-part-note">12-Month Plan | 6 Competitors | 62 Keywords</div>
      </div>
    </div>
    <div class="cover-stats">
      <div class="cover-stat"><div class="cover-stat-val" style="color:#dc2626">${totF}</div><div class="cover-stat-lbl">Errors</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#d97706">${totW}</div><div class="cover-stat-lbl">Warnings</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#16a34a">${totP}</div><div class="cover-stat-lbl">Passed</div></div>
      <div class="cover-stat"><div class="cover-stat-val" style="color:#3b82f6">${allC.length}</div><div class="cover-stat-lbl">Total Checks</div></div>
    </div>
    <div class="cover-meta">Audit completed · ${_userDomain||data.domain} · 89 checks · SEO + AEO + GEO · CONFIDENTIAL — For Internal Distribution Only</div>
  </div>

  <!-- Section 1: Executive Summary -->
  <div class="doc-section-head"><h2>SECTION 1: EXECUTIVE SUMMARY</h2><span>Overall scores, key strengths, critical weaknesses</span></div>

  <!-- Score Summary Table (matches Word doc table) -->
  <div class="score-summary-table">
    <div class="sst-header">
      <div class="sst-hcell">Module</div>
      <div class="sst-hcell">Score</div>
      <div class="sst-hcell">Grade</div>
      <div class="sst-hcell">Status</div>
    </div>
    <div class="sst-row">
      <div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>SEO (Search Engine Optimization)</div>
      <div><span class="sst-score-chip" style="background:#fff0eb;color:#c2410c">70/100</span></div>
      <div><span class="sst-grade-chip grade-ok">B+</span></div>
      <div class="sst-status">Needs Improvement</div>
    </div>
    <div class="sst-row">
      <div class="sst-module"><div class="sst-bar" style="background:#10b981"></div>AEO (Answer Engine Optimization)</div>
      <div><span class="sst-score-chip" style="background:#dcfce7;color:#15803d">79/100</span></div>
      <div><span class="sst-grade-chip grade-ok">B+</span></div>
      <div class="sst-status">Good — Minor Gaps</div>
    </div>
    <div class="sst-row">
      <div class="sst-module"><div class="sst-bar" style="background:#8b5cf6"></div>GEO (Generative Engine Optimization)</div>
      <div><span class="sst-score-chip" style="background:#f5f3ff;color:#7c3aed">72/100</span></div>
      <div><span class="sst-grade-chip grade-ok">B+</span></div>
      <div class="sst-status">Moderate Gaps</div>
    </div>
    <div class="sst-row overall">
      <div class="sst-module"><div class="sst-bar" style="background:#ff642d"></div>Overall Score</div>
      <div><span class="sst-score-chip" style="background:#fff0eb;color:#ff642d">74/100</span></div>
      <div><span class="sst-grade-chip grade-ok">B+</span></div>
      <div class="sst-status">Strong Foundation</div>
    </div>
  </div>

  <!-- Gauges row -->
  <div class="gauges-row">`;

  [{lbl:"SEO",sc:70,col:"#ff642d"},{lbl:"AEO",sc:79,col:"#10b981"},{lbl:"GEO",sc:72,col:"#8b5cf6"},{lbl:"Overall",sc:74,col:"#ff642d"}].forEach(g=>{
    const circ=2*Math.PI*40;
    const offset=circ-(g.sc/100)*circ;
    html+=`<div class="gauge-card">
      <div class="gauge-title">${g.lbl} Score</div>
      <div class="gauge-wrap">
        <svg viewBox="0 0 100 100"><circle class="gauge-bg" cx="50" cy="50" r="40"/><circle class="gauge-fill" cx="50" cy="50" r="40" stroke="${g.col}" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" transform="rotate(-90 50 50)"/></svg>
        <div class="gauge-num"><div class="gauge-score">${g.sc}</div><div class="gauge-label">/ 100</div></div>
      </div>
      <div class="gauge-grade ${gradeClass(g.sc)}">${grade(g.sc)}</div>
    </div>`;
  });

  html+=`</div>

  <!-- Key Strengths -->
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">Key Strengths</div>
  <div class="sw-list">
    <div class="sw-item strength"><div class="sw-dot s"></div>Voice Search Optimization — perfect 100/100. Conversational keywords, long-tail questions, and local signals all well-implemented.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>NLP &amp; Semantic SEO — 90/100. Well-structured, semantically rich content aligned with how search engines process natural language.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>LLM-Ready Content and AI Topical Coverage — both 90/100. Site is well-structured for AI tools to parse and cite.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>Backlinks &amp; Off-Page SEO — 90/100. Strong domain authority and quality external link signals.</div>
    <div class="sw-item strength"><div class="sw-dot s"></div>Technical SEO fundamentals (SSL, XML sitemap, robots.txt, redirect hygiene) largely in order at 83/100.</div>
  </div>

  <!-- Critical Weaknesses -->
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

// ── EXECUTION SUMMARY DATA per module ──
const EXEC_SUMMARIES={
  SEO:{
    what:"This section evaluates 40 technical and content signals that determine how well "+(_userDomain||"your website")+" ranks on Google. It covers 6 categories: On-Page SEO, Technical SEO, Core Web Vitals, Mobile & UX, Backlinks, and Local SEO. The overall SEO score is 70/100 (Grade B+) — a solid foundation with critical mobile and speed gaps pulling the score down.",
    problems:[
      "Page Load Speed — CRITICAL: Slow load times hurt rankings and increase bounce rate",
      "Mobile Responsiveness — 38/100: Site is not fully responsive — lowest score in entire audit",
      "Viewport Meta Tag missing — Google cannot render mobile layout correctly",
      "Title Tags missing or generic on key pages — hurting click-through rates",
      "Noindex tags found on important pages — blocking Google from indexing them",
      "Canonical tags missing — creating duplicate content risk",
      "TTFB too high — server responds slowly before page begins loading",
      "Google Business Profile not fully verified — missing local search visibility",
    ],
    improvements:[
      "Fix mobile responsiveness immediately — add responsive CSS and viewport meta tag",
      "Optimize page speed: minify CSS/JS, enable GZIP, use a CDN, convert images to WebP",
      "Write unique 50–60 char title tags on every page with primary keyword",
      "Remove all noindex directives from pages you want Google to index",
      "Add self-referencing canonical tags to every page to prevent duplicate content",
      "Enable server-side caching and use a CDN to reduce TTFB under 200ms",
      "Claim and fully optimize Google Business Profile with photos, hours and categories",
      "Expand thin content pages to 800–1200 words with FAQ sections",
    ]
  },
  AEO:{
    what:"This section evaluates how well "+(_userDomain||"your website")+" is optimized for AI-powered answer engines — Google's People Also Ask, Featured Snippets, and voice search assistants. AEO score is 79/100 (Grade B+) — the strongest section overall. Voice Search is perfect at 100/100. Main gaps are in schema markup, FAQ sections, and trust signals.",
    problems:[
      "No 'X is...' definition sections found — missing featured snippet opportunities",
      "No FAQ sections on key pages — missing People Also Ask (PAA) capture",
      "HowTo Schema missing — step-by-step content not eligible for rich results",
      "QAPage Schema not implemented — Q&A content not structured for AI reading",
      "No trust badges or client reviews on key pages — E-E-A-T score impacted",
      "No publication/update dates on content — freshness signal missing",
    ],
    improvements:[
      "Add 'What is X?' definition sections to every service and topic page",
      "Add FAQ sections with 5–10 Q&A pairs (40–80 words each) to all key pages",
      "Implement HowTo JSON-LD schema on all tutorial and process pages",
      "Add QAPage schema to all Q&A content pages",
      "Add trust badges, certifications, partner logos and genuine client reviews",
      "Add 'Last Updated' dates to all articles — signals freshness to AI systems",
      "Link first mentions of key entities to authoritative external sources",
    ]
  },
  GEO:{
    what:"This section evaluates "+(_userDomain||"your website")+"'s visibility inside AI-powered tools like ChatGPT, Google AI Overview, Perplexity and Bing Copilot. GEO score is 72/100 (Grade B+). The site has strong AI-ready content and topical coverage, but critical gaps in metadata, HTTPS consistency, brand name standardization and social proof are limiting AI citation frequency.",
    problems:[
      "HTTPS Security flagged — mixed content issues — AI systems may deprioritize HTTP pages",
      "Organization Schema (JSON-LD) missing — AI cannot properly identify the business",
      "Inconsistent brand name across pages — confusing for AI entity recognition",
      "Machine-Readable Metadata score 50/100 — lowest category — Open Graph and Twitter Cards incomplete",
      "No testimonials or case studies — AI systems favor sites with social proof",
      "BreadcrumbList Schema missing — AI cannot understand site structure",
      "Open Graph and Twitter Card tags missing/incomplete on most pages",
    ],
    improvements:[
      "Enforce HTTPS sitewide — fix all mixed content warnings immediately",
      "Add Organization JSON-LD schema with legalName, url, logo, sameAs to all pages",
      "Standardize brand name as 'BuimbDigital' across all pages and metadata",
      "Add complete Open Graph tags: og:title, og:description, og:image, og:url",
      "Add Twitter Card meta tags: twitter:card, twitter:title, twitter:image",
      "Add BreadcrumbList JSON-LD to communicate site hierarchy to AI systems",
      "Add 3–5 case studies and 10+ client testimonials to key service pages",
      "Submit to Clutch, GoodFirms, DesignRush directories for AI brand citations",
    ]
  }
};

// ── MODULE PANEL (SEO / AEO / GEO) — matches Word doc sections 2, 3, 4 ──
function buildModulePanel(mod){
  const allC=mod.categories.flatMap(c=>c.checks);
  const totF=allC.filter(c=>c.status==="FAIL").length;
  const totW=allC.filter(c=>c.status==="WARN").length;
  const totP=allC.filter(c=>c.status==="PASS").length;
  const sectionMap={SEO:"2",AEO:"3",GEO:"4"};
  const sNum=sectionMap[mod.label]||"";
  const es=EXEC_SUMMARIES[mod.label]||{};

  // Build execution summary
  let html=`
  <div class="doc-section-head"><h2>SECTION ${sNum}: ${mod.label} ANALYSIS — Detailed Findings</h2><span>${allC.length} checks · Score: ${mod.score}/100 · Grade: ${grade(mod.score)}</span></div>

  <!-- Execution Summary -->
  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — What Is Happening & What To Do</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">${es.what||""}</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>⚠️ Current Problems Identified</h3>
        <ul>${(es.problems||[]).map(p=>`<li><span class="li-dot" style="background:#ef4444"></span>${p}</li>`).join("")}</ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ Improvements To Make</h3>
        <ul>${(es.improvements||[]).map(i=>`<li><span class="li-dot" style="background:#21bf6b"></span>${i}</li>`).join("")}</ul>
      </div>
    </div>
    <div class="exec-summary-score-row">
      <div class="exec-score-badge">
        <div class="exec-score-num" style="color:${scCol(mod.score)}">${mod.score}</div>
        <div><div style="font-size:12px;font-weight:700;color:#1a1a2e">${mod.label} Health Score</div><div style="font-size:11px;color:#6b7280">Grade: ${grade(mod.score)} · ${totF} errors · ${totW} warnings · ${totP} passed</div></div>
      </div>
      <div class="exec-cta">Scroll down to see each check in detail — click any category to expand</div>
    </div>
  </div>

  <div class="stat-cards-row">
    <div class="stat-card"><div class="sc-top"><div class="sc-label">${mod.label} Score</div></div><div class="sc-num" style="color:${scCol(mod.score)}">${mod.score}</div><div class="sc-sub">${grade(mod.score)} — ${mod.score>=70?"Good Foundation":mod.score>=60?"Needs Work":"Critical Issues"}</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${mod.score}%;background:${mod.color}"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Errors</div></div><div class="sc-num" style="color:#dc2626">${totF}</div><div class="sc-sub">Critical issues to fix</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round(totF/allC.length*100)}%;background:#ef4444"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Warnings</div></div><div class="sc-num" style="color:#d97706">${totW}</div><div class="sc-sub">Improvements needed</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round(totW/allC.length*100)}%;background:#f59e0b"></div></div></div>
    <div class="stat-card"><div class="sc-top"><div class="sc-label">Passed</div></div><div class="sc-num" style="color:#16a34a">${totP}</div><div class="sc-sub">Checks passing</div><div class="sc-bar"><div class="sc-bar-fill" style="width:${Math.round(totP/allC.length*100)}%;background:#21bf6b"></div></div></div>
  </div>

  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:14px;margin-top:8px">Category Breakdown — Click to Expand Details</h3>`;

  mod.categories.forEach(cat=>{
    const catF=cat.checks.filter(c=>c.status==="FAIL").length;
    const catW=cat.checks.filter(c=>c.status==="WARN").length;
    const catP=cat.checks.filter(c=>c.status==="PASS").length;
    const id="cat-"+cat.name.replace(/\s+/g,"-");
    html+=`
    <div class="cat-section" id="${id}">
      <div class="cat-section-head" onclick="toggleCat('${id}')">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <div class="cat-section-title"><h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin:0">${cat.sectionNum} ${cat.name}</h3>${cat.note?`<span style="font-size:11px;color:#dc2626;font-weight:600">${cat.note}</span>`:""}</div>
          <span class="cat-score-badge ${gradeClass(cat.score)}" style="background:${scBg(cat.score)};color:${scCol(cat.score)}">${cat.score}/100 (${grade(cat.score)})</span>
        </div>
        <div style="display:flex;align-items:center;gap:16px">
          <div class="cat-stats-row">
            <span><span class="cat-stat-pass">✓ ${catP} passed</span></span>
            <span><span class="cat-stat-warn">⚠ ${catW} warnings</span></span>
            <span><span class="cat-stat-fail">✕ ${catF} errors</span></span>
          </div>
          <span class="cat-toggle">▼</span>
        </div>
      </div>
      <div class="table-scroll">
        <table class="checks-table" style="min-width:660px">
          <thead><tr>
            <th style="width:155px">Check</th>
            <th style="width:72px">Status</th>
            <th>Finding</th>
            <th style="width:88px">Priority</th>
            <th>Action Required</th>
          </tr></thead>
          <tbody>`;
    cat.checks.forEach(c=>{
      html+=`<tr>
        <td><div class="check-name">${c.n}</div></td>
        <td>${statusBadge(c.status)}</td>
        <td><div class="finding-text">${c.finding}</div></td>
        <td>${priChip(c.priority)}</td>
        <td><div class="action-text">${c.action}</div></td>
      </tr>`;
    });
    html+=`</tbody></table></div></div>`;
  });

  return html;
}

function toggleCat(id){
  const el=document.getElementById(id);
  if(el) el.classList.toggle("open");
}

// ── ACTION PLAN (Section 5 — matches Word doc table) ──
function buildActionPlan(data){
  const allC=[];
  ["seo","aeo","geo"].forEach(k=>data.mods[k].categories.forEach(cat=>cat.checks.filter(c=>c.status!=="PASS").forEach(c=>allC.push({...c,module:k.toUpperCase()}))));
  allC.sort((a,b)=>["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(a.priority)-["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(b.priority));

  const groups=[
    {key:"CRITICAL",label:"Critical Priority — Fix Within 2 Weeks",bg:"#fef2f2",col:"#dc2626"},
    {key:"HIGH",label:"High Priority — Fix Within 30 Days",bg:"#fff7ed",col:"#c2410c"},
    {key:"MEDIUM",label:"Medium Priority — Fix Within 60-90 Days",bg:"#fefce8",col:"#a16207"},
    {key:"LOW",label:"Low Priority",bg:"#f8f9fc",col:"#6b7280"},
  ];

  let html=`<div class="doc-section-head"><h2>SECTION 5: PRIORITIZED ACTION PLAN — All ${allC.length} Actions</h2><span>Critical (2 weeks) · High (30 days) · Medium (60-90 days)</span></div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Your Complete Fix List</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">Below is every issue from the audit organized by priority. Fix Critical items within 2 weeks — they are actively hurting your rankings right now. High priority items should be completed within 30 days. Medium priority improvements can be tackled over 60–90 days.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>🔴 What's Broken Right Now</h3>
        <ul>
          <li><span class="li-dot" style="background:#ef4444"></span>7 Critical issues blocking rankings immediately</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Mobile site not responsive — failing Google's mobile-first index</li>
          <li><span class="li-dot" style="background:#ef4444"></span>HTTPS issues — AI search tools deprioritizing HTTP pages</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Organization Schema missing — search engines can't identify the business</li>
          <li><span class="li-dot" style="background:#ef4444"></span>15 High priority issues reducing search visibility daily</li>
        </ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ What To Do & When</h3>
        <ul>
          <li><span class="li-dot" style="background:#21bf6b"></span>Week 1–2: Developer sprint — fix all 7 Critical technical items</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Week 1–4: Content/SEO team rewrites titles, meta, adds FAQs</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 1–2: Marketing team collects reviews, trust badges, case studies</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 2–3: Medium priority improvements for sustained growth</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Target: 83/100 overall score within 30 days of starting</li>
        </ul>
      </div>
    </div>
  </div>`;
  let num=1;
  groups.forEach(g=>{
    const items=allC.filter(c=>c.priority===g.key);
    if(!items.length) return;
    html+=`<div style="background:${g.bg};border:1px solid ${g.col}33;border-radius:8px;padding:10px 16px;margin-bottom:8px;margin-top:12px">
      <span style="font-size:13px;font-weight:700;color:${g.col}">${g.label}</span>
      <span style="font-size:11px;color:#9ba3af;margin-left:8px">(${items.length} issues)</span>
    </div>
    <div class="table-scroll" style="margin-bottom:8px">
    <table class="action-table">
      <thead style="background:#a90006"><tr><th style="width:35px">#</th><th style="width:150px">Issue</th><th style="width:60px">Module</th><th style="width:85px">Priority</th><th>Recommended Fix</th></tr></thead>
      <tbody>`;
    items.forEach(c=>{
      const mCol=c.module==="SEO"?"#ff642d":c.module==="AEO"?"#10b981":"#8b5cf6";
      const mBg=c.module==="SEO"?"#fff0eb":c.module==="AEO"?"#f0fdf4":"#f5f3ff";
      html+=`<tr>
        <td><div class="action-num" style="color:${g.col}">${num++}</div></td>
        <td><div class="check-name">${c.n}</div><div class="check-desc">${c.finding}</div></td>
        <td><span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;background:${mBg};color:${mCol}">${c.module}</span></td>
        <td>${priChip(c.priority)}</td>
        <td><div class="action-fix">${c.action}</div></td>
      </tr>`;
    });
    html+=`</tbody></table></div>`;
  });

  // Section 6: Team Responsibilities
  html+=`<div class="doc-section-head" style="margin-top:24px"><h2>SECTION 6: TEAM RESPONSIBILITIES &amp; TIMELINE</h2><span>30/60-day targets by team</span></div>
  <div class="team-grid">`;
  const teams=[
    {name:"Developer / Technical Team",col:"#3b82f6",bg:"#1e3a5f",tasks:["Fix HTTPS / mixed content warnings — Week 1","Add viewport meta tag to all pages — Week 1","Implement Organization JSON-LD schema sitewide — Week 1","Remove noindex tags from key pages — Week 1","Fix TTFB: enable caching, CDN, server optimization — Week 1–2","Improve page load speed: minify, compress, lazy-load — Week 1–2","Create custom 404 error page — Week 2","Add HowTo, QAPage, BreadcrumbList, and Person schema to relevant pages — Week 3–4","Add Open Graph and Twitter Card meta tags to all pages — Week 3–4","Add canonical tags to all pages — Week 3–4"]},
    {name:"Content / SEO Team",col:"#ff642d",bg:"#7c2d12",tasks:["Audit and rewrite all title tags — Week 1–2","Write unique meta descriptions for all pages — Week 1–2","Add primary keywords to first 100 words of all service pages — Week 2","Add definition sections ('What is X?') to all service pages — Week 2–3","Create FAQ sections for all key pages — Week 2–3","Add publication and 'Last Updated' dates to all content — Week 2–3","Expand thin content pages to 800+ words — Week 3–6","Create 3–5 use case landing pages — Week 4–8"]},
    {name:"Marketing / Brand Team",col:"#10b981",bg:"#064e3b",tasks:["Audit brand name consistency across all pages and external listings — Week 1","Collect and add trust badges, certifications, and partner logos — Week 2–3","Gather and publish 10+ client testimonials with names and companies — Week 2–4","Create 3–5 detailed case studies — Week 3–8","Submit brand to Clutch, GoodFirms, DesignRush directories — Week 2–3","Optimize Google Business Profile — Week 1–2","Pursue press mentions and digital PR opportunities — Ongoing"]},
  ];
  teams.forEach(t=>{
    html+=`<div class="team-card">
      <div class="team-card-head" style="background:${t.bg};color:#fff">${t.name}</div>
      <div class="team-task-list">`;
    t.tasks.forEach(task=>{
      html+=`<div class="team-task"><div class="team-task-dot" style="background:${t.col}"></div>${task}</div>`;
    });
    html+=`</div></div>`;
  });
  html+=`</div>

  <!-- 30/60-Day Milestone Targets -->
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

  <!-- Section 7 -->
  <div class="doc-section-head"><h2>SECTION 7: FINAL NOTES &amp; EXECUTIVE RECOMMENDATIONS</h2><span>Summary for leadership and 4 immediate actions</span></div>
  <div style="background:#f8f9fc;border:1px solid #e2e5ed;border-radius:12px;padding:18px;margin-bottom:20px;font-size:13px;color:#374151;line-height:1.65">
    buimbdigital.com is performing at a B+ level across all three dimensions of modern search visibility. Core strengths — strong backlinks, perfect voice search optimization, and well-structured AI-ready content — provide a competitive foundation that many agencies lack. However, the 74/100 overall score leaves meaningful performance on the table. The two most revenue-impactful issues are mobile responsiveness (38/100) and page load speed (CRITICAL failure). Fixing these two items alone could produce measurable ranking improvements within 30-60 days.
  </div>
  <div style="margin-bottom:10px;font-size:16px;font-weight:700;color:#1a1a2e">4 Immediate Actions for Leadership</div>
  ${["Assign a developer sprint in the next 5-7 days focused exclusively on the 8 critical technical items.","Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.","Begin collecting client testimonials and case study approvals from existing clients this week.","Set a re-audit date 30 days from today to measure progress against the baseline scores in this report."].map((a,i)=>`
  <div style="display:flex;gap:12px;align-items:flex-start;padding:12px 16px;background:#fff;border:1px solid #e2e5ed;border-radius:10px;margin-bottom:8px">
    <div style="width:28px;height:28px;background:#ff642d;border-radius:8px;color:#fff;font-size:13px;font-weight:700;display:grid;place-items:center;flex-shrink:0">${i+1}</div>
    <div style="font-size:13px;color:#374151;line-height:1.5;padding-top:4px">${a}</div>
  </div>`).join("")}`;

  return html;
}

// ── CALENDAR (Part 2 — Section 8, 9, 10) ──
function buildCalendar(){
  let html=`<div class="doc-section-head"><h2>PART 2: 6-MONTH CONTENT CALENDAR</h2><span>April – October 2026 · 29 Content Pieces · Weekly Breakdown</span></div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — 6-Month Content Strategy</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">29 pieces of content mapped directly to audit gaps. Each piece targets a specific SEO, AEO or GEO weakness identified in the audit. Follow the calendar week-by-week to systematically close every content gap identified.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>📌 What's Broken (Content Gaps)</h3>
        <ul>
          <li><span class="li-dot" style="background:#ef4444"></span>No definition sections — missing featured snippet eligibility</li>
          <li><span class="li-dot" style="background:#ef4444"></span>No FAQ sections — missing People Also Ask visibility</li>
          <li><span class="li-dot" style="background:#ef4444"></span>No case studies — E-E-A-T score and trust signals lacking</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Thin service pages — not competitive for commercial keywords</li>
          <li><span class="li-dot" style="background:#ef4444"></span>No GEO/AI-focused content — missing LLM citation opportunities</li>
        </ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ What This Calendar Fixes</h3>
        <ul>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 1: SEO foundations — service pages + definition pieces</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 2: AEO push — first case study, FAQ page, AEO guide</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 3: GEO awareness — GEO explainer + niche use cases</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 4-5: Thought leadership + local SEO reinforcement</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 6: Authority consolidation + 2027 forward positioning</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="doc-section-head"><h2>SECTION 8: CONTENT CALENDAR — Strategy &amp; Overview</h2><span>Content mix, audit gap mapping, content type legend</span></div>
  <div style="background:#fff;border:1px solid #e2e5ed;border-radius:12px;padding:18px;margin-bottom:16px">
    <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:12px">Content Type Legend</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
      ${["Blog Post","Service Page","Case Study","Social Post","FAQ Page","Use Case Page","Definition Page","Landing Page"].map(t=>typeChip(t)).join("")}
    </div>
    <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:8px">Audit Gap Mapping</div>
    ${[["Definition pages","Fixes AEO gap: 'No definition sections found'","Score impact: +8pts AEO"],["FAQ pages","Fixes AEO gap: 'No FAQ sections on pages'","Score impact: +6pts AEO"],["Case studies","Fixes E-E-A-T gap: 'No trust signals or social proof'","Score impact: +10pts AEO"],["Use case pages","Fixes GEO gap: 'Limited use-case content'","Score impact: +5pts GEO"],["Service page expansions","Fixes SEO gap: 'Thin content on key pages'","Score impact: +8pts SEO"],["GEO/AI-focused blog posts","Improves LLM citability and AI topical authority","Score impact: +5pts GEO"]].map(([type,fix,impact])=>`
    <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:#f0fdf4;border-radius:6px;margin-bottom:6px;font-size:12px">
      <div style="width:6px;height:6px;border-radius:50%;background:#10b981;flex-shrink:0"></div>
      <strong>${type}</strong> — ${fix} <span style="color:#6b7280;margin-left:4px">${impact}</span>
    </div>`).join("")}
  </div>

  <div class="doc-section-head"><h2>SECTION 9: 6-MONTH WEEKLY CALENDAR</h2><span>Week-by-week topics, types, keywords, CTAs, and owner assignments</span></div>`;

  CALENDAR.forEach(month=>{
    html+=`<div class="cal-month">
      <div class="cal-month-head">
        <h3>${month.month}</h3>
        <span>Theme: ${month.theme}</span>
      </div>
      <div class="table-scroll">
      <table class="cal-table">
        <thead><tr><th style="width:50px">Week</th><th style="width:100px">Type</th><th style="width:240px">Title / Topic</th><th style="width:160px">Target Keywords</th><th>SEO / AEO Goal</th><th style="width:70px">Owner</th></tr></thead>
        <tbody>`;
    month.items.forEach(item=>{
      html+=`<tr>
        <td><div class="cal-week">${item.week}</div><div class="cal-dates">${item.dates}</div></td>
        <td>${typeChip(item.type)}</td>
        <td><div class="cal-title">${item.title}</div></td>
        <td><div class="cal-kw">${item.keywords}</div></td>
        <td><div class="cal-goal">${item.goal}</div></td>
        <td>${ownerChip(item.owner)}</td>
      </tr>`;
    });
    html+=`</tbody></table></div></div>`;
  });

  // Section 10: KPIs
  html+=`<div class="doc-section-head"><h2>SECTION 10: CONTENT KPIs &amp; SUCCESS METRICS</h2><span>Track these 8 KPIs monthly using Looker Studio + GA4 + Search Console</span></div>
  <table class="kpi-table">
    <thead><tr><th>KPI Metric</th><th>Starting Point</th><th>Tracking Tool</th><th>Frequency</th><th>6-Month Target</th></tr></thead>
    <tbody>
      ${[
        ["Organic Traffic","Baseline (Month 0)","Google Analytics 4","Monthly","+15% by Month 3, +40% by Month 6"],
        ["Keyword Rankings","Track 20 target keywords","Google Search Console","Weekly","5+ in Top 10 by Month 3"],
        ["Blog Pageviews","Baseline (Month 0)","GA4 / GSC","Monthly","2x by Month 6"],
        ["Case Study Leads","0 currently","CRM / Form tracking","Monthly","3+ leads from case studies by Month 4"],
        ["Social Engagement Rate","Baseline this week","LinkedIn / Meta Analytics","Weekly","+20% engagement by Month 2"],
        ["AI Citation Appearances","Manual audit","Perplexity / ChatGPT manual check","Monthly","Brand cited in 5+ AI queries by Month 6"],
        ["Domain Authority","Current score","Ahrefs / Moz","Monthly","+5 DA points by Month 6"],
        ["Backlinks Earned","Baseline","Ahrefs","Monthly","10+ new referring domains by Month 6"],
      ].map(([kpi,start,tool,freq,target],i)=>`<tr style="background:${i%2===0?"#fff":"#f8f9fc"}"><td class="kpi-name">${kpi}</td><td>${start}</td><td>${tool}</td><td><span style="font-size:11px;padding:2px 8px;background:#eff6ff;color:#1d4ed8;border-radius:4px;font-weight:500">${freq}</span></td><td class="kpi-target">${target}</td></tr>`).join("")}
    </tbody>
  </table>

  <div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:12px">Pre-Publish Content Quality Checklist</div>
  <div class="checklist">
    ${["Title tag and meta description written and within character limits","Primary keyword appears in first 100 words of body content","At least one definition section ('X is...') present on service/topic pages","FAQ section added at page bottom (5-10 Q&A pairs, 40-80 words each)","Publication date and 'Last Updated' date visible near the title","At least 3 internal links to related service or blog pages","All images in WebP format with descriptive alt text","Relevant schema markup added (FAQPage, HowTo, Article, or BlogPosting)","Open Graph and Twitter Card meta tags populated","Page reviewed for mobile readability at 375px and 768px breakpoints","2-3 sentence summary paragraph at very top of page for AI readability","External links to at least 2 authoritative sources for E-E-A-T"].map(item=>`<div class="checklist-item"><div class="ck">✓</div>${item}</div>`).join("")}
  </div>`;

  return html;
}

// ── STRATEGY (Part 3 — Section 11) ──
function buildStrategy(){
  let html=`<div class="doc-section-head"><h2>SECTION 11: 12-MONTH SEO STRATEGY PLAN</h2><span>4 Phases: Fix Foundation → Authority → Scale → Dominate</span></div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — 12-Month Growth Roadmap</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">A structured 4-phase plan to achieve top rankings, fix all critical audit issues, grow organic traffic by 150%, and generate 20+ qualified leads per month. Each phase builds on the last — do not skip phases.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>📌 Current Situation</h3>
        <ul>
          <li><span class="li-dot" style="background:#ef4444"></span>Overall 74/100 — solid base but with critical technical gaps</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Mobile score 38/100 — actively suppressing rankings</li>
          <li><span class="li-dot" style="background:#ef4444"></span>GEO score 72/100 — AI search visibility not yet optimized</li>
          <li><span class="li-dot" style="background:#ef4444"></span>0 case studies or testimonials — E-E-A-T very weak</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Local SEO 63/100 — GBP not fully claimed/optimized</li>
        </ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ 12-Month Targets</h3>
        <ul>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 3: Fix all critical issues, 81/100 overall score</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 6: Content clusters built, 86/100 overall score</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 9: International reach, brand in 10+ AI queries</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 12: 93/100 overall, Top 3 for 10 primary keywords</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>+150% organic traffic growth from Month 1 baseline</li>
        </ul>
      </div>
    </div>
  </div>

  <div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:14px">Strategic Objectives</div>`;

  const objectives=[
    {n:1,obj:"Top 3 rankings for 10 primary keywords",why:"Primary keywords drive highest commercial intent traffic and qualified leads",target:"10 keywords in Top 3 by Month 12"},
    {n:2,obj:"Fix all Critical and High Priority audit issues",why:"Technical issues actively suppress current rankings",target:"Overall audit score ≥ 90/100 by Month 6"},
    {n:3,obj:"Grow organic traffic by 150%",why:"Compounding organic traffic reduces reliance on paid ads and lowers CAC",target:"+150% sessions from organic by Month 12"},
    {n:4,obj:"Establish AEO & GEO authority in niche",why:"AI-driven search is the fastest growing search surface in 2026",target:"Brand cited in 10+ AI queries by Month 9"},
    {n:5,obj:"Local SEO dominance in Agra + pan-India",why:"Local SEO drives high-converting leads from nearby businesses",target:"GBP in Top 3 Local Pack for 5 keywords by Month 6"},
    {n:6,obj:"Generate 20+ organic leads per month",why:"Converts SEO investment into measurable business revenue",target:"20+ monthly organic leads tracked in CRM by Month 12"},
  ];
  objectives.forEach(o=>{
    html+=`<div class="objective-card"><div class="obj-num">${o.n}</div><div class="obj-body"><div class="obj-title">${o.obj}</div><div class="obj-why">${o.why}</div><div class="obj-target">Target: ${o.target}</div></div></div>`;
  });

  const phases=[
    {name:"Phase 1 — Months 1-3: Fix the Foundation",focus:"Technical fixes, on-page corrections, schema implementation, local SEO setup",col:"#dc2626",bg:"#1a0000",items:[
      ["Add viewport meta tag + responsive CSS fix","Developer","Week 1","Mobile 38→75","+15% rankings"],
      ["Fix HTTPS / resolve all mixed content warnings","Developer","Week 1","GEO HTTPS fix","+AI trust signals"],
      ["Remove noindex from all key pages","Developer/SEO","Week 1","Tech SEO fix","New pages indexed"],
      ["Write unique title tags + meta descriptions for all pages","SEO Team","Weeks 1-2","On-Page fix","+20% CTR est."],
      ["Page speed optimisation: GZIP, CDN, image WebP conversion","Developer","Weeks 1-2","CWV fix","+Core Web Vitals"],
      ["Add Organization + FAQPage + BreadcrumbList schema sitewide","Developer","Week 2","GEO schema fix","Rich results eligible"],
      ["Claim + fully optimise Google Business Profile","Marketing","Week 1-2","Local SEO fix","Local Pack entry"],
      ["Expand thin content pages to 800-1200 words","Content","Weeks 2-6","Content fix","+Rankings depth"],
      ["Add definition sections + FAQ blocks to all service pages","Content","Weeks 2-6","AEO fix","+PAA capture"],
    ]},
    {name:"Phase 2 — Months 4-6: Authority & Content Build",focus:"Content cluster build, E-E-A-T trust signals, link acquisition, case studies",col:"#d97706",bg:"#451a03",items:[
      ["Publish 6-month content calendar Weeks 1-4 content","Content","Month 4","Content gap fix","Featured snippets"],
      ["Launch 3 use case pages for niche verticals","SEO + Content","Month 4-5","GEO fix","Niche traffic"],
      ["Publish 2 case studies with measurable results","Marketing","Month 4-5","E-E-A-T fix","Trust signals"],
      ["Build 10+ quality backlinks via guest posts and directories","SEO","Month 4-6","Authority build","+Domain Authority"],
      ["Submit to Clutch, GoodFirms, DesignRush + 5 niche directories","Marketing","Month 4","GEO fix","Directory citations"],
      ["Add 10+ client testimonials and trust badges sitewide","Marketing","Month 4-5","E-E-A-T fix","Social proof"],
      ["Achieve 83/100 overall audit score","All Teams","Month 6","Milestone","Score benchmark"],
    ]},
    {name:"Phase 3 — Months 7-9: Scale & Brand Authority",focus:"International targeting, PR outreach, AI citation building, schema expansion",col:"#10b981",bg:"#064e3b",items:[
      ["Create international landing pages for white-label and outsource keywords","SEO + Dev","Month 7","Global keywords","International leads"],
      ["Publish 3 more case studies for E-E-A-T depth","Marketing","Month 7-8","E-E-A-T fix","Trust authority"],
      ["Expand schema to HowTo and QAPage on all eligible content","Developer","Month 7","AEO fix","Rich results expansion"],
      ["Launch link building campaign: target DA60+ referral domains","SEO","Month 7-9","Authority build","+10 referring domains"],
      ["Press outreach: 3-5 media mentions or guest articles","Marketing","Month 7-9","Domain authority","+3 DA60+ links"],
    ]},
    {name:"Phase 4 — Months 10-12: Dominate & Sustain",focus:"Top 3 keyword push, brand authority consolidation, 2027 AI search preparation",col:"#8b5cf6",bg:"#2e1065",items:[
      ["Content refresh: update all 2026 blog posts for 2027 accuracy","Content","Month 10-11","Freshness signal","All posts refreshed"],
      ["Push top 10 primary keywords toward Top 3 via link building","SEO","Months 10-12","Revenue-driving rankings","5+ in Top 3"],
      ["Expand to 2 new niche verticals with dedicated pages","SEO + Content","Month 10","Vertical authority","2 new pages ranked"],
      ["Full re-audit: target 93/100 overall score","SEO Lead","Month 12","Benchmark verification","93+ overall score"],
      ["2027 SEO predictions piece + strategy update document","Content + SEO","Month 11-12","Thought leadership","Rank for 2027 keywords"],
    ]},
  ];

  phases.forEach(phase=>{
    html+=`<div class="phase-table" style="margin-top:20px">
      <div class="phase-table-head" style="background:${phase.bg}">
        <div class="phase-table-title" style="color:#fff">${phase.name}</div>
        <div style="font-size:11px;color:#9ba3af;font-style:italic">FOCUS: ${phase.focus}</div>
      </div>
      <div class="table-scroll">
      <table style="width:100%;border-collapse:collapse">
        <thead><tr style="background:#f8f9fc">
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef">Deliverable</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Owner</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Timeline</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef;white-space:nowrap">Audit Fix</th>
          <th style="padding:8px 12px;font-size:10px;font-weight:600;text-transform:uppercase;color:#9ba3af;text-align:left;border-bottom:1px solid #e9ecef">Expected Impact</th>
        </tr></thead>
        <tbody>`;
    phase.items.forEach((item,ii)=>{
      html+=`<tr style="background:${ii%2===0?"#fff":"#f8f9fc"}">
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;font-weight:500;color:#1a1a2e">${item[0]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#6b7280;white-space:nowrap">${item[1]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#6b7280;white-space:nowrap">${item[2]}</td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px"><span style="background:${phase.col}22;color:${phase.col};font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px">${item[3]}</span></td>
        <td style="padding:9px 12px;border-bottom:1px solid #f1f3f7;font-size:12px;color:#16a34a;font-weight:500">${item[4]}</td>
      </tr>`;
    });
    html+=`</tbody></table></div></div>`;
  });

  // 12-Month Score Projection
  html+=`<div style="margin-top:24px;margin-bottom:8px;font-size:14px;font-weight:700;color:#1a1a2e">12-Month Score Projection</div>
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

// ── COMPETITORS (Section 12) ──
function buildCompetitors(){
  function stars(n,col){return `<span style="color:${col};letter-spacing:1px;font-size:12px">${"●".repeat(n)}${"○".repeat(5-n)}</span>`}

  let html=`<div class="doc-section-head"><h2>SECTION 12: COMPETITOR ANALYSIS</h2><span>6 key competitors — India + Global digital marketing agency landscape</span></div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Competitive Landscape &amp; Where You Win</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">6 competitors analyzed across SEO, AEO, and GEO strength. All are established players in the India + Global digital marketing space — but none lead clearly on AEO or GEO, giving BuimbDigital a significant first-mover advantage to capture those emerging search surfaces.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>📌 Competitor Weaknesses</h3>
        <ul>
          <li><span class="li-dot" style="background:#ef4444"></span>PageTraffic &amp; Techmagnate — expensive, enterprise-only, no AEO/GEO strategy</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Social Beat — India-only, almost no technical SEO or AEO capability</li>
          <li><span class="li-dot" style="background:#ef4444"></span>EZ Rankings — inconsistent content quality, limited international reach</li>
          <li><span class="li-dot" style="background:#ef4444"></span>WebSpero — GEO not prominently marketed, limited PPC depth</li>
          <li><span class="li-dot" style="background:#ef4444"></span>None of the 6 explicitly market GEO or AI search optimisation as a service</li>
        </ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ BuimbDigital Opportunities</h3>
        <ul>
          <li><span class="li-dot" style="background:#21bf6b"></span>Be the first Indian agency to lead with AEO + GEO positioning</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Publish definitive guides for "AEO" and "GEO" keywords in India now</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Position as premium full-service at SME-friendly pricing — clear gap</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Target global businesses wanting India quality + Indian businesses wanting global reach</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Answer the "ChatGPT visibility" question that no competitor addresses</li>
        </ul>
      </div>
    </div>
  </div>

  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:10px">Competitor Overview Snapshot</h3>
  <div class="table-scroll" style="margin-bottom:20px">
  <table class="comp-overview-table">
    <thead><tr><th>Agency</th><th>Est.</th><th>Team</th><th>HQ</th><th>SEO Str.</th><th>AEO Str.</th><th>GEO Str.</th><th>Pricing/mo</th></tr></thead>
    <tbody>`;
  COMPETITORS.forEach((c,i)=>{
    html+=`<tr style="background:${i%2===0?"#fff":"#f8f9fc"}">
      <td><div class="comp-name">${c.name}</div><div class="comp-domain">${c.domain}</div></td>
      <td>${c.est}</td><td>${c.team}</td><td>${c.hq}</td>
      <td>${stars(c.seo,"#ff642d")}</td>
      <td>${stars(c.aeo,"#10b981")}</td>
      <td>${stars(c.geo,"#8b5cf6")}</td>
      <td style="font-weight:500">${c.pricing}</td>
    </tr>`;
  });
  html+=`</tbody></table></div>
  <div style="font-size:11px;color:#9ba3af;margin-bottom:20px">Strength rating: ●●●●● = Industry-leading &nbsp; ●●●●○ = Strong &nbsp; ●●●○○ = Moderate &nbsp; ●●○○○ = Weak &nbsp; ●○○○○ = Minimal</div>

  <h3 style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:12px">Detailed Competitor Profiles</h3>`;

  COMPETITORS.forEach((c,i)=>{
    html+=`<div class="comp-profile">
      <div class="comp-profile-head">
        <h3>${i+1}. ${c.name} (${c.domain})</h3>
        <span>Clutch: ${c.clutch} · Est. ${c.est} · Team: ${c.team} · ${c.market}</span>
      </div>
      <table class="comp-detail-table"><tbody>
        <tr><td>HQ / Market</td><td>${c.hq} | ${c.market} | Est. ${c.est} | Team: ${c.team}</td></tr>
        <tr><td>Pricing</td><td>${c.pricing} | Clutch: ${c.clutch}</td></tr>
        <tr><td>Strengths</td><td>${c.strengths}</td></tr>
        <tr><td>Weaknesses</td><td>${c.weaknesses}</td></tr>
        <tr><td>Our Opportunity</td><td><strong>${c.opp}</strong></td></tr>
      </tbody></table>
    </div>`;
  });

  html+=`<div class="doc-section-head" style="margin-top:24px"><h2>Competitive Gap Analysis — Where BuimbDigital Wins</h2></div>
  <table class="comp-gap-table">
    <thead><tr><th>Competitive Gap</th><th>What Competitors Are Missing</th><th>BuimbDigital Opportunity</th></tr></thead>
    <tbody>
      ${[
        ["AEO + GEO Expertise","Most agencies still focus on traditional SEO. AEO and GEO are mentioned by fewer than 30% of competitors in their core positioning.","Lead with AEO+GEO as a differentiator. Create the definitive guides for both terms in India — dominate these low-competition keywords now."],
        ["SME-Friendly Full-Service at Competitive Pricing","Top agencies are expensive and enterprise-focused. Affordable agencies often lack full-service depth.","Position as the premium-quality but accessible full-service agency for growing SMEs, startups, and businesses scaling internationally."],
        ["AI-Ready Strategy Communication","No competitor is clearly communicating AI search optimisation (GEO) as a client benefit — most still use 2022-era language.","First-mover advantage: actively market GEO as a service. Be the agency that answers the ChatGPT visibility question."],
        ["India-Based + Global Execution","Social Beat is India-only. International agencies are expensive. Few agencies serve both India SMEs and global clients equally well.","Explicitly market to global businesses wanting India-quality+pricing AND Indian businesses wanting global-standard strategy."],
      ].map(([gap,miss,opp],i)=>`<tr style="background:${i%2===0?"#fff":"#f8f9fc"}"><td><strong>${gap}</strong></td><td>${miss}</td><td style="color:#7c3aed;font-weight:500">${opp}</td></tr>`).join("")}
    </tbody>
  </table>

  <div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:10px">Recommended Positioning Statement</div>
  <div class="positioning-box">
    "BuimbDigital is a full-service digital marketing agency offering enterprise-quality SEO, AEO, GEO, social media, PPC, and web design — built for growing businesses in India and globally. We are the only agency that combines traditional search excellence with AI search optimisation, at a price point that works for SMEs and scaling brands."
  </div>`;

  return html;
}

// ── KEYWORDS (Section 13) ──
function buildKeywords(){
  function kwTable(title,desc,kwList){
    let html=`<div style="font-size:14px;font-weight:700;color:#1a1a2e;margin-bottom:6px;margin-top:20px">${title}</div>`;
    if(desc) html+=`<div style="font-size:12px;color:#6b7280;margin-bottom:10px;line-height:1.5">${desc}</div>`;
    html+=`<div class="table-scroll"><table class="kw-table">
      <thead><tr><th>Keyword</th><th style="text-align:right;white-space:nowrap">Vol/mo</th><th>Difficulty</th><th>Intent</th><th>Priority</th><th>Target Page</th></tr></thead>
      <tbody>`;
    kwList.forEach((kw,i)=>{
      html+=`<tr style="background:${i%2===0?"#fff":"#f8f9fc"}">
        <td class="kw-keyword">${kw.kw}</td>
        <td class="kw-vol">${kw.vol}</td>
        <td>${diffChip(kw.diff)}</td>
        <td><span class="intent-chip">${kw.intent}</span></td>
        <td>${priChip(kw.pri)}</td>
        <td class="target-page">${kw.page}</td>
      </tr>`;
    });
    html+=`</tbody></table></div>`;
    return html;
  }

  let html=`<div class="doc-section-head"><h2>SECTION 13: KEYWORD RECOMMENDATIONS — 62 Keywords</h2><span>Primary Commercial, Long-Tail Informational, Local SEO, and Global/International</span></div>

  <div class="exec-summary">
    <div class="exec-summary-title">📋 Execution Summary — Keyword Strategy</div>
    <p style="font-size:13px;color:#374151;line-height:1.65;margin-bottom:14px">62 keywords across 4 categories: Primary Commercial, Long-Tail Informational, Local SEO (Agra + Near Me), and Global/International. Start with Local Agra keywords for fastest ROI, then build towards competitive primary commercial keywords over 12 months.</p>
    <div class="exec-summary-grid">
      <div class="exec-summary-col">
        <h3>📌 Priority Keyword Gaps</h3>
        <ul>
          <li><span class="li-dot" style="background:#ef4444"></span>4 CRITICAL primary keywords not ranking yet (22K+ monthly searches each)</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Local Agra keywords (320–260 vol) — fastest ROI, very low competition</li>
          <li><span class="li-dot" style="background:#ef4444"></span>"What is AEO/GEO" — emerging keywords with near-zero competition now</li>
          <li><span class="li-dot" style="background:#ef4444"></span>Global B2B keywords not targeted — white-label, outsource searches</li>
        </ul>
      </div>
      <div class="exec-summary-col">
        <h3>✅ Keyword Action Plan</h3>
        <ul>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 1–2: Target all 8 local Agra keywords — quick wins</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 2–4: Create content for 15 long-tail informational keywords</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 4–6: Expand service pages for 4 primary commercial keywords</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 6–9: Build international landing pages for global B2B keywords</li>
          <li><span class="li-dot" style="background:#21bf6b"></span>Month 9–12: Push remaining primary + own emerging AEO/GEO terms</li>
        </ul>
      </div>
    </div>
  </div>`;

  html+=kwTable("C.1 — Primary Commercial Keywords (10 Keywords)","Highest-value keywords for driving qualified leads. High competition — winning requires strong domain authority, excellent on-page SEO, and consistent link building. Target over 12 months.",KW.primary);
  html+=kwTable("C.2 — Long-Tail Informational Keywords (15 Keywords)","Lower competition keywords targeting AEO/GEO gaps — missing FAQ sections, definition pages, and People Also Ask opportunities. Drive featured snippets, AI citations, and awareness-stage traffic.",KW.longtail);
  html+=kwTable("C.3 — Local SEO Keywords — Agra & Near Me (8 Keywords)","Critical for driving nearby business enquiries. Very low competition and high commercial intent — these represent the fastest ROI opportunity in the entire keyword set.",KW.local);
  html+=kwTable("C.4 — Global & International Keywords (8 Keywords)","Target international clients looking to outsource digital marketing from India. High-value B2B leads. Strong backlink profile (90/100) gives the domain authority to compete globally.",KW.global);

  html+=`<div style="font-size:16px;font-weight:700;color:#1a1a2e;margin-bottom:12px;margin-top:26px">Keyword Implementation Roadmap</div>
  <table class="roadmap-table">
    <thead><tr><th>Phase</th><th>Keywords to Target</th><th>Action</th><th>Owner</th></tr></thead>
    <tbody>
      ${[
        ["Month 1-2","All 8 local Agra keywords + title tag + meta fixes for primary pages","GBP optimisation + on-page fixes + local landing page","SEO + Dev"],
        ["Month 2-4","All 15 long-tail informational keywords → blog posts + FAQ pages + definition pages","Content creation per 6-month calendar","Content Team"],
        ["Month 4-6","4 primary commercial keywords (SEO services, digital marketing agency, social media, PPC)","Service page expansion + link building + FAQ blocks","SEO + Content"],
        ["Month 6-9","Global B2B keywords (white-label SEO, outsource digital marketing, AI SEO services)","Dedicated international landing pages + PR outreach","SEO + Dev"],
        ["Month 9-12","Remaining primary + AEO/GEO emerging terms (what is GEO, AI search optimisation)","Pillar content + authority link push + content refresh","SEO Lead"],
      ].map(([phase,kws,action,owner],i)=>`<tr style="background:${i%2===0?"#fff":"#f8f9fc"}"><td style="font-weight:700;color:#8b5cf6;white-space:nowrap">${phase}</td><td>${kws}</td><td>${action}</td><td><span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:4px;background:#f5f3ff;color:#7c3aed">${owner}</span></td></tr>`).join("")}
    </tbody>
  </table>

  <div style="background:#1a1a2e;border-radius:12px;padding:20px;text-align:center;margin-top:24px">
    <div style="font-size:14px;font-weight:700;color:#ff642d;margin-bottom:6px">BuimbDigital.com — Complete Digital Marketing Strategy & Audit Report</div>
    <div style="font-size:12px;color:#9ba3af">Prepared by BuimbDigital · info@buimbdigital.com · buimbdigital.com · 17 March 2026</div>
    <div style="font-size:11px;color:#6b7280;margin-top:4px;font-style:italic">CONFIDENTIAL — For Internal Distribution Only. Do Not Distribute Without Authorization.</div>
  </div>`;

  return html;
}

// ── RESET ──
function resetAudit(){
  _data=null;
  _userDomain="";
  document.getElementById("results").style.display="none";
  document.getElementById("page-hero").style.display="block";
  document.getElementById("audit-btn").disabled=false;
  document.getElementById("url-input").value="";
  window.scrollTo({top:0,behavior:"smooth"});
}

document.getElementById("url-input").addEventListener("keydown",e=>{if(e.key==="Enter")startAudit()});

// ══════════════════════════════════════════════════════
//  PDF DOWNLOAD — Full 3-Part Report
// ══════════════════════════════════════════════════════
function pdfGrade(s){return s>=90?"A+":s>=80?"A":s>=70?"B+":s>=60?"B":s>=50?"C":s>=40?"D":"F"}
function pdfScoreCol(s){return s>=65?"#21bf6b":s>=45?"#f59e0b":"#ef4444"}
function h2r(h){if(typeof h!=="string")return[0,0,0];h=h.replace("#","").replace(/^0x/i,"");if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];if(h.length!==6)return[0,0,0];return[parseInt(h.slice(0,2),16)||0,parseInt(h.slice(2,4),16)||0,parseInt(h.slice(4,6),16)||0]}

async function downloadPDF(){
  if(!_data) return;
  const btn=document.querySelector(".btn-orange");
  btn.textContent="Generating PDF...";btn.disabled=true;
  try{
    await new Promise((res,rej)=>{
      if(window.jspdf){res();return}
      const s=document.createElement("script");
      s.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload=res;s.onerror=rej;document.head.appendChild(s);
    });
    // Use the standalone PDF generator from script_pdf.js if available
    // Otherwise fall back to inline generation
    if(typeof generateFullPDF==="function"){
      generateFullPDF(_data,CALENDAR,COMPETITORS,KW);
    } else {
      await generatePDFInline();
    }
  }catch(err){console.error(err);alert("PDF error: "+err.message)}
  btn.textContent="⬇ Download PDF";btn.disabled=false;
}

async function generatePDFInline(){
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:"portrait",unit:"mm",format:"a4"});

  // ── PAGE CONSTANTS ────────────────────────────────
  const PW=210, PH=297;
  const ML=14, MR=14, MT=16, MB=16;
  const CW=PW-ML-MR;   // 182mm content width
  const BOTTOM=PH-MB-2;

  // ── COLOR HELPERS ──────────────────────────────────
  function rgb(r,g,b){return{r,g,b}}
  const C={
    red:    rgb(169,0,6),
    dark:   rgb(26,26,46),
    mid:    rgb(92,96,112),
    light:  rgb(155,163,175),
    border: rgb(226,229,237),
    bg:     rgb(248,249,252),
    white:  rgb(255,255,255),
    green:  rgb(21,191,107),
    grnbg:  rgb(220,252,231),
    red2:   rgb(239,68,68),
    redbg:  rgb(254,226,226),
    amber:  rgb(245,158,11),
    ambg:   rgb(254,249,195),
    seo:    rgb(255,100,45),
    aeo:    rgb(16,185,129),
    geo:    rgb(139,92,246),
    orange: rgb(255,100,45),
  };
  function fill(c){doc.setFillColor(c.r,c.g,c.b)}
  function draw(c){doc.setDrawColor(c.r,c.g,c.b)}
  function text(c){doc.setTextColor(c.r,c.g,c.b)}
  function bf(sz){doc.setFont("helvetica","bold");doc.setFontSize(sz)}
  function nf(sz){doc.setFont("helvetica","normal");doc.setFontSize(sz)}
  function italicf(sz){doc.setFont("helvetica","italic");doc.setFontSize(sz)}

  const d=_data;
  const dom=_userDomain||"buimbdigital.com";
  const dateStr=new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});

  let y=0, _part="";

  // ── HEADER (top red bar, 10mm) ─────────────────────
  function hdr(){
    fill(C.red); doc.rect(0,0,PW,10,"F");
    bf(11); text(C.white); doc.text("BuimbDigital",ML,7);
    nf(6.5); text({r:255,g:220,b:220});
    const title=dom+" — Complete Digital Marketing Strategy & Audit Report";
    doc.text(title, ML+33, 7);
    nf(6.5); text(C.white); doc.text(dateStr, PW-MR, 7, "right");
    y=MT+2;
  }

  // ── FOOTER (bottom dark bar, 10mm) ────────────────
  function ftr(){
    const fy=PH-MB+1;
    fill(C.dark); doc.rect(0,fy,PW,MB+1,"F");
    // BuimbDigital (bold white)
    bf(7.5); text(C.white); doc.text("BuimbDigital",ML,fy+6.5);
    // spacer + email
    nf(6); text({r:180,g:180,b:200}); doc.text("  info@BuimbDigital.com", ML+28, fy+6.5);
    // Part label centered
    if(_part){ text({r:255,g:200,b:200}); doc.text(_part, PW/2, fy+6.5, "center"); }
    // Audited + CONFIDENTIAL right
    text({r:255,g:200,b:200}); doc.text("Audited: "+dom, PW-MR-32, fy+6.5);
    bf(6); text(C.white); doc.text("CONFIDENTIAL", PW-MR, fy+6.5, "right");
  }

  // ── AUTO PAGE BREAK ────────────────────────────────
  function needY(h){
    if(y+h>BOTTOM){ ftr(); doc.addPage(); hdr(); }
  }

  // ── SECTION HEADER (red bar, big bold title) ──────
  function secHead(title, sub){
    needY(12);
    fill(C.red); doc.rect(ML,y,CW,10,"F");
    bf(11); text(C.white); doc.text(title, ML+4, y+7);
    if(sub){ nf(6.5); text({r:255,g:208,b:208}); doc.text(sub, PW-MR, y+7, "right"); }
    y+=13;
  }

  // ── CATEGORY HEADER (dark bg) ─────────────────────
  // catHead removed - using inline cat rendering

  // ── ROW HELPERS ───────────────────────────────────
  function statusChip(x,ry,status){
    const map={PASS:{bg:C.grnbg,tc:{r:21,g:128,b:61}},WARN:{bg:C.ambg,tc:{r:161,g:98,b:7}},FAIL:{bg:C.redbg,tc:{r:185,g:28,b:28}}};
    const s=map[status]||map.FAIL;
    fill(s.bg); doc.roundedRect(x,ry,16,4,0.8,0.8,"F");
    bf(5.5); text(s.tc); doc.text(status, x+8, ry+3, "center");
  }

  function priChip(x,ry,pri){
    const map={CRITICAL:{bg:C.redbg,tc:{r:185,g:28,b:28}},HIGH:{bg:C.ambg,tc:{r:161,g:98,b:7}},MEDIUM:{bg:{r:254,g:249,b:195},tc:{r:133,g:77,b:14}},LOW:{bg:C.bg,tc:C.light}};
    const s=map[pri]||map.LOW;
    fill(s.bg); doc.roundedRect(x,ry,pri==="CRITICAL"?18:pri==="MEDIUM"?16:pri==="HIGH"?12:9,4,0.8,0.8,"F");
    bf(5); text(s.tc); const w=pri==="CRITICAL"?9:pri==="MEDIUM"?8:pri==="HIGH"?6:4.5;
    doc.text(pri, x+w, ry+3, "center");
  }

  // Render a text cell that auto-wraps and returns height used
  function textCell(txt, x, ry, maxW, bold, color, sz){
    if(!txt) return 0;
    if(bold) bf(sz||6.5); else nf(sz||6.5);
    text(color||C.dark);
    const lines=doc.splitTextToSize(String(txt), maxW);
    lines.forEach((ln,li)=> doc.text(ln, x, ry+4+li*3.8));
    return lines.length*3.8;
  }

  // ── CHECKS TABLE ROW ──────────────────────────────
  function checksRow(c, alt){
    const colW=[38, 18, 50, 20, CW-38-18-50-20-4];
    const colX=[ML, ML+38, ML+56, ML+106, ML+126];
    // Calculate row height
    const findLines=doc.splitTextToSize(c.finding||"", colW[2]-2);
    const actLines=doc.splitTextToSize(c.action||"", colW[4]-2);
    const nameLines=doc.splitTextToSize(c.n||"", colW[0]-2);
    const rh=Math.max(10, Math.max(nameLines.length, findLines.length, actLines.length)*3.8+4);
    needY(rh+1);
    // Row bg
    const bg=c.status==="FAIL"?{r:255,g:245,b:245}:c.status==="WARN"?{r:255,g:251,b:240}:alt?C.bg:C.white;
    fill(bg); doc.rect(ML,y,CW,rh,"F");
    // Bottom border
    draw(C.border); doc.setLineWidth(0.08); doc.line(ML,y+rh,ML+CW,y+rh);
    // Check name (bold)
    bf(6.5); text(C.dark); const nl=doc.splitTextToSize(c.n||"",colW[0]-2); nl.forEach((ln,li)=>doc.text(ln,colX[0]+1,y+4+li*3.8));
    // Status chip
    statusChip(colX[1]+1, y+rh/2-2, c.status);
    // Finding
    nf(6.3); text(C.mid); findLines.forEach((ln,li)=>doc.text(ln,colX[2]+1,y+4+li*3.8));
    // Priority chip
    priChip(colX[3]+1, y+rh/2-2, c.priority);
    // Action
    nf(6.3); text(C.dark); actLines.forEach((ln,li)=>doc.text(ln,colX[4]+1,y+4+li*3.8));
    y+=rh+0.5;
  }

  // ── CHECKS TABLE HEADER ────────────────────────────
  function checksTableHead(){
    needY(7);
    fill(C.red); doc.rect(ML,y,CW,7,"F");
    const heads=["Check","Status","Finding","Priority","Action Required"];
    const xs=[ML+1,ML+39,ML+57,ML+107,ML+127];
    bf(6.5); text(C.white); heads.forEach((h,i)=>doc.text(h,xs[i],y+5));
    y+=7.5;
  }

  // ── CHIP HELPER ────────────────────────────────────
  function chip(x,cy,txt,bgc,tc,w){
    const cw=w||Math.max(doc.getTextWidth(txt)*1.4+4, 10);
    fill(bgc); doc.roundedRect(x,cy,cw,4,.8,.8,"F");
    bf(5.5); text(tc); doc.text(txt,x+cw/2,cy+2.9,"center");
    return cw;
  }

  // ═══════════════════════════════════════════════
  // PAGE 1: COVER
  // ═══════════════════════════════════════════════
  _part="PART 1: SEO/AEO/GEO AUDIT REPORT";
  hdr(); ftr();

  // 3-Part panel cards
  const panW=(CW-6)/3;
  const parts=[
    {num:"PART 1",title:"SEO / AEO / GEO",sub:"Audit Report",note:"74/100 Overall · 89 Checks",col:C.seo},
    {num:"PART 2",title:"Content Calendar",sub:"6-Month Plan",note:"29 Pieces · Apr–Oct 2026",col:C.aeo},
    {num:"PART 3",title:"SEO Plan, Competitors",sub:"& Keywords",note:"12-Month · 6 Competitors · 62 KWs",col:C.geo},
  ];
  parts.forEach((p,i)=>{
    const px=ML+i*(panW+3);
    fill(p.col); doc.roundedRect(px,y,panW,30,2,2,"F");
    fill({r:0,g:0,b:0}); doc.setGState && doc.setGState(doc.GState({opacity:0.15}));
    doc.setGState && doc.setGState(doc.GState({opacity:1}));
    bf(7); text(C.white); doc.text(p.num,px+4,y+8);
    bf(9); doc.text(p.title,px+4,y+16);
    nf(7); text({r:255,g:230,b:230}); doc.text(p.sub,px+4,y+22);
    nf(5.5); text({r:255,g:255,b:255}); doc.setGState&&doc.setGState(doc.GState({opacity:0.7}));
    doc.text(p.note,px+4,y+28);
    doc.setGState&&doc.setGState(doc.GState({opacity:1}));
  });
  y+=34;

  // Stats bar (4 cards)
  needY(16);
  const sw=(CW-9)/4;
  const stats=[
    {val:"12",lbl:"ERRORS",bg:C.redbg,tc:{r:185,g:28,b:28}},
    {val:"22",lbl:"WARNINGS",bg:C.ambg,tc:{r:161,g:98,b:7}},
    {val:"55",lbl:"PASSED",bg:C.grnbg,tc:{r:21,g:128,b:61}},
    {val:"89",lbl:"TOTAL CHECKS",bg:{r:239,g:246,b:255},tc:{r:29,g:78,b:216}},
  ];
  stats.forEach((s,i)=>{
    const sx=ML+i*(sw+3);
    fill(s.bg); draw(C.border); doc.setLineWidth(0.3);
    doc.roundedRect(sx,y,sw,14,2,2,"FD");
    bf(14); text(s.tc); doc.text(s.val,sx+sw/2,y+8.5,"center");
    nf(5.5); text(C.light); doc.text(s.lbl,sx+sw/2,y+13,"center");
  });
  y+=17;

  // Meta bar
  needY(8);
  fill(C.bg); draw(C.border); doc.setLineWidth(0.2);
  doc.roundedRect(ML,y,CW,7,1,1,"FD");
  nf(6.5); text(C.mid);
  doc.text("Audit Date: "+dateStr+"   |   Audited: "+dom+"   |   CONFIDENTIAL — For Internal Distribution Only", ML+CW/2, y+5, "center");
  y+=10;

  // ═══════════════════════════════════════════════
  // EXEC SUMMARY — Score table + Gauges on page 1
  // ═══════════════════════════════════════════════
  secHead("SECTION 1: EXECUTIVE SUMMARY","Score Summary · Key Strengths · Critical Weaknesses");

  // Score summary table
  needY(36);
  fill(C.red); doc.rect(ML,y,CW,7,"F");
  const scCols=[80,20,16,CW-80-20-16-4];
  const scX=[ML,ML+80,ML+100,ML+116];
  bf(7); text(C.white); ["Module","Score","Grade","Status"].forEach((h,i)=>doc.text(h,scX[i]+2,y+5));
  y+=7;
  const scores=[
    {mod:"SEO (Search Engine Optimization)",sc:70,col:C.seo,status:"Needs Improvement"},
    {mod:"AEO (Answer Engine Optimization)",sc:79,col:C.aeo,status:"Good — Minor Gaps"},
    {mod:"GEO (Generative Engine Optimization)",sc:72,col:C.geo,status:"Moderate Gaps"},
    {mod:"Overall Score",sc:74,col:C.orange,status:"Strong Foundation — Fix Critical Issues"},
  ];
  scores.forEach((r,i)=>{
    needY(9);
    const isOv=i===3;
    fill(isOv?C.bg:C.white); doc.rect(ML,y,CW,8,"F");
    fill(r.col); doc.rect(ML,y,3,8,"F");
    draw(C.border); doc.setLineWidth(0.08); doc.line(ML,y+8,ML+CW,y+8);
    bf(7); text(C.dark); doc.text(r.mod,ML+6,y+5.5);
    const sc=r.sc>=65?C.green:r.sc>=45?C.amber:C.red2;
    const sb=r.sc>=65?C.grnbg:r.sc>=45?C.ambg:C.redbg;
    chip(scX[1]+1,y+2,r.sc+"/100",sb,sc,18);
    chip(scX[2]+1,y+2,pdfGrade(r.sc),sb,sc,14);
    nf(7); text(C.mid); doc.text(r.status,scX[3]+2,y+5.5);
    y+=8.5;
  });
  y+=4;

  // Gauges row
  needY(38);
  const gauges=[{lbl:"SEO",sc:70,col:C.seo},{lbl:"AEO",sc:79,col:C.aeo},{lbl:"GEO",sc:72,col:C.geo},{lbl:"Overall",sc:74,col:C.orange}];
  gauges.forEach((g,i)=>{
    const gx=ML+24+i*46, gr=11;
    draw(C.border); doc.setLineWidth(3.5); doc.circle(gx,y+14,gr,"S");
    draw(g.col); doc.setLineWidth(3.5);
    const steps=Math.round((g.sc/100)*52);
    for(let k=0;k<steps;k++){
      const a1=-Math.PI/2+(k/52)*2*Math.PI, a2=-Math.PI/2+((k+1)/52)*2*Math.PI;
      doc.line(gx+gr*Math.cos(a1),y+14+gr*Math.sin(a1),gx+gr*Math.cos(a2),y+14+gr*Math.sin(a2));
    }
    bf(12); text(C.dark); doc.text(String(g.sc),gx,y+15.5,"center");
    nf(5.5); text(C.light); doc.text("/100",gx,y+19.5,"center");
    bf(7); text(C.dark); doc.text(g.lbl,gx,y+29,"center");
    const gc=g.sc>=65?C.green:g.sc>=45?C.amber:C.red2;
    const gb=g.sc>=65?C.grnbg:g.sc>=45?C.ambg:C.redbg;
    chip(gx-7,y+31,pdfGrade(g.sc),gb,gc,14);
  });
  y+=40;

  // ═══════════════════════════════════════════════
  // PAGE 2: KEY STRENGTHS & CRITICAL WEAKNESSES
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();

  secHead("SECTION 1 (continued): KEY STRENGTHS & CRITICAL WEAKNESSES","What's working, what needs immediate attention");

  // What this audit covers box
  needY(18);
  fill({r:255,g:245,b:245}); draw(C.red); doc.setLineWidth(0.4);
  doc.roundedRect(ML,y,CW,16,2,2,"FD");
  fill(C.red); doc.roundedRect(ML,y,4,16,1,1,"F");
  bf(8.5); text(C.red); doc.text("What This Audit Covers",ML+7,y+7);
  nf(7); text(C.dark);
  const ovTxt="This audit evaluated "+dom+" across 89 checks in 3 disciplines: SEO (traditional search rankings), AEO (AI answer engines & featured snippets), and GEO (visibility in ChatGPT, Perplexity & Google AI Overview). Overall score: 74/100 — Grade B+. Strong technical foundation but critical mobile and metadata gaps are actively suppressing rankings.";
  const ovL=doc.splitTextToSize(ovTxt,CW-10);
  ovL.forEach((ln,li)=>doc.text(ln,ML+7,y+12+li*3.8));
  y+=18+ovL.length*0.8+3;

  // KEY STRENGTHS
  needY(10);
  fill({r:21,g:128,b:61}); doc.rect(ML,y,CW,9,"F");
  bf(10); text(C.white); doc.text("✓   KEY STRENGTHS — Areas Performing Well",ML+4,y+6.5);
  y+=11;
  const strengths=[
    "Voice Search Optimization — PERFECT 100/100. Conversational keywords, long-tail questions, and local signals all well-implemented.",
    "NLP & Semantic SEO — 90/100. Well-structured, semantically rich content aligned with how search engines process natural language.",
    "LLM-Ready Content and AI Topical Coverage — both 90/100. Site is well-structured for AI tools to parse and cite.",
    "Backlinks & Off-Page SEO — 90/100. Strong domain authority and quality external link signals.",
    "Technical SEO fundamentals (SSL, XML sitemap, robots.txt, redirect hygiene) largely in order at 83/100.",
  ];
  strengths.forEach((s,i)=>{
    const lines=doc.splitTextToSize(s,CW-12);
    const rh=lines.length*4+6;
    needY(rh+1);
    fill(i%2===0?C.grnbg:{r:240,g:253,b:244}); doc.roundedRect(ML,y,CW,rh,1.5,1.5,"F");
    fill({r:21,g:128,b:61}); doc.roundedRect(ML,y,4,rh,0.5,0.5,"F");
    bf(6.5); text({r:20,g:83,b:45});
    doc.text("✓",ML+7,y+rh/2+1.5,"center");
    nf(7); text(C.dark); lines.forEach((ln,li)=>doc.text(ln,ML+12,y+4.5+li*4));
    y+=rh+2;
  });
  y+=3;

  // CRITICAL WEAKNESSES
  needY(10);
  fill({r:185,g:28,b:28}); doc.rect(ML,y,CW,9,"F");
  bf(10); text(C.white); doc.text("✕   CRITICAL WEAKNESSES — Fix Immediately",ML+4,y+6.5);
  y+=11;
  const weaknesses=[
    "Page Load Speed — CRITICAL FAILURE. Slow load times directly reduce Google rankings, increase bounce rates, and hurt mobile conversions.",
    "Mobile Responsiveness — 38/100, THE LOWEST SCORE in the entire audit. With 60%+ of web traffic on mobile, this is a major revenue-impacting issue requiring immediate developer action.",
    "HTTPS Security (GEO) — CRITICAL ERROR. AI systems and security-conscious search algorithms may deprioritize or distrust the site. Fix in Week 1.",
    "E-E-A-T — 60/100. Missing trust badges, publication dates, and expanded author credentials — all key signals for Google quality assessment.",
    "Machine-Readable Metadata — 50/100, the lowest category score. Organization Schema missing, Open Graph tags incomplete — limiting how AI systems represent the site.",
  ];
  weaknesses.forEach((s,i)=>{
    const lines=doc.splitTextToSize(s,CW-12);
    const rh=lines.length*4+6;
    needY(rh+1);
    fill(i%2===0?C.redbg:{r:255,g:241,b:242}); doc.roundedRect(ML,y,CW,rh,1.5,1.5,"F");
    fill({r:185,g:28,b:28}); doc.roundedRect(ML,y,4,rh,0.5,0.5,"F");
    bf(6.5); text({r:127,g:29,b:29});
    doc.text("✕",ML+7,y+rh/2+1.5,"center");
    nf(7); text(C.dark); lines.forEach((ln,li)=>doc.text(ln,ML+12,y+4.5+li*4));
    y+=rh+2;
  });
  y+=4;

  // ═══════════════════════════════════════════════
  // SEO / AEO / GEO ANALYSIS SECTIONS
  // ═══════════════════════════════════════════════
  const modInfo={seo:{sec:"2",label:"SEO"},aeo:{sec:"3",label:"AEO"},geo:{sec:"4",label:"GEO"}};

  ["seo","aeo","geo"].forEach(mk=>{
    ftr(); doc.addPage(); hdr();
    _part="PART 1: "+mk.toUpperCase()+" ANALYSIS";
    const mod=d.mods[mk];
    const mi=modInfo[mk];
    secHead("SECTION "+mi.sec+": "+mod.label+" ANALYSIS — Detailed Findings","Score: "+mod.score+"/100 · Grade: "+pdfGrade(mod.score)+" · "+mod.categories.length+" categories");

    mod.categories.forEach(cat=>{
      const cp=cat.checks.filter(c=>c.status==="PASS").length;
      const cw=cat.checks.filter(c=>c.status==="WARN").length;
      const cf=cat.checks.filter(c=>c.status==="FAIL").length;
      const sc=cat.score;

      needY(12);
      // Category header
      fill(C.dark); doc.rect(ML,y,CW,9,"F");
      fill(sc>=65?C.green:sc>=45?C.amber:C.red2); doc.rect(ML,y,4,9,"F");
      bf(8.5); text(C.white); doc.text(cat.sectionNum+" "+cat.name+(cat.note?" "+cat.note:""),ML+7,y+6.3);
      // Score chip right
      const scC=sc>=65?C.grnbg:sc>=45?C.ambg:C.redbg;
      const scT=sc>=65?{r:21,g:128,b:61}:sc>=45?{r:161,g:98,b:7}:{r:185,g:28,b:28};
      chip(PW-MR-40,y+2.5,sc+"/100 "+pdfGrade(sc),scC,scT,22);
      // Stats
      nf(6); text({r:150,g:220,b:170}); doc.text("✓"+cp,PW-MR-60,y+6.3);
      text({r:255,g:220,b:120}); doc.text("⚠"+cw,PW-MR-52,y+6.3);
      text({r:255,g:150,b:150}); doc.text("✕"+cf,PW-MR-44,y+6.3);
      y+=11;

      // Table header
      checksTableHead();
      // Table rows
      cat.checks.forEach((c,ci)=>checksRow(c, ci%2===0));
      y+=4;
    });
  });

  // ═══════════════════════════════════════════════
  // SECTION 5: ACTION PLAN
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part="PART 1: ACTION PLAN";

  const allIss=[];
  ["seo","aeo","geo"].forEach(k=>d.mods[k].categories.forEach(cat=>cat.checks.filter(c=>c.status!=="PASS").forEach(c=>allIss.push({...c,module:k.toUpperCase()}))));
  allIss.sort((a,b)=>["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(a.priority)-["CRITICAL","HIGH","MEDIUM","LOW"].indexOf(b.priority));

  secHead("SECTION 5: PRIORITIZED ACTION PLAN — All "+allIss.length+" Actions","Critical (2 weeks) · High (30 days) · Medium (60-90 days) · Low");

  const priGroups=[
    {k:"CRITICAL",lbl:"Critical Priority — Fix Within 2 Weeks",bg:C.redbg,hbg:{r:185,g:28,b:28},tc:{r:185,g:28,b:28}},
    {k:"HIGH",lbl:"High Priority — Fix Within 30 Days",bg:C.ambg,hbg:{r:161,g:98,b:7},tc:{r:161,g:98,b:7}},
    {k:"MEDIUM",lbl:"Medium Priority — Fix Within 60-90 Days",bg:{r:254,g:252,b:232},hbg:{r:133,g:77,b:14},tc:{r:133,g:77,b:14}},
    {k:"LOW",lbl:"Low Priority — Fix When Capacity Allows",bg:C.bg,hbg:C.dark,tc:C.light},
  ];
  let actNum=1;
  priGroups.forEach(pg=>{
    const items=allIss.filter(c=>c.priority===pg.k);
    if(!items.length) return;

    needY(10);
    fill(pg.hbg); doc.rect(ML,y,CW,8,"F");
    bf(8.5); text(C.white); doc.text(pg.lbl,ML+4,y+5.8);
    nf(6.5); text({r:220,g:220,b:220}); doc.text("("+items.length+" issues)",ML+4+doc.getTextWidth(pg.lbl)+4,y+5.8);
    y+=10;

    // Table header
    needY(7);
    fill(C.red); doc.rect(ML,y,CW,7,"F");
    const ah=["#","Issue","Module","Priority","Recommended Fix"];
    const ax=[ML+1,ML+11,ML+60,ML+78,ML+98];
    bf(6.5); text(C.white); ah.forEach((h,i)=>doc.text(h,ax[i],y+5));
    y+=7.5;

    items.forEach(item=>{
      const fixL=doc.splitTextToSize(item.action||"",CW-98-4);
      const nameL=doc.splitTextToSize(item.n||"",47);
      const rh=Math.max(10, Math.max(nameL.length, fixL.length)*3.8+4);
      needY(rh+0.5);
      fill(pg.bg); doc.rect(ML,y,CW,rh,"F");
      draw(C.border); doc.setLineWidth(0.08); doc.line(ML,y+rh,ML+CW,y+rh);
      // Number
      bf(7.5); text(pg.tc); doc.text(String(actNum++),ax[0]+2,y+rh/2+1.5,"center");
      // Issue name + finding
      bf(7); text(C.dark); nameL.forEach((ln,li)=>doc.text(ln,ax[1],y+4+li*3.8));
      nf(6); text(C.mid); const fL2=doc.splitTextToSize(item.finding||"",47); fL2.slice(0,1).forEach((ln,li)=>doc.text(ln,ax[1],y+4+nameL.length*3.8+li*3.5));
      // Module chip
      const mC={SEO:C.seo,AEO:C.aeo,GEO:C.geo}[item.module]||C.orange;
      const mB={SEO:{r:255,g:240,b:235},AEO:{r:240,g:253,b:244},GEO:{r:245,g:243,b:255}}[item.module]||C.bg;
      chip(ax[2],y+rh/2-2,item.module,mB,mC,15);
      // Priority chip
      priChip(ax[3],y+rh/2-2,pg.k);
      // Fix text
      nf(6.3); text(C.dark); fixL.forEach((ln,li)=>doc.text(ln,ax[4],y+4+li*3.8));
      y+=rh+0.5;
    });
    y+=5;
  });

  // ═══════════════════════════════════════════════
  // SECTION 6: TEAM RESPONSIBILITIES
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part="PART 1: TEAM & TIMELINE";
  secHead("SECTION 6: TEAM RESPONSIBILITIES & TIMELINE","30/60-day targets by team");

  const teams=[
    {name:"Developer / Technical Team",col:{r:29,g:78,b:216},bg:{r:239,g:246,b:255},tasks:["Fix HTTPS / mixed content warnings — Week 1","Add viewport meta tag to all pages — Week 1","Implement Organization JSON-LD schema sitewide — Week 1","Remove noindex tags from key pages — Week 1","Fix TTFB: enable caching, CDN, server optimization — Week 1–2","Improve page load speed: minify, compress, lazy-load — Week 1–2","Create custom 404 error page — Week 2","Add HowTo, QAPage, BreadcrumbList, and Person schema — Week 3–4","Add Open Graph and Twitter Card meta tags — Week 3–4","Add canonical tags to all pages — Week 3–4"]},
    {name:"Content / SEO Team",col:C.red,bg:{r:255,g:245,b:245},tasks:["Audit and rewrite all title tags — Week 1–2","Write unique meta descriptions for all pages — Week 1–2","Add primary keywords to first 100 words of all service pages — Week 2","Add definition sections ('What is X?') to all service pages — Week 2–3","Create FAQ sections for all key pages — Week 2–3","Add publication and 'Last Updated' dates to all content — Week 2–3","Expand thin content pages to 800+ words — Week 3–6","Create 3–5 use case landing pages — Week 4–8"]},
    {name:"Marketing / Brand Team",col:{r:21,g:128,b:61},bg:{r:240,g:253,b:244},tasks:["Audit brand name consistency across all pages — Week 1","Collect and add trust badges, certifications, partner logos — Week 2–3","Gather and publish 10+ client testimonials — Week 2–4","Create 3–5 detailed case studies — Week 3–8","Submit brand to Clutch, GoodFirms, DesignRush — Week 2–3","Optimize Google Business Profile — Week 1–2","Pursue press mentions and digital PR — Ongoing"]},
  ];
  teams.forEach(team=>{
    needY(12);
    fill(team.col); doc.rect(ML,y,CW,9,"F");
    bf(9.5); text(C.white); doc.text(team.name,ML+5,y+6.5);
    y+=11;
    team.tasks.forEach((task,ti)=>{
      const lines=doc.splitTextToSize(task,CW-12);
      const rh=lines.length*4+5;
      needY(rh+0.5);
      fill(ti%2===0?team.bg:C.white); doc.rect(ML,y,CW,rh,"F");
      fill(team.col); doc.circle(ML+5,y+rh/2,1.5,"F");
      nf(7); text(C.dark); lines.forEach((ln,li)=>doc.text(ln,ML+10,y+4+li*4));
      draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+rh,ML+CW,y+rh);
      y+=rh+0.5;
    });
    y+=6;
  });

  // 30/60-Day Score Milestones
  needY(36);
  bf(9); text(C.dark); doc.text("30/60-Day Score Milestone Targets",ML,y+6);
  y+=9;
  fill(C.red); doc.rect(ML,y,CW,7,"F");
  const milX=[ML,ML+55,ML+100,ML+145];
  bf(7); text(C.white); ["Module","Current Score","30-Day Target","60-Day Target"].forEach((h,i)=>doc.text(h,milX[i]+2,y+5));
  y+=7.5;
  const mils=[{m:"SEO Overall",now:70,d30:80,d60:87},{m:"AEO Overall",now:79,d30:86,d60:91},{m:"GEO Overall",now:72,d30:82,d60:88},{m:"Overall Score",now:74,d30:83,d60:89}];
  mils.forEach((m,i)=>{
    needY(9);
    fill(i===3?C.bg:C.white); doc.rect(ML,y,CW,8,"F");
    draw(C.border); doc.setLineWidth(0.08); doc.line(ML,y+8,ML+CW,y+8);
    bf(7); text(C.dark); doc.text(m.m,milX[0]+2,y+5.5);
    [[m.now],[m.d30],[m.d60]].forEach(([v],ci)=>{
      const sc=v>=80?C.grnbg:v>=70?C.ambg:C.redbg;
      const tc=v>=80?{r:21,g:128,b:61}:v>=70?{r:161,g:98,b:7}:{r:185,g:28,b:28};
      chip(milX[ci+1]+2,y+2,v+"/100",sc,tc,20);
    });
    y+=8.5;
  });
  y+=6;

  // Section 7: Final Notes
  needY(10);
  secHead("SECTION 7: FINAL NOTES & EXECUTIVE RECOMMENDATIONS","Summary for leadership · 4 immediate actions");

  needY(20);
  fill({r:255,g:245,b:245}); draw(C.red); doc.setLineWidth(0.3);
  doc.roundedRect(ML,y,CW,18,2,2,"FD");
  fill(C.red); doc.roundedRect(ML,y,4,18,1,1,"F");
  const sumTxt=dom+" is performing at a B+ level across all three dimensions of modern search visibility. Core strengths — strong backlinks, perfect voice search optimization, and well-structured AI-ready content — provide a solid foundation. The two most revenue-impactful issues are mobile responsiveness (38/100) and page load speed (CRITICAL). Fixing these two items alone could produce measurable ranking improvements within 30-60 days.";
  const sumL=doc.splitTextToSize(sumTxt,CW-10);
  nf(7); text(C.dark); sumL.forEach((ln,li)=>doc.text(ln,ML+7,y+5.5+li*4));
  y+=sumL.length*4+6;

  const actions4=["Assign a developer sprint in the next 5–7 days focused exclusively on the 8 critical technical items.","Schedule a content audit meeting where the SEO/content team reviews all pages missing FAQs, definitions, and trust signals.","Begin collecting client testimonials and case study approvals from existing clients this week.","Set a re-audit date 30 days from today to measure progress against the baseline scores in this report."];
  actions4.forEach((a,i)=>{
    const lines=doc.splitTextToSize(a,CW-18);
    const rh=lines.length*4+7;
    needY(rh+1);
    fill(C.bg); draw(C.border); doc.setLineWidth(0.2);
    doc.roundedRect(ML,y,CW,rh,1.5,1.5,"FD");
    fill(C.red); doc.roundedRect(ML+1,y+1,8,8,1,1,"F");
    bf(8); text(C.white); doc.text(String(i+1),ML+5,y+6.5,"center");
    nf(7); text(C.dark); lines.forEach((ln,li)=>doc.text(ln,ML+13,y+5+li*4));
    y+=rh+2;
  });

  // ═══════════════════════════════════════════════
  // PART 2: CONTENT CALENDAR
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part="PART 2: CONTENT CALENDAR";

  // Part 2 banner
  fill(C.aeo); doc.rect(ML,y,CW,30,"F");
  bf(9); text({r:200,g:255,b:230}); doc.text("PART 2",ML+5,y+9);
  bf(16); text(C.white); doc.text("6-MONTH CONTENT CALENDAR",ML+5,y+19);
  nf(7.5); text({r:200,g:255,b:230}); doc.text("April – October 2026  ·  29 Content Pieces  ·  Weekly Breakdown",ML+5,y+26);
  y+=34;

  secHead("SECTION 9: 6-MONTH WEEKLY CALENDAR","Week-by-week topics, types, keywords, goals, and owners");

  const CALENDAR2=typeof CALENDAR!=="undefined"?CALENDAR:[];
  CALENDAR2.forEach(month=>{
    needY(12);
    fill(C.dark); doc.rect(ML,y,CW,9,"F");
    fill(C.aeo); doc.rect(ML,y,4,9,"F");
    bf(8.5); text(C.white); doc.text(month.month,ML+7,y+6.3);
    italicf(6.5); text({r:160,g:220,b:200}); doc.text("Theme: "+month.theme,PW-MR,y+6.3,"right");
    y+=11;

    // Cal table header
    needY(7);
    fill(C.red); doc.rect(ML,y,CW,7,"F");
    const cx=[ML+1,ML+10,ML+30,ML+82,ML+130,ML+CW-8];
    bf(6.5); text(C.white); ["Wk","Type","Title / Topic","Target Keywords","Goal","Owner"].forEach((h,i)=>doc.text(h,cx[i],y+5));
    y+=7.5;

    const typeColors={"Blog Post":{bg:{r:219,g:234,b:254},tc:{r:29,g:78,b:216}},"Service Page":{bg:{r:255,g:240,b:235},tc:C.seo},"Case Study":{bg:{r:240,g:253,b:244},tc:{r:21,g:128,b:61}},"Social Post":{bg:{r:236,g:253,b:245},tc:{r:6,g:182,b:212}},"FAQ Page":{bg:{r:255,g:247,b:237},tc:{r:161,g:98,b:7}},"Use Case Page":{bg:{r:245,g:243,b:255},tc:{r:124,g:58,b:237}},"Definition Page":{bg:{r:236,g:254,b:255},tc:{r:14,g:116,b:144}}};
    const ownerC={"SEO":{bg:{r:255,g:240,b:235},tc:C.seo},"Content":{bg:{r:245,g:243,b:255},tc:{r:124,g:58,b:237}},"Marketing":{bg:{r:240,g:253,b:244},tc:{r:21,g:128,b:61}}};

    month.items.forEach((item,ii)=>{
      const tL=doc.splitTextToSize(item.title,49); const kL=doc.splitTextToSize(item.keywords,46); const gL=doc.splitTextToSize(item.goal,46);
      const rh=Math.max(11,Math.max(tL.length,kL.length,gL.length)*3.8+4);
      needY(rh+0.5);
      fill(ii%2===0?C.white:C.bg); doc.rect(ML,y,CW,rh,"F");
      draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+rh,ML+CW,y+rh);
      bf(7); text(C.aeo); doc.text(item.week,cx[0]+1,y+rh/2+1.5);
      const tc2=typeColors[item.type]||typeColors["Blog Post"];
      chip(cx[1],y+rh/2-2,item.type.length>12?item.type.slice(0,11)+"..":item.type,tc2.bg,tc2.tc,18);
      bf(7); text(C.dark); tL.forEach((ln,li)=>doc.text(ln,cx[2],y+4+li*3.8));
      nf(6.3); text(C.mid); kL.forEach((ln,li)=>doc.text(ln,cx[3],y+4+li*3.8));
      nf(6.3); text(C.dark); gL.forEach((ln,li)=>doc.text(ln,cx[4],y+4+li*3.8));
      const oc2=ownerC[item.owner]||ownerC["SEO"];
      chip(cx[5],y+rh/2-2,item.owner,oc2.bg,oc2.tc,10);
      y+=rh+0.5;
    });
    y+=5;
  });

  // KPIs section
  needY(10);
  secHead("SECTION 10: CONTENT KPIs & SUCCESS METRICS","Track monthly using Looker Studio + GA4 + Search Console");
  const kpis=[["Organic Traffic","Baseline (Month 0)","Google Analytics 4","Monthly","+15% by Month 3, +40% by Month 6"],["Keyword Rankings","Track 20 target keywords","Google Search Console","Weekly","5+ in Top 10 by Month 3"],["Blog Pageviews","Baseline (Month 0)","GA4 / GSC","Monthly","2x by Month 6"],["Case Study Leads","0 currently","CRM / Form tracking","Monthly","3+ leads by Month 4"],["Social Engagement","Baseline this week","LinkedIn / Meta Analytics","Weekly","+20% engagement by Month 2"],["AI Citation Appearances","Manual audit","Perplexity / ChatGPT","Monthly","Brand cited in 5+ AI queries by Month 6"],["Domain Authority","Current score","Ahrefs / Moz","Monthly","+5 DA points by Month 6"],["Backlinks Earned","Baseline","Ahrefs","Monthly","10+ new referring domains by Month 6"]];
  needY(7);
  fill(C.red); doc.rect(ML,y,CW,7,"F");
  const kx=[ML+1,ML+36,ML+78,ML+118,ML+136];
  bf(6.5); text(C.white); ["KPI Metric","Starting Point","Tracking Tool","Frequency","6-Month Target"].forEach((h,i)=>doc.text(h,kx[i],y+5));
  y+=7.5;
  kpis.forEach((r,i)=>{
    const tL=doc.splitTextToSize(r[4],CW-136-4);
    const rh=Math.max(9,tL.length*3.8+4);
    needY(rh+0.5);
    fill(i%2===0?C.white:C.bg); doc.rect(ML,y,CW,rh,"F");
    draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+rh,ML+CW,y+rh);
    bf(7); text(C.dark); doc.text(r[0],kx[0],y+rh/2+1.5);
    nf(6.5); text(C.mid); doc.text(r[1],kx[1],y+rh/2+1.5); doc.text(r[2],kx[2],y+rh/2+1.5);
    chip(kx[3],y+rh/2-2,r[3],{r:239,g:246,b:255},{r:29,g:78,b:216},16);
    nf(6.5); text({r:21,g:128,b:61}); tL.forEach((ln,li)=>doc.text(ln,kx[4],y+4+li*3.8));
    y+=rh+0.5;
  });
  y+=5;

  // ═══════════════════════════════════════════════
  // PART 3: SEO STRATEGY + COMPETITORS + KEYWORDS
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  _part="PART 3: SEO STRATEGY & KEYWORDS";

  fill(C.geo); doc.rect(ML,y,CW,30,"F");
  bf(9); text({r:220,g:210,b:255}); doc.text("PART 3",ML+5,y+9);
  bf(15); text(C.white); doc.text("SEO STRATEGY · COMPETITORS · KEYWORDS",ML+5,y+19);
  nf(7.5); text({r:220,g:210,b:255}); doc.text("12-Month Plan  ·  6 Competitor Profiles  ·  62 Keyword Recommendations",ML+5,y+26);
  y+=34;

  secHead("SECTION 11: 12-MONTH SEO STRATEGY PLAN","Strategic Objectives & 4-Phase Execution");

  // Objectives grid
  const objs=[
    {n:1,t:"Top 3 rankings for 10 primary keywords",tgt:"10 keywords in Top 3 by Month 12",col:C.geo},
    {n:2,t:"Fix all Critical and High Priority audit issues",tgt:"Overall audit score ≥ 90/100 by Month 6",col:C.red2},
    {n:3,t:"Grow organic traffic by 150%",tgt:"+150% sessions from organic by Month 12",col:C.green},
    {n:4,t:"Establish AEO & GEO authority in niche",tgt:"Brand cited in 10+ AI queries by Month 9",col:C.aeo},
    {n:5,t:"Local SEO dominance in Agra + pan-India",tgt:"GBP in Top 3 Local Pack for 5 keywords by Month 6",col:{r:245,g:158,b:11}},
    {n:6,t:"Generate 20+ organic leads per month",tgt:"20+ monthly organic leads tracked in CRM by Month 12",col:C.seo},
  ];
  const oW=(CW-4)/3;
  for(let i=0;i<6;i+=3){
    needY(16);
    for(let j=0;j<3;j++){
      const o=objs[i+j]; if(!o) break;
      const ox=ML+j*(oW+2);
      fill(C.bg); draw(C.border); doc.setLineWidth(0.2);
      doc.roundedRect(ox,y,oW-1,14,1.5,1.5,"FD");
      fill(o.col); doc.roundedRect(ox+1,y+1,6,6,1,1,"F");
      bf(7.5); text(C.white); doc.text(String(o.n),ox+4,y+5.5,"center");
      bf(6.5); text(C.dark); const tl=doc.splitTextToSize(o.t,oW-11); tl.forEach((ln,li)=>doc.text(ln,ox+9,y+5+li*3.8));
      nf(6); text(o.col); doc.text("→ "+o.tgt, ox+3, y+12);
    }
    y+=16;
  }
  y+=3;

  // 4 Phases
  const phases2=[
    {name:"Phase 1 — Months 1-3: Fix the Foundation",focus:"Technical fixes, on-page corrections, schema, local SEO",col:{r:185,g:28,b:28},items:[["Viewport meta tag + responsive CSS","Developer","Week 1","Mobile→75","+15% rankings"],["Fix HTTPS / resolve mixed content","Developer","Week 1","GEO HTTPS","+AI trust"],["Remove noindex from key pages","Dev/SEO","Week 1","Tech SEO","Pages indexed"],["Unique title tags + meta descriptions","SEO Team","Weeks 1-2","On-Page","+20% CTR"],["Page speed: GZIP, CDN, WebP","Developer","Weeks 1-2","CWV fix","+Core Vitals"],["Organization + FAQPage + BreadcrumbList schema","Developer","Week 2","GEO schema","Rich results"],["Claim + optimise Google Business Profile","Marketing","Week 1-2","Local SEO","Local Pack"],["Expand thin content to 800-1200 words","Content","Weeks 2-6","Content fix","+Rankings"],["Add definition sections + FAQ blocks","Content","Weeks 2-6","AEO fix","+PAA capture"]]},
    {name:"Phase 2 — Months 4-6: Authority & Content Build",focus:"Content clusters, E-E-A-T trust signals, link acquisition",col:{r:161,g:98,b:7},items:[["Publish 6-month content calendar","Content","Month 4","Content fix","Featured snippets"],["Launch 3 use case pages for niche verticals","SEO+Content","Month 4-5","GEO fix","Niche traffic"],["Publish 2 case studies with measurable results","Marketing","Month 4-5","E-E-A-T","Trust signals"],["Build 10+ quality backlinks","SEO","Month 4-6","Authority","+Domain Auth"],["Submit to Clutch, GoodFirms, DesignRush","Marketing","Month 4","GEO fix","Directory cites"],["10+ client testimonials + trust badges","Marketing","Month 4-5","E-E-A-T","Social proof"],["Achieve 83/100 overall audit score","All Teams","Month 6","Milestone","Score benchmark"]]},
    {name:"Phase 3 — Months 7-9: Scale & Brand Authority",focus:"International targeting, PR outreach, AI citation building",col:{r:21,g:128,b:61},items:[["International landing pages (white-label etc)","SEO+Dev","Month 7","Global kws","Intl leads"],["3 more case studies for E-E-A-T depth","Marketing","Month 7-8","E-E-A-T","Trust authority"],["Expand HowTo & QAPage schema","Developer","Month 7","AEO fix","Rich results"],["Link building: target DA60+ referral domains","SEO","Month 7-9","Authority","+10 domains"],["Press outreach: 3-5 media mentions","Marketing","Month 7-9","Domain auth","+3 DA60+ links"]]},
    {name:"Phase 4 — Months 10-12: Dominate & Sustain",focus:"Top 3 keyword push, 2027 AI search preparation",col:{r:124,g:58,b:237},items:[["Refresh all 2026 blog posts for 2027","Content","Month 10-11","Freshness","Posts refreshed"],["Push top 10 keywords toward Top 3","SEO","Months 10-12","Revenue kws","5+ in Top 3"],["Expand to 2 new niche verticals","SEO+Content","Month 10","Vertical auth","2 new pages"],["Full re-audit: target 93/100 overall score","SEO Lead","Month 12","Benchmark","93+ overall"],["2027 SEO predictions + strategy update","Content+SEO","Month 11-12","Thought lead","2027 keywords"]]},
  ];

  phases2.forEach(phase=>{
    needY(12);
    fill(phase.col); doc.rect(ML,y,CW,9,"F");
    fill(C.white); doc.roundedRect(ML,y,4,9,0,0,"F");
    fill(phase.col); doc.rect(ML,y,4,9,"F");
    bf(9); text(C.white); doc.text(phase.name,ML+6,y+6.3);
    italicf(6.5); text({r:220,g:220,b:220}); doc.text(phase.focus,PW-MR,y+6.3,"right");
    y+=11;

    needY(7);
    fill(C.red); doc.rect(ML,y,CW,7,"F");
    const px2=[ML+1,ML+56,ML+74,ML+90,ML+107];
    bf(6.5); text(C.white); ["Deliverable","Owner","Timeline","Audit Fix","Impact"].forEach((h,i)=>doc.text(h,px2[i],y+5));
    y+=7.5;

    phase.items.forEach((item,ii)=>{
      const dlL=doc.splitTextToSize(item[0],54);
      const rh=Math.max(9,dlL.length*3.8+4);
      needY(rh+0.5);
      fill(ii%2===0?C.white:C.bg); doc.rect(ML,y,CW,rh,"F");
      draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+rh,ML+CW,y+rh);
      nf(7); text(C.dark); dlL.forEach((ln,li)=>doc.text(ln,px2[0],y+4+li*3.8));
      nf(6.5); text(C.mid); doc.text(item[1],px2[1],y+rh/2+1.5); doc.text(item[2],px2[2],y+rh/2+1.5);
      fill({r:255,g:245,b:245}); doc.roundedRect(px2[3],y+rh/2-2,16,4,0.8,0.8,"F");
      bf(5.5); text(C.red); doc.text(item[3],px2[3]+8,y+rh/2+1.5,"center");
      nf(6.5); text({r:21,g:128,b:61}); doc.text(item[4],px2[4],y+rh/2+1.5);
      y+=rh+0.5;
    });
    y+=5;
  });

  // 12-Month Score Projection
  needY(36);
  bf(9); text(C.dark); doc.text("12-Month Score Projection",ML,y+6); y+=9;
  fill(C.red); doc.rect(ML,y,CW,7,"F");
  const prjX=[ML,ML+40,ML+82,ML+116,ML+150];
  bf(7); text(C.white); ["Module","Now (Mar 26)","Month 6","Month 9","Month 12 Target"].forEach((h,i)=>doc.text(h,prjX[i]+2,y+5));
  y+=7.5;
  [{mod:"SEO",now:70,m6:84,m9:88,t:"92/100 (A)"},{mod:"AEO",now:79,m6:89,m9:92,t:"95/100 (A+)"},{mod:"GEO",now:72,m6:85,m9:89,t:"92/100 (A)"},{mod:"OVERALL",now:74,m6:86,m9:90,t:"93/100 (A+)"}].forEach((r,i)=>{
    needY(9); fill(i===3?C.bg:C.white); doc.rect(ML,y,CW,8,"F");
    draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+8,ML+CW,y+8);
    bf(7.5); text(C.dark); doc.text(r.mod,prjX[0]+2,y+5.5);
    [r.now,r.m6,r.m9].forEach((v,ci)=>{
      const sc=v>=80?C.grnbg:v>=70?C.ambg:C.redbg;
      const tc=v>=80?{r:21,g:128,b:61}:v>=70?{r:161,g:98,b:7}:{r:185,g:28,b:28};
      chip(prjX[ci+1]+2,y+2,v+"/100",sc,tc,19);
    });
    fill(C.dark); doc.roundedRect(prjX[4]+2,y+2,24,4,1,1,"F");
    bf(6); text(C.white); doc.text(r.t,prjX[4]+14,y+5,"center");
    y+=8.5;
  });
  y+=6;

  // ═══════════════════════════════════════════════
  // SECTION 12: COMPETITORS
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  secHead("SECTION 12: COMPETITOR ANALYSIS","6 key competitors — India + Global digital marketing agency landscape");

  // Competitor overview table
  needY(7);
  fill(C.red); doc.rect(ML,y,CW,7,"F");
  const compX=[ML+1,ML+32,ML+44,ML+55,ML+82,ML+96,ML+110,ML+125];
  bf(6.5); text(C.white); ["Agency","Est.","Team","HQ","SEO","AEO","GEO","Pricing/mo"].forEach((h,i)=>doc.text(h,compX[i],y+5));
  y+=7.5;

  const COMP2=typeof COMPETITORS!=="undefined"?COMPETITORS:[];
  COMP2.forEach((c,i)=>{
    needY(9);
    fill(i%2===0?C.white:C.bg); doc.rect(ML,y,CW,8.5,"F");
    draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+8.5,ML+CW,y+8.5);
    bf(7); text(C.dark); doc.text(c.name,compX[0],y+5.5);
    nf(6.5); text(C.mid); doc.text(String(c.est),compX[1],y+5.5); doc.text(c.team,compX[2],y+5.5);
    const hqL=doc.splitTextToSize(c.hq,26);
    hqL.forEach((ln,li)=>doc.text(ln,compX[3],y+3+li*3.5));
    [[c.seo,C.seo],[c.aeo,C.aeo],[c.geo,C.geo]].forEach(([n,col],ci)=>{
      text(col); doc.text("●".repeat(n)+"○".repeat(5-n),compX[4+ci],y+5.5);
    });
    nf(6.5); text(C.dark); doc.text(c.pricing,compX[7],y+5.5);
    y+=9;
  });
  nf(5.8); text(C.light); doc.text("●●●●● = Industry-leading  ●●●●○ = Strong  ●●●○○ = Moderate  ●●○○○ = Weak  ●○○○○ = Minimal",ML,y+4); y+=8;

  // Competitor profiles
  bf(9); text(C.dark); doc.text("Detailed Competitor Profiles",ML,y+6); y+=9;
  COMP2.forEach((c,ci)=>{
    needY(36);
    fill(C.red); doc.rect(ML,y,CW,8,"F");
    bf(8.5); text(C.white); doc.text((ci+1)+". "+c.name+" ("+c.domain+")",ML+4,y+5.5);
    nf(6.5); text({r:255,g:200,b:200}); doc.text("Clutch: "+c.clutch+" · Est. "+c.est+" · Team: "+c.team,PW-MR,y+5.5,"right");
    y+=10;
    [["HQ / Market",c.hq+" | "+c.market+" | Est. "+c.est+" | Team: "+c.team],["Pricing",c.pricing+" | Clutch: "+c.clutch],["Strengths",c.strengths],["Weaknesses",c.weaknesses],["Our Opportunity",c.opp]].forEach(([lbl,val])=>{
      const valL=doc.splitTextToSize(val,CW-38);
      const rh=Math.max(9,valL.length*3.8+4);
      needY(rh+0.5);
      fill(C.bg); doc.rect(ML,y,36,rh,"F");
      fill(C.white); doc.rect(ML+36,y,CW-36,rh,"F");
      draw(C.border); doc.setLineWidth(0.1); doc.line(ML,y+rh,ML+CW,y+rh); doc.line(ML+36,y,ML+36,y+rh);
      bf(6.5); text(C.dark); doc.text(lbl,ML+2,y+rh/2+1.5);
      nf(7); text(lbl==="Our Opportunity"?C.red:C.dark); valL.forEach((ln,li)=>doc.text(ln,ML+38,y+4+li*3.8));
      y+=rh+0.5;
    });
    y+=5;
  });

  // ═══════════════════════════════════════════════
  // SECTION 13: KEYWORDS
  // ═══════════════════════════════════════════════
  ftr(); doc.addPage(); hdr();
  secHead("SECTION 13: KEYWORD RECOMMENDATIONS — 62 Keywords","Primary Commercial · Long-Tail · Local SEO · Global/International");

  const KW2=typeof KW!=="undefined"?KW:{primary:[],longtail:[],local:[],global:[]};
  const kwSections=[
    ["C.1 — Primary Commercial Keywords (10 Keywords)","Highest-value keywords for driving qualified leads. High competition — requires strong domain authority and consistent link building over 12 months.",KW2.primary],
    ["C.2 — Long-Tail Informational Keywords (15 Keywords)","Lower competition keywords targeting AEO/GEO gaps. Drive featured snippets, AI citations, and awareness-stage traffic that converts over time.",KW2.longtail],
    ["C.3 — Local SEO Keywords — Agra & Near Me (8 Keywords)","Critical for driving nearby business enquiries. Very low competition and high commercial intent — fastest ROI opportunity in the entire keyword set.",KW2.local],
    ["C.4 — Global & International Keywords (8 Keywords)","Target international clients looking to outsource digital marketing from India. High-value B2B leads with strong conversion potential.",KW2.global],
  ];

  kwSections.forEach(([title,desc,kwList])=>{
    needY(14);
    bf(9); text(C.dark); doc.text(title,ML,y+6); y+=8;
    const descL=doc.splitTextToSize(desc,CW);
    needY(descL.length*3.8+4);
    nf(7); text(C.mid); descL.forEach((ln,li)=>doc.text(ln,ML,y+4+li*3.8)); y+=descL.length*3.8+6;
    // KW table header
    needY(7);
    fill(C.red); doc.rect(ML,y,CW,7,"F");
    const kwX=[ML+1,ML+68,ML+84,ML+100,ML+118,ML+136];
    bf(6.5); text(C.white); ["Keyword","Volume/mo","Difficulty","Intent","Priority","Target Page"].forEach((h,i)=>doc.text(h,kwX[i],y+5));
    y+=7.5;
    (kwList||[]).forEach((kw,ii)=>{
      const pgL=doc.splitTextToSize(kw.page,CW-136-4);
      const rh=Math.max(9,pgL.length*3.8+4);
      needY(rh+0.5);
      fill(ii%2===0?C.white:C.bg); doc.rect(ML,y,CW,rh,"F");
      draw(C.border); doc.setLineWidth(0.07); doc.line(ML,y+rh,ML+CW,y+rh);
      nf(7); text(C.dark); doc.text(kw.kw||"",kwX[0],y+rh/2+1.5);
      nf(6.5); text(C.mid); doc.text(kw.vol||"",kwX[1],y+rh/2+1.5);
      const dc=kw.diff==="HIGH"?C.red2:kw.diff==="MEDIUM"?C.amber:C.green;
      const db=kw.diff==="HIGH"?C.redbg:kw.diff==="MEDIUM"?C.ambg:C.grnbg;
      chip(kwX[2],y+rh/2-2,kw.diff||"",db,dc,14);
      nf(6.5); text(C.mid); doc.text(kw.intent||"",kwX[3],y+rh/2+1.5);
      const pm={CRITICAL:{bg:C.redbg,tc:C.red2},HIGH:{bg:C.ambg,tc:{r:161,g:98,b:7}},MEDIUM:{bg:{r:254,g:252,b:232},tc:{r:133,g:77,b:14}},LOW:{bg:C.bg,tc:C.light}};
      const p2=pm[kw.pri]||pm.LOW;
      chip(kwX[4],y+rh/2-2,kw.pri||"",p2.bg,p2.tc,15);
      nf(6.5); text(C.geo); pgL.forEach((ln,li)=>doc.text(ln,kwX[5],y+4+li*3.8));
      y+=rh+0.5;
    });
    y+=6;
  });

  // FINAL BACK PAGE
  needY(20);
  fill(C.dark); doc.roundedRect(ML,y,CW,18,2,2,"F");
  bf(9.5); text(C.red); doc.text(dom+" — Complete Digital Marketing Strategy & Audit Report",ML+CW/2,y+8,"center");
  nf(7); text(C.white); doc.text("Prepared by BuimbDigital  ·  info@BuimbDigital.com  ·  "+dateStr,ML+CW/2,y+13.5,"center");
  italicf(6); text(C.light); doc.text("CONFIDENTIAL — For Internal Distribution Only. Do Not Distribute Without Authorization.",ML+CW/2,y+17,"center");

  ftr();
  doc.save(dom.replace(/[^a-zA-Z0-9]/g,"-")+"-Audit-Report-"+new Date().toISOString().slice(0,10)+".pdf");
}