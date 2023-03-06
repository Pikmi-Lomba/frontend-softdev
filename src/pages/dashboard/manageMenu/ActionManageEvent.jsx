import { Link } from "react-router-dom";
import "./manageMenu.scss";
import { Tooltip } from "@mui/material";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline, MdInfoOutline } from "react-icons/md";

const ActionManageEvents = ({ params }) => {
  return (
    <div className="Actions flex">
      <Tooltip title="View Event details">
        <Link
          to={`/dashboard-admin/event/detail/${params.row.id}`}
          className="action"
        >
          <MdInfoOutline className="icon" />
        </Link>
      </Tooltip>
      <Tooltip title="Edit Menu Event">
        <Link to={``} className="action">
          <RiEdit2Line className="icon" />
        </Link>
      </Tooltip>
      <Tooltip title="Delete Menu Event">
        <Link to={``} className="action">
          <MdDeleteOutline className="icon" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default ActionManageEvents;
