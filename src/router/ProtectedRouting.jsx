import { Navigate, Outlet } from "react-router-dom";
import { Auth, AuthAdmin } from "../utils/Auth";

export default function ProtectedRoute() {
  let { tokenAdmin, role } = AuthAdmin.isAuthorization();
  let { token } = Auth.isAuthorization();
  if (tokenAdmin && role == "admin") {
    return <Navigate to="/dashboard-admin" replace />;
  } else if (token) {
    return <Navigate to="/dashboard-mitra" replace />;
  }
  return <Outlet />;
}
