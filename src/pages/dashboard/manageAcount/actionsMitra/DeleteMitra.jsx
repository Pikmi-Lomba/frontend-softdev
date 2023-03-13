import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { AxiosLocal } from "../../../../apis/Api";

const DeleteMitraDash = () => {
  const { id } = useParams();
  const { token } = Cookies.get("token");

  const handleDelete = () => {
    AxiosLocal.delete(`/mitra/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        console.log("bisa di hapus");
      })
      .catch((err) => {
        console.log(err);
        console.log("gagal dihapus");
      });
  };
  return (
    <>
      <h1>Delete Actions {id}</h1>
      <button onClick={handleDelete}>Delete disini dlu</button>
    </>
  );
};

export default DeleteMitraDash;
