import Logo from "../.././assets/RegisterKaroLogo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

interface NavItem {
  title: string;
  id: string;
  path: string;
}

const services: NavItem[] = [
  {
    title: "Business Registration",
    id: "business-registration",
    path: "/services/business-registration",
  },
  {
    title: "Tax Registration",
    id: "tax-registration",
    path: "/services/tax-registration",
  },
  { title: "Legal Services", id: "legal-services", path: "/services/legal" },
  { title: "Compliance", id: "compliance", path: "/services/compliance" },
];

const navItems: NavItem[] = [
  { title: "Home", id: "home", path: "/" },
  { title: "Blog", id: "blog", path: "blog" },
  { title: "Contact Us", id: "contact", path: "contact" },
  { title: "About us", id: "about", path: "about" },
];

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-full md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={Logo} alt="RegisterKaro Logo" className="h-10 " />
              <span className="text-[#164760] font-bold text-xl ml-2">
                Register
              </span>
              <span className="text-[#FFA229] font-bold text-xl">Karo</span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3  py-2 rounded-md text-sm  font-medium ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
              >
                Our Services
              </button>
              {isServicesOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
           <div className="flex items-center">
           <button className=" p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden md:block">
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
           </div>
          <div className="flex items-center">
            <button
              className="bg-[#FFA229] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#FFA229]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA229] sm:px-4 sm:py-2 sm:text-base whitespace-nowrap"
              onClick={() => (window.location.href = "/talk-expert")}
            >
              Talk An Expert
            </button>

            <div className="ml-4 md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.title}
              </Link>
            ))}
            <button
              onClick={toggleServices}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
            >
              Our Services
            </button>
            {isServicesOpen && (
              <div className="pl-4">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
