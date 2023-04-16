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
import { BreadcrumbKuliner } from "../../../components/breadCrumbs/BreadCrumbs";
import Loading from "../../../utils/loading";

const ManageKuliner = () => {
  const [dataKuliner, setDataKuliner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [data, setData] = useState(dataEvent);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AxiosInstanceUser.get(`/food`)
      .then((res) => {
        console.log("ini data", res.data.list_resto);
        setDataKuliner(res.data.list_resto);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  const handleDelete = (id_resto) => {
    Swal.fire({
      title: "Apakah Admin Yakin Menghapus Kuliner?",
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
        AxiosInstanceUser.delete(`/food/${id_resto}`);
        setIsLoading(true);
        Swal.fire({
          title: "Berhasil Menghapus kuliner",
          icon: "success",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Gagal Menghapus kuliner",
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

  console.log(isLoading);

  console.log(dataKuliner);

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
        {isLoading ? (
          <Loading />
        ) : (
          <section className="ManageMenuContainer">
            <div className="topContent">
              <h2 className="title">Menu kuliner</h2>
              <h5 className="subTitle">
                <BreadcrumbKuliner />
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
                  to={`/dashboard-admin/kuliner/create`}
                  className="btn radius-2"
                >
                  Tambah Kuliner
                </Link>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: "#45969b" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>No.</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Nama Resto
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Telepon Resto
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Daerah Resto
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Kota Resto
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataKuliner.map((row, i) => (
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">{row.name_resto}</TableCell>
                      <TableCell align="center">{row.telp_resto}</TableCell>
                      <TableCell align="center">{row.location_resto}</TableCell>
                      <TableCell align="center">{row.city_resto}</TableCell>
                      <TableCell align="center" className="flex">
                        <Link
                          className="detailMenuList"
                          to={`detail/${row.id_resto}`}
                          style={{ marginRight: "4px" }}
                        >
                          Detail
                        </Link>
                        <button onClick={() => handleDelete(row.id_resto)}>
                          Hapus
                        </button>
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

export default ManageKuliner;
