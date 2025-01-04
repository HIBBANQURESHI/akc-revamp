import { useState } from "react";

export default function VerticalTab() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full pt-4 px-64">
      <div className="w-1/5 float-left">
        <ul className="p-0">
          <li
            className={`text-2xl font-light list-none py-4 px-2 cursor-pointer relative border-r-2 font-sans 
            ${
              activeTab === 1
                ? "bg-blue-500 text-black"
                : "bg-transparent text-black"
            } 
            transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white`}
            onClick={() => setActiveTab(1)}
          >
            Web Platforms
          </li>
          <li
            className={`text-2xl font-light list-none py-4 px-2 cursor-pointer relative border-r-2 font-sans 
            ${
              activeTab === 2
                ? "bg-blue-500 text-black"
                : "bg-transparent text-black"
            } 
            transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white`}
            onClick={() => setActiveTab(2)}
          >
            Mobile Apps
          </li>
          <li
            className={`text-2xl font-light list-none py-4 px-2 cursor-pointer relative border-r-2 font-sans 
            ${
              activeTab === 3
                ? "bg-blue-500 text-black"
                : "bg-transparent text-black"
            } 
            transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white`}
            onClick={() => setActiveTab(3)}
          >
            SMM
          </li>
          <li
            className={`text-2xl font-light list-none py-4 px-2 cursor-pointer relative border-r-2 font-sans 
            ${
              activeTab === 4
                ? "bg-blue-500 text-black"
                : "bg-transparent text-black"
            } 
            transition-all duration-300 ease-in-out hover:bg-blue-400 hover:text-white`}
            onClick={() => setActiveTab(4)}
          >
            Logo
          </li>
        </ul>
      </div>

      <div className="float-right w-4/5 pt-5">
        {activeTab === 1 && (
          <div>
            <p className="text-black px-40 text-2xl font-semibold font-sans">
              Web Platform Content
            </p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <p className="text-black px-40 text-2xl font-semibold font-sans">
              Mobile App Content
            </p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <p className="text-black px-40 text-2xl font-semibold font-sans">
              SMM Content
            </p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <p className="text-black px-40 text-2xl font-semibold font-sans">
              Logo Content
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
