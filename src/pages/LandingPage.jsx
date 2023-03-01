import HeroComp from "../components/hero/Hero";
import LandingComp from "../components/landing/landing";
import NavbarComp from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="colorWeb">
      <NavbarComp />
      <HeroComp />
      <LandingComp />
    </div>
  );
};

export default LandingPage;
