import FooterComp from "../../../components/footer/Footer";
import HeroComp from "../../../components/hero/Hero";
import FoodComp from "../../../components/menuList/food/FoodComp";
import NavbarComp from "../../../components/navbar/Navbar";

const FoodPage = () => {
  return (
    <>
      <NavbarComp />
      <HeroComp />
      <FoodComp />
      <FooterComp />
    </>
  );
};

export default FoodPage;
