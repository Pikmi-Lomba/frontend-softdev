import Sidebar from "../../../components/sidebar/AdminSidebar";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { AxiosLocal } from "../../../apis/Api";
import { useEffect, useState } from "react";
import { MitraColumns } from "./ManageMitraColumns";

const MitraPages = () => {
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    AxiosLocal.get("/mitra", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res.data.data.mitra);
        setData(res.data.data.mitra);
        console.log("halaman mitra");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading, token]);

  return (
    <>
      <Sidebar>
        <section className="ManageMenuContainer">
          <div className="topContent">
            <h2 className="title">Menu Mitra</h2>
            <h5 className="subTitle">{`Dashboard > Menu Mitra`}</h5>
          </div>
          <div className="centerContent flex">
            <div className="addData">
              <Link
                to={`/dashboard-admin/mitra/create`}
                className="btn radius-2"
              >
                Tambah Mitra
              </Link>
            </div>
          </div>

          <div className="FormData">
            <Box sx={{ height: 371, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={MitraColumns}
                getRowId={(row) => row.id_mitra}
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

export default MitraPages;
