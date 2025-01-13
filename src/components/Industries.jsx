import React from 'react'

const Industries = () => {
  
  const cardData = [
    {
      title: "Automotive",
      description:
        "Improve your vehicle management and enhance customer satisfaction with custom solutions.",
      tags: ["Fleet Management", "Telematics", "Dealer Portal", "Inventory", "CRM"],
    },
    {
      title: "Finance",
      description:
        "Get scalable solutions that improve the efficiency and security of your financial services.",
      tags: ["Payment Gateways", "CRM", "Analytics", "Loan Management"],
    },
    {
      title: "Real Estate",
      description:
        "Our real estate solutions streamline operations, simplifying property management and sales.",
      tags: ["Listings", "CRM", "VR Tours", "Tenant Management", "Invest Annually"],
    },
    {
      title: "Hospitality",
      description:
        "Get user-friendly solutions that enhance guest experiences and boost customer satisfaction.",
      tags: ["Booking", "Guest Management", "CRM", "Events", "Loyalty"],
    },
    {
      title: "Education",
      description:
        "Revolutionize ed-tech with solutions that boost student engagement and simplify learning.",
      tags: ["VR Classroom", "Student Portal", "Analytics", "CRM", "Exams"],
    },
    {
      title: "Healthcare",
      description:
        "Our solutions enhance healthcare by streamlining processes and improving patient care.",
      tags: ["Telehealth", "eRx", "EMR", "Remote Monitoring", "Patient Portal"],
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-6 py-48'>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-left mb-6 text-sky-300">Industries we serve.</h2>
      <p className="text-xl sm:text-2xl lg:text-2xl font-normal mb-12 max-w-3xl">
        With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.
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
