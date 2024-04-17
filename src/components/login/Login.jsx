import React from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
  return (
    <div>
        <img src={logo} alt="kiosk logo" />

        <form>
            <input 
                name="email"
                type="text"
                placeholder="email"
                onChange={handleChange}
            />

            <input 
                name="password"
                type="text"
                placeholder="password"
                onChange={handleChange}
            />

            <button>Login</button>
            <p>Dont have an account? <Link to='/signup'>Sign up</Link></p> 
        </form>


    </div>
  )
}

export default Login