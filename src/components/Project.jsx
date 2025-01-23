import React, { useState, useMemo, useCallback } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const projectData = [
  { id: 1, category: 'Logo and Branding', image: '/assets/1.jpg', description: 'Logo and Branding' },
  { id: 2, category: 'Logo and Branding', image: '/assets/5.jpg', description: 'Logo and Branding' },
  { id: 3, category: 'Logo and Branding', image: '/assets/3.jpg', description: 'Logo and Branding' },
  { id: 4, category: 'Logo and Branding', image: '/assets/2.jpg', description: 'Logo and Branding' },
  { id: 5, category: 'Logo and Branding', image: '/assets/6.jpg', description: 'Logo and Branding' },
  { id: 6, category: 'Logo and Branding', image: '/assets/4.jpg', description: 'Logo and Branding' },
  { id: 7, category: 'Web Designs', image: '/assets/web1.jpg', description: 'Web Designs' },
  { id: 8, category: 'Web Designs', image: '/assets/web2.jpg', description: 'Web Designs' },
  { id: 9, category: 'Web Designs', image: '/assets/web3.jpg', description: 'Web Designs' },
  { id: 10, category: 'Web Designs', image: '/assets/web4.jpg', description: 'Web Designs' },
  { id: 11, category: 'Web Designs', image: '/assets/web5.jpg', description: 'Web Designs' },
  { id: 12, category: 'Web Designs', image: '/assets/web6.jpg', description: 'Web Designs' },
  { id: 13, category: 'Mobile Application', image: '/assets/mb1.jpg', description: 'Mobile Application' },
  { id: 14, category: 'Mobile Application', image: '/assets/mb2.jpg', description: 'Mobile Application' },
  { id: 15, category: 'Mobile Application', image: '/assets/mb3.jpg', description: 'Mobile Application' },
  { id: 16, category: 'Mobile Application', image: '/assets/mb4.jpg', description: 'Mobile Application' },
  { id: 17, category: 'Mobile Application', image: '/assets/mb5.jpg', description: 'Mobile Application' },
  { id: 18, category: 'Mobile Application', image: '/assets/mb6.jpg', description: 'Mobile Application' },
];

const categories = ['All Projects', 'Web Designs', 'Logo and Branding', 'Mobile Application'];

function Project() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [modalImage, setModalImage] = useState(null);

  // UseMemo for filtered projects
  const filteredProjects = useMemo(() => {
    return activeTab === 'All Projects'
      ? projectData
      : projectData.filter((project) => project.category === activeTab);
  }, [activeTab]);

  // Handlers with useCallback
  const handleProjectClick = useCallback((image) => {
    setModalImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-semibold text-left text-sky-300 py-16">Our Recent Projects</h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-colors duration-300 text-lg font-normal ${
                activeTab === category ? 'text-black bg-gradient-to-r from-sky-300 to-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(({ id, image, description }) => (
            <div
              key={id}
              className="p-4 bg-white border-2 border-gray-200 rounded-lg group cursor-pointer"
              onClick={() => handleProjectClick(image)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={description}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  <FaArrowRight className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{description}</h3>
            </div>
          ))}
        </div>

        {/* All Projects Button */}
        <div className="mt-8">
          <button className="px-6 py-2 text-white bg-black rounded-full hover:bg-black/80 transition-colors duration-300">
            All Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-white p-4 rounded-lg max-w-full max-h-full w-[90%] h-[90%]">
            <button onClick={closeModal} className="absolute top-2 right-2 text-black text-xl font-bold">
              ✖️
            </button>
            <img src={modalImage} alt="Full View" className="object-contain w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
