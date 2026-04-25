"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./motion";
import { techIconMap } from "./tech-icons";

const categories = [
  {
    title: "Languages",
    icon: "{ }",
    accent: "var(--accent-1)",
    items: ["Go", "Python", "TypeScript", "Java", "C++"],
  },
  {
    title: "Backend & APIs",
    icon: "⚡",
    accent: "var(--accent-2)",
    items: ["REST APIs", "gRPC", "Microservices", "FastAPI", "Flask", "Node.js", "Express", "Fastify", "Chi"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁",
    accent: "var(--accent-light)",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Cloudflare", "Cloud Run"],
  },
  {
    title: "Databases & Messaging",
    icon: "◆",
    accent: "var(--accent-3)",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "RabbitMQ", "Kafka"],
  },
  {
    title: "Systems & Architecture",
    icon: "⬡",
    accent: "var(--accent-1)",
    items: ["Distributed Systems", "Event-driven", "Queue Processing", "Service Discovery", "Observability"],
  },
  {
    title: "AI / Data",
    icon: "◎",
    accent: "var(--accent-3)",
    items: ["LLMs", "RAGs", "MCPs", "PyTorch", "LangChain", "OCR", "OpenCV", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 lg:py-32 px-6 noise-overlay">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <FadeUp>
              <span className="section-badge">
                02 / Skills
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6 gradient-text">
                Tech Stack
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                Tools and technologies I use to build scalable, production-grade systems.
              </p>
            </FadeUp>

            {/* Fun metric */}
            <FadeUp delay={0.3}>
              <div className="mt-8 flex gap-6">
                <div>
                  <p className="text-3xl font-bold gradient-text">30+</p>
                  <p className="text-xs text-text-muted mt-1">Technologies</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">6</p>
                  <p className="text-xs text-text-muted mt-1">Categories</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — cards grid */}
          <div className="lg:w-2/3">
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <StaggerItem key={cat.title}>
                  <div className="card rounded-2xl p-6 h-full group">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="text-lg w-8 h-8 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110"
                        style={{
                          color: cat.accent,
                          background: `color-mix(in srgb, ${cat.accent} 10%, transparent)`,
                        }}
                      >
                        {cat.icon}
                      </span>
                      <h3 className="text-sm font-mono font-medium text-text-primary">
                        {cat.title}
                      </h3>
                      <span className="ml-auto text-[10px] font-mono text-text-muted px-2 py-0.5 rounded-full" style={{ background: "var(--bg-glass)" }}>
                        {cat.items.length}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="skill-pill inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-text-secondary cursor-default"
                          style={{
                            background: "var(--bg-glass)",
                            border: "1px solid var(--border-primary)",
                          }}
                        >
                          <span className="text-accent-light opacity-80">
                            {techIconMap[item]}
                          </span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
