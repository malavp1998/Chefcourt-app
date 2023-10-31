import React from "react";
import { useUserAuth } from "../context/LoginHelperFunctions";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../context/DatabaseService";
import Crousel from "./Crousel";
import Header from "./Header";

export default function Home() {
  const { logout, user } = useUserAuth();
  const navigate = useNavigate();

  const logoutUser = async () => {
    await logout()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log("logoutUser", err);
      });
  };

  const getLoggedInUserData = () => {
    console.log("user data");
    getUserData(user.email)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <Crousel />
    </div>
  );
}
