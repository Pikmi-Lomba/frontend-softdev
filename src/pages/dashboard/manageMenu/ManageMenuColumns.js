import ActionManageEvents from "./ActionManageEvent";

export const MenuColumns = [
  { field: "id_event", headerName: "ID", width: 90 },
  {
    field: "event_organizer",
    headerName: "Nama Mitra",
    width: 220,
    editable: true,
  },
  {
    field: "nama_event",
    headerName: "Nama Event",
    width: 250,
    editable: true,
  },
  {
    field: "kategori",
    headerName: "Kategori",
    width: 150,
    editable: true,
  },
  // {
  //   field: "phone",
  //   headerName: "No Handphone",
  //   width: 180,
  // },
  // {
  //   field: "actions",
  //   headerName: "Actions",
  //   type: "actions",
  //   width: 150,
  //   renderCell: (params) => <ActionManageEvents {...{ params }} />,
  // },
];
