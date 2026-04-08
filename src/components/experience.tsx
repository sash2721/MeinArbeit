import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "./motion";

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
    <section id="experience" className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Left — sticky heading */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
            <SlideIn direction="left">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent-light">
                04 / Experience
              </span>
            </SlideIn>
            <SlideIn direction="left" delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 gradient-text">
                Where I&apos;ve Worked
              </h2>
            </SlideIn>
            <SlideIn direction="left" delay={0.2}>
              <p className="text-text-secondary leading-relaxed">
                Building cloud-native security infrastructure at scale.
              </p>
            </SlideIn>
          </div>

          {/* Right — timeline */}
          <div className="lg:w-2/3">
            <StaggerContainer className="space-y-8">
              {experiences.map((exp) => (
                <StaggerItem key={exp.company}>
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                      style={{ background: "linear-gradient(180deg, var(--accent-1), var(--accent-3))" }} />

                    <div className="card rounded-2xl p-6 sm:p-8 ml-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-text-heading">
                            {exp.role}
                          </h3>
                          <p className="text-accent-light font-mono text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <p className="text-sm text-text-muted font-mono">{exp.period}</p>
                          <p className="text-xs text-text-muted mt-0.5">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-sm text-text-secondary flex items-start gap-3">
                            <span className="text-accent-light mt-0.5 shrink-0">▹</span>
                            {h}
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
