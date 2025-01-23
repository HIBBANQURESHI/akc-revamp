import { useState } from "react";
import { FaSwift, FaAndroid, FaAws, FaDocker } from "react-icons/fa";
import {
  SiKotlin,
  SiFlutter,
  SiUnity,
  SiMysql,
  SiMongodb,
  SiGooglecloud,
  SiFirebase,
} from "react-icons/si";
import { DiJava, DiPostgresql } from "react-icons/di";
import { SiReact } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";


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
      title: "",
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
          platform: "",
          technologies: [
            { name: "Kotlin", icon: <SiKotlin /> },
            { name: "Java", icon: <DiJava /> },
            { name: "MVVM", icon: <FaAndroid /> },
          ],
        },
      ],
    },
    2: {
      title: "",
      sections: [
        {
          platform: "Frontend",
          technologies: [
            { name: "React", icon: <SiReact /> },
            { name: "Vue", icon: <SiVuedotjs /> },
            { name: "Angular", icon: <DiAngularSimple /> },
          ],
        },
        {
          platform: "Backend",
          technologies: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Django", icon: <SiDjango /> },
          ],
        },
      ],
    },
    3: {
      title: "",
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
      title: "",
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
      title: "",
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
      title: "",
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
    <section className="technology">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300 py-5">
          {/* Tab List */}
          <div className="w-full md:w-1/4 lg:w-1/5 border-r border-gray-300 md:overflow-auto">
            <div role="tablist" aria-orientation="vertical" className="flex md:block overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`block py-5 px-4 text-2xl font-normal rounded-3xl text-left whitespace-nowrap ${
                    activeTab === tab.id
                      ? "font-semibold text-black bg-gradient-to-r from-sky-200 to-white"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/4 lg:w-4/5 p-4">
            {content[activeTab] && (
              <div>
                <h3 className="text-2xl font-bold mb-6">{content[activeTab].title}</h3>
                {content[activeTab].sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h4 className="text-4xl font-normal mb-4">{section.platform}</h4>
                    <div className="flex flex-wrap gap-4">
                      {section.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="group flex items-center gap-2 p-3 rounded-3xl w-40 bg-gray-100 hover:bg-gray-100 transition"
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
