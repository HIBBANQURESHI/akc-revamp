import ContactForm from '@/components/ContactForm'
import Navbar from "@/components/DesktopMenu";
import Footer from "@/components/Footer";
import { motion } from "framer-motion"; // Import framer-motion
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const index = () => {

    useEffect(() => {
      // Initialize AOS library
      AOS.init({ duration: 700 });
    }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className='py-40'>
          <ContactForm />
          </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6" data-aos="fade-down">Pull The Trigger!</p>
          <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6" data-aos="fade-down">
            Let&apos;s bring your
            <span className="py-5 block" data-aos="fade-down">vision to life.</span>
          </h2>
        </motion.div>
      </div>
      <div className="py-36"></div>
      <motion.div
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default index;
