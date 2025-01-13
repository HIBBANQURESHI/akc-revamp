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
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-left mb-6 text-black">
        Our Journey of Building Success
      </h2>

      {/* Subheading */}
      <p className="text-2xl lg:text-2xl sm:text-xl md:text-2xl text-left font-extralight mb-12 max-w-3xl">
        We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
      </p>

{/* Counter Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
{/* Completed Projects */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-blue-500">
  <h3 className="text-7xl font-semibold text-black transition-colors duration-300 group-hover:text-blue-500">
    <Counter endValue={1300} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-blue-500">+</span>
  </h3>
  <p className="text-3xl font-normal text-black transition-all duration-300 group-hover:underline">
    Completed Projects
  </p>
</div>

{/* Talented Cubixians */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-blue-500">
  <h3 className="text-7xl font-semibold text-black transition-colors duration-300 group-hover:text-blue-500">
    <Counter endValue={350} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-blue-500">+</span>
  </h3>
  <p className="text-3xl font-normal text-black transition-all duration-300 group-hover:underline">
    Talented Cubixians
  </p>
</div>
{/* Satisfied Clients */}
<div className="text-left bg-white p-6 rounded-xl transition-all duration-300 group hover:text-blue-500">
  <h3 className="text-7xl font-semibold text-black transition-colors duration-300 group-hover:text-blue-500">
    <Counter endValue={600} duration={200} />
    <span className="text-black transition-colors duration-300 group-hover:text-blue-500">+</span>
  </h3>
  <p className="text-3xl font-normal text-black transition-all duration-300 group-hover:underline">
    Satisfied Clients
  </p>
</div>
</div>

    </div>
  </section>
);
};
export default Journey;