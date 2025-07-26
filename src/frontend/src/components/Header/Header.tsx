// src/components/Header/Header.tsx
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import PrimaryButton from "../Button/PrimaryButton";
import { useAuth } from "../../context/AuthContext";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  action?: string;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, principal, loading, login, logout } = useAuth();

  const publicNavItems: NavItem[] = [
    { name: "Explore", href: "#explore" },
    { name: "Features", href: "#features" },
    { name: "Build", href: "#build" },
    { name: "Learn", href: "#learn" },
    { name: "GitHub", href: "https://github.com", external: true },
  ];

  const authenticatedNavItems: NavItem[] = [
    { name: "Feed", href: "/feed" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "Logout", href: "#logout", action: "logout" },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.action === "logout") logout();
    setIsMobileMenuOpen(false);
  };

  if (loading) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="h-4 w-8 animate-pulse rounded bg-gray-200"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            <NavLinks
              navItems={
                isAuthenticated ? authenticatedNavItems : publicNavItems
              }
              onItemClick={handleNavClick}
            />
            {isAuthenticated ? (
              <>
                <div className="from-deep-indigo to-electric-blue flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                  <span className="font-code text-sm font-bold text-white">
                    {principal?.substring(0, 4) + "..."}
                  </span>
                </div>
                <PrimaryButton onClick={logout}>Logout</PrimaryButton>
              </>
            ) : (
              <PrimaryButton onClick={login}>
                Connect Internet Identity
              </PrimaryButton>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-black hover:text-deep-indigo p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="space-y-1 border-t border-gray-200 bg-white px-2 pt-2 pb-3 md:hidden">
            <NavLinks
              navItems={
                isAuthenticated ? authenticatedNavItems : publicNavItems
              }
              onItemClick={handleNavClick}
              layout="mobile"
            />
            {!isAuthenticated && (
              <PrimaryButton onClick={login} className="mt-4 w-full">
                Connect Internet Identity
              </PrimaryButton>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
