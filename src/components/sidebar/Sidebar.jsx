import "./Sidebar.scss";
import { MdRestaurantMenu } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { HiDocumentText } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";
import { GoStarFill } from "react-icons/go";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-burgerContainer">
            <div className="sidebar-burgerContainer-burgerTrigger"></div>
            <div className="sidebar-burgerContainer-burgerMenu"></div>
          </div>
          <ul>
            <li>
              <AiFillHome />
              <Link to={`/`}>HOME</Link>
            </li>

            <li>
              <MdRestaurantMenu />
              <Link to={`/menu`}>MENU</Link>
            </li>

            <li>
              <HiDocumentText />
              <Link to={`/orders`}>ORDERS</Link>
            </li>

            <li>
              <TfiStatsUp />
              <Link to={`/dashboard`}>Performance</Link>
            </li>

            <li>
              <GoStarFill />
              <Link to={`/dashboard`}>Feedback</Link>
            </li>

            <li>
              <IoIosSettings />
              <Link to={`/settings`}>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
