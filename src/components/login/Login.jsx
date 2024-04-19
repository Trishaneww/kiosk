import React from "react";
import '../../styles/global.scss'
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(user);

  return (
    <div>
      <div className="login-page">
        <section className="login-page__logo-container">
          <img src={logo} alt="kiosk logo" />
        </section>

        <form className="login-form">
          <h1>FOOD<span>BYTE</span></h1>
          <div className="login-form__fields">
             <input
               name="email"
               type="text"
               placeholder="Email"
               onChange={handleChange}
             />
          </div>

          <div className="login-form__fields">
             <input
               name="permission"
               type="text"
               placeholder="Manager Access"
               onChange={handleChange}
             />
          </div>

          <div className="login-form__fields">
             <input
               name="password"
               type="text"
               placeholder="Password"
               onChange={handleChange}
             />
          </div>

          <button className="login-page__btn">Login</button>
          <p className="login-page__signup-link">Dont have an account? <Link to="/signup">Sign up</Link></p>
         </form>
      </div>
    </div>
  );
};

export default Login;
