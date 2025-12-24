import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import google from "../../public/google_logo.png";
import { useNavigate } from "react-router-dom";
import user from "../../public/loginimg.png";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
      </div>
    </div>
  );
};

export default SignUpForm;
