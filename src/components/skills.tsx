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
    <section id="skills" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <FadeUp>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-light">
                02 / Skills
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 gradient-text">
                Tech Stack
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                Tools and technologies I use to build scalable, production-grade systems.
              </p>
            </FadeUp>
          </div>

          {/* Right — cards grid */}
          <div className="lg:w-2/3">
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <StaggerItem key={cat.title}>
                  <div className="card rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-lg" style={{ color: cat.accent }}>{cat.icon}</span>
                      <h3 className="text-sm font-mono font-medium text-text-primary">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-text-secondary transition-colors"
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
