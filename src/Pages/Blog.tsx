import image1 from "../assets/blog1.png"
import image2 from "../assets/blog2.png"
import image3 from "../assets/blog3.png"
import image4 from "../assets/blog4.png"
import image5 from "../assets/blog5.png"
import image6 from "../assets/blog6.png"


const BlogSection = () => {
  type Categories = {
    "Tax & Audit": string;
    Management: string;
    Tax: string;
    Research: string;
    Compliance: string;
    Audit: string;
    "Money Back": string;
    Money: string;
    "Tax Return": string;
    News: string;
    "Private Limited Company": string;
    "Customer Success": string;
  };

  const blogs = [
    {
      id: 1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      readTime: "Today",
      title: "Small business & Startup",
      description:
        "Like to know the secret of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
      image: image1,
    },
    {
      id: 2,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
      image: image2,
    },
    {
      id: 3,
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image:image3,
    },
    {
      id: 4,
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
      image: image4,
    },
    {
      id: 5,
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
      image: image5,
    },
    {
      id: 6,
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
      image: image6,
    },
  ];

  const getTagColor = (tag: keyof Categories) => {
    const colors: Record<keyof Categories, string> = {
      "Tax & Audit": "text-purple-600",
      Management: "text-blue-600",
      Tax: "text-blue-600",
      Research: "text-blue-600",
      Compliance: "text-red-600",
      Audit: "text-purple-600",
      "Money Back": "text-blue-600",
      Money: "text-purple-600",
      "Tax Return": "text-green-600",
      News: "text-red-600",
      "Private Limited Company": "text-purple-600",
      "Customer Success": "text-blue-600",
    };
    return colors[tag];
  };

  return (
    <div id="#blog" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-orange-500 text-sm uppercase tracking-wider mb-2">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-3xl font-bold text-gray-900">
          Accelerate Digital Transformation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>{blog.author}</span>
                <span className="mx-2">•</span>
                <span>{blog.date}</span>
                {blog.readTime && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </>
                )}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-between">
                {blog.title}
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </h3>

              <p className="text-gray-600 mb-4">{blog.description}</p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm ${getTagColor(tag as keyof Categories)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg flex items-center mx-auto hover:bg-blue-800 transition-colors duration-300">
          Show more blogs
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogSection;


