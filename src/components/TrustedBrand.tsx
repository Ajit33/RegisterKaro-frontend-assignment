import oracle from "../assets/oracle.png";
import segment from "../assets/segment.png";
import samsung from "../assets/sumsung.png";
import monday from "../assets/monday.com.png";
import morpheus from "../assets/Morpheus.png";

interface BrandImage {
  src: string;
  alt: string;
}

const brands: BrandImage[] = [
  { src: oracle, alt: "Oracle" },
  { src: morpheus, alt: "Morpheus" },
  { src: segment, alt: "Segment" },
  { src: samsung, alt: "Samsung" },
  { src: monday, alt: "Monday.com" },
  { src: segment, alt: "Segment" }, // Included twice for demonstration
];

const TrustedBrand = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl text-center font-semibold text-gray-900 font-inter">
            Trusted By Over 100+ Startups and freelance business
          </h2>

          {/* Logos */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={`${brand.alt}-${index}`}
                className="w-full flex items-center justify-center px-4"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  style={{ maxWidth: "120px" }} // Ensures logos like Monday.com aren't too small
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrand;
