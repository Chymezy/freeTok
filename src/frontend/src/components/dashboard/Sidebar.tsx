// import React from "react";
// // src/components/layout/Sidebar.tsx
// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "Feeds", path: "/dashboard/feeds" },
//   { label: "Explore", path: "/dashboard/explore" },
//   { label: "Monetize", path: "/dashboard/monetize" },
//   { label: "Trends", path: "/dashboard/trends" },
//   { label: "Creator", path: "/dashboard/creator" },
//   { label: "Post", path: "/dashboard/post" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="hidden lg:flex flex-col w-64 h-screen bg-[var(--color-primary)] text-white p-6 shadow-lg fixed">
//       <h2 className="text-2xl font-heading mb-10">🔥 FreeTok</h2>
//       <nav className="flex flex-col gap-4">
//         {navItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className="hover:bg-[var(--color-secondary)] rounded-xl px-4 py-2 transition"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }


import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Feeds", path: "/dashboard/feeds" },
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
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-[var(--color-primary)] text-white p-6 shadow-lg fixed top-0 left-0 z-20">
        <h2 className="text-2xl font-heading mb-10">🔥 FreeTok</h2>
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
      <aside className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[var(--color-primary)] text-white shadow-inner flex justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-xs text-center transition ${
                isActive
                  ? "text-[var(--color-secondary)] font-bold"
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
