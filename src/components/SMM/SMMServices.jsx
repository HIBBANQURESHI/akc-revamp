import React from "react";

const SMMServices = () => {
    const services = [
        {
          title: "Social Media Strategy",
          description: "Develop tailored social media strategies to boost engagement and brand visibility."
        },
        {
          title: "Content Creation",
          description: "Create engaging and shareable content that resonates with your audience across platforms."
        },
        {
          title: "Social Media Management",
          description: "Manage and optimize your social media presence with consistent posting and active engagement."
        },
        {
          title: "Paid Social Campaigns",
          description: "Run targeted ad campaigns to increase reach, drive traffic, and boost conversions."
        },
        {
          title: "Brand Monitoring",
          description: "Monitor your brand’s online presence and manage reputation with real-time tracking."
        },
        {
          title: "Influencer Marketing",
          description: "Collaborate with influencers to expand reach and build trust with your target audience."
        },
        {
          title: "Social Media Analytics",
          description: "Track performance and optimize campaigns with in-depth social media analytics."
        },
        {
          title: "Community Management",
          description: "Foster strong relationships with your audience through active community engagement."
        },
        {
          title: "Staff Augmentation for SMM Projects",
          description: "Access skilled SMM professionals to elevate your social media marketing efforts."
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

export default SMMServices;
