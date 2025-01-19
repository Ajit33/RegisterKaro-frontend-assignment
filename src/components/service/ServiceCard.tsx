

export interface Service {
  title: string;
  description: string;
  image: string;
  learnMoreUrl: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
      <img
        src={service.image}
        alt={service.title}
        className="mb-4 w-16 h-16 object-contain"
      />
      <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
      <p className="mb-4 text-gray-600 text-sm">{service.description}</p>
      <button className="text-blue-600 hover:text-blue-800">Learn more</button>
    </div>
  );
}
