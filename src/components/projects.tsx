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
    color: "var(--accent-1)",
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
    live: "http://63.178.240.45:3000",
    color: "var(--accent-3)",
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
    color: "var(--accent-light)",
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
    color: "var(--accent-2)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 px-6 noise-overlay" style={{ background: "var(--bg-secondary)" }}>
      {/* Subtle background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"
        style={{ background: "var(--accent-1)" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <FadeUp>
          <span className="section-badge">
            03 / Projects
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6 gradient-text max-w-lg">
            Things I&apos;ve Built
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-text-secondary mb-16 max-w-xl">
            A selection of projects that showcase my passion for backend engineering,
            distributed systems, and building tools that solve real problems.
          </p>
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
                  {/* Accent top bar with shimmer */}
                  <div
                    className="project-accent-bar h-1 w-full"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(90deg, var(--accent-1), var(--accent-3))"
                          : "linear-gradient(90deg, var(--accent-3), var(--accent-1))",
                    }}
                  />

                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3">
                          {/* Project number */}
                          <span
                            className="text-xs font-mono font-bold w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              background: `color-mix(in srgb, ${project.color} 15%, transparent)`,
                              color: project.color,
                              border: `1px solid color-mix(in srgb, ${project.color} 25%, transparent)`,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-2xl font-bold text-text-heading">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-sm text-accent-light font-mono mt-2 ml-10">
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
                              className="group/live flex items-center gap-2 h-9 px-3 rounded-lg glass glass-hover text-text-muted hover:text-accent-light transition-all">
                              <span
                                className="inline-block w-1.5 h-1.5 rounded-full"
                                style={{ background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.5)" }}
                              />
                              <span className="text-[11px] font-mono">Live</span>
                              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
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
                    <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2.5 text-xs text-text-muted group/highlight">
                          <span
                            className="mt-1 shrink-0 w-1 h-1 rounded-full group-hover/highlight:scale-150 transition-transform"
                            style={{ background: project.color }}
                          />
                          <span className="group-hover/highlight:text-text-secondary transition-colors">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t}
                          className="skill-pill text-[11px] font-mono px-2.5 py-1 rounded-lg text-accent-lighter cursor-default"
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
