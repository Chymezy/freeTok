import LandingPage from "./pages/LandingPage";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  );
}
