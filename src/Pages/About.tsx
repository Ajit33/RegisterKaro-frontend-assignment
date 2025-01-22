import TeamImg from "../assets/groupImg.png"


export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Content Side */}
        <div className="flex-1 max-w-xl">
          <div className="text-orange-500 text-sm font-medium tracking-wider mb-4">
            WELCOME TO REGISTERKARO.IN
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">Register Karo</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              We have been using Intelegencia as our DevOps vendor for our field service
              applications over the last couple of years and I'm extremely pleased with
              their performance, ability to execute, and willingness to adapt in our ever changing
              environment. Perry is an outstanding leader who is fanatical about
              customer satisfaction. He has built a solid team which has consistently delivered
              on projects thereby exceeding everyone's expectations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I would strongly recommend their services to any organization that is looking for
              solid, reliable, and predictable outcomes.
            </p>
          </div>
          
          <button className="mt-8 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-200 flex items-center gap-2 group">
            Learn More
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>

        {/* Image Side */}
        <div className="flex-1 relative">
          <img
            src={TeamImg}
            alt="Register Karo team"
            className="w-full max-w-2xl rounded-lg relative z-10"
          />
          <div className="absolute -right-4 -bottom-4 w-full h-full rounded-lg bg-orange-500 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,currentColor_2px,currentColor_4px)]" />
        </div>
      </div>
    </section>
  );
}


