import React from 'react'
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
        data: [8, 9, 12, 6, 12, 14, 18, 18, 13, 16, 3, 8],
        backgroundColor: "transparent",
        borderColor: "#f7b4ff",
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
        max: 20,
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
  )
}

export default LineChart