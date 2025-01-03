import React, { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: 'Ideate',
    description:
      'We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.',
    image: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Design',
    description:
      'Crafting a minimal viable product (MVP) that balances design with core functionality, maximizing value and user satisfaction.',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Develop',
    description:
      'Building robust, scalable solutions with a focus on quality and precision to ensure seamless performance and adaptability.',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Deliver',
    description:
      'Ensuring timely delivery of a polished product, ready to drive impactful results and meet your business objectives.',
    image: 'https://images.pexels.com/photos/3184410/pexels-photo-3184410.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Development = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleScroll = () => {
    const section = document.getElementById('development-section');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
      const scrollRatio = (windowHeight - sectionTop) / sectionHeight;
      const stepIndex = Math.min(
        Math.floor(scrollRatio * steps.length),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="development-section"
      className="relative py-20 min-h-screen bg-black text-white"
    >
      <div className="flex max-w-7xl mx-auto">
        {/* Left Content - Steps */}
        <div className="flex-1 pr-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`mb-10 transition-opacity duration-300 ${
                activeStep === index ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <h3 className="text-green-500 text-lg font-bold">
                {`0${step.id}/04`}
              </h3>
              <h2 className="text-4xl font-bold">{step.title}</h2>
              <p className="text-lg mt-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Right Content - Image and Progress Bar */}
        <div className="relative flex-1 flex justify-end">
          {/* Progress Bar */}
          <div className="absolute right-10 top-0 h-full w-1 bg-gray-700">
            <div
              className="bg-green-500 w-full transition-all duration-300"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          {/* Image */}
          <div className="w-96 h-96 overflow-hidden rounded-xl">
            <img
              src={steps[activeStep]?.image}
              alt={steps[activeStep]?.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
