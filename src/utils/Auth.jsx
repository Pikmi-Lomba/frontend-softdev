import Cookies from "js-cookie";

export const Auth = {
  isAuthorization() {
    const token = Cookies.get("token");

    console.log(token);

    if (token) {
      return { token };
    }
    return { token: "" };
  },
  signOut() {
    return Cookies.remove("token");
  },
};
