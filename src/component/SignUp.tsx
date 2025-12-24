import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import google from "../../public/google_logo.png";
import user from "../../public/loginimg.png";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
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
    console.log({ name, email, password });
  };

  return (
    <div className="background-container">
      <div className="container signupbox shadow-lg">
        <img src={user} alt="user" />
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>

        <img src={google} alt="google" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default SignUpForm;
