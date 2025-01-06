import ContactForm from '@/components/ContactForm'
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import React, {useEffect} from 'react'

const index = () => {

      useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000, once: false });
    
        // Refresh AOS on scroll
        const refreshAOS = () => AOS.refresh();
        window.addEventListener("scroll", refreshAOS);
    
        // Cleanup event listener on unmount
        return () => window.removeEventListener("scroll", refreshAOS);
      }, []);


  return (
    <>
    <div>
          <Navbar />
          <div className='py-40'> <ContactForm /> </div>
          <div className="text-center" data-aos="fade-down" data-aos-duration="1000">
              <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6"> Pull The Trigger! </p>
              <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6">
                  Let's bring your
                  <span className="py-5 block">vision to life.</span>

              </h2>
          </div>
            </div><div className="py-36"></div><div style={{
                backgroundImage: "radial-gradient(circle at left center, #fbbf24 5%, transparent 50%)",
                backgroundColor: "#3b82f6",
                backgroundSize: "100% 100%",
            }}>
              <Footer />
        </div>
    </>
    
  )
}

export default index
