import React from 'react';
import Button from './Button';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Medical background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-cyan-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeIn">
            Expert Healthcare for <span className="text-teal-300">Your Family</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn animation-delay-200">
            Providing compassionate, comprehensive medical care with state-of-the-art facilities and experienced specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
            <Button 
              variant="primary" 
              size="lg" 
              className="flex items-center gap-2"
            >
              <Calendar size={20} />
              Book an Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 flex items-center gap-2"
            >
              Learn More <ArrowRight size={18} />
            </Button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fadeIn animation-delay-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
                <p className="text-teal-100">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">30+</h3>
                <p className="text-teal-100">Specialist Doctors</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">10k+</h3>
                <p className="text-teal-100">Satisfied Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;