import React from "react";
import { useUserAuth } from "../context/LoginHelperFunctions";
import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      <button onClick={logoutUser}>logout {user.email}</button>
    </div>
  );
}
