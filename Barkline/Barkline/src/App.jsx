import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./JSX/LandingPage";
import Login from "./JSX/login";
import CreateAccount from "./JSX/createAccount";
import ForgotPassword from "./JSX/forgotPassword";
import ResetPassword from "./JSX/resetPassword"; // <-- Add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* <-- Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
