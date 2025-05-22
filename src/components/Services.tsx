import React from 'react';
import { services } from '../data';
import { Heart, Stethoscope, Microscope, ActivitySquare, Video, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Heart: <Heart className="h-10 w-10 text-teal-600" />,
    Stethoscope: <Stethoscope className="h-10 w-10 text-teal-600" />,
    Microscope: <Microscope className="h-10 w-10 text-teal-600" />,
    ActivitySquare: <ActivitySquare className="h-10 w-10 text-teal-600" />,
    Video: <Video className="h-10 w-10 text-teal-600" />,
    HeartPulse: <HeartPulse className="h-10 w-10 text-teal-600" />
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-gray-600">
            We offer a wide range of medical services to meet the diverse needs of our patients,
            from preventive care to specialized treatments and ongoing health management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="bg-teal-100 rounded-lg inline-flex p-4 mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-block mt-4 text-teal-600 font-medium hover:text-teal-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;