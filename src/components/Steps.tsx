import { Baby, CreditCard, File, Mail } from "lucide-react";

const steps = [
  {
    icon: File, 
    title: "Fill up Application Form",
    bgColor: "bg-[#EB5757]",
  },
  {
    icon: CreditCard,
    title: "Make Online Payment",
    bgColor: "bg-[#27AE60]",
  },  
  {
    icon: Baby,
    title: "Executive will Process Application",
    bgColor: "bg-[#F2994A]",
  },
  {
    icon: Mail,
    title: "Get Confirm Mail",
    bgColor: "bg-[#8E8579]",
  },
];

export default function StepProcess() {
  return (
    <div className="flex justify-center items-center bg-orange-400 py-8">
      <div className="flex flex-col items-center md:flex-row justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-center mx-4"
          >
            <div
              className={`w-[52px] h-[52px] flex items-center  justify-center text-white rounded-full ${step.bgColor}`}
            >
              {/* Render the icon component */}
              <step.icon className="w-5 h-5" />
            </div>
            <p className="mt-2 text-sm font-medium md:ml-4">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
