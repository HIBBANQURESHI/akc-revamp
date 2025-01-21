import React from "react";

const cardsData = [
  { heading: "Finance", paragraph: "Banking was boring until we crashed the party. Our brand development services turned stuffy financial institutions into sleek, money-moving machines that users want to swipe right on." },
  { heading: "Healthcare", paragraph: "We took the 'ache' out of healthcare branding. Our corporate brand development services transformed clinical coldness into caring connections." },
  { heading: "Media", paragraph: "Through our brand strategy development services, we've turned media companies from channel surfers into wave makers." },
  { heading: "Telecom", paragraph: "We made connectivity look attractive. Yeah, you read that right. Our business branding services turned signal bars into style bars." },
  { heading: "Logistics", paragraph: "Shipping and logistics? Our brand marketing services turned tracking numbers into brand trackers. We make moving stuff look cooler than a penguin in sunglasses." },
  { heading: "Automotive", paragraph: "Vroom! That's the sound of our brand identity development services, taking your automotive brand from 0 to 60 in style. We design brands that make car guys drool." },
  { heading: "Real Estate", paragraph: `We turned "location" into "LOOK AT THAT!" Our expert designers make property brands that sell themselves. Even the "For Sale" signs get jealous.` },
  { heading: "Education", paragraph: "Our brand strategy service turned academic institutions from dusty libraries into dynamic learning launchpads. Knowledge is power, but great branding? That's our superpower." },
  { heading: "Energy", paragraph: "We energize the energy sector, turning power companies into powerhouse brands. Whether it’s renewable energy or traditional power, we make brands that radiate innovation and strength." },
];

export default function BrandingSwiper() {
  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6 flex flex-col justify-between">
              <h6 className="text-2xl sm:text-3xl text-white font-semibold mb-2">{card.heading}</h6>
              <p className="text-base sm:text-lg text-white">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
