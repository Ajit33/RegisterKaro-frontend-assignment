import { Shield, CheckCircle, SmilePlus, UserCog } from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <div className={`p-6 flex flex-col items-center justify-center rounded-lg ${className}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  )
}

export default function WhyChooseSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col justify-between lg:w-1/2 mb-8 lg:mb-0">
          <div>
            <div className="text-orange-500 text-sm font-medium tracking-wider mb-4">
              WHY REGISTERKARO.IN
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Register Karo
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl">
              It is with consistent services and results that build trust with the people and that in
              turn help us to serve the business better.
            </p>
          </div>
          <div className='flex justify-end md:flex-start mt-8 lg:mt-0'>
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-orange-500" />}
              title="Confidential & Safe"
              description="All your private information is safe with us"
              className="bg-red-50 w-full sm:w-[300px] h-auto sm:h-[170px] md:mr-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
          <FeatureCard
            icon={<CheckCircle className="w-8 h-8 text-green-500" />}
            title="No Hidden Fee"
            description="Everything is put before you with no hidden charges or conditions"
            className="bg-green-50"
          />
          
          <FeatureCard
            icon={<SmilePlus className="w-8 h-8 text-blue-500" />}
            title="Guaranteed Satisfaction"
            description="We ensure that you stay 100% satisfied with our offered services"
            className="bg-blue-50"
          />
          
          <FeatureCard
            icon={<UserCog className="w-8 h-8 text-red-500" />}
            title="Expert CA/CS Assistance"
            description="Prompt support from our in-house expert professionals"
            className="bg-red-50"
          />
          
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-orange-500" />}
            title="Confidential & Safe"
            description="All your private information is safe with us"
            className="bg-green-50"
          />
        </div>
      </div>
    </section>
  )
}

