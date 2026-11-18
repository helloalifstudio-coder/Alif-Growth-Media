"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  MessageCircle,
  Sparkles,
  Check,
  Edit3,
  Send,
  Eye,
  RefreshCw,
  TrendingUp,
  UserCheck,
  ShieldCheck,
  Layers,
  ArrowRight,
} from "lucide-react";
import { getPrototypeWhatsappUrl } from "@/content/site";
import { EASE } from "@/components/motion/primitives";

interface DemoTool {
  id: "visual-cms" | "whatsapp-crm" | "invoicing" | "membership";
  name: string;
  tagline: string;
  category: string;
  liveUrl: string;
  highlights: string[];
}

const TOOLS: DemoTool[] = [
  {
    id: "visual-cms",
    name: "Visual Website & Content Editor",
    tagline: "Preview how a no-code website editor could work",
    category: "Website Builder",
    liveUrl: "https://safar-studio-snm.vercel.app",
    highlights: [
      "In-place headline & price editing",
      "A clear review-before-publish flow",
      "Mobile & tablet friendly",
    ],
  },
  {
    id: "whatsapp-crm",
    name: "WhatsApp Customer Hub & CRM",
    tagline: "Explore a sample enquiry-to-order workflow",
    category: "Customer Hub",
    liveUrl: "https://safar-crm-theta.vercel.app",
    highlights: [
      "Example enquiry acknowledgements",
      "Unified team chat pipeline",
      "Direct product catalogue shares",
    ],
  },
  {
    id: "invoicing",
    name: "1-Tap Invoicing & Cash Tracker",
    tagline: "Preview a digital invoicing and cash-tracking flow",
    category: "Cashflow & Bills",
    liveUrl: "https://invofy-kappa.vercel.app",
    highlights: [
      "Invoice preview and PDF workflow",
      "Daily Cash vs. UPI ledger",
      "Customer dues & payment history",
    ],
  },
  {
    id: "membership",
    name: "Member Records & Fee Tracker",
    tagline: "Explore a sample membership and renewal workflow",
    category: "Memberships & Dues",
    liveUrl: "https://e-repcount-gym-payment-manager.vercel.app",
    highlights: [
      "Renewal reminder workflow",
      "Member attendance & plan expiry",
      "Zero paper register errors",
    ],
  },
];

export function InteractiveDemoSuite() {
  const [activeTab, setActiveTab] = useState<DemoTool["id"]>("visual-cms");

  // State for interactive Visual CMS simulator
  const [headlineText, setHeadlineText] = useState(
    "Festival Season Special — Flat 25% Off Across Store",
  );
  const [isEditingHeadline, setIsEditingHeadline] = useState(false);
  const [hasLocalEdits, setHasLocalEdits] = useState(false);
  const [previewUpdated, setPreviewUpdated] = useState(false);

  // State for interactive WhatsApp simulator
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: "customer" | "system"; text: string; time: string }>
  >([
    {
      sender: "customer",
      text: "Hi! Are you open today and what are your current offers?",
      time: "10:14 AM",
    },
    {
      sender: "system",
      text: "Hello! 👋 Welcome to our store. We are open until 9:00 PM today. Here is our new catalog with 25% festive offers!",
      time: "10:14 AM",
    },
  ]);
  const [inputMsg, setInputMsg] = useState("");

  // State for interactive Invoicing simulator
  const [invoiceAmount, setInvoiceAmount] = useState(4850);
  const [invoiceCustomer, setInvoiceCustomer] = useState("K. Ramesh (Warangal)");
  const [invoicePreviewed, setInvoicePreviewed] = useState(false);

  // State for Membership simulator
  const [members, setMembers] = useState([
    { name: "Member A", plan: "Gold Annual · sample", daysLeft: 2 },
    { name: "Member B", plan: "Quarterly Pass · sample", daysLeft: 28 },
    { name: "Member C", plan: "Monthly Plan · sample", daysLeft: 0 },
  ]);
  const [reminderSentFor, setReminderSentFor] = useState<string | null>(null);

  const activeTool = TOOLS.find((t) => t.id === activeTab) || TOOLS[0];

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setInputMsg("");
    setChatMessages((prev) => [...prev, { sender: "customer", text: userText, time: "Just now" }]);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "system",
          text: `Demo reply: Thanks for your message ("${userText}")! This local example shows an acknowledgement. No customer message was sent and no owner was notified.`,
          time: "Just now",
        },
      ]);
    }, 600);
  };

  return (
    <div className="surface-card rounded-3xl border border-border/80 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-border/70">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive concept simulation
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Explore Four Business Workflows
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
            This in-page sandbox uses sample data and local state only. It does not publish
            content, send messages, process payments or contact customers.
          </p>
        </div>

        {/* Separate prototype link; the in-page simulator below remains local-only. */}
        <div className="flex items-center gap-3">
          <a
            href={activeTool.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2.5 text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            <span>Open standalone prototype</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={getPrototypeWhatsappUrl(activeTool.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-semibold px-4 py-2.5 text-xs sm:text-sm transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Customize</span>
          </a>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 my-6">
        {TOOLS.map((tool) => {
          const isActive = activeTab === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`flex flex-col items-start text-left p-3.5 rounded-2xl border transition-all ${
                isActive
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border/60 bg-secondary/30 hover:bg-secondary/60 text-muted-foreground"
              }`}
            >
              <span
                className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? "text-gold" : "text-muted-foreground"}`}
              >
                {tool.category}
              </span>
              <span
                className={`text-sm font-bold mt-1 line-clamp-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                {tool.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Tool Simulation Playground */}
      <div className="rounded-2xl border border-border/80 bg-background/90 p-4 sm:p-6 lg:p-8 min-h-[360px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* TAB 1: VISUAL CMS INTERACTIVE SIMULATOR */}
          {activeTab === "visual-cms" && (
            <motion.div
              key="cms"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-secondary/40 p-3.5 rounded-xl border border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="text-xs font-medium text-muted-foreground ml-2">
                    Sample website editor preview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${previewUpdated ? "bg-emerald-500/10 text-emerald-500" : hasLocalEdits ? "bg-amber-500/10 text-amber-500" : "bg-secondary text-muted-foreground"}`}
                  >
                    <Check className="w-3 h-3" /> {previewUpdated ? "Local preview updated" : hasLocalEdits ? "Local edits" : "Sample preview"}
                  </span>
                  <button
                    onClick={() => {
                      setHasLocalEdits(false);
                      setPreviewUpdated(true);
                      setIsEditingHeadline(false);
                    }}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
                  >
                    Apply preview
                  </button>
                </div>
              </div>

              {/* Editable Storefront Banner Mockup */}
              <div className="relative rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 sm:p-8 text-center space-y-3">
                <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/15 px-3 py-1 rounded-full">
                  Edit sample announcement
                </span>

                {isEditingHeadline ? (
                  <div className="max-w-xl mx-auto space-y-2">
                    <input
                      type="text"
                      value={headlineText}
                      onChange={(e) => {
                        setHeadlineText(e.target.value);
                        setHasLocalEdits(true);
                        setPreviewUpdated(false);
                      }}
                      className="w-full text-center text-lg sm:text-xl font-bold bg-card border-2 border-primary rounded-xl px-4 py-2 text-foreground focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => setIsEditingHeadline(false)}
                      className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md font-semibold"
                    >
                      Done Editing
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    aria-label="Edit sample store announcement"
                    onClick={() => setIsEditingHeadline(true)}
                    className="group block w-full max-w-xl mx-auto p-3 rounded-xl text-center hover:bg-card/60 border border-transparent hover:border-primary/50 transition-all relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="block text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      "{headlineText}"
                    </span>
                    <span className="text-[11px] text-muted-foreground flex items-center justify-center gap-1 mt-1 opacity-80 group-hover:opacity-100">
                      <Edit3 className="w-3 h-3 text-gold" /> Select to edit this sample text
                    </span>
                  </button>
                )}

                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Changes stay in this local sample preview; no live website is updated or published.
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 2: WHATSAPP CRM INTERACTIVE SIMULATOR */}
          {activeTab === "whatsapp-crm" && (
            <motion.div
              key="crm"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              {/* WhatsApp Chat Header */}
              <div className="flex items-center justify-between bg-emerald-900/30 border border-emerald-500/30 p-3.5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Example customer conversation</h4>
                    <p className="text-[10px] text-emerald-400 font-semibold">
                      ● Simulated reply · local only
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-lg">
                  Example flow
                </span>
              </div>

              {/* Chat Thread */}
              <div role="log" aria-live="polite" aria-label="Sample customer conversation" className="space-y-2.5 max-h-56 overflow-y-auto p-3 rounded-xl bg-secondary/30 border border-border/50">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === "customer" ? "items-start" : "items-end"}`}
                  >
                    <div
                      className={`p-3 rounded-2xl max-w-[85%] text-xs leading-relaxed shadow-sm ${
                        msg.sender === "customer"
                          ? "bg-card border border-border text-foreground rounded-tl-sm"
                          : "bg-emerald-600/20 border border-emerald-500/40 text-emerald-200 rounded-tr-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="block text-[9px] text-muted-foreground/80 text-right mt-1">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive message sender */}
              <form onSubmit={handleSendChat} className="flex gap-2">
                <input
                  type="text"
                  aria-label="Type a sample customer message"
                  placeholder="Write a sample customer message..."
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  className="flex-1 bg-card border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Send demo message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}

          {/* TAB 3: INVOICING INTERACTIVE SIMULATOR */}
          {activeTab === "invoicing" && (
            <motion.div
              key="inv"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="space-y-5 max-w-xl mx-auto"
            >
              <div className="surface-card rounded-2xl border border-border p-5 space-y-4 shadow-md">
                <div className="flex items-center justify-between border-b border-border/70 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                      Alif Digital Invoice
                    </span>
                    <h4 className="text-base font-bold text-foreground">Sample invoice · AGM-2026-084</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                    Preview only
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={invoiceCustomer}
                      onChange={(e) => {
                        setInvoiceCustomer(e.target.value);
                        setInvoicePreviewed(false);
                      }}
                      className="w-full bg-secondary/50 border border-border/80 rounded-lg p-2 text-foreground font-medium text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground block mb-1">
                      Total Bill (₹)
                    </label>
                    <input
                      type="number"
                      value={invoiceAmount}
                      onChange={(e) => {
                        setInvoiceAmount(Number(e.target.value));
                        setInvoicePreviewed(false);
                      }}
                      className="w-full bg-secondary/50 border border-border/80 rounded-lg p-2 text-foreground font-bold text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-border/70 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-muted-foreground block">Payment Mode:</span>
                    <span className="text-xs font-bold text-primary">
                      Example payment method · not connected
                    </span>
                  </div>
                  <button
                    onClick={() => setInvoicePreviewed(true)}
                    className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-xl text-xs shadow transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Preview invoice</span>
                  </button>
                </div>

                {invoicePreviewed && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-emerald-500/15 border border-emerald-500/30 p-2.5 rounded-xl text-xs text-emerald-300 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Preview state updated for {invoiceCustomer}. No PDF was created, payment processed, or WhatsApp message sent.
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 4: MEMBERSHIP DUES INTERACTIVE SIMULATOR */}
          {activeTab === "membership" && (
            <motion.div
              key="gym"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="space-y-4 max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border/60">
                <span className="text-xs font-bold text-foreground">
                  Sample member roster
                </span>
                <span className="text-[11px] text-muted-foreground">3 example records · preview only</span>
              </div>

              <div className="space-y-2.5">
                {members.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center justify-between bg-secondary/40 border border-border/60 p-3.5 rounded-xl text-xs"
                  >
                    <div>
                      <h5 className="font-bold text-foreground text-sm">{m.name}</h5>
                      <p className="text-[11px] text-muted-foreground">{m.plan}</p>
                    </div>

                    <div className="text-right">
                      <span
                        className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          m.daysLeft === 0
                            ? "bg-red-500/10 text-red-400"
                            : m.daysLeft <= 3
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-emerald-500/10 text-emerald-400"
                        }`}
                      >
                        {m.daysLeft === 0 ? "Renewal due" : `Renews in ${m.daysLeft} days`}
                      </span>

                      <div className="mt-1">
                        <button
                          onClick={() => setReminderSentFor(m.name)}
                          className="text-[10px] font-semibold text-primary hover:underline flex items-center gap-1 justify-end ml-auto"
                        >
                          <MessageCircle className="w-2.5 h-2.5" />
                          <span>
                            {reminderSentFor === m.name ? "Preview ready" : "Preview reminder"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feature Highlights Footer */}
        <div className="mt-6 pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {activeTool.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1.5 text-foreground/80 font-medium"
              >
                <Check className="w-3.5 h-3.5 text-gold shrink-0" /> {h}
              </span>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-primary">
            Branding and integrations are scoped to your project
          </span>
        </div>
      </div>
    </div>
  );
}
