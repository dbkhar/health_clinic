import React from 'react';
import Button from './Button';
import { CheckCircle, Award, Users, Building } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-teal-600" />,
      title: "Patient-Centered Care",
      description: "We put our patients first, focusing on personalized treatment plans and compassionate care."
    },
    {
      icon: <Award className="h-6 w-6 text-teal-600" />,
      title: "Certified Specialists",
      description: "Our team consists of board-certified physicians with extensive experience in their fields."
    },
    {
      icon: <Building className="h-6 w-6 text-teal-600" />,
      title: "Modern Facilities",
      description: "Our clinic is equipped with state-of-the-art technology for accurate diagnosis and treatment."
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Collaborative Approach",
      description: "We work together across specialties to provide comprehensive care for complex conditions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <img
              src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Medical team discussion"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 rounded-full p-3">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Recognized as</p>
                  <p className="text-gray-900 font-bold">Top Medical Center 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Providing Quality Healthcare For Over 15 Years
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MediCare was founded with a mission to provide accessible, high-quality healthcare to our community. 
              Since our establishment in 2010, we've grown to become a trusted medical provider with a team of 
              specialized physicians and state-of-the-art facilities.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in a holistic approach to healthcare that treats not just the symptoms, but the whole person. 
              Our dedicated team works collaboratively to ensure that each patient receives personalized care 
              tailored to their unique needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;