import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";

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
    return <div className="text-center mt-10">Loading...</div>;
  }

  return isAuthenticated ? <Dashboard /> : <LandingPage />;
}
