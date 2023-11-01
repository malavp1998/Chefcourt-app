import React from "react";
import { useUserAuth } from "../context/AuthContext";
import Error from "./Error";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useUserAuth();

  if (user != null) {
    return children;
  }
  return <Navigate to={"/"} />;
}
