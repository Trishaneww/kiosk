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
  Filler,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
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
          2000, 2000, 2000, 2500, 3000, 3200, 3800, 4000, 4400, 6000, 9200,
          10200,
        ],
        borderColor: "#20C59F",
        pointBorderColor: "#20C59F",
        pointBorderWidth: 3,
        borderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 50, 0, 400);
          gradient.addColorStop(0, "#20C59F");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
          },
        },
        min: 0,
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          font: {
            size: 17,
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  // const options = {
  //   plugins: {
  //     legend: false,
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //     },
  //     y: {
  //       min: 0,
  //       max: 16000,
  //       ticks: {
  //         stepSize: 2,
  //       },
  //       grid: {
  //         borderDash: [10],
  //       },
  //     },
  //   },
  // };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
