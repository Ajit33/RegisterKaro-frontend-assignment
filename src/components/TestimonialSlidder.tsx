import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 5,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 6,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 7,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
    {
      id: 8,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
      author: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 5,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Responsive slides per view
  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 1; // Default to mobile on server
  };
  
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Update slides per view on window resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setSlidesPerView(getSlidesPerView());
    });
  }

  const maxSlides = testimonials.length - slidesPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-lg">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="w-full bg-blue-900 min-h-[400px] md:min-h-[500px] px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold text-white mb-6 md:mb-8">
          What people say about us
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full z-10 px-2">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
              disabled={currentSlide === maxSlides}
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
                width: `${(testimonials.length * 100) / slidesPerView}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`w-full md:w-1/2 lg:w-1/4 px-2 md:px-4 flex-shrink-0 whitespace-nowrap`}
                >
                  <div className="bg-white rounded-lg p-4 md:p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base line-clamp-4">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 mr-3 md:mr-4"></div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm md:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-3 md:w-4" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;