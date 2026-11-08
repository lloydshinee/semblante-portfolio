"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { experiences, projects, skills, skillIcons, services, socials, about, agentic } from "@/lib/data";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Terminal,
  Folder,
  FileText,
  Cpu,
  Layers,
  User,
  Briefcase,
  ExternalLink,
  Palette,
  Bot,
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Upload,
  Braces,
  MessageSquare,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Send,
  type LucideIcon,
} from "lucide-react";

const THEMES = {
  green: { label: "Green", primary: "#22c55e", dim: "#16a34a", glow: "rgba(34,197,94,0.12)" },
  amber: { label: "Yellow", primary: "#eab308", dim: "#ca8a04", glow: "rgba(234,179,8,0.14)" },
  violet: { label: "Purple", primary: "#a855f7", dim: "#9333ea", glow: "rgba(168,85,247,0.16)" },
  cyan: { label: "Cyan", primary: "#06b6d4", dim: "#0891b2", glow: "rgba(6,182,214,0.14)" },
  white: { label: "White", primary: "#e5e7eb", dim: "#d1d5db", glow: "rgba(229,231,235,0.10)" },
  rose: { label: "Rose", primary: "#f43f5e", dim: "#e11d48", glow: "rgba(244,63,94,0.14)" },
  orange: { label: "Orange", primary: "#f97316", dim: "#ea580c", glow: "rgba(249,115,22,0.14)" },
} as const;
type ThemeKey = keyof typeof THEMES;

const NAV = [
  { id: "about", label: "about.md", icon: User },
  { id: "experience", label: "experience.log", icon: Briefcase },
  { id: "projects", label: "projects/", icon: Folder },
  { id: "services", label: "services.yml", icon: Layers },
  { id: "agentic", label: "agents.json", icon: Bot },
  { id: "skills", label: "skills --list", icon: Cpu },
  { id: "contact", label: "contact.sh", icon: Mail },
] as const;

function hexAlpha(hex: string, alpha: number) {
  const a = Math.round(alpha * 255).toString(16).padStart(2, "0");
  return hex + a;
}

type StepItem = {
  node: string;
  log: string;
  img?: string;
  icon?: LucideIcon;
};

const WORKFLOWS: { cmd: string; time: string; steps: StepItem[] }[] = [
  {
    cmd: "n8n run invoice-intake",
    time: "4.2s",
    steps: [
      { node: "Gmail", log: "new email: invoice PDF attached", img: "/skills/gmail.png" },
      { node: "n8n", log: "extract vendor, amount, due date", img: "/skills/n8n.png" },
      { node: "Sheets", log: "append row to payables tracker", img: "/skills/googlesheets.png" },
      { node: "Drive", log: "file PDF under /Invoices/<vendor>", img: "/skills/googledrive.png" },
      { node: "Notify", log: "message finance with due date", icon: Bell },
    ],
  },
  {
    cmd: "oims issue-certificate --student",
    time: "1.8s",
    steps: [
      { node: "Request", log: "student requests good moral certificate", icon: User },
      { node: "OIMS", log: "check violation records in Next.js", img: "/skills/next.png" },
      { node: "Approve", log: "OSAS staff approves in dashboard", icon: ShieldCheck },
      { node: "PDF", log: "generate certificate from student record", icon: FileText },
      { node: "MySQL", log: "save issuance to audit trail", img: "/skills/mysql.png" },
    ],
  },
  {
    cmd: "databank submit-exam",
    time: "0.9s",
    steps: [
      { node: "Exam", log: "student submits timed practice exam", icon: ClipboardCheck },
      { node: "Node.js", log: "grade answers against key", img: "/skills/js.png" },
      { node: "Topics", log: "group mistakes by subject area", icon: Layers },
      { node: "MySQL", log: "store attempt in database", img: "/skills/mysql.png" },
      { node: "Report", log: "show score + weak topics to student", icon: BarChart3 },
    ],
  },
  {
    cmd: "ocr timecards --batch",
    time: "6.5s",
    steps: [
      { node: "Upload", log: "photos of paper time cards", icon: Upload },
      { node: "Vision AI", log: "vision model reads handwritten in/out times", icon: Sparkles },
      { node: "Python", log: "validate & flag missing punches", img: "/skills/py.png" },
      { node: "JSON", log: "output hours per employee", icon: Braces },
      { node: "Sheets", log: "push to payroll sheet", img: "/skills/googlesheets.png" },
    ],
  },
  {
    cmd: "inventory-mind ask",
    time: "1.3s",
    steps: [
      { node: "Chat", log: '"how many A4 reams are left?"', icon: MessageSquare },
      { node: "AI", log: "translate question to SQL query", icon: Bot },
      { node: "Supabase", log: "select stock where item = A4 ream", img: "/skills/supabase.png" },
      { node: "Check", log: "compare against reorder level", icon: CheckCircle2 },
      { node: "Reply", log: '"12 left, below reorder level of 20"', icon: Send },
    ],
  },
];

function StepBadgeIcon({ step, active, color }: { step: StepItem; active: boolean; color: string }) {
  if (step.img) {
    return (
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-white p-0.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={step.img} alt="" className="h-full w-full object-contain" />
      </span>
    );
  }
  const Icon = step.icon ?? Database;
  return <Icon size={12} className="shrink-0" style={{ color: active ? color : "#5a6b5a" }} />;
}

function WorkflowRun({ color }: { color: string }) {
  const [wf, setWf] = useState(0);
  const [step, setStep] = useState(0);
  const flow = WORKFLOWS[wf]!;
  const FLOW = flow.steps;
  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (step >= FLOW.length + 2) {
      setWf((w) => (w + 1) % WORKFLOWS.length);
      setStep(0);
    }
  }, [step, FLOW.length]);
  const done = step >= FLOW.length;
  return (
    <div className="mt-3 flex flex-1 flex-col rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-3 font-mono text-xs sm:p-4">
      <div className="flex items-center justify-between gap-2 text-[#5a6b5a]">
        <span className="truncate">$ {flow.cmd}</span>
        <span className="shrink-0" style={{ color: done ? color : undefined }}>{done ? `✓ completed in ${flow.time}` : "running…"}</span>
      </div>

      <div key={wf} className="mt-4 flex items-center overflow-x-auto scrollbar-none">
        {FLOW.map((f, i) => {
          const reached = step >= i;
          return (
            <div key={f.node} className="flex flex-1 items-center last:flex-none">
              <div
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2 py-1.5 text-[11px] transition-all duration-500"
                style={{
                  borderColor: reached ? color : "#1e2e1e",
                  color: reached ? "#ffffff" : "#5a6b5a",
                  background: step === i ? hexAlpha(color, 0.14) : reached ? hexAlpha(color, 0.05) : "transparent",
                }}
              >
                <StepBadgeIcon step={f} active={reached} color={color} />
                <span>{f.node}</span>
              </div>
              {i < FLOW.length - 1 && (
                <div className="relative mx-1 h-px min-w-[8px] flex-1 bg-[#1e2e1e]">
                  <div
                    className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
                    style={{ width: step > i ? "100%" : "0%", background: color }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex-1 space-y-1 text-[11px] leading-relaxed">
        {FLOW.map((f, i) => (
          <div
            key={wf + f.node}
            className="flex gap-2 transition-opacity duration-500"
            style={{ opacity: step >= i ? 1 : 0.15 }}
          >
            <span style={{ color: step > i || done ? color : "#5a6b5a" }}>{step > i || done ? "✓" : "·"}</span>
            <span className="w-20 shrink-0 text-zinc-500">{f.node}</span>
            <span className="truncate text-zinc-400">{f.log}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {WORKFLOWS.map((w, i) => (
          <button
            key={w.cmd}
            onClick={() => {
              setWf(i);
              setStep(0);
            }}
            aria-label={w.cmd}
            className="h-1.5 rounded-full transition-all"
            style={{ width: i === wf ? 18 : 6, background: i === wf ? color : "#1e2e1e" }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState("about");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [themeKey, setThemeKey] = useState<ThemeKey>("green");
  const [showPalette, setShowPalette] = useState(false);
  const theme = THEMES[themeKey];

  useEffect(() => {
    const saved = localStorage.getItem("cli-theme") as ThemeKey | null;
    if (saved && saved in THEMES) setThemeKey(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("cli-theme", themeKey);
  }, [themeKey]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const positions = NAV.map((n) => {
        const el = document.getElementById(n.id);
        return { id: n.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      let current = positions[0]?.id ?? "about";
      for (const p of positions) if (p.top <= 140) current = p.id;
      if (positions.every((p) => p.top > 140)) {
        current = positions.reduce((a, b) => (Math.abs(a.top) < Math.abs(b.top) ? a : b)).id;
      }
      // fix: when scrolled to bottom, contact never crosses 140 threshold because section is short — force last item active
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (nearBottom) current = NAV[NAV.length - 1]!.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen bg-[#070a07] text-zinc-100"
      style={
        {
          "--term": theme.primary,
          "--term-dim": theme.dim,
          "--term-glow": theme.glow,
        } as React.CSSProperties
      }
    >
      {/* dynamic selection */}
      <style>{`::selection{background:${theme.primary};color:${"#070a07"}}`}</style>

      {/* cursor-following light — tinted by theme */}
      <div
        className="pointer-events-none fixed inset-0 z-10 hidden lg:block"
        style={{
          background: `radial-gradient(900px circle at ${mouse.x}px ${mouse.y}px, ${theme.glow}, transparent 70%)`,
        }}
      />
      {/* subtle grid + vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#1e2e1e_1px,transparent_1px),linear-gradient(to_bottom,#1e2e1e_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.18] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_110%)]" />
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070a07]/60" />

      {/* top bar - window chrome */}
      <div className="sticky top-0 z-40 border-b border-[#1e2e1e] bg-[#0a0e0a]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0a0e0a]/70">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-3 py-2 sm:px-6 sm:py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] ring-1 ring-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] ring-1 ring-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] ring-1 ring-black/20" />
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#1e2e1e] bg-[#111811] px-3 py-1 font-mono text-[11px] text-zinc-400">
              <Terminal size={12} style={{ color: theme.primary }} />
              lloyd@semblante: ~/portfolio
              <span className="h-3 w-px bg-[#1e2e1e]" />
              <span style={{ color: theme.primary }}>zsh</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* theme picker */}
            <div className="relative">
              <button
                onClick={() => setShowPalette((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#1e2e1e] bg-[#111811] px-2.5 py-1.5 font-mono text-xs text-zinc-300 hover:border-zinc-700 transition"
                aria-label="Change theme"
              >
                <span className="h-3 w-3 rounded-full border border-white/10" style={{ background: theme.primary }} />
                <span className="hidden sm:inline text-[11px]">{theme.label}</span>
                <Palette size={12} className="text-zinc-500" />
              </button>
              {showPalette && (
                <>
                  <button className="fixed inset-0 z-30" onClick={() => setShowPalette(false)} aria-label="close palette" />
                  <div className="absolute right-0 top-full z-40 mt-2 w-64 rounded-xl border border-[#1e2e1e] bg-[#0c110c] p-3 shadow-2xl">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-zinc-300">Theme — main color</span>
                      <span className="font-mono text-[11px] text-zinc-500">{theme.label}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {(Object.entries(THEMES) as [ThemeKey, typeof THEMES[ThemeKey]][]).map(([key, t]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setThemeKey(key);
                            setShowPalette(false);
                          }}
                          className={`group flex flex-col items-center gap-1.5 rounded-lg border p-2 transition ${
                            themeKey === key ? "bg-[#111811] text-white" : "border-transparent hover:bg-[#111811] hover:border-[#1e2e1e] text-zinc-400"
                          }`}
                          style={themeKey === key ? { borderColor: hexAlpha(t.primary, 0.35), background: hexAlpha(t.primary, 0.12) } : {}}
                        >
                          <span
                            className="h-7 w-7 rounded-full border border-white/10 shadow-inner transition group-hover:scale-105"
                            style={{ background: t.primary, boxShadow: themeKey === key ? `0 0 12px ${hexAlpha(t.primary, 0.5)}` : undefined }}
                          />
                          <span className="font-mono text-[11px] leading-none">{t.label}</span>
                        </button>
                      ))}
                    </div>
                    <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-500">Pick your terminal accent — updates glow, buttons, links.</p>
                  </div>
                </>
              )}
            </div>

            <a
              href="https://github.com/lloydshinee"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#1e2e1e] bg-[#111811] p-1.5 text-zinc-400 hover:text-white transition"
              style={{ borderColor: showPalette ? undefined : undefined }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.4))}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-semibold transition hover:opacity-90"
              style={{ background: theme.primary, color: "#070a07" }}
            >
              resume.pdf <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* command palette nav - feels like tabs */}
        <div className="mx-auto max-w-[1200px] overflow-x-auto scrollbar-none">
          <div className="flex gap-1 px-3 pb-2 sm:px-6">
            {NAV.map((item) => {
              const isActive = active === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-xs transition ${
                    isActive ? "text-white" : "border-transparent bg-transparent text-zinc-500 hover:bg-[#111811] hover:text-zinc-300"
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: hexAlpha(theme.primary, 0.32),
                          background: hexAlpha(theme.primary, 0.15),
                          color: theme.primary,
                        }
                      : {}
                  }
                >
                  <Icon size={12} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* main terminal window */}
      <div className="relative mx-auto max-w-[1200px] px-3 py-4 sm:px-6 sm:py-6">
        <div>
          {/* status bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e2e1e] py-2 font-mono text-[11px]">
            <div className="flex items-center gap-2 text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ background: theme.primary, boxShadow: `0 0 8px ${hexAlpha(theme.primary, 0.6)}` }}
                />
                ONLINE
              </span>
              <span className="hidden sm:inline text-[#2a3d2a]">│</span>
              <span className="hidden sm:inline">Iligan City · Digital Operations Partner</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <span style={{ color: theme.primary }}>{projects.length} projects</span>
              <span className="text-[#2a3d2a]">│</span>
              <span className="hidden sm:inline">{skills.length} skills</span>
            </div>
          </div>

          <div className="py-6 lg:py-8">
            {/* HERO / banner */}
            <div className="mb-8 grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
              <div className="flex flex-col">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#5a6b5a]">
                  Iligan City, Philippines
                </div>

                <div className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-3 font-mono text-xs leading-relaxed sm:p-4">
                  <div className="text-[#5a6b5a]">$ whoami</div>
                  <div className="mt-1 flex flex-wrap items-baseline gap-2">
                    <span className="px-1.5 py-0.5 text-sm font-bold" style={{ background: theme.primary, color: "#070a07" }}>
                      LLOYD SEMBLANTE
                    </span>
                    <span className="text-zinc-400">@lloydshinee</span>
                    <span className="rounded bg-[#111811] border border-[#1e2e1e] px-1.5 py-0.5 text-[11px] text-zinc-400">Iligan City</span>
                  </div>
                  <div className="mt-3 text-[13px] leading-relaxed text-zinc-300">
                    <span className="text-white font-medium">I design and build the operations systems that businesses and schools run on.</span>
                  </div>
                  <p className="mt-2 max-w-[60ch] text-zinc-400">
                    Workflow automation across Gmail, Sheets and Drive with n8n, and full-stack Next.js applications for operations that have outgrown spreadsheets. I also teach IT at St. Peter&apos;s College.
                    <span className="inline-block h-3 w-2 translate-y-0.5 ml-1" style={{ background: theme.primary }} />
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => scrollTo("projects")}
                      className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 font-mono text-xs font-bold transition hover:opacity-90"
                      style={{ background: theme.primary, color: "#070a07" }}
                    >
                      <Folder size={14} /> View projects
                    </button>
                    <a
                      href="mailto:semblantelloyd500@gmail.com"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[#1e2e1e] bg-[#111811] px-3.5 py-2 font-mono text-xs font-medium text-zinc-200 hover:text-white transition"
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.32))}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                    >
                      <Mail size={14} /> Get in touch
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] text-zinc-500">
                    <a href="https://github.com/lloydshinee" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-300">
                      <Github size={11} /> GitHub
                    </a>
                    <span className="text-[#1e2e1e]">·</span>
                    <a href="https://www.linkedin.com/in/lloyd-semblante-3741181b4/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-zinc-300">
                      <Linkedin size={11} /> LinkedIn
                    </a>
                  </div>
                </div>
                <WorkflowRun color={theme.primary} />
              </div>

              {/* photo pane - terminal frame */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl border border-[#1e2e1e] bg-[#111811]">
                  <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-[#0a0e0a]">
                    <Image src="/me2.jpg" alt="Lloyd Semblante" fill className="object-cover object-[50%_20%]" priority />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                  <div className="flex items-center justify-between bg-[#0a0e0a] px-3 py-2 font-mono text-[11px]">
                    <span className="text-zinc-500">Off the clock: games, making music, and spoiling my pets.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <section id="about" className="scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">cat about.md</span>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4 font-mono text-sm leading-relaxed">
                  <div className="space-y-3 text-zinc-300">
                    <p>
                      Most of my work starts with someone showing me a spreadsheet they update by hand every morning. I find the
                      repetitive part and automate it, usually with n8n and Google Workspace. When the process outgrows a sheet,
                      I build a proper app in Next.js with Supabase or MySQL.
                    </p>
                    <p className="text-zinc-400">
                      Since 2024 I&apos;ve taught programming and databases in the BSIT program at St. Peter&apos;s College in Iligan,
                      and I advise student capstone projects.
                    </p>
                    <p className="text-zinc-400">
                      Before that I led a team of five building two systems the college still uses: <span className="text-white">Databank</span>,
                      a board exam practice platform, and <span className="text-white">OIMS</span>, which replaced the paper forms at the
                      student affairs office.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4">
                  <div className="font-mono text-xs text-[#5a6b5a] mb-2">$ neofetch --compact</div>
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="space-y-1.5 text-zinc-400">
                      <div>
                        <span style={{ color: theme.primary }}>loc</span> Iligan City
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>role</span> Digital Ops
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>focus</span> Automation
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>stack</span> n8n · Next.js
                      </div>
                    </div>
                    <div className="space-y-1.5 text-zinc-400">
                      <div>
                        <span style={{ color: theme.primary }}>shell</span> zsh
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>editor</span> opencode
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>orchestrator</span> Herdr
                      </div>
                      <div>
                        <span style={{ color: theme.primary }}>brain</span> Second Brain
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">cat experience.log</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">{experiences.length} entries</span>
              </div>
              <div className="space-y-3">
                {experiences.map((exp) => (
                  <div
                    key={exp.title + exp.company}
                    className="group relative rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4 transition hover:bg-[#0e140e]"
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.22))}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-mono text-sm font-semibold text-white">
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1"
                          style={{ color: "inherit" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = theme.primary)}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                        >
                          {exp.title}
                          <span className="text-[#5a6b5a] font-normal">· {exp.company}</span>
                          <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100" />
                        </a>
                      </h3>
                      <span className="rounded bg-[#111811] border border-[#1e2e1e] px-2 py-1 font-mono text-[11px] text-[#5a6b5a]">{exp.period}</span>
                    </div>
                    <p className="mt-2 font-mono text-[13px] leading-relaxed text-zinc-400">{exp.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-2 py-1 font-mono text-[11px] font-medium leading-none"
                          style={{ background: theme.primary, color: "#070a07" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">ls -l projects/ --featured</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">{projects.length} repos</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((p) => p.featured)
                  .map((p) => (
                    <a
                      key={p.title}
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col overflow-hidden rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] transition hover:bg-[#0e140e]"
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.32))}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                    >
                      <div className="relative h-36 w-full overflow-hidden bg-[#111811] border-b border-[#1e2e1e]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
                        <div className="absolute left-2 top-2 rounded bg-black/70 px-1.5 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur border border-white/10">
                          {p.year} · {p.tags[0]}
                        </div>
                        <div
                          className="absolute right-2 top-2 rounded p-1 opacity-0 transition group-hover:opacity-100"
                          style={{ background: theme.primary, color: "#070a07" }}
                        >
                          <ExternalLink size={12} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-3">
                        <h3 className="font-mono text-sm font-semibold leading-snug text-white group-hover:opacity-90" style={{}}>
                          <span className="group-hover:underline decoration-2 underline-offset-4" style={{ textDecorationColor: theme.primary as string }}>
                            {p.title}
                          </span>
                        </h3>
                        <p className="mt-1.5 line-clamp-3 font-mono text-xs leading-relaxed text-zinc-400">{p.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {p.tags.slice(0, 3).map((t) => (
                            <span key={t} className="rounded border border-[#1e2e1e] bg-[#111811] px-1.5 py-1 font-mono text-[10px] text-zinc-400">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
              </div>

              <div className="mt-4 rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] overflow-hidden">
                <div className="border-b border-[#1e2e1e] bg-[#111811] px-3 py-2 font-mono text-xs text-zinc-500">
                  <span style={{ color: theme.primary }}>$</span> ls projects/ | grep -v featured
                </div>
                <div className="divide-y divide-[#1e2e1e]">
                  {projects
                    .filter((p) => !p.featured)
                    .map((p) => (
                      <a
                        key={p.title}
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 px-3 py-2.5 font-mono text-xs hover:bg-[#111811] transition"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-zinc-200">
                            <span className="text-[#5a6b5a] mr-2">rw-r--r--</span>
                            {p.title}
                          </div>
                          <div className="truncate text-[11px] text-zinc-500">{p.description}</div>
                        </div>
                        <ArrowUpRight size={12} className="shrink-0 text-zinc-600" />
                      </a>
                    ))}
                </div>
                <div className="border-t border-[#1e2e1e] bg-[#0a0e0a] px-3 py-2 text-center">
                  <a
                    href="https://github.com/lloydshinee?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs hover:underline underline-offset-4"
                    style={{ color: theme.primary }}
                  >
                    view full archive on GitHub →
                  </a>
                </div>
              </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">cat services.yml</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">3 services</span>
              </div>
              <div className="grid gap-3 lg:grid-cols-3">
                {services.map((s) => (
                  <div key={s.title} className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4">
                    <div className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: theme.primary }}>
                      {s.title}
                    </div>
                    <div className="mt-1 font-mono text-xs italic text-zinc-500">{s.tagline}</div>
                    <p className="mt-3 font-mono text-xs leading-relaxed text-zinc-400">{s.description}</p>
                    <ul className="mt-3 space-y-1 font-mono text-xs text-zinc-300">
                      {s.examples.map((e) => (
                        <li key={e} className="flex gap-1.5">
                          <span className="text-[#5a6b5a]">›</span> {e}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {s.stack.map((t) => (
                        <span key={t} className="rounded bg-[#111811] border border-[#1e2e1e] px-1.5 py-1 font-mono text-[10px] text-zinc-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AGENTIC */}
            <section id="agentic" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">cat agents.json</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">how I build</span>
              </div>

              <p className="mb-5 max-w-[75ch] font-mono text-[13px] leading-relaxed text-zinc-400">{agentic.intro}</p>

              <div className="grid gap-3 lg:grid-cols-3 font-mono">
                {agentic.groups.map((g, gi) => {
                  const wide = gi === 1;
                  return (
                    <div
                      key={g.title}
                      className={`relative overflow-hidden rounded-2xl border border-[#1e2e1e] p-4 sm:p-5 ${
                        gi === 0 ? "lg:col-span-2" : wide ? "lg:col-span-3 lg:order-last" : ""
                      }`}
                      style={{ background: `linear-gradient(160deg, ${hexAlpha(theme.primary, 0.07)}, #0a0e0a 45%)` }}
                    >
                      <div
                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                        style={{ background: hexAlpha(theme.primary, 0.12) }}
                      />
                      <div className="relative mb-4 flex items-end justify-between gap-2">
                        <div>
                          <div className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: theme.primary }}>
                            {g.title}
                          </div>
                          <div className="mt-0.5 font-mono text-[11px] text-zinc-500">{g.note}</div>
                        </div>
                        <span
                          className="rounded-full border px-2 py-0.5 font-mono text-[10px]"
                          style={{ borderColor: hexAlpha(theme.primary, 0.3), color: theme.primary }}
                        >
                          {wide ? `${g.items.length} + many more` : `${g.items.length} ${gi === 2 ? "on-device" : "in use"}`}
                        </span>
                      </div>
                      <div
                        className={`relative grid gap-2.5 ${
                          gi === 0 ? "sm:grid-cols-2" : wide ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
                        }`}
                      >
                        {g.items.map((it) => (
                          <div
                            key={it.name}
                            className="group relative flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur transition duration-300 hover:-translate-y-0.5"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.4);
                              e.currentTarget.style.boxShadow = `0 8px 30px ${hexAlpha(theme.primary, 0.12)}`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = "";
                              e.currentTarget.style.boxShadow = "";
                            }}
                          >
                            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] p-2.5 ring-1 ring-white/10 transition duration-300 group-hover:scale-105">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={it.icon} alt="" className="h-full w-full object-contain" loading="lazy" />
                            </span>
                            <div className="min-w-0 font-mono">
                              <div className="text-xs font-semibold text-white">{it.name}</div>
                              <div className="text-[11px] leading-snug text-zinc-500">{it.use}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {wide && (
                        <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-3 font-mono text-[11px] text-zinc-500">
                          <span>+ OpenAI, Qwen, Mistral, OpenRouter, Groq, and many more depending on the task.</span>
                          <span style={{ color: theme.primary }}>model-agnostic</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">skills --list</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">{skills.length} tools</span>
              </div>
              <div className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4">
                <div className="font-mono text-xs text-[#5a6b5a] mb-3">
                  <span style={{ color: theme.primary }}>$</span> what I use day to day
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => {
                    const icon = skillIcons[s as string];
                    return (
                      <span
                        key={s}
                        className="inline-flex items-center gap-2 rounded-full border border-[#1e2e1e] bg-[#111811] pl-1 pr-3 py-1 font-mono text-xs text-zinc-300 transition hover:text-white"
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.32))}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                      >
                        {icon ? (
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white p-1">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={icon} alt={s} className="h-full w-full object-contain" loading="lazy" />
                          </span>
                        ) : (
                          <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: theme.primary }} />
                        )}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mt-10 scroll-mt-28">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#1e2e1e] pb-3">
                <div className="flex items-start gap-2 font-mono text-[12px] sm:text-[13px] leading-6">
                  <span className="shrink-0 select-none text-[#5a6b5a]">❯</span>
                  <span className="shrink-0 font-semibold" style={{ color: theme.primary }}>
                    $
                  </span>
                  <span className="text-zinc-200">./contact.sh</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#5a6b5a]">replies within a day</span>
              </div>
              <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-lg border border-[#1e2e1e] bg-[#0a0e0a] p-4 font-mono text-sm">
                  <div className="text-[#5a6b5a] text-xs"># email is fastest</div>
                  <div className="mt-3 space-y-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded border border-[#1e2e1e] bg-[#111811] px-3 py-2.5 transition hover:bg-[#0e140e]"
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.32))}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                      >
                        <span className="text-zinc-400">
                          <span className="text-white font-semibold">{s.label}</span>
                          <span className="text-[#5a6b5a] ml-2">{s.handle}</span>
                        </span>
                        <ArrowUpRight size={14} className="text-zinc-500" />
                      </a>
                    ))}
                  </div>
                  <div
                    className="mt-4 rounded px-3 py-2.5 text-center font-mono text-xs font-bold"
                    style={{ background: theme.primary, color: "#070a07" }}
                  >
                    <a href="mailto:semblantelloyd500@gmail.com" className="inline-flex items-center gap-1.5">
                      <Mail size={14} /> semblantelloyd500@gmail.com
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border p-4 font-mono text-sm" style={{ borderColor: hexAlpha(theme.primary, 0.22), background: hexAlpha(theme.primary, 0.06) }}>
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full border bg-[#0a0e0a] px-2.5 py-1 text-xs font-semibold"
                    style={{ borderColor: hexAlpha(theme.primary, 0.22), color: theme.primary }}
                  >
                    Open to projects
                  </div>
                  <p className="mt-3 text-zinc-300 leading-relaxed">If your team re-types the same data into three places every week, send me a short description of the process. I&apos;ll tell you honestly whether it&apos;s worth automating.</p>
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    Workflow automation runs on n8n. Full systems are built on Next.js and Supabase.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/lloyd-semblante-3741181b4/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-md bg-[#0a0e0a] border border-[#1e2e1e] px-3 py-2 text-center text-xs font-semibold text-white transition hover:opacity-90"
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = hexAlpha(theme.primary, 0.32))}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/lloydshinee"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-md px-3 py-2 text-center text-xs font-bold transition hover:opacity-90"
                      style={{ background: theme.primary, color: "#070a07" }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* footer prompt */}
            <div className="mt-8 flex items-center gap-2 border-t border-[#1e2e1e] pt-4 font-mono text-xs text-zinc-500">
              <span style={{ color: theme.primary }}>❯</span>
              <span>© {new Date().getFullYear()} Lloyd Semblante · Iligan City · Built with Next.js & Tailwind</span>
              <span className="h-4 w-2 ml-1 inline-block" style={{ background: theme.primary }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
