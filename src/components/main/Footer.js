import React from "react";

export default function Footer() {
  return (
    <footer className=" fixed-bottom bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ backgroundColor: "gray" }}>
        © 2020 Chefcourt:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
