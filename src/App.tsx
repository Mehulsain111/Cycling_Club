import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import { FC } from "react";
import { Navbar } from "./Navbar";
import { Herosection } from "./component/Herosection";
import { Login } from "./component/Login";
import { MiddleSection } from "./component/MiddleSection";
import { FooterSection } from "./component/FooterSection";
const App: FC = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Herosection />
        <MiddleSection />
        <FooterSection />
      </BrowserRouter>
    </div>
  );
};

export default App;
