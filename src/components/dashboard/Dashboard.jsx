import "./Dashboard.scss";
import "../../styles/global.scss";
import Navbar from "../navbar/Navbar";
import Linechart from '../linechart/LineChart';
import Doughnut from '../doughnut/DoughnutChart';

const Performance = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="dashboard">
        <navbar className="dashboard-navbar">
          <p>Sales Summary</p>
          <p>Payment Method</p>
          <p>Item Sales</p>
          <p>Category Sales</p>
          <p>Taxes</p>
        </navbar>

        <div className="dashboard__line">
          <Linechart />
        </div>
        <div className="dashboard__products">
          <p>Product Performances</p>
          <div className="dashboard__products-doughnut">
            <Doughnut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
