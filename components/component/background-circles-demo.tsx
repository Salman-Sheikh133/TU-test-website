"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, ArrowUp, Menu, X } from "lucide-react";
import { BackgroundCircles } from "@/components/ui/background-circles";
import { useRef, useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG = "#080800";
const CARD =
  "backdrop-blur-xl border border-yellow-400/[0.10] rounded-2xl bg-[rgba(10,8,18,0.85)] shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(252,216,47,0.03)]";

// ─── Shared fade-up wrapper ───────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Work", href: "https://trickleup.co.uk/work/" },
    { label: "Team", href: "https://trickleup.co.uk/team/" },
    { label: "Engines", href: "https://trickleup.co.uk/growth-engines/" },
    { label: "Blog", href: "https://trickleup.co.uk/blog/" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-yellow-400/[0.10] bg-[rgba(8,8,0,0.80)] px-5 py-3 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <a href="https://trickleup.co.uk/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/trickleup-logo.svg" alt="Trickle Up" className="h-6 w-6" />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-[#f0e8c8]">
              Trickle Up
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-yellow-100/45 hover:text-yellow-100/90 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://trickleup.co.uk/work/"
              className="text-[13px] text-yellow-100/45 hover:text-yellow-100/90 transition-colors"
            >
              Our work
            </a>
            <a
              href="https://trickleup.co.uk/lets-talks/"
              className="inline-flex items-center gap-1.5 rounded-[9px] bg-[#FCD82F] px-4 py-2 text-[13px] font-semibold text-[#0a0800] transition-all hover:bg-yellow-300 hover:-translate-y-px shadow-[0_0_16px_rgba(252,216,47,0.25)]"
            >
              Let&apos;s Talk <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-yellow-100/60"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <motion.div
            className="mt-2 rounded-2xl border border-yellow-400/[0.10] bg-[rgba(8,8,0,0.95)] p-5 backdrop-blur-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-2.5 text-[14px] text-yellow-100/60 border-b border-yellow-400/[0.06] last:border-0"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://trickleup.co.uk/lets-talks/"
              className="mt-4 flex items-center justify-center gap-2 rounded-[10px] bg-[#FCD82F] py-2.5 text-[13px] font-semibold text-[#0a0800]"
            >
              Let&apos;s Talk <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </header>
  );
}

// ─── Hero floating cards ──────────────────────────────────────────────────────
function ClientCard() {
  const clients = [
    { initials: "LW", name: "Life Without Lemons", sector: "E-commerce · UK", color: "from-yellow-400 to-yellow-600" },
    { initials: "KI", name: "Karimia Institute", sector: "Non-profit · UK", color: "from-yellow-300 to-yellow-500" },
    { initials: "SF", name: "Sentinel Financial", sector: "Financial · UK", color: "from-indigo-800 to-indigo-600" },
  ];
  return (
    <div className={`${CARD} absolute left-[4%] top-1/2 w-[230px] p-5 -translate-y-1/2 rotate-[-4deg] opacity-75 z-[2] [mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]`}>
      <div className="flex items-center gap-2 mb-5">
        <div className="w-[22px] h-[22px] rounded-[5px] bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center">
          <ArrowUp className="w-2.5 h-2.5 text-black" strokeWidth={2} />
        </div>
        <span className="text-[13px] font-medium text-[#f0e8c8]">Clients</span>
      </div>
      {clients.map((c) => (
        <div key={c.initials} className="flex items-center gap-2 py-1.5 border-b border-yellow-400/[0.06] last:border-0">
          <div className={`w-[26px] h-[26px] rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-semibold text-white bg-gradient-to-br ${c.color}`}>
            {c.initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11.5px] text-[#f0e8c8] truncate">{c.name}</div>
            <div className="text-[10.5px] text-[#c8b888]/60 truncate">{c.sector}</div>
          </div>
          <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400/90 whitespace-nowrap">
            Live
          </div>
        </div>
      ))}
    </div>
  );
}

function GrowthCard() {
  const stats = [
    { num: "150+", label: "Team members" },
    { num: "50+", label: "Active clients" },
  ];
  const bars = [
    { label: "Paid Ads ROAS", value: "320%", pct: 88 },
    { label: "Client retention", value: "94%", pct: 94 },
    { label: "Revenue growth", value: "2.8×", pct: 78 },
  ];
  return (
    <div className={`${CARD} absolute left-1/2 top-1/2 w-[300px] p-7 -translate-x-1/2 -translate-y-1/2 z-[3]`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[22px] h-[22px] rounded-[5px] bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center">
          <ArrowUp className="w-2.5 h-2.5 text-black" strokeWidth={2} />
        </div>
        <span className="text-[13px] font-medium text-[#f0e8c8]">2025 Growth</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {stats.map((s) => (
          <div key={s.num} className="bg-yellow-400/[0.06] border border-yellow-400/[0.12] rounded-lg p-2.5 text-center">
            <div className="text-[18px] font-medium bg-gradient-to-br from-[#fff0a0] to-[#FCD82F] bg-clip-text text-transparent leading-tight">
              {s.num}
            </div>
            <div className="text-[9.5px] text-[#c8b888]/60 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      {bars.map((b) => (
        <div key={b.label} className="mb-3.5">
          <div className="flex justify-between text-[11px] text-[#c8b888]/60 mb-1">
            <span>{b.label}</span>
            <span>{b.value}</span>
          </div>
          <div className="h-[5px] bg-yellow-400/[0.12] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FCD82F] to-[#ffe566]"
              style={{ width: `${b.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ServicesCard() {
  const services = [
    { name: "Creative Design", active: true },
    { name: "Website Development", active: true },
    { name: "Paid Ads", active: true },
    { name: "AI & Automation", active: false },
  ];
  return (
    <div className={`${CARD} absolute right-[4%] top-[45%] w-[220px] p-5 -translate-y-[55%] rotate-[3.5deg] opacity-70 z-[2] [mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_75%,transparent_100%)]`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-[22px] h-[22px] rounded-[5px] bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-[10px] font-bold text-black">
          ✓
        </div>
        <span className="text-[13px] font-medium text-[#f0e8c8]">Services</span>
      </div>
      <div className="flex items-center gap-1.5 bg-yellow-400/[0.12] border border-yellow-400/25 rounded-md px-2.5 py-1.5 text-[11px] text-yellow-400/90 mb-3 w-full">
        <span className="w-2 h-2 rounded-full border border-yellow-400/80 flex-shrink-0" />
        All Growth Engines Active
      </div>
      {services.map((s) => (
        <div
          key={s.name}
          className="flex items-center gap-1.5 py-[5px] text-[11px] text-[#c8b888]/60 border-b border-yellow-400/[0.06] last:border-0"
        >
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.active ? "bg-[#FCD82F]" : "bg-yellow-400/25"}`} />
          {s.name}
          <span className={`ml-auto text-[10px] ${s.active ? "text-green-400" : "text-[#c8b888]/40"}`}>
            {s.active ? "✓" : "→"}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { scrollY } = useScroll();
  const mockupY = useTransform(scrollY, [0, 600], [0, 48]);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: BG }}>
      {/* BackgroundCircles — absolute, fills the hero, sits behind content */}
      <BackgroundCircles variant="brand" className="z-0" />

      {/* Bottom vignette — blends into next section */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-48 z-10"
        style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 pt-[150px] pb-0 text-center">
        {/* Badge */}
        <motion.div
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-yellow-400/[0.12] bg-yellow-400/[0.06] px-3.5 py-1.5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500">
            <ArrowUp className="h-[9px] w-[9px] text-black" strokeWidth={2.5} />
          </div>
          <span className="text-[12px] text-yellow-100/60">Growth agency for ambitious brands</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="mb-5 bg-gradient-to-b from-[#fff0a0] to-[#FCD82F] bg-clip-text text-[clamp(72px,10vw,108px)] font-light leading-none tracking-[-0.035em] text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trickle Up
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-12 max-w-[440px] text-[16px] leading-[1.65] text-yellow-100/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          Ideas are easy, execution is everything. We engineer growth for ambitious
          businesses — faster, leaner, smarter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <a
            href="https://trickleup.co.uk/lets-talks/"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#FCD82F] px-6 py-2.5 text-sm font-semibold text-[#0a0800] transition-all hover:-translate-y-0.5 hover:bg-yellow-300 shadow-[0_0_24px_rgba(252,216,47,0.3)]"
          >
            Let&apos;s Talk <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </a>
          <a
            href="https://trickleup.co.uk/work/"
            className="inline-flex items-center gap-2 rounded-[10px] border border-yellow-400/[0.24] px-6 py-2.5 text-sm text-yellow-100/60 transition-colors hover:text-yellow-100/90 hover:border-yellow-400/40"
          >
            See our work
          </a>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          className="relative mt-20 hidden h-[400px] w-full max-w-[900px] items-center justify-center md:flex"
          style={{ y: mockupY }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          <ClientCard />
          <GrowthCard />
          <ServicesCard />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Providers pill strip ─────────────────────────────────────────────────────
function Providers() {
  const providers = [
    {
      label: "Creative Design",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M2 11l3-3 2 2 3-4 2 4" /><rect x="1" y="2" width="12" height="10" rx="1.5" />
        </svg>
      ),
    },
    {
      label: "Website Development",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <rect x="2" y="3" width="10" height="8" rx="1.5" /><path d="M5 7h4M5 9h2" />
        </svg>
      ),
    },
    {
      label: "Content Marketing",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M2 4h10M2 7h7M2 10h5" />
        </svg>
      ),
    },
    {
      label: "Paid Ads",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M2 10l4-4 3 3 3-5" />
        </svg>
      ),
    },
    {
      label: "SEO",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <circle cx="7" cy="7" r="5" /><path d="M7 4v3l2 1.5" />
        </svg>
      ),
    },
    {
      label: "Brand Strategy",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M7 2l1.5 3.5L12 6l-2.5 2.5.6 3.5L7 10.5l-3.1 1.5.6-3.5L2 6l3.5-.5z" />
        </svg>
      ),
    },
    {
      label: "Video Editing",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M2 10V4l5 3 5-3v6" /><path d="M7 7v5" />
        </svg>
      ),
    },
    {
      label: "AI & Automation",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <path d="M7 2v2M7 10v2M2 7h2M10 7h2M3.5 3.5l1.4 1.4M9.1 9.1l1.4 1.4M3.5 10.5l1.4-1.4M9.1 4.9l1.4-1.4" />
        </svg>
      ),
    },
    {
      label: "Dedicated Talent",
      icon: (
        <svg viewBox="0 0 14 14" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
          <circle cx="7" cy="5" r="2.5" /><path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="border-y border-yellow-400/[0.08] py-5 overflow-hidden" style={{ background: BG }}>
      <p className="text-center text-[11px] font-medium uppercase tracking-widest text-yellow-100/25 mb-4">
        Everything you need to scale, under one roof
      </p>
      <div className="flex flex-wrap justify-center gap-2.5 px-6 max-w-4xl mx-auto">
        {providers.map((p) => (
          <div
            key={p.label}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/[0.12] bg-yellow-400/[0.05] px-3 py-1.5 text-[12px] text-yellow-100/50"
          >
            {p.icon}
            {p.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Features section ─────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      label: "Creative Design",
      desc: "Branding to web and socials — every design made with intention and built to leave a lasting impression.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <rect x="2" y="2" width="14" height="14" rx="3" /><path d="M5 9l3 3 5-5" />
        </svg>
      ),
    },
    {
      label: "Website Development",
      desc: "Sites that aren't just easy on the eyes — built for performance, trust, and usability that converts.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <rect x="2" y="4" width="14" height="10" rx="2" /><path d="M6 8h6M6 10.5h4" />
        </svg>
      ),
    },
    {
      label: "Content Marketing",
      desc: "Scroll-stopping posts, articles, and ideas that make your brand impossible to ignore.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <path d="M3 5h12M3 9h8M3 13h5" />
        </svg>
      ),
    },
    {
      label: "Paid Ads",
      desc: "Ads that actually work — reaching the right people, at the right time, with messages that convert.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <path d="M3 12l4-5 3 3 5-7" /><path d="M14 5h3v3" />
        </svg>
      ),
    },
    {
      label: "SEO",
      desc: "Visibility that compounds — structured to rank, built to last in a search landscape that keeps evolving.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <circle cx="9" cy="9" r="6" /><path d="M6 9c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3" />
        </svg>
      ),
    },
    {
      label: "AI & Automation",
      desc: "Intelligent systems that streamline operations, reduce overhead, and amplify your team's output.",
      icon: (
        <svg viewBox="0 0 18 18" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.3" strokeLinecap="round" className="w-[18px] h-[18px]">
          <path d="M9 3C6 3 3 5.5 3 9s3 6 6 6 6-2.5 6-6" /><path d="M13 3l2 2-2 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 px-6" style={{ background: BG }}>
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-yellow-100/30">
            What we do
          </p>
          <h2 className="mb-4 text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-[-0.03em] text-[#f0e8c8]">
            One agency.<br />
            <span className="bg-gradient-to-r from-[#fff0a0] to-[#FCD82F] bg-clip-text text-transparent">
              Every growth engine.
            </span>
          </h2>
          <p className="mx-auto max-w-[480px] text-[15px] leading-relaxed text-yellow-100/40">
            From bold creative to performance marketing, AI automation to dedicated talent — we handle it all under one roof.
          </p>
        </FadeUp>

        {/* Center orbital visual */}
        <FadeUp className="mb-12 flex justify-center" delay={0.05}>
          <div className="relative flex h-[140px] w-[140px] items-center justify-center">
            {/* Outer ring */}
            <motion.div
              className="absolute h-[140px] w-[140px] rounded-full border border-yellow-400/[0.12]"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#FCD82F]/60" />
            </motion.div>
            {/* Inner ring */}
            <motion.div
              className="absolute h-[90px] w-[90px] rounded-full border border-yellow-400/[0.20]"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#FCD82F]/80" />
            </motion.div>
            {/* Center orb */}
            <div className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border border-yellow-400/[0.20] bg-yellow-400/[0.08]">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <path d="M20 32V8M20 8L12 16M20 8L28 16" stroke="rgba(252,216,47,0.85)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="32" r="3" fill="rgba(252,216,47,0.6)" />
              </svg>
            </div>
          </div>
        </FadeUp>

        {/* Feature cards grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeUp key={f.label} delay={i * 0.07}>
              <div className={`${CARD} group h-full p-6 flex gap-4 transition-all duration-300 hover:border-yellow-400/[0.20]`}>
                <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[9px] border border-yellow-400/[0.12] bg-yellow-400/[0.06]">
                  {f.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-[14px] font-medium text-[#f0e8c8]">{f.label}</h3>
                  <p className="text-[13px] leading-relaxed text-yellow-100/40">{f.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Trickle Up section ───────────────────────────────────────────────────
function WhyUs() {
  const pillars = [
    {
      title: "All-Round Growth Support",
      desc: "Marketing, AI, web, and talent solutions under one roof — everything works together so growth stays aligned and scalable.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M3 10l4-4 3 3 4-5" />
        </svg>
      ),
    },
    {
      title: "Built for Performance",
      desc: "Every strategy is designed to convert, scale, and sustain momentum. Make decisions backed by data, not guesswork.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round">
          <path d="M3 11l4-5 3 3 4-6" />
        </svg>
      ),
    },
    {
      title: "Partnership that Feels In-house",
      desc: "We integrate seamlessly into your business — clear communication, transparent reporting, and real support at every step.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="rgba(252,216,47,0.8)" strokeWidth="1.2" strokeLinecap="round">
          <circle cx="7.5" cy="5.5" r="2.5" /><path d="M3 13c0-2.48 2.01-4.5 4.5-4.5s4.5 2.02 4.5 4.5" />
        </svg>
      ),
    },
  ];

  const metrics = [
    { num: "150+", label: "Digital-first team members" },
    { num: "50+", label: "Active client partnerships" },
    { num: "320%", label: "Average Paid Ads ROAS" },
    { num: "2.8×", label: "Average revenue growth" },
  ];

  const bars = [
    { label: "Client retention rate", pct: 94 },
    { label: "Campaign performance vs target", pct: 88 },
    { label: "On-time delivery", pct: 96 },
  ];

  return (
    <section className="py-28 px-6" style={{ background: "rgba(252,216,47,0.012)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          {/* Left — copy */}
          <FadeUp>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-yellow-100/30">
              Why Trickle Up
            </p>
            <h2 className="mb-4 text-[clamp(36px,5vw,52px)] font-light leading-[1.1] tracking-[-0.03em] text-[#f0e8c8]">
              100% more.<br />
              <span className="bg-gradient-to-r from-[#fff0a0] to-[#FCD82F] bg-clip-text text-transparent">
                For 50% less.
              </span>
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-yellow-100/40">
              Deliver stronger results with faster execution, without inflated agency costs.
              A lean model built to maximise impact.
            </p>
            <div className="flex flex-col gap-5">
              {pillars.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="h-8 w-8 flex-shrink-0 rounded-[8px] border border-yellow-400/[0.20] bg-yellow-400/[0.08] flex items-center justify-center mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <div className="mb-1 text-[13.5px] font-medium text-[#f0e8c8]">{p.title}</div>
                    <div className="text-[13px] leading-relaxed text-yellow-100/40">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — browser mockup */}
          <FadeUp delay={0.1}>
            <div className={`${CARD} overflow-hidden`}>
              {/* Browser chrome */}
              <div className="flex items-center gap-3 border-b border-yellow-400/[0.08] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 rounded-md border border-yellow-400/[0.10] bg-yellow-400/[0.04] px-3 py-1 text-center text-[11px] text-yellow-100/30">
                  trickleup.co.uk/work
                </div>
                <div className="w-8" />
              </div>

              {/* Mockup body */}
              <div className="p-6">
                {/* Metrics grid */}
                <div className="mb-5 grid grid-cols-2 gap-3">
                  {metrics.map((m) => (
                    <div
                      key={m.num}
                      className="rounded-xl border border-yellow-400/[0.10] bg-yellow-400/[0.05] p-4 text-center"
                    >
                      <div className="mb-1 text-[22px] font-light bg-gradient-to-br from-[#fff0a0] to-[#FCD82F] bg-clip-text text-transparent tracking-[-0.02em]">
                        {m.num}
                      </div>
                      <div className="text-[10px] text-yellow-100/40 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="flex flex-col gap-3.5">
                  {bars.map((b) => (
                    <div key={b.label}>
                      <div className="mb-1.5 flex justify-between text-[11px] text-yellow-100/40">
                        <span>{b.label}</span>
                        <span>{b.pct}%</span>
                      </div>
                      <div className="h-[5px] rounded-full bg-yellow-400/[0.10] overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#FCD82F] to-[#ffe566]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = [
    { label: "Work", href: "https://trickleup.co.uk/work/" },
    { label: "Engines", href: "https://trickleup.co.uk/growth-engines/" },
    { label: "Team", href: "https://trickleup.co.uk/team/" },
    { label: "Blog", href: "https://trickleup.co.uk/blog/" },
    { label: "Dedicated Talent", href: "https://trickleup.co.uk/dedicated-talent/" },
    { label: "Contact", href: "https://trickleup.co.uk/lets-talks/" },
  ];

  return (
    <footer
      className="border-t border-yellow-400/[0.07] px-6 py-8"
      style={{ background: BG }}
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="https://trickleup.co.uk/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/trickleup-logo.svg" alt="Trickle Up" className="h-6 w-6" />
          <span className="text-[14px] font-semibold text-[#f0e8c8]">Trickle Up</span>
        </a>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-yellow-100/40 hover:text-yellow-100/80 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] text-yellow-100/25">© 2025 Trickle Up</p>
      </div>
    </footer>
  );
}

// ─── Full page ────────────────────────────────────────────────────────────────
export function DemoCircles() {
  return (
    <div style={{ background: BG }}>
      <Nav />
      <Hero />
      <Providers />
      <Features />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default DemoCircles;
