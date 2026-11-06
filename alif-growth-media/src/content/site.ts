import safaLogo from "@/assets/safa-fresh.png";
import dtLogo from "@/assets/dt-interiors.png";
import sumeraLogo from "@/assets/sumera-collections.png";

export const company = {
  name: "Alif Growth Media",
  tagline: "Custom Business Software, Visual CMS & Operating Systems for Local Enterprises",
  email: "hello.alifstudio@gmail.com",
  phone: "+91 91218 09212",
  phoneHref: "tel:+919121809212",
  whatsappPhone: "9121809212",
  get phoneE164() {
    return `+91${this.whatsappPhone}`;
  },
  whatsappMessage:
    "Hello Alif Growth Media, I want to upgrade my business with your custom software and operating systems.",
  get whatsapp() {
    return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  address: "Warangal, Telangana, India",
  areas: "Warangal · Hanamkonda · Hyderabad · Telangana",
  hours: "Mon – Sat, 10:00 – 19:00 IST",
  regions: ["India", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Software Systems" },
  { to: "/work", label: "Client Platforms" },
  { to: "/blog", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const problems = [
  {
    i: "1",
    t: "No Control After Website Launch",
    b: "AI and freelancers build static sites, but you cannot edit products, prices, or banners without paying a developer or recoding from scratch.",
  },
  {
    i: "2",
    t: "Missing Enterprise Tools & Visibility",
    b: "Local businesses miss out on CRMs, automated cashflow ledgers, and live inventory tools simply because big tech builds only for giant corporations.",
  },
  {
    i: "3",
    t: "Disconnected Business Operations",
    b: "Your website visitors, social media leads, cash register, and customer histories are scattered across notebooks and separate apps without one central screen.",
  },
];

export const pillars = [
  {
    k: "Self-Serve CMS",
    t: "Scalable Sites with Live Visual Admin",
    b: "High-performance Next.js/Vercel websites with our built-in visual editor so business owners can edit content and images on the fly with zero technical knowledge.",
  },
  {
    k: "Operating Tools",
    t: "Custom CRM, Invoicing & Inventory",
    b: "Tailor-made software built in your brand's name: WhatsApp-integrated customer pipeline, 1-tap invoice generator, and daily stock tracking.",
  },
  {
    k: "Executive View",
    t: "Mobile Owner Intelligence Dashboard",
    b: "A single mobile dashboard showing today's collections, website lead conversions, social media inquiries, and customer purchase histories in real time.",
  },
];

export const steps = [
  {
    t: "Architect",
    b: "We audit your daily operations, customer touchpoints, and technical bottlenecks.",
  },
  {
    t: "Engineer",
    b: "We build your high-speed website, visual admin editor, and branded business software.",
  },
  {
    t: "Integrate",
    b: "We wire your WhatsApp CRM, automated invoicing receipts, and live inventory.",
  },
  {
    t: "Empower",
    b: "You monitor cashflow, leads, and customer retention from a single mobile dashboard.",
  },
];

export type Service = {
  slug: string;
  t: string;
  b: string;
  includes: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "visual-cms-web-engineering",
    t: "Scalable Web Engineering & Live Visual CMS",
    b: "We build ultra-fast, modern web applications that give business owners a private visual admin editor. Update text, banners, and product catalogs instantly without writing a single line of code or waiting on developers.",
    includes: [
      "Production-grade Next.js / React storefronts and web portals",
      "Embedded Visual Page Editor & Content Management System (CMS)",
      "Zero-downtime continuous deployment on Vercel & cloud edge",
      "Instant WhatsApp click-to-chat & automated lead capture buttons",
    ],
    outcome:
      "A world-class digital storefront that you own and control completely without developer dependency.",
  },
  {
    slug: "custom-crm-whatsapp-automations",
    t: "Custom WhatsApp CRM & Lead Engines",
    b: "Local customers communicate on WhatsApp. We engineer custom-tailored CRM systems that capture every inquiry across Google, Instagram, and web, routing them directly into a shared WhatsApp pipeline.",
    includes: [
      "Custom WhatsApp CRM with multi-agent inbox and sales pipelines",
      "Automated instant replies, greetings, and digital product catalogs",
      "Lead scoring, stage tracking, and automated customer follow-ups",
      "Full integration with your central business database (Supabase)",
    ],
    outcome: "Never lose a customer inquiry again, even during peak store hours or late nights.",
  },
  {
    slug: "invoicing-cashflow-inventory",
    t: "Custom Invoicing, Cash Ledgers & Inventory",
    b: "Eliminate manual bookkeeping and lost receipts. We deploy tailored billing software and stock-tracking systems configured specifically for your business workflow.",
    includes: [
      "One-tap digital invoice and receipt generator with WhatsApp delivery",
      "Daily cash vs. UPI collection tracking with instant payment status",
      "Live inventory management with low-stock alerts and SKU monitoring",
      "Exportable financial reports ready for GST and tax compliance",
    ],
    outcome:
      "Absolute clarity over daily revenue, outstanding customer dues, and warehouse inventory.",
  },
  {
    slug: "owner-bi-dashboard",
    t: "Unified Mobile Owner Intelligence Dashboard",
    b: "Operate your entire business from your phone. Our unified executive dashboard aggregates website traffic, social media leads, customer lifetime value, and daily collections into one glanceable screen.",
    includes: [
      "Live overview of website visitors and conversion rates",
      "Omnichannel social media inquiry tracking in one feed",
      "Comprehensive customer profile history: visits, purchases & dues",
      "Predictive sales analytics and automated growth recommendations",
    ],
    outcome:
      "Total real-time visibility into your business health without asking staff or checking registers.",
  },
];

export const engagements = [
  {
    t: "Tech Architecture Audit",
    price: "Complimentary",
    b: "A structured 45-minute audit of your current digital setup, customer communication channels, and software bottlenecks.",
    points: [
      "45-minute working architecture review",
      "Complete Software & Automation Roadmap",
      "No obligation to continue",
    ],
  },
  {
    t: "Custom Platform Sprint",
    price: "Project based",
    b: "High-speed website, visual admin editor, WhatsApp CRM, and business billing systems engineered and deployed.",
    points: [
      "Complete custom website + Visual CMS",
      "WhatsApp CRM & Lead Capture Engine",
      "Staff training & full cloud handover",
    ],
    featured: true,
  },
  {
    t: "Embedded IT Partner (Retainer)",
    price: "Monthly Partnership",
    b: "We act as your dedicated IT team and fractional CTO—monitoring, updating, and scaling all your software tools.",
    points: [
      "Continuous tool customization & features",
      "Dashboard maintenance & uptime monitoring",
      "Monthly operational review & insights",
    ],
  },
];

export const results = [
  {
    t: "Instant Owner Visibility",
    s: "100%",
    b: "real-time clarity on website visits, cashflow, and customer histories.",
  },
  {
    t: "Zero Lead Loss",
    s: "< 2 Mins",
    b: "average WhatsApp enquiry response time through automated lead routing.",
  },
  {
    t: "Zero Developer Dependency",
    s: "1-Tap",
    b: "visual content and catalog updates directly by the business owner.",
  },
];

export const collaborations = [
  {
    name: "SAFA Fresh",
    industry: "Fresh Foods & Retail",
    desc: "Clean full-stack ordering platform and inventory management for a premier fresh-foods business.",
    scope: "Next.js Storefront · .NET Backend · PostgreSQL · WhatsApp Order Flow",
    href: "https://safa-foods-xuac.vercel.app/",
    logo: safaLogo,
  },
  {
    name: "DT Interiors",
    industry: "Luxury Interior Design",
    desc: "Bespoke digital architecture showcasing luxury craftsmanship with embedded AI consultation tools.",
    scope: "Ultra-Fast Web Portal · AI Project Assistant · Lead Capture Pipeline",
    href: "https://dt-interiors.vercel.app/",
    logo: dtLogo,
  },
  {
    name: "Sumera Collections",
    industry: "Fashion & Retail",
    desc: "Modern women's ethnic wear digital storefront backed by Firebase and automated WhatsApp catalogue browsing.",
    scope: "Cloud Storefront · Firebase Database · WhatsApp Catalogue Integration",
    href: "https://sumeeracollections.vercel.app/",
    logo: sumeraLogo,
  },
];

export type Prototype = {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  illustrationType:
    | "visual-cms"
    | "whatsapp-crm"
    | "invoicing"
    | "membership"
    | "store-orders"
    | "dashboard"
    | "showcase"
    | "reports";
  summary: string;
  bulletPoints: string[];
  liveUrl: string;
  repoName: string;
  readyTime: string;
};

export function getPrototypeWhatsappUrl(title: string): string {
  const msg = `Hello Alif Growth Media, I checked your "${title}" prototype and would like to discuss customizing it for my business.`;
  return `https://wa.me/${company.whatsappPhone}?text=${encodeURIComponent(msg)}`;
}

export const prototypes: Prototype[] = [
  {
    id: "visual-cms",
    title: "Visual Website & Content Editor",
    tagline:
      "Update your website anytime directly from your phone — no developers or coding needed.",
    category: "Website Management",
    badge: "Live Prototype",
    illustrationType: "visual-cms",
    summary:
      "Click any text, photo, or announcement banner to edit it on the spot and hit save. Your live site updates instantly without waiting for a coder.",
    bulletPoints: [
      "Change product prices and banner announcements in 1 click",
      "Works on any mobile phone, tablet, or laptop",
      "Never pay or wait for a web developer for simple updates",
    ],
    liveUrl: "https://safar-studio-snm.vercel.app",
    repoName: "crm-invoicing-hub",
    readyTime: "Ready to Customize",
  },
  {
    id: "whatsapp-crm",
    title: "WhatsApp Customer Hub & CRM",
    tagline: "Turn missed WhatsApp chats into organized paying customers with automated greetings.",
    category: "Customer & Sales Hub",
    badge: "Live Prototype",
    illustrationType: "whatsapp-crm",
    summary:
      "All incoming messages from Google, your website, and Instagram arrive in one organized team inbox with smart instant replies.",
    bulletPoints: [
      "Instant greeting & catalog reply when customers message",
      "Organize new leads, orders, and repeat customers clearly",
      "Never lose an inquiry when your shop or staff is busy",
    ],
    liveUrl: "https://safar-crm-theta.vercel.app",
    repoName: "safar-crm",
    readyTime: "Ready to Customize",
  },
  {
    id: "invoicing",
    title: "1-Tap Digital Invoicing & Daily Cash Tracker",
    tagline: "Generate professional bills in seconds and send them directly to customer WhatsApps.",
    category: "Billing & Cashflow",
    badge: "Live Prototype",
    illustrationType: "invoicing",
    summary:
      "Stop searching through paper bill books. Create clean digital receipts, track daily Cash vs. UPI collections, and stay tax-ready.",
    bulletPoints: [
      "Send clean PDF receipts straight to customer WhatsApp in 1 tap",
      "Daily cash collection tracker: see today's exact totals instantly",
      "Customer payment history: know who paid and who has dues",
    ],
    liveUrl: "https://invofy-kappa.vercel.app",
    repoName: "invofy",
    readyTime: "Ready to Customize",
  },
  {
    id: "membership",
    title: "Member Records & Fee Renewal Manager",
    tagline: "Automate monthly fee collections and send friendly WhatsApp payment reminders.",
    category: "Membership & Dues",
    badge: "Live Prototype",
    illustrationType: "membership",
    summary:
      "Designed for gyms, fitness clubs, academies, and subscription services. Track active plans, expiring passes, and pending dues with zero paperwork.",
    bulletPoints: [
      "Automatic WhatsApp reminder links before memberships expire",
      "Color-coded member attendance and payment status",
      "Instant receipt generation and renewal tracking",
    ],
    liveUrl: "https://e-repcount-gym-payment-manager.vercel.app",
    repoName: "e-repcount-gym-payment-manager",
    readyTime: "Ready to Customize",
  },
  {
    id: "store-orders",
    title: "Household Grocery & Fresh Store Platform",
    tagline: "A clean mobile catalog for customers to place weekly orders easily.",
    category: "Digital Storefront & Orders",
    badge: "Deployed Platform",
    illustrationType: "store-orders",
    summary:
      "Ideal for grocery shops, meat stores, and organic suppliers. Customers browse items by category, build a cart, and place orders directly to your WhatsApp.",
    bulletPoints: [
      "Mobile-first ordering that even elderly customers find effortless",
      "Direct order receipt dispatched to your WhatsApp counter",
      "Easy item availability and price adjustment",
    ],
    liveUrl: "https://safa-foods-xuac.vercel.app",
    repoName: "Safa-Foods",
    readyTime: "Production Ready",
  },
  {
    id: "showcase",
    title: "Luxury Interior & Craftsmanship Showcase",
    tagline: "Present premium craftsmanship with elegant galleries and fast inquiry booking.",
    category: "Portfolio & Consultations",
    badge: "Deployed Platform",
    illustrationType: "showcase",
    summary:
      "Built for interior designers, architects, and custom fabricators. Showcase finished projects with smooth photo galleries and instant estimation requests.",
    bulletPoints: [
      "High-definition project galleries organized by style and room",
      "Smart inquiry form that captures room size and budget intent",
      "Fast, lightweight loading that looks stunning on mobile",
    ],
    liveUrl: "https://dt-interiors.vercel.app",
    repoName: "Dt-interiors",
    readyTime: "Production Ready",
  },
  {
    id: "boutique",
    title: "Boutique Fashion & Ethnic Wear Storefront",
    tagline: "Turn Instagram visitors into buyers with a browsable digital collection.",
    category: "Boutique & Retail",
    badge: "Deployed Platform",
    illustrationType: "store-orders",
    summary:
      "Perfect for clothing boutiques and jewelry brands. Customers browse seasonal collections, check availability, and inquire about their size in 1 tap.",
    bulletPoints: [
      "Organized by seasonal collections and product styles",
      "1-tap 'Check Availability on WhatsApp' button on every item",
      "Modern look that elevates your brand reputation",
    ],
    liveUrl: "https://sumeeracollections.vercel.app",
    repoName: "sumera_collections",
    readyTime: "Production Ready",
  },
  {
    id: "reports",
    title: "Business Insight & Visual Reporting Studio",
    tagline: "Turn complex spreadsheets into simple visual charts that show how sales are moving.",
    category: "Owner Reports & Charts",
    badge: "Live Prototype",
    illustrationType: "reports",
    summary:
      "Drop in your sales records or customer lists and immediately view clear graphs showing your bestselling days, popular products, and growth patterns.",
    bulletPoints: [
      "Simple visual charts instead of complicated spreadsheets",
      "Runs 100% privately on your device with no data uploaded",
      "Identify peak selling hours and customer trends in seconds",
    ],
    liveUrl: "https://data-automation-studio-orpin.vercel.app",
    repoName: "data-automation-studio",
    readyTime: "Ready to Customize",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  desc: string;
  scope: string;
  href: string;
  logo: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "safa-fresh",
    name: "SAFA Fresh",
    industry: "Fresh Foods & Retail",
    location: "Warangal, Telangana",
    desc: "A stronger digital presence for a growing local food brand.",
    scope: "Brand refresh · Website · Ordering enquiries",
    href: "https://safa-foods-xuac.vercel.app/",
    logo: safaLogo,
    challenge:
      "SAFA Fresh had quality products and a loyal offline customer base, but their digital presence did not communicate freshness, trust, or ease of ordering. Most enquiries came through scattered WhatsApp messages that were easy to miss during busy hours.",
    approach: [
      "Researched the local fresh-foods niche and how customers in Warangal search for quality ingredients.",
      "Mapped SAFA's product range to clear categories and ordering flows.",
      "Built a clean, mobile-first storefront with WhatsApp enquiry integration.",
      "Ran performance marketing focused on nearby buyers and repeat customers.",
    ],
    deliverables: [
      "Brand-aligned website with product categories",
      "WhatsApp ordering and auto-reply flow",
      "Social content system for offers and new arrivals",
      "Local SEO and Google Business Profile optimisation",
    ],
    outcomes: [
      "Faster, more organised order enquiries",
      "Clearer product discovery on mobile",
      "Stronger local visibility for fresh-food searches",
    ],
  },
  {
    slug: "dt-interiors",
    name: "DT Interiors",
    industry: "Interior Design",
    location: "Warangal, Telangana",
    desc: "A premium online experience reflecting exceptional interior craftsmanship.",
    scope: "Portfolio site · Lead capture · Social systems",
    href: "https://dt-interiors.vercel.app/",
    logo: dtLogo,
    challenge:
      "DT Interiors' work spoke for itself in person, but online prospects could not see the depth of their portfolio or understand the design process. Leads were slipping away because the brand felt generic rather than premium.",
    approach: [
      "Studied the interior-design customer journey in the region.",
      "Restructured the portfolio around project types and customer intent.",
      "Designed a premium site that mirrors the quality of their finished spaces.",
      "Set up lead-capture and social proof systems to build confidence.",
    ],
    deliverables: [
      "Portfolio website with project galleries",
      "Lead capture forms and enquiry automation",
      "Brand consistency across Instagram and listings",
      "Content templates for before/after project stories",
    ],
    outcomes: [
      "More qualified interior-design enquiries",
      "Higher perceived value before the first call",
      "Easier sharing of work with prospects",
    ],
  },
  {
    slug: "sumera-collections",
    name: "Sumera Collections",
    industry: "Fashion & Retail",
    location: "Warangal, Telangana",
    desc: "A modern brand experience built for everyday customer discovery.",
    scope: "Storefront experience · WhatsApp automation",
    href: "https://sumeeracollections.vercel.app/",
    logo: sumeraLogo,
    challenge:
      "Sumera Collections had a strong product line but no structured way for customers to browse collections, ask about availability, or complete a purchase enquiry. Social media alone was not turning interest into sales.",
    approach: [
      "Analysed the fashion retail audience and how they discover collections online.",
      "Organised products into browsable collections with clear pricing signals.",
      "Integrated WhatsApp so every product view can become a conversation.",
      "Built a content rhythm to keep the brand top of mind.",
    ],
    deliverables: [
      "Collection-focused storefront",
      "WhatsApp catalogue and enquiry automation",
      "Social content calendar and templates",
      "Customer follow-up workflow",
    ],
    outcomes: [
      "More product enquiries through WhatsApp",
      "Better collection discovery on mobile",
      "Consistent brand experience across touchpoints",
    ],
  },
];

export const values = [
  {
    t: "Clarity over jargon",
    b: "Every recommendation is explained in language a business owner can act on immediately.",
  },
  {
    t: "Systems over one-off tasks",
    b: "We build repeatable processes so growth continues after a campaign ends.",
  },
  {
    t: "Local context first",
    b: "We design for how customers in Telangana and the Gulf actually search, message and decide.",
  },
  {
    t: "Accountability",
    b: "Clear scope, clear timelines, and honest reporting on what worked and what did not.",
  },
];

export const team = [
  {
    name: "Mohammed Minhaj",
    role: "Co-Founder & Technical Architect",
    bio: "Mohammed designs and engineers high-performance web applications, embedded business tools, and data architectures. He acts as an embedded fractional CTO for local enterprises, giving business owners full control over their digital platforms without technical headaches.",
    email: "minhajmuhammad229@gmail.com",
    phone: "+91 99085 97337",
    linkedin: "https://www.linkedin.com/in/muhammadminhaj229",
    image: null as string | null,
  },
];

export const faqs = [
  {
    q: "Can I edit my website content without knowing how to code?",
    a: "Yes! Every website we build includes our custom Visual Admin Editor. You can change text, banners, product prices, and photos with a few clicks from any device, and your live site updates instantly without redeploying code.",
  },
  {
    q: "How does the WhatsApp CRM help my business?",
    a: "Instead of losing customer messages across personal phones, all inquiries from Google, your website, and social channels flow into one organized WhatsApp pipeline. It automatically greets customers, answers common questions, and tracks every lead to closure.",
  },
  {
    q: "Can you build custom invoicing and inventory tools for my specific business?",
    a: "Absolutely. We build custom-branded billing software and inventory trackers specifically tailored to how your shop, warehouse, or service works—complete with WhatsApp receipt dispatch and low-stock alerts.",
  },
  {
    q: "What does the Mobile Owner Dashboard show me?",
    a: "It gives you a complete, real-time command center on your phone: today's cash vs. UPI collections, website visitors and lead conversions, social media message volume, and comprehensive customer purchase histories.",
  },
  {
    q: "Are we trapped or dependent on your agency?",
    a: "Never. All software, code, Supabase databases, Vercel deployments, and domain accounts are created in your business's name with full administrative ownership handed over to you.",
  },
  {
    q: "Do you support businesses across Telangana and the Gulf?",
    a: "Yes. We work closely with local enterprises across Warangal, Hanamkonda, Hyderabad, and GCC markets (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman).",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  content: { heading: string; body: string[] }[];
  keyStats?: BlogStat[];
  references?: BlogReference[];
};

export type BlogReference = {
  label: string;
  publisher: string;
  year: string;
  href: string;
};

export type BlogStat = {
  value: string;
  label: string;
  source: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-local-businesses-in-telangana-need-a-digital-growth-system",
    title: "The cost of staying offline: what the data says about Indian local businesses in 2026",
    excerpt:
      "ICRIER surveyed 2,365 Indian MSMEs across 12 states. Firms integrated with digital channels pulled ahead on turnover, hiring and exports. Here is the evidence, and what it predicts for businesses that stay offline.",
    date: "2026-07-28",
    author: "Mohammed Minhaj",
    readTime: "9 min read",
    category: "Research",
    tags: ["MSME", "Telangana", "Research", "Digital adoption"],
    keyStats: [
      {
        value: "38% vs 25%",
        label:
          "Share of MSMEs crossing ₹1 crore turnover in 2023-24 — digitally integrated firms vs non-integrated firms",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
      {
        value: "77% vs 64%",
        label:
          "Share employing more than 10 workers by 2023-24 — integrated vs non-integrated firms",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
      {
        value: "65% vs 11%",
        label: "Firms selling through additional online channels beyond marketplaces",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
    ],
    content: [
      {
        heading: "The evidence base",
        body: [
          "In March 2025 the Indian Council for Research on International Economic Relations (ICRIER) published its Annual Survey of Micro, Small and Medium Enterprises in India, subtitled 'The Role of Digitalisation in Enterprise Development'. It is one of the few Indian studies that tracks the same question we get asked every week in Warangal: does going digital actually change the numbers, or does it just look modern?",
          "The survey covered 2,365 MSMEs across 12 states and more than 20 clusters, and compared firms integrated with e-commerce and digital sales channels against firms that were not. Because the study is inter-temporal, it does not just take a snapshot — it follows how the same categories of firms moved between 2021-22 and 2023-24.",
        ],
      },
      {
        heading: "The gap is widening, not closing",
        body: [
          "In 2021-22, about 25% of digitally integrated firms reported turnover above ₹1 crore, against 20% of non-integrated firms — a five-point gap. By 2023-24 the integrated group had climbed to 38% while the non-integrated group reached 25%. The gap had more than doubled, to thirteen points.",
          "Hiring followed the same curve. In 2021-22, 60% of integrated enterprises employed more than 10 workers, compared with 50% of non-integrated ones. By 2023-24 that was 77% against 64%.",
          "This is the part most owners underestimate. Offline businesses are not standing still — many are growing. They are simply growing more slowly than their digitised competitors in the same cluster, which over three or four years turns a small difference into a market-share problem.",
        ],
      },
      {
        heading: "Second-order effects compound the advantage",
        body: [
          "ICRIER found that more than 90% of integrated firms adopted innovative business practices — new production or distribution methods, new product launches, or first-time exporting. Around 60% invested in skill training for employees after integrating.",
          "Digital reach also multiplies: 65% of integrated firms sold through additional online channels, compared with just 11% of non-integrated firms. And among export-oriented integrated firms, roughly 93% used e-commerce marketplaces to reach international buyers — including a substantial share of micro-enterprises.",
          "There is a financing consequence too. The report notes that the digital footprint a business creates improves its creditworthiness, and that both average interest rates and the credit gap were lower for integrated enterprises. Being invisible online is, in effect, being invisible to lenders.",
        ],
      },
      {
        heading: "What this predicts for a business that stays offline",
        body: [
          "We do not think a business fails because it lacks a website. The realistic prediction from this data is quieter and more damaging: a slow erosion. On current trajectories, an offline local business in Telangana can expect to see its share of new customers shrink each year while its existing customers stay loyal — which masks the problem until the older customer base ages out.",
          "Specifically, the ICRIER trend lines suggest three pressures: fewer high-growth years (the turnover gap), a harder time hiring and retaining a larger team (the employment gap), and costlier credit (the finance gap). None of these show up in a single quarter. All of them show up in a three-year comparison.",
          "Discovery adds a fourth pressure. BrightLocal's Local Consumer Review Survey 2025 found that only 4% of consumers say they never read online reviews, and 74% consult two or more sources before choosing a local business. A business with no reviewable, comparable online presence is not losing an argument with competitors — it is not in the consideration set at all.",
        ],
      },
      {
        heading: "What a growth system actually means",
        body: [
          "The ICRIER data points to integration, not tools. Firms that benefited did not buy one product; they connected sales channels, communication and records into something that operated daily.",
          "That is how we structure work at Alif Growth Media: a clear brand identity so the business is credible on first contact, automated customer communication so enquiries are answered in minutes rather than hours, and simple reporting so the owner can see which of the two is working.",
          "If you want to test the gap for your own business, the honest first step is a comparison, not a purchase: look at the three competitors in your category who are visible online, and count their reviews, response times and product listings against yours.",
        ],
      },
    ],
    references: [
      {
        label:
          "Annual Survey of Micro, Small and Medium Enterprises in India: The Role of Digitalisation in Enterprise Development",
        publisher: "ICRIER (Goyal, Puri & Khanna)",
        year: "March 2025",
        href: "https://icrier.org/pdf/Annual-Survey-MSMEs_India_2025.pdf",
      },
      {
        label: "Press release and key highlights of the MSME survey",
        publisher: "ICRIER",
        year: "27 March 2025",
        href: "https://icrier.org/pdf/PR_Annual-Survey-of-MSMEs.pdf",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "how-whatsapp-automation-turns-missed-messages-into-sales",
    title: "Speed to lead: the research behind replying in five minutes",
    excerpt:
      "Harvard Business Review measured what happens when firms take an hour to answer an enquiry instead of five minutes. The difference is not incremental — it is an order of magnitude.",
    date: "2026-07-25",
    author: "Mohammed Minhaj",
    readTime: "7 min read",
    category: "Research",
    tags: ["WhatsApp", "Automation", "Lead response", "Sales"],
    keyStats: [
      {
        value: "7x",
        label:
          "Higher odds of qualifying a lead when contacted within an hour versus just one hour later",
        source: "Harvard Business Review, 'The Short Life of Online Sales Leads'",
      },
      {
        value: "60x",
        label:
          "Higher odds of qualifying a lead when contacted within an hour versus 24 hours or more later",
        source: "Harvard Business Review, 'The Short Life of Online Sales Leads'",
      },
      {
        value: "21.6%",
        label:
          "Increase in progression through lead-generation funnels from a 0.1s improvement in mobile site speed",
        source: "Deloitte & Google, 'Milliseconds Make Millions'",
      },
    ],
    content: [
      {
        heading: "The study everyone quotes, and what it actually measured",
        body: [
          "James Oldroyd, Kristina McElheran and David Elkington audited how quickly firms responded to inbound web enquiries, and published the findings in Harvard Business Review as 'The Short Life of Online Sales Leads'. The audit covered thousands of US firms and tens of thousands of leads.",
          "The headline result: firms that tried to contact a potential customer within an hour of receiving an enquiry were nearly seven times more likely to have a meaningful conversation with a decision-maker than firms that waited even one hour longer — and more than sixty times more likely than firms that waited 24 hours or more.",
          "The researchers also found that most firms were far slower than they believed. The average first-response time in their audit was measured in dozens of hours, not minutes, and a substantial share of enquiries were never responded to at all.",
        ],
      },
      {
        heading: "Why the decay curve is so steep",
        body: [
          "Intent is perishable. A customer messaging about a kitchen renovation, a bulk grocery order or a boutique enquiry is usually messaging three or four businesses in the same sitting. The first useful reply frames the comparison; every later reply is judged against it.",
          "This is why 'we usually get back within a day' is not a service standard — it is a concession of the enquiry to whoever replied at minute two.",
        ],
      },
      {
        heading: "Speed on the page matters as much as speed in the inbox",
        body: [
          "Deloitte, working with Google, analysed mobile site data from 37 brands across retail, travel, luxury and lead generation in the study 'Milliseconds Make Millions'. Improving mobile site speed by just 0.1 seconds increased retail conversion rates by 8.4% and average order value by 9.2%.",
          "For lead-generation businesses — which is what most local service brands are — the same 0.1 second improvement increased progression through the funnel by 21.6%. Luxury brands saw an 8.6% lift in page views per session.",
          "In practice, page speed and reply speed are the same problem viewed at two scales: how long a ready-to-buy customer is asked to wait.",
        ],
      },
      {
        heading: "What automation should and should not do",
        body: [
          "Automation is not there to fake a human. It is there to close the gap between the moment intent peaks and the moment a person can respond properly.",
          "A well-built WhatsApp flow acknowledges the message immediately, answers the two or three questions that are asked in almost every enquiry (price range, availability, location, timeline), shares the catalogue or portfolio, and captures the enquiry into a list the owner works through — so the human reply, when it comes, is informed rather than starting from zero.",
          "What it should not do is loop, interrogate or hide the option of reaching a person. BrightLocal's 2025 review research found consumers are already suspicious of anything they read as inauthentic; the same instinct applies to conversations.",
        ],
      },
      {
        heading: "A benchmark you can hold yourself to",
        body: [
          "Set two numbers and measure them monthly: median first-response time, and the percentage of enquiries that receive no response at all. Most local businesses we audit start with a median in hours and a no-response rate above 15%.",
          "Getting the median under five minutes and the no-response rate to zero is a systems problem with a known solution — and, on the HBR numbers, the single highest-leverage change available to a business that is already generating enquiries.",
        ],
      },
    ],
    references: [
      {
        label: "The Short Life of Online Sales Leads (Oldroyd, McElheran & Elkington)",
        publisher: "Harvard Business Review",
        year: "2011",
        href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
      {
        label: "Milliseconds Make Millions: the impact of mobile speed on business metrics",
        publisher: "Deloitte Digital with Google",
        year: "2020",
        href: "https://web.dev/case-studies/milliseconds-make-millions",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "what-gulf-region-local-businesses-should-know-before-going-digital",
    title: "Going digital in the Gulf: market data for UAE and GCC service brands",
    excerpt:
      "The UAE's e-commerce market is measured in the billions of dollars and national programmes like Saudi Vision 2030 are pushing SME digitisation. Here is what the numbers mean for a local service brand entering the Gulf.",
    date: "2026-07-22",
    author: "Mohammed Minhaj",
    readTime: "8 min read",
    category: "Global",
    tags: ["Gulf", "UAE", "Saudi Arabia", "Market data"],
    keyStats: [
      {
        value: "USD 11.05bn",
        label:
          "Estimated size of the UAE e-commerce market, with continued growth forecast to 2030",
        source: "Nexdigm, UAE E-Commerce Market Outlook to 2030",
      },
      {
        value: "Vision 2030",
        label:
          "Saudi Arabia's national programme continues to be the primary driver of SME digital and SaaS adoption across the GCC",
        source: "GCC digital transformation market analyses, 2026",
      },
      {
        value: "21.6%",
        label:
          "Lead-generation funnel progression gained from a 0.1s mobile speed improvement — decisive in a mobile-first region",
        source: "Deloitte & Google, 'Milliseconds Make Millions'",
      },
    ],
    content: [
      {
        heading: "The market is large, digital and unusually mobile",
        body: [
          "The UAE e-commerce market has been estimated at around USD 11.05 billion, driven by very high mobile and internet penetration and a young, urban, high-spending population. Market outlooks published through 2025 and 2026 project continued expansion to 2030.",
          "Across the wider GCC, national programmes — Saudi Vision 2030 most prominently — have made digital transformation an explicit policy objective, funding SME digitisation and pulling SaaS adoption forward faster than most comparable regions.",
          "The practical consequence for a small service brand: you are not persuading Gulf customers to shop online. They already do. You are competing for attention inside an environment where digital-first is the baseline, not a differentiator.",
        ],
      },
      {
        heading: "Trust signals carry more weight than traffic",
        body: [
          "Gulf markets have a large expatriate population making high-consideration purchases — home services, interiors, catering, tailoring — often without local word-of-mouth networks to fall back on. Online proof substitutes for personal referral.",
          "BrightLocal's 2025 consumer research, while US-based, describes behaviour that maps closely onto this: 74% of consumers consult two or more sources before choosing a local business, and consumers increasingly favour long, detailed reviews with photos and video over star ratings alone. A profile with four reviews and no imagery does not read as 'new'. It reads as 'unverified'.",
          "Concretely, that means a consistent trading name across every listing, licence and registration details visible, real photographs of real work, and reviews on more than one platform.",
        ],
      },
      {
        heading: "Mobile-first is a performance requirement, not a layout preference",
        body: [
          "Because the region browses on phones, the Deloitte and Google findings apply with unusual force: a 0.1 second mobile speed improvement was associated with a 21.6% increase in progression through lead-generation funnels, and 8.4% higher conversion in retail.",
          "A heavy WordPress theme with unoptimised imagery is not a cosmetic issue in this market. It is a measurable reduction in enquiries at the exact moment customers are comparing you with three alternatives.",
        ],
      },
      {
        heading: "WhatsApp is the commercial channel",
        body: [
          "Across the GCC and India alike, WhatsApp is where the actual business conversation happens — quotes, availability, photographs, confirmations. Email is often only used for invoices.",
          "Design for that reality: a visible WhatsApp entry point on every page, message templates that answer pricing and availability immediately, and Arabic-language support where your customer base needs it. Combine that with the speed-to-lead evidence and the operating standard becomes simple — an acknowledged reply in under five minutes, in the customer's preferred language.",
        ],
      },
      {
        heading: "How we adapt the system for the Gulf",
        body: [
          "We run the same four-part structure we use in Telangana — identity, website, automation, reporting — with three adjustments: bilingual content where relevant, trust and licensing information surfaced far earlier in the page, and payment or enquiry flows matched to local expectations.",
          "The underlying principle does not change across markets. The business that is easiest to verify and fastest to answer wins the enquiry.",
        ],
      },
    ],
    references: [
      {
        label: "UAE E-Commerce Market Outlook to 2030",
        publisher: "Nexdigm Market Research",
        year: "2025",
        href: "https://www.nexdigm.com/market-research/report-store/uae-e-commerce-market-report/",
      },
      {
        label: "UAE Digital Transformation Market — Growth Trends and Forecast",
        publisher: "Mordor Intelligence",
        year: "2026",
        href: "https://www.mordorintelligence.com/industry-reports/uae-digital-transformation-market",
      },
      {
        label: "Milliseconds Make Millions: the impact of mobile speed on business metrics",
        publisher: "Deloitte Digital with Google",
        year: "2020",
        href: "https://web.dev/case-studies/milliseconds-make-millions",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "building-trust-online-a-practical-guide-for-small-service-brands",
    title: "What consumers actually check before choosing you: 2025 review research",
    excerpt:
      "BrightLocal surveyed consumers on how they read, trust and act on local business reviews. The findings change what a small service brand should prioritise online.",
    date: "2026-07-18",
    author: "Mohammed Minhaj",
    readTime: "8 min read",
    category: "Research",
    tags: ["Trust", "Reviews", "Local SEO", "Branding"],
    keyStats: [
      {
        value: "4%",
        label:
          "Share of consumers who say they never read online reviews for local businesses — the other 96% do",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
      {
        value: "74%",
        label: "Consumers who consult two or more review sources before choosing a local business",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
      {
        value: "75%+",
        label: "Consumers who watch video content when researching a local business",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
    ],
    content: [
      {
        heading: "Reviews are near-universal, and Google still dominates",
        body: [
          "BrightLocal has run its Local Consumer Review Survey annually since 2010. The 2025 edition found that only 4% of consumers say they never read online business reviews. The frequency has softened — more people now read 'occasionally' rather than 'always' — but the funnel still passes through reviews for nearly everyone.",
          "Google remains the dominant review platform, recovering share after a dip in 2024, while Facebook has declined consistently since 2022. Trustpilot is the one traditional platform trending upward.",
        ],
      },
      {
        heading: "Consumers cross-check, so one strong profile is not enough",
        body: [
          "27% of consumers use a single website before deciding, but 74% use two or more. That is the argument for diversifying: if your Google Business Profile is healthy while your listing elsewhere is empty or full of unanswered complaints, the inconsistency itself becomes the trust problem.",
          "BrightLocal's earlier Local Business Discovery and Trust Report found 63% of consumers would lose trust in a business after seeing mostly negative written reviews — but the more actionable finding is that contradiction between platforms triggers the same suspicion.",
        ],
      },
      {
        heading: "Detail beats rating",
        body: [
          "Asked what makes them feel positive about a business, consumers named a review describing a positive experience most often — but the notable 2025 shifts were increases for reviews accompanied by photos or video (up 3%) and for long, detailed reviews (up 7%).",
          "Consumers are gathering facts to reach their own judgement rather than accepting an average score. That changes what you should request from customers: a specific, descriptive review with a photo is worth several generic five-star ratings.",
        ],
      },
      {
        heading: "Video is now part of local research",
        body: [
          "Over three-quarters of consumers watch video when researching a local business, and — surprisingly — the most-preferred format is video posted by the business itself about its own products or services, ahead of influencer content and content from friends.",
          "For an interiors firm, a fresh-foods brand or a boutique, that means short, plain, self-produced video of actual work is not a nice-to-have. It is the format the highest-intent segment of your audience is looking for.",
        ],
      },
      {
        heading: "Responses, recency and the AI question",
        body: [
          "Review responses continue to build trust, and BrightLocal found an uncomfortable nuance in 2025: consumers equate AI with 'fake', yet unknowingly preferred an AI-written response when shown examples. The lesson is not to automate blindly — it is that structure and completeness in a response matter more than consumers assume.",
          "On recency, consumers grew more lenient in 2025: fewer insist on reviews from the last two weeks, and more accept reviews up to six months or a year old. Almost 10% say recency has no impact at all. A steady trickle of reviews beats a one-off campaign.",
        ],
      },
      {
        heading: "A practical checklist",
        body: [
          "Claim and complete your Google Business Profile, then at least one secondary platform relevant to your category, and keep the trading name, address and hours identical across both.",
          "Ask for reviews at the point of highest satisfaction, and ask for specifics — what was done, how long it took, what the customer was worried about beforehand.",
          "Publish your own short video of finished work every month, respond to every review within a few days, and display phone, WhatsApp, email and working hours on every page.",
          "None of these are marketing tactics. They are the evidence consumers have told researchers, for fifteen consecutive years, that they look for.",
        ],
      },
    ],
    references: [
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal (Sammy Paget)",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
      {
        label: "Local Business Discovery and Trust Report",
        publisher: "BrightLocal",
        year: "2023",
        href: "https://www.brightlocal.com/research/local-business-discovery-trust-report/",
      },
      {
        label:
          "Annual Survey of MSMEs in India: The Role of Digitalisation in Enterprise Development",
        publisher: "ICRIER",
        year: "March 2025",
        href: "https://icrier.org/pdf/Annual-Survey-MSMEs_India_2025.pdf",
      },
    ],
  },
];

export const privacyContent = {
  lastUpdated: "30 July 2026",
  sections: [
    {
      heading: "What information we collect",
      body: "We collect information you provide directly through our contact form, WhatsApp messages, email, or phone calls. This may include your name, business name, phone number, email address, city, and details about your business goals.",
    },
    {
      heading: "How we use your information",
      body: "We use your information to respond to enquiries, schedule growth audits, deliver our services, and communicate with you about your project. We do not sell your personal information to third parties.",
    },
    {
      heading: "How we store and protect your data",
      body: "We keep your information in secure, access-controlled systems. We retain contact details only as long as needed to provide our services or comply with legal obligations.",
    },
    {
      heading: "Third-party services",
      body: "We use WhatsApp, email, and standard website hosting services to communicate with you. These services have their own privacy policies and security practices.",
    },
    {
      heading: "Cookies and analytics",
      body: "Our website does not use tracking cookies by default. If we add analytics in the future, we will update this policy and ask for your consent where required.",
    },
    {
      heading: "Your rights",
      body: "You can ask us to access, correct, or delete your personal information at any time by contacting us at hello.alifstudio@gmail.com.",
    },
  ],
};

export const termsContent = {
  lastUpdated: "30 July 2026",
  sections: [
    {
      heading: "Overview",
      body: "These Terms of Service govern your use of the Alif Growth Media website and any services you engage us to perform. By using our site or services, you agree to these terms.",
    },
    {
      heading: "Services",
      body: "We provide digital marketing, website design and development, WhatsApp and customer automation, brand identity, and related consulting services. Specific deliverables, timelines, and fees are agreed in writing before work begins.",
    },
    {
      heading: "Client responsibilities",
      body: "Clients agree to provide timely feedback, content, images, account access, and other materials needed for us to complete the work. Delays in providing these materials may affect delivery timelines.",
    },
    {
      heading: "Payments",
      body: "Project fees and retainer amounts are agreed in advance. Invoices are due according to the payment schedule in the project agreement. Work may be paused if payments are overdue.",
    },
    {
      heading: "Intellectual property",
      body: "Upon full payment, clients receive ownership of custom deliverables created specifically for them. We retain the right to use generic processes, templates, and non-confidential work examples for our portfolio unless otherwise agreed.",
    },
    {
      heading: "Limitations",
      body: "We do not guarantee specific business outcomes such as sales, revenue, or ranking positions. We commit to delivering the agreed work with care and professionalism.",
    },
    {
      heading: "Termination",
      body: "Either party may terminate an engagement with written notice. Fees for work completed up to the termination date remain payable.",
    },
    {
      heading: "Governing law",
      body: "These terms are governed by the laws of India. Any disputes will be resolved through good-faith negotiation.",
    },
  ],
};

/* ---------------- About page content ---------------- */

export const originStory = [
  {
    h: "The name is the idea",
    b: "Alif is the first letter — the initial stroke before words, systems, and stories become possible. We chose it because local businesses don't need another generic marketing campaign; they need a solid technical foundation. A scalable website, an admin editor they can control without coding, an automated WhatsApp pipeline, and clean business software. Everything else compounds from there.",
  },
  {
    h: "Where it started",
    b: "We started by sitting inside shops, showrooms, and studios watching owners struggle. Non-technical owners were building websites with AI or freelancers, only to find that changing a price or updating a photo required hiring a developer or recoding from scratch. Meanwhile, enterprise CRMs and inventory tools were too complex or overpriced. We stepped in to act as their internal IT team—building custom, reliable software that works seamlessly in the background.",
  },
  {
    h: "What we built from it",
    b: "Alif Growth Media builds modern, scalable web platforms with embedded visual CMS editors, custom WhatsApp CRMs, digital invoicing tools, and unified mobile owner dashboards. We partner closely with local enterprises across India and the Gulf to run their entire online and software operations.",
  },
];

export const ideology = [
  {
    n: "01",
    t: "No-Code Control for Code-Grade Apps",
    b: "We build on enterprise frameworks (Next.js, React, Supabase, Vercel), but provide an intuitive visual admin editor so business owners can change text, photos, and prices in seconds with zero coding.",
  },
  {
    n: "02",
    t: "Local Businesses Deserve Enterprise Software",
    b: "Automated WhatsApp CRMs, one-tap digital invoicing, and live inventory tracking shouldn't be luxuries reserved for venture-backed startups. We bring enterprise engineering to local businesses.",
  },
  {
    n: "03",
    t: "Build Software, Not Just Campaigns",
    b: "A marketing ad campaign stops the moment your budget runs out. A custom-built website, CRM, and automated invoicing system run 24/7/365, compounding efficiency and protecting your business.",
  },
  {
    n: "04",
    t: "Mobile-First Owner Intelligence",
    b: "An owner should never have to ask staff how much was collected today or how many inquiries came in. Every metric—cashflow, web visits, leads, and customer retention—belongs on a single mobile screen.",
  },
  {
    n: "05",
    t: "Your Brand, Powered by Alif",
    b: "We operate as your dedicated IT division. All client-facing tools and portals carry your business's proud name and branding, backed by the technical horsepower of Alif Growth Media.",
  },
  {
    n: "06",
    t: "100% Client Ownership & Freedom",
    b: "You own every line of code, cloud database, Vercel deployment, and domain name from day one. We earn our partnership through continuous excellence, never by trapping clients.",
  },
];

export const evidence = [
  {
    stat: "13 points",
    label: "turnover growth gap",
    body: "Indian MSMEs with integrated digital software and sales operations reported turnover growth roughly 13 percentage points ahead of offline peers.",
    source: "ICRIER MSME Digitalisation Study, 2025",
    href: "https://icrier.org/",
  },
  {
    stat: "98%",
    label: "of consumers read reviews",
    body: "Local reputation and digital presence is the first sales conversation — and buyers verify modern credibility before contacting a business.",
    source: "BrightLocal Local Consumer Review Survey, 2025",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  {
    stat: "7×",
    label: "higher qualification odds",
    body: "Responding to an enquiry within an hour makes it about seven times more likely to convert than replying later in the day.",
    source: "Harvard Business Review, Lead Response Management research",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    stat: "USD 11bn+",
    label: "Gulf e-commerce runway",
    body: "UAE online commerce and Saudi Vision 2030 are driving unprecedented digital software and SaaS adoption across GCC local enterprises.",
    source: "Industry market outlooks, 2025",
    href: "https://www.vision2030.gov.sa/",
  },
];

export const standards = [
  {
    t: "Live Admin Access",
    b: "Every web portal includes our Visual CMS so you can update products, copy, and images in 1 click.",
  },
  {
    t: "Dedicated Technical Partner",
    b: "No junior support tickets. Co-founders and senior architects manage your technical roadmap end to end.",
  },
  {
    t: "Full Platform Ownership",
    b: "All code, databases, cloud hosting, and domain assets are registered directly in your business's name.",
  },
  {
    t: "Unified Business Intelligence",
    b: "A real-time mobile dashboard giving you instant visibility into website leads, social inquiries, and cashflow.",
  },
];

export const milestones = [
  {
    y: "Origin",
    t: "Custom WhatsApp Engines",
    b: "Engineered automated WhatsApp response and CRM pipelines for local retailers, converting lost messages into closed revenue.",
  },
  {
    y: "Innovation",
    t: "The Visual CMS Framework",
    b: "Architected modern web storefronts with embedded visual editors, solving the post-launch maintenance barrier for business owners.",
  },
  {
    y: "Ecosystem",
    t: "Operating Tools Suite",
    b: "Expanded into custom digital invoicing, cash collection tracking, inventory management, and mobile BI dashboards.",
  },
  {
    y: "Scale",
    t: "India & GCC Expansion",
    b: "Deploying integrated business software and acting as fractional CTOs for local enterprises across Telangana and the Gulf.",
  },
];
