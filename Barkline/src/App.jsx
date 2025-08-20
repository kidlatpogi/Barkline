

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./JSX/Login";
import CreateAccount from "./JSX/CreateAccount";

import ForgotPassword from "./JSX/forgotPassword";
import ResetPassword from "./JSX/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and Signup */}
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />

        {/* Forgot Password and Reset Password*/}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
