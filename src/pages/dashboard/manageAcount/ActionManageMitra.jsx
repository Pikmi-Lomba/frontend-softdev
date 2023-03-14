import { Link } from "react-router-dom";
import "../manageMenu/manageMenu.scss";

import { Tooltip } from "@mui/material";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline, MdInfoOutline } from "react-icons/md";
import { AxiosLocal } from "../../../apis/Api";
import Cookies from "js-cookie";

const ActionManageMitra = ({ params }) => {
  const { id_mitra } = params.row;
  const { token } = Cookies.get("token");

  const handleDelete = () => {
    console.log(id_mitra);
    AxiosLocal.delete(`/mitra/${id_mitra}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Berhasil dihapus ");
      })
      .catch((err) => {
        console.log(err);
        console.log("gagal woy");
      });
  };
  return (
    <div className="Actions flex">
      <Tooltip title="View Event details">
        <Link
          to={`/dashboard-admin/mitra/detail/${params.row.id_mitra}`}
          className="action"
        >
          <MdInfoOutline className="icon" />
        </Link>
      </Tooltip>
      <Tooltip title="Edit Menu Event">
        <Link
          to={`/dashboard-admin/mitra/update/${params.row.id_mitra}`}
          className="action"
        >
          <RiEdit2Line className="icon" />
        </Link>
      </Tooltip>
      {/* <Tooltip title="Delete Menu Event">
        <Link
          to={`/dashboard-admin/mitra/delete/${params.row.id_mitra}`}
          className="action"
        >
          <MdDeleteOutline className="icon" />
        </Link>
      </Tooltip> */}
      <Tooltip title="Delete Menu Event">
        <button onClick={handleDelete} className="action">
          <MdDeleteOutline className="icon" />
        </button>
      </Tooltip>
    </div>
  );
};

export default ActionManageMitra;
