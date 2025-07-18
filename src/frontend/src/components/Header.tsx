import { useState } from "react";
// import { Link } from 'react-router-dom'; // Uncomment if using react-router-dom
import { useAuth } from "./AuthContext";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  action?: string;
}

export default function Header() {
  const { isAuthenticated, principal, loading, login, logout } = useAuth
    ? useAuth()
    : {
        isAuthenticated: false,
        principal: "",
        loading: false,
        login: () => {},
        logout: () => {},
      };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const publicNavItems: NavItem[] = [
    { name: "Explore", href: "#explore" },
    { name: "Features", href: "#features" },
    { name: "Build", href: "#build" },
    { name: "Learn", href: "#learn" },
    { name: "Feed", href: "/feed" },
    { name: "Profile", href: "/profile" },
    { name: "GitHub", href: "https://github.com", external: true },
  ];

  const authenticatedNavItems: NavItem[] = [
    { name: "Feed", href: "/feed" },
    { name: "Profile", href: "/profile" },
    { name: "Logout", href: "#logout", action: "logout" },
  ];

  const handleLogout = () => {
    logout();
  };

  const handleNavClick = (item: NavItem) => {
    if (item.action === "logout") {
      handleLogout();
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (loading) {
    return (
      <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-electric-blue flex h-8 w-8 animate-pulse items-center justify-center rounded-lg">
                <span className="font-code text-sm font-bold text-white">
                  DC
                </span>
              </div>
              <span className="text-deep-indigo font-heading text-xl font-bold">
                deCentra
              </span>
            </div>
            <div className="h-4 w-8 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-electric-blue flex h-8 w-8 items-center justify-center rounded-lg">
              <span className="font-code text-sm font-bold text-white">DC</span>
            </div>
            <a
              href="/"
              className="text-deep-indigo font-heading text-xl font-bold"
            >
              deCentra
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {isAuthenticated ? (
              <>
                {authenticatedNavItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item)}
                      className="text-charcoal-black hover:text-deep-indigo font-body font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item)}
                      className="text-charcoal-black hover:text-deep-indigo font-body font-medium transition-colors"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </a>
                  ),
                )}
                {/* User Avatar */}
                <div className="flex items-center space-x-2">
                  <div className="from-deep-indigo to-electric-blue flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br">
                    <span className="font-code text-sm font-bold text-white">
                      {principal ? principal.substring(0, 4) + "..." : "U"}
                    </span>
                  </div>
                </div>
                <button className="btn-primary ml-4" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                {publicNavItems.map((item) =>
                  item.href.startsWith("/") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-charcoal-black hover:text-deep-indigo font-body font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        if (!item.external) {
                          scrollToSection(item.href);
                        }
                      }}
                      className="text-charcoal-black hover:text-deep-indigo font-body font-medium transition-colors"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </a>
                  ),
                )}
                <button className="btn-primary" onClick={login}>
                  Connect Internet Identity
                </button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-black hover:text-deep-indigo p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 bg-white px-2 pt-2 pb-3">
              {isAuthenticated
                ? authenticatedNavItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item)}
                      className="text-charcoal-black hover:text-deep-indigo font-body block px-3 py-2 font-medium"
                    >
                      {item.name}
                    </a>
                  ))
                : publicNavItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-charcoal-black hover:text-deep-indigo font-body block px-3 py-2 font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
              {!isAuthenticated && (
                <button onClick={login} className="btn-primary mt-4 w-full">
                  Connect Internet Identity
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
