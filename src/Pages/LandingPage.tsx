import About from "./About";
import Home from "./Home";

import NavBar from "../components/Nav/NavBar";
import Blog from "./Blog";
import TrustedBrand from "../components/TrustedBrand";
import Service from "./Service";
import WhyChooseSection from "../components/Why-choose";
import VedioIntroduction from "../components/VedioIntroduction";
import HappyClients from "../components/HappyClients";
import StepProcess from "../components/Steps";

const LandingPage = () => {
  return (
    <div className="max-w-[screen] mx-auto">
      <NavBar />
      <div id="/">
        <Home />
      </div>
      <TrustedBrand />
      <div id="service">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <WhyChooseSection />
      <VedioIntroduction />
      <HappyClients />
      <StepProcess />
      <div id="blog">
        <Blog />
      </div>
    </div>
  );
};

export default LandingPage;

