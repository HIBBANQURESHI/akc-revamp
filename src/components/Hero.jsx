import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const isVerySmallScreen = useMediaQuery({ query: '(max-width: 425px)' });

  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        autoPlay
        loop
        muted
      >
        <source
          src="https://videos.ctfassets.net/mi665aivb0at/xRSpukKuiLPVNxfEnAsTp/a6a1c03c9cb07431e91ec93e10886b63/Cubix_Home_Hero_Video.webm"
          type="video/webm"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-left text-white space-y-0 max-w-3xl">
          <h1
            className={`font-bold ${
              isVerySmallScreen
                ? 'text-3xl'
                : isSmallScreen
                ? 'text-7xl'
                : 'text-7xl'
            }`}
          >
            Don't Blend In  {' '}
            <span className="text-sky-300">Stand Out with AKC</span>
            <span className="text-white"></span> <br />
          </h1>
          <div className='py-8'></div>
          <p
            className={`leading-relaxed ${
              isVerySmallScreen
                ? 'text-sm max-w-xs'
                : isSmallScreen
                ? 'text-base max-w-md'
                : 'text-3xl'
            }`}
          >
            With the No#1 Website Design & Development Agency, your brand breaks the mold. Ready to turn those spreadsheets into gold mines? Let's turn your business into a household name.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
