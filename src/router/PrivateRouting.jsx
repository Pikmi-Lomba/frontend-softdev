import { Navigate, Outlet } from "react-router-dom";

import { Auth } from "../utils/Auth";

// const PrivateRoute = () => {
//   let auth = { token: true };
//   return auth.token ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// function PrivateRoute() {
//   if (Auth.isAuthorization()) {
//     return <Navigate to="/login" replace />;
//   }

//   return <LoginPage />;
// }
// export default PrivateRoute;

export default function PrivateRoute() {
  let { token } = Auth.isAuthorization();

  if (!token) {
    return <Navigate to="/login" replace />;
  } else {
  }

  return <Outlet />;
}
