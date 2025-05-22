import React from 'react';
import { doctors } from '../data';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Our Doctors
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Expert Physicians
          </h2>
          <p className="text-gray-600">
            Our team of dedicated healthcare professionals brings years of experience and specialized
            knowledge to provide you with the highest quality care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                      <Facebook size={16} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="bg-white p-2 rounded-full hover:bg-teal-500 hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-teal-600 font-medium mb-3">
                  {doctor.specialty}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-3">{doctor.qualifications}</span>
                  <span className="flex items-center">
                    <span className="h-1 w-1 rounded-full bg-gray-500 mr-2"></span>
                    {doctor.experience}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-colors"
          >
            View All Doctors
          </a>
        </div>
      </div>
    </section>
  );
};

export default Doctors;