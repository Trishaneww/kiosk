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

const ExpensesChart = () => {
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
            14000, 6000, 8000, 2000, 5000, 1000, 7000, 8000, 11000, 2000, 3000, 7000, 4000
        ],
        backgroundColor: "transparent",
        borderColor: "red",
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

export default ExpensesChart;
