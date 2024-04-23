import React from "react";
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

const LineChart = () => {
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
          8000, 9000, 12000, 8000, 11000, 14000, 9000, 10000, 13000, 16000,
          6000, 8000,
        ],
        backgroundColor: "transparent",
        borderColor: "#f21d9d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderWidth: 6,
        tension: 0.5,
        fill: true,
      },
      {
        data: [
          5000, 8000, 8000, 11000, 9000, 6700, 7500, 2000, 12000, 5000, 6200,
          8900,
        ],
        backgroundColor: "transparent",
        borderColor: "#1dc0f2",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        borderWidth: 6,
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
        grid: {
          display: false,
        },
      },
      y: {
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
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
