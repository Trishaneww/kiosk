import "./ProductChart.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const ProductChart = () => {
  const data = {
    labels: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        data: [
          8000, 2000, 9000, 12000, 8000, 11000, 14000, 9000, 10000, 13000,
          14000, 6000, 8000,
        ],
        backgroundColor: "transparent",
        borderColor: "#f21d9d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderWidth: 3,
        tension: 0.5,
        fill: true,
      },
    ],
  };

  const data2 = {
    labels: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        data: [
          8000, 9000, 12000, 8000, 11000, 14000, 9000, 10000, 13000, 14000,
          6000, 8000,
        ],
        backgroundColor: "transparent",
        borderColor: "#f21d9d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderWidth: 3,
        tension: 0.5,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        min: 0,
        max: 16000,
        ticks: {
          stepSize: 2,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="charts">
        <div className="charts-container">
            <div className="charts-container-analytics">
                <p className="charts-container-analytics-header">SalesPrice</p>
                <div className="charts-container-analytics-stats">
                    <p className="charts-container-analytics-stats-number">$14.90</p>
                    <div className="charts-container-analytics-stats-percentage">
                        <p>4.2%</p>
                    </div>
                </div>
            </div>
            <Line data={data2} options={options} />
        </div>

        <div className="charts-container">
            <div className="charts-container-analytics">
                <p className="charts-container-analytics-header">Sales</p>
                <div className="charts-container-analytics-stats">
                    <p className="charts-container-analytics-stats-number">128</p>
                    <div className="charts-container-analytics-stats-percentage">
                        <p>1.7%</p>
                    </div>
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    </div>
  );
};

export default ProductChart;
