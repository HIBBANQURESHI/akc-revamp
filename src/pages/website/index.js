import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Services from "@/components/website/Services";
import Swiper from "@/components/website/Swpier";
import FAQ from "@/components/website/FAQ";
import Footer from "@/components/Footer";

// Counter Component
const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(endValue / (duration / 1000));
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(currentCount);
      }
    }, 1000 / 60); // Update approximately 60 times per second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [endValue, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with settings
  }, []);

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="py-52 px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
          Web Development <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-normal text-left mb-6">
          At Cubix, we specialize in creating powerful and effective web
          solutions that help your business stand out online by creating
          user-friendly websites.
        </p>
      </div>

      <div>
        <img
          src="https://images.ctfassets.net/mi665aivb0at/54L24BJyewKZ5EGg3QH4VN/74c4dbe7ae446b64126e76603d893834/Web_Development_Services_Hero_Banner.webp"
          alt="Web Development Services"
          className="w-full"
        />
      </div>

      <div className="px-10 lg:px-72 py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10 text-black">
          Why our clients love us.
        </h2>

        {/* Counter Section */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Projects */}
          <div
            className="text-left p-6 transition-all duration-300 group hover:text-blue-500"
            data-aos="fade-up"
          >
            <h3 className="text-7xl font-semibold text-yellow-500 group-hover:text-blue-500">
              <Counter endValue={700} duration={2000} />
              <span>+</span>
            </h3>
            <p className="text-3xl font-normal text-black group-hover:underline py-3">
              Projects
            </p>
          </div>

          {/* Developers */}
          <div
            className="text-left p-6 transition-all duration-300 group hover:text-blue-500"
            data-aos="fade-up"
          >
            <h3 className="text-7xl font-semibold text-yellow-500 group-hover:text-blue-500">
              <Counter endValue={250} duration={2000} />
              <span>+</span>
            </h3>
            <p className="text-3xl font-normal text-black group-hover:underline py-3">
              Developers
            </p>
          </div>

          {/* Experience */}
          <div
            className="text-left p-6 transition-all duration-300 group hover:text-blue-500"
            data-aos="fade-up"
            
          >
            <h3 className="text-7xl font-semibold text-yellow-500 group-hover:text-blue-500">
              <Counter endValue={15} duration={2000} />
              <span>+</span>
            </h3>
            <p className="text-3xl font-normal text-black group-hover:underline py-3">
              Experience
            </p>
          </div>
        </div>
      </div>

      <div className="px-72" >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black"> Comprehensive web development services. </h2>
        <Services/>
      </div>

      <div className="py-36" style={{
            backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
            backgroundColor: "#3b82f6", 
            backgroundSize: "100% 100%",
          }}> 
        <h2 className="px-72 text-white text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10"> Serving a variety of 
        <span className="text-yellow-500 text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10"> industry. </span> </h2>
        <p className="px-72 text-white text-xl sm:text-sm lg:text-xl font-normal text-left mb-10"> Cubix provides innovative web solutions for businesses across multiple sectors. </p>
        <Swiper/>               
      </div>

      <div className="py-32">
        <FAQ/>
      </div>

      <div className="text-center" data-aos="fade-down" data-aos-duration="1000">
          <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6"> Pull The Trigger! </p>
          <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6" >
              Ready to start
              <span className="py-5 block">your web project?</span>              
          </h2>
      </div>

      <div className="py-36"></div>
        <div style={{
            backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
            backgroundColor: "#3b82f6", 
            backgroundSize: "100% 100%",
          }}>
         <Footer/>
        </div>
    </div>
  );
};

export default Index;
