import React from "react";

const MobileService = () => {
  const services = [
    {
      title: "Custom Android Apps",
      description: "We create apps that solve real business problems. Every solution is tailored to meet your specific needs and deliver the features your users expect.",
    },
    {
      title: "Full-cycle Development",
      description: "From initial strategy and planning to deployment and support, we guide your app’s journey every step of the way. Our team manages everything, ensuring quality and efficiency.",
    },
    {
      title: "UI/UX Design",
      description: "We craft intuitive interfaces with a focus on usability and user engagement. Our design team works to create visually stunning and easy-to-navigate apps.",
    },
    {
      title: "Security & Compliance",
      description: "Our developers are experts in Android security protocols. We ensure your app meets Google Play compliance and stays protected against potential threats.",
    },
    {
      title: "Android for All Platforms",
      description: "Whether it's mobile phones, tablets, Android TV, or wearable devices, we have experience across all Android platforms to ensure your app reaches the right audience.",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-gray-700 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileService;
