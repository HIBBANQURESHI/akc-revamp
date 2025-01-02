import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 bg-black"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.ctfassets.net/mi665aivb0at/xRSpukKuiLPVNxfEnAsTp/a6a1c03c9cb07431e91ec93e10886b63/Cubix_Home_Hero_Video.webm"
          type="video/webm"
        />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 py-32 md:py-64">
        <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-4 text-left py-22 mr-64">
          We are a{' '}
          <span className="text-yellow-500 text-left text-5xl sm:text-5xl lg:text-6xl">Software</span>{' '}
          <br/>
          <span className="text-yellow-500 text-left text-5xl sm:text-5xl lg:text-6xl">Development</span>{' '}
          <br/>
          Company.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-left mr-32 text-gray-300 py-16">
          We are your trusted development partner with just one goal<br/> in focus: 
          to build products that generate a lasting,<br/> profitable impact.
        </p>
      </div>
    </section>
  );
};

export default Hero;
