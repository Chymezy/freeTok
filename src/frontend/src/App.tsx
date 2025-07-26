import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Feed from "./pages/Feed";
import PostCard from "./pages/PostCard";
import CreatePost from "./pages/CreatePost";
import { AuthProvider, useAuth } from "./context/AuthContext";
import DashboardLayout from "./components/dashboard/DashboardLayout";

export default function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

function MainRouter() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="mt-10 text-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="feeds" element={<Feed />} />
        <Route path="post/:postId" element={<PostCard />} />
        <Route path="post" element={<CreatePost />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
