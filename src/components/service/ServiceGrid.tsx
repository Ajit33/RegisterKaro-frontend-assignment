import BookKeeping from "../../assets/Bookkeeping.png";
import AnnualComp from "../../assets/annual-comp.png";
import CompFormation from "../../assets/company-formation.png";
import Payroll from "../../assets/payroll.png";
import Secretarial from "../../assets/secretarial.png";
import Virtual from "../../assets/vertualOffice.png";
import { ServiceCard } from "./ServiceCard";

export interface Service {
  title: string;
  description: string;
  image: string;
  learnMoreUrl: string;
}
export default function ServicesGrid() {
  const services: Service[] = [
    {
      title: "Company Formation",
      description:
        "Build web-based solutions that enhance customer experience.",
      image: CompFormation,
      learnMoreUrl: "#",
    },
    {
      title: "Company Secretarial Services",
      description:
        "Make data-driven decisions and utilize technology to reach business goals.",
      image: Secretarial,
      learnMoreUrl: "#",
    },
    {
      title: "Virtual Office Address",
      description:
        "Foster customer relationships by effectively serving your market.",
      image: Virtual,
      learnMoreUrl: "#",
    },
    {
      title: "Annual Compliance Services",
      description:
        "Turn your ideas into modern products with our design experts.",
      image: AnnualComp,
      learnMoreUrl: "#",
    },
    {
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      image: Payroll,
      learnMoreUrl: "#",
    },
    {
      title: "Bookkeeping Services",
      description:
        "Steering user behaviours with creative design, data insights & technology.",
      image: BookKeeping,
      learnMoreUrl: "#",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#FF8A00] uppercase text-sm font-semibold mb-2">
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-[37px]">
          <button
            className="px-3 py-2 bg-[#1C4670] text-white "
          >
            See All Services
          </button>
        </div>
      </div>
    </div>
  );
}
