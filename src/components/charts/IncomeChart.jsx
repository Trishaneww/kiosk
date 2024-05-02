import "./Charts.scss";
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

const IncomeChart = () => {
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
        borderColor: "#20C59F",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderWidth: 3,
        tension: 0.5,
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
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default IncomeChart;
