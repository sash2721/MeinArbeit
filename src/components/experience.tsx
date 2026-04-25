"use client";

import { SlideIn, StaggerContainer, StaggerItem } from "./motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Cloudanix",
    location: "Remote (Sunnyvale, CA, USA)",
    period: "Aug 2024 – Present",
    highlights: [
      "Built multi-cloud JIT Database Access system across AWS, GCP, and Azure",
      "Developed cross-cloud query logging system storing logs in S3, GCS, and Azure Blob",
      "Implemented JIT VM access across EC2, GCE, Azure VMs, and on-prem environments",
      "Architected centralized Wazuh-based event processing system on Kubernetes (GKE)",
      "Built AutoInstall system using AWS SSM and queue-based processing for large-scale agent deployment",
      "Worked extensively on distributed systems, cloud-native infrastructure, and scalable backend design",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 lg:py-32 px-6 noise-overlay">
      {/* Subtle background orb */}
      <div
        className="absolute top-1/3 right-[15%] w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.04] pointer-events-none"
        style={{ background: "var(--accent-3)" }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <SlideIn direction="left">
              <span className="section-badge">
                04 / Experience
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-6 gradient-text">
                Where I&apos;ve Worked
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                Building cloud-native security infrastructure at scale.
              </p>
            </SlideIn>

            {/* Duration badge */}
            <SlideIn direction="left" delay={0.3}>
              <div className="mt-8 inline-flex items-center gap-2 glass rounded-xl px-4 py-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.5)" }}
                />
                <span className="text-xs font-mono text-text-secondary">Currently employed</span>
              </div>
            </SlideIn>
          </div>

          {/* Right — timeline */}
          <div className="lg:w-2/3">
            <StaggerContainer className="space-y-8">
              {experiences.map((exp) => (
                <StaggerItem key={exp.company}>
                  <div className="relative group">
                    {/* Animated gradient bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-500 group-hover:w-[4px]"
                      style={{ background: "linear-gradient(180deg, var(--accent-1), var(--accent-3))" }}
                    />

                    <div className="card rounded-2xl p-6 sm:p-8 ml-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-text-heading">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-accent-light font-mono text-sm">
                              {exp.company}
                            </p>
                            <span className="text-text-muted">·</span>
                            <p className="text-xs text-text-muted">{exp.location}</p>
                          </div>
                        </div>
                        <div className="shrink-0">
                          <span
                            className="text-xs font-mono px-3 py-1.5 rounded-lg"
                            style={{
                              background: "var(--bg-glass)",
                              border: "1px solid var(--border-primary)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((h, idx) => (
                          <li key={h} className="text-sm text-text-secondary flex items-start gap-3 group/item">
                            <span
                              className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full group-hover/item:scale-150 transition-all"
                              style={{
                                background: idx % 2 === 0 ? "var(--accent-light)" : "var(--accent-3)",
                              }}
                            />
                            <span className="group-hover/item:text-text-primary transition-colors">
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
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
