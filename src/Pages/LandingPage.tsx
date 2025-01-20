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
import TestimonialSlider from "../components/TestimonialSlidder";
import FAQ from "../components/Faq";
import AppDownloadSection from "../components/AppDownlad";
import MetricsDisplay from "../components/NumberDisplay";
import Contact from "../components/Contact";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

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
        <Blog />
      <TestimonialSlider />
      <FAQ />
      <AppDownloadSection />
      <MetricsDisplay />
      <Contact />
      <Companies />
      <Footer />
    </div>
  );
};

export default LandingPage;

