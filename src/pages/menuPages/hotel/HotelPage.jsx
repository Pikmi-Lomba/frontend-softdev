import HeroComp from "../../../components/hero/Hero";
import HotelComp from "../../../components/menuList/hotel/HotelComp";
import NavbarComp from "../../../components/navbar/Navbar";
import FooterComp from "../../../components/footer/Footer";

const HotelPage = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <HotelComp />
      <FooterComp />
    </>
  );
};

export default HotelPage;
