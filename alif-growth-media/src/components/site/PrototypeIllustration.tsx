import React from "react";
import {
  Check,
  Edit3,
  MessageCircle,
  Send,
  Sparkles,
  TrendingUp,
  UserCheck,
  ShoppingBag,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

interface PrototypeIllustrationProps {
  type: string;
}

export const PrototypeIllustration: React.FC<PrototypeIllustrationProps> = ({ type }) => {
  switch (type) {
    case "visual-cms":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          {/* Mock Browser Top */}
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground bg-muted/60 px-2 py-0.5 rounded">
              yourbusiness.com/admin
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <Check className="w-3 h-3" /> Live
            </span>
          </div>

          {/* Active Edit Area */}
          <div className="my-auto p-2.5 rounded-lg border-2 border-dashed border-primary/50 bg-primary/5 relative">
            <div className="absolute -top-2.5 right-2 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <Edit3 className="w-2.5 h-2.5" /> 1-Click Edit
            </div>
            <p className="text-xs font-bold text-foreground">
              "Special Weekend Offers — Flat 25% Off"
            </p>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Click to edit text, photos & prices directly from mobile
            </p>
          </div>

          {/* Footer Action */}
          <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[10px]">
            <span className="text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-gold" /> Auto-saves instantly
            </span>
            <span className="bg-primary text-primary-foreground font-semibold px-2 py-1 rounded text-[10px]">
              Publish Changes
            </span>
          </div>
        </div>
      );

    case "whatsapp-crm":
      return (
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-b from-emerald-950/20 to-card border border-emerald-500/20 p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-foreground">WhatsApp Business Inbox</p>
                <p className="text-[9px] text-emerald-500 font-medium">
                  ● 3 New Leads Just Arrived
                </p>
              </div>
            </div>
            <span className="text-[9px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Automated
            </span>
          </div>

          {/* Chat bubbles */}
          <div className="space-y-1.5 my-auto">
            <div className="bg-muted/70 rounded-lg p-2 max-w-[85%] text-[10px] leading-tight text-foreground/90">
              <span className="font-semibold block text-[9px] text-muted-foreground">
                Customer (Google Search):
              </span>
              "Hi, what are your store timings and current catalog?"
            </div>
            <div className="bg-emerald-600/15 border border-emerald-500/30 rounded-lg p-2 ml-auto max-w-[85%] text-[10px] leading-tight text-emerald-300">
              <span className="font-semibold block text-[9px] text-emerald-400 flex items-center gap-1">
                <Check className="w-2.5 h-2.5" /> Automated Instant Reply:
              </span>
              "Hello! We are open until 9 PM. Here is our catalog PDF. Our team is ready to help!"
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-1.5 border-t border-border/50 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Lead tagged: Interested Buyer</span>
            <span className="text-emerald-400 font-semibold">Response: &lt; 15 sec</span>
          </div>
        </div>
      );

    case "invoicing":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <span className="text-xs font-bold text-foreground">Digital Receipt #1042</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <Check className="w-3 h-3" /> PAID (UPI)
            </span>
          </div>

          {/* Receipt detail */}
          <div className="my-auto space-y-1 bg-secondary/40 p-2.5 rounded-lg border border-border/50 text-[11px]">
            <div className="flex justify-between text-muted-foreground">
              <span>Customer:</span>
              <span className="font-medium text-foreground">Dr. Arshad (Warangal)</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Items:</span>
              <span className="text-foreground">Executive Service Package</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-border/50 font-bold text-xs text-foreground">
              <span>Total Amount:</span>
              <span className="text-primary font-display">₹8,500.00</span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">Daily Total: ₹42,500 collected</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
              <Send className="w-2.5 h-2.5" /> Sent via WhatsApp
            </span>
          </div>
        </div>
      );

    case "membership":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Active Member Record</span>
            </div>
            <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
              Renewal in 3 Days
            </span>
          </div>

          {/* Member Card */}
          <div className="my-auto bg-secondary/40 p-2.5 rounded-lg border border-border/50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-foreground">K. Vikram Reddy</p>
                <p className="text-[10px] text-muted-foreground">
                  Annual Membership · Regular Attendee
                </p>
              </div>
              <span className="text-xs font-bold text-primary font-display">₹15,000/yr</span>
            </div>
            <div className="mt-2 w-full bg-muted rounded-full h-1.5 overflow-hidden">
              <div className="bg-amber-400 h-1.5 rounded-full w-[90%]" />
            </div>
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">Plan expiry: 24 Oct</span>
            <span className="inline-flex items-center gap-1 font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
              <MessageCircle className="w-2.5 h-2.5" /> 1-Tap Reminder
            </span>
          </div>
        </div>
      );

    case "store-orders":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <div className="flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Digital Storefront & Cart</span>
            </div>
            <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              Fast Checkout
            </span>
          </div>

          {/* Product row */}
          <div className="my-auto bg-secondary/40 p-2 rounded-lg border border-border/50 flex items-center gap-2.5">
            <div className="w-10 h-10 rounded bg-muted flex items-center justify-center font-bold text-xs text-primary">
              📦
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-foreground truncate">
                Weekly Household Grocery Box
              </p>
              <p className="text-[10px] text-muted-foreground">In Stock · 18 packs left</p>
            </div>
            <span className="text-xs font-bold text-primary">₹890</span>
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">Mobile 1-touch shopping</span>
            <span className="font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
              Order to WhatsApp
            </span>
          </div>
        </div>
      );

    case "dashboard":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <span className="text-xs font-bold text-foreground">Owner Command Center</span>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
              <TrendingUp className="w-3 h-3" /> Live Feed
            </span>
          </div>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            <div className="bg-secondary/60 p-2 rounded border border-border/50 text-center">
              <p className="text-[9px] text-muted-foreground font-medium">Collections</p>
              <p className="text-xs font-bold text-primary font-display mt-0.5">₹34,800</p>
            </div>
            <div className="bg-secondary/60 p-2 rounded border border-border/50 text-center">
              <p className="text-[9px] text-muted-foreground font-medium">Web Visitors</p>
              <p className="text-xs font-bold text-foreground font-display mt-0.5">284</p>
            </div>
            <div className="bg-secondary/60 p-2 rounded border border-border/50 text-center">
              <p className="text-[9px] text-muted-foreground font-medium">New Leads</p>
              <p className="text-xs font-bold text-emerald-400 font-display mt-0.5">14</p>
            </div>
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px] text-muted-foreground">
            <span>Zero staff questions needed</span>
            <span className="text-foreground font-medium">Mobile Real-Time</span>
          </div>
        </div>
      );

    case "showcase":
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <span className="text-xs font-bold text-foreground">Craftsmanship Showcase</span>
            <span className="text-[10px] font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full">
              High-Trust
            </span>
          </div>

          {/* Gallery mock */}
          <div className="grid grid-cols-3 gap-1.5 my-auto">
            <div className="h-16 rounded bg-muted/80 flex items-center justify-center text-xs">
              🚪
            </div>
            <div className="h-16 rounded bg-muted/80 flex items-center justify-center text-xs">
              🛋️
            </div>
            <div className="h-16 rounded bg-muted/80 flex items-center justify-center text-xs">
              ✨
            </div>
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">Before & After stories</span>
            <span className="text-primary font-semibold">Book Consultation</span>
          </div>
        </div>
      );

    case "reports":
    default:
      return (
        <div className="relative w-full h-44 rounded-xl bg-card border border-border p-3 overflow-hidden shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-border/70">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-foreground">Weekly Sales Insights</span>
            </div>
            <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Automated
            </span>
          </div>

          {/* Mini Bar Chart Mock */}
          <div className="my-auto flex items-end justify-between px-3 h-16 pt-2">
            {[35, 50, 42, 68, 85, 95, 60].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className={`w-4 rounded-t ${i === 5 ? "bg-primary" : "bg-muted"}`}
                  style={{ height: `${h * 0.45}px` }}
                />
                <span className="text-[8px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[10px]">
            <span className="text-muted-foreground">Busiest Day: Saturday</span>
            <span className="text-emerald-400 font-semibold">+24% vs Last Week</span>
          </div>
        </div>
      );
  }
};
