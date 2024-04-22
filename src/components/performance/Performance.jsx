import './Performance.scss'
import "../../styles/global.scss";
import Navbar from '../navbar/Navbar'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'Chart-js';

ChartJS.register (
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

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


const Performance = () => {
  return (
    <div className="main">
        <Navbar />
        <Line data={data} options={options} />
    </div>
  )
}

export default Performance