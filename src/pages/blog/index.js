import Navbar from '@/components/DesktopMenu';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '@/components/Footer';

const index = () => {
    const blogData = [
        {
            imageUrl: "https://images.pexels.com/photos/16027813/pexels-photo-16027813/free-photo-of-chat-gpt-welcome-screen-on-computer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Artificial Intelligence",
            date: "29 Jan, 2025",
            title: "How to Build an LLM Like ChatGPT?",
            description: "China has made quite a sudden impact in the global AI ecosystem...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Web Development",
            date: "25 Jan, 2025",
            title: "Building a Modern Web App",
            description: "Learn the latest techniques in web development...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/5426401/pexels-photo-5426401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Mobile Apps",
            date: "20 Jan, 2025",
            title: "The Future of Mobile",
            description: "Exploring the trends in mobile app development...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Design",
            date: "15 Jan, 2025",
            title: "Creative Design Principles",
            description: "Tips for creating stunning designs...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Technology",
            date: "10 Jan, 2025",
            title: "The Impact of Technology",
            description: "How technology is changing our lives...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Business",
            date: "05 Jan, 2025",
            title: "Strategies for Success",
            description: "Key strategies for achieving business growth...",
        },
        {
            imageUrl: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Business",
            date: "05 Jan, 2025",
            title: "Strategies for Success",
            description: "Key strategies for achieving business growth...",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);

    return (
        <div className='bg-white text-black'>
            <Navbar />

            <div className='max-w-7xl mx-auto px-6 py-48'>
                <h2 className="text-3xl sm:text-4xl lg:text-8xl font-semibold text-left mb-6 text-sky-300">Fueling Growth <br /> through<span className="text-3xl sm:text-4xl lg:text-8xl font-semibold text-left mb-6 text-black"> Innovation <br /> and Creativity</span>
                </h2>
                <p className="text-xl sm:text-2xl lg:text-2xl py-8 font-normal mb-12">
                    Hold onto your hats because we shake things up across industries. From AKC web development to AKC app development, we're leaving our mark across
                </p>
            </div>

            <div className="container mx-auto p-4 bg-white min-h-screen px-6 max-w-7xl mx-auto">
                <section className="mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-left mb-6 text-black">Recent blogs</h2>
                    <div className="bg-white rounded-3xl p-6 py-16">
                        <div className="flex items-center mb-4">
                            <Image
                                src={blogData[0].imageUrl}
                                alt="Blog Preview"
                                width={450}
                                height={350}
                                className="mr-4 rounded-3xl"
                            />
                            <div className='bg-white text-black'>
                                <h3 className="text-sm sm:text-sm lg:text-sm font-light text-left mb-6 text-black px-16">{blogData[0].category}.<span className="text-gray-500 px-2">{blogData[0].date}</span></h3>
                                <p className="text-3xl sm:text-2xl lg:text-4xl font-light text-left mb-6 text-black px-16">{blogData[0].title}</p>
                                <p className="text-sm sm:text-sm lg:text-sm font-light text-left mb-6 text-black px-16">
                                    {blogData[0].description}
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='bg-white text-black'>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold  text-left mb-6 text-black">Our articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-16">
                        {blogData.slice(1).map((article, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden">
                                <Image
                                    src={article.imageUrl}
                                    alt={`Article ${index + 1}`}
                                    width={500}
                                    height={300}
                                    className="object-cover"
                                    data-aos="fade-right"
                                />
                                <div className="p-4">
                                    <h3 className="text-3xl sm:text-2xl lg:text-2xl font-light text-left mb-6 text-black">{article.title}</h3>
                                    <p className="text-sm sm:text-sm lg:text-sm font-light text-left mb-6 text-black">{article.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
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
          <p className="text-xl text-black sm:text-sm lg:text-xl font-normal font-sans mb-6" data-aos = "fade-down">
          Ready to Light the Fuse?
          </p>
          <h2 className="text-5xl text-black sm:text-md lg:text-7xl font-bold font-sans mb-6" data-aos = "fade-down">
          Let&apos;s Cut to The Chase 
            <span className="py-5 block" data-aos = "fade-down">vision to life.</span>
          </h2>
        </div>

        <div className="py-36 bg-white"></div>
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
    )
}

export default index;