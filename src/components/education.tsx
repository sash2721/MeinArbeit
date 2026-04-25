"use client";

import { FadeUp, ScaleIn } from "./motion";

export default function Education() {
  return (
    <section id="education" className="relative py-16 lg:py-24 px-6 noise-overlay" style={{ background: "var(--bg-secondary)" }}>
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — heading */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <FadeUp>
              <span className="section-badge">
                05 / Education
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold mt-6 gradient-text">
                Background
              </h2>
            </FadeUp>
          </div>

          {/* Right — card */}
          <div className="lg:w-2/3">
            <FadeUp delay={0.2}>
              <div className="relative group">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 group-hover:w-[4px]"
                  style={{ background: "linear-gradient(180deg, var(--accent-3), var(--accent-2))" }}
                />

                <div className="card rounded-2xl p-6 sm:p-8 ml-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-lg">🎓</span>
                        <h3 className="text-xl font-bold text-text-heading">
                          B.Tech in AI &amp; ML
                        </h3>
                      </div>
                      <p className="text-accent-3 font-mono text-sm mt-1 ml-8">
                        Pune University
                      </p>
                    </div>
                    <span
                      className="text-xs font-mono px-3 py-1.5 rounded-lg shrink-0"
                      style={{
                        background: "var(--bg-glass)",
                        border: "1px solid var(--border-primary)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      2020 – 2024
                    </span>
                  </div>

                  {/* Coursework highlights */}
                  <div className="mt-5 pt-5 flex flex-wrap gap-2" style={{ borderTop: "1px solid var(--border-primary)" }}>
                    {["Machine Learning", "Distributed Systems", "Data Structures", "Algorithms", "Cloud Computing"].map((course) => (
                      <ScaleIn key={course} delay={0.3}>
                        <span
                          className="skill-pill text-[11px] font-mono px-2.5 py-1 rounded-lg text-text-muted cursor-default"
                          style={{
                            background: "var(--bg-glass)",
                            border: "1px solid var(--border-primary)",
                          }}
                        >
                          {course}
                        </span>
                      </ScaleIn>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
