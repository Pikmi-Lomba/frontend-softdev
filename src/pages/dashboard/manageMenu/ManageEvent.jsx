import Sidebar from "../../../components/sidebar/AdminSidebar";
import "./manageMenu.scss";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { MenuColumns } from "./ManageMenuColumns";
import { useEffect, useState } from "react";
import { AxiosLocal, getDataEvent } from "../../../apis/Api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../../../utils/loading";

const ManageEvent = () => {
  const [dataEvent, setDataEvent] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // const [data, setData] = useState(dataEvent);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AxiosLocal.get("/events")
      .then((res) => {
        console.log(res.data.data.event);
        setDataEvent(res.data.data.event);
        setisLoading(false);
      })
      .catch((err) => {
        alert("terjadi kesalahan dalam memproses data");
      });
  }, [isLoading]);
  return (
    <>
      <Sidebar>
        {isLoading ? (
          <Loading />
        ) : (
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

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#45969b" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>No.</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Nama Event
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Telepon Event
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Alamat Event
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Kota Event
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Kategori
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Tanggal Mulai
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Tanggal Akhir
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataEvent.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">{row.nama_event}</TableCell>
                      <TableCell align="center">
                        {row.telepon_personal}
                      </TableCell>
                      <TableCell align="center">{row.alamat}</TableCell>
                      <TableCell align="center">{row.lokasi_kota}</TableCell>
                      <TableCell align="center">{row.kategori}</TableCell>
                      <TableCell align="center">{row.tanggal_mulai}</TableCell>
                      <TableCell align="center">{row.tanggal_akhir}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        )}
      </Sidebar>
    </>
  );
};

export default ManageEvent;
