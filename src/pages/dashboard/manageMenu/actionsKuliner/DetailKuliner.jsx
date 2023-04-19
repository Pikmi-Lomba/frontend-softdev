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
const DetailKulinerDash = () => {
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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
        console.log(err);
      });
  }, [isLoading, id]);
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataDetail.menu_makanans.map((row, i = 1) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {i++}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={row.gambar_makanan}
                          alt=""
                          className="imageDetail"
                        />
                      </TableCell>
                      <TableCell align="center">{row.nama_makanan}</TableCell>
                      <TableCell align="center">{row.harga_makanan}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      )}
    </AdminSidebar>
  );
};

export default DetailKulinerDash;
