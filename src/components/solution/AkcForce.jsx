import React from 'react'

const AkcForce = () => {
  
  const cardData = [
    {
      title: "Win the Talent Game",
      description:
        "Attract top performers like a magnet. Our platform makes the employee experience so good, they'll think they've hit the career jackpot.",
      tags: [],
    },
    {
      title: "Sky-rocket Productivity",
      description:
        "Watch your team's output soar by fine amount. It's like having a crystal ball for workplace efficiency.",
      tags: [],
    },
    {
      title: "Put Wings on ROI",
      description:
        "Leading organizations are seeing returns faster than a boomerang. This would be a push towards your success.",
      tags: [],
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-black/80 rounded-lg p-6 hover:border-4 hover:border-sky-300 transition-all duration-300 min-h-[200px]"
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
