import ActionManageEvents from "./ActionManageEvent";

export const MenuColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "Event Organizer",
    width: 180,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Nama Event",
    width: 200,
    editable: true,
  },
  {
    field: "age",
    headerName: "Kategori",
    width: 150,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "No Handphone",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
