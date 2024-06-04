import React from 'react';
import doctors from '../assets/img/doctors.png';
import emergencyImage from '../assets/img/emergencyImage.png';
import hoursImage from '../assets/img/hoursImage.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/2 pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-blue-700 mt-8 mb-4">Clinic with Innovation</h2>
            <p className="text-lg text-gray-700 mb-4">
              We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
            </p>
            <div className="text-center lg:text-left mt-8">
              <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={doctors}
                alt="Qualified Doctors"
                className="shadow-lg rounded-lg w-full h-64 object-cover"
              />
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-black bg-white bg-opacity-50 px-4 py-2 rounded-lg">Qualified Doctors</h2>
            </div>
            
            <div className="relative">
              <img
                src={emergencyImage}
                alt="Emergency Care"
                className="shadow-lg rounded-lg w-full h-64 object-cover"
              />
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-black bg-white bg-opacity-50 px-4 py-2 rounded-lg">Emergency Care</h2>
            </div>
            
            <div className="relative">
              <img
                src={hoursImage}
                alt="24 Hours Service"
                className="shadow-lg rounded-lg w-full h-64 object-cover"
              />
              <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-black bg-white bg-opacity-50 px-4 py-2 rounded-lg">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
