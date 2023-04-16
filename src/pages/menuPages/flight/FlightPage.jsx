import HeroComp from "../../../components/hero/Hero";
import FlightComp from "../../../components/menuList/flight/FlightComp";
import NavbarComp from "../../../components/navbar/Navbar";
import FooterComp from "../../../components/footer/Footer";

const FlightPage = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <FlightComp />
      <FooterComp />
    </>
  );
};

export default FlightPage;
