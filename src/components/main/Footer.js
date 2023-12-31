import React from "react";

export default function Footer({ isSticy = true }) {
  return (
    <footer
      className={` ${
        isSticy ? "fixed-bottom " : ""
      }   bg-light text-center text-lg-start `}
    >
      <div className="text-center p-3" style={{ backgroundColor: "gray" }}>
        © 2020 Chefcourt:
        <a className="text-dark" href="https://mdbootstrap.com/">
          Chefcourt
        </a>
      </div>
    </footer>
  );
}
