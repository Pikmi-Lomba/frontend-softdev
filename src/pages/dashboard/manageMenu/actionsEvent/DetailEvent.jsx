import { useParams } from "react-router-dom";

const DetailEventDash = () => {
  const {id} = useParams()
  return (
    <>
      <h1 className="title">Detail Event{id}</h1>
    </>
  );
};

export default DetailEventDash;
