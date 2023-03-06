import Sidebar from "../../../components/sidebar/Sidebar";
import "./manageMenu.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { MenuColumns } from "./ManageMenuColumns";

const ManageEvent = () => {
  const Menurows = [
    { id: 1, lastName: "Duha", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <Sidebar>
        <section className="ManageMenuContainer">
          <div className="topContent">
            <h2 className="title">Menu Event</h2>
            <h5 className="subTitle">{`Dashboard > Menu Event`}</h5>
          </div>
          <div className="centerContent flex">
            <div className="searchComponent radius-2">
              <AiOutlineSearch className="icon" />
              <input type="text" placeholder="Search..." />
            </div>
            <div className="addData">
              <Link
                to={`/dashboard-admin/event/create`}
                className="btn radius-2"
              >
                Tambah Event
              </Link>
            </div>
          </div>
          <div className="FormData">
            <Box sx={{ height: 371, width: "100%" }}>
              <DataGrid
                rows={Menurows}
                columns={MenuColumns}
                getRowId={(row) => row.id}
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
