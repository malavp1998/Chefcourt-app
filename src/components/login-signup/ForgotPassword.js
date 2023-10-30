import React, { useState } from "react";
import { useUserAuth } from "../context/LoginHelperFunctions";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const sendResetPasswordLink = async () => {
    if (email != "") {
      await resetPassword(email)
        .then((result) => {
          console.log(result);
          setEmail("");
          setMessage("Password reset link send successfully");
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.message);
        });
    } else {
      setMessage("Your email address is required");
    }
  };

  return (
    <div>
      {" "}
      <section className="vh-100" style={{ backgroundColor: "508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Reset your password</h3>

                  {message != "" && (
                    <div className="alert alert-info" role="alert">
                      {message}
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg border"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setMessage("");
                      }}
                    />
                    <label className="form-label" for="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={sendResetPasswordLink}
                  >
                    Send password reset email
                  </button>

                  <hr className="my-4" />
                  <div className="text-center">
                    <p>
                      Back to <Link to={"/"}>Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
