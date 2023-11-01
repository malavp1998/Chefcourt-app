import React from "react";
import Login from "./login-signup/Login";
import Signup from "./login-signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/Home";
import { UserAuthContextProvider } from "./context/LoginHelperFunctions";
import ProtectedRoute from "./main/ProtectedRoute";
import ForgotPassword from "./login-signup/ForgotPassword";
import DatabaseService from "./context/DatabaseService";
import Header from "./main/Header";
import ChefCard from "./main/ChefCard";
import ViewRecipes from "./main/ViewRecipes";

export default function Index() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/card" element={<ChefCard />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password_reset" element={<ForgotPassword />} />
          <Route path="/h" element={<Home />} />
          <Route path="/v" element={<ViewRecipes />} />
          <Route
            path="/home/recipe/:id"
            element={
              <ProtectedRoute>
                <ViewRecipes />
              </ProtectedRoute>
            }
          />
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
