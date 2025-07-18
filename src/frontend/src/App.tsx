import Home from "./views/Home";
import { AuthProvider } from "./components/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}
