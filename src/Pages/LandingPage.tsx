import NavBar from "../components/Nav/NavBar"
import TrustedBrand from "../components/TrustedBrand"
import Home from "./Home"


const LandingPage = () => {
  return (
    <div className="max-w-[screen] mx-auto ">
      <NavBar />
      <Home />
      <TrustedBrand />
    </div>
  )
}

export default LandingPage
