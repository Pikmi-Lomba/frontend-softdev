import ActionManageMitra from "./ActionManageMitra";

export const MitraColumns = [
  { field: "id_mitra", headerName: "ID", width: 90 },
  // {
  //   field: "ktp_image",
  //   headerName: "User",
  //   width: 100,
  //   renderCell: (params) => {
  //     return (
  //       <div className="cellWithImg">
  //         <img className="cellImg" src={params.row.ktp_image} alt="avatar" />
  //       </div>
  //     );
  //   },
  // },
  {
    field: "nama_mitra",
    headerName: "Nama Mitra",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
    editable: true,
  },
  {
    field: "telepon",
    headerName: "Handphone",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "status",
    width: 150,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <ActionManageMitra {...{ params }} />,
  },
];
