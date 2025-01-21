import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "../components/DesktopMenu";
import Journey from "@/components/Journey";
import Slider from "@/components/Slider";
import Development from "@/components/Development";
import VerticalTab from "@/components/VerticalTab";
import Testimonial from "@/components/Testimonial";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div>
        <Journey />
      </div>
      <Slider />
      <div className="py-9">
        <Development />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mt-9 text-sky-300 max-w-7xl mx-auto px-6 font-sans">
        Technologies That Power Our Digital Brilliance
        </h1>
        <p className="text-2xl lg:text-2xl sm:text-xl md:text-2xl text-left font-normal mt-12 max-w-7xl mx-auto px-6 font-sans">
        We don’t just ride the tech wave, we make our splash. At AKC Link Tech Digitizing, we bind tools to make projects that stop the scroll. From traditional print that pops to digital campaigns that dominate, we're your full-service creative powerhouse with the right tools. 
        </p>
        <div className="py-32 mx-auto px-6">
          <VerticalTab />
        </div>
        <div
          className="py-36 mt-72 text-center relative"
          style={{
            backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
            backgroundColor: "#000",
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="mt-0 text-6xl font-semibold font-sans text-white">
           Still in Doubt? Hear It from Our  <span className="text-sky-300">Happy Clients</span>
          </h2>
          <p className="text-white text-lg py-8 font-sans font-normal ">
          Don’t just take our word for it hear from the people who’ve trusted AKC to turn their business upside down (For the good).
          </p>
          <Testimonial />
        </div>
        <div>
          <Industries />
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
          <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6">
          Ready to Light the Fuse?
          </p>
          <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6">
          Let's Cut to The Chase 
            <span className="py-5 block">vision to life.</span>
          </h2>
        </div>
      </div>
      <div className="py-36"></div>
      <div
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
