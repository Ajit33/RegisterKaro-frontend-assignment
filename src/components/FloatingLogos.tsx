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


  const displayedLogos = showAll ? logos : logos.slice(0, 12)

  return (
    <section className="w-full">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex aspect-square items-center justify-center rounded-full bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={logo.src || "/placeholder.svg"} alt={logo.alt} className="aspect-square w-12 object-contain" />
            </div>
          ))}
        </div>
        <div className="mt-12 flex  justify-center">
          <button  onClick={() => setShowAll(!showAll)} className="group text-primary">
            Show more
          </button>
        </div>
      </div>
    </section>
  )
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
