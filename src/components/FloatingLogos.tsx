import { useState } from "react";
import "../styles/logoanimation.css";
import Logo1 from "../assets/Hlogo.png";
import Logo2 from "../assets/fLogo.png";
import Logo3 from "../assets/slack.png";
import Logo4 from "../assets/Logo4.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";
import Logo8 from "../assets/Logo8.png";
import Logo9 from "../assets/Logo9.png";
import Logo10 from "../assets/Logo10.png";
import Logo11 from "../assets/Logo11.png";
import Logo12 from "../assets/Logo12.png";
import Logo13 from "../assets/Logo13.png";
import Logo14 from "../assets/Logo14.png";
import Logo15 from "../assets/Logo15.png";
import Logo16 from "../assets/Logo16.png";
import Logo17 from "../assets/Logo17.png";
import Logo18 from "../assets/Logo18.png";
import Logo19 from "../assets/Logo19.png";
import Logo20 from "../assets/Logo20.png";
import Logo21 from "../assets/Logo21.png";
import Logo22 from "../assets/Logo22.png";
import Logo23 from "../assets/Logo23.png";

export default function LogosGrid() {
  const [showAll, setShowAll] = useState(false);

  // Logic to control displayed logos
  const displayedLogos = showAll ? logos : logos.slice(0, 12);

  return (
    <div className="text-center">
<div
        className="grid gap-4 mx-auto px-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          maxWidth: "1200px",
        }}
      >
        {displayedLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-full shadow-md flex items-center justify-center p-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
}

const logos = [
  { src: Logo1, alt: "Dropbox Logo" },
  { src: Logo2, alt: "Pinterest Logo" },
  { src: Logo3, alt: "Shopify Logo" },
  { src: Logo4, alt: "Microsoft Logo" },
  { src: Logo6, alt: "Figma Logo" },
  { src: Logo7, alt: "Slack Logo" },
  { src: Logo8, alt: "Adobe Logo" },
  { src: Logo9, alt: "Asana Logo" },
  { src: Logo10, alt: "Docker Logo" },
  { src: Logo11, alt: "Google Logo" },
  { src: Logo12, alt: "Notion Logo" },
  { src: Logo13, alt: "Notion Logo" },
  { src: Logo14, alt: "Notion Logo" },
  { src: Logo15, alt: "Notion Logo" },
  { src: Logo16, alt: "Notion Logo" },
  { src: Logo17, alt: "Notion Logo" },
  { src: Logo18, alt: "Notion Logo" },
  { src: Logo19, alt: "Notion Logo" },
  { src: Logo20, alt: "Notion Logo" },
  { src: Logo21, alt: "Notion Logo" },
  { src: Logo22, alt: "Notion Logo" },
  { src: Logo23, alt: "Notion Logo" },
];
