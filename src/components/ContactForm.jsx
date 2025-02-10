import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setResponseMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:3003/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setResponseMessage(result.message || "Failed to send message.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between px-6 sm:px-12 lg:px-24 py-16 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-sky-300 mb-6">
          Got an Idea for <br /> your Project?
        </h2>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black leading-relaxed">
          We’d love to learn more about <br /> you and what we can design <br /> and build
          together.
        </p>

        <div className="mt-10 space-y-4">
          <div className="flex items-center">
            <a href="mailto:info@akc.com" className="text-2xl sm:text-3xl lg:text-2xl text-black leading-relaxed">
              info@akc.com
            </a>
          </div>
          <div className="flex items-center">
            <a href="tel:7136322084" className="text-2xl sm:text-3xl lg:text-2xl text-black leading-relaxed">
              713-632-2084 <br />
              806-216-7666
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
          </div>

          {/* Email and Phone Fields */}
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>
            <div className="flex-1 mt-6 sm:mt-0">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full py-3 font-medium text-lg rounded-md transition ${
                loading ? "bg-gray-600 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <p className="text-center text-sm font-medium text-red-500">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
