import React from "react";

const MobileService = () => {
  const services = [
    {
      title: "Custom Android Apps",
      description: `Do you think your app idea is too wild for Android? Think again. As a top mobile app development company, we've turned "impossible" into "just another Tuesday".`,
    },
    {
      title: "Full-cycle Development",
      description: `From "what if" to "wow," our mobile app development services provider team handles everything. Our application development services cover it all, from initial wireframes to post-launch optimization.`,
    },
    {
      title: "UI/UX Design",
      description: "Pretty is nice, but profitable is what you need. With our mobile app development service provider team, we're talking swipes smoother than butter and transitions that feel like mind-reading.",
    },
    {
      title: "Security & Compliance",
      description: "Do you need bank-grade security for your startups? That's our sweet spot for custom mobile app development. While others add security as an afterthought, we make it the foundation.",
    },
    {
      title: "Android for All Platforms",
      description: "As the best cross-platform app development company for tablets, phones, and wearables (you name it), we make your app feel native everywhere. We've covered your users, from budget phones to flagship folding devices.",
    },
  ];

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-center text-sky-300 mb-10">
      Want Your Competitors to Download Your App? Our Application Development Services is Here
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-left p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-4xl  font-bold text-black mb-4">
              {service.title}
            </h3>
            <p className="text-black text-3xl sm:text-4xl lg:text-2xl flex-grow py-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileService;
