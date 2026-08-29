// Central data — sourced from sembante-portfolio + v2 + second-brain philosophy
export const experiences = [
  {
    period: "2024 — Present",
    title: "BSIT Instructor",
    company: "St. Peter's College — Iligan City",
    url: "https://spc.edu.ph",
    description:
      "Teaching BSIT for 2 years — programming, databases, systems. Mentoring capstones & real-world projects. Built and maintain school's Databank and OIMS used by faculty and OSAS.",
    tags: ["Teaching", "BSIT", "Next.js", "MySQL", "Supabase"],
  },
  {
    period: "2024 — Present",
    title: "Digital Operations Partner",
    company: "Self-employed · Automation for SMEs",
    url: "https://github.com/lloydshinee",
    description:
      "Automate businesses so owners focus on growth. Ship n8n workflows across Gmail, Sheets, Drive + AI agents — doc automation, notifications, end-to-end paperless ops.",
    tags: ["n8n", "Google Workspace", "AI Agents", "Automation"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "St. Peter's College · Databank & OIMS",
    url: "https://github.com/lloydshinee",
    description:
      "Led dev of SPC Databank (board exam simulator) and OIMS for OSAS with team of 5. Next.js / Node.js / MySQL — replaced manual paperwork with automated flows.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind"],
  },
] as const;

export const projects = [
  {
    title: "OIMS — OSAS Information Management System",
    description:
      "Complete business system for OSAS at St. Peter's College. Admission, inventory, violation monitoring, certificate generation — one system, zero paper.",
    tags: ["Next.js", "MySQL", "Tailwind", "Business System"],
    link: "https://github.com/lloydshinee/oims",
    image: "/projects/osas1.png",
    year: "2024",
    featured: true,
  },
  {
    title: "SPC Databank — Board Exam Simulator",
    description:
      "Students practice board exams, get instant scores, track progress. Manual test-prep → automated, measurable flow.",
    tags: ["Next.js", "Node.js", "MySQL", "Education"],
    link: "https://github.com/lloydshinee/spc-databank",
    image: "/projects/db1.PNG",
    year: "2024",
    featured: true,
  },
  {
    title: "Inventory Mind — AI Inventory",
    description:
      "AI IMS — manage stock with natural language: query, create, update, delete without spreadsheets.",
    tags: ["AI", "Next.js", "Supabase", "Full Stack"],
    link: "https://github.com/lloydshinee/inventory-mind",
    image: "/projects/is4.PNG",
    year: "2024",
    featured: true,
  },
  {
    title: "englisyarn — AI Grammar Quiz",
    description:
      "AI grammar quizzes for Filipinos. Auto-generates fresh practice, ranked by Luzon / Visayas / Mindanao.",
    tags: ["AI", "Next.js", "Education"],
    link: "https://github.com/lloydshinee/englisyarn",
    image: "/projects/e1.PNG",
    year: "2023",
    featured: false,
  },
  {
    title: "ShopEase — AI Ecommerce",
    description: "Ecommerce with personalized recs, AI browsing, smart cart.",
    tags: ["AI", "Next.js", "Ecommerce"],
    link: "https://github.com/lloydshinee/ai-ecommerce",
    image: "/projects/ae1.png",
    year: "2023",
    featured: false,
  },
  {
    title: "AI-Powered OCR for Time Cards",
    description: "Reads time-card images with Gemini → structured JSON. No more manual timekeeping entry.",
    tags: ["Python", "Gemini", "OCR", "Automation"],
    link: "https://github.com/lloydshinee/ai-ocr",
    image: "/projects/coming-soon.png",
    year: "2024",
    featured: false,
  },
  {
    title: "n8n Automation Workflows",
    description: "Gmail + Sheets + Drive workflows — doc automation, notifications, biz process automation.",
    tags: ["n8n", "Google Workspace", "Automation"],
    link: "https://github.com/lloydshinee",
    image: "/projects/coming-soon.png",
    year: "2024",
    featured: false,
  },
  {
    title: "Stash — Luggage Storage",
    description: "Marketplace connecting travelers with verified hosts for hourly luggage storage.",
    tags: ["Next.js", "Marketplace"],
    link: "https://github.com/lloydshinee/estash",
    image: "/projects/coming-soon.png",
    year: "2024",
    featured: false,
  },
] as const;

export const services = [
  {
    title: "Automation",
    tagline: "For teams living in Google Workspace, Excel, Messenger, email.",
    description: "Connect tools you already use. Repetitive keystrokes → minutes saved.",
    examples: ["Email automation", "Document automation", "Approval workflows", "OCR & PDF processing"],
    stack: ["n8n", "Gmail", "Drive", "Sheets"],
  },
  {
    title: "Business Systems",
    tagline: "When spreadsheets are no longer enough.",
    description: "Complete systems — one source of truth instead of scattered files and paper.",
    examples: ["Inventory", "CRM", "Clinic / POS", "School systems"],
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n"],
  },
  {
    title: "AI Enhancement",
    tagline: "After you’re digital — make it smarter.",
    description: "AI as a feature, not the product. Agents that turn hours into minutes.",
    examples: ["Doc understanding", "Support chatbot", "Email classification", "Knowledge assistant"],
    stack: ["Agentic Coding", "n8n", "Supabase"],
  },
] as const;

export const skills = [
  "n8n",
  "Supabase",
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "Google Workspace",
  "Tailwind CSS",
  "Git / GitHub",
  "Linux",
  "Figma",
  "Agentic Coding",
  "AI / Gemini",
  "Automation",
] as const;

// logo map — uses existing public/skills/*.png from sembante-portfolio (copied to this app)
export const skillIcons: Record<string, string> = {
  "n8n": "/skills/n8n.png",
  "Supabase": "/skills/supabase.png",
  "Next.js": "/skills/next.png",
  "React": "/skills/react.webp",
  "TypeScript": "/skills/js.png",
  "Python": "/skills/py.png",
  "Node.js": "/skills/js.png",
  "PostgreSQL": "/skills/postgres.png",
  "MySQL": "/skills/mysql.png",
  "Google Workspace": "/skills/googlesheets.png",
  "Tailwind CSS": "/skills/tailwind.png",
  "Git / GitHub": "/skills/git.png",
  "Linux": "/skills/linux.png",
  "Figma": "/skills/figma.png",
  "Agentic Coding": "/skills/opencode.png",
  "AI / Gemini": "/skills/opencode.png",
  "Automation": "/skills/n8n.png",
  // extras for future
  "Java": "/skills/java.png",
  "PHP": "/skills/php.png",
  "Gmail": "/skills/gmail.png",
  "Google Sheets": "/skills/googlesheets.png",
  "Google Drive": "/skills/googledrive.png",
  "Slack": "/skills/slack.png",
  "CSS": "/skills/css.png",
  "HTML": "/skills/html.png",
  "WordPress": "/skills/wp.png",
  "Shopify": "/skills/shopify.png",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/lloydshinee", handle: "@lloydshinee" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lloyd-semblante-3741181b4/", handle: "lloyd-semblante" },
  { label: "Email", href: "mailto:semblantelloyd500@gmail.com", handle: "semblantelloyd500@gmail.com" },
] as const;

export const about = {
  name: "Lloyd Semblante",
  role: "Digital Operations Partner",
  location: "Iligan City",
  bio: "I build business systems with n8n + AI — turning paper and clicks into real flows. From Gmail/Sheets/Drive automations to complete paperless ops with Next.js + Supabase. Off the clock: in Iligan City, gaming, making music, spoiling my pets.",
  stats: [
    { value: "20+", label: "Projects shipped" },
    { value: "5", label: "Team-built OIMS/Databank" },
    { value: "100%", label: "Paper → digital" },
  ],
};
