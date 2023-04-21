import Sidebar from "../../../components/sidebar/AdminSidebar";
import "./manageMenu.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AxiosInstanceUser } from "../../../apis/Api";
import Swal from "sweetalert2";
import { BreadcrumbHotel } from "../../../components/breadCrumbs/BreadCrumbs";
import Loading from "../../../utils/loading";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { RiEdit2Line } from "react-icons/ri";

const ManageHotel = () => {
  const [dataHotel, setDataHotel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AxiosInstanceUser.get(`/hotel`)
      .then((res) => {
        setDataHotel(res.data.menu_hotel);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("terjadi kesalahan dalam memproses data");
      });
  }, [isLoading]);

  const handleDelete = (id_hotel) => {
    Swal.fire({
      title: "Apakah Admin Yakin Menghapus Hotel?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        title: "titleSwal",
        popup: "popupSwal",
        actions: "popupSwal",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosInstanceUser.delete(`/hotel/${id_hotel}`);
        setIsLoading(true);
        Swal.fire({
          title: "Berhasil Menghapus Hotel",
          icon: "success",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Gagal Menghapus Hotel",
          icon: "error",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      }
    });
  };

  return (
    <>
      <Sidebar>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="ManageMenuContainer">
            <div className="topContent">
              <h2 className="title">Menu Hotels</h2>
              <h5 className="subTitle">
                <BreadcrumbHotel />
              </h5>
            </div>
            <div className="centerContent flex">
              <div className="addData">
                <Link
                  to={`/dashboard-admin/hotel/create`}
                  className="btn radius-2"
                >
                  Tambah Hotel
                </Link>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#45969b" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>No.</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Nama Hotel
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Telepon Hotel
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Daerah Hotel
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Kota Hotel
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataHotel.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">{row.name_hotel}</TableCell>
                      <TableCell align="center">{row.telp_hotel}</TableCell>
                      <TableCell align="center">{row.location_hotel}</TableCell>
                      <TableCell align="center">{row.city_hotel}</TableCell>
                      <TableCell className="actionMenuList">
                        <div className="listActionListMenu">
                          <Tooltip title="Edit Hotel">
                            <Link to={`update/${row.id_hotel}`}>
                              <RiEdit2Line className="icon editActionList" />
                            </Link>
                          </Tooltip>
                          <Tooltip title="Delete Hotel">
                            <div
                              className="detailMenuList"
                              onClick={() => handleDelete(row.id_hotel)}
                            >
                              <MdDelete className="icon deleteActionList" />
                            </div>
                          </Tooltip>
                        </div>
                      </TableCell>
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

export default ManageHotel;
