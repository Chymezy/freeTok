export default function RoadmapSection() {
  const phases = [
    {
      phase: "PHASE 1",
      title: "Core Platform",
      timeline: "Q1 2025",
      status: "In Development",
      features: [
        "Profiles & posts fully on-chain",
        "Internet Identity authentication",
        "Basic feed & like functionality",
        "Deployed to ICP mainnet",
      ],
      gradient: "from-deep-indigo to-electric-blue",
    },
    {
      phase: "PHASE 2",
      title: "Monetization & Governance",
      timeline: "Q2 2025",
      status: "Planned",
      features: [
        "Micro-tipping system",
        "Creator marketplace",
        "DAO moderation",
        "Whistleblower tools",
      ],
      gradient: "from-electric-blue to-vibrant-orange",
    },
    {
      phase: "PHASE 3",
      title: "Global Scale",
      timeline: "Q3-Q4 2025",
      status: "Planned",
      features: [
        "Regional hubs",
        "Mobile apps",
        "Enterprise tools",
        "NGO partnerships",
      ],
      gradient: "from-vibrant-orange to-deep-indigo",
    },
  ];

  const marketData = [
    { metric: "3.3B", label: "Users in censored regions", icon: "🌏" },
    { metric: "$104B", label: "Global creator economy", icon: "🎥" },
    { metric: "10K+", label: "NGOs & watchdogs", icon: "📰" },
    { metric: "$35B", label: "Decentralized social TAM (2030)", icon: "💰" },
  ];

  return (
    <section id="build" className="bg-charcoal-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading mb-6 text-4xl font-bold text-white md:text-5xl">
            Platform Evolution
          </h2>
          <p className="font-body mx-auto max-w-3xl text-xl text-white/70">
            Our roadmap to building the world&apos;s most powerful decentralized
            social platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div
                className={`bg-gradient-to-br ${phase.gradient} rounded-2xl p-8`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-code text-sm font-bold text-white">
                    {phase.phase}
                  </span>
                  <span className="font-body text-sm text-white/80">
                    {phase.timeline}
                  </span>
                </div>

                <h3 className="font-heading mb-4 text-2xl font-bold text-white">
                  {phase.title}
                </h3>

                <div className="mb-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      phase.status === "In Development"
                        ? "bg-green-500 text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <ul className="font-body space-y-2 text-white/90">
                  {phase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-vibrant-orange mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Market Opportunity */}
        <div className="mt-20 rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
          <h3 className="font-heading mb-8 text-center text-3xl font-bold text-white">
            Market Opportunity
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {marketData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl">{data.icon}</div>
                <div className="font-heading text-2xl font-bold text-white">
                  {data.metric}
                </div>
                <div className="font-body text-white/70">{data.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="from-deep-indigo/20 to-electric-blue/20 mt-16 rounded-2xl bg-gradient-to-r p-8">
          <h3 className="font-heading mb-6 text-center text-2xl font-bold text-white">
            Strategic Focus Areas
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-3xl">👨‍💻</div>
              <h4 className="font-heading mb-2 text-lg font-bold text-white">
                Developer Ecosystem
              </h4>
              <p className="font-body text-sm text-white/80">
                Open APIs and SDKs for third-party integrations
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-3xl">🎥</div>
              <h4 className="font-heading mb-2 text-lg font-bold text-white">
                Creator Economy
              </h4>
              <p className="font-body text-sm text-white/80">
                Direct monetization tools for content creators
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-3xl">🏢</div>
              <h4 className="font-heading mb-2 text-lg font-bold text-white">
                Enterprise Solutions
              </h4>
              <p className="font-body text-sm text-white/80">
                Custom deployments for organizations and NGOs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
