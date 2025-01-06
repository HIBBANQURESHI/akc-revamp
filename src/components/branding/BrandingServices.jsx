import React from "react";

const BrandingServices = () => {
    const services = [
        {
          title: "Brand Strategy Consulting",
          description: "Get expert guidance to define your brand's vision, mission, and values for a successful market presence.",
        },
        {
          title: "Custom Logo Design",
          description: "Create unique and memorable logos that represent your brand identity and resonate with your target audience.",
        },
        {
          title: "Brand Identity Design",
          description: "Develop cohesive brand identities with logos, color schemes, typography, and visuals that reflect your core values.",
        },
        {
          title: "Ecommerce Branding",
          description: "Design a strong visual identity for your ecommerce platform that builds trust and enhances customer experience.",
        },
        {
          title: "Brand Guidelines Development",
          description: "Establish clear and detailed brand guidelines to ensure consistency across all marketing materials and channels.",
        },
        {
          title: "Packaging Design",
          description: "Create eye-catching and functional packaging that strengthens your brand’s message and attracts customers.",
        },
        {
          title: "Social Media Branding",
          description: "Design social media profiles, cover images, and post templates that align with your brand’s visual identity.",
        },
        {
          title: "Content Strategy & Creation",
          description: "Develop a content strategy that complements your branding and engages your target audience effectively.",
        },
        {
          title: "Staff Augmentation for Branding Projects",
          description: "Access skilled branding experts and designers on demand to bring your brand vision to life.",
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

export default BrandingServices;
