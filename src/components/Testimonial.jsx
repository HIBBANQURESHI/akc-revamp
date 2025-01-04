import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-in-out" }); // Initialize AOS with animation settings
  }, []);

  return (
    <div className="py-12 px-4 space-y-12 sm:px-8 md:px-12">
      {/* 1st Testimonial */}
      <div
        className="mx-auto p-9 border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px]"
        style={{
          width:"1136.78px",
          height: "333.27px",
          backgroundColor: "transparent",
          borderRadius: "30px", 
        }}
        data-aos="fade-down" // Animation for fade-up effect
        data-aos-duration="700" // Animation duration
      >
        <p className="text-lg font-semibold font-sans text-white mb-4 text-left">Jackie Dallas, Director</p>
        <p className="text-2xl text-left text-white font-sans mb-4">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>

        {/* Image and Stars */}
        <div className="flex justify-left items-center space-x-2 mt-4 py-12">
          <img
            src="https://via.placeholder.com/50"
            alt="Jackie Dallas"
            className="rounded-full w-20 h-20 object-cover"
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
        className="mx-auto p-9 border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px]"
        style={{
          width:"1136.78px",
          height: "333.27px",
          backgroundColor: "transparent",
          borderRadius: "30px",
        }}
        data-aos="fade-left" // Animation for fade-up effect
        data-aos-duration="700" // Animation duration
      >
        <p className="text-lg font-semibold text-white font-sans mb-4 text-left">Hamed Al Zadjal, Digital Manager</p>
        <p className="text-2xl text-white font-sans mb-4 text-left">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>

        {/* Image and Stars */}
        <div className="flex justify-left items-center space-x-2 mt-4 py-12">
          <img
            src="https://via.placeholder.com/50"
            alt="Hamed Al Zadjal"
            className="rounded-full w-20 h-20 object-cover"
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
        className="mx-auto p-9 border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px]"
        style={{
          width:"1136.78px",
          height: "333.27px",
          backgroundColor: "transparent",
          borderRadius: "30px",
        }}
        data-aos="fade-right" // Animation for fade-up effect
        data-aos-duration="700" // Animation duration
      >
        <p className="text-lg font-semibold font-sans text-white mb-4 text-left">Geoffrey Anderson, Co-Founder and CEO</p>
        <p className="text-2xl text-white font-sans mb-4 text-left">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>

        {/* Image and Stars */}
        <div className="flex justify-left items-center space-x-2 mt-4 py-12">
          <img
            src="https://via.placeholder.com/50"
            alt="Geoffrey Anderson"
            className="rounded-full w-20 h-20 object-cover"
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
        className="mx-auto p-9 border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-[554px]"
        style={{
          width:"1136.78px",
          height: "333.27px",
          backgroundColor: "transparent",
          borderRadius: "30px",
        }}
        data-aos="fade-up" // Animation for fade-up effect
        data-aos-duration="700" // Animation duration
      >
        <p className="text-lg font-semibold text-white font-sans mb-4 text-left">Cleitn Kimberly A. Dalius, Founder</p>
        <p className="text-2xl text-white font-sans mb-4 text-left">
          "This company provided exceptional service. The team went above and beyond to meet our needs and deliver excellent results!"
        </p>

        {/* Image and Stars */}
        <div className="flex justify-left items-center space-x-2 mt-4 py-12">
          <img
            src="https://via.placeholder.com/50"
            alt="Cleitn Kimberly"
            className="rounded-full w-20 h-20 object-cover"
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
