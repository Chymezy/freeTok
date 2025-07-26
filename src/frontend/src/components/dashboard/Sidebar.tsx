import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Feeds", path: "/dashboard" },
  { label: "Explore", path: "/dashboard/explore" },
  { label: "Monetize", path: "/dashboard/monetize" },
  { label: "Trends", path: "/dashboard/trends" },
  { label: "Creator", path: "/dashboard/creator" },
  { label: "Post", path: "/dashboard/post" },
];

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-16 left-0 z-20 hidden h-[calc(100vh-4rem)] w-64 flex-col bg-[var(--color-primary)] p-6 text-white shadow-lg lg:flex">
        <h2 className="font-heading mb-10 text-2xl">🔥 Menu</h2>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 transition ${
                  isActive
                    ? "bg-[var(--color-secondary)] font-bold"
                    : "hover:bg-[var(--color-secondary)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar Placeholder */}
      <aside className="fixed right-0 bottom-0 left-0 z-30 flex justify-around bg-[var(--color-primary)] py-2 text-white shadow-inner lg:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-center text-xs transition ${
                isActive
                  ? "font-bold text-[var(--color-secondary)]"
                  : "opacity-80"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </aside>
    </>
  );
}
