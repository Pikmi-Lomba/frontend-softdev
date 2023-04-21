import { Link, useLocation } from "react-router-dom";
import "./style.scss";

export function BreadcrumbMitra() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/dashboard-admin"
        className={
          location.pathname === "/dashboard-admin"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Dashboard
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard-admin/mitra"
        className={
          location.pathname === "/dashboard-admin/mitra"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Mitra
      </Link>
      {/* <span className="breadcrumb-arrow">&gt;</span> */}
    </nav>
  );
}

export function BreadcrumbKuliner() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/dashboard-admin"
        className={
          location.pathname === "/dashboard-admin"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Dashboard
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard-admin/kuliner"
        className={
          location.pathname === "/dashboard-admin/kuliner"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Kuliner
      </Link>
      {/* <span className="breadcrumb-arrow">&gt;</span> */}
    </nav>
  );
}

export function BreadcrumbHotel() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/dashboard-admin"
        className={
          location.pathname === "/dashboard-admin"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Dashboard
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard-admin/hotel"
        className={
          location.pathname === "/dashboard-admin/hotel"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Hotels
      </Link>
      {/* <span className="breadcrumb-arrow">&gt;</span> */}
    </nav>
  );
}

export function BreadcrumbTrip() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/dashboard-admin"
        className={
          location.pathname === "/dashboard-admin"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Dashboard
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard-admin/wisata"
        className={
          location.pathname === "/dashboard-admin/wisata"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Wisata
      </Link>
      {/* <span className="breadcrumb-arrow">&gt;</span> */}
    </nav>
  );
}

export function BreadcrumbEvent() {
  const location = useLocation();

  return (
    <nav>
      <Link
        to="/dashboard-admin"
        className={
          location.pathname === "/dashboard-admin"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Dashboard
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>

      <Link
        to="/dashboard-admin/wisata"
        className={
          location.pathname === "/dashboard-admin/event"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Event
      </Link>
      {/* <span className="breadcrumb-arrow">&gt;</span> */}
    </nav>
  );
}
