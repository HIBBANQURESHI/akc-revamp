import React from "react";

const BrandingServices = () => {
    const services = [
        {
          title: "Brand Strategy Consulting",
          description: "Through our brand strategy development services, we don't just plan – we prophesy. Think of us as your brand's crystal ball, forecasting trends while others follow them.",
        },
        {
          title: "Ecommerce Branding",
          description: "Our business branding services make your digital presence pop like fireworks in the night sky. Because in the e-commerce jungle, bland is banned.",
        },
        {
          title: "Social Media Branding",
          description: "As American logo designers, we craft visual stories that stop the scroll and start the conversation. Your social media will not just exist—it will dominate.",
        },
        {
          title: "Custom Logo Design",
          description: "When you need custom logo design services that make competitors stare, we deliver. There are no templates or recycled ideas—just pure creative firepower that turns heads.",
        },
        {
          title: "Brand Guidelines Development",
          description: "Through our brand identity development services, we create bibles of visual brilliance. Every color, font, and pixel has a purpose.",
        },
        {
          title: "Brand Identity Design",
          description: "Our brand marketing services ensure your brand speaks with one voice, whether whispering to a startup or roaring from a billboard.",
        },
        {
          title: "Packaging Design",
          description: "From shelf to shopping cart, our professional logo design services make your products the ones customers can't resist picking up.",
        },
        {
          title: "Staff Augmentation",
          description: `Do you need to beef up your branding team? Our logo branding design services experts are ready to jump in faster than your competition can think "rebrand."`,
        },
      ];
      

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-xl sm:text-2xl lg:text-sm xl:text-3xl lg:text-left font-bold text-black mb-4">{service.title}</h3>
            <p className="text-black text-lg sm:text-xl lg:text-sm xl:text-xl py-7">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandingServices;
