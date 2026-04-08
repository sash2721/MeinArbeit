"use client";

import { motion } from "framer-motion";

const codeSnippet = `func main() {
  srv := server.New(
    server.WithPort(":8080"),
    server.WithAuth(jwt.New()),
    server.WithDB(postgres.Connect()),
  )
  srv.Run()
}`;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden px-6"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-1) 1px, transparent 1px), linear-gradient(90deg, var(--accent-1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ background: "var(--accent-1)" }} />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-[150px] opacity-15"
        style={{ background: "var(--accent-3)" }} />
      <div className="absolute top-[15%] left-[40%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-10"
        style={{ background: "var(--accent-2)" }} />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left — main content */}
          <div className="py-20 lg:py-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block font-mono text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full border text-accent-light"
                style={{ borderColor: "var(--border-accent)", background: "var(--bg-glass)" }}>
                Software Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-display tracking-tight leading-[0.9] mb-8"
            >
              <span className="text-text-heading">Sahil</span>
              <br />
              <span className="gradient-text">Shah</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary max-w-lg leading-relaxed mb-6"
            >
              Building{" "}
              <span className="text-accent-light">scalable backend systems</span>,{" "}
              <span className="text-accent-light">distributed architectures</span>, and{" "}
              <span className="text-accent-light">cloud-native platforms</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-text-muted max-w-md mb-10"
            >
              Turning complex infrastructure problems into reliable, production-ready systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl gradient-accent text-white text-sm font-medium transition-all hover:opacity-90 hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl glass glass-hover text-text-secondary hover:text-text-primary text-sm font-medium transition-all"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-3"
            >
              {[
                { label: "GitHub", href: "https://github.com/sash2721", icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /> },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/sash2721/", icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                { label: "X", href: "https://x.com/ss_21_", icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-text-muted hover:text-accent-light transition-all">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">{s.icon}</svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — visual elements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Code snippet card */}
            <div className="card rounded-2xl p-5 rotate-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#eab308" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
                <span className="text-[10px] font-mono text-text-muted ml-2">main.go</span>
              </div>
              <pre className="text-[11px] font-mono leading-relaxed text-text-secondary overflow-hidden">
                <code>{codeSnippet}</code>
              </pre>
            </div>

            {/* Info cards row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card rounded-2xl p-5 -rotate-1">
                <p className="font-mono text-xs text-text-muted mb-2">Current Role</p>
                <p className="text-sm font-medium text-text-primary">Software Engineer</p>
                <p className="text-xs text-accent-light font-mono mt-1">@ Cloudanix</p>
              </div>

              <div className="card rounded-2xl p-5 rotate-1">
                <p className="font-mono text-xs text-text-muted mb-2">Focus Areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Backend", "DevOps", "GenAI", "Systems"].map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md text-accent-lighter"
                      style={{ background: "var(--bg-glass)", border: "1px solid var(--border-primary)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech + stats row */}
            <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
              <div className="card rounded-2xl p-5 -rotate-[0.5deg]">
                <p className="font-mono text-xs text-text-muted mb-2">Tech Stack</p>
                <p className="text-sm text-text-secondary">Go · Python · TypeScript</p>
                <p className="text-xs text-text-muted mt-1.5">AWS · GCP · K8s · Docker</p>
                <p className="text-xs text-text-muted mt-0.5">PostgreSQL · Redis · Kafka</p>
              </div>

              <div className="card rounded-2xl p-5 rotate-[0.5deg] flex flex-col justify-between">
                <div>
                  <p className="font-mono text-xs text-text-muted mb-2">Education</p>
                  <p className="text-sm text-text-primary font-medium">B.Tech AI & ML</p>
                  <p className="text-xs text-accent-3 font-mono mt-1">Pune University</p>
                </div>
                <p className="text-[10px] text-text-muted font-mono mt-2">2020 – 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border-primary)" }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: "var(--accent-light)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
