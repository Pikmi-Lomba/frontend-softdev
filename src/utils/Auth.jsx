import Cookies from "js-cookie";

export const Auth = {
  isAuthorization() {
    const token = Cookies.get("token");
    const role = Cookies.get("role");

    if ((token, role)) {
      return { token, role };
    }
    return { token: "", role: "" };
  },
  signOut() {
    return Cookies.remove("token"), Cookies.remove("role");
  },
};

export const AuthAdmin = {
  isAuthorization() {
    const tokenAdmin = Cookies.get("tokenAdmin");
    const role = Cookies.get("role");

    if ((tokenAdmin, role)) {
      return { tokenAdmin, role };
    }
    return { tokenAdmin: "", role: "" };
  },
  signOut() {
    return Cookies.remove("tokenAdmin"), Cookies.remove("role");
  },
};
