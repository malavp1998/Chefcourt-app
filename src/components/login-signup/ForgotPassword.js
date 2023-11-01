import React, { useState } from "react";
import { useUserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../main/Header";
import Footer from "../main/Footer";

export default function ForgotPassword() {
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMessage("");
  };

  const sendResetPasswordLink = async () => {
    try {
      if (email === "") {
        throw new Error("Your email address is required");
      }
      await resetPassword(email);
      setEmail("");
      setMessage("Password reset link sent successfully");
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <section className="vh-90" style={{ backgroundColor: "508bfc" }}>
        <div className="container py-5 h-90">
          <div className="row d-flex justify-content-center align-items-center h-90">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Reset your password</h3>

                  {message && (
                    <div className="alert alert-info" role="alert">
                      {message}
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className={`form-control form-control-lg border ${
                        email ? "active" : ""
                      } `}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="button"
                    onClick={sendResetPasswordLink}
                  >
                    Send password reset email
                  </button>

                  <hr className="my-4" />
                  <div className="text-center">
                    <p>
                      Back to <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
