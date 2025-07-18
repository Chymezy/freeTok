export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-deep-indigo text-white p-6 flex flex-col gap-8">
      <div>
        <h2 className="font-heading text-xl mb-2">Trends</h2>
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
      <nav className="flex flex-col gap-2 mt-auto">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Profile</a>
        <a href="#" className="hover:underline">Stats</a>
      </nav>
    </aside>
  );
} 