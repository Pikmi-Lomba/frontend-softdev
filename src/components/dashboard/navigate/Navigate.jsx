import { useNavigate } from "react-router-dom";
import UpdateMitraDash from "../../../pages/dashboard/manageAcount/actionsMitra/UpdateMitra";

const Navigate = () => {
  const navigateReturn = useNavigate();
  const backToManage = () => {
    navigateReturn(-1);
  };
  return (
    <>
      <UpdateMitraDash backToManage={backToManage} />
    </>
  );
};

export default Navigate;
