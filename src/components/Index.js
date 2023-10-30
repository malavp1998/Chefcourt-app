import React from "react";
import Login from "./login-signup/Login";
import Signup from "./login-signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/Home";
import { UserAuthContextProvider } from "./context/LoginHelperFunctions";
import ProtectedRoute from "./main/ProtectedRoute";
import ForgotPassword from "./login-signup/ForgotPassword";

export default function Index() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password_reset" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}
