import  { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div 
      className="min-h-[300px] w-full flex flex-col items-center justify-center p-8 text-white"
      style={{
        background: 'linear-gradient(180deg, #FF8C37 0%, #F9A03C 25%, #3B82F6 100%)'
      }}
    >
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <div className="text-sm tracking-wider opacity-90">1% OF THE INDUSTRY</div>
        
        <h1 className="text-2xl md:text-3xl font-semibold">
          Welcome to your new digital reality. Now.
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex h-10 rounded overflow-hidden bg-white">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-4 text-gray-800 focus:outline-none border-none text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 bg-orange-500 text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-x-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600">✓</span>
            </span>
            <span>Instant results</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600">✓</span>
            </span>
            <span>User-friendly interface</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600">✓</span>
            </span>
            <span>Personalized customization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;