import React, { useState, useEffect } from "react";
import Navbar from "@/components/DesktopMenu";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import Services from "@/components/website/Services";
import Swiper from "@/components/website/Swpier";
import FAQ from "@/components/website/FAQ";
import Footer from "@/components/Footer";
import Image from "next/image";

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
      <div className="py-20 px-6 sm:px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left text-sky-300 py-16">
        Award Winning <br />
          <span className="font-semibold"> Web Development Company <br /> In the USA</span>
        </h2>
        <p className="text-black text-xl sm:text-2xl lg:text-3xl font-normal text-left mb-6">
        At AKC Link Tech Digitizing web development services, we make your competition hit the panic button. As a top web development company in the USA, we turn pixels into profit and concepts into conversions.
        </p>
      </div>

      <div>
      <Image
        src="https://images.ctfassets.net/mi665aivb0at/54L24BJyewKZ5EGg3QH4VN/74c4dbe7ae446b64126e76603d893834/Web_Development_Services_Hero_Banner.webp"
        alt="Web Development Services"
        layout="responsive"
        width={1920} // Replace with actual width
        height={1080} // Replace with actual height
        priority
      />

      </div>

      <div className="px-6 sm:px-10 lg:px-72 py-40">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10 text-sky-300">
        Why the Industry Giants Choose Us?
        </h2>

        {/* Counter Section */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {/* Projects */}
          <div className="text-left p-6 transition-all duration-300 group hover:text-sky-300">
            <h3 className="text-5xl sm:text-7xl font-normal text-black group-hover:text-sky-300">
              <Counter endValue={900} duration={2000} />
              <span>+</span>
            </h3>
            <p className="text-2xl sm:text-3xl font-normal text-black group-hover:underline py-3">
            Businesses Transformed 
            </p>
          </div>

          {/* Developers */}
          <div className="text-left p-6 transition-all duration-300 group hover:text-sky-300">
            <h3 className="text-5xl sm:text-7xl font-normal text-black group-hover:text-sky-300">
              <Counter endValue={99.8} duration={2000} />
              <span>+</span>
            </h3>
            <p className="text-2xl sm:text-3xl font-normal text-black group-hover:underline py-3">
            Client Retention 
            </p>
          </div>

          {/* Experience */}
          <div className="text-left p-6 transition-all duration-300 group hover:text-sky-300">
            <h3 className="text-5xl sm:text-7xl font-normal text-black group-hover:text-sky-300">
              <Counter endValue={280} duration={2000} />
              <span>%</span>
            </h3>
            <p className="text-2xl sm:text-3xl font-normal text-black group-hover:underline py-3">
            Average ROI 
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-72">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 text-black">
        Professional Website Development Services
        </h2>
        <Services />
      </div>

      <div
        className="py-36"
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="px-6 sm:px-10 lg:px-72 text-white text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-10">
        Industries We&apos;ve  
          <span className="text-sky-300 text-3xl sm:text-4xl lg:text-6xl font-semibold text-left ml-4">
          Revolutionized
          </span>
        </h2>
        <p className="px-6 sm:px-10 lg:px-72 text-white text-xl sm:text-sm lg:text-xl font-normal text-left mb-10">
        AKC Link Tech web development services expertise spans across industries, delivering tailored solutions that drive impact and innovation.
        </p>
        <Swiper />
      </div>

      <div className="py-32">
        <FAQ />
      </div>

      <div
            style={{
              backgroundImage: `
                radial-gradient(circle at left center, #7dd3fc 5%, transparent 50%), 
                radial-gradient(circle at right center, #7dd3fc 5%, transparent 50%)`,
              backgroundColor: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className="text-center"
          >
        <p className="text-xl sm:text-sm lg:text-xl font-normal font-sans mb-6 text-black">
        Ready to Light the Fuse?
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-sans mb-6 text-black">
        Let&apos;s Cut to The Chase 
          <span className="py-5 block"></span>
        </h2>
      </div>

      <div className="py-36"></div>
      <div
        style={{
          backgroundImage:
            "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;
