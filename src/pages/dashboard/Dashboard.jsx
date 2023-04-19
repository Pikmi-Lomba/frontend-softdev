import CardDashboardAdmin from "../../components/card/CardDashboardAdmin";
import Sidebar from "../../components/sidebar/AdminSidebar";
import "./dashboard.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AxiosInstanceAdmin } from "../../apis/Api";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const DashboardAdmin = () => {
  const tokenAdmin = Cookies.get("tokenAdmin");
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    AxiosInstanceAdmin.get("/get/mitra", {
      headers: {
        Authorization: "Bearer " + tokenAdmin,
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
  }, [isLoading, tokenAdmin]);
  return (
    <Sidebar>
      <section className="DashboardAdmin">
        <h1>Overview</h1>
        <CardDashboardAdmin />
        <p className="titleTable">View Mitra</p>
        {data && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{ background: "#45969b", color: "white" }}
                className="colortable"
              >
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="center">Nama Mitra</TableCell>
                  <TableCell align="center">Email Mitra</TableCell>
                  <TableCell align="center">Telepon Mitra</TableCell>
                  <TableCell align="center">Verify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i++}
                    </TableCell>
                    <TableCell align="center">{row.nama_mitra}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.telepon}</TableCell>
                    <TableCell align="center">
                      <span className={`verify ${row.verify}`}>
                        {" "}
                        {row.verify}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </section>
    </Sidebar>
  );
};

export default DashboardAdmin;
