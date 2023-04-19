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
import { BreadcrumbTrip } from "../../../components/breadCrumbs/BreadCrumbs";
import Loading from "../../../utils/loading";
import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { Tooltip } from "@mui/material";

const ManageTrip = () => {
  const [dataWisata, setDataWisata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AxiosInstanceUser.get(`/trip`)
      .then((res) => {
        setDataWisata(res.data.menu_wisata);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  const handleDelete = (id_trip) => {
    Swal.fire({
      title: "Apakah Admin Yakin Menghapus Wisata?",
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
        AxiosInstanceUser.delete(`/trip/${id_trip}`);
        setIsLoading(true);
        Swal.fire({
          title: "Berhasil Menghapus Wisata",
          icon: "success",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Gagal Menghapus Wisata",
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
              <h2 className="title">Menu Wisata</h2>
              <h5 className="subTitle">
                <BreadcrumbTrip />
              </h5>
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
              <div className="addData">
                <Link
                  to={`/dashboard-admin/wisata/create`}
                  className="btn radius-2"
                >
                  Tambah Wisata
                </Link>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#45969b" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>No.</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Nama Wisata
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Telepon Wisata
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Daerah Wisata
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Kota Wisata
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataWisata.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">{row.name_trip}</TableCell>
                      <TableCell align="center">{row.telp_trip}</TableCell>
                      <TableCell align="center">{row.location_trip}</TableCell>
                      <TableCell align="center">{row.city_trip}</TableCell>
                      <TableCell className="actionMenuList">
                        <Tooltip title="Edit Wisata">
                          <Link to={`#`}>
                            <RiEdit2Line className="icon editActionList" />
                          </Link>
                        </Tooltip>
                        <Tooltip title="Delete Wisata">
                          <div
                            className="detailMenuList"
                            onClick={() => handleDelete(row.id_trip)}
                          >
                            <MdDelete className="icon deleteActionList" />
                          </div>
                        </Tooltip>
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

export default ManageTrip;
