import About from "../components/aboutUS/AboutUs";
import HeroComp from "../components/hero/Hero";
import NavbarComp from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div className="colorWeb">
      <NavbarComp />
      <HeroComp />
      <About />
    </div>
  );
};

export default LandingPage;
