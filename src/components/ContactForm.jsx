import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-6 sm:px-12 lg:px-24 py-16 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl lg:text-7xl font-semibold text-yellow-500 mb-6">
          Got an Idea for <br/> your Project?
        </h2>
        <p className="text-4xl lg:text-4xl font-light text-black leading-relaxed">
          We’d love to learn more about <br/> you and what we can design <br/> and build
          together.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-center">
            <a href="mailto:info@cubix.co" className="text-4xl lg:text-2xl text-black leading-relaxed">
              info@akc.com
            </a>
          </div>
          <div className="flex items-center">
            <a href="tel:8669782220" className="text-4xl lg:text-2xl text-black leading-relaxed">
              866-978-2220
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mr-32">
        <form className="w-full space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          {/* Email and Phone Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-medium text-lg rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
