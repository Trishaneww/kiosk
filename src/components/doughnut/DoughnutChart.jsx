import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [6, 8, 9],
      backgroundColor: [
        "rgb(102, 0, 255",
        "rgb(255, 0, 115)",
        "rgb(230, 0, 255)",
      ],
      borderColor: ["rgba(0, 0, 0, 0)"],
      cutout: "90%",
      borderRadius: 20,
    },
  ],
};

const options = {};

const DoughnutChart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
