import { Navigate, Outlet } from "react-router-dom";
import { AuthAdmin } from "../utils/Auth";

export default function PrivateRouteAdmin() {
  let { tokenAdmin } = AuthAdmin.isAuthorization();
  if (!tokenAdmin) {
    return <Navigate to="/login/admin" replace />;
  }
  return <Outlet />;
}
