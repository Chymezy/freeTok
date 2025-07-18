import React from "react";

export default function BrandDemo() {
  return (
    <div className="bg-light text-dark flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="font-heading text-deep-indigo mb-2 text-4xl">
        Brand Heading
      </h1>
      <p className="font-body text-charcoal-black mb-4 text-lg">
        This is your brand body text using the{" "}
        <span className="font-bold">Roboto</span> font.
      </p>
      <div className="flex gap-4">
        <button className="btn-primary">Primary Button</button>
        <button className="btn-secondary">Secondary Button</button>
      </div>
      <div className="shadow-glow-blue bg-electric-blue font-code mt-8 rounded-xl p-4 text-white">
        <code>Brand code block using JetBrains Mono</code>
      </div>
      <div className="mt-8 flex gap-4">
        <div
          className="bg-deep-indigo h-12 w-12 rounded-full"
          title="deep-indigo"
        ></div>
        <div
          className="bg-electric-blue h-12 w-12 rounded-full"
          title="electric-blue"
        ></div>
        <div
          className="bg-vibrant-orange h-12 w-12 rounded-full"
          title="vibrant-orange"
        ></div>
        <div
          className="bg-charcoal-black h-12 w-12 rounded-full"
          title="charcoal-black"
        ></div>
      </div>
    </div>
  );
}
