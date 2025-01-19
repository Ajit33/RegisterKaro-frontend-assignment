import CoinBase from "../assets/coinbase.png" 
import Spotify from "../assets/spotify.png" 
import webfloe from "../assets/webflow.png" 
import zoom from "../assets/zoom.png" 
import dropbox from "../assets/dropbox.png" 
import slack from "../assets/slack.png"

const Companies = () => {
  const companies = [
    {
      name: "Coinbase",
      image: CoinBase,
      alt: "Coinbase logo"
    },
    {
      name: "Spotify",
      image: Spotify,
      alt: "Spotify logo"
    },
    {
      name: "Slack",
      image: slack,
      alt: "Slack logo"
    },
    {
      name: "Dropbox",
      image: dropbox,
      alt: "Dropbox logo"
    },
    {
      name: "Webflow",
      image: webfloe,
      alt: "Webflow logo"
    },
    {
      name: "Zoom",
      image: zoom,
      alt: "Zoom logo"
    }
  ];

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="flex items-center justify-center w-32 h-12"
            >
              <img
                src={company.image}
                alt={company.alt}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;

