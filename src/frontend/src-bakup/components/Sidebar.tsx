export default function Sidebar() {
  return (
    <aside className="bg-deep-indigo flex min-h-screen w-72 flex-col gap-8 p-6 text-white">
      <div>
        <h2 className="font-heading mb-2 text-xl">Trends</h2>
        <ul className="space-y-1">
          <li>#Web3</li>
          <li>#ICP</li>
          <li>#DeFi</li>
          <li>#SocialFi</li>
        </ul>
      </div>
      <div>
        <button className="btn-primary w-full">Send Token</button>
      </div>
      <nav className="mt-auto flex flex-col gap-2">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
        <a href="#" className="hover:underline">
          Stats
        </a>
      </nav>
    </aside>
  );
}
