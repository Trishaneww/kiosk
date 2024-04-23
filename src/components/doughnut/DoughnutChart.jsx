import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [3, 6, 8, 9],
      backgroundColor: ["red", "blue", "green"],
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
