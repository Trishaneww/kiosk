import React from "react";
import "./Navbar.scss";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { HiDocumentText } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Homepage = () => {
  return (
    <>
      <div className="main">
        <section className="sidebar">
          <p className="sidebar-logo">FOOD<span>BYTE</span></p>
          <div className="sidebar-link">
            <AiFillHome size={20} />
            <p>Home</p>
          </div>

          <div className="sidebar-link">
            <MdRestaurantMenu size={20} />
            <p>Products</p>
          </div>

          <div className="sidebar-link">
            <TfiStatsUp size={20} />
            <p>Performance</p>
          </div>

          <div className="sidebar-link">
            <GoStarFill size={20} />
            <p>Feedback</p>
          </div>

          <div className="sidebar-link">
            <HiDocumentText size={20} />
            <p>Orders</p>
          </div>

          <div className="sidebar-link">
            <IoIosSettings size={20} />
            <p>Settings</p>
          </div>

          <div className="sidebar-link">
            <RiLogoutBoxRLine size={20} />
            <p>Logout</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
