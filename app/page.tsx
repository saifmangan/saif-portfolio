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

export default function Home() {
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

            <a
              href="#contact"
              className="rounded-full border border-white/12 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06]"
            >
              Contact
            </a>
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
    </main>
  );
}