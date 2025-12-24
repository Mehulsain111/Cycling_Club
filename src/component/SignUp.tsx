import React, { useState } from "react";
import google from "../../public/google_logo.png";
import { useNavigate } from "react-router-dom";
import user from "../../public/loginimg.png";
import { Link } from "react-router-dom";
const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up", { name, email, password });
  };
  const navigate = useNavigate();
  const handleCross = () => {
    navigate("/.");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="background-container">
      <div
        style={{
          fontFamily: "poppins",
          margin: "auto",
          fontSize: "13px",
        }}
        className="container shadow-lg signupbox"
      >
        <div className="row justify-content-center py-3">
          <div className=" row">
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <img src={user} className="w-50 " alt="" />
              <p className="text-center fw-bold text-light ">Sign Up</p>
            </div>
            <div className="col-4 icon p-0 pt-2 text-end pe-3 justify-content-end ">
              <i onClick={handleCross} className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          <div style={{ width: "96%" }} className="px-3 py-1  ">
            <form onSubmit={handleSubmit} className="  w-100 py-2  rounded">
              <div className="d-flex justify-content-around row ">
                <div className="form-group px-3 pb-2 col-md-6   ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group px-3 col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="d-flex row justify-content-around ">
                <div className="form-group px-3 col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>{" "}
                <div className="form-group px-3 col-md-6">
                  <input
                    type=" password"
                    className="form-control"
                    placeholder=" comfirm Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                style={{ borderRadius: "20px" }}
                type="submit"
                className="btn btn-primary my-2 w-50 d-flex justify-content-center m-auto"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-light m-0">
              Already have an account?{" "}
              <span
                style={{ cursor: "pointer" }}
                className="text-warning "
                onClick={handleLogin}
              >
                Log In
              </span>
            </p>
            <div className="divider-container text-light d-flex justify-content-center fw-bolder text-center">
              <hr className="divider  " />
              <span>or</span>
              <hr className="divider" />
            </div>
            <a
              className="link-offset-2 link-underline  link-underline-opacity-0"
              href="https://www.google.co.in/"
              target="_blank"
            >
              <button
                style={{ borderRadius: "20px" }}
                className="btn border border-light text-light shadow fw-bold btn-block m-auto d-flex align-items-center  justify-content-center"
              >
                <img src={google} alt="Google Icon" className="google-icon" />
                Sign up with Google
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
