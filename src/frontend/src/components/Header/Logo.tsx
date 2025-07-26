// src/components/Header/Logo.tsx
export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-electric-blue flex h-8 w-8 items-center justify-center rounded-lg">
        <span className="font-code text-sm font-bold text-white">DC</span>
      </div>
      <a href="/" className="text-deep-indigo font-heading text-xl font-bold">
        deCentra
      </a>
    </div>
  );
}
