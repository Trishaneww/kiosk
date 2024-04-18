import React from 'react'
import './Navbar.scss'
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { HiDocumentText } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from '../../assets/logo.png';



const Homepage = () => {
  return (
    <>
      <div className="main">
        <section className="sidebar">
          <img className="sidebar-logo" src={logo} alt="kiosk logo" />
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
            <GoStarFill />
            <p>Feedback</p>
          </div>

          <div className="sidebar-link">
            <HiDocumentText />
            <p>Orders</p>
          </div>

          <div className="sidebar-link">
            <IoIosSettings />
            <p>Settings</p>
          </div> 

          <div className="sidebar-link">
            <RiLogoutBoxRLine  />
            <p>Logout</p>
          </div> 
        </section>
      </div>
    </>
  )
}

export default Homepage