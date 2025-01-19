

const MetricsDisplay = () => {
  const metrics = [
    { value: '1M+', label: 'CUSTOMERS' },
    { value: '12+', label: 'YEARS OF EXCELLENCE' },
    { value: '41+', label: 'R&D ENGINEERS' },
    { value: '78+', label: 'COUNTRIES' },
    { value: '3287+', label: 'PARTNERS' },
    { value: '41+', label: 'AWARDS RECEIVED' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-white">
      <div className="text-center mb-8">
        <p className="text-orange-500 text-sm mb-2">WHY REGISTER KARO</p>
        <h2 className="text-2xl font-bold text-gray-800">Some Numbers are important</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div 
              className="text-3xl font-bold mb-2"
              style={{
                background: 'linear-gradient(90deg, #f97316 20%, #9a3412 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {metric.value}
            </div>
            <div className="text-sm text-gray-600 font-medium">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsDisplay;