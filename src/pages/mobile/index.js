import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Services from "@/components/website/Services";
import Swiper from "@/components/website/Swpier";
import FAQ from "@/components/website/FAQ";
import Footer from "@/components/Footer";
import MobileService from "@/components/mobile/MobileService";
import Testimonial from "@/components/Testimonial";
import MobileFaq from "@/components/mobile/MobileFaq";


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
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
    window.addEventListener('scroll', () => {
      AOS.refresh(); // Refresh AOS on scroll
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className="py-52 px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-yellow-500">
          App Development <br />
          <span className="font-bold">Services.</span>
        </h2>
        <p className="py-5 text-black text-xl sm:text-2xl lg:text-4xl font-light text-left mb-6">
        Build reliable and easy-to-use Android apps with our expert developers, ensuring smooth performance and a seamless experience for all users.
        </p>
      </div>

      <div>
        <img
          src="https://images.ctfassets.net/mi665aivb0at/4FYzdSQJjSN4oZ3FZDpKEy/5ef6b3c4a1c5759c2175e642f7ae3f97/adndroidserviceHero.webp"
          alt="Web Development Services"
          className="w-full"
        />
      </div>

      <div className="px-72 py-52">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-black">
          Comprehensive App development services.
        </h2>
        <MobileService/>
      </div>

      <div
          className="py-36 text-center relative"
          style={{
            backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
            backgroundColor: "#3b82f6", 
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="mt-0 text-6xl font-semibold font-sans text-black">Our clients simply love <span className="text-yellow-500">what we do.</span></h2>
          <p className="text-black text-2xl py-8 font-sans font-normal"> Proud to serve as the innovation partner for industry leaders who have experienced our <br/> expertise and excellence firsthand. </p>
          <Testimonial />
        </div>

      <div className="py-32">
        <MobileFaq/>
      </div>

      <div className="text-center" data-aos="fade-down" data-aos-duration="1000">
        <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6">
          Pull The Trigger!
        </p>
        <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6">
          Ready to build
          <span className="py-5 block">your App?</span>
        </h2>
      </div>

      <div className="py-36"></div>
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
          backgroundColor: "#3b82f6",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
