import Sidebar from "../../../components/sidebar/AdminSidebar";
import "./manageMenu.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { MenuColumns } from "./ManageMenuColumns";
import { useEffect, useState } from "react";
import { AxiosLocal, getDataEvent } from "../../../apis/Api";

const ManageEvent = () => {
  const [dataEvent, setDataEvent] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // const [data, setData] = useState(dataEvent);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AxiosLocal.get("/events")
      .then((res) => {
        setDataEvent(res.data.data.event);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  console.log(dataEvent);

  // const handleSearch = (e) => {
  //   const getSearch = e.target.value;
  //   setSearch(getSearch);
  //   if (getSearch !== "") {
  //     const searchData = dataEvent.filter((item) =>
  //       item.name_event.toLowerCase().includes(getSearch)
  //     );
  //     setDataEvent(searchData);
  //   } else {
  //     setLoading(true);
  //     setDataEvent(dataEvent);
  //   }
  // };

  return (
    <>
      <Sidebar>
        <section className="ManageMenuContainer">
          <div className="topContent">
            <h2 className="title">Menu Event</h2>
            <h5 className="subTitle">{`Dashboard > Menu Event`}</h5>
          </div>
          <div className="centerContent flex">
            {/* <div className="searchComponent radius-2">
              <AiOutlineSearch className="icon" />
              <input
                type="text"
                value={search}
                placeholder="Search..."
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </div> */}
            {/* <div className="addData">
              <Link
                to={`/dashboard-admin/event/create`}
                className="btn radius-2"
              >
                Tambah Event
              </Link>
            </div> */}
          </div>
          <div className="FormData">
            <Box sx={{ height: 371, width: "100%" }}>
              <DataGrid
                rows={dataEvent}
                columns={MenuColumns}
                getRowId={(row) => row.id_event}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </section>
      </Sidebar>
    </>
  );
};

export default ManageEvent;
