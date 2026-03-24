"use client";

import { useMemo, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const stats = [
  "4.5+ years consulting",
  "MSc Data Science & AI",
  "Enterprise + AI systems",
];

const projects = [
  {
    title: "AI Ticket Triage Assistant",
    description:
      "An AI-first support workflow concept that classifies tickets, suggests next actions, and reduces response friction for service teams.",
    tags: ["Python", "LLMs", "Automation"],
    link: "#",
  },
  {
    title: "Dynamics 365 AI Service Copilot",
    description:
      "A customer service copilot concept for Dynamics 365 that helps agents retrieve knowledge, summarize cases, and work faster with context.",
    tags: ["Dynamics 365", "AI", "Enterprise"],
    link: "#",
  },
  {
    title: "GitHub Projects",
    description:
      "A gateway to my GitHub work across AI, data science, analytics, and engineering-led experimentation.",
    tags: ["GitHub", "Portfolio", "Projects"],
    link: "https://github.com/saifmangan",
  },
];

const starterPrompts = [
  "What services do you offer?",
  "What kind of projects can you build?",
  "What is your background?",
];

function getBotReply(message: string): string {
  const input = message.toLowerCase();

  if (
    input.includes("service") ||
    input.includes("offer") ||
    input.includes("freelance") ||
    input.includes("help me")
  ) {
    return "I offer AI chatbot development, analytics dashboards, business automation, internal tools, and AI/data solutions connected to real workflows such as CRM, support, and operations.";
  }

  if (
    input.includes("project") ||
    input.includes("build") ||
    input.includes("make") ||
    input.includes("develop")
  ) {
    return "I can build portfolio websites, AI assistants, customer support copilots, dashboard/reporting tools, workflow automation systems, and business-focused web apps with data and AI features.";
  }

  if (
    input.includes("background") ||
    input.includes("experience") ||
    input.includes("who are you")
  ) {
    return "Saif has 4.5+ years of ERP and CRM consulting experience and is now focused on Data Science, AI, analytics, and enterprise product systems. That mix of business and technical thinking is the core differentiator.";
  }

  if (
    input.includes("tech") ||
    input.includes("stack") ||
    input.includes("technology")
  ) {
    return "The portfolio uses Next.js, Tailwind CSS, TypeScript, GitHub, and Vercel. Broader work includes Python, SQL, AI APIs, analytics tooling, and enterprise platforms such as Dynamics 365.";
  }

  if (
    input.includes("contact") ||
    input.includes("email") ||
    input.includes("hire") ||
    input.includes("reach")
  ) {
    return "You can reach Saif through the contact section on this site, LinkedIn, GitHub, or by email at saif.mangan@outlook.com.";
  }

  if (input.includes("chatbot") || input.includes("ai")) {
    return "A strong client use case is an AI chatbot for support, internal knowledge, lead qualification, CRM workflows, or operations. That is one of the best service angles for this portfolio.";
  }

  return "I can answer questions about Saif’s background, services, projects, tech stack, and how to get in touch. Try asking about services, projects, or experience.";
}

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi — I’m Saif’s portfolio assistant. Ask about services, projects, experience, or how to work together.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (text?: string) => {
    const messageToSend = (text ?? input).trim();
    if (!messageToSend) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: messageToSend,
    };

    const assistantMessage: ChatMessage = {
      role: "assistant",
      content: getBotReply(messageToSend),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setIsChatOpen(true);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0A0A0B] text-white">
      <div className="absolute inset-0 -z-10 bg-[#0A0A0B]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(110,168,254,0.12),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.12),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0A0A0B]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-2xl font-bold tracking-[0.02em] text-white transition duration-200 hover:opacity-80"
          >
            SAIF MANGAN
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/55 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/55 backdrop-blur">
            Data Science • AI • Product Systems
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            AI products,
            <br />
            data systems, and
            <br />
            <span className="bg-gradient-to-r from-white via-white to-white/45 bg-clip-text text-transparent">
              serious business value.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
            I blend enterprise consulting experience with AI and data science to
            build products that look sharp, move fast, and solve real
            operational problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-200 hover:-translate-y-0.5 hover:opacity-95"
            >
              View Projects
            </a>

            <a
              href="https://github.com/saifmangan"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              GitHub
            </a>

            <button
              type="button"
              onClick={() => setIsChatOpen(true)}
              className="rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              Ask AI Assistant
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
            <img
              src="/web_picture.jpg"
              alt="Saif Mangan"
              className="relative h-[420px] w-[310px] rounded-[1.75rem] object-cover sm:h-[500px] sm:w-[370px]"
            />
            <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[1.4rem] border border-white/10 bg-black/35 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Portfolio Focus
              </p>
              <p className="mt-2 text-sm text-white/80">
                AI systems, analytics, enterprise workflows, and product
                thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:grid-cols-3 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Who I am</h2>
          </div>

          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-white/62">
              My edge is not just theory. I understand business workflows,
              stakeholder pain points, enterprise systems, and how to turn
              technical work into something useful, credible, and commercially
              relevant.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Projects</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/45">
                  Project
                </span>
              </div>

              <p className="mt-4 leading-7 text-white/60">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                className="mt-6 inline-flex items-center text-sm font-medium text-white/80 transition group-hover:translate-x-1 group-hover:text-white"
              >
                View project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-white/45">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
            Let’s build something serious.
          </h2>

          <div className="mt-8 space-y-4 text-white/65">
            <p>saif.mangan@outlook.com</p>
            <a
              href="https://www.linkedin.com/in/saif-ali-khan-mangan/"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:translate-x-1 hover:text-white"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/saifmangan"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:translate-x-1 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-30 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black shadow-2xl transition hover:-translate-y-0.5 hover:opacity-95"
      >
        {isChatOpen ? "Close Assistant" : "Chat with AI"}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-30 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101013]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="text-sm font-semibold text-white">Portfolio AI Assistant</p>
            <p className="mt-1 text-xs text-white/50">
              Ask about services, projects, experience, or contact.
            </p>
          </div>

          <div className="max-h-[380px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "assistant"
                    ? "bg-white/[0.05] text-white/80"
                    : "ml-auto bg-white text-black"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/65 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask something..."
                className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!canSend}
                className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}