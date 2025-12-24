import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../../public/loginimg.png";
export const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleCross = () => {
    navigate("/"); // Navigate to the home page or close the modal as needed
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 text-center mb-3">
          <img src={user} alt="user" className="w-50 " />
        </div>
        <div className="col-4">
          {" "}
          <div className="col-12 text-end">
            <div className="d-flex justify-content-end icon">
              <i
                onClick={handleCross}
                className="fa-solid fa-circle-xmark"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <form className="d-flex loginbox flex-column align-items-center">
        <div className="input-group mb-3">
          <i className="fa-solid fa-user input-group-text"></i>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="input-group inputpasswordfeild mb-3">
          <i className="fa-solid fa-lock input-group-text"></i>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <span
            className="input-group-text bg-transparent  border-0"
            onClick={handleTogglePassword}
          >
            <i
              className={
                showPassword
                  ? "fa-solid fa-eye-slash text-primary"
                  : "fa-solid fa-eye text-primary"
              }
              style={{ cursor: "pointer" }}
            ></i>
          </span>
        </div>
        <div
          style={{ fontSize: "80%" }}
          className="d-flex loginfooter justify-content-between  text-light mb-3"
        >
          <div className="d-flex   ">
            <input
              type="checkbox"
              className="align-items-center me-1 my-auto"
            />{" "}
            <p className="my-auto">Remember me </p>
          </div>
          <div className="my-auto">
            <Link to="/">
              <p className="my-auto">Forget Password ?</p>
            </Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-50">
          Log In
        </button>
      </form>
    </div>
  );
};
