import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import Dashboard from "../pages/dashboard/Dashboard";
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
} from "../pages";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/contact-page" element={<ContactPage />} />
          {/* Food Menu */}
          <Route path="/kuliner-page">
            <Route index element={<FoodPage />} />
            <Route path="detail/:id" element={<DetailFood />} />
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
          {/* Private Route */}

          <Route path="/dashboard-admin">
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
