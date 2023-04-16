import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import DashboardAdmin from "../pages/dashboard/Dashboard";
import LandingPage from "../pages/LandingPage";

import {
  DetailFood,
  DetailEvent,
  DetailHotel,
  DetailTrip,
  FlightPage,
  FoodPage,
  TripPage,
  HotelPage,
  EventPage,
  LoginPage,
  SignupPage,
} from "../pages";
import DetailMenuFood from "../pages/menuPages/food/DetailMenu";
import DetailImageFood from "../pages/menuPages/food/DetailImage";
import MitraPages from "../pages/dashboard/manageAcount/mitra";
import ManageEvent from "../pages/dashboard/manageMenu/ManageEvent";
import DetailEventDash from "../pages/dashboard/manageMenu/actionsEvent/DetailEvent";
import CreateManageEvent from "../pages/dashboard/manageMenu/actionsEvent/CreateEvent";
import PrivateRoute from "./PrivateRouting";
import CreateMitra from "../pages/dashboard/manageAcount/actionsMitra/CreateMitra";
import UpdateMitraDash from "../pages/dashboard/manageAcount/actionsMitra/UpdateMitra";
import DetailMitraDash from "../pages/dashboard/manageAcount/actionsMitra/DetailMitra";
import NotFound from "../pages/notFound/NotFound";
import MitraDashbaord from "../pages/mitra/MitraDashboard";
// import SettingsMitra from "../pages/mitra/settings/Settings";
import MitraEvent from "../pages/mitra/menus/MitraEvent";
import CreateMenuEventMitra from "../components/mitra/action/menuEvent/CreateMenuEventMitra";
import PasswordMitra from "../components/mitra/settings/Password";
import VerificationMitra from "../components/mitra/settings/Verification";
import ProfileMitra from "../components/mitra/settings/MyProfile";
import ProtectedRoute from "./ProtectedRouting";
import LoginAdminPage from "../pages/login/LoginAdmin";
import PrivateRouteAdmin from "./PrivateRoutingAdmin";
import SidebarAdminNotFound from "../pages/notFound/SidebarAdminNotFound";
import ManageKuliner from "../pages/dashboard/manageMenu/ManageKuliner";
import CreateKuliner from "../pages/dashboard/manageMenu/actionsKuliner/CreateKuliner";
import ManageHotel from "../pages/dashboard/manageMenu/ManageHotel";
import ManageTrip from "../pages/dashboard/manageMenu/ManageTrip";
import CreateHotel from "../pages/dashboard/manageMenu/actionsHotel/CreateHotel";
import CreateTrip from "../pages/dashboard/manageMenu/actionsTrip/CreateTrip";
// import DeleteMitraDash from "../pages/dashboard/manageAcount/actionsMitra/DeleteMitra";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          {/* Food Menu */}
          <Route path="/kuliner-page">
            <Route index element={<FoodPage />} />
            <Route path="detail/:id" element={<DetailFood />} />
            <Route path="detail/:id/food_menu" element={<DetailMenuFood />} />
            <Route path="detail/:id/image" element={<DetailImageFood />} />
          </Route>
          {/* Hotel Menu */}
          <Route path="/hotel-page">
            <Route index element={<HotelPage />} />
            <Route path="detail/:id" element={<DetailHotel />} />
          </Route>
          {/* Wisata Menu */}
          <Route path="/wisata-page">
            <Route index element={<TripPage />} />
            <Route path="detail/:id" element={<DetailTrip />} />
          </Route>
          {/* Event Menu */}
          <Route path="/event-page">
            <Route index element={<EventPage />} />
            <Route path="detail/:id" element={<DetailEvent />} />
          </Route>
          {/* Flight Menu */}
          <Route path="/penerbangan-page" element={<FlightPage />} />

          {/* Login & Signup */}
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login/admin" element={<LoginAdminPage />} />
          </Route>

          {/* Mitra Dashboard */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard-mitra">
              <Route index element={<MitraDashbaord />} />
            </Route>
            <Route path="/dashboard-mitra/settings">
              <Route index element={<ProfileMitra />} />
              <Route path="password" element={<PasswordMitra />} />
              <Route path="verification" element={<VerificationMitra />} />
            </Route>

            <Route path="/dashboard-mitra/events">
              <Route index element={<MitraEvent />} />
              <Route path="create" element={<CreateMenuEventMitra />} />
            </Route>
          </Route>

          {/* End Mitra Dashbaord */}

          {/* START PRIVATE DASHBOARD ADMIN */}
          <Route element={<PrivateRouteAdmin />}>
            <Route path="/dashboard-admin">
              <Route index element={<DashboardAdmin />} />
            </Route>
            <Route
              path="/dashboard-admin/*"
              element={<SidebarAdminNotFound />}
            />
            {/* Manage Account Mitra */}
            <Route path="/dashboard-admin/mitra">
              <Route index element={<MitraPages />} />
              <Route path="create" element={<CreateMitra />} />
              <Route path="update/:id" element={<UpdateMitraDash />} />
              {/* <Route path="delete/:id" element={<DeleteMitraDash />} /> */}
              <Route path="detail/:id" element={<DetailMitraDash />} />
            </Route>
            {/* Manage Menu Event */}
            <Route path="/dashboard-admin/event">
              <Route index element={<ManageEvent />} />
              <Route path="detail/:id" element={<DetailEventDash />} />
              <Route path="create" element={<CreateManageEvent />} />
            </Route>
            {/* Manage Menu Kuliner  */}
            <Route path="/dashboard-admin/kuliner">
              <Route index element={<ManageKuliner />} />
              {/* <Route path="detail/:id" element={<DetailEventDash />} /> */}
              <Route path="create" element={<CreateKuliner />} />
            </Route>
            {/* Manage Menu Hotel */}
            <Route path="/dashboard-admin/hotel">
              <Route index element={<ManageHotel />} />
              {/* <Route path="detail/:id" element={<DetailEventDash />} /> */}
              <Route path="create" element={<CreateHotel />} />
            </Route>
            {/* Manage Menu Trip / Wisata */}
            <Route path="/dashboard-admin/wisata">
              <Route index element={<ManageTrip />} />
              <Route path="detail/:id" element={<DetailEventDash />} />
              <Route path="create" element={<CreateTrip />} />
            </Route>
          </Route>
          {/* END DASHBAORD ADMIN */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
