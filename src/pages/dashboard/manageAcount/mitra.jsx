import Sidebar from "../../../components/sidebar/AdminSidebar";
import Cookies from "js-cookie";
import { AxiosInstanceAdmin } from "../../../apis/Api";
import { useEffect, useState } from "react";
import { BreadcrumbMitra } from "../../../components/breadCrumbs/BreadCrumbs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDelete, MdInfo, MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const MitraPages = () => {
  const tokenAdmin = Cookies.get("tokenAdmin");
  const [isLoading, setIsLoading] = useState(true);

  const [dataMitra, setDataMitra] = useState([]);

  useEffect(() => {
    AxiosInstanceAdmin.get("/get/mitra", {
      headers: {
        Authorization: "Bearer " + tokenAdmin,
      },
    })
      .then((res) => {
        setDataMitra(res.data.data.mitra);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("terjadi kesalahan dalam memproses data");
      });
  }, [isLoading, tokenAdmin]);

  return (
    <>
      <Sidebar>
        <section className="ManageMenuContainer">
          <div className="topContent">
            <h2 className="title">Menu Mitra</h2>
            <h5 className="subTitle">
              <BreadcrumbMitra />
            </h5>
          </div>
          {/* <div className="centerContent flex">
            <div className="addData">
              <Link
                to={`/dashboard-admin/mitra/create`}
                className="btn radius-2"
              >
                Tambah Mitra
              </Link>
            </div>
          </div> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead sx={{ background: "#45969b" }}>
                <TableRow>
                  <TableCell sx={{ color: "white" }}>No.</TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    Nama Mitra
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    Telepon Mitra
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    Email Mitra
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataMitra.map((row, i) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i++}
                    </TableCell>
                    <TableCell align="center">{row.nama_mitra}</TableCell>
                    <TableCell align="center">{row.telepon}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>

                    <TableCell
                      // width={180}
                      className=" actionMenuList"
                    >
                      <Tooltip title="View Detail">
                        <Link
                          className="detailMenuList"
                          to={`detail/${row.id_mitra}`}
                        >
                          <MdInfoOutline className="icon detailActionList" />
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Sidebar>
    </>
  );
};

export default MitraPages;
