import { Star, Play } from "lucide-react";
import star from "../assets/star (1).png";
import hero from "../assets/Hero.png";
import arrow from "../assets/arrow.png";
import client from "../assets/client.png";
import stability from "../assets/stability.png";
const Home = () => {
  return (
    <div id="home" className="relative min-h-[587px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff1ec] via-[#fff6f6] to-[#f0f7ff]" />
      {/* content start form here...... */}
      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div className="space-y-6">
            {/* Google Rating */}
            <div className="flex items-center gap-2">
              <img src={star} className="w-5 h-5" alt="star" />
              <span className="text-sm font-medium">Google Rating</span>
              <div className="flex">
                {[...Array(5)].map((_) => (
                  <img src={star} className="w-5 h-5" alt="star" />
                ))}
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Your trusted partner
              <br />
              <span className="text-3xl sm:text-4xl">
                for compliance business needs
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600">
              An online business compliance platform that helps entrepreneurs
              and their individuals with various,{" "}
              <span className="font-semibold">registrations, tax filings,</span>{" "}
              and other <span className="font-semibold">legal matters.</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-6">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Star className="w-6 h-6 text-[#FFA229]" />
                </div>
                <div>
                  <div className="text-xl font-bold">4.5+</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-transparent rounded-lg shadow-sm">
                  <img src={client} alt="client" />
                </div>
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{
                      background:
                        "linear-gradient(to right, #FFA229 100%, #1C4670 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    20,000+
                  </div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 bg-trasnparent rounded-lg shadow-sm">
                  <img src={stability} alt="stability" />
                </div>
                <div>
                  <div
                    className="text-xl font-bold "
                    style={{
                      background:
                        "linear-gradient(to right, #FFA229 100%, #1C4670 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    99.8%
                  </div>
                  <div className="text-sm text-gray-600">
                    Financial Stability
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1B395D] hover:bg-[#1B395D]/90 text-white px-6 py-3 rounded-md">
                Talk An Expert
              </button>
              <button className="border-[#1B395D] text-[#1B395D] hover:bg-[#1B395D]/10">
                <Play className="w-4 h-4 mr-2" /> See how it works
              </button>
            </div>
          </div>

          {/* Right column - Illustration */}
          <div className="relative hidden lg:block w-[600px] h-[480px]">
            <img
              src={hero}
              alt="Business Compliance Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Floating service cards */}
        <div className="absolute top-4 right-4 space-y-2 flex flex-col justify-between  hidden lg:block h-full">
          <div className="flex flex-col space-y-2 mb-[170px] ">
            <div className="bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
              Annual Compliance
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
              Payroll Services
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
              Company Formation
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
              Annual Compliance
            </div>
          </div>

          <div className="w-full hidden lg:block flex flex-col justify-end">
            <img src={arrow} alt="arrow" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
