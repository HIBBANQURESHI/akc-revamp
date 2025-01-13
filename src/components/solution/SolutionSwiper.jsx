import React from "react";

const cardsData = [
  { heading: "Time Log", paragraph: "Track time accurately with real-time logs for attendance validation and monitoring of employees." },
  { heading: "Training", paragraph: "Enhance skills through seamless training features for effective employee development strategies." },
  { heading: "Events", paragraph: "Efficiently manage events, assign roles, and support people-centric activities with HappyForce." },
  { heading: "Timeline", paragraph: "Stay updated on workplace activities and engage in discussions like social media platforms." },
  { heading: "Records", paragraph: "Track performance, manage records and process approval effortlessly." },
  { heading: "Dashboard", paragraph: "Empower board members with access control and geo-tracking for employee validation processes." },
  { heading: "Roster", paragraph: "Customize work shifts, manage rosters, and handle rotations efficiently with HappyForce." },
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
