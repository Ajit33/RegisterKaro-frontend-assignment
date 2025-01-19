import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files from your desktop using our software. The recovery process involves scanning your drive for deleted files and restoring them to a location of your choice." },
    { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files from your desktop using our software. The recovery process involves scanning your drive for deleted files and restoring them to a location of your choice." },
    { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files from your desktop using our software. The recovery process involves scanning your drive for deleted files and restoring them to a location of your choice." },
    { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files from your desktop using our software. The recovery process involves scanning your drive for deleted files and restoring them to a location of your choice." },
    { question: "Can I recover deleted files from desktop with this software?", answer: "Yes, you can recover deleted files from your desktop using our software. The recovery process involves scanning your drive for deleted files and restoring them to a location of your choice." }
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  const handleToggle = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
        <h1 className='text-[#EB8D15] text-center text-[14px]'>FAQ</h1>
      <h1 className="text-3xl font-bold text-center mb-8 text-brown-800">Frequent Ask Questions</h1>
      
      <div className="space-y-4">
        {visibleFaqs.map((faq, index) => (
          <div 
            key={index}
            className="border rounded-lg overflow-hidden bg-white shadow-lg border-gray-600"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => handleToggle(index)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {faqs.length > 3 && (
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show less' : 'Show more →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQ;