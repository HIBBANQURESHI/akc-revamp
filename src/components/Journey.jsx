import React, { useState, useEffect } from 'react';
const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(endValue / duration);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        clearInterval(interval);
        setCount(endValue);
      } else {
        setCount(start);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [endValue, duration]);
  return <span>{count.toLocaleString()}</span>;
};
const Journey = () => {
  return (
    <section className="py-36 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      {/* Main heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">
        Our Journey Towards Being the Top Web Designers
      </h2>

      {/* Subheading */}
      <p className="text-2xl lg:text-2xl sm:text-xl md:text-2xl text-left font-normal mb-12 max-w-3xl">
      We are full-stack, affordable American web developers who have started their journey towards being the best marketing experts in the USA. Ready to turn your spreadsheets into dollar signs? Pull up a seat at the winners' table; we've saved you a spot.
      </p>

{/* Counter Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
{/* Completed Projects */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-sky-300">
  <h3 className="text-7xl font-normal text-black transition-colors duration-300 group-hover:text-sky-300">
  <span className="text-black transition-colors duration-300 group-hover:text-text-sky-300">$</span>
    <Counter endValue={3.4} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-text-sky-300">M</span>
  </h3>
  <p className="text-3xl font-light text-black transition-all duration-300 group-hover:underline">
    Client Revenue
  </p>
</div>

{/* Talented Cubixians */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-sky-300">
  <h3 className="text-7xl font-normal text-black transition-colors duration-300 group-hover:text-sky-300">
    <Counter endValue={963} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-sky-300">+</span>
  </h3>
  <p className="text-3xl font-light text-black transition-all duration-300 group-hover:underline">
    Transformed Business
  </p>
</div>
{/* Satisfied Clients */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-sky-300">
  <h3 className="text-7xl font-normal text-black transition-colors duration-300 group-hover:text-sky-300">
    <Counter endValue={99.99} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-sky-300">%</span>
  </h3>
  <p className="text-3xl font-light text-black transition-all duration-300 group-hover:underline">
    Client Retantion Rate
  </p>
</div>
</div>

    </div>
  </section>
);
};
export default Journey;