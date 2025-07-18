export default function FeaturesSection() {
  const features = [
    {
      icon: "🔒",
      title: "Censorship Resistant",
      description:
        "No centralized servers to seize or censor. Your voice remains free, regardless of political pressure.",
      gradient: "from-deep-indigo to-electric-blue",
    },
    {
      icon: "👥",
      title: "DAO Governance",
      description:
        "Community-driven moderation. Users, not governments or corporations, decide what's acceptable.",
      gradient: "from-electric-blue to-vibrant-orange",
    },
    {
      icon: "💰",
      title: "Creator Monetization",
      description:
        "Direct micro-tipping with ICP tokens. No intermediaries taking cuts from your content.",
      gradient: "from-vibrant-orange to-deep-indigo",
    },
    {
      icon: "🕵️",
      title: "Anonymous Whistleblowing",
      description:
        "Secure tools for activists and journalists to share information without fear of retribution.",
      gradient: "from-deep-indigo to-vibrant-orange",
    },
    {
      icon: "🌍",
      title: "Global Accessibility",
      description:
        "Built for the 3.3 billion users in censored regions with seamless, borderless access.",
      gradient: "from-electric-blue to-deep-indigo",
    },
    {
      icon: "⚡",
      title: "100% On-Chain",
      description:
        "All data, posts, and interactions stored on the Internet Computer Protocol for complete transparency.",
      gradient: "from-vibrant-orange to-electric-blue",
    },
  ];

  const platformStats = [
    { metric: "99.9%", label: "Uptime" },
    { metric: "0ms", label: "Censorship" },
    { metric: "100%", label: "Data Ownership" },
    { metric: "0%", label: "Platform Fees" },
  ];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-gray-50 to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-deep-indigo mb-6 text-4xl font-bold md:text-5xl">
            Platform Capabilities
          </h2>
          <p className="text-charcoal-black/70 font-body mx-auto max-w-3xl text-xl">
            Built for the 3.3 billion users in censored regions, with features
            that traditional platforms can&apos;t provide.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${feature.gradient} hover:shadow-glow transform rounded-2xl p-8 text-white transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="mb-6 text-4xl">{feature.icon}</div>
              <h3 className="font-heading mb-4 text-2xl font-bold">
                {feature.title}
              </h3>
              <p className="font-body text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Platform Statistics */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="font-heading text-deep-indigo mb-8 text-center text-3xl font-bold">
            Platform Performance
          </h3>
          <div className="grid gap-8 md:grid-cols-4">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-deep-indigo mb-2 text-4xl font-bold">
                  {stat.metric}
                </div>
                <div className="text-charcoal-black/70 font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advantages */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="from-deep-indigo/5 to-electric-blue/5 rounded-2xl bg-gradient-to-br p-8">
            <h3 className="font-heading text-deep-indigo mb-4 text-2xl font-bold">
              Technical Architecture
            </h3>
            <ul className="text-charcoal-black/80 font-body space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Fully decentralized on Internet Computer Protocol
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Zero single points of failure
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Cryptographic data integrity
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Cross-chain interoperability
              </li>
            </ul>
          </div>

          <div className="from-electric-blue/5 to-vibrant-orange/5 rounded-2xl bg-gradient-to-br p-8">
            <h3 className="font-heading text-deep-indigo mb-4 text-2xl font-bold">
              User Benefits
            </h3>
            <ul className="text-charcoal-black/80 font-body space-y-3">
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Complete data ownership and control
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Direct monetization without fees
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Global accessibility without restrictions
              </li>
              <li className="flex items-start">
                <span className="text-vibrant-orange mr-2">•</span>
                Community-driven governance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
