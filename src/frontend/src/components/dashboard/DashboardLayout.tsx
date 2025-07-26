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

      <main className="flex min-h-screen flex-1 flex-col bg-[var(--color-light)] pt-20 p-6 lg:ml-64">
        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="flex-1 mt-4">
          <Outlet />
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
