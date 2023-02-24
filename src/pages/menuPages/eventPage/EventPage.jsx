import HeroComp from "../../../components/hero/Hero";
import EventComp from "../../../components/menuList/eventComp/EventComp";
import Navbar from "../../../components/navbar/Navbar";

const EventPage = () => {
  return (
    <>
      <Navbar />
      <HeroComp />
      <EventComp />
      {/* <FooterComp /> */}
    </>
  );
};

export default EventPage;
