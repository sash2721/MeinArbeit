"use client";

import { FadeUp, GlowCard, MagneticHover } from "./motion";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Visora",
    subtitle: "AI-Powered Expense Tracking Platform",
    description:
      "Microservices-based platform that extracts, structures, and analyzes receipt data using OCR and LLMs. Features a Go REST API with JWT auth, GenAI pipeline with FastAPI, and intelligent expense categorization.",
    tech: ["Go", "PostgreSQL", "FastAPI", "React", "Gemini/Groq", "Docker", "AWS ECS Fargate"],
    highlights: [
      "OCR + LLM pipeline for receipt-to-data transformation",
      "Analytics caching to reduce LLM calls and latency",
      "AWS ECS Fargate with Cloud Map service discovery",
      "Secured via AWS SSM + Cloudflare Tunnel",
    ],
    github: "https://github.com/sash2721/Visora",
    live: "https://visora.me/",
  },
  {
    title: "Relay",
    subtitle: "Rapid Deployment Platform",
    description:
      "A deployment platform designed to build and ship applications within minutes, supporting Node.js, Python, Go, and modern frontend frameworks.",
    tech: ["Go", "TypeScript", "Next.js", "Docker", "Redis Queues", "PostgreSQL"],
    highlights: [
      "Container-based deployment pipeline",
      "Queue-driven job orchestration with Redis",
      "Multi-language project support",
      "Low-latency provisioning",
    ],
    github: "https://github.com/sash2721/Relay",
    live: null,
    wip: true,
  },
  {
    title: "CodeStars",
    subtitle: "Distributed Online Judge System",
    description:
      "A distributed online judge handling problem management, code submission, and secure evaluation at scale using microservices.",
    tech: ["TypeScript", "Node.js", "Fastify", "Docker", "RabbitMQ", "MongoDB", "WebSockets"],
    highlights: [
      "Secure Docker-sandboxed code execution",
      "Async evaluation via RabbitMQ",
      "Real-time updates with WebSockets",
      "Multi-service architecture",
    ],
    github: "https://github.com/sash2721/CodeStars_Evaluator_Service",
    live: null,
  },
  {
    title: "NovaNest",
    subtitle: "Real-Time Chat Application",
    description:
      "Real-time chat application enabling instant communication through WebSocket-based messaging with persistent storage.",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "WebSockets"],
    highlights: [
      "WebSocket-based low-latency messaging",
      "Scalable concurrent user handling",
      "Persistent message storage with MongoDB",
    ],
    github: "https://github.com/sash2721/NovaNest",
    live: "https://novanest-prod.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-light">
            03 / Projects
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-16 gradient-text max-w-lg">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <GlowCard>
                <div
                  className={`card rounded-2xl overflow-hidden ${
                    i % 2 === 0 ? "" : "lg:ml-auto lg:mr-0"
                  }`}
                  style={{ maxWidth: "56rem" }}
                >
                  {/* Accent top bar */}
                  <div className="h-1 w-full" style={{
                    background: i % 2 === 0
                      ? "linear-gradient(90deg, var(--accent-1), var(--accent-3))"
                      : "linear-gradient(90deg, var(--accent-3), var(--accent-1))",
                  }} />

                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-text-heading">
                            {project.title}
                          </h3>
                          {project.wip && (
                            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                              style={{ borderColor: "rgba(245, 158, 11, 0.3)", color: "#f59e0b", background: "rgba(245, 158, 11, 0.08)" }}>
                              IN PROGRESS
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-accent-light font-mono mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex gap-3 shrink-0">
                        {project.github && (
                          <MagneticHover>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub`}
                              className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-text-muted hover:text-accent-light transition-all">
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                            </a>
                          </MagneticHover>
                        )}
                        {project.live && (
                          <MagneticHover>
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                              aria-label={`${project.title} Live`}
                              className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-text-muted hover:text-accent-light transition-all">
                              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                              </svg>
                            </a>
                          </MagneticHover>
                        )}
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-text-muted">
                          <span className="text-accent-light mt-0.5 shrink-0">▹</span>
                          {h}
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg text-accent-lighter"
                          style={{ background: "var(--bg-glass)", border: "1px solid var(--border-accent)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
