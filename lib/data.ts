// Central data — sourced from sembante-portfolio + v2 + second-brain philosophy
export const experiences = [
  {
    period: "2024 — Present",
    title: "BSIT Instructor",
    company: "St. Peter's College — Iligan City",
    url: "https://spc.edu.ph",
    description:
      "I teach programming and database courses and advise capstone teams. I also maintain Databank and OIMS, which faculty and the student affairs office still use.",
    tags: ["Teaching", "BSIT", "Next.js", "MySQL", "Supabase"],
  },
  {
    period: "2024 — Present",
    title: "Digital Operations Partner",
    company: "Self-employed · Automation for SMEs",
    url: "https://github.com/lloydshinee",
    description:
      "Automation consulting for businesses: n8n workflows that sync data across Gmail, Sheets and Drive, generate documents, and handle notifications end to end.",
    tags: ["n8n", "Google Workspace", "AI Agents", "Automation"],
  },
  {
    period: "2022 — 2024",
    title: "Full-Stack Developer",
    company: "St. Peter's College · Databank & OIMS",
    url: "https://github.com/lloydshinee",
    description:
      "Led a team of five building Databank, a board exam practice platform, and OIMS for the student affairs office. Built with Next.js, Node.js and MySQL.",
    tags: ["Next.js", "Node.js", "MySQL", "Tailwind"],
  },
] as const;

export const projects = [
  {
    title: "OIMS — OSAS Information Management System",
    description:
      "The student affairs office at St. Peter's College tracked admissions, violations and inventory on paper and filled in certificates by hand. OIMS keeps all of it in one database and generates certificates from the student record.",
    tags: ["Next.js", "MySQL", "Tailwind", "Business System"],
    link: "https://github.com/lloydshinee/oims",
    image: "/projects/osas1.png",
    year: "2024",
    featured: true,
  },
  {
    title: "SPC Databank — Board Exam Simulator",
    description:
      "Reviewers used to be printed and checked by hand. In Databank, students take timed practice board exams, get scored immediately, and see which topics they keep missing.",
    tags: ["Next.js", "Node.js", "MySQL", "Education"],
    link: "https://github.com/lloydshinee/spc-databank",
    image: "/projects/db1.PNG",
    year: "2024",
    featured: true,
  },
  {
    title: "Inventory Mind — AI Inventory",
    description:
      "An inventory app where you type things like \"how many A4 reams are left?\" or \"add 20 boxes of pens\" instead of editing a spreadsheet.",
    tags: ["AI", "Next.js", "Supabase", "Full Stack"],
    link: "https://github.com/lloydshinee/inventory-mind",
    image: "/projects/is4.PNG",
    year: "2024",
    featured: true,
  },
  {
    title: "englisyarn — AI Grammar Quiz",
    description:
      "Grammar quizzes for Filipino learners. Questions are generated fresh each round, with a leaderboard split by Luzon, Visayas and Mindanao.",
    tags: ["AI", "Next.js", "Education"],
    link: "https://github.com/lloydshinee/englisyarn",
    image: "/projects/e1.PNG",
    year: "2023",
    featured: false,
  },
  {
    title: "ShopEase — AI Ecommerce",
    description: "A store demo where product recommendations change based on what you've viewed and added to your cart.",
    tags: ["AI", "Next.js", "Ecommerce"],
    link: "https://github.com/lloydshinee/ai-ecommerce",
    image: "/projects/ae1.png",
    year: "2023",
    featured: false,
  },
  {
    title: "AI-Powered OCR for Time Cards",
    description: "Reads photos of paper time cards with a vision model and outputs structured JSON, so payroll doesn't have to type in hours by hand.",
    tags: ["Python", "Vision AI", "OCR", "Automation"],
    link: "https://github.com/lloydshinee/ai-ocr",
    image: "/projects/coming-soon.png",
    year: "2024",
    featured: false,
  },
] as const;

export const services = [
  {
    title: "Automation",
    tagline: "For teams living in Google Workspace, Excel, Messenger, email.",
    description: "I connect the tools you already pay for so the repetitive steps run on their own.",
    examples: ["Email automation", "Document automation", "Approval workflows", "OCR & PDF processing"],
    stack: ["n8n", "Gmail", "Drive", "Sheets"],
  },
  {
    title: "Business Systems",
    tagline: "When spreadsheets are no longer enough.",
    description: "A proper app with one database, instead of five spreadsheets that disagree with each other.",
    examples: ["Inventory", "CRM", "Clinic / POS", "School systems"],
    stack: ["Next.js", "Supabase", "PostgreSQL", "n8n"],
  },
  {
    title: "AI Enhancement",
    tagline: "Once your data is in one place.",
    description: "Adding AI where it actually helps, like reading documents or sorting incoming email.",
    examples: ["Doc understanding", "Support chatbot", "Email classification", "Knowledge assistant"],
    stack: ["LLM APIs", "n8n", "Supabase"],
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
  "LLM APIs (multi-provider)",
  "Agentic Coding",
] as const;

// logo map — uses existing public/skills/*.png from sembante-portfolio (copied to this app)
export const skillIcons: Record<string, string> = {
  "n8n": "/skills/n8n.png",
  "Supabase": "/skills/supabase.png",
  "Next.js": "/skills/next.png",
  "React": "/skills/react.webp",
    "Python": "/skills/py.png",
    "PostgreSQL": "/skills/postgres.png",
  "MySQL": "/skills/mysql.png",
  "Google Workspace": "/skills/googlesheets.png",
  "Tailwind CSS": "/skills/tailwind.png",
  "Git / GitHub": "/skills/git.png",
  "Linux": "/skills/linux.png",
  "Figma": "/skills/figma.png",
  
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
  bio: "I automate repetitive office work with n8n and build Next.js apps when a spreadsheet stops being enough. I also teach IT at St. Peter's College.",
};


export const agentic = {
  intro:
    "Most of my code is written with AI agents now. I plan the work, the agent drafts it, and I review every change before it ships. I switch models depending on the job: a strong model for architecture and debugging, a fast cheap one for bulk edits, and a local one when the data shouldn't leave the machine.",
  groups: [
    {
      title: "Coding agents",
      note: "Where the work happens",
      items: [
        { name: "Antigravity CLI", icon: "/agentic/antigravity-color.svg", use: "Terminal agent for multi-file changes" },
        { name: "OpenCode", icon: "/agentic/opencode.svg", use: "Daily driver, swaps providers per task" },
        { name: "Claude Code", icon: "/agentic/claudecode-color.svg", use: "Larger refactors and reviews" },
        { name: "GitHub Copilot", icon: "/agentic/githubcopilot.svg", use: "Inline completions in the editor" },
      ],
    },
    {
      title: "Model providers",
      note: "Picked per task",
      items: [
        { name: "Claude", icon: "/agentic/claude-color.svg", use: "Architecture, debugging, long context" },
        { name: "Gemini", icon: "/agentic/gemini-color.svg", use: "Vision, documents, large inputs" },
        { name: "GLM", icon: "/agentic/zhipu-color.svg", use: "Strong coding model at a low cost" },
        { name: "DeepSeek", icon: "/agentic/deepseek-color.svg", use: "Cheap, strong for bulk code edits" },
      ],
    },
    {
      title: "Local models",
      note: "When data stays on-device",
      items: [
        { name: "Ollama", icon: "/agentic/ollama.svg", use: "Run open models from the terminal" },
        { name: "LM Studio", icon: "/agentic/lmstudio.svg", use: "Test and compare local models" },
      ],
    },
  ],
} as const;
