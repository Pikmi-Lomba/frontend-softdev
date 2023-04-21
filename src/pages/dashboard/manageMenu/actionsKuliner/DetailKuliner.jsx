import { Link, useNavigate, useParams } from "react-router-dom";
import { AxiosInstanceUser } from "../../../../apis/Api";
import { useEffect, useState } from "react";
import AdminSidebar from "../../../../components/sidebar/AdminSidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDelete, MdEdit } from "react-icons/md";
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";
import UpdateMakanan from "./UpdateMakanan";

const DetailKulinerDash = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [id_makanan, setId_makanan] = useState("");
  const [showModalEditAdmin, setShowModalEditAdmin] = useState(false);
  const backPage = () => {
    navigate(`/dashboard-admin/kuliner`);
  };

  useEffect(() => {
    AxiosInstanceUser.get(`/food/${id}`)
      .then((res) => {
        setDataDetail(res.data?.list_resto_by_pk);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("terjadi kesalahan dalam memproses data");
      });
  }, [isLoading, id]);

  const handleDelete = (id_makanan) => {
    Swal.fire({
      title: "Apakah Admin Yakin Menghapus Menu Makanan?",
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
        AxiosInstanceUser.delete(`/menusfood/${id_makanan}`);
        setIsLoading(true);
        Swal.fire({
          title: "Berhasil Menghapus Menu Makanan",
          icon: "success",
          customClass: {
            title: "titleSwal",
            popup: "popupSwal",
            icon: "iconSwal",
          },
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Gagal Menghapus Menu Makanan",
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
    <AdminSidebar>
      {dataDetail && (
        <div className="detialListMenuDash radius-4 flex">
          <div className="BackMenu" onClick={backPage}>{`<== Kembali`}</div>
          <div className="topDetailInformation flex">
            <div className={`menu verify`}>
              {dataDetail.created_at.slice(0, 10)}
            </div>
            <div className="imageMitra">
              <img
                src={dataDetail.image_resto}
                alt="kosong"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="contentMitra flex">
              <div className="title">{dataDetail.name_resto}</div>
              <div className="menu">{`Alamat: ${dataDetail.location_resto}, ${dataDetail.city_resto}`}</div>
              <div>{`Telp: ${dataDetail.telp_resto}`}</div>
            </div>
          </div>
          {/* Table */}
          <div className="topInfoTableFood flex">
            <h4>View Makanan</h4>
            <div className="addData">
              <Link
                to={`/dashboard-admin/kuliner/detail/${id}/create`}
                className="btn radius-2"
              >
                Tambah Makanan
              </Link>
            </div>
          </div>
          {dataDetail.menu_makanans.length === 0 ? (
            <p className="notFoundMenuMakanan">Menu makananan belum ada</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  sx={{ background: "#45969b", color: "white" }}
                  className="colortable"
                >
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>No.</TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Gambar Makanan
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Nama Makanan
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Harga Makanan
                    </TableCell>
                    <TableCell sx={{ color: "white" }} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataDetail.menu_makanans.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell height={80} component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell height={80} align="center">
                        <img
                          src={row.gambar_makanan}
                          alt=""
                          className="imageDetail"
                        />
                      </TableCell>
                      <TableCell height={80} align="center">
                        {row.nama_makanan}
                      </TableCell>
                      <TableCell height={80} align="center">
                        {row.harga_makanan}
                      </TableCell>
                      <TableCell height={80} className="actionMenuMakanan">
                        <div className="listActionMenuMakanan">
                          <Tooltip title="Edit Menu Makanan">
                            <div
                              className="detailMenuList"
                              onClick={() => {
                                setId_makanan(row.id_makanan);
                                setShowModalEditAdmin(true);
                              }}
                            >
                              <MdEdit className="icon editActionList" />
                            </div>
                          </Tooltip>
                          <Tooltip title="Delete Menu Makanan">
                            <div
                              className="detailMenuList"
                              onClick={() => handleDelete(row.id_makanan)}
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
          )}
          <UpdateMakanan
            isVisible={showModalEditAdmin}
            onClose={() => setShowModalEditAdmin(false)}
            setLoading={setIsLoading}
            id={id_makanan}
          ></UpdateMakanan>
        </div>
      )}
    </AdminSidebar>
  );
};

export default DetailKulinerDash;
