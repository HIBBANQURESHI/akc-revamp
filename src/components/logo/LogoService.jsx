import React from "react";

const LogoServices = () => {
  const services = [
    {
      title: "Comprehensive Logo Design Services",
      description: "Your brand deserves more than a pretty symbol. Our brand identity development services transform abstract ideas into visual stories that captivate and convert. We're talking about designs that capture markets.",
    },
    {
      title: "Logo Design Consulting",
      description: "Through our brand strategy development services, we explore your industry, audience, and aspirations. We're not just designers but strategic partners who understand that every pixel must serve a purpose.",
    },
    {
      title: "Ecommerce Logo Design",
      description: "In the digital marketplace, you have 0.05 seconds to make an impression. Our logo branding design services ensure you nail it every time. We create logos that look as good on a billboard as on a mobile screen.",
    },
    {
      title: "Logo Animation",
      description: "Static is so 2010. Our professional logo design services bring your brand to life with a motion that captures user attention and tells your story. From subtle movements to full-character animation, we make your brand dance.",
    },
    {
      title: "Custom Logo Design",
      description: "We deliver precision when you need custom logo design services that break the mold. There are no templates or recycled concepts—just pure, original creativity backed by strategic thinking. Each design is as unique as your fingerprint.",
    },
    {
      title: "Logo Design for Apps and Websites",
      description: "Through our brand marketing services, we ensure your digital presence gets all the attention. Whether it's an app icon that begs to be tapped or a website header that stops the scroll, we've got you covered.",
    },
    {
      title: "Brand Identity Design",
      description: "Our brand strategy service goes beyond logos. We create comprehensive visual systems that work harmoniously across all platforms. Colors, typography, imagery – every element syncs with your brand's niche.",
    },
    {
      title: "Minimalist Logo Design",
      description: "In a world of noise, clarity wins. Our brand management services turn simplicity into your superpower. Less isn't just more—it's memorable, and minimalist design never goes out of fashion.",
    },
    {
      title: "Staff Augmentation for Design Projects",
      description: "Do you need to modify your creative team? Our business branding services experts integrate seamlessly with your existing workflow, bringing fresh perspectives and proven expertise.",
    },
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-black mb-4">{service.title}</h3>
            <p className="text-black text-3xl sm:text-4xl lg:text-2xl flex-grow py-7">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoServices;
