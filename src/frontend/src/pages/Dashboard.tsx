// src/pages/Dashboard.tsx
// import React from "react";
import DashboardLayout from "../components/dashboard/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="font-heading mb-6 text-3xl">Welcome to FreeTok 🎉</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="card">🔥 Trending Topics</div>
        <div className="card">💰 Monetization Stats</div>
        <div className="card">📊 Creator Analytics</div>
        <div className="card">📝 Latest Posts</div>
        <div className="card">📈 Feed Insights</div>
        <div className="card">🚀 Explore Opportunities</div>
      </div>
    </DashboardLayout>
  );
}
