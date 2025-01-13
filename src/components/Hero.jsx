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
        <div className="text-left text-white space-y-6 max-w-3xl">
          <h1
            className={`font-bold ${
              isVerySmallScreen
                ? 'text-3xl'
                : isSmallScreen
                ? 'text-4xl'
                : 'text-6xl'
            }`}
          >
            We are a{' '}
            <span className="text-yellow-500">Software</span> <br />
            <span className="text-yellow-500">Development</span> <br />
            Company.
          </h1>
          <p
            className={`leading-relaxed ${
              isVerySmallScreen
                ? 'text-sm max-w-xs'
                : isSmallScreen
                ? 'text-base max-w-md'
                : 'text-xl max-w-lg'
            }`}
          >
            We are your trusted development partner with just one goal in focus:
            to build products that generate a lasting, profitable impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
