// src/components/layout/DashboardLayout.tsx
import React from "react";
import Sidebar from "./Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-light)]">
      {/* Sidebar for desktop view */}
      <Sidebar />

      <main className="flex min-h-screen flex-1 flex-col bg-[var(--color-light)] p-6 pt-20 lg:ml-64">
        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="mt-4 flex-1">
          <Outlet />
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
