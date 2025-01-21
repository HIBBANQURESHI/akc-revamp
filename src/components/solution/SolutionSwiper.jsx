import React from "react";

const cardsData = [
  { heading: "Time Tracking", paragraph: "Remember when tracking attendance felt like solving a Rubik's cube blindfolded? Our real-time logs are so smooth that they make Swiss watches look complicated." },
  { heading: "Training", paragraph: "Watching paint dry is more exciting than most training programs – but not anymore. Our learning features turn employee development into a Netflix-worthy experience." },
  { heading: "Events", paragraph: "Company events used to be a headache wrapped in a migraine. Now? They're smoother than ever. From role assignments to RSVPs, we've made event planning so easy for you.  " },
  { heading: "Timeline", paragraph: `Stay in the loop, spark discussions, and build culture faster than you can say "team building." It's like having a water cooler that never runs dry.` },
  { heading: "Records", paragraph: "Our digital records system is like having a personal assistant with a photographic memory. It allows you to track performance, process approvals, and find documents immediately." },
  { heading: "Dashboard", paragraph: "Give your board members and managers the command center they deserve. Real-time insights, geo-tracking, and access controls make them feel like superheroes." },
  { heading: "Roster", paragraph: "Managing shifts used to be like playing chess in the dark. Our roster system makes it easier. Custom shifts, rotation management, and scheduling that practically handles itself." },
];

export default function SolutionSwiper() {
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-transparent border border-sky-300 shadow-lg rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-4 w-full max-w-[317.91px] h-auto flex flex-col justify-between">
              <h6 className="text-3xl text-white font-semibold mb-2">{card.heading}</h6>
              <p className="text-xl text-white">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
