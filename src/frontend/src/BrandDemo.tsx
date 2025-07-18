import React from "react";

export default function BrandDemo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light text-dark gap-8 p-8">
      <h1 className="text-4xl font-heading text-deep-indigo mb-2">Brand Heading</h1>
      <p className="text-lg font-body text-charcoal-black mb-4">
        This is your brand body text using the <span className="font-bold">Roboto</span> font.
      </p>
      <div className="flex gap-4">
        <button className="btn-primary">Primary Button</button>
        <button className="btn-secondary">Secondary Button</button>
      </div>
      <div className="mt-8 p-4 rounded-xl shadow-glow-blue bg-electric-blue text-white font-code">
        <code>Brand code block using JetBrains Mono</code>
      </div>
      <div className="mt-8 flex gap-4">
        <div className="w-12 h-12 rounded-full bg-deep-indigo" title="deep-indigo"></div>
        <div className="w-12 h-12 rounded-full bg-electric-blue" title="electric-blue"></div>
        <div className="w-12 h-12 rounded-full bg-vibrant-orange" title="vibrant-orange"></div>
        <div className="w-12 h-12 rounded-full bg-charcoal-black" title="charcoal-black"></div>
      </div>
    </div>
  );
} 