import safaLogo from "@/assets/safa-fresh.png";
import dtLogo from "@/assets/dt-interiors.png";
import sumeraLogo from "@/assets/sumera-collections.png";

export const company = {
  name: "Alif Growth Media",
  tagline: "Digital Experiences, Branding & Business Systems",
  email: "hello.alifstudio@gmail.com",
  phone: "+91 91218 09212",
  phoneHref: "tel:+919121809212",
  whatsappPhone: "9121809212",
  get phoneE164() {
    return `+91${this.whatsappPhone}`;
  },
  whatsappMessage:
    "Hello Alif Growth Media, I would like to discuss a digital project for my business.",
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
    t: "Website Updates Need Too Many Handoffs",
    b: "When a site has no suitable editing workflow, routine changes to prices, images or service details can depend on an outside developer.",
  },
  {
    i: "2",
    t: "Business Tools Do Not Always Fit the Team",
    b: "Software designed for larger operations can feel too complex or costly for a small team. A simpler, well-scoped workflow may be a better fit.",
  },
  {
    i: "3",
    t: "Customer and Operations Data Gets Scattered",
    b: "Enquiries, billing, stock records and follow-ups can live in separate tools, making it harder for a team to see what needs attention next.",
  },
];

export const pillars = [
  {
    k: "Brand & Web",
    t: "A clear, responsive digital presence",
    b: "Build a useful home for your brand, products and services. Content editing can be included for the pages and fields your team needs to manage.",
  },
  {
    k: "Customer & Operations",
    t: "Workflows sized to the team",
    b: "Plan enquiry, invoicing or inventory tools around daily work. Channels, automation and third-party integrations are included only when supported and agreed.",
  },
  {
    k: "Reporting",
    t: "A useful view of connected information",
    b: "Bring selected, validated data into a clear owner view. Coverage, access and refresh timing depend on the systems connected to the project.",
  },
];

export const steps = [
  {
    t: "Discover",
    b: "Understand the audience, current tools, customer journey and day-to-day constraints.",
  },
  {
    t: "Scope",
    b: "Agree the deliverables, responsibilities, milestones, costs and any recurring services in writing.",
  },
  {
    t: "Build",
    b: "Design and implement the agreed experience, with review points for the important user journeys.",
  },
  {
    t: "Handover",
    b: "Document account access, ownership, support arrangements and any ongoing third-party costs.",
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
    t: "Website Design & Content Management",
    b: "We design responsive websites around your audience, products and service journey. When self-service editing is part of the scope, a CMS can let authorized team members update agreed content without changing code.",
    includes: [
      "Responsive page layouts and clear navigation",
      "A CMS for agreed text, images or catalogue fields, where required",
      "Domain, hosting and deployment setup as listed in the proposal",
      "Contact, enquiry or analytics integrations where supported and approved",
    ],
    outcome:
      "A clear, maintainable digital presence with documented editing and handover responsibilities.",
  },
  {
    slug: "custom-crm-whatsapp-automations",
    t: "Customer Enquiry & CRM Workflows",
    b: "Plan an enquiry workflow around the channels your business uses. Capture, assignment, message templates and automation depend on provider APIs, account permissions and the agreed project scope.",
    includes: [
      "Enquiry capture from the channels listed in the proposal",
      "A shared pipeline, status tracking or team assignment where required",
      "Message templates or automated replies only when supported by approved integrations",
      "Customer-data access and retention expectations documented for the project",
    ],
    outcome:
      "A more consistent way to organize and follow up enquiries; no channel is connected unless it is included in the agreed scope.",
  },
  {
    slug: "invoicing-cashflow-inventory",
    t: "Invoicing, Records & Inventory Tools",
    b: "Design billing and stock workflows around the records your business needs. Calculations, exports, payment connections and tax fields are agreed before implementation.",
    includes: [
      "Invoice and receipt templates configured for agreed fields",
      "Cash or UPI recording where required; payment verification only through supported integrations",
      "Stock, SKU and low-stock views when included in the project",
      "Exports for review by your accountant; software is not a substitute for tax or accounting advice",
    ],
    outcome:
      "Clearer day-to-day records, with accounting and compliance responsibilities kept explicit.",
  },
  {
    slug: "owner-bi-dashboard",
    t: "Owner Dashboards & Reporting",
    b: "Create an owner view from data sources that are actually connected and validated. Coverage, access and refresh timing are documented for each project.",
    includes: [
      "Selected website or enquiry metrics where analytics are connected",
      "Operational summaries from approved systems and available data",
      "Role-based access and refresh expectations as scoped",
      "Forecasting only when suitable data and a validated method are separately agreed",
    ],
    outcome:
      "A useful view of connected information—not an automatic feed from every app or business channel.",
  },
];

export const engagements = [
  {
    t: "Growth & Technology Consultation",
    price: "Complimentary",
    b: "A no-obligation conversation about your current digital setup, customer journey and operational bottlenecks. A technical audit or written roadmap can be scoped separately if needed.",
    points: [
      "45-minute discovery conversation",
      "Initial opportunities and constraints",
      "No obligation to continue",
    ],
  },
  {
    t: "Custom Platform Sprint",
    price: "Project based",
    b: "A defined delivery phase for the website, workflow or software components listed in your project proposal.",
    points: [
      "Agreed build scope and milestones",
      "Review checkpoints and acceptance criteria",
      "Handover notes and training where included",
    ],
    featured: true,
  },
  {
    t: "Ongoing Support Partnership",
    price: "Monthly Partnership",
    b: "Optional ongoing support for the systems and responsibilities listed in a separate monthly agreement.",
    points: [
      "Defined support hours and response targets",
      "Maintenance only for agreed services",
      "Periodic review against agreed priorities",
    ],
  },
];

export const results = [
  {
    t: "Owner visibility",
    s: "Clear view",
    b: "Bring website enquiries, customer activity and operational records into one view when the selected systems are connected.",
  },
  {
    t: "Lead follow-up",
    s: "Trackable",
    b: "Give your team a shared place to organize enquiries and next steps; response times still depend on team availability.",
  },
  {
    t: "Content control",
    s: "Owner-led",
    b: "Let authorized staff update approved website copy and catalogue content through a visual editor.",
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
    b: "Alif is the first letter — the initial stroke before words, systems and stories become possible. We chose it as a reminder that meaningful growth starts with a clear foundation. For each business, that foundation may include a strong brand, a useful website, clearer customer communication or tools that make everyday work easier.",
  },
  {
    h: "The problem we focus on",
    b: "Routine digital updates—changing a price, replacing a photo or following up an enquiry—can become harder than they should be when a business has no suitable workflow. Other tools can feel too complex for the way a small team works. Our approach starts with the actual need, then scopes a practical solution the team can understand and maintain.",
  },
  {
    h: "What we can bring together",
    b: "Depending on the brief, Alif Growth Media can help with brand identity, website design and development, content editing, enquiry workflows, invoicing, inventory or reporting. Integrations, hosting, support and handover are agreed for each project rather than assumed.",
  },
];

export const ideology = [
  {
    n: "01",
    t: "Useful Control, Not Unnecessary Complexity",
    b: "When a project includes a CMS or admin area, we define which content and permissions the team can manage, then make common updates clear and accessible.",
  },
  {
    n: "02",
    t: "Tools Sized to the Business",
    b: "We choose a practical combination of website, workflow and software features for the team's needs. A custom system is an option when existing tools do not fit.",
  },
  {
    n: "03",
    t: "Digital Foundations and Marketing Work Together",
    b: "Campaigns can bring attention; a clear website and consistent follow-up help people take the next step. We plan these pieces together when they are part of the brief.",
  },
  {
    n: "04",
    t: "Reporting With Visible Sources",
    b: "A dashboard is useful only when its data sources are connected and understood. We document what is included, how often it updates and what remains outside the setup.",
  },
  {
    n: "05",
    t: "The Business Stays Recognizable",
    b: "Where a project includes customer-facing tools, we align the experience with the client's brand. Account access, third-party subscriptions and ongoing responsibilities are agreed before launch.",
  },
  {
    n: "06",
    t: "Clear Client Ownership & Handover",
    b: "We document who owns each account, asset and deliverable in the project agreement. Custom deliverables transfer after full payment, in line with our Terms of Service.",
  },
];

export const evidence = [
  {
    stat: "13% vs 8.5%",
    label: "average turnover growth",
    body: "ICRIER's 2025 survey of 2,365 Udyam-registered MSMEs estimated average turnover growth of 13% for e-commerce-integrated firms and 8.5% for non-integrated firms from 2022–23 to 2023–24. This is an observed sample comparison, not a promised outcome.",
    source: "ICRIER, Annual MSME Survey, 2025",
    href: "https://icrier.org/pdf/Annual-Survey-MSMEs_India_2025.pdf",
  },
  {
    stat: "74%",
    label: "check 2+ review sites",
    body: "In BrightLocal's 2025 survey of 1,026 US adults, 74% said they use two or more websites when researching local-business reviews. This is US consumer research, not an India-specific estimate.",
    source: "BrightLocal, Local Consumer Review Survey 2025",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2025/",
  },
  {
    stat: "Nearly 7×",
    label: "lead qualification association",
    body: "A 2011 US study reported that firms attempting contact within an hour were nearly seven times as likely to qualify a lead as firms trying an hour later. Qualification meant a meaningful conversation with a decision-maker, not a completed sale; the finding is historical and observational.",
    source: "Harvard Business Review, 2011",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    stat: "USD 11.5bn",
    label: "UAE e-commerce market in 2025",
    body: "The UAE e-commerce market reached AED 42.2 billion (USD 11.5 billion) in 2025, according to the annual report by EZDubai and Euromonitor International. This is a UAE market figure, not a measure of the wider GCC.",
    source: "EZDubai / Euromonitor, reported September 2026",
    href: "https://en.aletihad.ae/news/business/4695011/uae-e-commerce-market-size-reaches-dh42-2-billion-in-2025",
  },
];

export const standards = [
  {
    t: "Scoped Content Editing",
    b: "When a visual CMS is included, the proposal records which pages, fields, and user roles the owner can update.",
  },
  {
    t: "A Clear Support Path",
    b: "Each engagement identifies its primary contact, support channel, response expectations, and any included maintenance.",
  },
  {
    t: "Documented Account Ownership",
    b: "We agree who owns the domain, hosting, source code, data, and third-party accounts, then record handover terms in the project agreement.",
  },
  {
    t: "Reporting That Matches the Setup",
    b: "Dashboards show the data sources connected and validated for the project; availability and refresh timing are documented.",
  },
];

export const milestones = [
  {
    y: "Discover",
    t: "Understand the workflow",
    b: "Map the audience, current tools, customer journey and recurring tasks before recommending a solution.",
  },
  {
    y: "Plan",
    t: "Agree the scope",
    b: "Record deliverables, responsibilities, milestones, fees and any recurring services in the project proposal.",
  },
  {
    y: "Build",
    t: "Create and validate",
    b: "Design and implement the agreed experience, review key journeys with the client and test the requirements in scope.",
  },
  {
    y: "Handover",
    t: "Document what's next",
    b: "Explain account ownership, access, support arrangements and any maintenance or third-party costs that apply.",
  },
];
