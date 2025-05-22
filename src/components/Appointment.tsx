import React, { useState } from 'react';
import Button from './Button';
import { Calendar, Clock, User, Mail, Phone, FileText } from 'lucide-react';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Appointment request submitted! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              Book an Appointment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Schedule Your Visit Today
            </h2>
            <p className="text-gray-600 mb-8">
              Take the first step towards better health by scheduling an appointment with our expert physicians. 
              We offer flexible scheduling options to accommodate your busy lifestyle.
            </p>

            <div className="bg-teal-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                Why Choose Our Clinic?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Same-day appointments for urgent cases</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Extended evening hours on weekdays</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Online appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Reminder notifications via email or text</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-600" />
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> appointments@medicare.com
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong> Monday-Friday: 8am-7pm, Saturday: 9am-5pm
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-gray-50 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-white block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Checkup</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 7PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white pl-10 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 p-2.5"
                    rows={4}
                    placeholder="Please share any symptoms or concerns you'd like to discuss..."
                  ></textarea>
                </div>
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Request Appointment
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;