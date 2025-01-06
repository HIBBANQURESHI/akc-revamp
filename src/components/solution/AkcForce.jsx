import React from 'react'

const AkcForce = () => {
  
  const cardData = [
    {
      title: "Win the War for Talent",
      description:
        "Attract and retain top performers with an optimized employee experience powered by HappyForce.",
      tags: [],
    },
    {
      title: "Boost Productivity 10-20%",
      description:
        "Real-time insights help administrators and managers maximize workforce output like never before.",
      tags: [],
    },
    {
      title: "Proven ROI",
      description:
        "Leading organizations report recouping their investment within 6 months through increased efficiency.",
      tags: [],
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-yellow-500 rounded-lg p-6 hover:border-4 hover:border-blue-500 transition-all duration-300 min-h-[200px]"
        >
          <h3 className="text-2xl lg:text-4xl sm:text-xl md:text-2xl text-left font-bold mb-4">{card.title}</h3>
          <p className=" text-2xl lg:text-2xl sm:text-xl md:text-2xl text-left text-black mb-4 font-light font-sans">{card.description}</p>
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-2xl lg:text-sm sm:text-sm md:text-sm text-left text-sm text-black bg-white rounded-full border border-blue-500 font-normal"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>

    
  )
}

export default AkcForce;
