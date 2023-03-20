import ActionManageEvents from "./ActionManageEvent";

export const MenuColumns = [
  { field: "id_event", headerName: "ID", width: 90 },
  {
    field: "event_organizer",
    headerName: "Event Organizer",
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
  {
    field: "phone",
    headerName: "No Handphone",
    width: 180,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => <ActionManageEvents {...{ params }} />,
  },
];

export const rows = [
  { id: 1, lastName: "Duha", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
