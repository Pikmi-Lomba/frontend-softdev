import Cookies from "js-cookie";
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
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { AxiosIntanceMitra } from "../../apis/Api";


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

const MitraDashbaord = () => {
  const [countData, setCountData] = useState({
    event: 0,
    like: 0
  });

  useEffect(() => {
    const getEventCount = async () => {
      await AxiosIntanceMitra('/events/counts', {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
        .then((res) => {
          console.log(res.data.data.count);
          setCountData(prevVal => ({...prevVal, event: res.data.data.count}));
        })
        .catch((res) => {
          console.log(res);
        });
    }
    const getLikeCount = async () => {
      await AxiosIntanceMitra('/events/count/like', {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
        .then((res) => {
          console.log(res.data.data.counts);
          setCountData(prevVal => ({...prevVal, like: res.data.data.counts}));
        })
        .catch((res) => {
          console.log(res);
        });
    }

    getEventCount()
    getLikeCount()
  }, [])

  const data = {
    labels,
    datasets: [
      {
        label: "Count",
        data: [countData.event, countData.like],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <MitraSidebar>
      <div className="px-[120px] py-[84px]">
        <Bar className="" options={options} data={data} />
      </div>
    </MitraSidebar>
  );
};

export default MitraDashbaord;
