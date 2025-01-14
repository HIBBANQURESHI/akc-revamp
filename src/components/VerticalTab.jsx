import { useState } from "react";
import { FaSwift, FaAndroid, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiKotlin, SiReact, SiVueDotJs, SiFlutter, SiUnity, SiMysql, SiMongodb, SiGooglecloud, SiDjango, SiFirebase } from "react-icons/si";
import { DiAngularSimple, DiJava, DiPostgresql } from "react-icons/di";


export default function VerticalTab() {
  const [activeTab, setActiveTab] = useState(1);
 
  const tabs = [
    { id: 1, label: "Mobile Apps" },
    { id: 2, label: "Web Platforms" },
    { id: 3, label: "Cross Platforms" },
    { id: 4, label: "Games" }, 
    { id: 5, label: "Database" },
    { id: 6, label: "Cloud & DevOps" },
  ];

  const content = {
    1: {
      title: "Mobile Apps",
      sections: [
        {
          platform: "iOS",
          technologies: [
            { name: "Swift", icon: <FaSwift /> },
            { name: "UI Kit", icon: <FaSwift /> },
            { name: "RxSwift", icon: <FaSwift /> },
          ],
        },
        {
          platform: "Android",
          technologies: [
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "Java", icon: <DiJava /> },
            { name: "MVVM", icon: <FaAndroid /> },
          ],
        },
      ],
    },
    2: {
      title: "Web Platforms",
      sections: [
        {
          platform: "Frontend",
          technologies: [
            { name: "React", icon: <SiKotlin /> },
            { name: "Vue", icon: <SiKotlin /> },
            { name: "Angular", icon: <SiKotlin /> },
          ],
        },
        {
          platform: "Backend",
          technologies: [
            { name: "Node.js", icon: <SiKotlin /> },
            { name: "Django", icon: <SiKotlin /> },
          ],
        },
      ],
    },
    
    3: {
      title: "Cross Platforms",
      sections: [
        {
          platform: "Frameworks",
          technologies: [
            { name: "Flutter", icon: <SiFlutter /> },
            { name: "React Native", icon: <SiReact /> },
          ],
        },
      ],
    },
    4: {
      title: "Games",
      sections: [
        {
          platform: "Engines",
          technologies: [
            { name: "Unity", icon: <SiUnity /> },
          ],
        },
      ],
    },
    5: {
      title: "Database",
      sections: [
        {
          platform: "SQL Databases",
          technologies: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <DiPostgresql /> },
          ],
        },
        {
          platform: "NoSQL Databases",
          technologies: [
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "Firebase", icon: <SiFirebase /> },
          ],
        },
      ],
    },
    6: {
      title: "Cloud & DevOps",
      sections: [
        {
          platform: "Cloud Providers",
          technologies: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Google Cloud", icon: <SiGooglecloud /> },
          ],
        },
        {
          platform: "DevOps Tools",
          technologies: [
            { name: "Docker", icon: <FaDocker /> },
          ],
        },
      ],
    },
  };

  return (
    <section className="technology overflow-x-hidden sm:overflow-x-auto">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
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
                    activeTab === tab.id ? "font-bold text-black bg-sky-200" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[70%] lg:w-[78.5%] p-6">
            {content[activeTab] && (
              <div>
                <h3 className="text-2xl font-bold mb-6">{content[activeTab].title}</h3>
                {content[activeTab].sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-xl font-semibold mb-4">{section.platform}</h4>
                    <div className="flex flex-wrap gap-4">
                      {section.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="group flex items-center gap-2 p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                        >
                          <span className="text-xl">{tech.icon}</span>
                          <span className="font-medium group-hover:font-bold">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
