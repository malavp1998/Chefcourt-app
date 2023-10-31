import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/LoginHelperFunctions";
import { Alert } from "bootstrap";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setSelectedFile(file);
  };

  const signup = async (e) => {
    // console.log("signup", email, name, password, image);
    e.preventDefault();
    await signUp(email, password)
      .then((data) => {
        console.log(data);
        setError("Registered Successfully");
        setEmail("");
        setPassword("");
        setImage("");
        setName("");
        selectedFile("");
      })
      .catch((err) => {
        console.log("sigup", err);
        setError(err.message);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Signup</h3>

                  {error != "" && (
                    <div className="alert alert-info" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="name"
                      className={`form-control form-control-lg border ${
                        name ? "active" : ""
                      } `}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                      }}
                    />
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className={`form-control form-control-lg border ${
                        email ? "active" : ""
                      } `}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                    />
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-3 d-flex justify-content-between align-items-center border">
                    <label className="form-label m-2" htmlFor="file">
                      Photo {selectedFile && true}
                    </label>

                    <input type="file" onChange={handleFileChange} />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className={`form-control form-control-lg border ${
                        password ? "active" : ""
                      } `}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      value={password}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                  </div>

                  {/* <div className="form-outline">
                    <input
                      type="file"
                      id="photoUpload"
                      className="form-control"
                      accept="image/*"
                    />
                    {selectedFile && (
                      <div className="mt-2">
                        <strong>Selected File:</strong> {selectedFile.name}
                      </div>
                    )}
                  </div> */}

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={signup}
                  >
                    Signup
                  </button>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p>
                      Already register? <Link to={"/"}>Login</Link>
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
