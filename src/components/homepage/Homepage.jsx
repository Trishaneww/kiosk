import React from 'react'
import './Homepage.scss'
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { HiDocumentText } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import logo from '../../assets/logo.png';



const Homepage = () => {
  return (
    <>

      <navbar className="navbar">
        <img className="navbar-logo" src={logo} alt="kiosk logo" />
        <div className="navbar-links">
          <p>Help</p>
          <p>Log out</p>
        </div>
      </navbar>

      <div className="main">
        <section className="sidebar">
          <div className="sidebar-link">
            <AiFillHome />
            <p>Home</p>
          </div>

          <div className="sidebar-link">
            <MdRestaurantMenu />
            <p>Menu</p>
          </div>

          <div className="sidebar-link">
            <TfiStatsUp />
            <p>Performance</p>
          </div>

          <div className="sidebar-link">
            <HiDocumentText />
            <p>Orders</p>
          </div>

          <div className="sidebar-link">
            <IoIosSettings />
            <p>Settings</p>
          </div> 
        </section>
      </div>


        
    </>
  )
}

export default Homepage