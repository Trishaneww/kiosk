import "./Dashboard.scss";
import "../../styles/global.scss";
import Navbar from "../navbar/Navbar";
import Linechart from "../linechart/LineChart";
import Doughnut from "../doughnut/DoughnutChart";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="dashboard">
        <div>
          <section className="dashboard__stats">
            <div className="dashboard__stats-container">
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
            </div>
          </section>

          <div className="dashboard__line">
            <p>Sales Chart</p>
            <Linechart />
          </div>
        </div>

        <div className="dashboard__products">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
