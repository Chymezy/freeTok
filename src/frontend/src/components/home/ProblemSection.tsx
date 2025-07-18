export default function ProblemSection() {
  const challenges = [
    {
      icon: "🔐",
      title: "Data Ownership",
      description:
        "Your content, your rules. No more algorithms deciding what you see or who sees you.",
      highlight: "Complete data sovereignty",
    },
    {
      icon: "💎",
      title: "Direct Monetization",
      description:
        "Keep 100% of your earnings. No platform fees, no intermediaries taking cuts.",
      highlight: "Zero platform fees",
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description:
        "Access from anywhere, anytime. No regional restrictions or content blocking.",
      highlight: "Borderless connectivity",
    },
  ];

  const scrollToFeed = () => {
    const feedSection = document.getElementById("feed");
    if (feedSection) {
      feedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="explore" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-deep-indigo mb-6 text-4xl font-bold md:text-5xl">
            Why deCentra is Different
          </h2>
          <p className="text-charcoal-black/70 font-body mx-auto max-w-3xl text-xl">
            We&apos;re not just building another social platform. We&apos;re
            creating the foundation for digital freedom.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="from-deep-indigo/5 to-electric-blue/5 border-deep-indigo/10 rounded-2xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{challenge.icon}</div>
              <h3 className="font-heading text-deep-indigo mb-4 text-2xl font-bold">
                {challenge.title}
              </h3>
              <p className="text-charcoal-black/80 font-body mb-4">
                {challenge.description}
              </p>
              <div className="bg-deep-indigo/10 text-deep-indigo font-code rounded-lg px-4 py-2 text-sm font-bold">
                {challenge.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="from-deep-indigo to-electric-blue rounded-2xl bg-gradient-to-r p-8 text-center text-white">
          <h3 className="font-heading mb-4 text-2xl font-bold">
            Built for the Future of Social Media
          </h3>
          <p className="font-body mx-auto mb-6 max-w-2xl text-white/90">
            Join thousands of creators, activists, and communities who are
            already building the future of decentralized social media.
          </p>
          <button onClick={scrollToFeed} className="btn-primary">
            Join the Movement
          </button>
        </div>
      </div>
    </section>
  );
}
