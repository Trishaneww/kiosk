import React from "react";
import '../../styles/global.scss'
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
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
      <div className="login-container">
        <div className="curved">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f21d9d"
              fill-opacity="1"
              d="M0,128L48,106.7C96,85,192,43,288,64C384,85,480,171,576,224C672,277,768,299,864,309.3C960,320,1056,320,1152,282.7C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <img className="logo" src={logo} alt="kiosk logo" />
        </div>

        <form className="login-page">

          <div className="login-page__fields">
            <input
              name="store"
              type="text"
              placeholder="store name"
              onChange={handleChange}
            />
          </div>

          <div className="login-page__fields">
            <input
              name="email"
              type="text"
              placeholder="email"
              onChange={handleChange}
            />
          </div>

          <div className="login-page__fields">
            <input
              name="address"
              type="text"
              placeholder="address"
              onChange={handleChange}
            />
          </div>

          <div className="login-page__fields">
            <input
              name="password"
              type="text"
              placeholder="password"
              onChange={handleChange}
            />
          </div>

          <button className="login-btn">Signup</button>
          {/* <p>
            Dont have an account? <Link to="/signup">Sign up</Link>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
