

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./JSX/login";
import Signup from "./JSX/signup";

import ForgotPassword from "./JSX/forgotPassword";
import ResetPassword from "./JSX/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login and Signup */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Forgot Password and Reset Password*/}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
