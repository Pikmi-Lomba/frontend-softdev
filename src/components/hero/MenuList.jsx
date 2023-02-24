import {
  MdFastfood,
  MdTerrain,
  MdHotel,
  MdFestival,
  MdFlight,
  MdLocalGasStation,
  MdSchool,
} from "react-icons/md";

export const MenuList = [
  {
    path: "/kuliner-page",
    logo: <MdFastfood className="icon" />,
    name_menu: "Kuliner",
  },
  {
    path: "/wisata-page",
    logo: <MdTerrain className="icon" />,
    name_menu: "Wisata",
  },
  {
    path: "/hotel-page",
    logo: <MdHotel className="icon" />,
    name_menu: "Hotel",
  },
  {
    path: "/penerbangan-page",
    logo: <MdFlight className="icon" />,
    name_menu: "penerbangan",
  },
  {
    path: "/event-page",
    logo: <MdFestival className="icon" />,
    name_menu: "Event",
  },
  {
    path: "/school-page",
    logo: <MdSchool className="icon" />,
    name_menu: "Sekolah",
  },
  {
    path: "/spbu-page",
    logo: <MdLocalGasStation className="icon" />,
    name_menu: "SPBU",
  },
];
