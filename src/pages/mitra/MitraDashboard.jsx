import MitraSidebar from "../../components/sidebar/MitraSidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Total Event & Like Event",
    },
  },
};

const labels = ["Event", "Jumlah Like"];

export const data = {
  labels,
  datasets: [
    {
      label: "Count",
      data: [100, 20],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const MitraDashbaord = () => {
  return (
    <MitraSidebar>
      <div className="px-[120px] py-[84px]">
        <Bar className="" options={options} data={data} />
      </div>
    </MitraSidebar>
  );
};

export default MitraDashbaord;
