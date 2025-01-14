import React, { useState } from "react";

export default function VerticalTab() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Mobile Apps", content: "Content for Mobile Apps" },
    { id: 2, label: "Web Platforms", content: "Content for Web Platforms" },
    { id: 3, label: "Cross Platforms", content: "Content for Cross Platforms" },
    { id: 4, label: "Games", content: "Content for Games" },
    { id: 5, label: "Database", content: "Content for Database" },
    { id: 6, label: "Cloud & DevOps", content: "Content for Cloud & DevOps" },
  ];

  return (
    <section className="technology overflow-x-hidden sm:overflow-x-auto">
      <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
        <div className="max-w-3xl xl:max-w-4xl">
          <h2 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl">
            Technologies we use.
          </h2>
          <p className="pt-6 lg:pt-[2.375rem] text-lg xl:text-xl">
            Hire from our pool of 350+ specialized experts in web, mobile, and
            software engineering, specializing in the latest technologies and
            frameworks, ready to scale your development teams effortlessly.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
          {/* Tab List */}
          <div className="w-full md:w-[30%] lg:w-[21.5%] border-r border-gray-300">
            <div role="tablist" aria-orientation="vertical" className="flex md:block">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`block py-5 px-7 font-medium text-left ${
                    activeTab === tab.id ? "font-bold text-black" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Panels */}
          <div className="w-full md:w-[70%] lg:w-[78.5%] p-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                hidden={activeTab !== tab.id}
                className={activeTab === tab.id ? "block" : "hidden"}
              >
                <h4 className="text-xl font-bold mb-4">{tab.label}</h4>
                <p>{tab.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
