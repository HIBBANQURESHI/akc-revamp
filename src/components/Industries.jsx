import React from 'react'

const Industries = () => {
  
  const cardData = [
    {
      title: "Automotive",
      description:
        "We’ve revolutionized the automotive landscape. When our top web designers meet automotive excellence, you get websites that sell.",
      tags: ["Fleet Management", "Telematics", "Dealer Portal", "Inventory", "CRM"],
    },
    {
      title: "Finance",
      description:
        "As affordable American web developers, we've engineered high-performance finance platforms that process transactions faster than you can say profit.",
      tags: ["Payment Gateways", "CRM", "Analytics", "Loan Management"],
    },
    {
      title: "Real Estate",
      description:
        "Looking to turn property browsers into buyers? Our USA best designers have mastered the art of virtual property showcasing. ",
      tags: ["Listings", "CRM", "VR Tours", "Tenant Management", "Invest Annually"],
    },
    {
      title: "Hospitality",
      description:
        "Our Affordable digital marketing agency solutions have helped hotels drive occupancy rates up even in off-seasons.",
      tags: ["Booking", "Guest Management", "CRM", "Events", "Loyalty"],
    },
    {
      title: "Education",
      description:
        "As professional app developers in the education sector, we're writing the future of learning. We've built learning management systems.",
      tags: ["VR Classroom", "Student Portal", "Analytics", "CRM", "Exams"],
    },
    {
      title: "Healthcare",
      description:
        "Our web development agency expertise meets healthcare precision to create solutions that don't just meet standards, they set them.",
      tags: ["Telehealth", "eRx", "EMR", "Remote Monitoring", "Patient Portal"],
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-6 py-48'>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">Want to Know How We've Flipped Industries on Their Heads?</h2>
      <p className="text-xl sm:text-2xl lg:text-2xl font-normal mb-12 max-w-3xl">
      Hold onto your hats because we shake things up across industries. From AKC Link Tech web development to AKC Link Tech app development, we're leaving our mark across
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:border-4 hover:border-sky-300 transition-all duration-300 min-h-[200px]"
          >
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-4">{card.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm sm:text-base lg:text-sm text-left text-black bg-white rounded-full border border-blue-500 font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
