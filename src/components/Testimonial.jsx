import { useState } from "react";

function Testimonial() {
  return (
    <div className="py-12 px-4 space-y-12 sm:px-8 md:px-12">
      {/* 1st Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Jackie Dallas, Director</p>
        <p className="text-sm sm:text-xl text-gray-900 mb-4">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Jackie Dallas"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
          <div className="flex space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>
      </div>

      {/* 2nd Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Hamed Al Zadjal, Digital Manager</p>
        <p className="text-sm sm:text-xl text-gray-900 mb-4">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Hamed Al Zadjal"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
          <div className="flex space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>
      </div>

      {/* 3rd Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Geoffrey Anderson, Co-Founder and CEO</p>
        <p className="text-sm sm:text-xl text-gray-900 mb-4">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Geoffrey Anderson"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
          <div className="flex space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>
      </div>

      {/* 4th Testimonial */}
      <div
        className="mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px] lg:w-[600px] relative"
        style={{
          height: "333.27px",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <p className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Cleitn Kimberly A. Dalius, Founder</p>
        <p className="text-sm sm:text-xl text-gray-900 mb-4">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>
        {/* Image and Stars */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Cleitn Kimberly"
            className="rounded-full w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 object-cover"
          />
          <div className="flex space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
