import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
import Header from "../main/Header";
import Footer from "../main/Footer";
import { addNewUser } from "../context/DatabaseService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, googleSignIn, githubSignIn } = useUserAuth();

  const loginWithGoogle = async () => {
    await googleSignIn()
      .then((result) => {
        addNewUser(
          result.user.uid,
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          new Date()
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const loginWithGithub = async () => {
    await githubSignIn()
      .then((result) => {
        console.log(" by github", result);
        addNewUser(
          result.user.uid,
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          new Date()
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const signin = async (e) => {
    e.preventDefault();
    console.log(password + " dfd" + email);
    if (email != "" && password != "") {
      await login(email, password)
        .then((data) => {
          console.log("signin", data);
          setError("logged-in Successfully");
          setEmail("");
          setPassword("");
          navigate("/");
        })
        .catch((err) => {
          console.log("signin", err);
          setError(err.message);
        });
    } else {
      setError("Please fill all the details");
    }
  };

  return (
    <div className="vh-90">
      <Header />
      <section className="h-100" style={{ backgroundColor: "508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  {error != "" && (
                    <div className="alert alert-info" role="alert">
                      {error}
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                    />
                    <label className="form-label" for="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className={`form-control form-control-lg border ${
                        password ? "active" : ""
                      } `}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                    />
                    <label className="form-label" for="typePasswordX-2">
                      Password
                    </label>
                  </div>

                  <div className="form-outline mb-4 text-start">
                    <label className="form-label" for="typePasswordX-2">
                      <Link to={"/password_reset"}>Forgot password ?</Link>
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={signin}
                  >
                    Login
                  </button>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p>
                      Not a member? <Link to={"/signup"}>Register</Link>
                    </p>
                    <p>or</p>
                  </div>

                  <button
                    className="btn btn-lg btn-block btn-primary"
                    style={{ backgroundColor: "#dd4b39" }}
                    type="submit"
                    onClick={loginWithGoogle}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with google
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary mb-2"
                    style={{ backgroundColor: "#3b5998" }}
                    type="submit"
                    onClick={loginWithGithub}
                  >
                    <i className="fab fa-github me-2"></i>Sign in with github
                  </button>
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
