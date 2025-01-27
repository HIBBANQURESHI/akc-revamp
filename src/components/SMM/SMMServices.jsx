import React from "react";

const SMMServices = () => {
    const services = [
        {
          title: "Social Media Strategy",
          description: "Our social media marketing management services don't just post and pray—we calculate, calibrate, and dominate. Think chess, but with memes."
        },
        {
          title: "Paid Social Media Campaigns",
          description: "Our paid social media marketing services make every penny work harder than a squirrel at a nut factory. ROI is so good that your accounts stay happy."
        },
        {
          title: "Social Media Analysis",
          description: "Numbers tell stories, but our paid social media marketing services make them tell bestsellers. We turn data into dollars while others are still counting likes."
        },
        {
          title: "Content Creation",
          description: "Forget cheap social media marketing services that spam feeds. We create content that makes thumbs stop and eyes pop. Because in the scroll-or-die world, mediocre is just another word for invisible."
        },
        {
          title: "Brand Monitoring",
          description: "Our small business social media marketing services watch your brand like a hawk with insomnia. We catch conversations before they become crises."
        },
        {
          title: "Community Management ",
          description: "Through our small business social media marketing services, we turn comment sections into fan clubs. Trolls? We turn them into loyal customers."
        },
        {
          title: "Social Media Management",
          description: "We are the social media marketing agency that never sleeps. While others are scheduling tomorrow's post, we plan next month's viral campaign."
        },
        {
          title: "Influencer Marketing",
          description: "Our social media marketing consulting services don't just find influencers – we find soulmates for your brand. Swipe right on success."
        },
        {
          title: "Staff Augmentation for SMM Projects",
          description: "Need to inject some viral DNA into your team? Our social media dynamos are ready to rock."
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

export default SMMServices;
