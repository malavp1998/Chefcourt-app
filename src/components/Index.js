import React from "react";
import Login from "./login-signup/Login";
import Signup from "./login-signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/Home";
import { UserAuthContextProvider } from "./context/LoginHelperFunctions";

export default function Index() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}
