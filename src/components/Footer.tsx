
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const navigationLinks = {
    'START A BUSINESS': ['Features', 'Solutions', 'Integrations', 'Enterprise', 'Solutions'],
    'GOVERNMENT REGISTRATION': ['Partners', 'Community', 'Developers', 'App', 'Blog'],
    'COMPLIANCE & TAX': ['Channels', 'Scale', 'Watch the Demo', 'Our Competition'],
    'BIS & CDSCO': ['About Us', 'News', 'Leadership', 'Media Kit']
  };

  return (
    <footer className="bg-[#011B5B] text-white py-16 ">
      <div className="container mx-auto px-4 flex gap-5">
        {/* Top section */}
        <div className="mb-8">
          <p className="text-sm max-w-xs">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          
          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <span className="w-5 h-5">G</span>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(navigationLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-orange-400 font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-gray-300 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
       
      </div>
      <div className="mt-16 flex justify-center items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Registerkaro. All Rights Reserved.
          </p>
          <button 
            className="bg-orange-400 rounded-full p-2 hover:bg-orange-500 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
    </footer>
  );
};

export default Footer;