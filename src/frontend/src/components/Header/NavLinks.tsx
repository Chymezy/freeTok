// src/components/Header/NavLinks.tsx
// import { useAuth } from "../../context/AuthContext";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  action?: string;
}

interface Props {
  navItems: NavItem[];
  onItemClick?: (item: NavItem) => void;
  layout?: "desktop" | "mobile";
}

export default function NavLinks({
  navItems,
  onItemClick,
  layout = "desktop",
}: Props) {
  const handleClick = (item: NavItem) => {
    if (onItemClick) onItemClick(item);
  };

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => handleClick(item)}
          className={`text-charcoal-black hover:text-deep-indigo font-body ${
            layout === "mobile"
              ? "block px-3 py-2 font-medium"
              : "font-medium transition-colors"
          }`}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
        >
          {item.name}
        </a>
      ))}
    </>
  );
}
