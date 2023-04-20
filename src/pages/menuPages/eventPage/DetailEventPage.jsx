import Disqus from "../../../components/disqus/Disqus";
import DetailHeroEvent from "../../../components/menuList/eventComp/DetailHeroEvent";
import Navbar from "../../../components/navbar/Navbar";

const DetailEventPage = () => {
  return (
    <section>
      <Navbar />
      <DetailHeroEvent />
      <Disqus />
    </section>
  );
};

export default DetailEventPage;
