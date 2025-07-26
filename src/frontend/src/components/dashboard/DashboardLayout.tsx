// src/components/layout/DashboardLayout.tsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--color-light)]">
      {/* Sidebar for desktop view */}
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-4 sm:p-6 bg-[var(--color-light)] flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
