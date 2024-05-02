import "./Dashboard.scss";
import "../../styles/global.scss";
import Navbar from "../navbar/Navbar";
import Linechart from "../linechart/LineChart";
import Doughnut from "../doughnut/DoughnutChart";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { LuFolders } from "react-icons/lu";
import Incomechart from "../charts/IncomeChart";
import Saleschart from "../charts/SalesChart";
import Expenseschart from "../charts/ExpensesChart";
import { IoFolderOutline } from "react-icons/io5";
import { TbClockShare } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="dashboard">
        <div>
          <section className="dashboard__stats">
            <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-icon">
                <IoFolderOutline size={25} />
              </div>
              <div className="dashboard__stats-container-info">
                <p className="dashboard__stats-container-info-header">
                  Total Income
                </p>
                <p className="dashboard__stats-container-info-number">
                  $92,820
                </p>
              </div>
              <div className="dashboard__stats-container-chart">
                <Incomechart />
              </div>
            </div>

            <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-icon">
                <TbClockShare size={25} />
              </div>
              <div className="dashboard__stats-container-info">
                <p className="dashboard__stats-container-info-header">
                  Total Sales
                </p>
                <p className="dashboard__stats-container-info-number">3,468</p>
              </div>
              <div className="dashboard__stats-container-chart">
                <Saleschart />
              </div>
            </div>

            <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-icon">
                <LuFolders size={25} />
              </div>
              <div className="dashboard__stats-container-info">
                <p className="dashboard__stats-container-info-header">
                  Total Expenses
                </p>
                <p className="dashboard__stats-container-info-number">$7,234</p>
              </div>
              <div className="dashboard__stats-container-chart">
                <Expenseschart />
              </div>
            </div>

            {/* <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-header">
                <p className="dashboard__stats-container-header-title">
                  Total Earnings
                </p>
                <div className="dashboard__stats-container-header-percentage">
                  <FaArrowUp />
                  <p>22%</p>
                </div>
              </div>
              <p className="dashboard__stats-container-value">$ 19,236</p>
            </div>

            <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-header">
                <p className="dashboard__stats-container-header-title">
                  Transactions
                </p>
                <div
                  className="dashboard__stats-container-header-percentage"
                  id="negative"
                >
                  <FaArrowDown />
                  <p>3%</p>
                </div>
              </div>
              <p className="dashboard__stats-container-value">403</p>
            </div>

            <div className="dashboard__stats-container">
              <div className="dashboard__stats-container-header">
                <p className="dashboard__stats-container-header-title">
                  Average
                </p>
                <div className="dashboard__stats-container-header-percentage">
                  <FaArrowUp />
                  <p>31%</p>
                </div>
              </div>
              <p className="dashboard__stats-container-value">$ 4,236</p>
            </div> */}
          </section>

          <div className="dashboard__line">
            <p>Sales Chart</p>
            <Linechart />
          </div>
        </div>

        {/* <div className="dashboard__products">
          <p className="dashboard__products-title">Product Performances</p>
          <section className="dashboard__products-doughnut">
            <Doughnut />
          </section>
          <section className="dashboard__products-display">
            <div className="dashboard__products-display-container">
              <div className="dashboard__products-display-container-image">
                <MdOutlineFastfood size={25} />
              </div>

              <div className="dashboard__products-display-container-stats">
                <p className="dashboard__products-display-container-stats-name">
                  Product A (40%)
                </p>
                <p className="dashboard__products-display-container-stats-number">
                  $9,253
                </p>
              </div>
            </div>

            <div className="dashboard__products-display-container">
              <div
                className="dashboard__products-display-container-image"
                id="productb"
              >
                <MdOutlineFastfood size={25} />
              </div>

              <div className="dashboard__products-display-container-stats">
                <p className="dashboard__products-display-container-stats-name">
                  Product B (25%)
                </p>
                <p className="dashboard__products-display-container-stats-number">
                  $6,920
                </p>
              </div>
            </div>

            <div className="dashboard__products-display-container">
              <div
                className="dashboard__products-display-container-image"
                id="productc"
              >
                <MdOutlineFastfood size={25} />
              </div>

              <div className="dashboard__products-display-container-stats">
                <p className="dashboard__products-display-container-stats-name">
                  Product C (15%)
                </p>
                <p className="dashboard__products-display-container-stats-number">
                  $3,999
                </p>
              </div>
            </div>

            <button className="dashboard__products-display-btn">
              See More
            </button>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
