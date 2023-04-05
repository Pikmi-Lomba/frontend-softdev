import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../utils/Auth";

export default function PrivateRoute() {
  let { token, role } = Auth.isAuthorization();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
